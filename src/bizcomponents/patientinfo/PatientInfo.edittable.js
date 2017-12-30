

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input } from 'antd'
import styles from './PatientInfo.table.less'
import ImagePreview from '../../components/ImagePreview'



const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6',render: (text, record) => (<Input value={text} placeholder={"名称"}/>)  },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '6',render: (text, record) => (<Input value={text} placeholder={"昵称"}/>)  },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender', width: '5',render: (text, record) => (<Input value={text} placeholder={"性别"}/>)  },
  { title: '生日', dataIndex: 'birthday', render: (text, record) => moment(record.birthday).format('YYYY-MM-DD') },
  { title: '佩戴设备类型', debugtype: 'string', dataIndex: 'wearDeviceType', width: '8',render: (text, record) => (<Input value={text} placeholder={"佩戴设备类型"}/>)  },
  { title: '磨损的开始时间', dataIndex: 'wearStartTime', render: (text, record) => moment(record.wearStartTime).format('YYYY-MM-DD') },
  { title: '康复计划', debugtype: 'string', dataIndex: 'recoverPlan', width: '15',render: (text, record) => (<Input value={text} placeholder={"康复计划"}/>)  },
  { title: '复苏开始时间', dataIndex: 'recoverStartTime', render: (text, record) => moment(record.recoverStartTime).format('YYYY-MM-DD') },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.id : '暂无') },
]

class PatientInfoEditTable extends PureComponent {
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

export default PatientInfoEditTable

