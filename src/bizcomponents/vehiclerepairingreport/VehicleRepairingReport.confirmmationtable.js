
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './VehicleRepairingReport.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车辆维修部分图片1', dataIndex: 'repairingPartImg1', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg1} /> },
  { title: '车辆维修部分图片2', dataIndex: 'repairingPartImg2', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg2} /> },
  { title: '车辆维修部分图片3', dataIndex: 'repairingPartImg3', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg3} /> },
  { title: '车辆维修部分图片4', dataIndex: 'repairingPartImg4', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg4} /> },
  { title: '车辆维修部分图片5', dataIndex: 'repairingPartImg5', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg5} /> },
  { title: '车辆维修部分图片6', dataIndex: 'repairingPartImg6', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg6} /> },
  { title: '车辆维修部分图片7', dataIndex: 'repairingPartImg7', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg7} /> },
  { title: '车辆维修部分图片8', dataIndex: 'repairingPartImg8', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg8} /> },
  { title: '车辆维修部分图片9', dataIndex: 'repairingPartImg9', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg9} /> },
  { title: '车辆维修部分图片10', dataIndex: 'repairingPartImg10', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg10} /> },
  { title: '车辆维修备注', debugtype: 'string', dataIndex: 'repairingPartListComment', width: '219' },
  { title: '服务', dataIndex: 'service', render: (text, record) => (record.service ? record.service.id : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '维修完成日期时间', dataIndex: 'repairingFinishedDatetime', render: (text, record) => moment(record.repairingFinishedDatetime).format('YYYY-MM-DD') },
]

class VehicleRepairingReportConfirmationTable extends PureComponent {
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
          scroll={{ x: 4875 }}
        />
      </div>
    )
  }
}

export default VehicleRepairingReportConfirmationTable

