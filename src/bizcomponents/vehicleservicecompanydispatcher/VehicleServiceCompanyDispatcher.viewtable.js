
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './VehicleServiceCompanyDispatcher.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '18' },
  { title: '商户',dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
];

class VehicleServiceCompanyDispatcherViewTable extends PureComponent {
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

export default VehicleServiceCompanyDispatcherViewTable;

