
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"产品组件", menuFor: "productComponent",
  		subItems: [
  {name: 'productPartList', displayName:'产品零件'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/productComponent/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '16' },
  { title: '代码', debugtype: 'int', dataIndex: 'code', width: '7' },
  { title: '蓝图', dataIndex: 'bluePrint', render: (text, record) => <ImagePreview imageTitle="蓝图" imageLocation={record.bluePrint} /> },
  { title: '产品', dataIndex: 'product', render: (text, record) => (record.product ? record.product.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  bluePrint: '蓝图',
  product: '产品',

}


const ProductComponentBase={menuData,displayColumns,fieldLabels}
export default ProductComponentBase



