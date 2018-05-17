
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员帐户Sku充电", menuFor: "memberAccountRechargeSku",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '7' },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '销售价格', dataIndex: 'salePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '会员帐户充电产品', dataIndex: 'memberAccountRechargeProduct', render: (text, record) => (record.memberAccountRechargeProduct ? record.memberAccountRechargeProduct.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',
  listPrice: '列出的价格',
  salePrice: '销售价格',
  memberAccountRechargeProduct: '会员帐户充电产品',

}


const MemberAccountRechargeSkuBase={menuData,displayColumns,fieldLabels}
export default MemberAccountRechargeSkuBase



