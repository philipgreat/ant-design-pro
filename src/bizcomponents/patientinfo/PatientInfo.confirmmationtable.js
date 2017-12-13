
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './PatientInfo.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'名称',debugtype:'string',dataIndex: 'name',width:'6'},
{title:'昵称',debugtype:'string',dataIndex: 'nickName',width:'6'},
{title:'性别',debugtype:'string_gender',dataIndex: 'gender',width:'5'},
{title:'生日',dataIndex: 'birthday',render: (text,record)=>moment(record.birthday).format('YYYY-MM-DD')},
{title:'佩戴设备类型',debugtype:'string',dataIndex: 'wearDeviceType',width:'8'},
{title:'磨损的开始时间',dataIndex: 'wearStartTime',render: (text,record)=>moment(record.wearStartTime).format('YYYY-MM-DD')},
{title:'康复计划',debugtype:'string',dataIndex: 'recoverPlan',width:'15'},
{title:'复苏开始时间',dataIndex: 'recoverStartTime',render: (text,record)=>moment(record.recoverStartTime).format('YYYY-MM-DD')},
{title:'用户',debugtype:'community_user',dataIndex: 'user',width:'13'},

      
    ];

class PatientInfoConfirmationTable extends PureComponent {
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
          scroll={{x:800}}
        />
      </div>
    );
  }
}

export default PatientInfoConfirmationTable;

