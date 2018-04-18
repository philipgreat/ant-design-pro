import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './CompanyEmployeeServing.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '执行时间',
    dataIndex: 'eventTime',
    render: (text, record) =>
      moment(record.eventTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  { title: '审批人', debugtype: 'string', dataIndex: 'who', width: '17' },
  { title: '批注', debugtype: 'string', dataIndex: 'comment', width: '8' },
]

class CompanyEmployeeServingViewTable extends PureComponent {
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

export default CompanyEmployeeServingViewTable
