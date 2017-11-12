

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import SecUserBizSider from './SecUser.sider'
import SecUserBizHeader from './SecUser.header'

const { Sider, Header, Content, Footer } = Layout;


class SecUserBizApp extends Component {
   
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
                 <SecUserBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</SecUserBizSider>
                       
                <Layout>
                    <SecUserBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</SecUserBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(SecUserBizApp);
export default connect(mapStateToProps)(SecUserBizApp);

