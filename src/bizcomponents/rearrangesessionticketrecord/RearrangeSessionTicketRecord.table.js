
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './RearrangeSessionTicketRecord.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',},
  { title: '原游戏名称', debugtype: 'string', dataIndex: 'sourceGameName',},
  { title: '原游戏场次日期', dataIndex: 'sourceGameSessionDatetime', render: (text, record) => moment(record.sourceGameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '原游戏场次名称', debugtype: 'string', dataIndex: 'sourceGameSessionName',},
  { title: '原门票数', debugtype: 'int', dataIndex: 'sourceTicketQuantity',},
  { title: '原门票是否已打印', dataIndex: 'sourceTicketPrinted', render: (text, record) => (record.sourceTicketPrinted ? '是' : '否') },
  { title: '原换票手机号', debugtype: 'string_china_mobile_phone', dataIndex: 'sourceRedeemPhone',},
  { title: '原换票验证码', debugtype: 'string', dataIndex: 'sourceRedeemCode',},
  { title: '原门店名称', debugtype: 'string', dataIndex: 'sourceStoreName',},
  { title: '换场游戏名称', debugtype: 'string', dataIndex: 'targetGameName',},
  { title: '换场游戏场次日期', dataIndex: 'targetGameSessionDatetime', render: (text, record) => moment(record.targetGameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '换场游戏场次名称', debugtype: 'string', dataIndex: 'targetGameSessionName',},
  { title: '换场门票数', debugtype: 'int', dataIndex: 'targetTicketQuantity',},
  { title: '换场门票是否已打印', dataIndex: 'targetTicketPrinted', render: (text, record) => (record.targetTicketPrinted ? '是' : '否') },
  { title: '换场换票手机', debugtype: 'string_china_mobile_phone', dataIndex: 'targetRedeemPhone',},
  { title: '换场换票验证码', debugtype: 'string', dataIndex: 'targetRedeemCode',},
  { title: '换场门店名称', debugtype: 'string', dataIndex: 'targetStoreName',},
  { title: '换场备注', debugtype: 'string', dataIndex: 'rearrangeComment',},
  { title: '原游戏场次', dataIndex: 'sourceGameSession', render: (text, record) => (record.sourceGameSession ? record.sourceGameSession.displayName : '暂无') },
  { title: '原的游戏', dataIndex: 'sourceGame', render: (text, record) => (record.sourceGame ? record.sourceGame.displayName : '暂无') },
  { title: '原门店', dataIndex: 'sourceStore', render: (text, record) => (record.sourceStore ? record.sourceStore.displayName : '暂无') },
  { title: '换场游戏场次', dataIndex: 'targetGameSession', render: (text, record) => (record.targetGameSession ? record.targetGameSession.displayName : '暂无') },
  { title: '换场游戏', dataIndex: 'targetGame', render: (text, record) => (record.targetGame ? record.targetGame.displayName : '暂无') },
  { title: '换场门店', dataIndex: 'targetStore', render: (text, record) => (record.targetStore ? record.targetStore.displayName : '暂无') },


]

class RearrangeSessionTicketRecordTable extends PureComponent {
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
        type: 'rearrangeSessionTicketRecord',
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

export default RearrangeSessionTicketRecordTable

