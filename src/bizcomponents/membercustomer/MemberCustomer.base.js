
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员的客户", menuFor: "memberCustomer",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '会员服务产品', dataIndex: 'memberServiceProduct', render: (text, record) => (record.memberServiceProduct ? record.memberServiceProduct.displayName : '暂无') },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '10' },
  { title: '产品描述', debugtype: 'string', dataIndex: 'productDescription', width: '10' },
  { title: '参加研讨会', dataIndex: 'joinWorkshop', render: (text, record) => (record.joinWorkshop ? '是' : '否') },
  { title: '制造车间', dataIndex: 'createWorkshop', render: (text, record) => (record.createWorkshop ? '是' : '否') },
  { title: '借的书', dataIndex: 'borrowBook', render: (text, record) => (record.borrowBook ? '是' : '否') },
  { title: '是超级贵宾', dataIndex: 'isSuperVIP', render: (text, record) => (record.isSuperVIP ? '是' : '否') },
  { title: '会员服务Sku', dataIndex: 'memberServiceSku', render: (text, record) => (record.memberServiceSku ? record.memberServiceSku.displayName : '暂无') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '销售价格', dataIndex: 'salePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '会员服务时间', dataIndex: 'memberServicePeriod', render: (text, record) => (record.memberServicePeriod ? record.memberServicePeriod.displayName : '暂无') },
  { title: '服务期间名称', debugtype: 'string', dataIndex: 'servicePeriodName', width: '7' },
  { title: '服务时间天', debugtype: 'int', dataIndex: 'servicePeriodDays', width: '7' },
  { title: '开始日期Datetime', dataIndex: 'startDateDatetime', render: (text, record) => moment(record.startDateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '过期日期Datetime', dataIndex: 'expiredDateDatetime', render: (text, record) => moment(record.expiredDateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  memberServiceProduct: '会员服务产品',
  productName: '产品名称',
  productDescription: '产品描述',
  joinWorkshop: '参加研讨会',
  createWorkshop: '制造车间',
  borrowBook: '借的书',
  isSuperVIP: '是超级贵宾',
  memberServiceSku: '会员服务Sku',
  name: '名称',
  description: '描述',
  listPrice: '列出的价格',
  salePrice: '销售价格',
  memberServicePeriod: '会员服务时间',
  servicePeriodName: '服务期间名称',
  servicePeriodDays: '服务时间天',
  startDateDatetime: '开始日期Datetime',
  expiredDateDatetime: '过期日期Datetime',
  mainOrder: '主订单',
  customer: '客户',

}


const MemberCustomerBase={menuData,displayColumns,fieldLabels}
export default MemberCustomerBase



