import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './RepairingQuotation.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '维修报价描述',
    debugtype: 'string',
    dataIndex: 'repairingQuotationDescription',
    width: '18',
  },
  {
    title: '服务',
    dataIndex: 'service',
    render: (text, record) => (record.service ? record.service.id : '暂无'),
  },
]

class RepairingQuotationViewTable extends PureComponent {
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

export default RepairingQuotationViewTable
