
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"横幅", menuFor: "banner",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '图像', dataIndex: 'image', render: (text, record) => <ImagePreview imageTitle="图像" imageLocation={record.image} /> },
  { title: '链接网址', debugtype: 'string_url', dataIndex: 'linkUrl', width: '46' },
  { title: 'Alt文本', debugtype: 'string', dataIndex: 'altText', width: '13' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  image: '图像',
  linkUrl: '链接网址',
  altText: 'Alt文本',
  store: '门店',

}


const BannerBase={menuData,displayColumns,fieldLabels}
export default BannerBase



