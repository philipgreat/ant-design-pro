

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import GroupFilterBizSider from './GroupFilter.sider'
import GroupFilterBizHeader from './GroupFilter.header'

const { Sider, Header, Content, Footer } = Layout;


class GroupFilterBizApp extends Component {
   
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
                 <GroupFilterBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</GroupFilterBizSider>
                       
                <Layout>
                    <GroupFilterBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</GroupFilterBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(GroupFilterBizApp);
export default connect(mapStateToProps)(GroupFilterBizApp);

