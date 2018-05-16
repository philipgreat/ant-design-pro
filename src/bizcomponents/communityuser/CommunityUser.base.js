
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"社区用户", menuFor: "communityUser",
  		subItems: [
  {name: 'patientInfoList', displayName:'病人信息'},
  {name: 'userSkillList', displayName:'用户技能'},
  {name: 'messageFilterList', displayName:'消息过滤'},
  {name: 'userMessageList', displayName:'用户消息'},
  {name: 'taskList', displayName:'任务'},
  {name: 'taskAssigmentList', displayName:'任务分配'},
  {name: 'taskLikeList', displayName:'任务点赞'},
  {name: 'taskReplyList', displayName:'回复任务'},
  {name: 'taskReplyLikeList', displayName:'任务回复点赞'},
  {name: 'threadList', displayName:'主贴'},
  {name: 'threadReplyList', displayName:'跟帖回复'},
  {name: 'threadRegistrationList', displayName:'活动注册'},
  {name: 'threadLikeList', displayName:'主贴点赞'},
  {name: 'threadReplyLikeList', displayName:'跟帖回复点赞'},
  {name: 'fanList', displayName:'粉丝'},
  {name: 'followList', displayName:'关注'},
  {name: 'bonusPointList', displayName:'积分'},
  {name: 'experiencePointList', displayName:'成长值'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/communityUser/${text}/dashboard`}>{text}</Link>) },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '6' },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender', width: '5' },
  { title: '用户类型', debugtype: 'string', dataIndex: 'userType', width: '8' },
  { title: '头像', dataIndex: 'avatar', render: (text, record) => <ImagePreview imageTitle="头像" imageLocation={record.avatar} /> },
  { title: '生日', dataIndex: 'birthday', render: (text, record) => moment(record.birthday).format('YYYY-MM-DD') },
  { title: '成长值', debugtype: 'int', dataIndex: 'experiencePoint', width: '9' },
  { title: '积分', debugtype: 'int', dataIndex: 'bonusPoint', width: '11' },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '7' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '12' },
  { title: '隐藏的信息', dataIndex: 'hideInfo', render: (text, record) => (record.hideInfo ? '是' : '否') },
  { title: '管理员', dataIndex: 'administrator', render: (text, record) => (record.administrator ? '是' : '否') },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },
  { title: '点经验限制', debugtype: 'int', dataIndex: 'experiencePointLimit', width: '7' },
  { title: '经验点仍', debugtype: 'int', dataIndex: 'experiencePointRemain', width: '7' },
  { title: '经验点过去的日子', dataIndex: 'experiencePointLastDate', render: (text, record) => moment(record.experiencePointLastDate).format('YYYY-MM-DD') },

]

const fieldLabels = {
  id: '序号',
  mobile: '手机',
  nickName: '昵称',
  gender: '性别',
  userType: '用户类型',
  avatar: '头像',
  birthday: '生日',
  experiencePoint: '成长值',
  bonusPoint: '积分',
  city: '城市',
  status: '状态',
  hideInfo: '隐藏的信息',
  administrator: '管理员',
  community: '社区',
  experiencePointLimit: '点经验限制',
  experiencePointRemain: '经验点仍',
  experiencePointLastDate: '经验点过去的日子',

}


const CommunityUserBase={menuData,displayColumns,fieldLabels}
export default CommunityUserBase



