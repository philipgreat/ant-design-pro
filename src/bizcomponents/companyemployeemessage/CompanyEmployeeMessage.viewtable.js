
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './CompanyEmployeeMessage.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '13' },
  { title: '消息内容', debugtype: 'string', dataIndex: 'messageContent', width: '36' },
  { title: '发送方',dataIndex: 'sender', render: (text, record) => (record.sender ? record.sender.id : '暂无') },
  { title: '接收方',dataIndex: 'receiver', render: (text, record) => (record.receiver ? record.receiver.id : '暂无') },
  { title: '服务类型',dataIndex: 'serviceType', render: (text, record) => (record.serviceType ? record.serviceType.id : '暂无') },
  { title: '服务单号', debugtype: 'string', dataIndex: 'serviceTicket', width: '19' },
  { title: '发送时间', dataIndex: 'sendTime', render: (text, record) => moment(record.sendTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '阅读时间', dataIndex: 'readTime', render: (text, record) => moment(record.readTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '6' },
];

class CompanyEmployeeMessageViewTable extends PureComponent {
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
          scroll={{ x: 1860 }}
        />
        
      </div>
    );
  }
}

export default CompanyEmployeeMessageViewTable;

