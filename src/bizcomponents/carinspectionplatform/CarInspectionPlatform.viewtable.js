
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './CarInspectionPlatform.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '11' },
  { title: '保险联系人姓名', debugtype: 'string', dataIndex: 'insuranceContactName', width: '8' },
  { title: '保险联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'insuranceContactMobile', width: '15' },
];

class CarInspectionPlatformViewTable extends PureComponent {
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

export default CarInspectionPlatformViewTable;

