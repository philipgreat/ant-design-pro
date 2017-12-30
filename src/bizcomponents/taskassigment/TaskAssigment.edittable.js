

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input } from 'antd'
import styles from './TaskAssigment.table.less'
import ImagePreview from '../../components/ImagePreview'



const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20'  },
  { title: '任务', dataIndex: 'task', render: (text, record) => (record.task ? record.task.id : '暂无') },
  { title: '受让人', dataIndex: 'assignee', render: (text, record) => (record.assignee ? record.assignee.id : '暂无') },
  { title: '分配时间', dataIndex: 'assignTime', render: (text, record) => moment(record.assignTime).format('YYYY-MM-DD') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '17'  },
]

class TaskAssigmentEditTable extends PureComponent {
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

export default TaskAssigmentEditTable

