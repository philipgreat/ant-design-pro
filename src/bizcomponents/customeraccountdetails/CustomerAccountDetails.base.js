
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"客户账户信息", menuFor: "customerAccountDetails",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '8' },
  { title: '变化量', dataIndex: 'changeAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '变化类型', debugtype: 'string', dataIndex: 'changeType', width: '6' },
  { title: '客户账户', dataIndex: 'customerAccount', render: (text, record) => (record.customerAccount ? record.customerAccount.displayName : '暂无') },
  { title: '更改日期时间', dataIndex: 'changeDatetime', render: (text, record) => moment(record.changeDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '相关的主要顺序', dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  summary: '总结',
  changeAmount: '变化量',
  changeType: '变化类型',
  customerAccount: '客户账户',
  changeDatetime: '更改日期时间',
  relatedMainOrder: '相关的主要顺序',

}


const CustomerAccountDetailsBase={menuData,displayColumns,fieldLabels}
export default CustomerAccountDetailsBase



