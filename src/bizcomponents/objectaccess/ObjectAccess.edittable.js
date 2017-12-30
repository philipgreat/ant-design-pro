

import React, { PureComponent } from 'react'
import moment from 'moment'
import {Form,Button, Table, Alert, Badge,Input } from 'antd'
import styles from './ObjectAccess.table.less'
import ImagePreview from '../../components/ImagePreview'



const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '显示名称', debugtype: 'string', dataIndex: 'displayName', width: '11',render: (text, record) => (<Input value={text} placeholder={"显示名称"}/>)  },
  { title: '对象类型', debugtype: 'string', dataIndex: 'objectType', width: '32',render: (text, record) => (<Input value={text} placeholder={"对象类型"}/>)  },
  { title: '列表1', debugtype: 'string', dataIndex: 'list1', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表1"}/>)  },
  { title: '列表2', debugtype: 'string', dataIndex: 'list2', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表2"}/>)  },
  { title: '列表3', debugtype: 'string', dataIndex: 'list3', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表3"}/>)  },
  { title: '列表4', debugtype: 'string', dataIndex: 'list4', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表4"}/>)  },
  { title: '列表5', debugtype: 'string', dataIndex: 'list5', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表5"}/>)  },
  { title: '列表6', debugtype: 'string', dataIndex: 'list6', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表6"}/>)  },
  { title: '列表7', debugtype: 'string', dataIndex: 'list7', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表7"}/>)  },
  { title: '列表8', debugtype: 'string', dataIndex: 'list8', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表8"}/>)  },
  { title: '列表9', debugtype: 'string', dataIndex: 'list9', width: '24',render: (text, record) => (<Input value={text} placeholder={"列表9"}/>)  },
  { title: '应用程序', dataIndex: 'app', render: (text, record) => (record.app ? record.app.id : '暂无') },
]

class ObjectAccessEditTable extends PureComponent {
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
          scroll={{ x: 3405 }}
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

export default ObjectAccessEditTable

