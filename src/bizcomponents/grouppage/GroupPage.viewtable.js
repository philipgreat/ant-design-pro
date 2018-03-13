import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './GroupPage.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '7' },
  {
    title: '目前的组名',
    debugtype: 'string',
    dataIndex: 'currentGroupName',
    width: '9',
  },
  {
    title: '社区',
    dataIndex: 'community',
    render: (text, record) => (record.community ? record.community.id : '暂无'),
  },
]

class GroupPageViewTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
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
      </div>
    )
  }
}

export default GroupPageViewTable
