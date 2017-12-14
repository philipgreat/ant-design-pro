
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarInspectionServiceOrder.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'10'},
{title:'审车订单',debugtype:'car_inspection_order',dataIndex: 'carInspectionOrder',width:'13'},
{title:'还车接收',debugtype:'car_inspect_receiving',dataIndex: 'carInspectReceiving',width:'13'},
{title:'正在审车',debugtype:'car_inspect_working',dataIndex: 'carInspectWorking',width:'13'},
{title:'汽车检查返回',debugtype:'car_inspect_returning',dataIndex: 'carInspectReturning',width:'13'},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'24'},

      
    ];

class CarInspectionServiceOrderConfirmationTable extends PureComponent {
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

export default CarInspectionServiceOrderConfirmationTable;

