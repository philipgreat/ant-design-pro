
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ProductComponent.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '16' },
  { title: '代码', debugtype: 'int', dataIndex: 'code', width: '7' },
  { title: '蓝图', dataIndex: 'bluePrint', render: (text, record) => <ImagePreview imageLocation={record.bluePrint}/> },
  { title: '产品',dataIndex: 'product', render: (text, record) => (record.product ? record.product.id : '暂无') },
];

class ProductComponentViewTable extends PureComponent {
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

export default ProductComponentViewTable;

