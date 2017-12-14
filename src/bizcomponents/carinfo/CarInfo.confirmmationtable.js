
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarInfo.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'车牌号',debugtype:'string',dataIndex: 'carLicensePlateNumber',width:'11'},
{title:'汽车类型',debugtype:'string',dataIndex: 'carType',width:'7'},
{title:'汽车座椅的数量',debugtype:'int',dataIndex: 'carSeatsQuantity',width:'5'},
{title:'汽车登记日期',dataIndex: 'carRegistrationDate',render: (text,record)=>moment(record.carRegistrationDate).format('YYYY-MM-DD')},
{title:'汽车年检有效期至',dataIndex: 'carInspectionValidationDate',render: (text,record)=>moment(record.carInspectionValidationDate).format('YYYY-MM-DD')},
{title:'汽车发动机号码',debugtype:'int',dataIndex: 'carEngineNumber',width:'8'},
{title:'车架号',debugtype:'string',dataIndex: 'vehicleIdentificationNumber',width:'21'},
{title:'汽车保险有效期至',dataIndex: 'carInsuranceValidationDate',render: (text,record)=>moment(record.carInsuranceValidationDate).format('YYYY-MM-DD')},
{title:'平台',debugtype:'car_inspection_platform',dataIndex: 'platform',width:'13'},
{title:'车主',debugtype:'customer_info',dataIndex: 'owner',width:'13'},

      
    ];

class CarInfoConfirmationTable extends PureComponent {
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
          scroll={{x:1245}}
        />
      </div>
    );
  }
}

export default CarInfoConfirmationTable;

