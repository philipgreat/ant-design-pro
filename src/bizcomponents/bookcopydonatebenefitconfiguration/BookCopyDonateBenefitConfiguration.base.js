
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"图书拷贝捐赠利益配置。", menuFor: "bookCopyDonateBenefitConfiguration",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '供应商的利益', debugtype: 'string', dataIndex: 'vendorBenefit', width: '6' },
  { title: '贷款商店受益', debugtype: 'string', dataIndex: 'lendingStoreBenefit', width: '7' },
  { title: '平台的好处', debugtype: 'string', dataIndex: 'platformBenefit', width: '7' },
  { title: '公共服务基金受益', debugtype: 'string', dataIndex: 'publicServiceFundBenefit', width: '7' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  vendorBenefit: '供应商的利益',
  lendingStoreBenefit: '贷款商店受益',
  platformBenefit: '平台的好处',
  publicServiceFundBenefit: '公共服务基金受益',
  bookManagement: '图书管理',

}


const BookCopyDonateBenefitConfigurationBase={menuData,displayColumns,fieldLabels}
export default BookCopyDonateBenefitConfigurationBase



