

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskFilterBizSider from './TaskFilter.sider'
import TaskFilterBizHeader from './TaskFilter.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskFilterBizApp extends Component {
   
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
                 <TaskFilterBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskFilterBizSider>
                       
                <Layout>
                    <TaskFilterBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskFilterBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskFilterBizApp);
export default connect(mapStateToProps)(TaskFilterBizApp);

