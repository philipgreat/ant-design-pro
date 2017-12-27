
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './SecUser.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '登录', debugtype: 'string', dataIndex: 'login', width: '9' },
  { title: '手机', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '电子邮件', debugtype: 'string_email', dataIndex: 'email', width: '23' },
  { title: 'PWD', debugtype: 'string_password', dataIndex: 'pwd', width: '11' },
  { title: '验证码', debugtype: 'int', dataIndex: 'verificationCode', width: '11' },
  { title: '验证码过期', dataIndex: 'verificationCodeExpire', render: (text, record) => moment(record.verificationCodeExpire).format('YYYY-MM-DD') },
  { title: '最后登录时间', dataIndex: 'lastLoginTime', render: (text, record) => moment(record.lastLoginTime).format('YYYY-MM-DD') },
  { title: '域',dataIndex: 'domain', render: (text, record) => (record.domain ? record.domain.id : '暂无') },
  { title: '屏蔽',dataIndex: 'blocking', render: (text, record) => (record.blocking ? record.blocking.id : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '11' },
];

class SecUserEditTable extends PureComponent {
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
          scroll={{ x: 1755 }}
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

export default SecUserEditTable;

