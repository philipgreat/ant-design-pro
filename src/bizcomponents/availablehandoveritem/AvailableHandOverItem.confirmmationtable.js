import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './AvailableHandOverItem.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '检查项目名称',
    debugtype: 'string',
    dataIndex: 'checkItemName',
    width: '11',
  },
  {
    title: '检查项目描述',
    debugtype: 'string_longtext',
    dataIndex: 'checkItemDescription',
    width: '10',
  },
  {
    title: '产品名称',
    dataIndex: 'product',
    render: (text, record) => (record.product ? record.product.id : '暂无'),
  },
]

class AvailableHandOverItemConfirmationTable extends PureComponent {
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

export default AvailableHandOverItemConfirmationTable
