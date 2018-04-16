import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './HandOverChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '检查项名称',
    debugtype: 'string',
    dataIndex: 'handOverCheckItemName',
    width: '11',
  },
  {
    title: '检查项目描述',
    debugtype: 'string_longtext',
    dataIndex: 'checkItemDescription',
    width: '10',
  },
  {
    title: '检车项结果',
    debugtype: 'string',
    dataIndex: 'handOverCheckResult',
    width: '6',
  },
  {
    title: '检查项意见',
    debugtype: 'string_longtext',
    dataIndex: 'handOverCheckComment',
    width: '10',
  },
  {
    title: '凭证图片1',
    dataIndex: 'handOverCheckEvidenceImage1',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage1} />
    ),
  },
  {
    title: '凭证图片2',
    dataIndex: 'handOverCheckEvidenceImage2',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage2} />
    ),
  },
  {
    title: '凭证图片3',
    dataIndex: 'handOverCheckEvidenceImage3',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage3} />
    ),
  },
  {
    title: '凭证图片4',
    dataIndex: 'handOverCheckEvidenceImage4',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage4} />
    ),
  },
  {
    title: '凭证图片5',
    dataIndex: 'handOverCheckEvidenceImage5',
    render: (text, record) => (
      <ImagePreview imageLocation={record.handOverCheckEvidenceImage5} />
    ),
  },
  {
    title: '交接检查项',
    dataIndex: 'availableHandOverItem',
    render: (text, record) =>
      record.availableHandOverItem ? record.availableHandOverItem.id : '暂无',
  },
  {
    title: '收车服务',
    dataIndex: 'serviceTypeVehicleC2m',
    render: (text, record) =>
      record.serviceTypeVehicleC2m ? record.serviceTypeVehicleC2m.id : '暂无',
  },
  {
    title: '移车服务',
    dataIndex: 'serviceTypeVehicleM2m',
    render: (text, record) =>
      record.serviceTypeVehicleM2m ? record.serviceTypeVehicleM2m.id : '暂无',
  },
  {
    title: '还车服务',
    dataIndex: 'serviceTypeVehicleM2c',
    render: (text, record) =>
      record.serviceTypeVehicleM2c ? record.serviceTypeVehicleM2c.id : '暂无',
  },
  {
    title: '收件服务',
    dataIndex: 'serviceTypeFileC2m',
    render: (text, record) =>
      record.serviceTypeFileC2m ? record.serviceTypeFileC2m.id : '暂无',
  },
  {
    title: '移件服务',
    dataIndex: 'serviceTypeFileM2m',
    render: (text, record) =>
      record.serviceTypeFileM2m ? record.serviceTypeFileM2m.id : '暂无',
  },
  {
    title: '还件服务',
    dataIndex: 'serviceTypeFileM2c',
    render: (text, record) =>
      record.serviceTypeFileM2c ? record.serviceTypeFileM2c.id : '暂无',
  },
]

class HandOverChecklistResultViewTable extends PureComponent {
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
          scroll={{ x: 1905 }}
        />
      </div>
    )
  }
}

export default HandOverChecklistResultViewTable
