
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏类别", menuFor: "gameCategory",
  		subItems: [
  {name: 'gameList', displayName:'游戏'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/gameCategory/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '59' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',
  store: '门店',

}


const GameCategoryBase={menuData,displayColumns,fieldLabels}
export default GameCategoryBase



