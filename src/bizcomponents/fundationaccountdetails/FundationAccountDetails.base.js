
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"基金账户信息", menuFor: "fundationAccountDetails",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '8' },
  { title: '变化量', debugtype: 'string', dataIndex: 'changeAmount', width: '8' },
  { title: '基金账户', dataIndex: 'fundationAccount', render: (text, record) => (record.fundationAccount ? record.fundationAccount.displayName : '暂无') },
  { title: '相关的主要顺序', dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.displayName : '暂无') },
  { title: 'Datetime', dataIndex: 'datetime', render: (text, record) => moment(record.datetime).format('YYYY-MM-DD HH:mm:ss') },

]

const fieldLabels = {
  id: 'ID',
  summary: '总结',
  changeAmount: '变化量',
  fundationAccount: '基金账户',
  relatedMainOrder: '相关的主要顺序',
  datetime: 'Datetime',

}


const FundationAccountDetailsBase={menuData,displayColumns,fieldLabels}
export default FundationAccountDetailsBase



