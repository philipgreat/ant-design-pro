
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './VehicleServiceCompanyBusinessScope.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '商户',dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '服务范围',dataIndex: 'availableService', render: (text, record) => (record.availableService ? record.availableService.id : '暂无') },
  { title: '可用状态',dataIndex: 'serviceAvailability', render: (text, record) => (record.serviceAvailability ? '是' : '否') },
];

class VehicleServiceCompanyBusinessScopeViewTable extends PureComponent {
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

export default VehicleServiceCompanyBusinessScopeViewTable;

