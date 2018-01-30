
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ServiceVehicleMovementM2m.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员',dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD') },
  { title: '最后的位置', debugtype: 'string', dataIndex: 'lastLocation', width: '17' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD') },
  { title: '主订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '移动目的', debugtype: 'string', dataIndex: 'movementPurpose', width: '8' },
  { title: '司机',dataIndex: 'driver', render: (text, record) => (record.driver ? record.driver.id : '暂无') },
  { title: '接收方',dataIndex: 'receiver', render: (text, record) => (record.receiver ? record.receiver.id : '暂无') },
];

class ServiceVehicleMovementM2mViewTable extends PureComponent {
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
          scroll={{ x: 1305 }}
        />
        
      </div>
    );
  }
}

export default ServiceVehicleMovementM2mViewTable;

