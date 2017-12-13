
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './ExperiencePoint.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'名称',debugtype:'string',dataIndex: 'name',width:'8'},
{title:'获得时间',dataIndex: 'obtainTime',render: (text,record)=>moment(record.obtainTime).format('YYYY-MM-DD')},
{title:'点',debugtype:'int',dataIndex: 'points',width:'7'},
{title:'用户',debugtype:'community_user',dataIndex: 'user',width:'13'},

      
    ];

class ExperiencePointConfirmationTable extends PureComponent {
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

export default ExperiencePointConfirmationTable;

