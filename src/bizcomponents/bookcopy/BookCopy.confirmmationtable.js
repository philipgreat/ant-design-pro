
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './BookCopy.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: 'Wxa Id', debugtype: 'string', dataIndex: 'wxaId', width: '44' },
  { title: '书副本供应商', dataIndex: 'bookCopyVendor', render: (text, record) => (record.bookCopyVendor ? record.bookCopyVendor.id : '暂无') },
  { title: '书副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6' },
  { title: '存储位置', dataIndex: 'locationStore', render: (text, record) => (record.locationStore ? record.locationStore.id : '暂无') },
  { title: '评估价格', debugtype: 'money', dataIndex: 'evaluationPrice', width: '10' },
  { title: '书副本地位', dataIndex: 'bookCopyStatus', render: (text, record) => (record.bookCopyStatus ? record.bookCopyStatus.id : '暂无') },
  { title: '书的信息', dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.id : '暂无') },
]

class BookCopyConfirmationTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default BookCopyConfirmationTable

