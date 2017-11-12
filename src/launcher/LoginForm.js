import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import { Layout } from 'antd';

const { Content, Footer } = Layout;

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const dispatch = this.props.dispatch;
                const username = values.username;
                const password = values.password;
                
                dispatch({type:"launcher/login", payload:{...values} });
            }
        });



    };
    render() {
        const { getFieldDecorator } = this.props.form;
        //console.log("what the type",getFieldDecorator );
        return (
           
    <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>跨境供应链管理系统</span>
                    </div>
            <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                        登录
                    </Button>
                    
                </FormItem>
            </Form>
            </div></div>
        );
    }
}

const LoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = state => {   
    return state;
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators({}, dispatch)
});

//export default connect(mapStateToProps, mapDispatchToProps)(UserSkillBizApp);
export default connect(mapStateToProps)(LoginForm);



