
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"图书管理", menuFor: "bookManagement",
  		subItems: [
  {name: 'bookTagRecordList', displayName:'书标签记录'},
  {name: 'bookCopySharingBenefitConfigurationList', displayName:'图书拷贝共享利益配置。'},
  {name: 'bookCopyDonateBenefitConfigurationList', displayName:'图书拷贝捐赠利益配置。'},
  {name: 'bookBorrowConfigurationList', displayName:'书借配置'},
  {name: 'bookList', displayName:'书'},
  {name: 'bookCopyStatusList', displayName:'书副本地位'},
  {name: 'bookCopySkuList', displayName:'书副本Sku'},
  {name: 'bookCopyCheckPlanList', displayName:'书副本检查计划'},
  {name: 'bookCopyCheckStatusList', displayName:'书副本检查状态'},
  {name: 'bookReviewTypeList', displayName:'书评类型'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/bookManagement/${text}/dashboard`}>{text}</Link>) },
  { title: '书管理的名字', debugtype: 'string', dataIndex: 'bookManagementName', width: '10' },
  { title: '书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookManagementName: '书管理的名字',
  bookSharingPlatform: '书共享平台',

}


const BookManagementBase={menuData,displayColumns,fieldLabels}
export default BookManagementBase



