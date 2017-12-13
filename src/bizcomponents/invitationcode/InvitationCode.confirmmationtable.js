
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './InvitationCode.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'名称',debugtype:'string',dataIndex: 'name',width:'7'},
{title:'代码',debugtype:'int',dataIndex: 'code',width:'10'},
{title:'创建时间',dataIndex: 'createTime',render: (text,record)=>moment(record.createTime).format('YYYY-MM-DD')},
{title:'社区',debugtype:'community',dataIndex: 'community',width:'13'},
{title:'用',debugtype:'bool',dataIndex: 'used',width:'8'},

      
    ];

class InvitationCodeConfirmationTable extends PureComponent {
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
            type="info"
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

export default InvitationCodeConfirmationTable;

