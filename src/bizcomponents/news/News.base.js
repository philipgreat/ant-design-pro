
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"新闻", menuFor: "news",
  		subItems: [
  {name: 'newsContentList', displayName:'新闻内容'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/news/${text}/dashboard`}>{text}</Link>) },
  { title: '新闻的名字', debugtype: 'string', dataIndex: 'newsName', width: '27' },
  { title: '新闻的封面图片', dataIndex: 'newsCoverImage', render: (text, record) => <ImagePreview imageTitle="新闻的封面图片" imageLocation={record.newsCoverImage} /> },
  { title: '新闻日期', dataIndex: 'newsDate', render: (text, record) => moment(record.newsDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  newsName: '新闻的名字',
  newsCoverImage: '新闻的封面图片',
  newsDate: '新闻日期',
  store: '门店',

}


const NewsBase={menuData,displayColumns,fieldLabels}
export default NewsBase



