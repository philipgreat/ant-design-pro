
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"玩家", menuFor: "player",
  		subItems: [
  {name: 'gamePlayerRecordList', displayName:'游戏玩家记录'},
  {name: 'gameTokenList', displayName:'游戏Token'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/player/${text}/dashboard`}>{text}</Link>) },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '8' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '密码', debugtype: 'int', dataIndex: 'password', width: '10' },
  { title: '经验值', debugtype: 'int', dataIndex: 'experienceValue', width: '8' },
  { title: '积分', debugtype: 'int', dataIndex: 'gameScore', width: '7' },

]

const fieldLabels = {
  id: 'ID',
  nickName: '昵称',
  mobile: '手机号码',
  password: '密码',
  experienceValue: '经验值',
  gameScore: '积分',

}


const PlayerBase={menuData,displayColumns,fieldLabels}
export default PlayerBase



