import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './VehicleInspectionOrderCoupon.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '11' },
  {
    title: '生效日期',
    dataIndex: 'startDate',
    render: (text, record) => moment(record.startDate).format('YYYY-MM-DD'),
  },
  {
    title: '失效日期',
    dataIndex: 'expirationDate',
    render: (text, record) =>
      moment(record.expirationDate).format('YYYY-MM-DD'),
  },
  { title: '金额', debugtype: 'money', dataIndex: 'amount', width: '10' },
  { title: '优惠码', debugtype: 'string', dataIndex: 'code', width: '16' },
  {
    title: '使用日期',
    dataIndex: 'usedDate',
    render: (text, record) => moment(record.usedDate).format('YYYY-MM-DD'),
  },
  {
    title: '主订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
]

class VehicleInspectionOrderCouponViewTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default VehicleInspectionOrderCouponViewTable
