import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './MessageFilter.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  {
    title: '消息计数',
    debugtype: 'int',
    dataIndex: 'messageCount',
    width: '9',
  },
  {
    title: '过滤器健值',
    debugtype: 'string',
    dataIndex: 'filterKey',
    width: '18',
  },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '40' },
  {
    title: '用户',
    dataIndex: 'user',
    render: (text, record) => (record.user ? record.user.id : '暂无'),
  },
]

class MessageFilterViewTable extends PureComponent {
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
          scroll={{ x: 1110 }}
        />
      </div>
    )
  }
}

export default MessageFilterViewTable
