
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"线上订单支付", menuFor: "onlineOrderPayment",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod', width: '7' },
  { title: '应付金额', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '实际金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '付款状态', debugtype: 'string', dataIndex: 'paymentStatus', width: '7' },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatMainOrderId', width: '36' },
  { title: '微信Prepay订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '线上订单号', dataIndex: 'onlineOrder', render: (text, record) => (record.onlineOrder ? record.onlineOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  paymentMethod: '支付方式',
  originalAmount: '应付金额',
  actualAmount: '实际金额',
  paymentStatus: '付款状态',
  wechatMainOrderId: '微信订单ID',
  wechatPrepayId: '微信Prepay订单ID',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  onlineOrder: '线上订单号',

}


const OnlineOrderPaymentBase={menuData,displayColumns,fieldLabels}
export default OnlineOrderPaymentBase



