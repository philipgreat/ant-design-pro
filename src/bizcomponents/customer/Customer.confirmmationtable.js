
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Customer.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '尼克的名字', debugtype: 'string', dataIndex: 'nickName', width: '24' },
  { title: '标志形象', dataIndex: 'logoImage', render: (text, record) => <ImagePreview imageLocation={record.logoImage} /> },
  { title: 'Weixin Openid', debugtype: 'string', dataIndex: 'weixinOpenid', width: '29' },
  { title: 'Weixin Appid', debugtype: 'string', dataIndex: 'weixinAppid', width: '23' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: 'SecUser', dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.id : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
]

class CustomerConfirmationTable extends PureComponent {
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
          scroll={{ x: 2985 }}
        />
      </div>
    )
  }
}

export default CustomerConfirmationTable

