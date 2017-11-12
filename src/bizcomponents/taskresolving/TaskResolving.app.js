

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskResolvingBizSider from './TaskResolving.sider'
import TaskResolvingBizHeader from './TaskResolving.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskResolvingBizApp extends Component {
   
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
                 <TaskResolvingBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskResolvingBizSider>
                       
                <Layout>
                    <TaskResolvingBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskResolvingBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskResolvingBizApp);
export default connect(mapStateToProps)(TaskResolvingBizApp);

