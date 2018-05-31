
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"优惠券", menuFor: "coupon",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '优惠券名称', debugtype: 'string', dataIndex: 'couponName', width: '9' },
  { title: '优惠券的折扣', dataIndex: 'couponDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.displayName : '暂无') },
  { title: '线上订单号', dataIndex: 'onlineOrder', render: (text, record) => (record.onlineOrder ? record.onlineOrder.displayName : '暂无') },
  { title: '线下门店订单', dataIndex: 'offlineStoreOrder', render: (text, record) => (record.offlineStoreOrder ? record.offlineStoreOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  couponName: '优惠券名称',
  couponDiscount: '优惠券的折扣',
  customer: '客户',
  gamePlatform: '游戏平台',
  onlineOrder: '线上订单号',
  offlineStoreOrder: '线下门店订单',

}


const CouponBase={menuData,displayColumns,fieldLabels}
export default CouponBase



