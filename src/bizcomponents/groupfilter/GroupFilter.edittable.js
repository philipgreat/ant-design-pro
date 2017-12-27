import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './GroupFilter.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '滤波环节',
    debugtype: 'string',
    dataIndex: 'filterLink',
    width: '32',
  },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8' },
  {
    title: '群组页面',
    dataIndex: 'groupPage',
    render: (text, record) => (record.groupPage ? record.groupPage.id : '暂无'),
  },
]

class GroupFilterEditTable extends PureComponent {
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

export default GroupFilterEditTable
