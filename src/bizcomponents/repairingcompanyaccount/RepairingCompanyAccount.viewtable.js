
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './RepairingCompanyAccount.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '修理员', debugtype: 'string', dataIndex: 'repairingWorkerName', width: '36' },
  { title: '修理厂', debugtype: 'string', dataIndex: 'repairingCompanyName', width: '27' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '车辆维修服务单号', debugtype: 'string', dataIndex: 'vehicleRepairingOrderNumber', width: '14' },
  { title: '订单合计', debugtype: 'money', dataIndex: 'originalAmount', width: '11' },
  { title: '补贴金额', debugtype: 'money', dataIndex: 'allowanceAmount', width: '10' },
  { title: '应付金额', debugtype: 'money', dataIndex: 'actualAmount', width: '11' },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId', width: '15' },
  { title: '付款日期时间', dataIndex: 'paymentDatetime', render: (text, record) => moment(record.paymentDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatOrderId', width: '36' },
  { title: '微信预付订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId', width: '25' },
  { title: '商户',dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.id : '暂无') },
  { title: '服务人员',dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '对账单',dataIndex: 'account', render: (text, record) => (record.account ? record.account.id : '暂无') },
];

class RepairingCompanyAccountViewTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props;
	
	

    return (
      <div className={styles.standardTable}>
        
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 2700 }}
        />
        
      </div>
    );
  }
}

export default RepairingCompanyAccountViewTable;

