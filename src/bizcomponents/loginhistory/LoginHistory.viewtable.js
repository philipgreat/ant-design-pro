
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './LoginHistory.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '登录时间', dataIndex: 'loginTime', render: (text, record) => moment(record.loginTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '从IP', debugtype: 'string', dataIndex: 'fromIp', width: '15' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '8' },
  { title: 'SEC的用户',dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.id : '暂无') },
];

class LoginHistoryViewTable extends PureComponent {
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

export default LoginHistoryViewTable;

