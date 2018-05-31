
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './TicketPrinting.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName', width: '14' },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName', width: '9' },
  { title: '门店名字', debugtype: 'string', dataIndex: 'storeName', width: '15' },
  { title: '是否是场次票', dataIndex: 'sessionTicket', render: (text, record) => (record.sessionTicket ? '是' : '否') },
  { title: '是否是假期票', dataIndex: 'vacationTicket', render: (text, record) => (record.vacationTicket ? '是' : '否') },
  { title: '是否是学生票', dataIndex: 'studentTicket', render: (text, record) => (record.studentTicket ? '是' : '否') },
  { title: '是否是快速票', dataIndex: 'fastTicket', render: (text, record) => (record.fastTicket ? '是' : '否') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
]

class TicketPrintingConfirmationTable extends PureComponent {
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
          scroll={{ x: 1110 }}
        />
      </div>
    )
  }
}

export default TicketPrintingConfirmationTable

