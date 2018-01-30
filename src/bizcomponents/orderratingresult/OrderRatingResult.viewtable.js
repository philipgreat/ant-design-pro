
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './OrderRatingResult.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '评分名称', debugtype: 'string', dataIndex: 'ratingName', width: '11' },
  { title: '评分结果', debugtype: 'double', dataIndex: 'ratingResult', width: '7' },
  { title: '评分条目',dataIndex: 'availableRatingItem', render: (text, record) => (record.availableRatingItem ? record.availableRatingItem.id : '暂无') },
  { title: '主订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
];

class OrderRatingResultViewTable extends PureComponent {
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

export default OrderRatingResultViewTable;

