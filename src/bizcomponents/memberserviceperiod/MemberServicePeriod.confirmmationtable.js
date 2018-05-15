
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './MemberServicePeriod.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务期间名称', debugtype: 'string', dataIndex: 'servicePeriodName', width: '7' },
  { title: '服务时间天', debugtype: 'int', dataIndex: 'servicePeriodDays', width: '7' },
  { title: '会员服务管理', dataIndex: 'memberServiceManagement', render: (text, record) => (record.memberServiceManagement ? record.memberServiceManagement.id : '暂无') },
]

class MemberServicePeriodConfirmationTable extends PureComponent {
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

export default MemberServicePeriodConfirmationTable

