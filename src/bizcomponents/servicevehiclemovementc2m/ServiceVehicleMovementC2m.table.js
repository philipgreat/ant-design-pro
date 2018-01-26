import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './ServiceVehicleMovementC2m.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  {
    title: '序号',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/serviceVehicleMovementC2m/${text}/dashboard`}>{text}</Link>
    ),
  },
  {
    title: '服务状态',
    debugtype: 'string',
    dataIndex: 'serviceStatus',
    width: '7',
  },
  {
    title: '服务人员',
    dataIndex: 'responsibleWorker',
    render: (text, record) =>
      record.responsibleWorker ? (
        <Link
          to={`/vehicleServiceCompanyEmployee/${
            record.responsibleWorker.id
          }/dashboard`}
        >
          {record.responsibleWorker.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '拒收原因',
    debugtype: 'string',
    dataIndex: 'rejectComments',
    width: '37',
  },
  {
    title: '拒收凭证1',
    dataIndex: 'rejectEvidence1',
    render: (text, record) => (
      <ImagePreview
        imageTitle="拒收凭证1"
        imageLocation={record.rejectEvidence1}
      />
    ),
  },
  {
    title: '拒收凭证2',
    dataIndex: 'rejectEvidence2',
    render: (text, record) => (
      <ImagePreview
        imageTitle="拒收凭证2"
        imageLocation={record.rejectEvidence2}
      />
    ),
  },
  {
    title: '拒收凭证3',
    dataIndex: 'rejectEvidence3',
    render: (text, record) => (
      <ImagePreview
        imageTitle="拒收凭证3"
        imageLocation={record.rejectEvidence3}
      />
    ),
  },
  {
    title: '拒收凭证4',
    dataIndex: 'rejectEvidence4',
    render: (text, record) => (
      <ImagePreview
        imageTitle="拒收凭证4"
        imageLocation={record.rejectEvidence4}
      />
    ),
  },
  {
    title: '拒收凭证5',
    dataIndex: 'rejectEvidence5',
    render: (text, record) => (
      <ImagePreview
        imageTitle="拒收凭证5"
        imageLocation={record.rejectEvidence5}
      />
    ),
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    render: (text, record) => moment(record.startTime).format('YYYY-MM-DD'),
  },
  {
    title: '最后的位置',
    debugtype: 'string',
    dataIndex: 'lastLocation',
    width: '17',
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD'),
  },
  {
    title: '主订单',
    dataIndex: 'mainOrder',
    render: (text, record) =>
      record.mainOrder ? (
        <Link to={`/vehicleInspectionOrder/${record.mainOrder.id}/dashboard`}>
          {record.mainOrder.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '移动目的',
    debugtype: 'string',
    dataIndex: 'movementPurpose',
    width: '8',
  },
  {
    title: '联系人姓名',
    debugtype: 'string',
    dataIndex: 'contactName',
    width: '7',
  },
  {
    title: '联系手机号码',
    debugtype: 'string_china_mobile_phone',
    dataIndex: 'contactMobileNumber',
    width: '15',
  },
  {
    title: '商户',
    dataIndex: 'merchant',
    render: (text, record) =>
      record.merchant ? (
        <Link to={`/vehicleServiceCompany/${record.merchant.id}/dashboard`}>
          {record.merchant.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
]

class ServiceVehicleMovementC2mTable extends PureComponent {
  state = {
    selectedRowKeys: [],
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
      })
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows)
    }
    this.setState({ selectedRowKeys })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter)
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], [])
  }

  render() {
    const { selectedRowKeys } = this.state
    // const { data, count, current, owner } = this.props
    const { data, count, current } = this.props

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 20,
      total: count,
      current,
    }

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    }

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 已选择{' '}
                <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  清空
                </a>
              </p>
            }
            type="info"
            showIcon
          />
        </div>
        <Table
          loading={false}
          rowKey={record => record.id}
          rowSelection={rowSelection}
          dataSource={data}
          columns={columns}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          scroll={{ x: 2400 }}
        />
      </div>
    )
  }
}

export default ServiceVehicleMovementC2mTable
