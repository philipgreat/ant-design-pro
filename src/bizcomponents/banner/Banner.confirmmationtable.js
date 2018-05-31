
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Banner.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '图像', dataIndex: 'image', render: (text, record) => <ImagePreview imageLocation={record.image} /> },
  { title: '链接网址', debugtype: 'string_url', dataIndex: 'linkUrl', width: '46' },
  { title: 'Alt文本', debugtype: 'string', dataIndex: 'altText', width: '13' },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
]

class BannerConfirmationTable extends PureComponent {
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
          scroll={{ x: 1050 }}
        />
      </div>
    )
  }
}

export default BannerConfirmationTable

