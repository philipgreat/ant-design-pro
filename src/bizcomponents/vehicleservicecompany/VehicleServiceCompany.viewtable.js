
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './VehicleServiceCompany.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '公司名称', debugtype: 'string', dataIndex: 'companyName', width: '12' },
  { title: '服务状态', debugtype: 'string', dataIndex: 'operatingStatus', width: '6' },
  { title: '所在城市',dataIndex: 'addressCity', render: (text, record) => (record.addressCity ? record.addressCity.id : '暂无') },
  { title: '所在地址', debugtype: 'string', dataIndex: 'addressDetail', width: '17' },
  { title: '到店服务',dataIndex: 'availableStoreService', render: (text, record) => (record.availableStoreService ? '是' : '否') },
  { title: '上门服务',dataIndex: 'availableHomeService', render: (text, record) => (record.availableHomeService ? '是' : '否') },
  { title: '营业时间', debugtype: 'string', dataIndex: 'openingTime', width: '26' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '13' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '14' },
  { title: '平台',dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
];

class VehicleServiceCompanyViewTable extends PureComponent {
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
          scroll={{ x: 1380 }}
        />
        
      </div>
    );
  }
}

export default VehicleServiceCompanyViewTable;
