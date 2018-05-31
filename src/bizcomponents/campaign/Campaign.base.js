
import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'

const menuData = {menuName:"运动", menuFor: "campaign",
  		subItems: [
  
  		],
}



const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '活动名称', debugtype: 'string', dataIndex: 'campaignName', width: '8' },
  { title: '活动封面图片', dataIndex: 'campaignCoverImage', render: (text, record) => <ImagePreview imageTitle="活动封面图片" imageLocation={record.campaignCoverImage} /> },
  { title: '活动开始日期时间', dataIndex: 'campaignStartDatetime', render: (text, record) => moment(record.campaignStartDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '活动结束日期时间', dataIndex: 'campaignEndDatetime', render: (text, record) => moment(record.campaignEndDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '活动内容', debugtype: 'string', dataIndex: 'campaignContent', width: '17' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },

]

const fieldLabels = {
  id: 'ID',
  campaignName: '活动名称',
  campaignCoverImage: '活动封面图片',
  campaignStartDatetime: '活动开始日期时间',
  campaignEndDatetime: '活动结束日期时间',
  campaignContent: '活动内容',
  store: '门店',

}


const CampaignBase={menuData,displayColumns,fieldLabels}
export default CampaignBase



