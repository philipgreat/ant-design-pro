
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ServicePrice.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '合同', dataIndex: 'contract', render: (text, record) => (record.contract ? record.contract.id : '暂无') },
  { title: '服务范围', dataIndex: 'availableService', render: (text, record) => (record.availableService ? record.availableService.id : '暂无') },
  { title: '产品名称', dataIndex: 'product', render: (text, record) => (record.product ? record.product.id : '暂无') },
  { title: '服务代码', debugtype: 'string', dataIndex: 'serviceKey', width: '35' },
  { title: '服务描述', debugtype: 'string', dataIndex: 'serviceDescription', width: '35' },
  { title: '服务价格类型', debugtype: 'string', dataIndex: 'servicePriceType', width: '11' },
  { title: '服务价格', debugtype: 'double', dataIndex: 'basePriceValue', width: '9' },
  { title: '后续服务价格', debugtype: 'double', dataIndex: 'otherPriceValue', width: '9' },
  { title: '服务使', dataIndex: 'serviceEnabled', render: (text, record) => (record.serviceEnabled ? '是' : '否') },
]

class ServicePriceConfirmationTable extends PureComponent {
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
          scroll={{ x: 1680 }}
        />
      </div>
    )
  }
}

export default ServicePriceConfirmationTable

