
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookTagRecord.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标签名', debugtype: 'string', dataIndex: 'tagName', width: '7' },
  { title: '书',dataIndex: 'book', render: (text, record) => (record.book ? record.book.id : '暂无') },
  { title: '书副本',dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.id : '暂无') },
  { title: '标签Datetime', dataIndex: 'tagDatetime', render: (text, record) => moment(record.tagDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '标签的客户', debugtype: 'string', dataIndex: 'tagCustomer', width: '17' },
  { title: '图书管理',dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
];

class BookTagRecordViewTable extends PureComponent {
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

export default BookTagRecordViewTable;

