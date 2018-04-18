import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './VehicleRepairingAllowance.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '补贴项名称',
    debugtype: 'string',
    dataIndex: 'allowanceTitle',
    width: '9',
  },
  {
    title: '补贴代码',
    debugtype: 'string',
    dataIndex: 'allowanceCode',
    width: '23',
  },
  {
    title: '补贴金额',
    debugtype: 'money',
    dataIndex: 'allowanceAmount',
    width: '10',
  },
  {
    title: '服务',
    dataIndex: 'service',
    render: (text, record) => (record.service ? record.service.id : '暂无'),
  },
]

class VehicleRepairingAllowanceViewTable extends PureComponent {
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

export default VehicleRepairingAllowanceViewTable
