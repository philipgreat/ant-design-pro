
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './BookCopyStatus.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '地位的名字', debugtype: 'string', dataIndex: 'statusName', width: '6' },
  { title: '状态码', debugtype: 'string', dataIndex: 'statusCode', width: '13' },
  { title: '状态描述', debugtype: 'string', dataIndex: 'statusDescription', width: '15' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
  { title: '可以借', dataIndex: 'canBorrow', render: (text, record) => (record.canBorrow ? '是' : '否') },
  { title: '需要检查股票', dataIndex: 'needCheckStock', render: (text, record) => (record.needCheckStock ? '是' : '否') },
]

class BookCopyStatusConfirmationTable extends PureComponent {
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

export default BookCopyStatusConfirmationTable

