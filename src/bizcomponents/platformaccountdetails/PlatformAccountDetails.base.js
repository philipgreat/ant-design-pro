
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"平台账户信息", menuFor: "platformAccountDetails",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '18' },
  { title: '变化量', dataIndex: 'changeAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '变化类型', debugtype: 'string', dataIndex: 'changeType', width: '6' },
  { title: '平台账户', dataIndex: 'platformAccount', render: (text, record) => (record.platformAccount ? record.platformAccount.displayName : '暂无') },
  { title: '相关的主要顺序', dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.displayName : '暂无') },
  { title: 'Datetime', dataIndex: 'datetime', render: (text, record) => moment(record.datetime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  summary: '总结',
  changeAmount: '变化量',
  changeType: '变化类型',
  platformAccount: '平台账户',
  relatedMainOrder: '相关的主要顺序',
  datetime: 'Datetime',

}


const PlatformAccountDetailsBase={menuData,displayColumns,fieldLabels}
export default PlatformAccountDetailsBase



