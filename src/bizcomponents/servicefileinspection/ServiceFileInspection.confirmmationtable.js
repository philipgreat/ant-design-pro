import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServiceFileInspection.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '服务状态',
    debugtype: 'string',
    dataIndex: 'serviceStatus',
    width: '7',
  },
  {
    title: '服务人员',
    dataIndex: 'responsibleWorker',
    render: (text, record) =>
      record.responsibleWorker ? record.responsibleWorker.id : '暂无',
  },
  {
    title: '服务概述',
    debugtype: 'string',
    dataIndex: 'serviceSummary',
    width: '23',
  },
  {
    title: '检测站',
    dataIndex: 'inspectionStation',
    render: (text, record) =>
      record.inspectionStation ? record.inspectionStation.id : '暂无',
  },
  {
    title: '检测结果',
    debugtype: 'string',
    dataIndex: 'inspectionResult',
    width: '7',
  },
  {
    title: '年检报告1',
    dataIndex: 'inspectionReportImage1',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage1} />
    ),
  },
  {
    title: '年检报告2',
    dataIndex: 'inspectionReportImage2',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage2} />
    ),
  },
  {
    title: '年检报告3',
    dataIndex: 'inspectionReportImage3',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage3} />
    ),
  },
  {
    title: '年检报告4',
    dataIndex: 'inspectionReportImage4',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage4} />
    ),
  },
  {
    title: '年检报告5',
    dataIndex: 'inspectionReportImage5',
    render: (text, record) => (
      <ImagePreview imageLocation={record.inspectionReportImage5} />
    ),
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    render: (text, record) => moment(record.startTime).format('YYYY-MM-DD'),
  },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD'),
  },
  {
    title: '检测日期',
    dataIndex: 'inspectionDatetime',
    render: (text, record) =>
      moment(record.inspectionDatetime).format('YYYY-MM-DD'),
  },
  {
    title: '商户',
    dataIndex: 'merchant',
    render: (text, record) => (record.merchant ? record.merchant.id : '暂无'),
  },
  {
    title: '年检订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
]

class ServiceFileInspectionConfirmationTable extends PureComponent {
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
          scroll={{ x: 2790 }}
        />
      </div>
    )
  }
}

export default ServiceFileInspectionConfirmationTable
