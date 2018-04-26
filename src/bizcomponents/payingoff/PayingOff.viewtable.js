
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './PayingOff.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '谁', debugtype: 'string', dataIndex: 'who', width: '6' },
  { title: '支付',dataIndex: 'paidFor', render: (text, record) => (record.paidFor ? record.paidFor.id : '暂无') },
  { title: '支付时间', dataIndex: 'paidTime', render: (text, record) => moment(record.paidTime).format('YYYY-MM-DD') },
  { title: '金额', debugtype: 'money', dataIndex: 'amount', width: '12' },
];

class PayingOffViewTable extends PureComponent {
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

export default PayingOffViewTable;

