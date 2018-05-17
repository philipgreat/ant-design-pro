
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员服务Boundle Sku", menuFor: "memberServiceBoundleSku",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '会员服务名称', debugtype: 'string', dataIndex: 'memberServiceName', width: '13' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '23' },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '销售价格', dataIndex: 'salePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '服务期月', debugtype: 'int', dataIndex: 'servicePeriodMonths', width: '6' },
  { title: '成员的产品', dataIndex: 'memberProduct', render: (text, record) => (record.memberProduct ? record.memberProduct.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  memberServiceName: '会员服务名称',
  description: '描述',
  listPrice: '列出的价格',
  salePrice: '销售价格',
  servicePeriodMonths: '服务期月',
  memberProduct: '成员的产品',

}


const MemberServiceBoundleSkuBase={menuData,displayColumns,fieldLabels}
export default MemberServiceBoundleSkuBase



