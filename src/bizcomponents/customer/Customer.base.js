
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"客户", menuFor: "customer",
  		subItems: [
  {name: 'bookCopyList', displayName:'书副本'},
  {name: 'borrowingHistoryList', displayName:'借贷历史'},
  {name: 'borrowingExpiredSkuList', displayName:'借款到期Sku'},
  {name: 'bookReviewList', displayName:'书评'},
  {name: 'bookReviewLikeList', displayName:'这样的书评'},
  {name: 'bookCopySharingApplicationList', displayName:'书副本共享应用程序'},
  {name: 'customerAccountList', displayName:'客户账户'},
  {name: 'workshopRegisterHistoryList', displayName:'车间登记历史'},
  {name: 'workshopReviewList', displayName:'车间检查'},
  {name: 'workshopLikeList', displayName:'车间等'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/customer/${text}/dashboard`}>{text}</Link>) },
  { title: '尼克的名字', debugtype: 'string', dataIndex: 'nickName', width: '24' },
  { title: '标志形象', dataIndex: 'logoImage', render: (text, record) => <ImagePreview imageTitle="标志形象" imageLocation={record.logoImage} /> },
  { title: '迷你程序Openid', debugtype: 'string', dataIndex: 'miniProgramOpenid', width: '37' },
  { title: '服务计算Openid', debugtype: 'string', dataIndex: 'serviceAcountOpenid', width: '37' },
  { title: 'Wechat联盟Id', debugtype: 'string', dataIndex: 'wechatUnionId', width: '37' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15' },
  { title: '会员级别标题', debugtype: 'string', dataIndex: 'memberLevelTitle', width: '23' },
  { title: '会员级别代码', debugtype: 'string', dataIndex: 'memberLevelCode', width: '13' },
  { title: '成员级别的过期日期', dataIndex: 'memberLevelExpireDate', render: (text, record) => moment(record.memberLevelExpireDate).format('YYYY-MM-DD') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  nickName: '尼克的名字',
  logoImage: '标志形象',
  miniProgramOpenid: '迷你程序Openid',
  serviceAcountOpenid: '服务计算Openid',
  wechatUnionId: 'Wechat联盟Id',
  longitude: '经度',
  latitude: '纬度',
  mobileNumber: '手机号码',
  memberLevelTitle: '会员级别标题',
  memberLevelCode: '会员级别代码',
  memberLevelExpireDate: '成员级别的过期日期',
  platform: '平台',

}


const CustomerBase={menuData,displayColumns,fieldLabels}
export default CustomerBase



