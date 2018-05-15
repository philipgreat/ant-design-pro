
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"城市", menuFor: "city",
  		subItems: [
  {name: 'districtList', displayName:'区'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/city/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '省', dataIndex: 'province', render: (text, record) => (record.province ? record.province.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  province: '省',

}


const CityBase={menuData,displayColumns,fieldLabels}
export default CityBase



