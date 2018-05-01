import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './Customer.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '客户昵称',
    debugtype: 'string',
    dataIndex: 'nickName',
    width: '24',
  },
  {
    title: '头像',
    dataIndex: 'logoImage',
    render: (text, record) => <ImagePreview imageLocation={record.logoImage} />,
  },
  {
    title: '微信ID',
    debugtype: 'string',
    dataIndex: 'weixinOpenid',
    width: '29',
  },
  {
    title: '微信APP',
    debugtype: 'string',
    dataIndex: 'weixinAppid',
    width: '23',
  },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  {
    title: 'SecUser',
    dataIndex: 'secUser',
    render: (text, record) => (record.secUser ? record.secUser.id : '暂无'),
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) => (record.platform ? record.platform.id : '暂无'),
  },
]

class CustomerViewTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 2985 }}
        />
      </div>
    )
  }
}

export default CustomerViewTable
