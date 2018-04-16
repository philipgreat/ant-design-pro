import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './VehicleServiceCompany.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '商户名称',
    debugtype: 'string',
    dataIndex: 'companyName',
    width: '12',
  },
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
  {
    title: '是否提供门店收车(件)服务',
    dataIndex: 'availableStoreService',
    render: (text, record) => (record.availableStoreService ? '是' : '否'),
  },
  {
    title: '是否提供上门取车(件)服务',
    dataIndex: 'availableHomeService',
    render: (text, record) => (record.availableHomeService ? '是' : '否'),
  },
  {
    title: '营业时间',
    debugtype: 'string',
    dataIndex: 'openingTime',
    width: '26',
  },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude', width: '12' },
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude', width: '11' },
  {
    title: '可以免除代理费用',
    dataIndex: 'canExemptProxyFee',
    render: (text, record) => (record.canExemptProxyFee ? '是' : '否'),
  },
  {
    title: '联系电话',
    debugtype: 'string',
    dataIndex: 'contactPhone',
    width: '16',
  },
  {
    title: '公司照片1',
    dataIndex: 'companyImage1',
    render: (text, record) => (
      <ImagePreview imageLocation={record.companyImage1} />
    ),
  },
  {
    title: '公司照片2',
    dataIndex: 'companyImage2',
    render: (text, record) => (
      <ImagePreview imageLocation={record.companyImage2} />
    ),
  },
  {
    title: '公司照片3',
    dataIndex: 'companyImage3',
    render: (text, record) => (
      <ImagePreview imageLocation={record.companyImage3} />
    ),
  },
  {
    title: '公司照片4',
    dataIndex: 'companyImage4',
    render: (text, record) => (
      <ImagePreview imageLocation={record.companyImage4} />
    ),
  },
  {
    title: '公司照片5',
    dataIndex: 'companyImage5',
    render: (text, record) => (
      <ImagePreview imageLocation={record.companyImage5} />
    ),
  },
  {
    title: '推广二维码',
    dataIndex: 'promoteQrcodeImage',
    render: (text, record) => (
      <ImagePreview imageLocation={record.promoteQrcodeImage} />
    ),
  },
  {
    title: '订单默认联系人',
    debugtype: 'string',
    dataIndex: 'orderContact',
    width: '7',
  },
  {
    title: '订单默认联系人电话',
    debugtype: 'string_china_mobile_phone',
    dataIndex: 'orderContactPhone',
    width: '15',
  },
  {
    title: '平台',
    dataIndex: 'platform',
    render: (text, record) => (record.platform ? record.platform.id : '暂无'),
  },
]

class VehicleServiceCompanyViewTable extends PureComponent {
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
          scroll={{ x: 2880 }}
        />
      </div>
    )
  }
}

export default VehicleServiceCompanyViewTable
