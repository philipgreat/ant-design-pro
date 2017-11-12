

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ThreadCancelingBizSider from './ThreadCanceling.sider'
import ThreadCancelingBizHeader from './ThreadCanceling.header'

const { Sider, Header, Content, Footer } = Layout;


class ThreadCancelingBizApp extends Component {
   
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
                 <ThreadCancelingBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ThreadCancelingBizSider>
                       
                <Layout>
                    <ThreadCancelingBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ThreadCancelingBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ThreadCancelingBizApp);
export default connect(mapStateToProps)(ThreadCancelingBizApp);

