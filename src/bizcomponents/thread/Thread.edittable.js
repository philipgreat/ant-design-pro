
import React, { PureComponent } from 'react';
import moment from 'moment';
import {Form,Button, Table, Alert, Badge,Input,Divider } from 'antd';
import styles from './Thread.table.less';
import ImagePreview from '../../components/ImagePreview';


const columns = [
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record) => (<Input value={text} placeholder={"序号"}/>)  },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '15',render: (text, record) => (<Input value={text} placeholder={"标题"}/>)  },
  { title: '显示顺序', debugtype: 'int', dataIndex: 'displayOrder', width: '10',render: (text, record) => (<Input value={text} placeholder={"显示顺序"}/>)  },
  { title: '创建时间', dataIndex: 'createTime', render: (text, record) => moment(record.createTime).format('YYYY-MM-DD') },
  { title: '事件时间', dataIndex: 'eventTime', render: (text, record) => moment(record.eventTime).format('YYYY-MM-DD') },
  { title: '注册时间停止', dataIndex: 'registrationStopTime', render: (text, record) => moment(record.registrationStopTime).format('YYYY-MM-DD') },
  { title: '事件的位置', debugtype: 'string', dataIndex: 'eventLocation', width: '13',render: (text, record) => (<Input value={text} placeholder={"事件的位置"}/>)  },
  { title: '城市', debugtype: 'string', dataIndex: 'city', width: '6',render: (text, record) => (<Input value={text} placeholder={"城市"}/>)  },
  { title: '社区组', debugtype: 'string', dataIndex: 'communityGroup', width: '8',render: (text, record) => (<Input value={text} placeholder={"社区组"}/>)  },
  { title: '帖子类型', debugtype: 'string', dataIndex: 'threadType', width: '9',render: (text, record) => (<Input value={text} placeholder={"帖子类型"}/>)  },
  { title: '社区',dataIndex: 'community', render: (text, record) => (record.community ? record.community.id : '暂无') },
  { title: '创建者',dataIndex: 'creator', render: (text, record) => (record.creator ? record.creator.id : '暂无') },
  { title: '主页',dataIndex: 'homePage', render: (text, record) => (record.homePage ? record.homePage.id : '暂无') },
  { title: '群组页面',dataIndex: 'groupPage', render: (text, record) => (record.groupPage ? record.groupPage.id : '暂无') },
  { title: '视频网址', debugtype: 'string_url', dataIndex: 'videoUrl', width: '50',render: (text, record) => (<Input value={text} placeholder={"视频网址"}/>)  },
  { title: '封面图像路径1', dataIndex: 'coverImagePath1', render: (text, record) => <ImagePreview imageLocation={record.封面图像路径1}/> },
  { title: '封面图像路径2', dataIndex: 'coverImagePath2', render: (text, record) => <ImagePreview imageLocation={record.封面图像路径2}/> },
  { title: '封面图像路径3', dataIndex: 'coverImagePath3', render: (text, record) => <ImagePreview imageLocation={record.封面图像路径3}/> },
  { title: '图1', dataIndex: 'imagePath1', render: (text, record) => <ImagePreview imageLocation={record.图1}/> },
  { title: '图2', dataIndex: 'imagePath2', render: (text, record) => <ImagePreview imageLocation={record.图2}/> },
  { title: '图3', dataIndex: 'imagePath3', render: (text, record) => <ImagePreview imageLocation={record.图3}/> },
  { title: '图4', dataIndex: 'imagePath4', render: (text, record) => <ImagePreview imageLocation={record.图4}/> },
  { title: '图5', dataIndex: 'imagePath5', render: (text, record) => <ImagePreview imageLocation={record.图5}/> },
  { title: '内容', debugtype: 'string', dataIndex: 'content', width: '107',render: (text, record) => (<Input value={text} placeholder={"内容"}/>)  },
  { title: '验收',dataIndex: 'approval', render: (text, record) => (record.approval ? record.approval.id : '暂无') },
  { title: '取消',dataIndex: 'canceling', render: (text, record) => (record.canceling ? record.canceling.id : '暂无') },
  { title: '完成',dataIndex: 'completion', render: (text, record) => (record.completion ? record.completion.id : '暂无') },
  { title: '躲藏',dataIndex: 'hiding', render: (text, record) => (record.hiding ? record.hiding.id : '暂无') },
  { title: '当前用户已点赞',dataIndex: 'likeByCurrentUser', render: (text, record) => (record.likeByCurrentUser ? '是' : '否') },
  { title: '当前用户已回复',dataIndex: 'repliedByCurrentUser', render: (text, record) => (record.repliedByCurrentUser ? '是' : '否') },
  { title: '由当前用户注册',dataIndex: 'registeredByCurrentUser', render: (text, record) => (record.registeredByCurrentUser ? '是' : '否') },
  { title: '当前状态', debugtype: 'string', dataIndex: 'currentStatus', width: '13',render: (text, record) => (<Input value={text} placeholder={"当前状态"}/>)  },
];

class ThreadEditTable extends PureComponent {
  render() {
    // const { data,count,current, owner } = this.props;
    const { data } = this.props;
	
	

    return (
      <div className={styles.standardTable}>
        
        <Table
          rowKey={record => record.id}
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 5940 }}
        />
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
      </div>
    );
  }
}

export default ThreadEditTable;

