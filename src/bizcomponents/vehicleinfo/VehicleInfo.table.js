
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './VehicleInfo.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',},
  { title: '车牌号码', debugtype: 'string', dataIndex: 'licensePlateNumber',},
  { title: '车辆类型', debugtype: 'string', dataIndex: 'vehicleType',},
  { title: '使用性质', debugtype: 'string', dataIndex: 'useCharacter',},
  { title: '核准座位数', debugtype: 'int', dataIndex: 'seatsQuantity',},
  { title: '注册日期', dataIndex: 'registrationDate', render: (text, record) => moment(record.registrationDate).format('YYYY-MM-DD') },
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
  { title: '最后更新时间', dataIndex: 'lastUpdateTime', render: (text, record) => moment(record.lastUpdateTime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '客户', dataIndex: 'customer', render: (text, record) => (record.customer ? record.customer.displayName : '暂无') },
  { title: '平台', dataIndex: 'platform', render: (text, record) => (record.platform ? record.platform.displayName : '暂无') },


]

class VehicleInfoTable extends PureComponent {
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
        type: 'vehicleInfo',
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

export default VehicleInfoTable

