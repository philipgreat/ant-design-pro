import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {
  menuName: '优惠券使用记录',
  menuFor: 'vehicleInspectionOrderCoupon',
  subItems: [],
}

const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '优惠券名称',
    debugtype: 'string',
    dataIndex: 'couponTitle',
    width: '10',
  },
  {
    title: '优惠金额',
    dataIndex: 'discountAmount',
    className: 'money',
    render: (text, record) => `￥${text.toFixed(2)}`,
  },
  {
    title: '结束日期',
    dataIndex: 'endDate',
    render: (text, record) =>
      moment(record.endDate).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '使用日期',
    dataIndex: 'appliedDate',
    render: (text, record) =>
      moment(record.appliedDate).format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    title: '优惠券状态',
    debugtype: 'string',
    dataIndex: 'couponStatus',
    width: '7',
  },
  {
    title: '客户',
    dataIndex: 'customer',
    render: (text, record) =>
      record.customer ? record.customer.displayName : '暂无',
  },
  {
    title: '年检订单',
    dataIndex: 'mainOrder',
    render: (text, record) =>
      record.mainOrder ? record.mainOrder.displayName : '暂无',
  },
]

const fieldLabels = {
  id: 'ID',
  couponTitle: '优惠券名称',
  discountAmount: '优惠金额',
  endDate: '结束日期',
  lastUpdateTime: '最后更新时间',
  appliedDate: '使用日期',
  couponStatus: '优惠券状态',
  customer: '客户',
  mainOrder: '年检订单',
}

const VehicleInspectionOrderCouponBase = {
  menuData,
  displayColumns,
  fieldLabels,
}
export default VehicleInspectionOrderCouponBase