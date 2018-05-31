
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './NewsContent.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '新闻文本', debugtype: 'string', dataIndex: 'newsText', width: '89' },
  { title: '新闻图片', dataIndex: 'newsImage', render: (text, record) => <ImagePreview imageLocation={record.newsImage} /> },
  { title: '新闻内容的顺序', debugtype: 'int', dataIndex: 'newsContentOrder', width: '5' },
  { title: '新闻', dataIndex: 'news', render: (text, record) => (record.news ? record.news.id : '暂无') },
]

class NewsContentConfirmationTable extends PureComponent {
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
          scroll={{ x: 1365 }}
        />
      </div>
    )
  }
}

export default NewsContentConfirmationTable

