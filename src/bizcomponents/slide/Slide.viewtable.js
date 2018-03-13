import React, { PureComponent } from 'react'
import moment from 'moment'
import { Form, Button, Table, Alert, Badge } from 'antd'
import styles from './Slide.table.less'
import ImagePreview from '../../components/ImagePreview'

const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8' },
  {
    title: '图像网址',
    dataIndex: 'imageUrl',
    render: (text, record) => <ImagePreview imageLocation={record.imageUrl} />,
  },
  { title: '链接网址', debugtype: 'string', dataIndex: 'linkUrl', width: '40' },
  {
    title: '主页',
    dataIndex: 'homePage',
    render: (text, record) => (record.homePage ? record.homePage.id : '暂无'),
  },
]

class SlideViewTable extends PureComponent {
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

export default SlideViewTable
