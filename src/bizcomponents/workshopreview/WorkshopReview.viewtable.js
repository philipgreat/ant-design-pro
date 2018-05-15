
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './WorkshopReview.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '车间',dataIndex: 'workshop', render: (text, record) => (record.workshop ? record.workshop.id : '暂无') },
  { title: '评论家',dataIndex: 'reviewer', render: (text, record) => (record.reviewer ? record.reviewer.id : '暂无') },
  { title: '评论发布日期时间', dataIndex: 'reviewPublishDatetime', render: (text, record) => moment(record.reviewPublishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '审查内容', debugtype: 'string', dataIndex: 'reviewContent', width: '16' },
];

class WorkshopReviewViewTable extends PureComponent {
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

export default WorkshopReviewViewTable;

