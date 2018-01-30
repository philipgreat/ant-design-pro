
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './EquipmentParameter.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '参数名称', debugtype: 'string', dataIndex: 'parameterName', width: '6' },
  { title: '价值', debugtype: 'int', dataIndex: 'value', width: '9' },
  { title: '单位', debugtype: 'string', dataIndex: 'unit', width: '8' },
  { title: '设备', dataIndex: 'equipment', render: (text, record) => (record.equipment ? record.equipment.id : '暂无') },
]

class EquipmentParameterConfirmationTable extends PureComponent {
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

export default EquipmentParameterConfirmationTable

