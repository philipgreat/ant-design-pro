
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './AvailableVehicleUseCharacter.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '7' },
  { title: '别名', debugtype: 'string', dataIndex: 'aliasName', width: '38' },
  { title: '可6年免检', dataIndex: 'canDoExempt', render: (text, record) => (record.canDoExempt ? '是' : '否') },
  { title: '商用车辆', dataIndex: 'commercialVehicle', render: (text, record) => (record.commercialVehicle ? '是' : '否') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.id : '暂无') },
]

class AvailableVehicleUseCharacterConfirmationTable extends PureComponent {
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

export default AvailableVehicleUseCharacterConfirmationTable

