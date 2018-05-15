
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './BookCopyDonateBenefitConfiguration.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '供应商的利益', debugtype: 'string', dataIndex: 'vendorBenefit', width: '6' },
  { title: '贷款商店受益', debugtype: 'string', dataIndex: 'lendingStoreBenefit', width: '7' },
  { title: '平台的好处', debugtype: 'string', dataIndex: 'platformBenefit', width: '7' },
  { title: '公共服务基金受益', debugtype: 'string', dataIndex: 'publicServiceFundBenefit', width: '7' },
  { title: '图书管理',dataIndex: 'bookManagement', render: (text, record) => (record.bookManagement ? record.bookManagement.id : '暂无') },
];

class BookCopyDonateBenefitConfigurationViewTable extends PureComponent {
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

export default BookCopyDonateBenefitConfigurationViewTable;

