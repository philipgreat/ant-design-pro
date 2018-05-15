
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"成长值", menuFor: "experiencePoint",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '获得时间', dataIndex: 'obtainTime', render: (text, record) => moment(record.obtainTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '点', debugtype: 'int', dataIndex: 'points', width: '7' },
  { title: '用户', dataIndex: 'user', render: (text, record) => (record.user ? record.user.displayName : '暂无') },

]

const fieldLabels = {
  id: '序号',
  name: '名称',
  obtainTime: '获得时间',
  points: '点',
  user: '用户',

}


const ExperiencePointBase={menuData,displayColumns,fieldLabels}
export default ExperiencePointBase



