import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './AvailableInsurance.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '保险产品名称',
    debugtype: 'string',
    dataIndex: 'insuranceName',
    width: '10',
  },
  {
    title: '保险承保方',
    debugtype: 'string',
    dataIndex: 'insuranceVendor',
    width: '11',
  },
  {
    title: '保险价格',
    debugtype: 'money',
    dataIndex: 'insurancePrice',
    width: '9',
  },
  { title: '概览', debugtype: 'string', dataIndex: 'summary', width: '20' },
  {
    title: '产品',
    dataIndex: 'product',
    render: (text, record) => (record.product ? record.product.id : '暂无'),
  },
]

class AvailableInsuranceViewTable extends PureComponent {
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

export default AvailableInsuranceViewTable
