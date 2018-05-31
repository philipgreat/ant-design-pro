
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"Vip级别", menuFor: "vipLevel",
  		subItems: [
  {name: 'customerList', displayName:'客户'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/vipLevel/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '9' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16' },
  { title: '等级经验值要求', debugtype: 'int', dataIndex: 'requiredExperience', width: '7' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',
  requiredExperience: '等级经验值要求',

}


const VipLevelBase={menuData,displayColumns,fieldLabels}
export default VipLevelBase



