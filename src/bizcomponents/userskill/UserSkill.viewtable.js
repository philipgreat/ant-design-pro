
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './UserSkill.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '技能名称', debugtype: 'string', dataIndex: 'skillName', width: '17' },
  { title: '用户',dataIndex: 'user', render: (text, record) => (record.user ? record.user.id : '暂无') },
];

class UserSkillViewTable extends PureComponent {
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

export default UserSkillViewTable;

