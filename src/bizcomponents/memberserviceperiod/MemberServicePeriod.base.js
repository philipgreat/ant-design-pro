
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员服务时间", menuFor: "memberServicePeriod",
  		subItems: [
  {name: 'memberServiceSkuList', displayName:'会员服务Sku'},
  {name: 'memberCustomerList', displayName:'会员的客户'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/memberServicePeriod/${text}/dashboard`}>{text}</Link>) },
  { title: '服务期间名称', debugtype: 'string', dataIndex: 'servicePeriodName', width: '7' },
  { title: '服务时间天', debugtype: 'int', dataIndex: 'servicePeriodDays', width: '7' },
  { title: '会员服务管理', dataIndex: 'memberServiceManagement', render: (text, record) => (record.memberServiceManagement ? record.memberServiceManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  servicePeriodName: '服务期间名称',
  servicePeriodDays: '服务时间天',
  memberServiceManagement: '会员服务管理',

}


const MemberServicePeriodBase={menuData,displayColumns,fieldLabels}
export default MemberServicePeriodBase



