
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './PlatformAccountDetails.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '18' },
  { title: '变化量', debugtype: 'money', dataIndex: 'changeAmount', width: '9' },
  { title: '变化类型', debugtype: 'string', dataIndex: 'changeType', width: '6' },
  { title: '平台账户', dataIndex: 'platformAccount', render: (text, record) => (record.platformAccount ? record.platformAccount.id : '暂无') },
  { title: '相关的主要顺序', dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.id : '暂无') },
  { title: 'Datetime', dataIndex: 'datetime', render: (text, record) => moment(record.datetime).format('YYYY-MM-DD') },
]

class PlatformAccountDetailsConfirmationTable extends PureComponent {
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

export default PlatformAccountDetailsConfirmationTable

