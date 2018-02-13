
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServiceCompanyAuthenticationInfo.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '营业执照Img', dataIndex: 'businessLicenseImg', render: (text, record) => <ImagePreview imageLocation={record.businessLicenseImg} /> },
  { title: '营业执照代码', debugtype: 'string', dataIndex: 'businessLicenseCode', width: '20' },
  { title: '服务公司', dataIndex: 'serviceCompany', render: (text, record) => (record.serviceCompany ? record.serviceCompany.id : '暂无') },
]

class ServiceCompanyAuthenticationInfoConfirmationTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default ServiceCompanyAuthenticationInfoConfirmationTable

