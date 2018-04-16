import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './Contract.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) => (record.platform ? record.platform.id : '暂无'),
  },
  {
    title: '商户',
    dataIndex: 'company',
    render: (text, record) => (record.company ? record.company.id : '暂无'),
  },
  {
    title: '开始日期',
    dataIndex: 'startDate',
    render: (text, record) => moment(record.startDate).format('YYYY-MM-DD'),
  },
  {
    title: '结束日期',
    dataIndex: 'endDate',
    render: (text, record) => moment(record.endDate).format('YYYY-MM-DD'),
  },
]

class ContractViewTable extends PureComponent {
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

export default ContractViewTable
