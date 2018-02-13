import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './VehicleRepairingPayment.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '原始金额',
    debugtype: 'money',
    dataIndex: 'originalAmount',
    width: '11',
  },
  {
    title: '实际的数量',
    debugtype: 'money',
    dataIndex: 'actualAmount',
    width: '11',
  },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '8' },
  {
    title: '微信订单Id',
    debugtype: 'string',
    dataIndex: 'wechatOrderId',
    width: '36',
  },
  {
    title: '微信提前支付Id',
    debugtype: 'string',
    dataIndex: 'wechatPrepayId',
    width: '25',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    render: (text, record) =>
      moment(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '修车服务',
    dataIndex: 'serviceVehicleRepairing',
    render: (text, record) =>
      record.serviceVehicleRepairing
        ? record.serviceVehicleRepairing.id
        : '暂无',
  },
]

class VehicleRepairingPaymentViewTable extends PureComponent {
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
          scroll={{ x: 1605 }}
        />
      </div>
    )
  }
}

export default VehicleRepairingPaymentViewTable
