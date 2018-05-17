
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"省", menuFor: "province",
  		subItems: [
  {name: 'cityList', displayName:'城市'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/province/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '书共享平台', dataIndex: 'bookSharingPlatform', render: (text, record) => (record.bookSharingPlatform ? record.bookSharingPlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  bookSharingPlatform: '书共享平台',

}


const ProvinceBase={menuData,displayColumns,fieldLabels}
export default ProvinceBase



