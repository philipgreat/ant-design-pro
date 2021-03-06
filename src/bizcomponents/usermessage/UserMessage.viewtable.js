
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './UserMessage.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '10' },
  { title: '信息的关键', debugtype: 'string', dataIndex: 'messageKey', width: '18' },
  { title: '接收者',dataIndex: 'receiver', render: (text, record) => (record.receiver ? record.receiver.id : '暂无') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '14' },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '31' },
  { title: '消息的时间', dataIndex: 'messageTime', render: (text, record) => moment(record.messageTime).format('YYYY-MM-DD HH:mm:ss') },
];

class UserMessageViewTable extends PureComponent {
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
          scroll={{ x: 1125 }}
        />
        
      </div>
    );
  }
}

export default UserMessageViewTable;

