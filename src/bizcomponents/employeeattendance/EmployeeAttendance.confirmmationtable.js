
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './EmployeeAttendance.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '进入时间', dataIndex: 'enterTime', render: (text, record) => moment(record.enterTime).format('YYYY-MM-DD') },
  { title: '离开的时候', dataIndex: 'leaveTime', render: (text, record) => moment(record.leaveTime).format('YYYY-MM-DD') },
  { title: '持续时间', debugtype: 'int', dataIndex: 'durationHours', width: '5' },
  { title: '备注', debugtype: 'string', dataIndex: 'remark', width: '11' },
]

class EmployeeAttendanceConfirmationTable extends PureComponent {
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

export default EmployeeAttendanceConfirmationTable

