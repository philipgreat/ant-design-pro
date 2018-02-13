import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './InsuranceServiceAccount.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '车牌号码',
    debugtype: 'string',
    dataIndex: 'vehicleLicensePlateNumber',
    width: '11',
  },
  {
    title: '保险订单号',
    debugtype: 'string',
    dataIndex: 'insuranceOrderNumber',
    width: '13',
  },
  {
    title: '员工的名字',
    debugtype: 'string',
    dataIndex: 'employeeName',
    width: '6',
  },
  {
    title: '保险产品名称',
    debugtype: 'string',
    dataIndex: 'insuranceName',
    width: '10',
  },
  {
    title: '保险承保方',
    debugtype: 'string',
    dataIndex: 'insuranceVendor',
    width: '11',
  },
  {
    title: '保险价格',
    debugtype: 'money',
    dataIndex: 'insurancePrice',
    width: '9',
  },
  {
    title: '保单号码',
    debugtype: 'string',
    dataIndex: 'insuranceNumber',
    width: '19',
  },
  {
    title: '保险秩序Datetime',
    dataIndex: 'insuranceOrderDatetime',
    render: (text, record) =>
      moment(record.insuranceOrderDatetime).format('YYYY-MM-DD'),
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

class InsuranceServiceAccountConfirmationTable extends PureComponent {
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
          scroll={{ x: 1860 }}
        />
      </div>
    )
  }
}

export default InsuranceServiceAccountConfirmationTable
