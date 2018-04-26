
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './EmployeeSalarySheet.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
  { title: '目前工资等级', dataIndex: 'currentSalaryGrade', render: (text, record) => (record.currentSalaryGrade ? record.currentSalaryGrade.id : '暂无') },
  { title: '基本工资', debugtype: 'money', dataIndex: 'baseSalary', width: '12' },
  { title: '奖金', debugtype: 'money', dataIndex: 'bonus', width: '12' },
  { title: '奖励', debugtype: 'money', dataIndex: 'reward', width: '12' },
  { title: '个人所得税', debugtype: 'money', dataIndex: 'personalTax', width: '11' },
  { title: '社会保险', debugtype: 'money', dataIndex: 'socialSecurity', width: '12' },
  { title: '住房公积金', debugtype: 'money', dataIndex: 'housingFound', width: '12' },
  { title: '失业保险', debugtype: 'money', dataIndex: 'jobInsurance', width: '9' },
  { title: '工资支付', dataIndex: 'payingOff', render: (text, record) => (record.payingOff ? record.payingOff.id : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '12' },
]

class EmployeeSalarySheetConfirmationTable extends PureComponent {
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
          scroll={{ x: 1320 }}
        />
      </div>
    )
  }
}

export default EmployeeSalarySheetConfirmationTable

