import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './FormAction.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标签', debugtype: 'string', dataIndex: 'label', width: '6' },
  {
    title: '语言环境的关键',
    debugtype: 'string',
    dataIndex: 'localeKey',
    width: '8',
  },
  { title: 'url', debugtype: 'string', dataIndex: 'url', width: '46' },
  {
    title: '形式',
    dataIndex: 'form',
    render: (text, record) => (record.form ? record.form.id : '暂无'),
  },
]

class FormActionViewTable extends PureComponent {
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

export default FormActionViewTable
