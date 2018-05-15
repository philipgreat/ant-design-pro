
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"会员服务管理", menuFor: "memberServiceManagement",
  		subItems: [
  {name: 'memberServiceProductList', displayName:'会员服务产品'},
  {name: 'memberServicePeriodList', displayName:'会员服务时间'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/memberServiceManagement/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '10' },
  { title: '书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  bookSharingPlatform: '书共享平台',

}


const MemberServiceManagementBase={menuData,displayColumns,fieldLabels}
export default MemberServiceManagementBase



