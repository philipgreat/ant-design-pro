
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookCopyOperationRecord.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书副本',dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.id : '暂无') },
  { title: '书副本操作类型', debugtype: 'string', dataIndex: 'bookCopyOperateType', width: '6' },
  { title: '经营商店',dataIndex: 'operateStore', render: (text, record) => (record.operateStore ? record.operateStore.id : '暂无') },
  { title: '操作日期时间', dataIndex: 'operationDatetime', render: (text, record) => moment(record.operationDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '操作员工',dataIndex: 'operationEmployee', render: (text, record) => (record.operationEmployee ? record.operationEmployee.id : '暂无') },
];

class BookCopyOperationRecordViewTable extends PureComponent {
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

export default BookCopyOperationRecordViewTable;

