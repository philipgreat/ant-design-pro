import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './ThreadLike.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '点赞时间',
    dataIndex: 'likeTime',
    render: (text, record) => moment(record.likeTime).format('YYYY-MM-DD'),
  },
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
]

class ThreadLikeEditTable extends PureComponent {
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

export default ThreadLikeEditTable
