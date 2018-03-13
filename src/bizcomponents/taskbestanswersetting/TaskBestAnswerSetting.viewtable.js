import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './TaskBestAnswerSetting.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '谁',
    debugtype: 'string_current_user_name',
    dataIndex: 'who',
    width: '21',
  },
  {
    title: '设置时间',
    dataIndex: 'setTime',
    render: (text, record) =>
      moment(record.setTime).format('YYYY-MM-DD HH:mm:ss'),
  },
  { title: '评论', debugtype: 'string', dataIndex: 'comment', width: '8' },
]

class TaskBestAnswerSettingViewTable extends PureComponent {
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

export default TaskBestAnswerSettingViewTable
