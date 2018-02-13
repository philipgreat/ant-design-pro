
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './InspectionStationAccount.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '服务订单号', debugtype: 'string', dataIndex: 'serviceOrderNumber', width: '14' },
  { title: '检查类型', debugtype: 'string', dataIndex: 'inspectionType', width: '8' },
  { title: '检查车辆信息', debugtype: 'string', dataIndex: 'inspectionVehicleInfo', width: '11' },
  { title: '最终检验结果', debugtype: 'string', dataIndex: 'inspectionFinalResult', width: '7' },
  { title: '检验日期时间', dataIndex: 'inspectionDatetime', render: (text, record) => moment(record.inspectionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '检查站的名字', debugtype: 'string', dataIndex: 'inspectionStationName', width: '11' },
  { title: '主要的订单号', debugtype: 'string', dataIndex: 'mainOrderNumber', width: '28' },
  { title: '商户',dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.id : '暂无') },
  { title: '服务人员',dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.id : '暂无') },
  { title: '检测站',dataIndex: 'inspectionStation', render: (text, record) => (record.inspectionStation ? record.inspectionStation.id : '暂无') },
  { title: '对账单',dataIndex: 'account', render: (text, record) => (record.account ? record.account.id : '暂无') },
];

class InspectionStationAccountViewTable extends PureComponent {
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
          scroll={{ x: 1650 }}
        />
        
      </div>
    );
  }
}

export default InspectionStationAccountViewTable;

