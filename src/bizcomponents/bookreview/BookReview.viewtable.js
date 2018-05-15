
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookReview.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书的信息',dataIndex: 'bookInfo', render: (text, record) => (record.bookInfo ? record.bookInfo.id : '暂无') },
  { title: '书副本',dataIndex: 'bookCopy', render: (text, record) => (record.bookCopy ? record.bookCopy.id : '暂无') },
  { title: '书评类型',dataIndex: 'bookReviewType', render: (text, record) => (record.bookReviewType ? record.bookReviewType.id : '暂无') },
  { title: '评论家',dataIndex: 'reviewer', render: (text, record) => (record.reviewer ? record.reviewer.id : '暂无') },
  { title: '评论发布日期时间', dataIndex: 'reviewPublishDatetime', render: (text, record) => moment(record.reviewPublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '审查内容', debugtype: 'string', dataIndex: 'reviewContent', width: '13' },
  { title: '回顾Image1', dataIndex: 'reviewImage1', render: (text, record) => <ImagePreview imageLocation={record.reviewImage1}/> },
  { title: '回顾Image2', dataIndex: 'reviewImage2', render: (text, record) => <ImagePreview imageLocation={record.reviewImage2}/> },
  { title: '回顾Image3', dataIndex: 'reviewImage3', render: (text, record) => <ImagePreview imageLocation={record.reviewImage3}/> },
  { title: '回顾Image4', dataIndex: 'reviewImage4', render: (text, record) => <ImagePreview imageLocation={record.reviewImage4}/> },
  { title: '回顾Image5', dataIndex: 'reviewImage5', render: (text, record) => <ImagePreview imageLocation={record.reviewImage5}/> },
];

class BookReviewViewTable extends PureComponent {
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
          scroll={{ x: 1515 }}
        />
        
      </div>
    );
  }
}

export default BookReviewViewTable;

