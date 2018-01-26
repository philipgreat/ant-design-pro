import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './RepairingQuotationItem.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '修理项目类型',
    dataIndex: 'repairingItemType',
    render: (text, record) =>
      record.repairingItemType ? record.repairingItemType.id : '暂无',
  },
  {
    title: '修理物品的名称',
    debugtype: 'string',
    dataIndex: 'repairingItemName',
    width: '10',
  },
  {
    title: '修理项目描述',
    debugtype: 'string',
    dataIndex: 'repairingItemDescription',
    width: '57',
  },
  {
    title: '修理物品的价格',
    debugtype: 'money',
    dataIndex: 'repairingItemPrice',
    width: '11',
  },
  {
    title: '维修报价',
    dataIndex: 'repairingQuotation',
    render: (text, record) =>
      record.repairingQuotation ? record.repairingQuotation.id : '暂无',
  },
  {
    title: '修理物品图片1',
    dataIndex: 'repairingItemImage1',
    render: (text, record) => (
      <ImagePreview imageLocation={record.修理物品图片1} />
    ),
  },
  {
    title: '修理物品图片2',
    dataIndex: 'repairingItemImage2',
    render: (text, record) => (
      <ImagePreview imageLocation={record.修理物品图片2} />
    ),
  },
  {
    title: '修理物品图片3',
    dataIndex: 'repairingItemImage3',
    render: (text, record) => (
      <ImagePreview imageLocation={record.修理物品图片3} />
    ),
  },
  {
    title: '修理物品图片4',
    dataIndex: 'repairingItemImage4',
    render: (text, record) => (
      <ImagePreview imageLocation={record.修理物品图片4} />
    ),
  },
  {
    title: '修理物品图片5',
    dataIndex: 'repairingItemImage5',
    render: (text, record) => (
      <ImagePreview imageLocation={record.修理物品图片5} />
    ),
  },
]

class RepairingQuotationItemViewTable extends PureComponent {
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
          scroll={{ x: 1800 }}
        />
      </div>
    )
  }
}

export default RepairingQuotationItemViewTable
