
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BorrowingHistory.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '借款人',dataIndex: 'borrower', render: (text, record) => (record.borrower ? record.borrower.id : '暂无') },
  { title: '借款人会员级别', debugtype: 'string', dataIndex: 'borrowerMemberLevel', width: '8' },
  { title: '借方成员服务过期日期。', dataIndex: 'borrowerMemberServiceExpiredDatetime', render: (text, record) => moment(record.borrowerMemberServiceExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '书',dataIndex: 'book', render: (text, record) => (record.book ? record.book.id : '暂无') },
  { title: '书副本',dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.id : '暂无') },
  { title: '书副本共享类型', debugtype: 'string', dataIndex: 'bookCopySharingType', width: '6' },
  { title: '书的名字', debugtype: 'string', dataIndex: 'bookName', width: '8' },
  { title: '贷款商店',dataIndex: 'lendingStore', render: (text, record) => (record.lendingStore ? record.lendingStore.id : '暂无') },
  { title: '贷款存储类型', debugtype: 'string', dataIndex: 'lendingStoreType', width: '6' },
  { title: '贷款Datetime', dataIndex: 'lendingDatetime', render: (text, record) => moment(record.lendingDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '自由借贷天', debugtype: 'int', dataIndex: 'freeLendingDays', width: '5' },
  { title: '免费贷款到期日期时间', dataIndex: 'freeLendingExpiredDatetime', render: (text, record) => moment(record.freeLendingExpiredDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '到期贷款利率', debugtype: 'money', dataIndex: 'expiredLendingRate', width: '9' },
  { title: '到期贷款计算频率', debugtype: 'int', dataIndex: 'expiredLendingComputeFrequency', width: '5' },
  { title: '返回日期时间', dataIndex: 'returnDatetime', render: (text, record) => moment(record.returnDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '返回商店',dataIndex: 'returnStore', render: (text, record) => (record.returnStore ? record.returnStore.id : '暂无') },
  { title: '贷款的日子', debugtype: 'int', dataIndex: 'lendingDays', width: '6' },
  { title: '免费贷款到期',dataIndex: 'freeLendingExpired', render: (text, record) => (record.freeLendingExpired ? '是' : '否') },
];

class BorrowingHistoryViewTable extends PureComponent {
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
          scroll={{ x: 2205 }}
        />
        
      </div>
    );
  }
}

export default BorrowingHistoryViewTable;

