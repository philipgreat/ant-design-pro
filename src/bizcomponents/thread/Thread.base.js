
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"主贴", menuFor: "thread",
  		subItems: [
  {name: 'threadReplyList', displayName:'跟帖回复'},
  {name: 'threadRegistrationList', displayName:'活动注册'},
  {name: 'threadLikeList', displayName:'主贴点赞'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/thread/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  { title: '显示顺序', debugtype: 'int', dataIndex: 'displayOrder', width: '10' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '事件时间', dataIndex: 'eventTime', render: (text, record) => moment(record.eventTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '注册时间停止', dataIndex: 'registrationStopTime', render: (text, record) => moment(record.registrationStopTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '事件的位置', debugtype: 'string', dataIndex: 'eventLocation', width: '13' },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6' },
  { title: '社区组', debugtype: 'string', dataIndex: 'communityGroup', width: '8' },
  { title: '帖子类型', debugtype: 'string', dataIndex: 'threadType', width: '9' },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },
  { title: '创建者', dataIndex: 'creator', render: (text, record) => (record.creator ? record.creator.displayName : '暂无') },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.displayName : '暂无') },
  { title: '群组页面', dataIndex: 'groupPage', render: (text, record) => (record.groupPage ? record.groupPage.displayName : '暂无') },
  { title: '视频网址', debugtype: 'string', dataIndex: 'videoUrl', width: '50' },
  { title: '封面图像路径1', dataIndex: 'coverImagePath1', render: (text, record) => <ImagePreview imageTitle="封面图像路径1" imageLocation={record.coverImagePath1} /> },
  { title: '封面图像路径2', dataIndex: 'coverImagePath2', render: (text, record) => <ImagePreview imageTitle="封面图像路径2" imageLocation={record.coverImagePath2} /> },
  { title: '封面图像路径3', dataIndex: 'coverImagePath3', render: (text, record) => <ImagePreview imageTitle="封面图像路径3" imageLocation={record.coverImagePath3} /> },
  { title: '图1', dataIndex: 'imagePath1', render: (text, record) => <ImagePreview imageTitle="图1" imageLocation={record.imagePath1} /> },
  { title: '图2', dataIndex: 'imagePath2', render: (text, record) => <ImagePreview imageTitle="图2" imageLocation={record.imagePath2} /> },
  { title: '图3', dataIndex: 'imagePath3', render: (text, record) => <ImagePreview imageTitle="图3" imageLocation={record.imagePath3} /> },
  { title: '图4', dataIndex: 'imagePath4', render: (text, record) => <ImagePreview imageTitle="图4" imageLocation={record.imagePath4} /> },
  { title: '图5', dataIndex: 'imagePath5', render: (text, record) => <ImagePreview imageTitle="图5" imageLocation={record.imagePath5} /> },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  { title: '验收', dataIndex: 'approval', render: (text, record) => (record.approval ? record.approval.displayName : '暂无') },
  { title: '取消', dataIndex: 'canceling', render: (text, record) => (record.canceling ? record.canceling.displayName : '暂无') },
  { title: '完成', dataIndex: 'completion', render: (text, record) => (record.completion ? record.completion.displayName : '暂无') },
  { title: '躲藏', dataIndex: 'hiding', render: (text, record) => (record.hiding ? record.hiding.displayName : '暂无') },
  { title: '当前用户已点赞', dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前用户已回复', dataIndex: 'repliedByCurrentUser', render: (text, record) => (record.repliedByCurrentUser ? '是' : '否') },
  { title: '由当前用户注册', dataIndex: 'registeredByCurrentUser', render: (text, record) => (record.registeredByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '13' },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  displayOrder: '显示顺序',
  createTime: '创建时间',
  eventTime: '事件时间',
  registrationStopTime: '注册时间停止',
  eventLocation: '事件的位置',
  city: '城市',
  communityGroup: '社区组',
  threadType: '帖子类型',
  community: '社区',
  creator: '创建者',
  homePage: '主页',
  groupPage: '群组页面',
  videoUrl: '视频网址',
  coverImagePath1: '封面图像路径1',
  coverImagePath2: '封面图像路径2',
  coverImagePath3: '封面图像路径3',
  imagePath1: '图1',
  imagePath2: '图2',
  imagePath3: '图3',
  imagePath4: '图4',
  imagePath5: '图5',
  content: '内容',
  approval: '验收',
  canceling: '取消',
  completion: '完成',
  hiding: '躲藏',
  likeByCurrentUser: '当前用户已点赞',
  repliedByCurrentUser: '当前用户已回复',
  registeredByCurrentUser: '由当前用户注册',
  currentStatus: '当前状态',

}


const ThreadBase={menuData,displayColumns,fieldLabels}
export default ThreadBase



