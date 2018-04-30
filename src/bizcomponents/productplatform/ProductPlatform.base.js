
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"产品平台", menuFor: "productPlatform",
  		subItems: [
  {name: 'productList', displayName:'产品'},
  {name: 'materialList', displayName:'材料'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/productPlatform/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '12' },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  description: '描述',

}


const ProductPlatformBase={menuData,displayColumns,fieldLabels}
export default ProductPlatformBase



