
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './VehicleInspectionOrderCoupon.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '11' },
  { title: '生效日期', dataIndex: 'startDate', render: (text, record) => moment(record.startDate).format('YYYY-MM-DD') },
  { title: '失效日期', dataIndex: 'expirationDate', render: (text, record) => moment(record.expirationDate).format('YYYY-MM-DD') },
  { title: '金额', dataIndex: 'amount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '优惠码', debugtype: 'string', dataIndex: 'code', width: '16' },
  { title: '使用日期', dataIndex: 'usedDate', render: (text, record) => moment(record.usedDate).format('YYYY-MM-DD') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? (<Link to={`/vehicleInspectionOrder/${record.mainOrder.id}/dashboard`}>{record.mainOrder.id}</Link>) : '暂无') },

]

class VehicleInspectionOrderCouponTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default VehicleInspectionOrderCouponTable

