

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import CommunityBizSider from './Community.sider'
import CommunityBizHeader from './Community.header'

const { Sider, Header, Content, Footer } = Layout;


class CommunityBizApp extends Component {
   
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
                 <CommunityBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</CommunityBizSider>
                       
                <Layout>
                    <CommunityBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</CommunityBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(CommunityBizApp);
export default connect(mapStateToProps)(CommunityBizApp);

