
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './GameTicket.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  { title: '人数', debugtype: 'int', dataIndex: 'count', width: '5' },
  { title: '是否是场次票', dataIndex: 'sessionTicket', render: (text, record) => (record.sessionTicket ? '是' : '否') },
  { title: '是否是多人票', dataIndex: 'multiplePlayerTicket', render: (text, record) => (record.multiplePlayerTicket ? '是' : '否') },
  { title: '是否是假期票', dataIndex: 'vacationTicket', render: (text, record) => (record.vacationTicket ? '是' : '否') },
  { title: '是否是学生票', dataIndex: 'studentTicket', render: (text, record) => (record.studentTicket ? '是' : '否') },
  { title: '是否是快速票', dataIndex: 'fastTicket', render: (text, record) => (record.fastTicket ? '是' : '否') },
  { title: '原价', debugtype: 'money', dataIndex: 'listPrice', width: '11' },
  { title: '售价', debugtype: 'money', dataIndex: 'salePrice', width: '10' },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.id : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.id : '暂无') },
]

class GameTicketConfirmationTable extends PureComponent {
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

export default GameTicketConfirmationTable

