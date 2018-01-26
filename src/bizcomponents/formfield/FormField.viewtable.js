import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './FormField.table.less'
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
  {
    title: '参数名称',
    debugtype: 'string',
    dataIndex: 'parameterName',
    width: '8',
  },
  { title: '类型', debugtype: 'string', dataIndex: 'type', width: '12' },
  {
    title: '形式',
    dataIndex: 'form',
    render: (text, record) => (record.form ? record.form.id : '暂无'),
  },
  {
    title: '占位符',
    debugtype: 'string',
    dataIndex: 'placeholder',
    width: '16',
  },
  {
    title: '默认值',
    debugtype: 'string',
    dataIndex: 'defaultValue',
    width: '7',
  },
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '16' },
  { title: '字段组', debugtype: 'string', dataIndex: 'fieldGroup', width: '8' },
  { title: '最小值', debugtype: 'int', dataIndex: 'minValue', width: '5' },
  { title: '最大的价值', debugtype: 'int', dataIndex: 'maxValue', width: '6' },
  {
    title: '要求',
    dataIndex: 'required',
    render: (text, record) => (record.required ? '是' : '否'),
  },
]

class FormFieldViewTable extends PureComponent {
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
          scroll={{ x: 1110 }}
        />
      </div>
    )
  }
}

export default FormFieldViewTable
