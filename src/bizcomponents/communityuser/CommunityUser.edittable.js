
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge,Input,Divider } from 'antd';
import styles from './CommunityUser.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15',render: (text, record) => (<Input value={text} placeholder={"手机"}/>)  },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '6',render: (text, record) => (<Input value={text} placeholder={"昵称"}/>)  },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender', width: '5',render: (text, record) => (<Input value={text} placeholder={"性别"}/>)  },
  { title: '用户类型', debugtype: 'string', dataIndex: 'userType', width: '8',render: (text, record) => (<Input value={text} placeholder={"用户类型"}/>)  },
  { title: '头像', dataIndex: 'avatar', render: (text, record) => <ImagePreview imageLocation={record.头像}/> },
  { title: '生日', dataIndex: 'birthday', render: (text, record) => moment(record.birthday).format('YYYY-MM-DD') },
  { title: '成长值', debugtype: 'int', dataIndex: 'experiencePoint', width: '9',render: (text, record) => (<Input value={text} placeholder={"成长值"}/>)  },
  { title: '积分', debugtype: 'int', dataIndex: 'bonusPoint', width: '11',render: (text, record) => (<Input value={text} placeholder={"积分"}/>)  },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '7',render: (text, record) => (<Input value={text} placeholder={"城市"}/>)  },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '12',render: (text, record) => (<Input value={text} placeholder={"状态"}/>)  },
  { title: '隐藏的信息',dataIndex: 'hideInfo', render: (text, record) => (record.hideInfo ? '是' : '否') },
  { title: '管理员',dataIndex: 'administrator', render: (text, record) => (record.administrator ? '是' : '否') },
  { title: '社区',dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
];

class CommunityUserEditTable extends PureComponent {
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
          scroll={{ x: 1155 }}
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

export default CommunityUserEditTable;

