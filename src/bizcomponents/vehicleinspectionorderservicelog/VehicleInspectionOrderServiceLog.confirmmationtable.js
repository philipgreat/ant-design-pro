import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './VehicleInspectionOrderServiceLog.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '概览', debugtype: 'string', dataIndex: 'summary', width: '15' },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    render: (text, record) => moment(record.createTime).format('YYYY-MM-DD'),
  },
  {
    title: '服务人员',
    dataIndex: 'responsibleWorker',
    render: (text, record) =>
      record.responsibleWorker ? record.responsibleWorker.id : '暂无',
  },
  { title: '位置', debugtype: 'string', dataIndex: 'location', width: '34' },
  {
    title: '服务类型',
    dataIndex: 'serviceType',
    render: (text, record) =>
      record.serviceType ? record.serviceType.id : '暂无',
  },
  {
    title: '服务单号',
    debugtype: 'string',
    dataIndex: 'serviceTicket',
    width: '19',
  },
  {
    title: '主订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
]

class VehicleInspectionOrderServiceLogConfirmationTable extends PureComponent {
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
          scroll={{ x: 1305 }}
        />
      </div>
    )
  }
}

export default VehicleInspectionOrderServiceLogConfirmationTable
