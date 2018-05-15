
import React, { PureComponent } from 'react'
import moment from 'moment'
import { Table, Alert, Badge} from 'antd'
import { Link } from 'dva/router'
import styles from './Workshop.table.less'
import ImagePreview from '../../components/ImagePreview'


const columns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>(<Link to={`/workshop/${text}/dashboard`}>{text}</Link>) },
  { title: '工厂的名字', debugtype: 'string', dataIndex: 'workshopName', width: '13' },
  { title: '研讨会内容', debugtype: 'string', dataIndex: 'workshopContent', width: '27' },
  { title: '车间图片', dataIndex: 'workshopImage', render: (text, record) => <ImagePreview imageTitle="车间图片" imageLocation={record.workshopImage} /> },
  { title: '车间的地位', debugtype: 'string', dataIndex: 'workshopStatus', width: '7' },
  { title: '车间活动日期时间', dataIndex: 'workshopEventDatetime', render: (text, record) => moment(record.workshopEventDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器Datetime', dataIndex: 'availableRegisterDatetime', render: (text, record) => moment(record.availableRegisterDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '可用的寄存器数量', debugtype: 'int', dataIndex: 'availableRegisterQuantity', width: '6' },
  { title: '发布日期时间', dataIndex: 'publishDatetime', render: (text, record) => moment(record.publishDatetime).format('YYYY-MM-DD HH:mm:ss') },
  { title: '发布商店', dataIndex: 'publishStore', render: (text, record) => (record.publishStore ? record.publishStore.displayName : '暂无') },
  { title: '发布员工', dataIndex: 'publishEmployee', render: (text, record) => (record.publishEmployee ? record.publishEmployee.displayName : '暂无') },


]

class WorkshopTable extends PureComponent {
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
    const remainColumns = columns.filter((item)=> item.dataIndex!=referenceName)
    const operationColumn={
      title: '操作',
      fixed: 'right',
      width: 100,
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
        type: 'workshop',
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
          scroll={{ x: 1665 }}
        />
      </div>
    )
  }
}

export default WorkshopTable

