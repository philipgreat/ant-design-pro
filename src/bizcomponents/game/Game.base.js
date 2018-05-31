
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"游戏", menuFor: "game",
  		subItems: [
  {name: 'gameSessionList', displayName:'游戏场次'},
  {name: 'gameSessionRecordList', displayName:'游戏场次记录'},
  {name: 'gamePlayerRecordList', displayName:'游戏玩家记录'},
  {name: 'rearrangeSessionTicketRecordListAsSourceGame', displayName:'换场记录'},
  {name: 'rearrangeSessionTicketRecordListAsTargetGame', displayName:'换场记录'},
  {name: 'gameTicketList', displayName:'游戏门票'},
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'ticketPrintingHistoryList', displayName:'门票打印记录'},
  {name: 'offlineStoreOrderList', displayName:'线下门店订单'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/game/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '14' },
  { title: '文字简介', debugtype: 'string', dataIndex: 'shortDescription', width: '57' },
  { title: '游戏详情', debugtype: 'string_longtext', dataIndex: 'longDescription', width: '10' },
  { title: '游戏图标', dataIndex: 'gameIcon', render: (text, record) => <ImagePreview imageTitle="游戏图标" imageLocation={record.gameIcon} /> },
  { title: '背景图像', dataIndex: 'backgroundImage', render: (text, record) => <ImagePreview imageTitle="背景图像" imageLocation={record.backgroundImage} /> },
  { title: '封面图片', dataIndex: 'coverImage', render: (text, record) => <ImagePreview imageTitle="封面图片" imageLocation={record.coverImage} /> },
  { title: '游戏Image1', dataIndex: 'gameImage1', render: (text, record) => <ImagePreview imageTitle="游戏Image1" imageLocation={record.gameImage1} /> },
  { title: '游戏Image2', dataIndex: 'gameImage2', render: (text, record) => <ImagePreview imageTitle="游戏Image2" imageLocation={record.gameImage2} /> },
  { title: '游戏Image3', dataIndex: 'gameImage3', render: (text, record) => <ImagePreview imageTitle="游戏Image3" imageLocation={record.gameImage3} /> },
  { title: '游戏Image4', dataIndex: 'gameImage4', render: (text, record) => <ImagePreview imageTitle="游戏Image4" imageLocation={record.gameImage4} /> },
  { title: '游戏Image5', dataIndex: 'gameImage5', render: (text, record) => <ImagePreview imageTitle="游戏Image5" imageLocation={record.gameImage5} /> },
  { title: '游戏Image6', dataIndex: 'gameImage6', render: (text, record) => <ImagePreview imageTitle="游戏Image6" imageLocation={record.gameImage6} /> },
  { title: '游戏视频', debugtype: 'string_longtext', dataIndex: 'gameVideo', width: '10' },
  { title: '最多玩家数', debugtype: 'int', dataIndex: 'maximumPlayerCount', width: '6' },
  { title: '最少玩家数', debugtype: 'int', dataIndex: 'minimumPlayerCount', width: '5' },
  { title: '推荐玩家数', debugtype: 'string', dataIndex: 'recommendPlayerCount', width: '7' },
  { title: '基础价格', dataIndex: 'baseListPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '时长', debugtype: 'int', dataIndex: 'gameDuration', width: '7' },
  { title: '开场游戏可售票时长', debugtype: 'int', dataIndex: 'gameReservation', width: '6' },
  { title: '游戏状态', dataIndex: 'gameStatus', render: (text, record) => (record.gameStatus ? '是' : '否') },
  { title: '游戏场次', dataIndex: 'sessionGame', render: (text, record) => (record.sessionGame ? '是' : '否') },
  { title: '游戏类别', dataIndex: 'gameCategory', render: (text, record) => (record.gameCategory ? record.gameCategory.displayName : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  shortDescription: '文字简介',
  longDescription: '游戏详情',
  gameIcon: '游戏图标',
  backgroundImage: '背景图像',
  coverImage: '封面图片',
  gameImage1: '游戏Image1',
  gameImage2: '游戏Image2',
  gameImage3: '游戏Image3',
  gameImage4: '游戏Image4',
  gameImage5: '游戏Image5',
  gameImage6: '游戏Image6',
  gameVideo: '游戏视频',
  maximumPlayerCount: '最多玩家数',
  minimumPlayerCount: '最少玩家数',
  recommendPlayerCount: '推荐玩家数',
  baseListPrice: '基础价格',
  gameDuration: '时长',
  gameReservation: '开场游戏可售票时长',
  gameStatus: '游戏状态',
  sessionGame: '游戏场次',
  gameCategory: '游戏类别',
  store: '门店',

}


const GameBase={menuData,displayColumns,fieldLabels}
export default GameBase



