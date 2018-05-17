
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"图书拷贝共享利益配置。", menuFor: "bookCopySharingBenefitConfiguration",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '供应商的利益', debugtype: 'string', dataIndex: 'vendorBenefit', width: '7' },
  { title: '贷款商店受益', debugtype: 'string', dataIndex: 'lendingStoreBenefit', width: '7' },
  { title: '平台的好处', debugtype: 'string', dataIndex: 'platformBenefit', width: '7' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  vendorBenefit: '供应商的利益',
  lendingStoreBenefit: '贷款商店受益',
  platformBenefit: '平台的好处',
  bookManagement: '图书管理',

}


const BookCopySharingBenefitConfigurationBase={menuData,displayColumns,fieldLabels}
export default BookCopySharingBenefitConfigurationBase



