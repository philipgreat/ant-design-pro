
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Player.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '昵称', debugtype: 'string', dataIndex: 'nickName', width: '8' },
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile', width: '15' },
  { title: '密码', debugtype: 'int', dataIndex: 'password', width: '10' },
  { title: '经验值', debugtype: 'int', dataIndex: 'experienceValue', width: '8' },
  { title: '积分', debugtype: 'int', dataIndex: 'gameScore', width: '7' },
]

class PlayerConfirmationTable extends PureComponent {
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

export default PlayerConfirmationTable

