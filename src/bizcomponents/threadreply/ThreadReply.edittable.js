import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './ThreadReply.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '回复时间',
    dataIndex: 'replyTime',
    render: (text, record) => moment(record.replyTime).format('YYYY-MM-DD'),
  },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '22' },
  {
    title: '应答者',
    dataIndex: 'replier',
    render: (text, record) => (record.replier ? record.replier.id : '暂无'),
  },
  {
    title: '主贴',
    dataIndex: 'thread',
    render: (text, record) => (record.thread ? record.thread.id : '暂无'),
  },
  {
    title: '当前用户已点赞',
    dataIndex: 'likeByCurrentUser',
    render: (text, record) => (record.likeByCurrentUser ? '是' : '否'),
  },
]

class ThreadReplyEditTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props
    return (
      <div className={styles.standardTable}>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 800 }}
        />
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
      </div>
    )
  }
}

export default ThreadReplyEditTable
