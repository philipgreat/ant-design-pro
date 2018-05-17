
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './TokenInMemberServiceProduct.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '令牌激活', dataIndex: 'tokenEnabled', render: (text, record) => (record.tokenEnabled ? '是' : '否') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '使用令牌', dataIndex: 'availableToken', render: (text, record) => (record.availableToken ? record.availableToken.id : '暂无') },
  { title: '会员服务产品', dataIndex: 'memberServiceProduct', render: (text, record) => (record.memberServiceProduct ? record.memberServiceProduct.id : '暂无') },
]

class TokenInMemberServiceProductConfirmationTable extends PureComponent {
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

export default TokenInMemberServiceProductConfirmationTable

