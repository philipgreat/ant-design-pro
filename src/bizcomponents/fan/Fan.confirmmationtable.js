
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './Fan.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'用户',dataIndex: 'user',render: (text,record)=>(record.user?record.user.id:"暂无")},
{title:'粉丝的ID',debugtype:'string',dataIndex: 'fanId',width:'12'},
{title:'添加时间',dataIndex: 'addingTime',render: (text,record)=>moment(record.addingTime).format('YYYY-MM-DD')},

      
    ];

class FanConfirmationTable extends PureComponent {
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

export default FanConfirmationTable;

