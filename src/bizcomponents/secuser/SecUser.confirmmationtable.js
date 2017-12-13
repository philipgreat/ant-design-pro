
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './SecUser.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'登录',debugtype:'string',dataIndex: 'login',width:'9'},
{title:'手机',debugtype:'string_china_mobile_phone',dataIndex: 'mobile',width:'15'},
{title:'电子邮件',debugtype:'string_email',dataIndex: 'email',width:'23'},
{title:'PWD',debugtype:'string_password',dataIndex: 'pwd',width:'11'},
{title:'验证码',debugtype:'int',dataIndex: 'verificationCode',width:'11'},
{title:'验证码过期',dataIndex: 'verificationCodeExpire',render: (text,record)=>moment(record.verificationCodeExpire).format('YYYY-MM-DD')},
{title:'最后登录时间',dataIndex: 'lastLoginTime',render: (text,record)=>moment(record.lastLoginTime).format('YYYY-MM-DD')},
{title:'域',debugtype:'user_domain',dataIndex: 'domain',width:'13'},
{title:'屏蔽',debugtype:'sec_user_blocking',dataIndex: 'blocking',width:'13'},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'11'},

      
    ];

class SecUserConfirmationTable extends PureComponent {
  render() {
    
    const { data,count,current, owner } = this.props;


    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项 
               
              </p>
            )}
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          
          size={"small"}
          scroll={{x:1755}}
        />
      </div>
    );
  }
}

export default SecUserConfirmationTable;

