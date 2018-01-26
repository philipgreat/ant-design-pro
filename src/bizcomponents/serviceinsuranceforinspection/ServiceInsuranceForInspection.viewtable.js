import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './ServiceInsuranceForInspection.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '服务状态',
    debugtype: 'string',
    dataIndex: 'serviceStatus',
    width: '7',
  },
  {
    title: '要求保险',
    dataIndex: 'orderedInsurance',
    render: (text, record) =>
      record.orderedInsurance ? record.orderedInsurance.id : '暂无',
  },
  {
    title: '服务人员',
    dataIndex: 'responsibleWorker',
    render: (text, record) =>
      record.responsibleWorker ? record.responsibleWorker.id : '暂无',
  },
  {
    title: '服务的评论',
    debugtype: 'string',
    dataIndex: 'serviceComments',
    width: '15',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    render: (text, record) => moment(record.startTime).format('YYYY-MM-DD'),
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastUpdateTime',
    render: (text, record) =>
      moment(record.lastUpdateTime).format('YYYY-MM-DD'),
  },
  {
    title: '保单号码',
    debugtype: 'string',
    dataIndex: 'insuranceNumber',
    width: '19',
  },
  {
    title: '保险图1',
    dataIndex: 'insuranceImage1',
    render: (text, record) => <ImagePreview imageLocation={record.保险图1} />,
  },
  {
    title: '保险图2',
    dataIndex: 'insuranceImage2',
    render: (text, record) => <ImagePreview imageLocation={record.保险图2} />,
  },
  {
    title: '保险图片3',
    dataIndex: 'insuranceImage3',
    render: (text, record) => <ImagePreview imageLocation={record.保险图片3} />,
  },
  {
    title: '保险形象4',
    dataIndex: 'insuranceImage4',
    render: (text, record) => <ImagePreview imageLocation={record.保险形象4} />,
  },
  {
    title: '保险图片5',
    dataIndex: 'insuranceImage5',
    render: (text, record) => <ImagePreview imageLocation={record.保险图片5} />,
  },
  {
    title: '主订单',
    dataIndex: 'mainOrder',
    render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无'),
  },
]

class ServiceInsuranceForInspectionViewTable extends PureComponent {
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
          scroll={{ x: 1830 }}
        />
      </div>
    )
  }
}

export default ServiceInsuranceForInspectionViewTable
