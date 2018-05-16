
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"主页", menuFor: "homePage",
  		subItems: [
  {name: 'slideList', displayName:'幻灯片'},
  {name: 'encyclopediaItemList', displayName:'百科全书条目'},
  {name: 'taskFilterList', displayName:'任务过滤器'},
  {name: 'taskList', displayName:'任务'},
  {name: 'threadList', displayName:'主贴'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/homePage/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '6' },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  community: '社区',

}


const HomePageBase={menuData,displayColumns,fieldLabels}
export default HomePageBase



