
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge,Input,Divider } from 'antd';
import styles from './TaskBestAnswerSetting.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '谁', debugtype: 'string_current_user_name', dataIndex: 'who', width: '21',render: (text, record) => (<Input value={text} placeholder={"谁"}/>)  },
  { title: '设置时间', dataIndex: 'setTime', render: (text, record) => moment(record.setTime).format('YYYY-MM-DD') },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8',render: (text, record) => (<Input value={text} placeholder={"评论"}/>)  },
];

class TaskBestAnswerSettingEditTable extends PureComponent {
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
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
      </div>
    );
  }
}

export default TaskBestAnswerSettingEditTable;

