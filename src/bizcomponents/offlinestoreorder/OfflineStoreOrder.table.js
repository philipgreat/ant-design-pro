
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './OfflineStoreOrder.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',  render: (text, record)=>(<Link to={`/offlineStoreOrder/${text}/dashboard`}>{text}</Link>) },
  { title: '游戏名称', debugtype: 'string', dataIndex: 'gameName',},
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次日期', dataIndex: 'gameSessionDatetime', render: (text, record) => moment(record.gameSessionDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '游戏场次名称', debugtype: 'string', dataIndex: 'gameSessionName',},
  { title: '玩家数', debugtype: 'int', dataIndex: 'playerCount',},
  { title: '应付金额', dataIndex: 'originalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '实际金额', dataIndex: 'actualAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '调整应付金额', debugtype: 'string', dataIndex: 'adjustPayableAmount',},
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobile',},
  { title: '折扣', dataIndex: 'discount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus',},
  { title: '员工', dataIndex: 'employee', render: (text, record) => (record.employee ? record.employee.displayName : '暂无') },
  { title: '门店', dataIndex: 'store', render: (text, record) => (record.store ? record.store.displayName : '暂无') },
  { title: '游戏', dataIndex: 'game', render: (text, record) => (record.game ? record.game.displayName : '暂无') },
  { title: '游戏场次', dataIndex: 'gameSession', render: (text, record) => (record.gameSession ? record.gameSession.displayName : '暂无') },
  { title: '游戏门票', dataIndex: 'gameTicket', render: (text, record) => (record.gameTicket ? record.gameTicket.displayName : '暂无') },
  { title: '支付方式', debugtype: 'string', dataIndex: 'paymentMethod',},
  { title: '付款凭证', debugtype: 'string', dataIndex: 'paymentEvidence',},
  { title: '付款凭证图片', dataIndex: 'paymentEvidenceImage', render: (text, record) => <ImagePreview imageTitle="付款凭证图片" imageLocation={record.paymentEvidenceImage} /> },
  { title: '门票打印', dataIndex: 'ticketPrinted', render: (text, record) => (record.ticketPrinted ? '是' : '否') },
  { title: '兑换手机', debugtype: 'string_china_mobile_phone', dataIndex: 'redeemPhone',},
  { title: '兑换验证码', debugtype: 'string', dataIndex: 'redeemCode',},


]

class OfflineStoreOrderTable extends PureComponent {
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
        type: 'offlineStoreOrder',
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

export default OfflineStoreOrderTable

