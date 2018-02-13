import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './AvailableService.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '服务名称',
    debugtype: 'string',
    dataIndex: 'serviceName',
    width: '8',
  },
  {
    title: '服务代码',
    debugtype: 'string',
    dataIndex: 'serviceKey',
    width: '30',
  },
  {
    title: '服务描述',
    debugtype: 'string',
    dataIndex: 'serviceDescription',
    width: '41',
  },
  {
    title: '产品类型',
    dataIndex: 'availableProduct',
    render: (text, record) =>
      record.availableProduct ? record.availableProduct.id : '暂无',
  },
]

class AvailableServiceViewTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 1230 }}
        />
      </div>
    )
  }
}

export default AvailableServiceViewTable
