import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {
  menuName: '年检订单',
  menuFor: 'vehicleInspectionOrder',
  subItems: [
    {
      name: 'vehicleInspectionInsuranceOrderList',
      displayName: '车辆上线检测保险订单',
    },
    {
      name: 'vehicleInspectionOrderChargeList',
      displayName: '车辆检验订单费用',
    },
    {
      name: 'vehicleInspectionOrderServiceLogList',
      displayName: '年检订单执行日志',
    },
    { name: 'vehicleInspectionOrderPaymentList', displayName: '年检订单支付' },
    { name: 'handOverChecklistItemList', displayName: '交接检查项' },
    { name: 'serviceVehicleMovementC2mList', displayName: '收车服务' },
    { name: 'serviceVehicleMovementM2mList', displayName: '移车服务' },
    { name: 'serviceVehicleMovementM2cList', displayName: '还车服务' },
    { name: 'serviceFileMovementC2mList', displayName: '收件服务' },
    { name: 'serviceFileMovementM2mList', displayName: '移件服务' },
    { name: 'serviceFileMovementM2cList', displayName: '还件服务' },
    { name: 'serviceInsuranceForInspectionList', displayName: '保险服务' },
    { name: 'serviceVehicleInspectionList', displayName: '车辆上线检测' },
    { name: 'serviceFileInspectionList', displayName: '6年免检服务' },
    { name: 'serviceVehicleRepairingList', displayName: '维修服务' },
    { name: 'orderReviewResultList', displayName: '订单评论结果' },
    { name: 'orderRatingResultList', displayName: '订单评分结果' },
    { name: 'orderDiscountCouponList', displayName: '优惠券' },
    { name: 'vehicleInspectionOrderCouponList', displayName: '优惠券使用记录' },
  ],
}

const displayColumns = [
  {
    title: 'ID',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/vehicleInspectionOrder/${text}/dashboard`}>{text}</Link>
    ),
  },
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
    render: (text, record) =>
      moment(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
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
    title: '6年免检',
    dataIndex: 'hasSixYearExemption',
    render: (text, record) => (record.hasSixYearExemption ? '是' : '否'),
  },
  {
    title: '上线检测',
    dataIndex: 'hasInspection',
    render: (text, record) => (record.hasInspection ? '是' : '否'),
  },
  {
    title: '二级维护',
    dataIndex: 'hasSecondLevelMaintenance',
    render: (text, record) => (record.hasSecondLevelMaintenance ? '是' : '否'),
  },
  {
    title: '等级评定',
    dataIndex: 'hasGradeEstimation',
    render: (text, record) => (record.hasGradeEstimation ? '是' : '否'),
  },
  {
    title: '商户优惠',
    dataIndex: 'merchantDiscount',
    render: (text, record) => (record.merchantDiscount ? '是' : '否'),
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '商户',
    dataIndex: 'serviceCompany',
    render: (text, record) =>
      record.serviceCompany ? record.serviceCompany.displayName : '暂无',
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
      record.contactAddressCity
        ? record.contactAddressCity.displayName
        : '暂无',
  },
  {
    title: '客户',
    dataIndex: 'customer',
    render: (text, record) =>
      record.customer ? record.customer.displayName : '暂无',
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
      <ImagePreview
        imageTitle="行驶证图1"
        imageLocation={record.vehiclePermitImage1}
      />
    ),
  },
  {
    title: '行驶证图2',
    dataIndex: 'vehiclePermitImage2',
    render: (text, record) => (
      <ImagePreview
        imageTitle="行驶证图2"
        imageLocation={record.vehiclePermitImage2}
      />
    ),
  },
  {
    title: '行驶证图3',
    dataIndex: 'vehiclePermitImage3',
    render: (text, record) => (
      <ImagePreview
        imageTitle="行驶证图3"
        imageLocation={record.vehiclePermitImage3}
      />
    ),
  },
  {
    title: '行驶证图4',
    dataIndex: 'vehiclePermitImage4',
    render: (text, record) => (
      <ImagePreview
        imageTitle="行驶证图4"
        imageLocation={record.vehiclePermitImage4}
      />
    ),
  },
  {
    title: '行驶证图5',
    dataIndex: 'vehiclePermitImage5',
    render: (text, record) => (
      <ImagePreview
        imageTitle="行驶证图5"
        imageLocation={record.vehiclePermitImage5}
      />
    ),
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) =>
      record.platform ? record.platform.displayName : '暂无',
  },
]

const fieldLabels = {
  id: 'ID',
  orderStatus: '订单状态',
  vehicleLicensePlateNumber: '车牌号码',
  createTime: '创建时间',
  contactName: '联系人姓名',
  contactMobileNumber: '联系人手机',
  productType: '产品类型',
  hasSixYearExemption: '6年免检',
  hasInspection: '上线检测',
  hasSecondLevelMaintenance: '二级维护',
  hasGradeEstimation: '等级评定',
  merchantDiscount: '商户优惠',
  lastUpdateTime: '最后更新时间',
  serviceCompany: '商户',
  serviceCompanyInfo: '服务公司信息',
  contactAddressDetail: '地址',
  contactAddressCity: '城市',
  customer: '客户',
  planInspectionDate: '计划年检日期',
  trafficAccidentAnnouncement: '无伤人交通事故',
  engagementLetterProvided: '提供委托书',
  homePickUp: '上门取车',
  vehicleType: '车辆类型',
  vehicleUseCharacter: '使用性质',
  vehicleSeatsQuantity: '核准座位数',
  vehicleRegistrationDate: '注册日期',
  inspectionValidationDate: '检测有效期',
  insuranceValidationDate: '保险有效期',
  engineNumber: '发动机号',
  vehicleIdentificationNumber: '车架号',
  vehiclePermitIssueDate: '发证日期',
  vehiclePermitHolderName: '所有人',
  vehiclePermitImage1: '行驶证图1',
  vehiclePermitImage2: '行驶证图2',
  vehiclePermitImage3: '行驶证图3',
  vehiclePermitImage4: '行驶证图4',
  vehiclePermitImage5: '行驶证图5',
  platform: '平台',
}

const VehicleInspectionOrderBase = { menuData, displayColumns, fieldLabels }
export default VehicleInspectionOrderBase
