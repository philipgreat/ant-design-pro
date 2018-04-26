
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ResponsibilityType.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '9' },
  { title: '公司',dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '基本描述', debugtype: 'string', dataIndex: 'baseDescription', width: '8' },
  { title: '详细描述', debugtype: 'string', dataIndex: 'detailDescription', width: '33' },
];

class ResponsibilityTypeViewTable extends PureComponent {
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

export default ResponsibilityTypeViewTable;

