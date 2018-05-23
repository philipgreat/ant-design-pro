
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './MainOrderAccount.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',},
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber',},
  { title: '产品名称', debugtype: 'string', dataIndex: 'productName',},
  { title: '年检费用', dataIndex: 'inspectionPrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '代办服务费用', dataIndex: 'agentServicePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '城市', debugtype: 'string', dataIndex: 'city',},
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType',},
  { title: '订单总金额', dataIndex: 'orderTotalAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '优惠折扣', dataIndex: 'orderPromotionDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '优惠券折扣', dataIndex: 'orderCouponDiscount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '保单费用', dataIndex: 'orderInsuranceAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '商户优惠', debugtype: 'string', dataIndex: 'orderMerchantDiscount',},
  { title: '客户付款总金额', dataIndex: 'orderCustomerPaymentAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '商户服务费总金额', dataIndex: 'orderServiceAmount', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '平台结余总金额', dataIndex: 'orderPlatformBalance', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '下单时间', dataIndex: 'orderPlacedDatetime', render: (text, record) => moment(record.orderPlacedDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '付款时间', dataIndex: 'orderPaymentDatetime', render: (text, record) => moment(record.orderPaymentDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '订单完成时间', dataIndex: 'orderFinishedDatetime', render: (text, record) => moment(record.orderFinishedDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '年检订单ID', debugtype: 'string', dataIndex: 'mainOrderId',},
  { title: '微信订单ID', debugtype: 'string', dataIndex: 'wechatOrderId',},
  { title: '微信预付订单ID', debugtype: 'string', dataIndex: 'wechatPrepayId',},
  { title: '对账单', dataIndex: 'account', render: (text, record) => (record.account ? record.account.displayName : '暂无') },


]

class MainOrderAccountTable extends PureComponent {
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
        type: 'mainOrderAccount',
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

export default MainOrderAccountTable

