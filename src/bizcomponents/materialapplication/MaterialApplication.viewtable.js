
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './MaterialApplication.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '11' },
  { title: '材料',dataIndex: 'material', render: (text, record) => (record.material ? record.material.id : '暂无') },
  { title: '数量', debugtype: 'int', dataIndex: 'quantity', width: '5' },
  { title: '产品零件',dataIndex: 'productPart', render: (text, record) => (record.productPart ? record.productPart.id : '暂无') },
];

class MaterialApplicationViewTable extends PureComponent {
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

export default MaterialApplicationViewTable;

