
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ServiceVehicleRepairing.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员',dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary', width: '26' },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检报告1', dataIndex: 'inspectionReportImage1', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage1}/> },
  { title: '年检报告2', dataIndex: 'inspectionReportImage2', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage2}/> },
  { title: '年检报告3', dataIndex: 'inspectionReportImage3', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage3}/> },
  { title: '年检报告4', dataIndex: 'inspectionReportImage4', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage4}/> },
  { title: '年检报告5', dataIndex: 'inspectionReportImage5', render: (text, record) => <ImagePreview imageLocation={record.inspectionReportImage5}/> },
  { title: '车辆维修报价单1', dataIndex: 'repairingQuotationImage1', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage1}/> },
  { title: '车辆维修报价单2', dataIndex: 'repairingQuotationImage2', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage2}/> },
  { title: '车辆维修报价单3', dataIndex: 'repairingQuotationImage3', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage3}/> },
  { title: '车辆维修报价单4', dataIndex: 'repairingQuotationImage4', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage4}/> },
  { title: '车辆维修报价单5', dataIndex: 'repairingQuotationImage5', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage5}/> },
  { title: '车辆维修报价总金额', debugtype: 'money', dataIndex: 'repairingQuotationTotalAmount', width: '11' },
  { title: '车辆维修部分图片1', dataIndex: 'repairingPartImg1', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg1}/> },
  { title: '车辆维修部分图片2', dataIndex: 'repairingPartImg2', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg2}/> },
  { title: '车辆维修部分图片3', dataIndex: 'repairingPartImg3', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg3}/> },
  { title: '车辆维修部分图片4', dataIndex: 'repairingPartImg4', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg4}/> },
  { title: '车辆维修部分图片5', dataIndex: 'repairingPartImg5', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg5}/> },
  { title: '车辆维修备注', debugtype: 'string', dataIndex: 'repairingPartListComment', width: '219' },
  { title: '维修完成日期时间', dataIndex: 'repairingFinishedDatetime', render: (text, record) => moment(record.repairingFinishedDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '商户',dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.id : '暂无') },
  { title: '年检订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
];

class ServiceVehicleRepairingViewTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props;
	
	

    return (
      <div className={styles.standardTable}>
        
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 7260 }}
        />
        
      </div>
    );
  }
}

export default ServiceVehicleRepairingViewTable;

