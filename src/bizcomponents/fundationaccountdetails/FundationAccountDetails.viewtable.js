
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './FundationAccountDetails.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '8' },
  { title: '变化量', debugtype: 'string', dataIndex: 'changeAmount', width: '8' },
  { title: '基金账户',dataIndex: 'fundationAccount', render: (text, record) => (record.fundationAccount ? record.fundationAccount.id : '暂无') },
  { title: '相关的主要顺序',dataIndex: 'relatedMainOrder', render: (text, record) => (record.relatedMainOrder ? record.relatedMainOrder.id : '暂无') },
  { title: 'Datetime', dataIndex: 'datetime', render: (text, record) => moment(record.datetime).format('YYYY-MM-DD HH:mm:ss') },
];

class FundationAccountDetailsViewTable extends PureComponent {
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

export default FundationAccountDetailsViewTable;

