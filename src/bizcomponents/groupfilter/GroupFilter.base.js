
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"群组过滤器", menuFor: "groupFilter",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '滤波环节', debugtype: 'string', dataIndex: 'filterLink', width: '32' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: '群组页面', dataIndex: 'groupPage', render: (text, record) => (record.groupPage ? record.groupPage.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  filterLink: '滤波环节',
  title: '标题',
  groupPage: '群组页面',

}


const GroupFilterBase={menuData,displayColumns,fieldLabels}
export default GroupFilterBase



