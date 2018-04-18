import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './ServicePrice.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '合同',
    dataIndex: 'contract',
    render: (text, record) =>
      record.contract ? (
        <Link to={`/contract/${record.contract.id}/dashboard`}>
          {record.contract.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '服务范围',
    dataIndex: 'availableService',
    render: (text, record) =>
      record.availableService ? (
        <Link to={`/availableService/${record.availableService.id}/dashboard`}>
          {record.availableService.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '产品名称',
    dataIndex: 'product',
    render: (text, record) =>
      record.product ? (
        <Link to={`/availableProduct/${record.product.id}/dashboard`}>
          {record.product.displayName}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '服务代码',
    debugtype: 'string',
    dataIndex: 'serviceKey',
    width: '35',
  },
  {
    title: '服务描述',
    debugtype: 'string',
    dataIndex: 'serviceDescription',
    width: '35',
  },
  {
    title: '服务价格类型',
    debugtype: 'string',
    dataIndex: 'servicePriceType',
    width: '11',
  },
  {
    title: '服务价格',
    debugtype: 'double',
    dataIndex: 'basePriceValue',
    width: '9',
  },
  {
    title: '后续服务价格',
    debugtype: 'double',
    dataIndex: 'otherPriceValue',
    width: '9',
  },
  {
    title: '是否提供服务',
    dataIndex: 'serviceEnabled',
    render: (text, record) => (record.serviceEnabled ? '是' : '否'),
  },
]

class ServicePriceTable extends PureComponent {
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
          scroll={{ x: 1680 }}
        />
      </div>
    )
  }
}

export default ServicePriceTable
