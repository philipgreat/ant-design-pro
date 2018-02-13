
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './OrderDiscountCoupon.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '优惠券名称', debugtype: 'string', dataIndex: 'couponTitle', width: '10' },
  { title: '折扣金额', debugtype: 'money', dataIndex: 'discountAmount', width: '10' },
  { title: '结束日期', dataIndex: 'endDate', render: (text, record) => moment(record.endDate).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '息状态', debugtype: 'string', dataIndex: 'couponStatus', width: '7' },
  { title: '共享代码', debugtype: 'string', dataIndex: 'shareCode', width: '11' },
  { title: '客户',dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
  { title: '主订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '平台',dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
];

class OrderDiscountCouponViewTable extends PureComponent {
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
          scroll={{ x: 1155 }}
        />
        
      </div>
    );
  }
}

export default OrderDiscountCouponViewTable;

