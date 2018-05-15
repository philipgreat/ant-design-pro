
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './MemberCustomer.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '会员服务产品',dataIndex: 'memberServiceProduct', render: (text, record) => (record.memberServiceProduct ? record.memberServiceProduct.id : '暂无') },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '10' },
  { title: '产品描述', debugtype: 'string', dataIndex: 'productDescription', width: '10' },
  { title: '参加研讨会',dataIndex: 'joinWorkshop', render: (text, record) => (record.joinWorkshop ? '是' : '否') },
  { title: '制造车间',dataIndex: 'createWorkshop', render: (text, record) => (record.createWorkshop ? '是' : '否') },
  { title: '借的书',dataIndex: 'borrowBook', render: (text, record) => (record.borrowBook ? '是' : '否') },
  { title: '是超级贵宾',dataIndex: 'isSuperVIP', render: (text, record) => (record.isSuperVIP ? '是' : '否') },
  { title: '会员服务Sku',dataIndex: 'memberServiceSku', render: (text, record) => (record.memberServiceSku ? record.memberServiceSku.id : '暂无') },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
  { title: '列出的价格', debugtype: 'money', dataIndex: 'listPrice', width: '10' },
  { title: '销售价格', debugtype: 'money', dataIndex: 'salePrice', width: '10' },
  { title: '会员服务时间',dataIndex: 'memberServicePeriod', render: (text, record) => (record.memberServicePeriod ? record.memberServicePeriod.id : '暂无') },
  { title: '服务期间名称', debugtype: 'string', dataIndex: 'servicePeriodName', width: '7' },
  { title: '服务时间天', debugtype: 'int', dataIndex: 'servicePeriodDays', width: '7' },
  { title: '开始日期Datetime', dataIndex: 'startDateDatetime', render: (text, record) => moment(record.startDateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '过期日期Datetime', dataIndex: 'expiredDateDatetime', render: (text, record) => moment(record.expiredDateDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '主订单',dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.id : '暂无') },
  { title: '客户',dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
];

class MemberCustomerViewTable extends PureComponent {
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
          scroll={{ x: 2250 }}
        />
        
      </div>
    );
  }
}

export default MemberCustomerViewTable;

