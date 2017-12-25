
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CarInspectionOrder.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'车牌号',debugtype:'string',dataIndex: 'carLicensePlateNumber',width:'11'},
{title:'汽车发动机号码',debugtype:'int',dataIndex: 'carEngineNumber',width:'8'},
{title:'车架号',debugtype:'string',dataIndex: 'vehicleIdentificationNumber',width:'18'},
{title:'平台',dataIndex: 'platform',render: (text,record)=>(record.platform?record.platform.id:"暂无")},
{title:'车主',dataIndex: 'owner',render: (text,record)=>(record.owner?record.owner.id:"暂无")},
{title:'接车商户',dataIndex: 'receivingServiceCompany',render: (text,record)=>(record.receivingServiceCompany?record.receivingServiceCompany.id:"暂无")},
{title:'汽车代检服务公司',dataIndex: 'inspectionServiceCompany',render: (text,record)=>(record.inspectionServiceCompany?record.inspectionServiceCompany.id:"暂无")},
{title:'汽车维修服务公司',dataIndex: 'repairingServiceCompany',render: (text,record)=>(record.repairingServiceCompany?record.repairingServiceCompany.id:"暂无")},

      
    ];

class CarInspectionOrderConfirmationTable extends PureComponent {
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
          scroll={{x:1095}}
        />
      </div>
    );
  }
}

export default CarInspectionOrderConfirmationTable;

