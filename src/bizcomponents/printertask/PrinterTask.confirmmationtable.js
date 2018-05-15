
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './PrinterTask.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '33' },
  { title: '提交者', debugtype: 'string', dataIndex: 'submitter', width: '32' },
  { title: '打印机', dataIndex: 'printer', render: (text, record) => (record.printer ? record.printer.id : '暂无') },
  { title: '内容1', debugtype: 'string', dataIndex: 'content1', width: '69' },
  { title: '内容2', debugtype: 'string', dataIndex: 'content2', width: '69' },
  { title: '内容3', debugtype: 'string', dataIndex: 'content3', width: '69' },
  { title: '内容4', debugtype: 'string', dataIndex: 'content4', width: '69' },
  { title: '内容5', debugtype: 'string', dataIndex: 'content5', width: '69' },
  { title: '打印任务状态', debugtype: 'string', dataIndex: 'printTaskStatus', width: '7' },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD') },
]

class PrinterTaskConfirmationTable extends PureComponent {
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
          scroll={{ x: 5985 }}
        />
      </div>
    )
  }
}

export default PrinterTaskConfirmationTable

