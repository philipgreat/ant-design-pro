import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './TaskPage.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '6' },
  {
    title: '当前健值',
    debugtype: 'string',
    dataIndex: 'currentKey',
    width: '25',
  },
  {
    title: '社区',
    dataIndex: 'community',
    render: (text, record) => (record.community ? record.community.id : '暂无'),
  },
]

class TaskPageEditTable extends PureComponent {
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

export default TaskPageEditTable
