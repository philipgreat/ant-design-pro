
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"主要订单付款", menuFor: "mainOrderPayment",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod', width: '7' },
  { title: '原始金额', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '实际的数量', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '付款状态', debugtype: 'string', dataIndex: 'paymentStatus', width: '7' },
  { title: '微信主要订单Id', debugtype: 'string', dataIndex: 'wechatMainOrderId', width: '36' },
  { title: 'Wechat提前支付Id', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  paymentMethod: '支付方式',
  originalAmount: '原始金额',
  actualAmount: '实际的数量',
  paymentStatus: '付款状态',
  wechatMainOrderId: '微信主要订单Id',
  wechatPrepayId: 'Wechat提前支付Id',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  mainOrder: '主订单',

}


const MainOrderPaymentBase={menuData,displayColumns,fieldLabels}
export default MainOrderPaymentBase



