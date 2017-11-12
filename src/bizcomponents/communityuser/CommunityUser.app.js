

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import CommunityUserBizSider from './CommunityUser.sider'
import CommunityUserBizHeader from './CommunityUser.header'

const { Sider, Header, Content, Footer } = Layout;


class CommunityUserBizApp extends Component {
   
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
                 <CommunityUserBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</CommunityUserBizSider>
                       
                <Layout>
                    <CommunityUserBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</CommunityUserBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(CommunityUserBizApp);
export default connect(mapStateToProps)(CommunityUserBizApp);

