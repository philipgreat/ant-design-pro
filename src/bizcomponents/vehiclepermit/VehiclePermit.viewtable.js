
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './VehiclePermit.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '姓名', debugtype: 'string', dataIndex: 'holderName', width: '7' },
  { title: '驾驶证号码', debugtype: 'string', dataIndex: 'licenseNumber', width: '20' },
  { title: '有效期至', dataIndex: 'expirationDate', render: (text, record) => moment(record.expirationDate).format('YYYY-MM-DD') },
  { title: '驾驶证图1', dataIndex: 'image1', render: (text, record) => <ImagePreview imageLocation={record.image1}/> },
  { title: '驾驶证图2', dataIndex: 'image2', render: (text, record) => <ImagePreview imageLocation={record.image2}/> },
  { title: '驾驶证图3', dataIndex: 'image3', render: (text, record) => <ImagePreview imageLocation={record.image3}/> },
  { title: '驾驶证图4', dataIndex: 'image4', render: (text, record) => <ImagePreview imageLocation={record.image4}/> },
  { title: '驾驶证图5', dataIndex: 'image5', render: (text, record) => <ImagePreview imageLocation={record.image5}/> },
];

class VehiclePermitViewTable extends PureComponent {
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
          scroll={{ x: 1065 }}
        />
        
      </div>
    );
  }
}

export default VehiclePermitViewTable;

