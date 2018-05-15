
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookReviewLike.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '书评',dataIndex: 'bookReview', render: (text, record) => (record.bookReview ? record.bookReview.id : '暂无') },
  { title: '回答者',dataIndex: 'replier', render: (text, record) => (record.replier ? record.replier.id : '暂无') },
  { title: '如发布日期时间', dataIndex: 'likePublishDatetime', render: (text, record) => moment(record.likePublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '喜欢的类型', debugtype: 'string', dataIndex: 'likeType', width: '6' },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '17' },
];

class BookReviewLikeViewTable extends PureComponent {
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

export default BookReviewLikeViewTable;

