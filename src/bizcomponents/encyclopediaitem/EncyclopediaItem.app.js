

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import EncyclopediaItemBizSider from './EncyclopediaItem.sider'
import EncyclopediaItemBizHeader from './EncyclopediaItem.header'

const { Sider, Header, Content, Footer } = Layout;


class EncyclopediaItemBizApp extends Component {
   
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
                 <EncyclopediaItemBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</EncyclopediaItemBizSider>
                       
                <Layout>
                    <EncyclopediaItemBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</EncyclopediaItemBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(EncyclopediaItemBizApp);
export default connect(mapStateToProps)(EncyclopediaItemBizApp);

