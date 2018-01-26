import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './Customer.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '客户昵称',
    debugtype: 'string',
    dataIndex: 'nickName',
    width: '24',
  },
  {
    title: '头像',
    dataIndex: 'logoImage',
    render: (text, record) => <ImagePreview imageLocation={record.头像} />,
  },
  {
    title: 'WeixinOpenid',
    debugtype: 'string',
    dataIndex: 'weixinOpenid',
    width: '29',
  },
  {
    title: 'WeixinAppid',
    debugtype: 'string',
    dataIndex: 'weixinAppid',
    width: '23',
  },
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
          scroll={{ x: 2760 }}
        />
      </div>
    )
  }
}

export default CustomerViewTable
