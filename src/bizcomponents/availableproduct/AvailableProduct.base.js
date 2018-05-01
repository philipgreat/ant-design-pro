import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {
  menuName: '产品类型',
  menuFor: 'availableProduct',
  subItems: [
    { name: 'servicePriceList', displayName: '合同价格' },
    { name: 'availableServiceList', displayName: '服务范围' },
    { name: 'productPriceList', displayName: '产品价格' },
    { name: 'availableInsuranceList', displayName: '车辆代办保险' },
    { name: 'availableHandOverItemList', displayName: '交接检查项' },
    { name: 'preorderPromotionList', displayName: '提前下单优惠' },
  ],
}

const displayColumns = [
  {
    title: 'ID',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => (
      <Link to={`/availableProduct/${text}/dashboard`}>{text}</Link>
    ),
  },
  {
    title: '产品名称',
    debugtype: 'string',
    dataIndex: 'productName',
    width: '9',
  },
  {
    title: '服务代码',
    debugtype: 'string',
    dataIndex: 'serviceKey',
    width: '11',
  },
  {
    title: '服务描述',
    debugtype: 'string',
    dataIndex: 'serviceDescription',
    width: '12',
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) =>
      record.platform ? record.platform.displayName : '暂无',
  },
]

const fieldLabels = {
  id: 'ID',
  productName: '产品名称',
  serviceKey: '服务代码',
  serviceDescription: '服务描述',
  platform: '平台',
}

const AvailableProductBase = { menuData, displayColumns, fieldLabels }
export default AvailableProductBase
