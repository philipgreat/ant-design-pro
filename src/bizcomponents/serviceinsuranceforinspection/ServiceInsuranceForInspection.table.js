
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './ServiceInsuranceForInspection.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',},
  { title: '服务状态', debugtype: 'string', dataIndex: 'serviceStatus',},
  { title: '选定保险', dataIndex: 'orderedInsurance', render: (text, record) => (record.orderedInsurance ? record.orderedInsurance.displayName : '暂无') },
  { title: '服务人员', dataIndex: 'responsibleWorker', render: (text, record) => (record.responsibleWorker ? record.responsibleWorker.displayName : '暂无') },
  { title: '服务概述', debugtype: 'string', dataIndex: 'serviceSummary',},
  { title: '服务的评论', debugtype: 'string', dataIndex: 'serviceComments',},
  { title: '开始时间', dataIndex: 'startTime', render: (text, record) => moment(record.startTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '保险名称', debugtype: 'string', dataIndex: 'insuranceName',},
  { title: '承保方', debugtype: 'string', dataIndex: 'insuranceVendor',},
  { title: '保费', dataIndex: 'insurancePrice', className:'money', render: (text, record) => (`￥${text.toFixed(2)}`) },
  { title: '摘要', debugtype: 'string', dataIndex: 'summary',},
  { title: '保单号码', debugtype: 'string', dataIndex: 'insuranceNumber',},
  { title: '保单凭证1', dataIndex: 'insuranceImage1', render: (text, record) => <ImagePreview imageTitle="保单凭证1" imageLocation={record.insuranceImage1} /> },
  { title: '保单凭证2', dataIndex: 'insuranceImage2', render: (text, record) => <ImagePreview imageTitle="保单凭证2" imageLocation={record.insuranceImage2} /> },
  { title: '保单凭证3', dataIndex: 'insuranceImage3', render: (text, record) => <ImagePreview imageTitle="保单凭证3" imageLocation={record.insuranceImage3} /> },
  { title: '保单凭证4', dataIndex: 'insuranceImage4', render: (text, record) => <ImagePreview imageTitle="保单凭证4" imageLocation={record.insuranceImage4} /> },
  { title: '保单凭证5', dataIndex: 'insuranceImage5', render: (text, record) => <ImagePreview imageTitle="保单凭证5" imageLocation={record.insuranceImage5} /> },
  { title: '商户', dataIndex: 'merchant', render: (text, record) => (record.merchant ? record.merchant.displayName : '暂无') },
  { title: '年检订单', dataIndex: 'mainOrder', render: (text, record) => (record.mainOrder ? record.mainOrder.displayName : '暂无') },


]

class ServiceInsuranceForInspectionTable extends PureComponent {
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
        type: 'serviceInsuranceForInspection',
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

export default ServiceInsuranceForInspectionTable
