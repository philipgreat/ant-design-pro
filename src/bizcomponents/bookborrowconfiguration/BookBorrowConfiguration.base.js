
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书借配置", menuFor: "bookBorrowConfiguration",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '最大允许数', debugtype: 'int', dataIndex: 'maximumAllowedNumber', width: '6' },
  { title: '自由借贷天', debugtype: 'int', dataIndex: 'freeLendingDays', width: '6' },
  { title: '贷款支付率', dataIndex: 'lendingPayRate', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '贷款计算频率', debugtype: 'int', dataIndex: 'lendingComputeFrequency', width: '5' },
  { title: '图书管理', dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  maximumAllowedNumber: '最大允许数',
  freeLendingDays: '自由借贷天',
  lendingPayRate: '贷款支付率',
  lendingComputeFrequency: '贷款计算频率',
  bookManagement: '图书管理',

}


const BookBorrowConfigurationBase={menuData,displayColumns,fieldLabels}
export default BookBorrowConfigurationBase



