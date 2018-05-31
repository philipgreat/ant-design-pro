
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './OnlineOrderRedeemHistory.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
  { title: '线上订单号', dataIndex: 'onlineOrder', render: (text, record) => (record.onlineOrder ? record.onlineOrder.id : '暂无') },
  { title: '验证时间', dataIndex: 'verifyDatetime', render: (text, record) => moment(record.verifyDatetime).format('YYYY-MM-DD') },
  { title: '兑换时间', dataIndex: 'redeemDatetime', render: (text, record) => moment(record.redeemDatetime).format('YYYY-MM-DD') },
  { title: '兑换手机', debugtype: 'string_china_mobile_phone', dataIndex: 'redeemPhone', width: '15' },
  { title: '兑换验证码', debugtype: 'string', dataIndex: 'redeemCode', width: '13' },
  { title: '兑换状态', debugtype: 'string', dataIndex: 'redeemStatus', width: '7' },
]

class OnlineOrderRedeemHistoryConfirmationTable extends PureComponent {
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

export default OnlineOrderRedeemHistoryConfirmationTable

