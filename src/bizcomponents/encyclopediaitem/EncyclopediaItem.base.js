
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"百科全书条目", menuFor: "encyclopediaItem",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  { title: '发布时间', dataIndex: 'publishTime', render: (text, record) => moment(record.publishTime).format('YYYY-MM-DD') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  publishTime: '发布时间',
  content: '内容',
  community: '社区',
  homePage: '主页',

}


const EncyclopediaItemBase={menuData,displayColumns,fieldLabels}
export default EncyclopediaItemBase



