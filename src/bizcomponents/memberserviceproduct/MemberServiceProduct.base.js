
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员服务产品", menuFor: "memberServiceProduct",
  		subItems: [
  {name: 'tokenInMemberServiceProductList', displayName:'成员服务产品中的令牌。'},
  {name: 'memberServiceBoundleSkuList', displayName:'会员服务Boundle Sku'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/memberServiceProduct/${text}/dashboard`}>{text}</Link>) },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '10' },
  { title: '产品描述', debugtype: 'string', dataIndex: 'productDescription', width: '10' },
  { title: '参加研讨会', dataIndex: 'joinWorkshop', render: (text, record) => (record.joinWorkshop ? '是' : '否') },
  { title: '制造车间', dataIndex: 'createWorkshop', render: (text, record) => (record.createWorkshop ? '是' : '否') },
  { title: '借的书', dataIndex: 'borrowBook', render: (text, record) => (record.borrowBook ? '是' : '否') },
  { title: '超级贵宾', dataIndex: 'superVIP', render: (text, record) => (record.superVIP ? '是' : '否') },
  { title: '会员服务管理', dataIndex: 'memberServiceManagement', render: (text, record) => (record.memberServiceManagement ? record.memberServiceManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  productName: '产品名称',
  productDescription: '产品描述',
  joinWorkshop: '参加研讨会',
  createWorkshop: '制造车间',
  borrowBook: '借的书',
  superVIP: '超级贵宾',
  memberServiceManagement: '会员服务管理',

}


const MemberServiceProductBase={menuData,displayColumns,fieldLabels}
export default MemberServiceProductBase



