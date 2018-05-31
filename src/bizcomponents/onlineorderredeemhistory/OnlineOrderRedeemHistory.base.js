
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"线上订单兑换记录", menuFor: "onlineOrderRedeemHistory",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '线上订单号', dataIndex: 'onlineOrder', render: (text, record) => (record.onlineOrder ? record.onlineOrder.displayName : '暂无') },
  { title: '验证时间', dataIndex: 'verifyDatetime', render: (text, record) => moment(record.verifyDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '兑换时间', dataIndex: 'redeemDatetime', render: (text, record) => moment(record.redeemDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '兑换手机', debugtype: 'string_china_mobile_phone', dataIndex: 'redeemPhone', width: '15' },
  { title: '兑换验证码', debugtype: 'string', dataIndex: 'redeemCode', width: '13' },
  { title: '兑换状态', debugtype: 'string', dataIndex: 'redeemStatus', width: '7' },

]

const fieldLabels = {
  id: 'ID',
  employee: '员工',
  store: '门店',
  onlineOrder: '线上订单号',
  verifyDatetime: '验证时间',
  redeemDatetime: '兑换时间',
  redeemPhone: '兑换手机',
  redeemCode: '兑换验证码',
  redeemStatus: '兑换状态',

}


const OnlineOrderRedeemHistoryBase={menuData,displayColumns,fieldLabels}
export default OnlineOrderRedeemHistoryBase



