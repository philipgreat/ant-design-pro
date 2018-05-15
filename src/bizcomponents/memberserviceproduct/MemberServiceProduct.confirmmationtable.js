
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './MemberServiceProduct.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '10' },
  { title: '产品描述', debugtype: 'string', dataIndex: 'productDescription', width: '10' },
  { title: '参加研讨会', dataIndex: 'joinWorkshop', render: (text, record) => (record.joinWorkshop ? '是' : '否') },
  { title: '制造车间', dataIndex: 'createWorkshop', render: (text, record) => (record.createWorkshop ? '是' : '否') },
  { title: '借的书', dataIndex: 'borrowBook', render: (text, record) => (record.borrowBook ? '是' : '否') },
  { title: '超级贵宾', dataIndex: 'superVIP', render: (text, record) => (record.superVIP ? '是' : '否') },
  { title: '会员服务管理', dataIndex: 'memberServiceManagement', render: (text, record) => (record.memberServiceManagement ? record.memberServiceManagement.id : '暂无') },
]

class MemberServiceProductConfirmationTable extends PureComponent {
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

export default MemberServiceProductConfirmationTable

