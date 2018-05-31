
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Campaign.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '活动名称', debugtype: 'string', dataIndex: 'campaignName', width: '8' },
  { title: '活动封面图片', dataIndex: 'campaignCoverImage', render: (text, record) => <ImagePreview imageLocation={record.campaignCoverImage} /> },
  { title: '活动开始日期时间', dataIndex: 'campaignStartDatetime', render: (text, record) => moment(record.campaignStartDatetime).format('YYYY-MM-DD') },
  { title: '活动结束日期时间', dataIndex: 'campaignEndDatetime', render: (text, record) => moment(record.campaignEndDatetime).format('YYYY-MM-DD') },
  { title: '活动内容', debugtype: 'string', dataIndex: 'campaignContent', width: '17' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
]

class CampaignConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 2115 }}
        />
      </div>
    )
  }
}

export default CampaignConfirmationTable

