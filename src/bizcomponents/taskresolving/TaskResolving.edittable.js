
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge,Input } from 'antd';
import styles from './TaskResolving.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeHolder={"序号"}/>)  },
  { title: '谁', debugtype: 'string_current_user_name', dataIndex: 'who', width: '21',render: (text, record) => (<Input value={text} placeHolder={"谁"}/>)  },
  { title: '行动时间', dataIndex: 'actionTime', render: (text, record) => moment(record.actionTime).format('YYYY-MM-DD') },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8',render: (text, record) => (<Input value={text} placeHolder={"评论"}/>)  },
];

class TaskResolvingEditTable extends PureComponent {
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

export default TaskResolvingEditTable;

