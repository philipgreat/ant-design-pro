
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员帐户充电产品", menuFor: "memberAccountRechargeProduct",
  		subItems: [
  {name: 'memberAccountRechargeSkuList', displayName:'会员帐户Sku充电'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/memberAccountRechargeProduct/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '账户管理', dataIndex: 'accountManagement', render: (text, record) => (record.accountManagement ? record.accountManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  accountManagement: '账户管理',

}


const MemberAccountRechargeProductBase={menuData,displayColumns,fieldLabels}
export default MemberAccountRechargeProductBase



