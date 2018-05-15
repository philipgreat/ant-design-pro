
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员服务Sku", menuFor: "memberServiceSku",
  		subItems: [
  {name: 'memberCustomerList', displayName:'会员的客户'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/memberServiceSku/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '销售价格', dataIndex: 'salePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '会员服务时间', dataIndex: 'memberServicePeriod', render: (text, record) => (record.memberServicePeriod ? record.memberServicePeriod.displayName : '暂无') },
  { title: '成员的产品', dataIndex: 'memberProduct', render: (text, record) => (record.memberProduct ? record.memberProduct.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',
  listPrice: '列出的价格',
  salePrice: '销售价格',
  memberServicePeriod: '会员服务时间',
  memberProduct: '成员的产品',

}


const MemberServiceSkuBase={menuData,displayColumns,fieldLabels}
export default MemberServiceSkuBase



