
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './RepairingQuotation.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '维修报价描述', debugtype: 'string', dataIndex: 'repairingQuotationDescription', width: '13' },
  { title: '维修报价图片1', dataIndex: 'repairingQuotationImage1', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage1}/> },
  { title: '维修报价图2', dataIndex: 'repairingQuotationImage2', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage2}/> },
  { title: '维修报价图片3', dataIndex: 'repairingQuotationImage3', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage3}/> },
  { title: '维修报价图片4', dataIndex: 'repairingQuotationImage4', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage4}/> },
  { title: '维修报价图片5', dataIndex: 'repairingQuotationImage5', render: (text, record) => <ImagePreview imageLocation={record.repairingQuotationImage5}/> },
  { title: '维修报价总金额', debugtype: 'money', dataIndex: 'repairingQuotationTotalAmount', width: '11' },
  { title: '服务',dataIndex: 'service', render: (text, record) => (record.service ? record.service.id : '暂无') },
];

class RepairingQuotationViewTable extends PureComponent {
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
          scroll={{ x: 1140 }}
        />
        
      </div>
    );
  }
}

export default RepairingQuotationViewTable;

