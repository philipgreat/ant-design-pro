
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './ReportHandover.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '回归结果', debugtype: 'string', dataIndex: 'handoverResult', width: '6' },
  { title: '拒收原因', debugtype: 'string', dataIndex: 'rejectComments', width: '16' },
  { title: '拒收凭证1', dataIndex: 'rejectEvidence1', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence1}/> },
  { title: '拒收凭证2', dataIndex: 'rejectEvidence2', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence2}/> },
  { title: '拒收凭证3', dataIndex: 'rejectEvidence3', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence3}/> },
  { title: '拒收凭证4', dataIndex: 'rejectEvidence4', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence4}/> },
  { title: '拒收凭证5', dataIndex: 'rejectEvidence5', render: (text, record) => <ImagePreview imageLocation={record.rejectEvidence5}/> },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '服务类型车辆C2m',dataIndex: 'serviceTypeVehicleC2m', render: (text, record) => (record.serviceTypeVehicleC2m ? record.serviceTypeVehicleC2m.id : '暂无') },
  { title: '服务类型车辆M2m',dataIndex: 'serviceTypeVehicleM2m', render: (text, record) => (record.serviceTypeVehicleM2m ? record.serviceTypeVehicleM2m.id : '暂无') },
  { title: '服务类型车辆M2c',dataIndex: 'serviceTypeVehicleM2c', render: (text, record) => (record.serviceTypeVehicleM2c ? record.serviceTypeVehicleM2c.id : '暂无') },
  { title: '服务类型文件C2m',dataIndex: 'serviceTypeFileC2m', render: (text, record) => (record.serviceTypeFileC2m ? record.serviceTypeFileC2m.id : '暂无') },
  { title: '服务类型文件M2m',dataIndex: 'serviceTypeFileM2m', render: (text, record) => (record.serviceTypeFileM2m ? record.serviceTypeFileM2m.id : '暂无') },
  { title: '服务类型文件M2c',dataIndex: 'serviceTypeFileM2c', render: (text, record) => (record.serviceTypeFileM2c ? record.serviceTypeFileM2c.id : '暂无') },
];

class ReportHandoverViewTable extends PureComponent {
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
          scroll={{ x: 1815 }}
        />
        
      </div>
    );
  }
}

export default ReportHandoverViewTable;

