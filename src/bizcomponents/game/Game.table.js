
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './Game.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',  render: (text, record)=>(<Link to={`/game/${text}/dashboard`}>{text}</Link>) },
  { title: '名称', debugtype: 'string', dataIndex: 'name',},
  { title: '文字简介', debugtype: 'string', dataIndex: 'shortDescription',},
  { title: '游戏详情', debugtype: 'string_longtext', dataIndex: 'longDescription',},
  { title: '游戏图标', dataIndex: 'gameIcon', render: (text, record) => <ImagePreview imageTitle="游戏图标" imageLocation={record.gameIcon} /> },
  { title: '背景图像', dataIndex: 'backgroundImage', render: (text, record) => <ImagePreview imageTitle="背景图像" imageLocation={record.backgroundImage} /> },
  { title: '封面图片', dataIndex: 'coverImage', render: (text, record) => <ImagePreview imageTitle="封面图片" imageLocation={record.coverImage} /> },
  { title: '游戏Image1', dataIndex: 'gameImage1', render: (text, record) => <ImagePreview imageTitle="游戏Image1" imageLocation={record.gameImage1} /> },
  { title: '游戏Image2', dataIndex: 'gameImage2', render: (text, record) => <ImagePreview imageTitle="游戏Image2" imageLocation={record.gameImage2} /> },
  { title: '游戏Image3', dataIndex: 'gameImage3', render: (text, record) => <ImagePreview imageTitle="游戏Image3" imageLocation={record.gameImage3} /> },
  { title: '游戏Image4', dataIndex: 'gameImage4', render: (text, record) => <ImagePreview imageTitle="游戏Image4" imageLocation={record.gameImage4} /> },
  { title: '游戏Image5', dataIndex: 'gameImage5', render: (text, record) => <ImagePreview imageTitle="游戏Image5" imageLocation={record.gameImage5} /> },
  { title: '游戏Image6', dataIndex: 'gameImage6', render: (text, record) => <ImagePreview imageTitle="游戏Image6" imageLocation={record.gameImage6} /> },
  { title: '游戏视频', debugtype: 'string_longtext', dataIndex: 'gameVideo',},
  { title: '最多玩家数', debugtype: 'int', dataIndex: 'maximumPlayerCount',},
  { title: '最少玩家数', debugtype: 'int', dataIndex: 'minimumPlayerCount',},
  { title: '推荐玩家数', debugtype: 'string', dataIndex: 'recommendPlayerCount',},
  { title: '基础价格', dataIndex: 'baseListPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '时长', debugtype: 'int', dataIndex: 'gameDuration',},
  { title: '开场游戏可售票时长', debugtype: 'int', dataIndex: 'gameReservation',},
  { title: '游戏状态', dataIndex: 'gameStatus', render: (text, record) => (record.gameStatus ? '是' : '否') },
  { title: '游戏场次', dataIndex: 'sessionGame', render: (text, record) => (record.sessionGame ? '是' : '否') },
  { title: '游戏类别', dataIndex: 'gameCategory', render: (text, record) => (record.gameCategory ? record.gameCategory.displayName : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },


]

class GameTable extends PureComponent {
  state = {
    selectedRowKeys: [],
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
      })
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows)
    }
    this.setState({ selectedRowKeys })
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter)
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], [])
  }
 calcDisplayColumns=()=>{

    const {owner} =  this.props
    const {referenceName} = owner
    
    if(!referenceName){
      return columns
    }
    const remainColumns = columns.filter((item,index)=> item.dataIndex!=referenceName&&index<5&&item.dataIndex!=='content')
    //fixed: 'right',
    const operationColumn={
      title: '操作',
      render: (text, record) => (
        <p>
          <a key="__" onClick={()=>this.gotoEdit(text, record)}>编辑</a>
          {
            record.actionList&&record.actionList.map((item)=>(<a key={item.actionId} onClick={()=>this.executeAction(item,text, record)}><span className={styles.splitLine} />{item.actionName}</a>))

          }
        </p>
      ),
    }
    remainColumns.push(
      operationColumn
    )
    return remainColumns

  }
  executeAction = (action, text, record) => {
    console.log("executeAction",action)
    const {dispatch,owner} = this.props
    const {actionPath}=action;
    const url = actionPath
    const successAction={

      type:`${owner.type}/view`,
      payload: {id:`${owner.id}`}

    }
    dispatch({
      type:"actioncenter/executeAction",
      payload:{action,url,successAction}

    })



  }
  
  gotoEdit = (text, record) =>{
    this.handleRowSelectChange([record.id], [record])
    const{dispatch,owner} = this.props
    const selectedRows = [];
    selectedRows.push(record)
    console.log("selectedRows",selectedRows)

    if(selectedRows.length<1){
      return
    }
    const currentUpdateIndex = 0
    dispatch({
      type: `${owner.type}/gotoUpdateForm`,
      payload: {
        id: owner.id,
        type: 'game',
        selectedRows,
        currentUpdateIndex,
      },
    })

  }
	
  render() {
    const { selectedRowKeys } = this.state
    // const { data, count, current, owner } = this.props
    const { data, count, current } = this.props

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 20,
      total: count,
      current,
      
    }

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    }

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <p>
                一共 <a style={{ fontWeight: 600 }}>{count}</a> 项 
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项 
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </p>
            )}
            type="info"
            showIcon
          />
        </div>
        <Table
          loading={false}
          rowKey={record => record.id}
          rowSelection={rowSelection}
          dataSource={data}
          columns={this.calcDisplayColumns()}
          pagination={paginationProps}
          onChange={this.handleTableChange}
          
        />
      </div>
    )
  }
}

export default GameTable

