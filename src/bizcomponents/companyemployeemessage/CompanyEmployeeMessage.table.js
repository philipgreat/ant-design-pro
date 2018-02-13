
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './CompanyEmployeeMessage.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '13' },
  { title: '消息内容', debugtype: 'string', dataIndex: 'messageContent', width: '36' },
  { title: '发送方', dataIndex: 'sender', render: (text, record) => (record.sender ? (<Link to={`/vehicleServiceCompanyEmployee/${record.sender.id}/dashboard`}>{record.sender.id}</Link>) : '暂无') },
  { title: '接收方', dataIndex: 'receiver', render: (text, record) => (record.receiver ? (<Link to={`/vehicleServiceCompanyEmployee/${record.receiver.id}/dashboard`}>{record.receiver.id}</Link>) : '暂无') },
  { title: '服务类型', dataIndex: 'serviceType', render: (text, record) => (record.serviceType ? (<Link to={`/availableService/${record.serviceType.id}/dashboard`}>{record.serviceType.id}</Link>) : '暂无') },
  { title: '服务单号', debugtype: 'string', dataIndex: 'serviceTicket', width: '19' },
  { title: '发送时间', dataIndex: 'sendTime', render: (text, record) => moment(record.sendTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '阅读时间', dataIndex: 'readTime', render: (text, record) => moment(record.readTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '6' },

]

class CompanyEmployeeMessageTable extends PureComponent {
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
          scroll={{ x: 1860 }}
        />
      </div>
    )
  }
}

export default CompanyEmployeeMessageTable

