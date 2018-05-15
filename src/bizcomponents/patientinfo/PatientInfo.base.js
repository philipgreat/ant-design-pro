
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"病人信息", menuFor: "patientInfo",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '6' },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender', width: '5' },
  { title: '生日', dataIndex: 'birthday', render: (text, record) => moment(record.birthday).format('YYYY-MM-DD') },
  { title: '佩戴设备类型', debugtype: 'string', dataIndex: 'wearDeviceType', width: '8' },
  { title: '磨损的开始时间', dataIndex: 'wearStartTime', render: (text, record) => moment(record.wearStartTime).format('YYYY-MM-DD') },
  { title: '康复计划', debugtype: 'string', dataIndex: 'recoverPlan', width: '15' },
  { title: '复苏开始时间', dataIndex: 'recoverStartTime', render: (text, record) => moment(record.recoverStartTime).format('YYYY-MM-DD') },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  name: '名称',
  nickName: '昵称',
  gender: '性别',
  birthday: '生日',
  wearDeviceType: '佩戴设备类型',
  wearStartTime: '磨损的开始时间',
  recoverPlan: '康复计划',
  recoverStartTime: '复苏开始时间',
  user: '用户',

}


const PatientInfoBase={menuData,displayColumns,fieldLabels}
export default PatientInfoBase



