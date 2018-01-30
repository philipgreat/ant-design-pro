
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './HandoverChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '回归检验结果', debugtype: 'string', dataIndex: 'handoverCheckResult', width: '6' },
  { title: '交接检查评论', debugtype: 'string', dataIndex: 'handoverCheckComment', width: '10' },
  { title: '切换检查证据图片1', dataIndex: 'handoverCheckEvidenceImage1', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage1} /> },
  { title: '切换检查证据图片2', dataIndex: 'handoverCheckEvidenceImage2', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage2} /> },
  { title: '切换检查证据图片3', dataIndex: 'handoverCheckEvidenceImage3', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage3} /> },
  { title: '切换检查证据图片4', dataIndex: 'handoverCheckEvidenceImage4', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage4} /> },
  { title: '切换检查证据图片5', dataIndex: 'handoverCheckEvidenceImage5', render: (text, record) => <ImagePreview imageLocation={record.handoverCheckEvidenceImage5} /> },
  { title: '交接检查清单', dataIndex: 'availableHandOverItem', render: (text, record) => (record.availableHandOverItem ? record.availableHandOverItem.id : '暂无') },
  { title: '交接报告', dataIndex: 'reportHandover', render: (text, record) => (record.reportHandover ? record.reportHandover.id : '暂无') },
]

class HandoverChecklistResultConfirmationTable extends PureComponent {
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
          scroll={{ x: 1110 }}
        />
      </div>
    )
  }
}

export default HandoverChecklistResultConfirmationTable

