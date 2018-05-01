import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {
  menuName: '城市',
  menuFor: 'city',
  subItems: [
    { name: 'productPriceList', displayName: '产品价格' },
    { name: 'vehicleServiceCompanyList', displayName: '商户' },
    { name: 'inspectionStationList', displayName: '检测站' },
    { name: 'vehicleInspectionOrderList', displayName: '年检订单' },
  ],
}

const displayColumns = [
  {
    title: 'ID',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/city/${text}/dashboard`}>{text}</Link>
    ),
  },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '6' },
  {
    title: '省',
    dataIndex: 'province',
    render: (text, record) =>
      record.province ? record.province.displayName : '暂无',
  },
]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  province: '省',
}

const CityBase = { menuData, displayColumns, fieldLabels }
export default CityBase
