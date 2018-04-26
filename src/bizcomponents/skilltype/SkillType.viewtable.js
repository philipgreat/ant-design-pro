
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './SkillType.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '9' },
  { title: '公司',dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '10' },
];

class SkillTypeViewTable extends PureComponent {
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

export default SkillTypeViewTable;

