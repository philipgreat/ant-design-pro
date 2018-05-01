import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './ProductPrice.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '产品名称',
    dataIndex: 'product',
    render: (text, record) =>
      record.product ? record.product.displayName : '暂无',
  },
  {
    title: '城市',
    dataIndex: 'city',
    render: (text, record) => (record.city ? record.city.displayName : '暂无'),
  },
  {
    title: '车辆类型',
    debugtype: 'string',
    dataIndex: 'vehicleType',
    width: '6',
  },
  {
    title: '新能源车',
    dataIndex: 'greenVehicle',
    render: (text, record) => (record.greenVehicle ? '是' : '否'),
  },
  {
    title: '年检费用',
    dataIndex: 'inspectionPrice',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  {
    title: '二级维护价格',
    dataIndex: 'secondLevelMaintenancePrice',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  {
    title: '等级评定价格',
    dataIndex: 'gradeEstimationPrice',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  {
    title: '代办服务费用',
    dataIndex: 'agentServicePrice',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  {
    title: '折扣价格代理服务',
    dataIndex: 'discountAgentServicePrice',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '36' },
]

class ProductPriceTable extends PureComponent {
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
          scroll={{ x: 1395 }}
        />
      </div>
    )
  }
}

export default ProductPriceTable
