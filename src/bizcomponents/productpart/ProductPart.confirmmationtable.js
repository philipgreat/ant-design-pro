
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ProductPart.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '16' },
  { title: '代码', debugtype: 'int', dataIndex: 'code', width: '7' },
  { title: '蓝图', dataIndex: 'bluePrint', render: (text, record) => <ImagePreview imageLocation={record.bluePrint} /> },
  { title: '产品组件', dataIndex: 'productComponent', render: (text, record) => (record.productComponent ? record.productComponent.id : '暂无') },
]

class ProductPartConfirmationTable extends PureComponent {
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

export default ProductPartConfirmationTable

