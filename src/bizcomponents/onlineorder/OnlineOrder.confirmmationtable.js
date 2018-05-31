
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './OnlineOrder.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '13' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '玩家数', debugtype: 'int', dataIndex: 'playerCount', width: '5' },
  { title: '应付金额', debugtype: 'money', dataIndex: 'originalAmount', width: '11' },
  { title: '应付金额', debugtype: 'money', dataIndex: 'payableAmount', width: '11' },
  { title: '兑换手机', debugtype: 'string_china_mobile_phone', dataIndex: 'redeemPhone', width: '15' },
  { title: '兑换验证码', debugtype: 'string', dataIndex: 'redeemCode', width: '13' },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus', width: '7' },
  { title: '折扣', debugtype: 'money', dataIndex: 'discount', width: '10' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.id : '暂无') },
  { title: '场次', dataIndex: 'session', render: (text, record) => (record.session ? record.session.id : '暂无') },
  { title: '游戏门票', dataIndex: 'gameTicket', render: (text, record) => (record.gameTicket ? record.gameTicket.id : '暂无') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.id : '暂无') },
]

class OnlineOrderConfirmationTable extends PureComponent {
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
          scroll={{ x: 2055 }}
        />
      </div>
    )
  }
}

export default OnlineOrderConfirmationTable

