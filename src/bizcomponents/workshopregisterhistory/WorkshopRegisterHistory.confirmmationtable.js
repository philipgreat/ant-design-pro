
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './WorkshopRegisterHistory.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车间', dataIndex: 'workshop', render: (text, record) => (record.workshop ? record.workshop.id : '暂无') },
  { title: '注册会员', dataIndex: 'registerMember', render: (text, record) => (record.registerMember ? record.registerMember.id : '暂无') },
  { title: '注册日期时间', dataIndex: 'registerDatetime', render: (text, record) => moment(record.registerDatetime).format('YYYY-MM-DD') },
  { title: '登记注册类型', debugtype: 'string', dataIndex: 'registrationType', width: '6' },
]

class WorkshopRegisterHistoryConfirmationTable extends PureComponent {
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

export default WorkshopRegisterHistoryConfirmationTable

