
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './EquipmentSupplier.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '18' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '67' },
  { title: '传热性能的手机', debugtype: 'string', dataIndex: 'contectPhone', width: '16' },
  { title: '业主',dataIndex: 'owner', render: (text, record) => (record.owner ? record.owner.id : '暂无') },
];

class EquipmentSupplierViewTable extends PureComponent {
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
          scroll={{ x: 1410 }}
        />
        
      </div>
    );
  }
}

export default EquipmentSupplierViewTable;

