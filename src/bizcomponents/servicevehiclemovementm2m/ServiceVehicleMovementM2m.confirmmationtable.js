
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServiceVehicleMovementM2m.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '拒收原因', debugtype: 'string', dataIndex: 'rejectComments', width: '37' },
  { title: '拒收凭证1', dataIndex: 'rejectEvidence1', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证1} /> },
  { title: '拒收凭证2', dataIndex: 'rejectEvidence2', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证2} /> },
  { title: '拒收凭证3', dataIndex: 'rejectEvidence3', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证3} /> },
  { title: '拒收凭证4', dataIndex: 'rejectEvidence4', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证4} /> },
  { title: '拒收凭证5', dataIndex: 'rejectEvidence5', render: (text, record) => <ImagePreview imageLocation={record.拒收凭证5} /> },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD') },
  { title: '最后的位置', debugtype: 'string', dataIndex: 'lastLocation', width: '17' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '移动目的', debugtype: 'string', dataIndex: 'movementPurpose', width: '6' },
  { title: '司机', dataIndex: 'driver', render: (text, record) => (record.driver ? record.driver.id : '暂无') },
  { title: '接收方', dataIndex: 'receiver', render: (text, record) => (record.receiver ? record.receiver.id : '暂无') },
]

class ServiceVehicleMovementM2mConfirmationTable extends PureComponent {
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
          scroll={{ x: 2295 }}
        />
      </div>
    )
  }
}

export default ServiceVehicleMovementM2mConfirmationTable

