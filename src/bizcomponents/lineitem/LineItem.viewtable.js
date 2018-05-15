
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './LineItem.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '15' },
  { title: '总结', debugtype: 'string', dataIndex: 'summary', width: '20' },
  { title: '列出的价格', debugtype: 'money', dataIndex: 'listPrice', width: '10' },
  { title: '销售价格', debugtype: 'money', dataIndex: 'salePrice', width: '10' },
  { title: 'Sku类型', debugtype: 'string', dataIndex: 'skuType', width: '13' },
  { title: 'Sku Id', debugtype: 'string', dataIndex: 'skuId', width: '12' },
  { title: 'Sku链接', debugtype: 'string_url', dataIndex: 'skuLink', width: '40' },
  { title: '商品折扣', debugtype: 'money', dataIndex: 'itemDiscount', width: '9' },
  { title: '项目调整', debugtype: 'money', dataIndex: 'itemAdjustment', width: '10' },
  { title: '主订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
];

class LineItemViewTable extends PureComponent {
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
          scroll={{ x: 1665 }}
        />
        
      </div>
    );
  }
}

export default LineItemViewTable;

