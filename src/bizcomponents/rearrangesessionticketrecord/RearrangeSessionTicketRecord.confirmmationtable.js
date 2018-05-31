
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './RearrangeSessionTicketRecord.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '原游戏名称', debugtype: 'string', dataIndex: 'sourceGameName', width: '9' },
  { title: '原游戏场次日期', dataIndex: 'sourceGameSessionDatetime', render: (text, record) => moment(record.sourceGameSessionDatetime).format('YYYY-MM-DD') },
  { title: '原游戏场次名称', debugtype: 'string', dataIndex: 'sourceGameSessionName', width: '9' },
  { title: '原门票数', debugtype: 'int', dataIndex: 'sourceTicketQuantity', width: '5' },
  { title: '原门票是否已打印', dataIndex: 'sourceTicketPrinted', render: (text, record) => (record.sourceTicketPrinted ? '是' : '否') },
  { title: '原换票手机号', debugtype: 'string_china_mobile_phone', dataIndex: 'sourceRedeemPhone', width: '15' },
  { title: '原换票验证码', debugtype: 'string', dataIndex: 'sourceRedeemCode', width: '13' },
  { title: '原门店名称', debugtype: 'string', dataIndex: 'sourceStoreName', width: '7' },
  { title: '换场游戏名称', debugtype: 'string', dataIndex: 'targetGameName', width: '9' },
  { title: '换场游戏场次日期', dataIndex: 'targetGameSessionDatetime', render: (text, record) => moment(record.targetGameSessionDatetime).format('YYYY-MM-DD') },
  { title: '换场游戏场次名称', debugtype: 'string', dataIndex: 'targetGameSessionName', width: '9' },
  { title: '换场门票数', debugtype: 'int', dataIndex: 'targetTicketQuantity', width: '5' },
  { title: '换场门票是否已打印', dataIndex: 'targetTicketPrinted', render: (text, record) => (record.targetTicketPrinted ? '是' : '否') },
  { title: '换场换票手机', debugtype: 'string_china_mobile_phone', dataIndex: 'targetRedeemPhone', width: '15' },
  { title: '换场换票验证码', debugtype: 'string', dataIndex: 'targetRedeemCode', width: '13' },
  { title: '换场门店名称', debugtype: 'string', dataIndex: 'targetStoreName', width: '7' },
  { title: '换场备注', debugtype: 'string', dataIndex: 'rearrangeComment', width: '13' },
  { title: '原游戏场次', dataIndex: 'sourceGameSession', render: (text, record) => (record.sourceGameSession ? record.sourceGameSession.id : '暂无') },
  { title: '原的游戏', dataIndex: 'sourceGame', render: (text, record) => (record.sourceGame ? record.sourceGame.id : '暂无') },
  { title: '原门店', dataIndex: 'sourceStore', render: (text, record) => (record.sourceStore ? record.sourceStore.id : '暂无') },
  { title: '换场游戏场次', dataIndex: 'targetGameSession', render: (text, record) => (record.targetGameSession ? record.targetGameSession.id : '暂无') },
  { title: '换场游戏', dataIndex: 'targetGame', render: (text, record) => (record.targetGame ? record.targetGame.id : '暂无') },
  { title: '换场门店', dataIndex: 'targetStore', render: (text, record) => (record.targetStore ? record.targetStore.id : '暂无') },
]

class RearrangeSessionTicketRecordConfirmationTable extends PureComponent {
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
          scroll={{ x: 2760 }}
        />
      </div>
    )
  }
}

export default RearrangeSessionTicketRecordConfirmationTable

