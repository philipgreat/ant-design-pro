
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Customer.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '11' },
  { title: '头像', dataIndex: 'avatarImg', render: (text, record) => <ImagePreview imageLocation={record.avatarImg} /> },
  { title: 'SecUser', dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.id : '暂无') },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '电子邮件', debugtype: 'string', dataIndex: 'email', width: '23' },
  { title: 'qq', debugtype: 'int', dataIndex: 'qq', width: '11' },
  { title: '微信 Openid', debugtype: 'string', dataIndex: 'weixinOpenid', width: '29' },
  { title: '微信 Appid', debugtype: 'string', dataIndex: 'weixinAppid', width: '23' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '经验值', debugtype: 'int', dataIndex: 'experienceValue', width: '8' },
  { title: '积分', debugtype: 'int', dataIndex: 'gameScore', width: '7' },
  { title: 'Vip级别', dataIndex: 'vipLevel', render: (text, record) => (record.vipLevel ? record.vipLevel.id : '暂无') },
  { title: '游戏平台', dataIndex: 'gamePlatform', render: (text, record) => (record.gamePlatform ? record.gamePlatform.id : '暂无') },
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
          scroll={{ x: 2190 }}
        />
      </div>
    )
  }
}

export default CustomerConfirmationTable

