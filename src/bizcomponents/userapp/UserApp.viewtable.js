
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './UserApp.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '头衔', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: 'SEC的用户',dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.id : '暂无') },
  { title: '应用程序图标', debugtype: 'string', dataIndex: 'appIcon', width: '13' },
  { title: '完全访问',dataIndex: 'fullAccess', render: (text, record) => (record.fullAccess ? '是' : '否') },
  { title: '许可', debugtype: 'string', dataIndex: 'permission', width: '8' },
  { title: '对象类型', debugtype: 'string', dataIndex: 'objectType', width: '31' },
  { title: '对象ID', debugtype: 'string', dataIndex: 'objectId', width: '14' },
  { title: '位置', debugtype: 'string', dataIndex: 'location', width: '16' },
];

class UserAppViewTable extends PureComponent {
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
          scroll={{ x: 1275 }}
        />
        
      </div>
    );
  }
}

export default UserAppViewTable;

