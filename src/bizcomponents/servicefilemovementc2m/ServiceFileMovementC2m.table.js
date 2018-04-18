
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './ServiceFileMovementC2m.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/serviceFileMovementC2m/${text}/dashboard`}>{text}</Link>) },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? (<Link to={`/vehicleServiceCompanyEmployee/${record.responsibleWorker.id}/dashboard`}>{record.responsibleWorker.displayName}</Link>) : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '42' },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '交接检查码', debugtype: 'string', dataIndex: 'transferVerifyCode', width: '10' },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? (<Link to={`/vehicleInspectionOrder/${record.mainOrder.id}/dashboard`}>{record.mainOrder.displayName}</Link>) : '暂无') },
  { title: '服务类型', debugtype: 'string', dataIndex: 'movementPurpose', width: '29' },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '7' },
  { title: '联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobileNumber', width: '15' },
  { title: '通知日期时间', dataIndex: 'notifyDatetime', render: (text, record) => moment(record.notifyDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '通知地址', debugtype: 'string', dataIndex: 'notifyAddress', width: '18' },
  { title: '备注', debugtype: 'string', dataIndex: 'notifyComment', width: '95' },
  { title: '交接检查结果', debugtype: 'string', dataIndex: 'handoverResult', width: '6' },
  { title: '交接检查备注', debugtype: 'string_longtext', dataIndex: 'handoverResultComment', width: '10' },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? (<Link to={`/vehicleServiceCompany/${record.merchant.id}/dashboard`}>{record.merchant.displayName}</Link>) : '暂无') },

]

class ServiceFileMovementC2mTable extends PureComponent {
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
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项 
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </p>
            )}
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
          scroll={{ x: 4365 }}
        />
      </div>
    )
  }
}

export default ServiceFileMovementC2mTable

