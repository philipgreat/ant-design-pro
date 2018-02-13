import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServiceCompanyAccount.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '服务订单号',
    debugtype: 'string',
    dataIndex: 'serviceOrderNumber',
    width: '14',
  },
  {
    title: '服务订单代码',
    debugtype: 'string',
    dataIndex: 'serviceOrderCode',
    width: '9',
  },
  {
    title: '服务订单名称',
    debugtype: 'string',
    dataIndex: 'serviceOrderName',
    width: '8',
  },
  {
    title: '服务完成日期时间',
    dataIndex: 'serviceFulfilledDatetime',
    render: (text, record) =>
      moment(record.serviceFulfilledDatetime).format('YYYY-MM-DD'),
  },
  {
    title: '合同标识',
    debugtype: 'string',
    dataIndex: 'contractId',
    width: '13',
  },
  {
    title: '合同价格的价值',
    debugtype: 'money',
    dataIndex: 'contractPriceValue',
    width: '10',
  },
  {
    title: '合同价格类型',
    debugtype: 'string',
    dataIndex: 'contractPriceType',
    width: '8',
  },
  {
    title: '服务人员的名字',
    debugtype: 'string',
    dataIndex: 'serviceWorkerName',
    width: '7',
  },
  {
    title: '服务公司名称',
    debugtype: 'string',
    dataIndex: 'serviceCompanyName',
    width: '27',
  },
  {
    title: '主要订单Id',
    debugtype: 'string',
    dataIndex: 'mainOrderId',
    width: '28',
  },
  {
    title: '商户',
    dataIndex: 'merchant',
    render: (text, record) => (record.merchant ? record.merchant.id : '暂无'),
  },
  {
    title: '服务人员',
    dataIndex: 'responsibleWorker',
    render: (text, record) =>
      record.responsibleWorker ? record.responsibleWorker.id : '暂无',
  },
  {
    title: '对账单',
    dataIndex: 'account',
    render: (text, record) => (record.account ? record.account.id : '暂无'),
  },
]

class ServiceCompanyAccountConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项
              </p>
            }
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 2010 }}
        />
      </div>
    )
  }
}

export default ServiceCompanyAccountConfirmationTable
