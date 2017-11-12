

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import ObjectAccessBizSider from './ObjectAccess.sider'
import ObjectAccessBizHeader from './ObjectAccess.header'

const { Sider, Header, Content, Footer } = Layout;


class ObjectAccessBizApp extends Component {
   
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
                 <ObjectAccessBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</ObjectAccessBizSider>
                       
                <Layout>
                    <ObjectAccessBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</ObjectAccessBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(ObjectAccessBizApp);
export default connect(mapStateToProps)(ObjectAccessBizApp);

