
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarReceivingServiceOrder.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'10'},
{title:'审车订单',dataIndex: 'carInspectionOrder',render: (text,record)=>(record.carInspectionOrder?record.carInspectionOrder.id:"暂无")},
{title:'已收到车',dataIndex: 'carReceiveReceiving',render: (text,record)=>(record.carReceiveReceiving?record.carReceiveReceiving.id:"暂无")},
{title:'收车检查',dataIndex: 'carReceiveWorking',render: (text,record)=>(record.carReceiveWorking?record.carReceiveWorking.id:"暂无")},
{title:'收车返还',dataIndex: 'carReceiveReturning',render: (text,record)=>(record.carReceiveReturning?record.carReceiveReturning.id:"暂无")},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'24'},

      
    ];

class CarReceivingServiceOrderConfirmationTable extends PureComponent {
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

export default CarReceivingServiceOrderConfirmationTable;

