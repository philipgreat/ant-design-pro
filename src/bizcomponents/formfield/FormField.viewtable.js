
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './FormField.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '6' },
  { title: '语言环境的关键', debugtype: 'string', dataIndex: 'localeKey', width: '8' },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '12' },
  { title: '形式',dataIndex: 'form', render: (text, record) => (record.form ? record.form.id : '暂无') },
  { title: '默认值', debugtype: 'string', dataIndex: 'defaultValue', width: '7' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16' },
];

class FormFieldViewTable extends PureComponent {
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

export default FormFieldViewTable;

