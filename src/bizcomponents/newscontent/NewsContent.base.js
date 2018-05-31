
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"新闻内容", menuFor: "newsContent",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '新闻文本', debugtype: 'string', dataIndex: 'newsText', width: '89' },
  { title: '新闻图片', dataIndex: 'newsImage', render: (text, record) => <ImagePreview imageTitle="新闻图片" imageLocation={record.newsImage} /> },
  { title: '新闻内容的顺序', debugtype: 'int', dataIndex: 'newsContentOrder', width: '5' },
  { title: '新闻', dataIndex: 'news', render: (text, record) => (record.news ? record.news.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  newsText: '新闻文本',
  newsImage: '新闻图片',
  newsContentOrder: '新闻内容的顺序',
  news: '新闻',

}


const NewsContentBase={menuData,displayColumns,fieldLabels}
export default NewsContentBase



