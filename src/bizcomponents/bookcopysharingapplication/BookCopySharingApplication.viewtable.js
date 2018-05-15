
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookCopySharingApplication.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书副本数量', debugtype: 'string', dataIndex: 'bookCopyQuantity', width: '9' },
  { title: '书副本Image1', dataIndex: 'bookCopyImage1', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage1}/> },
  { title: '书副本Image2', dataIndex: 'bookCopyImage2', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage2}/> },
  { title: '书副本Image3', dataIndex: 'bookCopyImage3', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage3}/> },
  { title: '书副本Image4', dataIndex: 'bookCopyImage4', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage4}/> },
  { title: '书副本Image5', dataIndex: 'bookCopyImage5', render: (text, record) => <ImagePreview imageLocation={record.bookCopyImage5}/> },
  { title: '提供的方法', debugtype: 'string', dataIndex: 'deliverMethod', width: '8' },
  { title: '目的地存储',dataIndex: 'destinationStore', render: (text, record) => (record.destinationStore ? record.destinationStore.id : '暂无') },
  { title: '联系地址', debugtype: 'string', dataIndex: 'contactAddress', width: '18' },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '6' },
  { title: '联系手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobile', width: '15' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '7' },
  { title: '客户',dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
  { title: '员工',dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.id : '暂无') },
];

class BookCopySharingApplicationViewTable extends PureComponent {
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
          scroll={{ x: 1740 }}
        />
        
      </div>
    );
  }
}

export default BookCopySharingApplicationViewTable;

