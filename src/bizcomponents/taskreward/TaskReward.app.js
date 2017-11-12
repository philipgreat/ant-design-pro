

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskRewardBizSider from './TaskReward.sider'
import TaskRewardBizHeader from './TaskReward.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskRewardBizApp extends Component {
   
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
                 <TaskRewardBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskRewardBizSider>
                       
                <Layout>
                    <TaskRewardBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskRewardBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskRewardBizApp);
export default connect(mapStateToProps)(TaskRewardBizApp);

