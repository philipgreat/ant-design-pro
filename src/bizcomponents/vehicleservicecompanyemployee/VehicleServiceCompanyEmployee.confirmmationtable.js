
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './VehicleServiceCompanyEmployee.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '员工姓名', debugtype: 'string', dataIndex: 'employeeName', width: '7' },
  { title: '证件照片', dataIndex: 'profileImage', render: (text, record) => <ImagePreview imageLocation={record.profileImage} /> },
  { title: '商户名称', debugtype: 'string', dataIndex: 'companyName', width: '27' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber', width: '15' },
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender', width: '5' },
  { title: '工作状态', debugtype: 'string', dataIndex: 'availableState', width: '8' },
  { title: '无犯罪记录证明', dataIndex: 'innocentEvidenceImage', render: (text, record) => <ImagePreview imageLocation={record.innocentEvidenceImage} /> },
  { title: '身份证号码', debugtype: 'string', dataIndex: 'identityCardNumber', width: '22' },
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.id : '暂无') },
  { title: '是否可以移车', dataIndex: 'availableMoveCar', render: (text, record) => (record.availableMoveCar ? '是' : '否') },
  { title: '是否可以检车', dataIndex: 'availableInspectionCar', render: (text, record) => (record.availableInspectionCar ? '是' : '否') },
  { title: '是否可以修车', dataIndex: 'availableRepairCar', render: (text, record) => (record.availableRepairCar ? '是' : '否') },
  { title: '资格认定', dataIndex: 'qualification', render: (text, record) => (record.qualification ? record.qualification.id : '暂无') },
  { title: '服务状态', dataIndex: 'serving', render: (text, record) => (record.serving ? record.serving.id : '暂无') },
  { title: '服务终止', dataIndex: 'termination', render: (text, record) => (record.termination ? record.termination.id : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '14' },
]

class VehicleServiceCompanyEmployeeConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props


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
          size="small"
          scroll={{ x: 2145 }}
        />
      </div>
    )
  }
}

export default VehicleServiceCompanyEmployeeConfirmationTable

