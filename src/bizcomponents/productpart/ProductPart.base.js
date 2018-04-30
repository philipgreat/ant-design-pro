
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"产品零件", menuFor: "productPart",
  		subItems: [
  {name: 'materialApplicationList', displayName:'材料的应用'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/productPart/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '16' },
  { title: '代码', debugtype: 'int', dataIndex: 'code', width: '7' },
  { title: '蓝图', dataIndex: 'bluePrint', render: (text, record) => <ImagePreview imageTitle="蓝图" imageLocation={record.bluePrint} /> },
  { title: '产品组件', dataIndex: 'productComponent', render: (text, record) => (record.productComponent ? record.productComponent.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  bluePrint: '蓝图',
  productComponent: '产品组件',

}


const ProductPartBase={menuData,displayColumns,fieldLabels}
export default ProductPartBase



