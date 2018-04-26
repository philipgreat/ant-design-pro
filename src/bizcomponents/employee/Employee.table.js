
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './Employee.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/employee/${text}/dashboard`}>{text}</Link>) },
  { title: '公司', dataIndex: 'company', render: (text, record) => (record.company ? (<Link to={`/decorationCountryCenter/${record.company.id}/dashboard`}>{record.company.displayName}</Link>) : '暂无') },
  { title: '头衔', debugtype: 'string', dataIndex: 'title', width: '7' },
  { title: '部门', dataIndex: 'department', render: (text, record) => (record.department ? (<Link to={`/levelThreeDepartment/${record.department.id}/dashboard`}>{record.department.displayName}</Link>) : '暂无') },
  { title: '姓', debugtype: 'string', dataIndex: 'familyName', width: '5' },
  { title: '名', debugtype: 'string', dataIndex: 'givenName', width: '6' },
  { title: '电子邮件', debugtype: 'string_email', dataIndex: 'email', width: '17' },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  { title: '地址', debugtype: 'string', dataIndex: 'address', width: '11' },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'cellPhone', width: '15' },
  { title: '职业', dataIndex: 'occupation', render: (text, record) => (record.occupation ? (<Link to={`/occupationType/${record.occupation.id}/dashboard`}>{record.occupation.displayName}</Link>) : '暂无') },
  { title: '负责', dataIndex: 'responsibleFor', render: (text, record) => (record.responsibleFor ? (<Link to={`/responsibilityType/${record.responsibleFor.id}/dashboard`}>{record.responsibleFor.displayName}</Link>) : '暂无') },
  { title: '目前工资等级', dataIndex: 'currentSalaryGrade', render: (text, record) => (record.currentSalaryGrade ? (<Link to={`/salaryGrade/${record.currentSalaryGrade.id}/dashboard`}>{record.currentSalaryGrade.displayName}</Link>) : '暂无') },
  { title: '工资账户', debugtype: 'string', dataIndex: 'salaryAccount', width: '19' },
  { title: '工作申请', dataIndex: 'jobApplication', render: (text, record) => (record.jobApplication ? (<Link to={`/jobApplication/${record.jobApplication.id}/dashboard`}>{record.jobApplication.displayName}</Link>) : '暂无') },
  { title: '专业面试', dataIndex: 'professionInterview', render: (text, record) => (record.professionInterview ? (<Link to={`/professionInterview/${record.professionInterview.id}/dashboard`}>{record.professionInterview.displayName}</Link>) : '暂无') },
  { title: '人力资源部面试', dataIndex: 'hrInterview', render: (text, record) => (record.hrInterview ? (<Link to={`/hrInterview/${record.hrInterview.id}/dashboard`}>{record.hrInterview.displayName}</Link>) : '暂无') },
  { title: '审批工作要约', dataIndex: 'offerApproval', render: (text, record) => (record.offerApproval ? (<Link to={`/offerApproval/${record.offerApproval.id}/dashboard`}>{record.offerApproval.displayName}</Link>) : '暂无') },
  { title: '接受工作要约', dataIndex: 'offerAcceptance', render: (text, record) => (record.offerAcceptance ? (<Link to={`/offerAcceptance/${record.offerAcceptance.id}/dashboard`}>{record.offerAcceptance.displayName}</Link>) : '暂无') },
  { title: '员工入职', dataIndex: 'employeeBoarding', render: (text, record) => (record.employeeBoarding ? (<Link to={`/employeeBoarding/${record.employeeBoarding.id}/dashboard`}>{record.employeeBoarding.displayName}</Link>) : '暂无') },
  { title: '雇佣终止', dataIndex: 'termination', render: (text, record) => (record.termination ? (<Link to={`/termination/${record.termination.id}/dashboard`}>{record.termination.displayName}</Link>) : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '26' },

]

class EmployeeTable extends PureComponent {
  state = {
    selectedRowKeys: [],
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
      })
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows)
    }
    this.setState({ selectedRowKeys })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter)
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], [])
  }

  render() {
    const { selectedRowKeys } = this.state
    // const { data, count, current, owner } = this.props
    const { data, count, current } = this.props

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 20,
      total: count,
      current,
      
    }

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    }

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项 
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </p>
            )}
            type="info"
            showIcon
          />
        </div>
        <Table
          loading={false}
          rowKey={record => record.id}
          rowSelection={rowSelection}
          dataSource={data}
          columns={columns}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          scroll={{ x: 2775 }}
        />
      </div>
    )
  }
}

export default EmployeeTable

