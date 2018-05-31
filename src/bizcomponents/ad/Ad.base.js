
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"广告", menuFor: "ad",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  store: '门店',
  gamePlatform: '游戏平台',

}


const AdBase={menuData,displayColumns,fieldLabels}
export default AdBase



