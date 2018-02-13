import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './Contract.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  {
    title: 'ID',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/contract/${text}/dashboard`}>{text}</Link>
    ),
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) =>
      record.platform ? (
        <Link to={`/carInspectionPlatform/${record.platform.id}/dashboard`}>
          {record.platform.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '商户',
    dataIndex: 'company',
    render: (text, record) =>
      record.company ? (
        <Link to={`/vehicleServiceCompany/${record.company.id}/dashboard`}>
          {record.company.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '生效日期',
    dataIndex: 'startDate',
    render: (text, record) => moment(record.startDate).format('YYYY-MM-DD'),
  },
  {
    title: '结束日期',
    dataIndex: 'endDate',
    render: (text, record) => moment(record.endDate).format('YYYY-MM-DD'),
  },
]

class ContractTable extends PureComponent {
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
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 已选择{' '}
                <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  清空
                </a>
              </p>
            }
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default ContractTable
