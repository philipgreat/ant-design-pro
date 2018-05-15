
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookCopyCheckRecord.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书副本',dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.id : '暂无') },
  { title: '书副本检查状态',dataIndex: 'bookCopyCheckStatus', render: (text, record) => (record.bookCopyCheckStatus ? record.bookCopyCheckStatus.id : '暂无') },
  { title: '书副本检查Datetime', dataIndex: 'bookCopyCheckDatetime', render: (text, record) => moment(record.bookCopyCheckDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检查过程的员工',dataIndex: 'checkProcessEmployee', render: (text, record) => (record.checkProcessEmployee ? record.checkProcessEmployee.id : '暂无') },
  { title: '检查过程的结果', debugtype: 'string', dataIndex: 'checkProcessResults', width: '6' },
  { title: '检查过程Datetime', dataIndex: 'checkProcessDatetime', render: (text, record) => moment(record.checkProcessDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书副本检查计划',dataIndex: 'bookCopyCheckPlan', render: (text, record) => (record.bookCopyCheckPlan ? record.bookCopyCheckPlan.id : '暂无') },
];

class BookCopyCheckRecordViewTable extends PureComponent {
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

export default BookCopyCheckRecordViewTable;

