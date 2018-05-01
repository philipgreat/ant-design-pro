import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './VehicleInfo.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '车牌号码',
    debugtype: 'string',
    dataIndex: 'licensePlateNumber',
    width: '11',
  },
  {
    title: '车辆类型',
    debugtype: 'string',
    dataIndex: 'vehicleType',
    width: '7',
  },
  {
    title: '使用性质',
    debugtype: 'string',
    dataIndex: 'useCharacter',
    width: '7',
  },
  {
    title: '核准座位数',
    debugtype: 'int',
    dataIndex: 'seatsQuantity',
    width: '7',
  },
  {
    title: '注册日期',
    dataIndex: 'registrationDate',
    render: (text, record) =>
      moment(record.registrationDate).format('YYYY-MM-DD'),
  },
  {
    title: '检测有效期',
    dataIndex: 'inspectionValidationDate',
    render: (text, record) =>
      moment(record.inspectionValidationDate).format('YYYY-MM-DD'),
  },
  {
    title: '保险有效期',
    dataIndex: 'insuranceValidationDate',
    render: (text, record) =>
      moment(record.insuranceValidationDate).format('YYYY-MM-DD'),
  },
  {
    title: '发动机号',
    debugtype: 'string',
    dataIndex: 'engineNumber',
    width: '11',
  },
  {
    title: '车架号',
    debugtype: 'string',
    dataIndex: 'vehicleIdentificationNumber',
    width: '21',
  },
  {
    title: '发证日期',
    dataIndex: 'vehiclePermitIssueDate',
    render: (text, record) =>
      moment(record.vehiclePermitIssueDate).format('YYYY-MM-DD'),
  },
  {
    title: '所有人',
    debugtype: 'string',
    dataIndex: 'vehiclePermitHolderName',
    width: '57',
  },
  {
    title: '行驶证图1',
    dataIndex: 'vehiclePermitImage1',
    render: (text, record) => (
      <ImagePreview imageLocation={record.vehiclePermitImage1} />
    ),
  },
  {
    title: '行驶证图2',
    dataIndex: 'vehiclePermitImage2',
    render: (text, record) => (
      <ImagePreview imageLocation={record.vehiclePermitImage2} />
    ),
  },
  {
    title: '行驶证图3',
    dataIndex: 'vehiclePermitImage3',
    render: (text, record) => (
      <ImagePreview imageLocation={record.vehiclePermitImage3} />
    ),
  },
  {
    title: '行驶证图4',
    dataIndex: 'vehiclePermitImage4',
    render: (text, record) => (
      <ImagePreview imageLocation={record.vehiclePermitImage4} />
    ),
  },
  {
    title: '行驶证图5',
    dataIndex: 'vehiclePermitImage5',
    render: (text, record) => (
      <ImagePreview imageLocation={record.vehiclePermitImage5} />
    ),
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '客户',
    dataIndex: 'customer',
    render: (text, record) => (record.customer ? record.customer.id : '暂无'),
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) => (record.platform ? record.platform.id : '暂无'),
  },
]

class VehicleInfoViewTable extends PureComponent {
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
          scroll={{ x: 2790 }}
        />
      </div>
    )
  }
}

export default VehicleInfoViewTable
