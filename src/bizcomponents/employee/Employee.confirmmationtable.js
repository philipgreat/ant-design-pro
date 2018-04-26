
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Employee.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '公司', dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '头衔', debugtype: 'string', dataIndex: 'title', width: '7' },
  { title: '部门', dataIndex: 'department', render: (text, record) => (record.department ? record.department.id : '暂无') },
  { title: '姓', debugtype: 'string', dataIndex: 'familyName', width: '5' },
  { title: '名', debugtype: 'string', dataIndex: 'givenName', width: '6' },
  { title: '电子邮件', debugtype: 'string_email', dataIndex: 'email', width: '17' },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  { title: '地址', debugtype: 'string', dataIndex: 'address', width: '11' },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'cellPhone', width: '15' },
  { title: '职业', dataIndex: 'occupation', render: (text, record) => (record.occupation ? record.occupation.id : '暂无') },
  { title: '负责', dataIndex: 'responsibleFor', render: (text, record) => (record.responsibleFor ? record.responsibleFor.id : '暂无') },
  { title: '目前工资等级', dataIndex: 'currentSalaryGrade', render: (text, record) => (record.currentSalaryGrade ? record.currentSalaryGrade.id : '暂无') },
  { title: '工资账户', debugtype: 'string', dataIndex: 'salaryAccount', width: '19' },
  { title: '工作申请', dataIndex: 'jobApplication', render: (text, record) => (record.jobApplication ? record.jobApplication.id : '暂无') },
  { title: '专业面试', dataIndex: 'professionInterview', render: (text, record) => (record.professionInterview ? record.professionInterview.id : '暂无') },
  { title: '人力资源部面试', dataIndex: 'hrInterview', render: (text, record) => (record.hrInterview ? record.hrInterview.id : '暂无') },
  { title: '审批工作要约', dataIndex: 'offerApproval', render: (text, record) => (record.offerApproval ? record.offerApproval.id : '暂无') },
  { title: '接受工作要约', dataIndex: 'offerAcceptance', render: (text, record) => (record.offerAcceptance ? record.offerAcceptance.id : '暂无') },
  { title: '员工入职', dataIndex: 'employeeBoarding', render: (text, record) => (record.employeeBoarding ? record.employeeBoarding.id : '暂无') },
  { title: '雇佣终止', dataIndex: 'termination', render: (text, record) => (record.termination ? record.termination.id : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '26' },
]

class EmployeeConfirmationTable extends PureComponent {
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
          scroll={{ x: 2775 }}
        />
      </div>
    )
  }
}

export default EmployeeConfirmationTable

