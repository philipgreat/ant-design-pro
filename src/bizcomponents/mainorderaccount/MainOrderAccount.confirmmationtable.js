
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './MainOrderAccount.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '8' },
  { title: '检查价格', debugtype: 'money', dataIndex: 'inspectionPrice', width: '11' },
  { title: '代理服务价格', debugtype: 'money', dataIndex: 'agentServicePrice', width: '11' },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '7' },
  { title: '订单总金额', debugtype: 'money', dataIndex: 'orderTotalAmount', width: '11' },
  { title: '为了促销折扣', debugtype: 'money', dataIndex: 'orderPromotionDiscount', width: '10' },
  { title: '订单优惠折扣', debugtype: 'money', dataIndex: 'orderCouponDiscount', width: '10' },
  { title: '以保险金额', debugtype: 'money', dataIndex: 'orderInsuranceAmount', width: '9' },
  { title: '订单客户付款额', debugtype: 'money', dataIndex: 'orderCustomerPaymentAmount', width: '11' },
  { title: '订单服务数量', debugtype: 'money', dataIndex: 'orderServiceAmount', width: '10' },
  { title: '订单平台平衡', debugtype: 'money', dataIndex: 'orderPlatformBalance', width: '10' },
  { title: '下订单日期时间', dataIndex: 'orderPlacedDatetime', render: (text, record) => moment(record.orderPlacedDatetime).format('YYYY-MM-DD') },
  { title: '订单付款日期时间', dataIndex: 'orderPaymentDatetime', render: (text, record) => moment(record.orderPaymentDatetime).format('YYYY-MM-DD') },
  { title: '订单完成日期时间', dataIndex: 'orderFinishedDatetime', render: (text, record) => moment(record.orderFinishedDatetime).format('YYYY-MM-DD') },
  { title: '主要订单Id', debugtype: 'string', dataIndex: 'mainOrderId', width: '15' },
  { title: '微信订单Id', debugtype: 'string', dataIndex: 'wechatOrderId', width: '36' },
  { title: '微信提前支付Id', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.id : '暂无') },
]

class MainOrderAccountConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 3090 }}
        />
      </div>
    )
  }
}

export default MainOrderAccountConfirmationTable

