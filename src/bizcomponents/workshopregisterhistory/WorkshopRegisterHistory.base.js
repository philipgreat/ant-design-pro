
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"车间登记历史", menuFor: "workshopRegisterHistory",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车间', dataIndex: 'workshop', render: (text, record) => (record.workshop ? record.workshop.displayName : '暂无') },
  { title: '注册会员', dataIndex: 'registerMember', render: (text, record) => (record.registerMember ? record.registerMember.displayName : '暂无') },
  { title: '注册日期时间', dataIndex: 'registerDatetime', render: (text, record) => moment(record.registerDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '登记注册类型', debugtype: 'string', dataIndex: 'registrationType', width: '6' },

]

const fieldLabels = {
  id: 'ID',
  workshop: '车间',
  registerMember: '注册会员',
  registerDatetime: '注册日期时间',
  registrationType: '登记注册类型',

}


const WorkshopRegisterHistoryBase={menuData,displayColumns,fieldLabels}
export default WorkshopRegisterHistoryBase



