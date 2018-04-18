import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './VehicleInspectionOrder.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '订单状态',
    debugtype: 'string',
    dataIndex: 'orderStatus',
    width: '7',
  },
  {
    title: '车牌号码',
    debugtype: 'string',
    dataIndex: 'vehicleLicensePlateNumber',
    width: '11',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    render: (text, record) => moment(record.createTime).format('YYYY-MM-DD'),
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
    title: '产品类型',
    debugtype: 'string',
    dataIndex: 'productType',
    width: '8',
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD'),
  },
  {
    title: '商户',
    dataIndex: 'serviceCompany',
    render: (text, record) =>
      record.serviceCompany ? record.serviceCompany.id : '暂无',
  },
  {
    title: '服务公司信息',
    debugtype: 'string_longtext',
    dataIndex: 'serviceCompanyInfo',
    width: '10',
  },
  {
    title: '地址',
    debugtype: 'string',
    dataIndex: 'contactAddressDetail',
    width: '19',
  },
  {
    title: '城市',
    dataIndex: 'contactAddressCity',
    render: (text, record) =>
      record.contactAddressCity ? record.contactAddressCity.id : '暂无',
  },
  {
    title: '客户',
    dataIndex: 'customer',
    render: (text, record) => (record.customer ? record.customer.id : '暂无'),
  },
  {
    title: '免除代理费用',
    dataIndex: 'exemptProxyFee',
    render: (text, record) => (record.exemptProxyFee ? '是' : '否'),
  },
  {
    title: '计划年检日期',
    dataIndex: 'planInspectionDate',
    render: (text, record) =>
      moment(record.planInspectionDate).format('YYYY-MM-DD'),
  },
  {
    title: '无伤人交通事故',
    dataIndex: 'trafficAccidentAnnouncement',
    render: (text, record) =>
      record.trafficAccidentAnnouncement ? '是' : '否',
  },
  {
    title: '提供委托书',
    dataIndex: 'engagementLetterProvided',
    render: (text, record) => (record.engagementLetterProvided ? '是' : '否'),
  },
  {
    title: '上门取车',
    dataIndex: 'homePickUp',
    render: (text, record) => (record.homePickUp ? '是' : '否'),
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
    dataIndex: 'vehicleUseCharacter',
    width: '7',
  },
  {
    title: '核准座位数',
    debugtype: 'int',
    dataIndex: 'vehicleSeatsQuantity',
    width: '7',
  },
  {
    title: '注册日期',
    dataIndex: 'vehicleRegistrationDate',
    render: (text, record) =>
      moment(record.vehicleRegistrationDate).format('YYYY-MM-DD'),
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
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) => (record.platform ? record.platform.id : '暂无'),
  },
]

class VehicleInspectionOrderConfirmationTable extends PureComponent {
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
          scroll={{ x: 4470 }}
        />
      </div>
    )
  }
}

export default VehicleInspectionOrderConfirmationTable
