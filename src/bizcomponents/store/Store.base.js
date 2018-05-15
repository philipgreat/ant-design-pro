
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"商店", menuFor: "store",
  		subItems: [
  {name: 'bookCopyList', displayName:'书副本'},
  {name: 'bookCopyCheckPlanList', displayName:'书副本检查计划'},
  {name: 'bookCopyOperationRecordList', displayName:'书复制操作记录'},
  {name: 'borrowingHistoryListAsLendingStore', displayName:'借贷历史'},
  {name: 'borrowingHistoryListAsReturnStore', displayName:'借贷历史'},
  {name: 'borrowingExpiredSkuListAsLendingStore', displayName:'借款到期Sku'},
  {name: 'borrowingExpiredSkuListAsReturnStore', displayName:'借款到期Sku'},
  {name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序'},
  {name: 'storeAccountList', displayName:'存储账户'},
  {name: 'workshopList', displayName:'车间'},
  {name: 'employeeWorkingStoreList', displayName:'员工工作的商店'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/store/${text}/dashboard`}>{text}</Link>) },
  { title: '商店的名字', debugtype: 'string', dataIndex: 'storeName', width: '26' },
  { title: '存储地址', debugtype: 'string', dataIndex: 'storeAddress', width: '25' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '11' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '10' },
  { title: '商店形象', dataIndex: 'storeImage', render: (text, record) => <ImagePreview imageTitle="商店形象" imageLocation={record.storeImage} /> },
  { title: '存储类型', debugtype: 'string', dataIndex: 'storeType', width: '6' },
  { title: '打印机', dataIndex: 'printer', render: (text, record) => (record.printer ? record.printer.displayName : '暂无') },
  { title: '区', dataIndex: 'district', render: (text, record) => (record.district ? record.district.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  storeName: '商店的名字',
  storeAddress: '存储地址',
  longitude: '经度',
  latitude: '纬度',
  storeImage: '商店形象',
  storeType: '存储类型',
  printer: '打印机',
  district: '区',
  platform: '平台',

}


const StoreBase={menuData,displayColumns,fieldLabels}
export default StoreBase



