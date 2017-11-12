

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import TaskPageBizSider from './TaskPage.sider'
import TaskPageBizHeader from './TaskPage.header'

const { Sider, Header, Content, Footer } = Layout;


class TaskPageBizApp extends Component {
   
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
                 <TaskPageBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</TaskPageBizSider>
                       
                <Layout>
                    <TaskPageBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</TaskPageBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(TaskPageBizApp);
export default connect(mapStateToProps)(TaskPageBizApp);

