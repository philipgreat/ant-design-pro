
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './CustomerAccountDetails.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '8' },
  { title: '变化量', debugtype: 'money', dataIndex: 'changeAmount', width: '9' },
  { title: '变化类型', debugtype: 'string', dataIndex: 'changeType', width: '6' },
  { title: '客户账户',dataIndex: 'customerAccount', render: (text, record) => (record.customerAccount ? record.customerAccount.id : '暂无') },
  { title: '更改日期时间', dataIndex: 'changeDatetime', render: (text, record) => moment(record.changeDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '相关的主要顺序',dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.id : '暂无') },
];

class CustomerAccountDetailsViewTable extends PureComponent {
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

export default CustomerAccountDetailsViewTable;

