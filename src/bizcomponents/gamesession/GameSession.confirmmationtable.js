
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './GameSession.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '9' },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD') },
  { title: '结束时间', dataIndex: 'endTime', render: (text, record) => moment(record.endTime).format('YYYY-MM-DD') },
  { title: '场次开始后可售票时长', debugtype: 'int', dataIndex: 'sessionReservation', width: '6' },
  { title: '余票', debugtype: 'int', dataIndex: 'inventory', width: '5' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '6' },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.id : '暂无') },
]

class GameSessionConfirmationTable extends PureComponent {
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

export default GameSessionConfirmationTable

