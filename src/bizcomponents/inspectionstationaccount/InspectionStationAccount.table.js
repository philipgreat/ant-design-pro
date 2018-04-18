import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './InspectionStationAccount.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '服务单号',
    debugtype: 'string',
    dataIndex: 'serviceOrderNumber',
    width: '14',
  },
  {
    title: '年检类型',
    debugtype: 'string',
    dataIndex: 'inspectionType',
    width: '8',
  },
  {
    title: '车辆信息',
    debugtype: 'string',
    dataIndex: 'inspectionVehicleInfo',
    width: '11',
  },
  {
    title: '检测结果',
    debugtype: 'string',
    dataIndex: 'inspectionFinalResult',
    width: '7',
  },
  {
    title: '检测日期',
    dataIndex: 'inspectionDatetime',
    render: (text, record) =>
      moment(record.inspectionDatetime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '检测站',
    debugtype: 'string',
    dataIndex: 'inspectionStationName',
    width: '11',
  },
  {
    title: '年检订单ID',
    debugtype: 'string',
    dataIndex: 'mainOrderNumber',
    width: '28',
  },
  {
    title: '商户',
    dataIndex: 'merchant',
    render: (text, record) =>
      record.merchant ? (
        <Link to={`/vehicleServiceCompany/${record.merchant.id}/dashboard`}>
          {record.merchant.displayName}
        </Link>
      ) : (
        '暂无'
      ),
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
          {record.responsibleWorker.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '检测站',
    dataIndex: 'inspectionStation',
    render: (text, record) =>
      record.inspectionStation ? (
        <Link
          to={`/inspectionStation/${record.inspectionStation.id}/dashboard`}
        >
          {record.inspectionStation.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '对账单',
    dataIndex: 'account',
    render: (text, record) =>
      record.account ? (
        <Link to={`/account/${record.account.id}/dashboard`}>
          {record.account.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
]

class InspectionStationAccountTable extends PureComponent {
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
          scroll={{ x: 1650 }}
        />
      </div>
    )
  }
}

export default InspectionStationAccountTable
