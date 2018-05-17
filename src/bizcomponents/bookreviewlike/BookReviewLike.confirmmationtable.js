
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './BookReviewLike.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书评', dataIndex: 'bookReview', render: (text, record) => (record.bookReview ? record.bookReview.id : '暂无') },
  { title: '回答者', dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.id : '暂无') },
  { title: '如发布日期时间', dataIndex: 'likePublishDatetime', render: (text, record) => moment(record.likePublishDatetime).format('YYYY-MM-DD') },
  { title: '喜欢的类型', debugtype: 'string', dataIndex: 'likeType', width: '6' },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '17' },
]

class BookReviewLikeConfirmationTable extends PureComponent {
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

export default BookReviewLikeConfirmationTable

