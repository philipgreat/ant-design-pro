import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './HandOverChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '移交检查项目名称。',
    debugtype: 'string',
    dataIndex: 'handOverCheckItemName',
    width: '11',
  },
  {
    title: '移交检查结果',
    debugtype: 'string',
    dataIndex: 'handOverCheckResult',
    width: '6',
  },
  {
    title: '移交检查评论',
    debugtype: 'string',
    dataIndex: 'handOverCheckComment',
    width: '10',
  },
  {
    title: '移交检查证据图片1。',
    dataIndex: 'handOverCheckEvidenceImage1',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage1} />
    ),
  },
  {
    title: '移交检查证据图2。',
    dataIndex: 'handOverCheckEvidenceImage2',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage2} />
    ),
  },
  {
    title: '移交检查证据图3。',
    dataIndex: 'handOverCheckEvidenceImage3',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage3} />
    ),
  },
  {
    title: '移交检查证据图片4。',
    dataIndex: 'handOverCheckEvidenceImage4',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage4} />
    ),
  },
  {
    title: '移交检查证据图片5。',
    dataIndex: 'handOverCheckEvidenceImage5',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage5} />
    ),
  },
  {
    title: '可用移交项目',
    dataIndex: 'availableHandOverItem',
    render: (text, record) =>
      record.availableHandOverItem ? record.availableHandOverItem.id : '暂无',
  },
  {
    title: '服务类型车辆C2m',
    dataIndex: 'serviceTypeVehicleC2m',
    render: (text, record) =>
      record.serviceTypeVehicleC2m ? record.serviceTypeVehicleC2m.id : '暂无',
  },
  {
    title: '服务类型车辆M2m',
    dataIndex: 'serviceTypeVehicleM2m',
    render: (text, record) =>
      record.serviceTypeVehicleM2m ? record.serviceTypeVehicleM2m.id : '暂无',
  },
  {
    title: '服务类型车辆M2c',
    dataIndex: 'serviceTypeVehicleM2c',
    render: (text, record) =>
      record.serviceTypeVehicleM2c ? record.serviceTypeVehicleM2c.id : '暂无',
  },
  {
    title: '服务类型文件C2m',
    dataIndex: 'serviceTypeFileC2m',
    render: (text, record) =>
      record.serviceTypeFileC2m ? record.serviceTypeFileC2m.id : '暂无',
  },
  {
    title: '服务类型文件M2m',
    dataIndex: 'serviceTypeFileM2m',
    render: (text, record) =>
      record.serviceTypeFileM2m ? record.serviceTypeFileM2m.id : '暂无',
  },
  {
    title: '服务类型文件M2c',
    dataIndex: 'serviceTypeFileM2c',
    render: (text, record) =>
      record.serviceTypeFileM2c ? record.serviceTypeFileM2c.id : '暂无',
  },
]

class HandOverChecklistResultConfirmationTable extends PureComponent {
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
          scroll={{ x: 1815 }}
        />
      </div>
    )
  }
}

export default HandOverChecklistResultConfirmationTable
