
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './FormFieldMessage.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '头衔', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: '参数名称', debugtype: 'string', dataIndex: 'parameterName', width: '8' },
  { title: '形式',dataIndex: 'form', render: (text, record) => (record.form ? record.form.id : '暂无') },
  { title: '水平', debugtype: 'string', dataIndex: 'level', width: '11' },
];

class FormFieldMessageViewTable extends PureComponent {
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

export default FormFieldMessageViewTable;

