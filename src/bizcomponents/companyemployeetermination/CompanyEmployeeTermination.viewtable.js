import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './CompanyEmployeeTermination.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '17' },
  {
    title: '事件时间',
    dataIndex: 'eventTime',
    render: (text, record) => moment(record.eventTime).format('YYYY-MM-DD'),
  },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8' },
]

class CompanyEmployeeTerminationViewTable extends PureComponent {
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

export default CompanyEmployeeTerminationViewTable
