import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {
  menuName: '商户员工',
  menuFor: 'vehicleServiceCompanyEmployee',
  subItems: [
    { name: 'serviceOrderFilterList', displayName: '服务单状态类型' },
    { name: 'employeeDrivingLicenseList', displayName: '员工驾驶证' },
    {
      name: 'vehicleInspectionOrderServiceLogList',
      displayName: '年检订单执行日志',
    },
    { name: 'serviceVehicleMovementC2mList', displayName: '收车服务' },
    {
      name: 'serviceVehicleMovementM2mListAsResponsibleWorker',
      displayName: '移车服务',
    },
    { name: 'serviceVehicleMovementM2mListAsDriver', displayName: '移车服务' },
    {
      name: 'serviceVehicleMovementM2mListAsReceiver',
      displayName: '移车服务',
    },
    { name: 'serviceVehicleMovementM2cList', displayName: '还车服务' },
    { name: 'serviceFileMovementC2mList', displayName: '收件服务' },
    {
      name: 'serviceFileMovementM2mListAsResponsibleWorker',
      displayName: '移件服务',
    },
    { name: 'serviceFileMovementM2mListAsSender', displayName: '移件服务' },
    { name: 'serviceFileMovementM2mListAsReceiver', displayName: '移件服务' },
    { name: 'serviceFileMovementM2cList', displayName: '还件服务' },
    { name: 'serviceInsuranceForInspectionList', displayName: '保险服务' },
    { name: 'serviceVehicleInspectionList', displayName: '车辆上线检测' },
    { name: 'serviceFileInspectionList', displayName: '6年免检服务' },
    { name: 'serviceVehicleRepairingList', displayName: '维修服务' },
    { name: 'serviceCompanyAccountList', displayName: '服务商户对账单' },
    { name: 'repairingCompanyAccountList', displayName: '修理厂对账单' },
    { name: 'insuranceServiceAccountList', displayName: '保险服务对账单' },
    { name: 'inspectionStationAccountList', displayName: '检测站对账单' },
  ],
}

const displayColumns = [
  {
    title: 'ID',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/vehicleServiceCompanyEmployee/${text}/dashboard`}>
        {text}
      </Link>
    ),
  },
  {
    title: '员工姓名',
    debugtype: 'string',
    dataIndex: 'employeeName',
    width: '7',
  },
  {
    title: '证件照片',
    dataIndex: 'profileImage',
    render: (text, record) => (
      <ImagePreview imageTitle="证件照片" imageLocation={record.profileImage} />
    ),
  },
  {
    title: '商户名称',
    debugtype: 'string',
    dataIndex: 'companyName',
    width: '27',
  },
  {
    title: '手机号码',
    debugtype: 'string_china_mobile_phone',
    dataIndex: 'mobileNumber',
    width: '15',
  },
  {
    title: '性别',
    debugtype: 'string_gender',
    dataIndex: 'gender',
    width: '5',
  },
  {
    title: '工作状态',
    debugtype: 'string',
    dataIndex: 'availableState',
    width: '8',
  },
  {
    title: '无犯罪记录证明',
    dataIndex: 'innocentEvidenceImage',
    render: (text, record) => (
      <ImagePreview
        imageTitle="无犯罪记录证明"
        imageLocation={record.innocentEvidenceImage}
      />
    ),
  },
  {
    title: '身份证号码',
    debugtype: 'string',
    dataIndex: 'identityCardNumber',
    width: '22',
  },
  {
    title: '商户',
    dataIndex: 'company',
    render: (text, record) =>
      record.company ? record.company.displayName : '暂无',
  },
  {
    title: '检测站',
    dataIndex: 'inspectionStation',
    render: (text, record) =>
      record.inspectionStation ? record.inspectionStation.displayName : '暂无',
  },
  {
    title: '是否可以移车',
    dataIndex: 'availableMoveCar',
    render: (text, record) => (record.availableMoveCar ? '是' : '否'),
  },
  {
    title: '是否可以检车',
    dataIndex: 'availableInspectionCar',
    render: (text, record) => (record.availableInspectionCar ? '是' : '否'),
  },
  {
    title: '是否可以修车',
    dataIndex: 'availableRepairCar',
    render: (text, record) => (record.availableRepairCar ? '是' : '否'),
  },
  {
    title: '资格认定',
    dataIndex: 'qualification',
    render: (text, record) =>
      record.qualification ? record.qualification.displayName : '暂无',
  },
  {
    title: '服务状态',
    dataIndex: 'serving',
    render: (text, record) =>
      record.serving ? record.serving.displayName : '暂无',
  },
  {
    title: '服务终止',
    dataIndex: 'termination',
    render: (text, record) =>
      record.termination ? record.termination.displayName : '暂无',
  },
  {
    title: '当前状态',
    debugtype: 'string',
    dataIndex: 'currentStatus',
    width: '14',
  },
]

const fieldLabels = {
  id: 'ID',
  employeeName: '员工姓名',
  profileImage: '证件照片',
  companyName: '商户名称',
  mobileNumber: '手机号码',
  gender: '性别',
  availableState: '工作状态',
  innocentEvidenceImage: '无犯罪记录证明',
  identityCardNumber: '身份证号码',
  company: '商户',
  inspectionStation: '检测站',
  availableMoveCar: '是否可以移车',
  availableInspectionCar: '是否可以检车',
  availableRepairCar: '是否可以修车',
  qualification: '资格认定',
  serving: '服务状态',
  termination: '服务终止',
  currentStatus: '当前状态',
}

const VehicleServiceCompanyEmployeeBase = {
  menuData,
  displayColumns,
  fieldLabels,
}
export default VehicleServiceCompanyEmployeeBase
