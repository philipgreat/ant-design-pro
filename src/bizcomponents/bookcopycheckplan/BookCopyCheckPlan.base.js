
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书副本检查计划", menuFor: "bookCopyCheckPlan",
  		subItems: [
  {name: 'bookCopyCheckRecordList', displayName:'书副本检查记录'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookCopyCheckPlan/${text}/dashboard`}>{text}</Link>) },
  { title: '检查计划的名字', debugtype: 'string', dataIndex: 'checkPlanName', width: '10' },
  { title: '检查存储', dataIndex: 'checkStore', render: (text, record) => (record.checkStore ? record.checkStore.displayName : '暂无') },
  { title: '计划日期时间', dataIndex: 'planDatetime', render: (text, record) => moment(record.planDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '计划的创造者', dataIndex: 'planCreator', render: (text, record) => (record.planCreator ? record.planCreator.displayName : '暂无') },
  { title: '计划更新日期时间', dataIndex: 'planUpdateDatetime', render: (text, record) => moment(record.planUpdateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检查计划状态', debugtype: 'string', dataIndex: 'checkPlanStatus', width: '6' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  checkPlanName: '检查计划的名字',
  checkStore: '检查存储',
  planDatetime: '计划日期时间',
  planCreator: '计划的创造者',
  planUpdateDatetime: '计划更新日期时间',
  checkPlanStatus: '检查计划状态',
  bookManagement: '图书管理',

}


const BookCopyCheckPlanBase={menuData,displayColumns,fieldLabels}
export default BookCopyCheckPlanBase



