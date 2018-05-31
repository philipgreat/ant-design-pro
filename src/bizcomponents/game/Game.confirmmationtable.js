
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge } from 'antd'
import styles from './Game.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20' },
  { title: '名称', debugtype: 'string', dataIndex: 'name', width: '14' },
  { title: '文字简介', debugtype: 'string', dataIndex: 'shortDescription', width: '57' },
  { title: '游戏详情', debugtype: 'string_longtext', dataIndex: 'longDescription', width: '10' },
  { title: '游戏图标', dataIndex: 'gameIcon', render: (text, record) => <ImagePreview imageLocation={record.gameIcon} /> },
  { title: '背景图像', dataIndex: 'backgroundImage', render: (text, record) => <ImagePreview imageLocation={record.backgroundImage} /> },
  { title: '封面图片', dataIndex: 'coverImage', render: (text, record) => <ImagePreview imageLocation={record.coverImage} /> },
  { title: '游戏Image1', dataIndex: 'gameImage1', render: (text, record) => <ImagePreview imageLocation={record.gameImage1} /> },
  { title: '游戏Image2', dataIndex: 'gameImage2', render: (text, record) => <ImagePreview imageLocation={record.gameImage2} /> },
  { title: '游戏Image3', dataIndex: 'gameImage3', render: (text, record) => <ImagePreview imageLocation={record.gameImage3} /> },
  { title: '游戏Image4', dataIndex: 'gameImage4', render: (text, record) => <ImagePreview imageLocation={record.gameImage4} /> },
  { title: '游戏Image5', dataIndex: 'gameImage5', render: (text, record) => <ImagePreview imageLocation={record.gameImage5} /> },
  { title: '游戏Image6', dataIndex: 'gameImage6', render: (text, record) => <ImagePreview imageLocation={record.gameImage6} /> },
  { title: '游戏视频', debugtype: 'string_longtext', dataIndex: 'gameVideo', width: '10' },
  { title: '最多玩家数', debugtype: 'int', dataIndex: 'maximumPlayerCount', width: '6' },
  { title: '最少玩家数', debugtype: 'int', dataIndex: 'minimumPlayerCount', width: '5' },
  { title: '推荐玩家数', debugtype: 'string', dataIndex: 'recommendPlayerCount', width: '7' },
  { title: '基础价格', debugtype: 'money', dataIndex: 'baseListPrice', width: '11' },
  { title: '时长', debugtype: 'int', dataIndex: 'gameDuration', width: '7' },
  { title: '开场游戏可售票时长', debugtype: 'int', dataIndex: 'gameReservation', width: '6' },
  { title: '游戏状态', dataIndex: 'gameStatus', render: (text, record) => (record.gameStatus ? '是' : '否') },
  { title: '游戏场次', dataIndex: 'sessionGame', render: (text, record) => (record.sessionGame ? '是' : '否') },
  { title: '游戏类别', dataIndex: 'gameCategory', render: (text, record) => (record.gameCategory ? record.gameCategory.id : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.id : '暂无') },
]

class GameConfirmationTable extends PureComponent {
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
          scroll={{ x: 11580 }}
        />
      </div>
    )
  }
}

export default GameConfirmationTable

