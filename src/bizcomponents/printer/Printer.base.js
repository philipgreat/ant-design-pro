
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"打印机", menuFor: "printer",
  		subItems: [
  {name: 'printerTaskList', displayName:'打印机任务'},
  {name: 'storeList', displayName:'商店'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/printer/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '16' },
  { title: '位置', debugtype: 'string', dataIndex: 'location', width: '25' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  location: '位置',

}


const PrinterBase={menuData,displayColumns,fieldLabels}
export default PrinterBase



