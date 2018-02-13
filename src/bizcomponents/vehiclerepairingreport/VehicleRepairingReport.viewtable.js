
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './VehicleRepairingReport.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '修复部分Img 1', dataIndex: 'repairingPartImg1', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg1}/> },
  { title: '修复部分Img 2', dataIndex: 'repairingPartImg2', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg2}/> },
  { title: '修复部分Img 3', dataIndex: 'repairingPartImg3', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg3}/> },
  { title: '修复部分Img 4', dataIndex: 'repairingPartImg4', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg4}/> },
  { title: '修复部分Img 5', dataIndex: 'repairingPartImg5', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg5}/> },
  { title: '修复部分Img 6', dataIndex: 'repairingPartImg6', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg6}/> },
  { title: '修复部分Img 7', dataIndex: 'repairingPartImg7', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg7}/> },
  { title: '修复部分Img 8', dataIndex: 'repairingPartImg8', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg8}/> },
  { title: '修复部分Img 9', dataIndex: 'repairingPartImg9', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg9}/> },
  { title: '修复部分Img 10', dataIndex: 'repairingPartImg10', render: (text, record) => <ImagePreview imageLocation={record.repairingPartImg10}/> },
  { title: '修复部分评论列表', debugtype: 'string', dataIndex: 'repairingPartListComment', width: '219' },
  { title: '服务',dataIndex: 'service', render: (text, record) => (record.service ? record.service.id : '暂无') },
  { title: '主订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '修复完成日期时间', dataIndex: 'repairingFinishedDatetime', render: (text, record) => moment(record.repairingFinishedDatetime).format('YYYY-MM-DD HH:mm:ss') },
];

class VehicleRepairingReportViewTable extends PureComponent {
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
          scroll={{ x: 4875 }}
        />
        
      </div>
    );
  }
}

export default VehicleRepairingReportViewTable;

