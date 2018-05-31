
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './TicketPrintingHistory.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '14' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '门票打印记录', dataIndex: 'ticketPrinting', render: (text, record) => (record.ticketPrinting ? record.ticketPrinting.id : '暂无') },
  { title: '打印日期', dataIndex: 'printDatetime', render: (text, record) => moment(record.printDatetime).format('YYYY-MM-DD') },
  { title: '操作员', dataIndex: 'operator', render: (text, record) => (record.operator ? record.operator.id : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.id : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.id : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '18' },
]

class TicketPrintingHistoryConfirmationTable extends PureComponent {
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
          scroll={{ x: 1470 }}
        />
      </div>
    )
  }
}

export default TicketPrintingHistoryConfirmationTable

