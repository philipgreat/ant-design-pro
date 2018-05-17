
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Customer.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '尼克的名字', debugtype: 'string', dataIndex: 'nickName', width: '24' },
  { title: '标志形象', dataIndex: 'logoImage', render: (text, record) => <ImagePreview imageLocation={record.logoImage} /> },
  { title: '迷你程序Openid', debugtype: 'string', dataIndex: 'miniProgramOpenid', width: '37' },
  { title: '服务计算Openid', debugtype: 'string', dataIndex: 'serviceAcountOpenid', width: '37' },
  { title: 'Wechat联盟Id', debugtype: 'string', dataIndex: 'wechatUnionId', width: '37' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15' },
  { title: '会员级别标题', debugtype: 'string', dataIndex: 'memberLevelTitle', width: '23' },
  { title: '会员级别代码', debugtype: 'string', dataIndex: 'memberLevelCode', width: '13' },
  { title: '成员级别的过期日期', dataIndex: 'memberLevelExpireDate', render: (text, record) => moment(record.memberLevelExpireDate).format('YYYY-MM-DD') },
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
          scroll={{ x: 2895 }}
        />
      </div>
    )
  }
}

export default CustomerConfirmationTable

