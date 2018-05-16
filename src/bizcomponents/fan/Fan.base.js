
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"粉丝", menuFor: "fan",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.displayName : '暂无') },
  { title: '粉丝的ID', debugtype: 'string', dataIndex: 'fanId', width: '12' },
  { title: '添加时间', dataIndex: 'addingTime', render: (text, record) => moment(record.addingTime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: '序号',
  user: '用户',
  fanId: '粉丝的ID',
  addingTime: '添加时间',

}


const FanBase={menuData,displayColumns,fieldLabels}
export default FanBase



