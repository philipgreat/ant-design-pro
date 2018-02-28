
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './ReportVehicleInspectionReport.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '12' },
  { title: '年检报告1', dataIndex: 'inspectionReportImage1', render: (text, record) => <ImagePreview imageTitle="年检报告1" imageLocation={record.inspectionReportImage1} /> },
  { title: '年检报告2', dataIndex: 'inspectionReportImage2', render: (text, record) => <ImagePreview imageTitle="年检报告2" imageLocation={record.inspectionReportImage2} /> },
  { title: '年检报告3', dataIndex: 'inspectionReportImage3', render: (text, record) => <ImagePreview imageTitle="年检报告3" imageLocation={record.inspectionReportImage3} /> },
  { title: '年检报告4', dataIndex: 'inspectionReportImage4', render: (text, record) => <ImagePreview imageTitle="年检报告4" imageLocation={record.inspectionReportImage4} /> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage5', render: (text, record) => <ImagePreview imageTitle="年检报告5" imageLocation={record.inspectionReportImage5} /> },
  { title: '年检服务单', dataIndex: 'inspectionServiceOrder', render: (text, record) => (record.inspectionServiceOrder ? (<Link to={`/serviceVehicleInspection/${record.inspectionServiceOrder.id}/dashboard`}>{record.inspectionServiceOrder.id}</Link>) : '暂无') },
  { title: '维修服务订单', dataIndex: 'repairingServiceOrder', render: (text, record) => (record.repairingServiceOrder ? (<Link to={`/serviceVehicleRepairing/${record.repairingServiceOrder.id}/dashboard`}>{record.repairingServiceOrder.id}</Link>) : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? (<Link to={`/vehicleInspectionOrder/${record.mainOrder.id}/dashboard`}>{record.mainOrder.id}</Link>) : '暂无') },

]

class ReportVehicleInspectionReportTable extends PureComponent {
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
          scroll={{ x: 1455 }}
        />
      </div>
    )
  }
}

export default ReportVehicleInspectionReportTable

