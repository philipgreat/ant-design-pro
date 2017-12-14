
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CustomerInfo.table.less';



const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'平台',debugtype:'car_inspection_platform',dataIndex: 'platform',width:'13'},
{title:'客户名称',debugtype:'string',dataIndex: 'customerName',width:'7'},
{title:'客户的电话号码',debugtype:'string',dataIndex: 'customerPhoneNumber',width:'15'},
{title:'客户身份证号',debugtype:'string',dataIndex: 'customerIdentifyCardNumber',width:'22'},
{title:'客户身份证正面照片',debugtype:'string',dataIndex: 'customerIdentifyCardFrontImage',width:'13'},
{title:'客户身份证背面照片',debugtype:'string',dataIndex: 'customerIdentifyCardBackImage',width:'13'},

      
    ];

class CustomerInfoConfirmationTable extends PureComponent {
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

export default CustomerInfoConfirmationTable;

