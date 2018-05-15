
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"幻灯片", menuFor: "slide",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: '图像网址', dataIndex: 'imageUrl', render: (text, record) => <ImagePreview imageTitle="图像网址" imageLocation={record.imageUrl} /> },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '40' },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  imageUrl: '图像网址',
  linkUrl: '链接网址',
  homePage: '主页',

}


const SlideBase={menuData,displayColumns,fieldLabels}
export default SlideBase



