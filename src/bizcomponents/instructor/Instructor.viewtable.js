
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './Instructor.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '头衔', debugtype: 'string', dataIndex: 'title', width: '8' },
  { title: '姓', debugtype: 'string', dataIndex: 'familyName', width: '5' },
  { title: '名', debugtype: 'string', dataIndex: 'givenName', width: '6' },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'cellPhone', width: '15' },
  { title: '电子邮件', debugtype: 'string_email', dataIndex: 'email', width: '24' },
  { title: '公司',dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '介绍', debugtype: 'string', dataIndex: 'introduction', width: '19' },
];

class InstructorViewTable extends PureComponent {
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

export default InstructorViewTable;

