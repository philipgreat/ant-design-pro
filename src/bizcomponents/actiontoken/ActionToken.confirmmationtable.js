
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './ActionToken.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '支架类型', debugtype: 'string', dataIndex: 'holderType', width: '33' },
  { title: '持有人身份证', debugtype: 'string', dataIndex: 'holderId', width: '11' },
  { title: '标记代码', debugtype: 'string', dataIndex: 'tokenCode', width: '41' },
  { title: '令牌数量', debugtype: 'int', dataIndex: 'tokenQuantity', width: '10' },
  { title: '开始日期', dataIndex: 'startDate', render: (text, record) => moment(record.startDate).format('YYYY-MM-DD') },
  { title: '结束日期', dataIndex: 'endDate', render: (text, record) => moment(record.endDate).format('YYYY-MM-DD') },
  { title: '用户域', dataIndex: 'userDomain', render: (text, record) => (record.userDomain ? record.userDomain.id : '暂无') },
]

class ActionTokenConfirmationTable extends PureComponent {
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
          scroll={{ x: 1605 }}
        />
      </div>
    )
  }
}

export default ActionTokenConfirmationTable

