import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ReportVehicleInspectionReport.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '12' },
  {
    title: '检验报告图1',
    dataIndex: 'inspectionReportImage1',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage1} />
    ),
  },
  {
    title: '检验报告图2',
    dataIndex: 'inspectionReportImage2',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage2} />
    ),
  },
  {
    title: '检验报告图片3',
    dataIndex: 'inspectionReportImage3',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage3} />
    ),
  },
  {
    title: '检验报告图片4',
    dataIndex: 'inspectionReportImage4',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage4} />
    ),
  },
  {
    title: '检验报告图片5',
    dataIndex: 'inspectionReportImage5',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage5} />
    ),
  },
  {
    title: '检查服务订单',
    dataIndex: 'inspectionServiceOrder',
    render: (text, record) =>
      record.inspectionServiceOrder ? record.inspectionServiceOrder.id : '暂无',
  },
  {
    title: '维修服务订单',
    dataIndex: 'repairingServiceOrder',
    render: (text, record) =>
      record.repairingServiceOrder ? record.repairingServiceOrder.id : '暂无',
  },
  {
    title: '主订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
]

class ReportVehicleInspectionReportConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项
              </p>
            }
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 1455 }}
        />
      </div>
    )
  }
}

export default ReportVehicleInspectionReportConfirmationTable
