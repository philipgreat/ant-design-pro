
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServiceFileInspection.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '9' },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '检测站', dataIndex: 'inspectionStation', render: (text, record) => (record.inspectionStation ? record.inspectionStation.id : '暂无') },
  { title: '检测结果', dataIndex: 'inspectionResult', render: (text, record) => (record.inspectionResult ? '是' : '否') },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD') },
  { title: '最后的位置', debugtype: 'string', dataIndex: 'lastLocation', width: '17' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD') },
  { title: '检测报告1', dataIndex: 'reportImage1', render: (text, record) => <ImagePreview imageLocation={record.检测报告1} /> },
  { title: '检测报告2', dataIndex: 'reportImage2', render: (text, record) => <ImagePreview imageLocation={record.检测报告2} /> },
  { title: '检测报告3', dataIndex: 'reportImage3', render: (text, record) => <ImagePreview imageLocation={record.检测报告3} /> },
  { title: '检测报告4', dataIndex: 'reportImage4', render: (text, record) => <ImagePreview imageLocation={record.检测报告4} /> },
  { title: '检测报告5', dataIndex: 'reportImage5', render: (text, record) => <ImagePreview imageLocation={record.检测报告5} /> },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
]

class ServiceFileInspectionConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 1710 }}
        />
      </div>
    )
  }
}

export default ServiceFileInspectionConfirmationTable

