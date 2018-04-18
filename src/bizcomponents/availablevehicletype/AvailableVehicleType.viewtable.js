import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './AvailableVehicleType.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '车辆类型',
    debugtype: 'string',
    dataIndex: 'vehicleType',
    width: '8',
  },
  {
    title: '车辆类型别名',
    debugtype: 'string',
    dataIndex: 'vehicleTypeAlias',
    width: '18',
  },
  {
    title: '可下单',
    dataIndex: 'canPlaceOrder',
    render: (text, record) => (record.canPlaceOrder ? '是' : '否'),
  },
  {
    title: '可6年免检',
    dataIndex: 'canDoExempt',
    render: (text, record) => (record.canDoExempt ? '是' : '否'),
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) => (record.platform ? record.platform.id : '暂无'),
  },
]

class AvailableVehicleTypeViewTable extends PureComponent {
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

export default AvailableVehicleTypeViewTable
