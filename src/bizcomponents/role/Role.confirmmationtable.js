
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Role.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '角色名', debugtype: 'string', dataIndex: 'roleName', width: '7' },
  { title: '角色Property1', dataIndex: 'roleProperty1', render: (text, record) => (record.roleProperty1 ? '是' : '否') },
  { title: '角色Property2', dataIndex: 'roleProperty2', render: (text, record) => (record.roleProperty2 ? '是' : '否') },
  { title: '角色Property3', debugtype: 'int', dataIndex: 'roleProperty3', width: '7' },
]

class RoleConfirmationTable extends PureComponent {
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

export default RoleConfirmationTable

