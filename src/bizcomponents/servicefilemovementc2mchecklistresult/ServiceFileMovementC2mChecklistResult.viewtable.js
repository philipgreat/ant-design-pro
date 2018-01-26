import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './ServiceFileMovementC2mChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  {
    title: '服务',
    dataIndex: 'service',
    render: (text, record) => (record.service ? record.service.id : '暂无'),
  },
  {
    title: '检查结果',
    debugtype: 'string',
    dataIndex: 'checkResult',
    width: '6',
  },
  {
    title: '检验结果的评论',
    debugtype: 'string',
    dataIndex: 'checkResultComments',
    width: '30',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    render: (text, record) => moment(record.createTime).format('YYYY-MM-DD'),
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

class ServiceFileMovementC2mChecklistResultViewTable extends PureComponent {
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
          scroll={{ x: 1245 }}
        />
      </div>
    )
  }
}

export default ServiceFileMovementC2mChecklistResultViewTable
