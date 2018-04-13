
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './VehicleServiceCompanyBusinessScope.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '服务范围', dataIndex: 'availableService', render: (text, record) => (record.availableService ? record.availableService.id : '暂无') },
  { title: '可用状态', dataIndex: 'serviceAvaliability', render: (text, record) => (record.serviceAvaliability ? '是' : '否') },
]

class VehicleServiceCompanyBusinessScopeConfirmationTable extends PureComponent {
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

export default VehicleServiceCompanyBusinessScopeConfirmationTable

