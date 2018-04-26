
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './EmployeeQualifier.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '合格的时间', dataIndex: 'qualifiedTime', render: (text, record) => moment(record.qualifiedTime).format('YYYY-MM-DD') },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '9' },
  { title: '水平', debugtype: 'string', dataIndex: 'level', width: '6' },
  { title: '备注', debugtype: 'string', dataIndex: 'remark', width: '13' },
]

class EmployeeQualifierConfirmationTable extends PureComponent {
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

export default EmployeeQualifierConfirmationTable

