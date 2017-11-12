

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import GroupPageBizSider from './GroupPage.sider'
import GroupPageBizHeader from './GroupPage.header'

const { Sider, Header, Content, Footer } = Layout;


class GroupPageBizApp extends Component {
   
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
                 <GroupPageBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</GroupPageBizSider>
                       
                <Layout>
                    <GroupPageBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</GroupPageBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(GroupPageBizApp);
export default connect(mapStateToProps)(GroupPageBizApp);

