
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"换场记录", menuFor: "rearrangeSessionTicketRecord",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '原游戏名称', debugtype: 'string', dataIndex: 'sourceGameName', width: '9' },
  { title: '原游戏场次日期', dataIndex: 'sourceGameSessionDatetime', render: (text, record) => moment(record.sourceGameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '原游戏场次名称', debugtype: 'string', dataIndex: 'sourceGameSessionName', width: '9' },
  { title: '原门票数', debugtype: 'int', dataIndex: 'sourceTicketQuantity', width: '5' },
  { title: '原门票是否已打印', dataIndex: 'sourceTicketPrinted', render: (text, record) => (record.sourceTicketPrinted ? '是' : '否') },
  { title: '原换票手机号', debugtype: 'string_china_mobile_phone', dataIndex: 'sourceRedeemPhone', width: '15' },
  { title: '原换票验证码', debugtype: 'string', dataIndex: 'sourceRedeemCode', width: '13' },
  { title: '原门店名称', debugtype: 'string', dataIndex: 'sourceStoreName', width: '7' },
  { title: '换场游戏名称', debugtype: 'string', dataIndex: 'targetGameName', width: '9' },
  { title: '换场游戏场次日期', dataIndex: 'targetGameSessionDatetime', render: (text, record) => moment(record.targetGameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '换场游戏场次名称', debugtype: 'string', dataIndex: 'targetGameSessionName', width: '9' },
  { title: '换场门票数', debugtype: 'int', dataIndex: 'targetTicketQuantity', width: '5' },
  { title: '换场门票是否已打印', dataIndex: 'targetTicketPrinted', render: (text, record) => (record.targetTicketPrinted ? '是' : '否') },
  { title: '换场换票手机', debugtype: 'string_china_mobile_phone', dataIndex: 'targetRedeemPhone', width: '15' },
  { title: '换场换票验证码', debugtype: 'string', dataIndex: 'targetRedeemCode', width: '13' },
  { title: '换场门店名称', debugtype: 'string', dataIndex: 'targetStoreName', width: '7' },
  { title: '换场备注', debugtype: 'string', dataIndex: 'rearrangeComment', width: '13' },
  { title: '原游戏场次', dataIndex: 'sourceGameSession', render: (text, record) => (record.sourceGameSession ? record.sourceGameSession.displayName : '暂无') },
  { title: '原的游戏', dataIndex: 'sourceGame', render: (text, record) => (record.sourceGame ? record.sourceGame.displayName : '暂无') },
  { title: '原门店', dataIndex: 'sourceStore', render: (text, record) => (record.sourceStore ? record.sourceStore.displayName : '暂无') },
  { title: '换场游戏场次', dataIndex: 'targetGameSession', render: (text, record) => (record.targetGameSession ? record.targetGameSession.displayName : '暂无') },
  { title: '换场游戏', dataIndex: 'targetGame', render: (text, record) => (record.targetGame ? record.targetGame.displayName : '暂无') },
  { title: '换场门店', dataIndex: 'targetStore', render: (text, record) => (record.targetStore ? record.targetStore.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  sourceGameName: '原游戏名称',
  sourceGameSessionDatetime: '原游戏场次日期',
  sourceGameSessionName: '原游戏场次名称',
  sourceTicketQuantity: '原门票数',
  sourceTicketPrinted: '原门票是否已打印',
  sourceRedeemPhone: '原换票手机号',
  sourceRedeemCode: '原换票验证码',
  sourceStoreName: '原门店名称',
  targetGameName: '换场游戏名称',
  targetGameSessionDatetime: '换场游戏场次日期',
  targetGameSessionName: '换场游戏场次名称',
  targetTicketQuantity: '换场门票数',
  targetTicketPrinted: '换场门票是否已打印',
  targetRedeemPhone: '换场换票手机',
  targetRedeemCode: '换场换票验证码',
  targetStoreName: '换场门店名称',
  rearrangeComment: '换场备注',
  sourceGameSession: '原游戏场次',
  sourceGame: '原的游戏',
  sourceStore: '原门店',
  targetGameSession: '换场游戏场次',
  targetGame: '换场游戏',
  targetStore: '换场门店',

}


const RearrangeSessionTicketRecordBase={menuData,displayColumns,fieldLabels}
export default RearrangeSessionTicketRecordBase



