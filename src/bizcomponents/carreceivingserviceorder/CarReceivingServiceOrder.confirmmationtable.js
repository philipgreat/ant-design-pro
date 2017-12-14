
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarReceivingServiceOrder.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'10'},
{title:'审车订单',debugtype:'car_inspection_order',dataIndex: 'carInspectionOrder',width:'13'},
{title:'汽车接收',debugtype:'car_receive_receiving',dataIndex: 'carReceiveReceiving',width:'13'},
{title:'汽车接收工作',debugtype:'car_receive_working',dataIndex: 'carReceiveWorking',width:'13'},
{title:'收到返回的车',debugtype:'car_receive_returning',dataIndex: 'carReceiveReturning',width:'13'},
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

