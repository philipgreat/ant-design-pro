
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"城市", menuFor: "city",
  		subItems: [
  {name: 'storeList', displayName:'门店'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/city/${text}/dashboard`}>{text}</Link>) },
  { title: '城市名字', debugtype: 'string', dataIndex: 'cityName', width: '7' },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  cityName: '城市名字',
  gamePlatform: '游戏平台',

}


const CityBase={menuData,displayColumns,fieldLabels}
export default CityBase



