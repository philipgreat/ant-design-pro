import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './MainOrderAccount.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '车牌号码',
    debugtype: 'string',
    dataIndex: 'vehicleLicensePlateNumber',
    width: '11',
  },
  {
    title: '产品名称',
    debugtype: 'string',
    dataIndex: 'productName',
    width: '8',
  },
  {
    title: '年检费用',
    debugtype: 'money',
    dataIndex: 'inspectionPrice',
    width: '11',
  },
  {
    title: '代办服务费用',
    debugtype: 'money',
    dataIndex: 'agentServicePrice',
    width: '11',
  },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  {
    title: '车辆类型',
    debugtype: 'string',
    dataIndex: 'vehicleType',
    width: '7',
  },
  {
    title: '订单总金额',
    debugtype: 'money',
    dataIndex: 'orderTotalAmount',
    width: '11',
  },
  {
    title: '优惠折扣',
    debugtype: 'money',
    dataIndex: 'orderPromotionDiscount',
    width: '10',
  },
  {
    title: '优惠券折扣',
    debugtype: 'money',
    dataIndex: 'orderCouponDiscount',
    width: '10',
  },
  {
    title: '保单费用',
    debugtype: 'money',
    dataIndex: 'orderInsuranceAmount',
    width: '9',
  },
  {
    title: '客户付款总金额',
    debugtype: 'money',
    dataIndex: 'orderCustomerPaymentAmount',
    width: '11',
  },
  {
    title: '商户服务费总金额',
    debugtype: 'money',
    dataIndex: 'orderServiceAmount',
    width: '10',
  },
  {
    title: '平台结余总金额',
    debugtype: 'money',
    dataIndex: 'orderPlatformBalance',
    width: '10',
  },
  {
    title: '下单时间',
    dataIndex: 'orderPlacedDatetime',
    render: (text, record) =>
      moment(record.orderPlacedDatetime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '付款时间',
    dataIndex: 'orderPaymentDatetime',
    render: (text, record) =>
      moment(record.orderPaymentDatetime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '订单完成时间',
    dataIndex: 'orderFinishedDatetime',
    render: (text, record) =>
      moment(record.orderFinishedDatetime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '年检订单ID',
    debugtype: 'string',
    dataIndex: 'mainOrderId',
    width: '15',
  },
  {
    title: '微信订单ID',
    debugtype: 'string',
    dataIndex: 'wechatOrderId',
    width: '36',
  },
  {
    title: '微信预付订单ID',
    debugtype: 'string',
    dataIndex: 'wechatPrepayId',
    width: '25',
  },
  {
    title: '对账单',
    dataIndex: 'account',
    render: (text, record) => (record.account ? record.account.id : '暂无'),
  },
]

class MainOrderAccountViewTable extends PureComponent {
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
          scroll={{ x: 3090 }}
        />
      </div>
    )
  }
}

export default MainOrderAccountViewTable
