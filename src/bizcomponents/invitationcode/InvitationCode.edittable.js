
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge,Input } from 'antd';
import styles from './InvitationCode.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeHolder={"序号"}/>)  },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7',render: (text, record) => (<Input value={text} placeHolder={"名称"}/>)  },
  { title: '代码', debugtype: 'int', dataIndex: 'code', width: '10',render: (text, record) => (<Input value={text} placeHolder={"代码"}/>)  },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '社区',dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
  { title: '用',dataIndex: 'used', render: (text, record) => (record.used ? '是' : '否') },
];

class InvitationCodeEditTable extends PureComponent {
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

export default InvitationCodeEditTable;

