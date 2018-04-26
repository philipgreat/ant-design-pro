
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './EmployeeCompanyTraining.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '训练', dataIndex: 'training', render: (text, record) => (record.training ? record.training.id : '暂无') },
  { title: '评分', dataIndex: 'scoring', render: (text, record) => (record.scoring ? record.scoring.id : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '10' },
]

class EmployeeCompanyTrainingConfirmationTable extends PureComponent {
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

export default EmployeeCompanyTrainingConfirmationTable

