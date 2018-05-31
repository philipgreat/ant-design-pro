
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"客户", menuFor: "customer",
  		subItems: [
  {name: 'onlineOrderList', displayName:'线上订单号'},
  {name: 'couponList', displayName:'优惠券'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/customer/${text}/dashboard`}>{text}</Link>) },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '11' },
  { title: '头像', dataIndex: 'avatarImg', render: (text, record) => <ImagePreview imageTitle="头像" imageLocation={record.avatarImg} /> },
  { title: 'SecUser', dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.displayName : '暂无') },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '电子邮件', debugtype: 'string', dataIndex: 'email', width: '23' },
  { title: 'qq', debugtype: 'int', dataIndex: 'qq', width: '11' },
  { title: '微信 Openid', debugtype: 'string', dataIndex: 'weixinOpenid', width: '29' },
  { title: '微信 Appid', debugtype: 'string', dataIndex: 'weixinAppid', width: '23' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '经验值', debugtype: 'int', dataIndex: 'experienceValue', width: '8' },
  { title: '积分', debugtype: 'int', dataIndex: 'gameScore', width: '7' },
  { title: 'Vip级别', dataIndex: 'vipLevel', render: (text, record) => (record.vipLevel ? record.vipLevel.displayName : '暂无') },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  nickName: '昵称',
  avatarImg: '头像',
  secUser: 'SecUser',
  mobile: '手机号码',
  email: '电子邮件',
  qq: 'qq',
  weixinOpenid: '微信 Openid',
  weixinAppid: '微信 Appid',
  longitude: '经度',
  latitude: '纬度',
  experienceValue: '经验值',
  gameScore: '积分',
  vipLevel: 'Vip级别',
  gamePlatform: '游戏平台',

}


const CustomerBase={menuData,displayColumns,fieldLabels}
export default CustomerBase



