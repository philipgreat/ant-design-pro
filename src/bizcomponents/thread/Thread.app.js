

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ThreadBizSider from './Thread.sider'
import ThreadBizHeader from './Thread.header'

const { Sider, Header, Content, Footer } = Layout;


class ThreadBizApp extends Component {
   
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
                 <ThreadBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ThreadBizSider>
                       
                <Layout>
                    <ThreadBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ThreadBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ThreadBizApp);
export default connect(mapStateToProps)(ThreadBizApp);

