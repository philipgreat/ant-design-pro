import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './SecUserBlocking.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '17' },
  {
    title: '块时间',
    dataIndex: 'blockTime',
    render: (text, record) =>
      moment(record.blockTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '28' },
]

class SecUserBlockingViewTable extends PureComponent {
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

export default SecUserBlockingViewTable
