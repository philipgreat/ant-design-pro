
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge } from 'antd';
import styles from './VehicleInspectionOrder.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus', width: '7' },
  { title: '客户',dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.id : '暂无') },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName', width: '7' },
  { title: '联系手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobileNumber', width: '15' },
  { title: '城市',dataIndex: 'contactAddressCity', render: (text, record) => (record.contactAddressCity ? record.contactAddressCity.id : '暂无') },
  { title: '地址', debugtype: 'string', dataIndex: 'contactAddressDetail', width: '19' },
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber', width: '11' },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '7' },
  { title: '使用性质', debugtype: 'string', dataIndex: 'vehicleUseCharacter', width: '7' },
  { title: '核准座位数', debugtype: 'int', dataIndex: 'vehicleSeatsQuantity', width: '5' },
  { title: '注册日期', dataIndex: 'vehicleRegistrationDate', render: (text, record) => moment(record.vehicleRegistrationDate).format('YYYY-MM-DD') },
  { title: '检测有效期', dataIndex: 'inspectionValidationDate', render: (text, record) => moment(record.inspectionValidationDate).format('YYYY-MM-DD') },
  { title: '保险有效期', dataIndex: 'insuranceValidationDate', render: (text, record) => moment(record.insuranceValidationDate).format('YYYY-MM-DD') },
  { title: '发动机号', debugtype: 'string', dataIndex: 'engineNumber', width: '11' },
  { title: '车架号', debugtype: 'string', dataIndex: 'vehicleIdentificationNumber', width: '21' },
  { title: '发证日期', dataIndex: 'vehiclePermitIssueDate', render: (text, record) => moment(record.vehiclePermitIssueDate).format('YYYY-MM-DD') },
  { title: '所有人', debugtype: 'string', dataIndex: 'vehiclePermitHolderName', width: '7' },
  { title: '车辆行驶证号码', debugtype: 'string', dataIndex: 'vehiclePermitNumber', width: '20' },
  { title: '行驶证有效期', dataIndex: 'vehiclePermitExpirationDate', render: (text, record) => moment(record.vehiclePermitExpirationDate).format('YYYY-MM-DD') },
  { title: '图1', dataIndex: 'vehiclePermitImage1', render: (text, record) => <ImagePreview imageLocation={record.图1}/> },
  { title: '图2', dataIndex: 'vehiclePermitImage2', render: (text, record) => <ImagePreview imageLocation={record.图2}/> },
  { title: '图3', dataIndex: 'vehiclePermitImage3', render: (text, record) => <ImagePreview imageLocation={record.图3}/> },
  { title: '图4', dataIndex: 'vehiclePermitImage4', render: (text, record) => <ImagePreview imageLocation={record.图4}/> },
  { title: '图5', dataIndex: 'vehiclePermitImage5', render: (text, record) => <ImagePreview imageLocation={record.图5}/> },
  { title: '平台',dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
];

class VehicleInspectionOrderViewTable extends PureComponent {
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
          scroll={{ x: 3150 }}
        />
        
      </div>
    );
  }
}

export default VehicleInspectionOrderViewTable;

