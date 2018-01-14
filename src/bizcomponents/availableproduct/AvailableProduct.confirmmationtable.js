
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './AvailableProduct.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName', width: '9' },
  { title: '服务代码', debugtype: 'string', dataIndex: 'serviceKey', width: '11' },
  { title: '服务描述', debugtype: 'string', dataIndex: 'serviceDescription', width: '12' },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
]

class AvailableProductConfirmationTable extends PureComponent {
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

export default AvailableProductConfirmationTable

