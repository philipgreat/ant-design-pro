
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './CompanyQrcodePromotionRecord.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '客户',dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
  { title: '商户',dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
];

class CompanyQrcodePromotionRecordViewTable extends PureComponent {
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

export default CompanyQrcodePromotionRecordViewTable;
