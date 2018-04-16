import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './HandOverChecklistItem.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '检查问题',
    dataIndex: 'question',
    render: (text, record) => (record.question ? record.question.id : '暂无'),
  },
  {
    title: '年检订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
]

class HandOverChecklistItemConfirmationTable extends PureComponent {
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

export default HandOverChecklistItemConfirmationTable
