
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookReviewType.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书评类型名称', debugtype: 'string', dataIndex: 'bookReviewTypeTitle', width: '8' },
  { title: '书评类型描述', debugtype: 'string', dataIndex: 'bookReviewTypeDescription', width: '13' },
  { title: '图书管理',dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
];

class BookReviewTypeViewTable extends PureComponent {
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

export default BookReviewTypeViewTable;

