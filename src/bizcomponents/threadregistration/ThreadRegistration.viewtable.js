
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ThreadRegistration.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '主贴',dataIndex: 'thread', render: (text, record) => (record.thread ? record.thread.id : '暂无') },
  { title: '参与者',dataIndex: 'participant', render: (text, record) => (record.participant ? record.participant.id : '暂无') },
  { title: '登记时间', dataIndex: 'registerTime', render: (text, record) => moment(record.registerTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '评论', debugtype: 'string', dataIndex: 'comments', width: '14' },
];

class ThreadRegistrationViewTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
        
      </div>
    );
  }
}

export default ThreadRegistrationViewTable;

