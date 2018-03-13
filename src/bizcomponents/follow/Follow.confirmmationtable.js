import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Follow.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '用户',
    dataIndex: 'user',
    render: (text, record) => (record.user ? record.user.id : '暂无'),
  },
  {
    title: '关注的社区用户',
    debugtype: 'string',
    dataIndex: 'followId',
    width: '12',
  },
  {
    title: '添加时间',
    dataIndex: 'addingTime',
    render: (text, record) => moment(record.addingTime).format('YYYY-MM-DD'),
  },
]

class FollowConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项
              </p>
            }
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default FollowConfirmationTable
