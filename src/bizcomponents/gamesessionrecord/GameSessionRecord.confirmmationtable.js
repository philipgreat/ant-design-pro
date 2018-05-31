
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './GameSessionRecord.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '门店名字', debugtype: 'string', dataIndex: 'storeName', width: '7' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '9' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '结果', debugtype: 'string', dataIndex: 'result', width: '6' },
  { title: '玩家数', debugtype: 'int', dataIndex: 'playerCount', width: '6' },
  { title: '计划开始时间', dataIndex: 'planStartTime', render: (text, record) => moment(record.planStartTime).format('YYYY-MM-DD') },
  { title: '计划结束时间', dataIndex: 'planEndTime', render: (text, record) => moment(record.planEndTime).format('YYYY-MM-DD') },
  { title: '实际开始时间', dataIndex: 'actualStartTime', render: (text, record) => moment(record.actualStartTime).format('YYYY-MM-DD') },
  { title: '实际结束时间', dataIndex: 'actualEndTime', render: (text, record) => moment(record.actualEndTime).format('YYYY-MM-DD') },
  { title: '是否有Bug', dataIndex: 'bugFound', render: (text, record) => (record.bugFound ? '是' : '否') },
  { title: '游戏场次运行记录', debugtype: 'string', dataIndex: 'gameSessionComment', width: '6' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.id : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.id : '暂无') },
]

class GameSessionRecordConfirmationTable extends PureComponent {
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
          scroll={{ x: 2295 }}
        />
      </div>
    )
  }
}

export default GameSessionRecordConfirmationTable

