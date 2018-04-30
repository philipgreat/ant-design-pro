
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"产品", menuFor: "product",
  		subItems: [
  {name: 'productComponentList', displayName:'产品组件'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/product/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '12' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '14' },
  { title: '蓝图', dataIndex: 'bluePrint', render: (text, record) => <ImagePreview imageTitle="蓝图" imageLocation={record.bluePrint} /> },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  code: '代码',
  description: '描述',
  bluePrint: '蓝图',
  platform: '平台',

}


const ProductBase={menuData,displayColumns,fieldLabels}
export default ProductBase



