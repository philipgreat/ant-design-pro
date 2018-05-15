
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"行项目", menuFor: "lineItem",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '15' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '20' },
  { title: '列出的价格', dataIndex: 'listPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '销售价格', dataIndex: 'salePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: 'Sku类型', debugtype: 'string', dataIndex: 'skuType', width: '13' },
  { title: 'Sku Id', debugtype: 'string', dataIndex: 'skuId', width: '12' },
  { title: 'Sku链接', debugtype: 'string_url', dataIndex: 'skuLink', width: '40' },
  { title: '商品折扣', dataIndex: 'itemDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '项目调整', dataIndex: 'itemAdjustment', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '主订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  name: '名称',
  summary: '总结',
  listPrice: '列出的价格',
  salePrice: '销售价格',
  skuType: 'Sku类型',
  skuId: 'Sku Id',
  skuLink: 'Sku链接',
  itemDiscount: '商品折扣',
  itemAdjustment: '项目调整',
  mainOrder: '主订单',

}


const LineItemBase={menuData,displayColumns,fieldLabels}
export default LineItemBase



