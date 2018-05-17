
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './BorrowingExpiredSku.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '借款人', dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.id : '暂无') },
  { title: '书副本', dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.id : '暂无') },
  { title: '书', dataIndex: 'book', render: (text, record) => (record.book ? record.book.id : '暂无') },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '8' },
  { title: '贷款商店', dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.id : '暂无') },
  { title: '贷款Datetime', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD') },
  { title: '返回商店', dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.id : '暂无') },
  { title: '返回日期时间', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD') },
  { title: '天到期', debugtype: 'int', dataIndex: 'expiredDays', width: '5' },
  { title: '过期的费用', debugtype: 'money', dataIndex: 'expiredFee', width: '9' },
  { title: '成本付款状态', debugtype: 'string', dataIndex: 'costPaymentStatus', width: '7' },
  { title: '借贷历史', dataIndex: 'borrowingHistory', render: (text, record) => (record.borrowingHistory ? record.borrowingHistory.id : '暂无') },
]

class BorrowingExpiredSkuConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 1590 }}
        />
      </div>
    )
  }
}

export default BorrowingExpiredSkuConfirmationTable

