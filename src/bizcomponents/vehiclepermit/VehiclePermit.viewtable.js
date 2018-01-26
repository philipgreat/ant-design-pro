import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './VehiclePermit.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '姓名', debugtype: 'string', dataIndex: 'holderName', width: '7' },
  {
    title: '驾驶证号码',
    debugtype: 'string',
    dataIndex: 'licenseNumber',
    width: '20',
  },
  {
    title: '失效日期',
    dataIndex: 'expirationDate',
    render: (text, record) =>
      moment(record.expirationDate).format('YYYY-MM-DD'),
  },
  {
    title: '图1',
    dataIndex: 'image1',
    render: (text, record) => <ImagePreview imageLocation={record.图1} />,
  },
  {
    title: '图2',
    dataIndex: 'image2',
    render: (text, record) => <ImagePreview imageLocation={record.图2} />,
  },
  {
    title: '图3',
    dataIndex: 'image3',
    render: (text, record) => <ImagePreview imageLocation={record.图3} />,
  },
  {
    title: '图4',
    dataIndex: 'image4',
    render: (text, record) => <ImagePreview imageLocation={record.图4} />,
  },
  {
    title: '图5',
    dataIndex: 'image5',
    render: (text, record) => <ImagePreview imageLocation={record.图5} />,
  },
]

class VehiclePermitViewTable extends PureComponent {
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
          scroll={{ x: 1065 }}
        />
      </div>
    )
  }
}

export default VehiclePermitViewTable
