
import React, { PureComponent } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './CustomerInfo.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
{title:'序号',debugtype:'string',dataIndex: 'id',width:'20'},
{title:'平台',dataIndex: 'platform',render: (text,record)=>(record.platform?record.platform.id:"暂无")},
{title:'客户名称',debugtype:'string',dataIndex: 'customerName',width:'7'},
{title:'客户的电话号码',debugtype:'string',dataIndex: 'customerPhoneNumber',width:'15'},
{title:'客户身份证号',debugtype:'string',dataIndex: 'customerIdentifyCardNumber',width:'22'},
{title:'客户身份证正面照片',dataIndex: 'customerIdentifyCardFrontImage',render: (text,record)=><ImagePreview imageLocation={record.客户身份证正面照片}/>},
{title:'客户身份证背面照片',dataIndex: 'customerIdentifyCardBackImage',render: (text,record)=><ImagePreview imageLocation={record.客户身份证背面照片}/>},

      
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

