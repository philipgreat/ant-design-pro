import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './ServiceCompanyAccount.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '服务订单号',
    debugtype: 'string',
    dataIndex: 'serviceOrderNumber',
    width: '14',
  },
  {
    title: '服务订单代码',
    debugtype: 'string',
    dataIndex: 'serviceOrderCode',
    width: '9',
  },
  {
    title: '服务订单名称',
    debugtype: 'string',
    dataIndex: 'serviceOrderName',
    width: '8',
  },
  {
    title: '服务完成日期时间',
    dataIndex: 'serviceFulfilledDatetime',
    render: (text, record) =>
      moment(record.serviceFulfilledDatetime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '合同标识',
    debugtype: 'string',
    dataIndex: 'contractId',
    width: '13',
  },
  {
    title: '合同价格的价值',
    dataIndex: 'contractPriceValue',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  {
    title: '合同价格类型',
    debugtype: 'string',
    dataIndex: 'contractPriceType',
    width: '8',
  },
  {
    title: '服务人员的名字',
    debugtype: 'string',
    dataIndex: 'serviceWorkerName',
    width: '7',
  },
  {
    title: '服务公司名称',
    debugtype: 'string',
    dataIndex: 'serviceCompanyName',
    width: '27',
  },
  {
    title: '主要订单Id',
    debugtype: 'string',
    dataIndex: 'mainOrderId',
    width: '28',
  },
  {
    title: '商户',
    dataIndex: 'merchant',
    render: (text, record) =>
      record.merchant ? (
        <Link to={`/vehicleServiceCompany/${record.merchant.id}/dashboard`}>
          {record.merchant.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '服务人员',
    dataIndex: 'responsibleWorker',
    render: (text, record) =>
      record.responsibleWorker ? (
        <Link
          to={`/vehicleServiceCompanyEmployee/${
            record.responsibleWorker.id
          }/dashboard`}
        >
          {record.responsibleWorker.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '对账单',
    dataIndex: 'account',
    render: (text, record) =>
      record.account ? (
        <Link to={`/account/${record.account.id}/dashboard`}>
          {record.account.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
]

class ServiceCompanyAccountTable extends PureComponent {
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
          scroll={{ x: 2010 }}
        />
      </div>
    )
  }
}

export default ServiceCompanyAccountTable
