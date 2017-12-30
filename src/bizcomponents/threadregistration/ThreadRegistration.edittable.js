

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input } from 'antd'
import styles from './ThreadRegistration.table.less'
import ImagePreview from '../../components/ImagePreview'



const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '主贴', dataIndex: 'thread', render: (text, record) => (record.thread ? record.thread.id : '暂无') },
  { title: '参与者', dataIndex: 'participant', render: (text, record) => (record.participant ? record.participant.id : '暂无') },
  { title: '登记时间', dataIndex: 'registerTime', render: (text, record) => moment(record.registerTime).format('YYYY-MM-DD') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '14',render: (text, record) => (<Input value={text} placeholder={"评论"}/>)  },
]

class ThreadRegistrationEditTable extends PureComponent {
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

export default ThreadRegistrationEditTable

