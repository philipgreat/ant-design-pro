
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Store.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '商店的名字', debugtype: 'string', dataIndex: 'storeName', width: '26' },
  { title: '存储地址', debugtype: 'string', dataIndex: 'storeAddress', width: '25' },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '11' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '10' },
  { title: '商店形象', dataIndex: 'storeImage', render: (text, record) => <ImagePreview imageLocation={record.storeImage} /> },
  { title: '存储类型', debugtype: 'string', dataIndex: 'storeType', width: '6' },
  { title: '打印机', dataIndex: 'printer', render: (text, record) => (record.printer ? record.printer.id : '暂无') },
  { title: '区', dataIndex: 'district', render: (text, record) => (record.district ? record.district.id : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
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
          scroll={{ x: 1215 }}
        />
      </div>
    )
  }
}

export default StoreConfirmationTable

