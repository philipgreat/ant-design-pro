

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input } from 'antd'
import styles from './Fan.table.less'
import ImagePreview from '../../components/ImagePreview'



const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.id : '暂无') },
  { title: '粉丝的ID', debugtype: 'string', dataIndex: 'fanId', width: '12',render: (text, record) => (<Input value={text} placeholder={"粉丝的ID"}/>)  },
  { title: '添加时间', dataIndex: 'addingTime', render: (text, record) => moment(record.addingTime).format('YYYY-MM-DD') },
]

class FanEditTable extends PureComponent {
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

export default FanEditTable

