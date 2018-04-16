import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './VehicleServiceCompanyEmployee.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  {
    title: 'ID',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/vehicleServiceCompanyEmployee/${text}/dashboard`}>
        {text}
      </Link>
    ),
  },
  {
    title: '员工姓名',
    debugtype: 'string',
    dataIndex: 'employeeName',
    width: '7',
  },
  {
    title: '证件照片',
    dataIndex: 'profileImage',
    render: (text, record) => (
      <ImagePreview imageTitle="证件照片" imageLocation={record.profileImage} />
    ),
  },
  {
    title: '商户名称',
    debugtype: 'string',
    dataIndex: 'companyName',
    width: '27',
  },
  {
    title: '手机号码',
    debugtype: 'string_china_mobile_phone',
    dataIndex: 'mobileNumber',
    width: '15',
  },
  {
    title: '性别',
    debugtype: 'string_gender',
    dataIndex: 'gender',
    width: '5',
  },
  {
    title: '工作状态',
    debugtype: 'string',
    dataIndex: 'availableState',
    width: '8',
  },
  {
    title: '无犯罪记录证明',
    dataIndex: 'innocentEvidenceImage',
    render: (text, record) => (
      <ImagePreview
        imageTitle="无犯罪记录证明"
        imageLocation={record.innocentEvidenceImage}
      />
    ),
  },
  {
    title: '身份证号码',
    debugtype: 'string',
    dataIndex: 'identityCardNumber',
    width: '22',
  },
  {
    title: '商户',
    dataIndex: 'company',
    render: (text, record) =>
      record.company ? (
        <Link to={`/vehicleServiceCompany/${record.company.id}/dashboard`}>
          {record.company.displayName}
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
    title: '是否可以移车',
    dataIndex: 'availableMoveCar',
    render: (text, record) => (record.availableMoveCar ? '是' : '否'),
  },
  {
    title: '是否可以检车',
    dataIndex: 'availableInspectionCar',
    render: (text, record) => (record.availableInspectionCar ? '是' : '否'),
  },
  {
    title: '是否可以修车',
    dataIndex: 'availableRepairCar',
    render: (text, record) => (record.availableRepairCar ? '是' : '否'),
  },
  {
    title: '资格认定',
    dataIndex: 'qualification',
    render: (text, record) =>
      record.qualification ? (
        <Link
          to={`/companyEmployeeQualification/${
            record.qualification.id
          }/dashboard`}
        >
          {record.qualification.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '服务状态',
    dataIndex: 'serving',
    render: (text, record) =>
      record.serving ? (
        <Link to={`/companyEmployeeServing/${record.serving.id}/dashboard`}>
          {record.serving.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '服务终止',
    dataIndex: 'termination',
    render: (text, record) =>
      record.termination ? (
        <Link
          to={`/companyEmployeeTermination/${record.termination.id}/dashboard`}
        >
          {record.termination.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '当前状态',
    debugtype: 'string',
    dataIndex: 'currentStatus',
    width: '14',
  },
]

class VehicleServiceCompanyEmployeeTable extends PureComponent {
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
          scroll={{ x: 2280 }}
        />
      </div>
    )
  }
}

export default VehicleServiceCompanyEmployeeTable
