import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './ServiceFileMovementM2c.table.less'
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
    width: '42',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    render: (text, record) =>
      moment(record.startTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '交接检查码',
    debugtype: 'string',
    dataIndex: 'transferVerifyCode',
    width: '10',
  },
  {
    title: '年检订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
  {
    title: '服务类型',
    debugtype: 'string',
    dataIndex: 'movementPurpose',
    width: '32',
  },
  {
    title: '联系人姓名',
    debugtype: 'string',
    dataIndex: 'contactName',
    width: '7',
  },
  {
    title: '联系人手机',
    debugtype: 'string_china_mobile_phone',
    dataIndex: 'contactMobileNumber',
    width: '15',
  },
  {
    title: '通知日期时间',
    dataIndex: 'notifyDatetime',
    render: (text, record) =>
      moment(record.notifyDatetime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '通知地址',
    debugtype: 'string',
    dataIndex: 'notifyAddress',
    width: '18',
  },
  {
    title: '备注',
    debugtype: 'string',
    dataIndex: 'notifyComment',
    width: '95',
  },
  {
    title: '交接检查结果',
    debugtype: 'string',
    dataIndex: 'handoverResult',
    width: '6',
  },
  {
    title: '交接检查备注',
    debugtype: 'string_longtext',
    dataIndex: 'handoverResultComment',
    width: '10',
  },
  {
    title: '商户',
    dataIndex: 'merchant',
    render: (text, record) => (record.merchant ? record.merchant.id : '暂无'),
  },
]

class ServiceFileMovementM2cViewTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 4410 }}
        />
      </div>
    )
  }
}

export default ServiceFileMovementM2cViewTable
