
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './EmployeeSalarySheet.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? (<Link to={`/employee/${record.employee.id}/dashboard`}>{record.employee.displayName}</Link>) : '暂无') },
  { title: '目前工资等级', dataIndex: 'currentSalaryGrade', render: (text, record) => (record.currentSalaryGrade ? (<Link to={`/salaryGrade/${record.currentSalaryGrade.id}/dashboard`}>{record.currentSalaryGrade.displayName}</Link>) : '暂无') },
  { title: '基本工资', dataIndex: 'baseSalary', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '奖金', dataIndex: 'bonus', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '奖励', dataIndex: 'reward', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '个人所得税', dataIndex: 'personalTax', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '社会保险', dataIndex: 'socialSecurity', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '住房公积金', dataIndex: 'housingFound', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '失业保险', dataIndex: 'jobInsurance', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '工资支付', dataIndex: 'payingOff', render: (text, record) => (record.payingOff ? (<Link to={`/payingOff/${record.payingOff.id}/dashboard`}>{record.payingOff.displayName}</Link>) : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '12' },

]

class EmployeeSalarySheetTable extends PureComponent {
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
          scroll={{ x: 1320 }}
        />
      </div>
    )
  }
}

export default EmployeeSalarySheetTable

