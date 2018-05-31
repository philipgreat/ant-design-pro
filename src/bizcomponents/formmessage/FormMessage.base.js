
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"表单信息", menuFor: "formMessage",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '10' },
  { title: '表单', dataIndex: 'form', render: (text, record) => (record.form ? record.form.displayName : '暂无') },
  { title: '级别', debugtype: 'string', dataIndex: 'level', width: '11' },

]

const fieldLabels = {
  id: 'ID',
  title: '标题',
  form: '表单',
  level: '级别',

}


const FormMessageBase={menuData,displayColumns,fieldLabels}
export default FormMessageBase



