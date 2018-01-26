import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './CompanyEmployeeServing.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '事件时间',
    dataIndex: 'eventTime',
    render: (text, record) => moment(record.eventTime).format('YYYY-MM-DD'),
  },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '17' },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8' },
]

class CompanyEmployeeServingConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项
              </p>
            }
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default CompanyEmployeeServingConfirmationTable
