import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './InspectionStation.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '12' },
  {
    title: '服务状态',
    debugtype: 'string',
    dataIndex: 'operatingStatus',
    width: '6',
  },
  {
    title: '所在城市',
    dataIndex: 'addressCity',
    render: (text, record) =>
      record.addressCity ? record.addressCity.id : '暂无',
  },
  {
    title: '所在地址',
    debugtype: 'string',
    dataIndex: 'addressDetail',
    width: '17',
  },
  { title: '位置', debugtype: 'string', dataIndex: 'location', width: '13' },
  {
    title: '联系人姓名',
    debugtype: 'string',
    dataIndex: 'contactName',
    width: '7',
  },
  {
    title: '联系手机',
    debugtype: 'string_china_mobile_phone',
    dataIndex: 'contactMobile',
    width: '15',
  },
  {
    title: '计量资格认证',
    dataIndex: 'metrologyAccreditationImage',
    render: (text, record) => (
      <ImagePreview imageLocation={record.计量资格认证} />
    ),
  },
]

class InspectionStationViewTable extends PureComponent {
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
          scroll={{ x: 800 }}
        />
      </div>
    )
  }
}

export default InspectionStationViewTable
