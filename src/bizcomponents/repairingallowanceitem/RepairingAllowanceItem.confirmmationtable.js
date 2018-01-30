
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './RepairingAllowanceItem.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '津贴标题', debugtype: 'string', dataIndex: 'allowanceTitle', width: '9' },
  { title: '补贴代码', debugtype: 'string', dataIndex: 'allowanceCode', width: '23' },
  { title: '补贴费用', debugtype: 'money', dataIndex: 'allowanceAmount', width: '10' },
  { title: '服务', dataIndex: 'service', render: (text, record) => (record.service ? record.service.id : '暂无') },
]

class RepairingAllowanceItemConfirmationTable extends PureComponent {
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

export default RepairingAllowanceItemConfirmationTable

