
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"材料", menuFor: "material",
  		subItems: [
  {name: 'materialApplicationList', displayName:'材料的应用'},
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/material/${text}/dashboard`}>{text}</Link>) },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '8' },
  { title: '图像', dataIndex: 'image', render: (text, record) => <ImagePreview imageTitle="图像" imageLocation={record.image} /> },

]

const fieldLabels = {
  id: 'ID',
  platform: '平台',
  name: '名称',
  image: '图像',

}


const MaterialBase={menuData,displayColumns,fieldLabels}
export default MaterialBase



