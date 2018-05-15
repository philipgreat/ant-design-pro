
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookCopySku.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书',dataIndex: 'book', render: (text, record) => (record.book ? record.book.id : '暂无') },
  { title: '书副本',dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.id : '暂无') },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '24' },
  { title: '书的封面', dataIndex: 'bookCover', render: (text, record) => <ImagePreview imageLocation={record.bookCover}/> },
  { title: '书的作者', debugtype: 'string', dataIndex: 'bookAuthor', width: '7' },
  { title: '图书出版者', debugtype: 'string', dataIndex: 'bookPublisher', width: '9' },
  { title: '书的作用', dataIndex: 'bookPubdate', render: (text, record) => moment(record.bookPubdate).format('YYYY-MM-DD') },
  { title: '列出的价格', debugtype: 'money', dataIndex: 'listPrice', width: '10' },
  { title: '评估价格', debugtype: 'money', dataIndex: 'evaluationPrice', width: '10' },
  { title: '书Isbn13', debugtype: 'string', dataIndex: 'bookIsbn13', width: '17' },
  { title: '书Isbn10', debugtype: 'int', dataIndex: 'bookIsbn10', width: '14' },
  { title: '书的地位', debugtype: 'string', dataIndex: 'bookStatus', width: '47' },
  { title: '图书管理',dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
];

class BookCopySkuViewTable extends PureComponent {
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
          scroll={{ x: 2280 }}
        />
        
      </div>
    );
  }
}

export default BookCopySkuViewTable;

