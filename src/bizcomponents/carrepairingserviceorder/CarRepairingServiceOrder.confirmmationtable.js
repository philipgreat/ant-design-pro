
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarRepairingServiceOrder.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'标题',debugtype:'string',dataIndex: 'title',width:'10'},
{title:'审车订单',dataIndex: 'carInspectionOrder',render: (text,record)=>(record.carInspectionOrder?record.carInspectionOrder.id:"暂无")},
{title:'汽车维修接待',dataIndex: 'carRepairReceiving',render: (text,record)=>(record.carRepairReceiving?record.carRepairReceiving.id:"暂无")},
{title:'汽车修理工作',dataIndex: 'carRepairWorking',render: (text,record)=>(record.carRepairWorking?record.carRepairWorking.id:"暂无")},
{title:'汽车维修返回',dataIndex: 'carRepairReturning',render: (text,record)=>(record.carRepairReturning?record.carRepairReturning.id:"暂无")},
{title:'当前状态',debugtype:'string',dataIndex: 'currentStatus',width:'23'},

      
    ];

class CarRepairingServiceOrderConfirmationTable extends PureComponent {
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

export default CarRepairingServiceOrderConfirmationTable;

