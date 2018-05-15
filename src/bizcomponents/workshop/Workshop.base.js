
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"车间", menuFor: "workshop",
  		subItems: [
  {name: 'workshopRegisterHistoryList', displayName:'车间登记历史'},
  {name: 'workshopReviewList', displayName:'车间检查'},
  {name: 'workshopLikeList', displayName:'车间等'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/workshop/${text}/dashboard`}>{text}</Link>) },
  { title: '工厂的名字', debugtype: 'string', dataIndex: 'workshopName', width: '13' },
  { title: '研讨会内容', debugtype: 'string', dataIndex: 'workshopContent', width: '27' },
  { title: '车间图片', dataIndex: 'workshopImage', render: (text, record) => <ImagePreview imageTitle="车间图片" imageLocation={record.workshopImage} /> },
  { title: '车间的地位', debugtype: 'string', dataIndex: 'workshopStatus', width: '7' },
  { title: '车间活动日期时间', dataIndex: 'workshopEventDatetime', render: (text, record) => moment(record.workshopEventDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器Datetime', dataIndex: 'availableRegisterDatetime', render: (text, record) => moment(record.availableRegisterDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器数量', debugtype: 'int', dataIndex: 'availableRegisterQuantity', width: '6' },
  { title: '发布日期时间', dataIndex: 'publishDatetime', render: (text, record) => moment(record.publishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '发布商店', dataIndex: 'publishStore', render: (text, record) => (record.publishStore ? record.publishStore.displayName : '暂无') },
  { title: '发布员工', dataIndex: 'publishEmployee', render: (text, record) => (record.publishEmployee ? record.publishEmployee.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  workshopName: '工厂的名字',
  workshopContent: '研讨会内容',
  workshopImage: '车间图片',
  workshopStatus: '车间的地位',
  workshopEventDatetime: '车间活动日期时间',
  availableRegisterDatetime: '可用的寄存器Datetime',
  availableRegisterQuantity: '可用的寄存器数量',
  publishDatetime: '发布日期时间',
  publishStore: '发布商店',
  publishEmployee: '发布员工',

}


const WorkshopBase={menuData,displayColumns,fieldLabels}
export default WorkshopBase



