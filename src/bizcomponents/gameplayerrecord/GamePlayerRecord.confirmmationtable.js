
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './GamePlayerRecord.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '昵称', debugtype: 'string', dataIndex: 'playerNickName', width: '8' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '9' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '积分', debugtype: 'int', dataIndex: 'gameScore', width: '7' },
  { title: '玩家', dataIndex: 'player', render: (text, record) => (record.player ? record.player.id : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.id : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.id : '暂无') },
]

class GamePlayerRecordConfirmationTable extends PureComponent {
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
          scroll={{ x: 1035 }}
        />
      </div>
    )
  }
}

export default GamePlayerRecordConfirmationTable

