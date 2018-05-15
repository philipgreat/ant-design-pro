
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"任务", menuFor: "task",
  		subItems: [
  {name: 'taskAssigmentList', displayName:'任务分配'},
  {name: 'taskLikeList', displayName:'任务点赞'},
  {name: 'taskReplyList', displayName:'回复任务'},
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/task/${text}/dashboard`}>{text}</Link>) },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15' },
  { title: '选定的任务', debugtype: 'string', dataIndex: 'selectedTask', width: '5' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107' },
  { title: '创建者', dataIndex: 'creator', render: (text, record) => (record.creator ? record.creator.displayName : '暂无') },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },
  { title: '主页', dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.displayName : '暂无') },
  { title: '任务页面', dataIndex: 'taskPage', render: (text, record) => (record.taskPage ? record.taskPage.displayName : '暂无') },
  { title: '视频网址', debugtype: 'string_url', dataIndex: 'videoUrl', width: '50' },
  { title: '封面图像路径1', dataIndex: 'coverImagePath1', render: (text, record) => <ImagePreview imageTitle="封面图像路径1" imageLocation={record.coverImagePath1} /> },
  { title: '封面图像路径2', dataIndex: 'coverImagePath2', render: (text, record) => <ImagePreview imageTitle="封面图像路径2" imageLocation={record.coverImagePath2} /> },
  { title: '封面图像路径3', dataIndex: 'coverImagePath3', render: (text, record) => <ImagePreview imageTitle="封面图像路径3" imageLocation={record.coverImagePath3} /> },
  { title: '图1', dataIndex: 'imagePath1', render: (text, record) => <ImagePreview imageTitle="图1" imageLocation={record.imagePath1} /> },
  { title: '图2', dataIndex: 'imagePath2', render: (text, record) => <ImagePreview imageTitle="图2" imageLocation={record.imagePath2} /> },
  { title: '图3', dataIndex: 'imagePath3', render: (text, record) => <ImagePreview imageTitle="图3" imageLocation={record.imagePath3} /> },
  { title: '图4', dataIndex: 'imagePath4', render: (text, record) => <ImagePreview imageTitle="图4" imageLocation={record.imagePath4} /> },
  { title: '图5', dataIndex: 'imagePath5', render: (text, record) => <ImagePreview imageTitle="图5" imageLocation={record.imagePath5} /> },
  { title: '发布人的奖金', debugtype: 'int', dataIndex: 'creatorBonus', width: '7' },
  { title: '额外的奖金', debugtype: 'int', dataIndex: 'additionalBonus', width: '7' },
  { title: '躲藏', dataIndex: 'hiding', render: (text, record) => (record.hiding ? record.hiding.displayName : '暂无') },
  { title: '解决', dataIndex: 'resolving', render: (text, record) => (record.resolving ? record.resolving.displayName : '暂无') },
  { title: '悬赏', dataIndex: 'reward', render: (text, record) => (record.reward ? record.reward.displayName : '暂无') },
  { title: '当前用户已点赞', dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前用户已回复', dataIndex: 'repliedByCurrentUser', render: (text, record) => (record.repliedByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '12' },

]

const fieldLabels = {
  id: '序号',
  title: '标题',
  selectedTask: '选定的任务',
  createTime: '创建时间',
  content: '内容',
  creator: '创建者',
  community: '社区',
  homePage: '主页',
  taskPage: '任务页面',
  videoUrl: '视频网址',
  coverImagePath1: '封面图像路径1',
  coverImagePath2: '封面图像路径2',
  coverImagePath3: '封面图像路径3',
  imagePath1: '图1',
  imagePath2: '图2',
  imagePath3: '图3',
  imagePath4: '图4',
  imagePath5: '图5',
  creatorBonus: '发布人的奖金',
  additionalBonus: '额外的奖金',
  hiding: '躲藏',
  resolving: '解决',
  reward: '悬赏',
  likeByCurrentUser: '当前用户已点赞',
  repliedByCurrentUser: '当前用户已回复',
  currentStatus: '当前状态',

}


const TaskBase={menuData,displayColumns,fieldLabels}
export default TaskBase



