
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './OnlineOrderPayment.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod', width: '7' },
  { title: '应付金额', debugtype: 'money', dataIndex: 'originalAmount', width: '11' },
  { title: '实际金额', debugtype: 'money', dataIndex: 'actualAmount', width: '11' },
  { title: '付款状态', debugtype: 'string', dataIndex: 'paymentStatus', width: '7' },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatMainOrderId', width: '36' },
  { title: '微信Prepay订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD') },
  { title: '线上订单号', dataIndex: 'onlineOrder', render: (text, record) => (record.onlineOrder ? record.onlineOrder.id : '暂无') },
]

class OnlineOrderPaymentConfirmationTable extends PureComponent {
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
          scroll={{ x: 1695 }}
        />
      </div>
    )
  }
}

export default OnlineOrderPaymentConfirmationTable

