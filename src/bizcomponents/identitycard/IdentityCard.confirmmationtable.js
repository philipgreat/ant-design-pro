import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './IdentityCard.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '姓名', debugtype: 'string', dataIndex: 'holderName', width: '7' },
  {
    title: '身份证号码',
    debugtype: 'string',
    dataIndex: 'cardNumber',
    width: '22',
  },
  {
    title: '身份证正面照片',
    dataIndex: 'frontImage',
    render: (text, record) => (
      <ImagePreview imageLocation={record.身份证正面照片} />
    ),
  },
  {
    title: '身份证背面照片',
    dataIndex: 'backImage',
    render: (text, record) => (
      <ImagePreview imageLocation={record.身份证背面照片} />
    ),
  },
  {
    title: '失效日期',
    dataIndex: 'expirationDate',
    render: (text, record) =>
      moment(record.expirationDate).format('YYYY-MM-DD'),
  },
]

class IdentityCardConfirmationTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props
    const { data } = this.props

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <p>
                一共 <a style={{ fontWeight: 600 }}>{data.length}</a> 项
              </p>
            }
            type="warning"
            showIcon
          />
        </div>
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          scroll={{ x: 1245 }}
        />
      </div>
    )
  }
}

export default IdentityCardConfirmationTable
