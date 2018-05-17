
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"区", menuFor: "district",
  		subItems: [
  {name: 'storeList', displayName:'商店'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/district/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '城市', dataIndex: 'city', render: (text, record) => (record.city ? record.city.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  city: '城市',

}


const DistrictBase={menuData,displayColumns,fieldLabels}
export default DistrictBase



