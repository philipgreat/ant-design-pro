
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServiceInsuranceForInspection.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '选定保险', dataIndex: 'orderedInsurance', render: (text, record) => (record.orderedInsurance ? record.orderedInsurance.id : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '24' },
  { title: '服务的评论', debugtype: 'string', dataIndex: 'serviceComments', width: '15' },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD') },
  { title: '保险名称', debugtype: 'string', dataIndex: 'insuranceName', width: '10' },
  { title: '承保方', debugtype: 'string', dataIndex: 'insuranceVendor', width: '11' },
  { title: '保费', debugtype: 'money', dataIndex: 'insurancePrice', width: '9' },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary', width: '20' },
  { title: '保单号码', debugtype: 'string', dataIndex: 'insuranceNumber', width: '19' },
  { title: '保单凭证1', dataIndex: 'insuranceImage1', render: (text, record) => <ImagePreview imageLocation={record.insuranceImage1} /> },
  { title: '保单凭证2', dataIndex: 'insuranceImage2', render: (text, record) => <ImagePreview imageLocation={record.insuranceImage2} /> },
  { title: '保单凭证3', dataIndex: 'insuranceImage3', render: (text, record) => <ImagePreview imageLocation={record.insuranceImage3} /> },
  { title: '保单凭证4', dataIndex: 'insuranceImage4', render: (text, record) => <ImagePreview imageLocation={record.insuranceImage4} /> },
  { title: '保单凭证5', dataIndex: 'insuranceImage5', render: (text, record) => <ImagePreview imageLocation={record.insuranceImage5} /> },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.id : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
]

class ServiceInsuranceForInspectionConfirmationTable extends PureComponent {
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
          scroll={{ x: 2775 }}
        />
      </div>
    )
  }
}

export default ServiceInsuranceForInspectionConfirmationTable

