
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './OfflineStoreOrder.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '13' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '玩家数', debugtype: 'int', dataIndex: 'playerCount', width: '5' },
  { title: '应付金额', debugtype: 'money', dataIndex: 'originalAmount', width: '11' },
  { title: '实际金额', debugtype: 'money', dataIndex: 'actualAmount', width: '11' },
  { title: '调整应付金额', debugtype: 'string', dataIndex: 'adjustPayableAmount', width: '10' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '折扣', debugtype: 'money', dataIndex: 'discount', width: '10' },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus', width: '7' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.id : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.id : '暂无') },
  { title: '游戏门票', dataIndex: 'gameTicket', render: (text, record) => (record.gameTicket ? record.gameTicket.id : '暂无') },
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod', width: '7' },
  { title: '付款凭证', debugtype: 'string', dataIndex: 'paymentEvidence', width: '13' },
  { title: '付款凭证图片', dataIndex: 'paymentEvidenceImage', render: (text, record) => <ImagePreview imageLocation={record.paymentEvidenceImage} /> },
  { title: '门票打印', dataIndex: 'ticketPrinted', render: (text, record) => (record.ticketPrinted ? '是' : '否') },
  { title: '兑换手机', debugtype: 'string_china_mobile_phone', dataIndex: 'redeemPhone', width: '15' },
  { title: '兑换验证码', debugtype: 'string', dataIndex: 'redeemCode', width: '13' },
]

class OfflineStoreOrderConfirmationTable extends PureComponent {
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
          scroll={{ x: 2700 }}
        />
      </div>
    )
  }
}

export default OfflineStoreOrderConfirmationTable

