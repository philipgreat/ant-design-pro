

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskReplyBizSider from './TaskReply.sider'
import TaskReplyBizHeader from './TaskReply.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskReplyBizApp extends Component {
   
    state = {
        collapsed: true,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {

        return (
            <Layout className="ant-layout-has-sider">
                 <TaskReplyBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskReplyBizSider>
                       
                <Layout>
                    <TaskReplyBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskReplyBizHeader>
                    <Layout>
                        <Content>{this.props.children}</Content>
                        
                    </Layout>
                    
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => {   
    return state;
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators({}, dispatch)
});

//export default connect(mapStateToProps, mapDispatchToProps)(TaskReplyBizApp);
export default connect(mapStateToProps)(TaskReplyBizApp);

