
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookBorrowConfiguration.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '马克斯借数量', debugtype: 'int', dataIndex: 'maxBorrowQuantity', width: '6' },
  { title: '自由借贷天', debugtype: 'int', dataIndex: 'freeLendingDays', width: '6' },
  { title: '贷款支付率', debugtype: 'money', dataIndex: 'lendingPayRate', width: '9' },
  { title: '图书管理',dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
];

class BookBorrowConfigurationViewTable extends PureComponent {
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

export default BookBorrowConfigurationViewTable;

