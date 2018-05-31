
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Store.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '门店名字', debugtype: 'string', dataIndex: 'storeName', width: '15' },
  { title: '地址', debugtype: 'string', dataIndex: 'address', width: '28' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '13' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '14' },
  { title: '开放时间', debugtype: 'string', dataIndex: 'openningHours', width: '15' },
  { title: '状态', debugtype: 'string', dataIndex: 'status', width: '7' },
  { title: '城市', dataIndex: 'city', render: (text, record) => (record.city ? record.city.id : '暂无') },
]

class StoreConfirmationTable extends PureComponent {
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
          scroll={{ x: 1140 }}
        />
      </div>
    )
  }
}

export default StoreConfirmationTable

