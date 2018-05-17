
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './MemberServiceBoundleSku.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '会员服务名称', debugtype: 'string', dataIndex: 'memberServiceName', width: '13' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '23' },
  { title: '列出的价格', debugtype: 'money', dataIndex: 'listPrice', width: '10' },
  { title: '销售价格', debugtype: 'money', dataIndex: 'salePrice', width: '10' },
  { title: '服务期月', debugtype: 'int', dataIndex: 'servicePeriodMonths', width: '6' },
  { title: '成员的产品', dataIndex: 'memberProduct', render: (text, record) => (record.memberProduct ? record.memberProduct.id : '暂无') },
]

class MemberServiceBoundleSkuConfirmationTable extends PureComponent {
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

export default MemberServiceBoundleSkuConfirmationTable

