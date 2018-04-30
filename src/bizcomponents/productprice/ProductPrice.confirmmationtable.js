
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ProductPrice.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '产品名称', dataIndex: 'product', render: (text, record) => (record.product ? record.product.id : '暂无') },
  { title: '城市', dataIndex: 'city', render: (text, record) => (record.city ? record.city.id : '暂无') },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType', width: '6' },
  { title: '新能源车', dataIndex: 'greenVehicle', render: (text, record) => (record.greenVehicle ? '是' : '否') },
  { title: '年检费用', debugtype: 'money', dataIndex: 'inspectionPrice', width: '11' },
  { title: '二级维护价格', debugtype: 'money', dataIndex: 'secondLevelMaintenancePrice', width: '11' },
  { title: '等级评定价格', debugtype: 'money', dataIndex: 'gradeEstimationPrice', width: '11' },
  { title: '代办服务费用', debugtype: 'money', dataIndex: 'agentServicePrice', width: '11' },
  { title: '折扣价格代理服务', debugtype: 'money', dataIndex: 'discountAgentServicePrice', width: '11' },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '36' },
]

class ProductPriceConfirmationTable extends PureComponent {
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
          scroll={{ x: 1395 }}
        />
      </div>
    )
  }
}

export default ProductPriceConfirmationTable

