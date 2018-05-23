
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './VehicleServiceCompanyEmployee.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',  render: (text, record)=>(<Link to={`/vehicleServiceCompanyEmployee/${text}/dashboard`}>{text}</Link>) },
  { title: '员工姓名', debugtype: 'string', dataIndex: 'employeeName',},
  { title: '证件照片', dataIndex: 'profileImage', render: (text, record) => <ImagePreview imageTitle="证件照片" imageLocation={record.profileImage} /> },
  { title: '商户名称', debugtype: 'string', dataIndex: 'companyName',},
  { title: '手机号码', debugtype: 'string_china_mobile_phone', dataIndex: 'mobileNumber',},
  { title: '性别', debugtype: 'string_gender', dataIndex: 'gender',},
  { title: '工作状态', debugtype: 'string', dataIndex: 'availableState',},
  { title: '无犯罪记录证明', dataIndex: 'innocentEvidenceImage', render: (text, record) => <ImagePreview imageTitle="无犯罪记录证明" imageLocation={record.innocentEvidenceImage} /> },
  { title: '身份证号码', debugtype: 'string', dataIndex: 'identityCardNumber',},
  { title: '商户', dataIndex: 'company', render: (text, record) => (record.company ? record.company.displayName : '暂无') },
  { title: '检测站', dataIndex: 'inspectionStation', render: (text, record) => (record.inspectionStation ? record.inspectionStation.displayName : '暂无') },
  { title: '是否可以移车', dataIndex: 'availableMoveCar', render: (text, record) => (record.availableMoveCar ? '是' : '否') },
  { title: '是否可以检车', dataIndex: 'availableInspectionCar', render: (text, record) => (record.availableInspectionCar ? '是' : '否') },
  { title: '是否可以修车', dataIndex: 'availableRepairCar', render: (text, record) => (record.availableRepairCar ? '是' : '否') },
  { title: '资格认定', dataIndex: 'qualification', render: (text, record) => (record.qualification ? record.qualification.displayName : '暂无') },
  { title: '服务状态', dataIndex: 'serving', render: (text, record) => (record.serving ? record.serving.displayName : '暂无') },
  { title: '服务终止', dataIndex: 'termination', render: (text, record) => (record.termination ? record.termination.displayName : '暂无') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus',},


]

class VehicleServiceCompanyEmployeeTable extends PureComponent {
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
        type: 'vehicleServiceCompanyEmployee',
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

export default VehicleServiceCompanyEmployeeTable

