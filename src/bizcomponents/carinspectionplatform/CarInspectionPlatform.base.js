
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"汽车检测平台", menuFor: "carInspectionPlatform",
  		subItems: [
  {name: 'provinceList', displayName:'省'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/carInspectionPlatform/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
  { title: '保险联系人姓名', debugtype: 'string', dataIndex: 'insuranceContactName', width: '8' },
  { title: '保险接触手机', debugtype: 'string_china_mobile_phone', dataIndex: 'insuranceContactMobile', width: '15' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',
  insuranceContactName: '保险联系人姓名',
  insuranceContactMobile: '保险接触手机',

}


const CarInspectionPlatformBase={menuData,displayColumns,fieldLabels}
export default CarInspectionPlatformBase



