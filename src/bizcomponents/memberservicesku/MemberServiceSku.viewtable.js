
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './MemberServiceSku.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '13' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
  { title: '列出的价格', debugtype: 'money', dataIndex: 'listPrice', width: '10' },
  { title: '销售价格', debugtype: 'money', dataIndex: 'salePrice', width: '10' },
  { title: '会员服务时间',dataIndex: 'memberServicePeriod', render: (text, record) => (record.memberServicePeriod ? record.memberServicePeriod.id : '暂无') },
  { title: '成员的产品',dataIndex: 'memberProduct', render: (text, record) => (record.memberProduct ? record.memberProduct.id : '暂无') },
];

class MemberServiceSkuViewTable extends PureComponent {
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

export default MemberServiceSkuViewTable;

