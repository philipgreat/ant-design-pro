
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge,Input } from 'antd';
import styles from './UserMessage.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeHolder={"序号"}/>)  },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '10',render: (text, record) => (<Input value={text} placeHolder={"标题"}/>)  },
  { title: '信息的关键', debugtype: 'string', dataIndex: 'messageKey', width: '18',render: (text, record) => (<Input value={text} placeHolder={"信息的关键"}/>)  },
  { title: '接收者',dataIndex: 'receiver', render: (text, record) => (record.receiver ? record.receiver.id : '暂无') },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '14',render: (text, record) => (<Input value={text} placeHolder={"内容"}/>)  },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '31',render: (text, record) => (<Input value={text} placeHolder={"链接网址"}/>)  },
  { title: '消息的时间', dataIndex: 'messageTime', render: (text, record) => moment(record.messageTime).format('YYYY-MM-DD') },
];

class UserMessageEditTable extends PureComponent {
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
          scroll={{ x: 1125 }}
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

export default UserMessageEditTable;

