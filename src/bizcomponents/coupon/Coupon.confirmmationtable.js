
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Coupon.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '优惠券名称', debugtype: 'string', dataIndex: 'couponName', width: '9' },
  { title: '优惠券的折扣', debugtype: 'money', dataIndex: 'couponDiscount', width: '10' },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.id : '暂无') },
  { title: '线上订单号', dataIndex: 'onlineOrder', render: (text, record) => (record.onlineOrder ? record.onlineOrder.id : '暂无') },
  { title: '线下门店订单', dataIndex: 'offlineStoreOrder', render: (text, record) => (record.offlineStoreOrder ? record.offlineStoreOrder.id : '暂无') },
]

class CouponConfirmationTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default CouponConfirmationTable

