

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskBizSider from './Task.sider'
import TaskBizHeader from './Task.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskBizApp extends Component {
   
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
                 <TaskBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskBizSider>
                       
                <Layout>
                    <TaskBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskBizApp);
export default connect(mapStateToProps)(TaskBizApp);

