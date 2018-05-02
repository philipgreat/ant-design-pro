
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './ServiceVehicleInspection.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/serviceVehicleInspection/${text}/dashboard`}>{text}</Link>) },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '23' },
  { title: '检测站', dataIndex: 'inspectionStation', render: (text, record) => (record.inspectionStation ? record.inspectionStation.displayName : '暂无') },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检测日期', dataIndex: 'inspectionDatetime', render: (text, record) => moment(record.inspectionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检报告1', dataIndex: 'inspectionReportImage1', render: (text, record) => <ImagePreview imageTitle="年检报告1" imageLocation={record.inspectionReportImage1} /> },
  { title: '年检报告2', dataIndex: 'inspectionReportImage2', render: (text, record) => <ImagePreview imageTitle="年检报告2" imageLocation={record.inspectionReportImage2} /> },
  { title: '年检报告3', dataIndex: 'inspectionReportImage3', render: (text, record) => <ImagePreview imageTitle="年检报告3" imageLocation={record.inspectionReportImage3} /> },
  { title: '年检报告4', dataIndex: 'inspectionReportImage4', render: (text, record) => <ImagePreview imageTitle="年检报告4" imageLocation={record.inspectionReportImage4} /> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage5', render: (text, record) => <ImagePreview imageTitle="年检报告5" imageLocation={record.inspectionReportImage5} /> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage6', render: (text, record) => <ImagePreview imageTitle="年检报告5" imageLocation={record.inspectionReportImage6} /> },
  { title: '年检报告6', dataIndex: 'inspectionReportImage7', render: (text, record) => <ImagePreview imageTitle="年检报告6" imageLocation={record.inspectionReportImage7} /> },
  { title: '年检报告7', dataIndex: 'inspectionReportImage8', render: (text, record) => <ImagePreview imageTitle="年检报告7" imageLocation={record.inspectionReportImage8} /> },
  { title: '检测结果', debugtype: 'string', dataIndex: 'inspectionResult', width: '7' },
  { title: '是否要修理', debugtype: 'string', dataIndex: 'inspectionNeedRepair', width: '7' },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

class ServiceVehicleInspectionTable extends PureComponent {
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
          scroll={{ x: 3375 }}
        />
      </div>
    )
  }
}

export default ServiceVehicleInspectionTable

