

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskHidingBizSider from './TaskHiding.sider'
import TaskHidingBizHeader from './TaskHiding.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskHidingBizApp extends Component {
   
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
                 <TaskHidingBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskHidingBizSider>
                       
                <Layout>
                    <TaskHidingBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskHidingBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskHidingBizApp);
export default connect(mapStateToProps)(TaskHidingBizApp);

