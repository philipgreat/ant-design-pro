

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ThreadApprovalBizSider from './ThreadApproval.sider'
import ThreadApprovalBizHeader from './ThreadApproval.header'

const { Sider, Header, Content, Footer } = Layout;


class ThreadApprovalBizApp extends Component {
   
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
                 <ThreadApprovalBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ThreadApprovalBizSider>
                       
                <Layout>
                    <ThreadApprovalBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ThreadApprovalBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ThreadApprovalBizApp);
export default connect(mapStateToProps)(ThreadApprovalBizApp);

