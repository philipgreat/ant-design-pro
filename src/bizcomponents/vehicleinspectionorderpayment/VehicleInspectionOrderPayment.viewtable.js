import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './VehicleInspectionOrderPayment.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '支付方式',
    debugtype: 'string',
    dataIndex: 'paymentMethod',
    width: '7',
  },
  {
    title: '应付款',
    debugtype: 'money',
    dataIndex: 'paymentAmount',
    width: '11',
  },
  {
    title: '付款状态',
    debugtype: 'string',
    dataIndex: 'paymentStatus',
    width: '8',
  },
  {
    title: '主订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
]

class VehicleInspectionOrderPaymentViewTable extends PureComponent {
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

export default VehicleInspectionOrderPaymentViewTable
