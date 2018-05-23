
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './VehicleInspectionOrder.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',  render: (text, record)=>(<Link to={`/vehicleInspectionOrder/${text}/dashboard`}>{text}</Link>) },
  { title: '订单状态', debugtype: 'string', dataIndex: 'orderStatus',},
  { title: '车牌号码', debugtype: 'string', dataIndex: 'vehicleLicensePlateNumber',},
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '联系人姓名', debugtype: 'string', dataIndex: 'contactName',},
  { title: '联系人手机', debugtype: 'string_china_mobile_phone', dataIndex: 'contactMobileNumber',},
  { title: '产品类型', debugtype: 'string', dataIndex: 'productType',},
  { title: '6年免检', dataIndex: 'hasSixYearExemption', render: (text, record) => (record.hasSixYearExemption ? '是' : '否') },
  { title: '上线检测', dataIndex: 'hasInspection', render: (text, record) => (record.hasInspection ? '是' : '否') },
  { title: '二级维护', dataIndex: 'hasSecondLevelMaintenance', render: (text, record) => (record.hasSecondLevelMaintenance ? '是' : '否') },
  { title: '等级评定', dataIndex: 'hasGradeEstimation', render: (text, record) => (record.hasGradeEstimation ? '是' : '否') },
  { title: '商户优惠', dataIndex: 'merchantDiscount', render: (text, record) => (record.merchantDiscount ? '是' : '否') },
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '商户', dataIndex: 'serviceCompany', render: (text, record) => (record.serviceCompany ? record.serviceCompany.displayName : '暂无') },
  { title: '服务公司信息', debugtype: 'string_longtext', dataIndex: 'serviceCompanyInfo',},
  { title: '地址', debugtype: 'string', dataIndex: 'contactAddressDetail',},
  { title: '城市', dataIndex: 'contactAddressCity', render: (text, record) => (record.contactAddressCity ? record.contactAddressCity.displayName : '暂无') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '计划年检日期', dataIndex: 'planInspectionDate', render: (text, record) => moment(record.planInspectionDate).format('YYYY-MM-DD') },
  { title: '无伤人交通事故', dataIndex: 'trafficAccidentAnnouncement', render: (text, record) => (record.trafficAccidentAnnouncement ? '是' : '否') },
  { title: '提供委托书', dataIndex: 'engagementLetterProvided', render: (text, record) => (record.engagementLetterProvided ? '是' : '否') },
  { title: '上门取车', dataIndex: 'homePickUp', render: (text, record) => (record.homePickUp ? '是' : '否') },
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType',},
  { title: '使用性质', debugtype: 'string', dataIndex: 'vehicleUseCharacter',},
  { title: '核准座位数', debugtype: 'int', dataIndex: 'vehicleSeatsQuantity',},
  { title: '注册日期', dataIndex: 'vehicleRegistrationDate', render: (text, record) => moment(record.vehicleRegistrationDate).format('YYYY-MM-DD') },
  { title: '检测有效期', dataIndex: 'inspectionValidationDate', render: (text, record) => moment(record.inspectionValidationDate).format('YYYY-MM-DD') },
  { title: '保险有效期', dataIndex: 'insuranceValidationDate', render: (text, record) => moment(record.insuranceValidationDate).format('YYYY-MM-DD') },
  { title: '发动机号', debugtype: 'string', dataIndex: 'engineNumber',},
  { title: '车架号', debugtype: 'string', dataIndex: 'vehicleIdentificationNumber',},
  { title: '发证日期', dataIndex: 'vehiclePermitIssueDate', render: (text, record) => moment(record.vehiclePermitIssueDate).format('YYYY-MM-DD') },
  { title: '所有人', debugtype: 'string', dataIndex: 'vehiclePermitHolderName',},
  { title: '行驶证图1', dataIndex: 'vehiclePermitImage1', render: (text, record) => <ImagePreview imageTitle="行驶证图1" imageLocation={record.vehiclePermitImage1} /> },
  { title: '行驶证图2', dataIndex: 'vehiclePermitImage2', render: (text, record) => <ImagePreview imageTitle="行驶证图2" imageLocation={record.vehiclePermitImage2} /> },
  { title: '行驶证图3', dataIndex: 'vehiclePermitImage3', render: (text, record) => <ImagePreview imageTitle="行驶证图3" imageLocation={record.vehiclePermitImage3} /> },
  { title: '行驶证图4', dataIndex: 'vehiclePermitImage4', render: (text, record) => <ImagePreview imageTitle="行驶证图4" imageLocation={record.vehiclePermitImage4} /> },
  { title: '行驶证图5', dataIndex: 'vehiclePermitImage5', render: (text, record) => <ImagePreview imageTitle="行驶证图5" imageLocation={record.vehiclePermitImage5} /> },
  { title: '经度', debugtype: 'double', dataIndex: 'longitude',},
  { title: '纬度', debugtype: 'double', dataIndex: 'latitude',},
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },


]

class VehicleInspectionOrderTable extends PureComponent {
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
        type: 'vehicleInspectionOrder',
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

export default VehicleInspectionOrderTable

