
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Book.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '62' },
  { title: '书的封面', dataIndex: 'bookCover', render: (text, record) => <ImagePreview imageLocation={record.bookCover} /> },
  { title: '书的作者', debugtype: 'string', dataIndex: 'bookAuthor', width: '67' },
  { title: '图书出版者', debugtype: 'string', dataIndex: 'bookPublisher', width: '9' },
  { title: '书的作用', dataIndex: 'bookPubdate', render: (text, record) => moment(record.bookPubdate).format('YYYY-MM-DD') },
  { title: '列出的价格', debugtype: 'money', dataIndex: 'listPrice', width: '10' },
  { title: '书Isbn13', debugtype: 'string', dataIndex: 'bookIsbn13', width: '21' },
  { title: '书Isbn10', debugtype: 'string', dataIndex: 'bookIsbn10', width: '16' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
]

class BookConfirmationTable extends PureComponent {
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
          scroll={{ x: 2235 }}
        />
      </div>
    )
  }
}

export default BookConfirmationTable

