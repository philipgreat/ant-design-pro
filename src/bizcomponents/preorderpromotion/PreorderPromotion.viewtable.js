
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './PreorderPromotion.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '优惠信息', debugtype: 'string', dataIndex: 'promotionMessage', width: '15' },
  { title: '提前天数', debugtype: 'int', dataIndex: 'preorderDays', width: '6' },
  { title: '优惠金额', debugtype: 'money', dataIndex: 'discountAmount', width: '10' },
  { title: '开始日期', dataIndex: 'startDate', render: (text, record) => moment(record.startDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '结束日期', dataIndex: 'endDate', render: (text, record) => moment(record.endDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '产品名称',dataIndex: 'product', render: (text, record) => (record.product ? record.product.id : '暂无') },
  { title: '平台',dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
];

class PreorderPromotionViewTable extends PureComponent {
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
          scroll={{ x: 1110 }}
        />
        
      </div>
    );
  }
}

export default PreorderPromotionViewTable;

