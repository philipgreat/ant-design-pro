
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './DecorationCountryCenter.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '15' },
  { title: '联系电话', debugtype: 'string', dataIndex: 'contactNumber', width: '16' },
  { title: '成立', dataIndex: 'founded', render: (text, record) => moment(record.founded).format('YYYY-MM-DD') },
  { title: '网站', debugtype: 'string_url', dataIndex: 'webSite', width: '35' },
  { title: '地址', debugtype: 'string', dataIndex: 'address', width: '17' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '17' },
]

class DecorationCountryCenterConfirmationTable extends PureComponent {
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
          scroll={{ x: 1275 }}
        />
      </div>
    )
  }
}

export default DecorationCountryCenterConfirmationTable

