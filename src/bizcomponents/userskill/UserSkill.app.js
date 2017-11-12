

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { Layout } from 'antd';
import '../../style/index.less';

import UserSkillBizSider from './UserSkill.sider'
import UserSkillBizHeader from './UserSkill.header'

const { Sider, Header, Content, Footer } = Layout;


class UserSkillBizApp extends Component {
   
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
                 <UserSkillBizSider path={this.props.location.pathname} collapsed={this.state.collapsed}>left sidebar</UserSkillBizSider>
                       
                <Layout>
                    <UserSkillBizHeader collapsed={this.state.collapsed} toggle={this.toggle}>header</UserSkillBizHeader>
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

//export default connect(mapStateToProps, mapDispatchToProps)(UserSkillBizApp);
export default connect(mapStateToProps)(UserSkillBizApp);

