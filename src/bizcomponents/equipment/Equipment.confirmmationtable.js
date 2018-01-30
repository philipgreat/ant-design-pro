
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Equipment.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '52' },
  { title: '价格', debugtype: 'money', dataIndex: 'price', width: '13' },
  { title: '模型', debugtype: 'string', dataIndex: 'model', width: '9' },
  { title: '英雄的形象', dataIndex: 'heroImage', render: (text, record) => <ImagePreview imageLocation={record.heroImage} /> },
  { title: '供应商', dataIndex: 'supplier', render: (text, record) => (record.supplier ? record.supplier.id : '暂无') },
  { title: '分数', debugtype: 'int', dataIndex: 'score', width: '5' },
]

class EquipmentConfirmationTable extends PureComponent {
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

export default EquipmentConfirmationTable

