

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskReplyLikeBizSider from './TaskReplyLike.sider'
import TaskReplyLikeBizHeader from './TaskReplyLike.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskReplyLikeBizApp extends Component {
   
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
                 <TaskReplyLikeBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskReplyLikeBizSider>
                       
                <Layout>
                    <TaskReplyLikeBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskReplyLikeBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskReplyLikeBizApp);
export default connect(mapStateToProps)(TaskReplyLikeBizApp);

