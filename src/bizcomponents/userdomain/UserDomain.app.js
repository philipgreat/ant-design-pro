

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import UserDomainBizSider from './UserDomain.sider'
import UserDomainBizHeader from './UserDomain.header'

const { Sider, Header, Content, Footer } = Layout;


class UserDomainBizApp extends Component {
   
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
                 <UserDomainBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</UserDomainBizSider>
                       
                <Layout>
                    <UserDomainBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</UserDomainBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(UserDomainBizApp);
export default connect(mapStateToProps)(UserDomainBizApp);

