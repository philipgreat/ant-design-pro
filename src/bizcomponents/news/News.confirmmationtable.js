
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './News.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '新闻的名字', debugtype: 'string', dataIndex: 'newsName', width: '27' },
  { title: '新闻的封面图片', dataIndex: 'newsCoverImage', render: (text, record) => <ImagePreview imageLocation={record.newsCoverImage} /> },
  { title: '新闻日期', dataIndex: 'newsDate', render: (text, record) => moment(record.newsDate).format('YYYY-MM-DD') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
]

class NewsConfirmationTable extends PureComponent {
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
          scroll={{ x: 1635 }}
        />
      </div>
    )
  }
}

export default NewsConfirmationTable

