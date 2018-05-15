
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './StoreAccount.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  { title: '量', debugtype: 'money', dataIndex: 'amount', width: '11' },
  { title: '商店',dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
  { title: '账户管理',dataIndex: 'accountManagement', render: (text, record) => (record.accountManagement ? record.accountManagement.id : '暂无') },
];

class StoreAccountViewTable extends PureComponent {
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

export default StoreAccountViewTable;

