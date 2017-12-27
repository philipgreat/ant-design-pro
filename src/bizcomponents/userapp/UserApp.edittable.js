
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge,Input,Divider } from 'antd';
import styles from './UserApp.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8',render: (text, record) => (<Input value={text} placeholder={"标题"}/>)  },
  { title: 'SEC的用户',dataIndex: 'secUser', render: (text, record) => (record.secUser ? record.secUser.id : '暂无') },
  { title: '应用程序图标', debugtype: 'string', dataIndex: 'appIcon', width: '13',render: (text, record) => (<Input value={text} placeholder={"应用程序图标"}/>)  },
  { title: '完全访问',dataIndex: 'fullAccess', render: (text, record) => (record.fullAccess ? '是' : '否') },
  { title: '许可', debugtype: 'string', dataIndex: 'permission', width: '8',render: (text, record) => (<Input value={text} placeholder={"许可"}/>)  },
  { title: '对象类型', debugtype: 'string', dataIndex: 'objectType', width: '17',render: (text, record) => (<Input value={text} placeholder={"对象类型"}/>)  },
  { title: '对象ID', debugtype: 'string', dataIndex: 'objectId', width: '12',render: (text, record) => (<Input value={text} placeholder={"对象ID"}/>)  },
  { title: '位置', debugtype: 'string', dataIndex: 'location', width: '16',render: (text, record) => (<Input value={text} placeholder={"位置"}/>)  },
];

class UserAppEditTable extends PureComponent {
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
          scroll={{ x: 1035 }}
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

export default UserAppEditTable;

