import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import { Link } from 'dva/router'
import styles from './RepairingQuotationItem.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '修理项目类型',
    dataIndex: 'repairingItemType',
    render: (text, record) =>
      record.repairingItemType ? (
        <Link
          to={`/vehicleRepairingAllowance/${
            record.repairingItemType.id
          }/dashboard`}
        >
          {record.repairingItemType.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '修理物品的名称',
    debugtype: 'string',
    dataIndex: 'repairingItemName',
    width: '10',
  },
  {
    title: '修理项目描述',
    debugtype: 'string',
    dataIndex: 'repairingItemDescription',
    width: '57',
  },
  {
    title: '修理物品的价格',
    dataIndex: 'repairingItemPrice',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  {
    title: '维修报价',
    dataIndex: 'repairingQuotation',
    render: (text, record) =>
      record.repairingQuotation ? (
        <Link
          to={`/repairingQuotation/${record.repairingQuotation.id}/dashboard`}
        >
          {record.repairingQuotation.id}
        </Link>
      ) : (
        '暂无'
      ),
  },
  {
    title: '修理物品图片1',
    dataIndex: 'repairingItemImage1',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修理物品图片1"
        imageLocation={record.repairingItemImage1}
      />
    ),
  },
  {
    title: '修理物品图片2',
    dataIndex: 'repairingItemImage2',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修理物品图片2"
        imageLocation={record.repairingItemImage2}
      />
    ),
  },
  {
    title: '修理物品图片3',
    dataIndex: 'repairingItemImage3',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修理物品图片3"
        imageLocation={record.repairingItemImage3}
      />
    ),
  },
  {
    title: '修理物品图片4',
    dataIndex: 'repairingItemImage4',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修理物品图片4"
        imageLocation={record.repairingItemImage4}
      />
    ),
  },
  {
    title: '修理物品图片5',
    dataIndex: 'repairingItemImage5',
    render: (text, record) => (
      <ImagePreview
        imageTitle="修理物品图片5"
        imageLocation={record.repairingItemImage5}
      />
    ),
  },
]

class RepairingQuotationItemTable extends PureComponent {
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
          scroll={{ x: 1800 }}
        />
      </div>
    )
  }
}

export default RepairingQuotationItemTable
