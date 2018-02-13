
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ServiceFileMovementM2m.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus', width: '7' },
  { title: '服务人员',dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '转移验证代码', debugtype: 'string', dataIndex: 'transferVerifyCode', width: '10' },
  { title: '主订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '移动目的', debugtype: 'string', dataIndex: 'movementPurpose', width: '26' },
  { title: '发送方',dataIndex: 'sender', render: (text, record) => (record.sender ? record.sender.id : '暂无') },
  { title: '接收方',dataIndex: 'receiver', render: (text, record) => (record.receiver ? record.receiver.id : '暂无') },
  { title: '回归结果', debugtype: 'string', dataIndex: 'handoverResult', width: '6' },
  { title: '回归结果的评论', debugtype: 'string', dataIndex: 'handoverResultComment', width: '22' },
  { title: '商户',dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.id : '暂无') },
];

class ServiceFileMovementM2mViewTable extends PureComponent {
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
          scroll={{ x: 2130 }}
        />
        
      </div>
    );
  }
}

export default ServiceFileMovementM2mViewTable;

