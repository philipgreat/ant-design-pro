
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"材料的应用", menuFor: "materialApplication",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '材料', dataIndex: 'material', render: (text, record) => (record.material ? record.material.displayName : '暂无') },
  { title: '数量', debugtype: 'int', dataIndex: 'quantity', width: '5' },
  { title: '产品零件', dataIndex: 'productPart', render: (text, record) => (record.productPart ? record.productPart.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  material: '材料',
  quantity: '数量',
  productPart: '产品零件',

}


const MaterialApplicationBase={menuData,displayColumns,fieldLabels}
export default MaterialApplicationBase



