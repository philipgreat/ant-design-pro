
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"书副本共享应用程序", menuFor: "bookCopySharingApplication",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书副本数量', debugtype: 'string', dataIndex: 'bookCopyQuantity', width: '9' },
  { title: '书副本Image1', dataIndex: 'bookCopyImage1', render: (text, record) => <ImagePreview imageTitle="书副本Image1" imageLocation={record.bookCopyImage1} /> },
  { title: '书副本Image2', dataIndex: 'bookCopyImage2', render: (text, record) => <ImagePreview imageTitle="书副本Image2" imageLocation={record.bookCopyImage2} /> },
  { title: '书副本Image3', dataIndex: 'bookCopyImage3', render: (text, record) => <ImagePreview imageTitle="书副本Image3" imageLocation={record.bookCopyImage3} /> },
  { title: '书副本Image4', dataIndex: 'bookCopyImage4', render: (text, record) => <ImagePreview imageTitle="书副本Image4" imageLocation={record.bookCopyImage4} /> },
  { title: '书副本Image5', dataIndex: 'bookCopyImage5', render: (text, record) => <ImagePreview imageTitle="书副本Image5" imageLocation={record.bookCopyImage5} /> },
  { title: '提供的方法', debugtype: 'string', dataIndex: 'deliverMethod', width: '8' },
  { title: '目的地存储', dataIndex: 'destinationStore', render: (text, record) => (record.destinationStore ? record.destinationStore.displayName : '暂无') },
  { title: '联系地址', debugtype: 'string', dataIndex: 'contactAddress', width: '18' },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '6' },
  { title: '联系手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobile', width: '15' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '7' },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  bookCopyQuantity: '书副本数量',
  bookCopyImage1: '书副本Image1',
  bookCopyImage2: '书副本Image2',
  bookCopyImage3: '书副本Image3',
  bookCopyImage4: '书副本Image4',
  bookCopyImage5: '书副本Image5',
  deliverMethod: '提供的方法',
  destinationStore: '目的地存储',
  contactAddress: '联系地址',
  contactName: '联系人姓名',
  contactMobile: '联系手机',
  status: '状态',
  customer: '客户',
  employee: '员工',

}


const BookCopySharingApplicationBase={menuData,displayColumns,fieldLabels}
export default BookCopySharingApplicationBase



