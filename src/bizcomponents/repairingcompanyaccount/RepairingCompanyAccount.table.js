
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './RepairingCompanyAccount.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '修理员', debugtype: 'string', dataIndex: 'repairingWorkerName', width: '36' },
  { title: '修理厂', debugtype: 'string', dataIndex: 'repairingCompanyName', width: '27' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '车辆维修服务单号', debugtype: 'string', dataIndex: 'vehicleRepairingOrderNumber', width: '14' },
  { title: '订单合计', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '补贴金额', dataIndex: 'allowanceAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '应付金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '15' },
  { title: '付款日期时间', dataIndex: 'paymentDatetime', render: (text, record) => moment(record.paymentDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatOrderId', width: '36' },
  { title: '微信预付订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? (<Link to={`/vehicleServiceCompany/${record.merchant.id}/dashboard`}>{record.merchant.id}</Link>) : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? (<Link to={`/vehicleServiceCompanyEmployee/${record.responsibleWorker.id}/dashboard`}>{record.responsibleWorker.id}</Link>) : '暂无') },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? (<Link to={`/account/${record.account.id}/dashboard`}>{record.account.id}</Link>) : '暂无') },

]

class RepairingCompanyAccountTable extends PureComponent {
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
          scroll={{ x: 2700 }}
        />
      </div>
    )
  }
}

export default RepairingCompanyAccountTable

