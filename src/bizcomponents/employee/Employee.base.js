
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"员工", menuFor: "employee",
  		subItems: [
  {name: 'bookCopyCheckPlanList', displayName:'书副本检查计划'},
  {name: 'bookCopyCheckRecordList', displayName:'书副本检查记录'},
  {name: 'bookCopyOperationRecordList', displayName:'书复制操作记录'},
  {name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序'},
  {name: 'workshopList', displayName:'车间'},
  {name: 'employeeWorkingStoreList', displayName:'员工工作的商店'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/employee/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '员工形象', dataIndex: 'employeeImage', render: (text, record) => <ImagePreview imageTitle="员工形象" imageLocation={record.employeeImage} /> },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15' },
  { title: '角色', dataIndex: 'role', render: (text, record) => (record.role ? record.role.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  employeeImage: '员工形象',
  mobileNumber: '手机号码',
  role: '角色',

}


const EmployeeBase={menuData,displayColumns,fieldLabels}
export default EmployeeBase



