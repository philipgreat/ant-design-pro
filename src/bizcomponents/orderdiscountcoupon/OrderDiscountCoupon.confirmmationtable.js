import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './OrderDiscountCoupon.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '优惠券名称',
    debugtype: 'string',
    dataIndex: 'couponTitle',
    width: '10',
  },
  {
    title: '优惠金额',
    debugtype: 'money',
    dataIndex: 'discountAmount',
    width: '10',
  },
  {
    title: '结束日期',
    dataIndex: 'endDate',
    render: (text, record) => moment(record.endDate).format('YYYY-MM-DD'),
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD'),
  },
  {
    title: '优惠券状态',
    debugtype: 'string',
    dataIndex: 'couponStatus',
    width: '7',
  },
  {
    title: '优惠券分享随机码',
    debugtype: 'string',
    dataIndex: 'shareCode',
    width: '11',
  },
  {
    title: '客户',
    dataIndex: 'customer',
    render: (text, record) => (record.customer ? record.customer.id : '暂无'),
  },
  {
    title: '年检订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) => (record.platform ? record.platform.id : '暂无'),
  },
]

class OrderDiscountCouponConfirmationTable extends PureComponent {
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
          scroll={{ x: 1155 }}
        />
      </div>
    )
  }
}

export default OrderDiscountCouponConfirmationTable
