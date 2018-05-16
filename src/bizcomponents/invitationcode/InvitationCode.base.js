
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"邀请码", menuFor: "invitationCode",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '代码', debugtype: 'int', dataIndex: 'code', width: '10' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '社区', dataIndex: 'community', render: (text, record) => (record.community ? record.community.displayName : '暂无') },
  { title: '用', dataIndex: 'used', render: (text, record) => (record.used ? '是' : '否') },

]

const fieldLabels = {
  id: '序号',
  name: '名称',
  code: '代码',
  createTime: '创建时间',
  community: '社区',
  used: '用',

}


const InvitationCodeBase={menuData,displayColumns,fieldLabels}
export default InvitationCodeBase



