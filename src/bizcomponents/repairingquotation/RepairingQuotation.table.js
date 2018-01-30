
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './RepairingQuotation.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '维修报价描述', debugtype: 'string', dataIndex: 'repairingQuotationDescription', width: '13' },
  { title: '维修报价图片1', dataIndex: 'repairingQuotationImage1', render: (text, record) => <ImagePreview imageTitle="维修报价图片1" imageLocation={record.repairingQuotationImage1} /> },
  { title: '维修报价图2', dataIndex: 'repairingQuotationImage2', render: (text, record) => <ImagePreview imageTitle="维修报价图2" imageLocation={record.repairingQuotationImage2} /> },
  { title: '维修报价图片3', dataIndex: 'repairingQuotationImage3', render: (text, record) => <ImagePreview imageTitle="维修报价图片3" imageLocation={record.repairingQuotationImage3} /> },
  { title: '维修报价图片4', dataIndex: 'repairingQuotationImage4', render: (text, record) => <ImagePreview imageTitle="维修报价图片4" imageLocation={record.repairingQuotationImage4} /> },
  { title: '维修报价图片5', dataIndex: 'repairingQuotationImage5', render: (text, record) => <ImagePreview imageTitle="维修报价图片5" imageLocation={record.repairingQuotationImage5} /> },
  { title: '维修报价总金额', dataIndex: 'repairingQuotationTotalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '服务', dataIndex: 'service', render: (text, record) => (record.service ? (<Link to={`/serviceVehicleRepairing/${record.service.id}/dashboard`}>{record.service.id}</Link>) : '暂无') },

]

class RepairingQuotationTable extends PureComponent {
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
          scroll={{ x: 1140 }}
        />
      </div>
    )
  }
}

export default RepairingQuotationTable

