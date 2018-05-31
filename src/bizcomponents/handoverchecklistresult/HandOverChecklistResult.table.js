
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './HandOverChecklistResult.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id',},
  { title: '检查项名称', debugtype: 'string', dataIndex: 'handOverCheckItemName',},
  { title: '检查项目描述', debugtype: 'string_longtext', dataIndex: 'checkItemDescription',},
  { title: '检车项结果', debugtype: 'string', dataIndex: 'handOverCheckResult',},
  { title: '检查项意见', debugtype: 'string_longtext', dataIndex: 'handOverCheckComment',},
  { title: '凭证图片1', dataIndex: 'handOverCheckEvidenceImage1', render: (text, record) => <ImagePreview imageTitle="凭证图片1" imageLocation={record.handOverCheckEvidenceImage1} /> },
  { title: '凭证图片2', dataIndex: 'handOverCheckEvidenceImage2', render: (text, record) => <ImagePreview imageTitle="凭证图片2" imageLocation={record.handOverCheckEvidenceImage2} /> },
  { title: '凭证图片3', dataIndex: 'handOverCheckEvidenceImage3', render: (text, record) => <ImagePreview imageTitle="凭证图片3" imageLocation={record.handOverCheckEvidenceImage3} /> },
  { title: '凭证图片4', dataIndex: 'handOverCheckEvidenceImage4', render: (text, record) => <ImagePreview imageTitle="凭证图片4" imageLocation={record.handOverCheckEvidenceImage4} /> },
  { title: '凭证图片5', dataIndex: 'handOverCheckEvidenceImage5', render: (text, record) => <ImagePreview imageTitle="凭证图片5" imageLocation={record.handOverCheckEvidenceImage5} /> },
  { title: '交接检查项', dataIndex: 'availableHandOverItem', render: (text, record) => (record.availableHandOverItem ? record.availableHandOverItem.displayName : '暂无') },
  { title: '收车服务', dataIndex: 'serviceTypeVehicleC2m', render: (text, record) => (record.serviceTypeVehicleC2m ? record.serviceTypeVehicleC2m.displayName : '暂无') },
  { title: '移车服务', dataIndex: 'serviceTypeVehicleM2m', render: (text, record) => (record.serviceTypeVehicleM2m ? record.serviceTypeVehicleM2m.displayName : '暂无') },
  { title: '还车服务', dataIndex: 'serviceTypeVehicleM2c', render: (text, record) => (record.serviceTypeVehicleM2c ? record.serviceTypeVehicleM2c.displayName : '暂无') },
  { title: '收件服务', dataIndex: 'serviceTypeFileC2m', render: (text, record) => (record.serviceTypeFileC2m ? record.serviceTypeFileC2m.displayName : '暂无') },
  { title: '移件服务', dataIndex: 'serviceTypeFileM2m', render: (text, record) => (record.serviceTypeFileM2m ? record.serviceTypeFileM2m.displayName : '暂无') },
  { title: '还件服务', dataIndex: 'serviceTypeFileM2c', render: (text, record) => (record.serviceTypeFileM2c ? record.serviceTypeFileM2c.displayName : '暂无') },


]

class HandOverChecklistResultTable extends PureComponent {
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
        type: 'handOverChecklistResult',
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

export default HandOverChecklistResultTable
