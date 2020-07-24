/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Form, Icon, Button, Checkbox } from 'antd';
import i18n from 'i18next';
import { loginAction } from '../../../redux/user/actions';
import MaterialInput from '../../../components/common/MaterialInput/index';
import Wrapper from '../styles';
import logo from '../../../assets/images/logoFull.png';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  };

  render() {
    const { form, isAuthenticated } = this.props;
    const role = localStorage.getItem('role')
   
    if (isAuthenticated) {
      if(role=== 'admin') {
        return <Redirect to="/admin" />;
      }
      return <Redirect to="/" />;
    }
   
    const { getFieldDecorator } = form;
    return (
      <Wrapper>
        <div className="title">
          <img alt="#" src={logo} />
        </div>
        <br />
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.email.validateMsg.required'),
                },
                {
                  type: 'email',
                  message: i18n.t('input.email.validateMsg.format'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.email.placeholder')}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.password.validateMsg.required'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.password.placeholder')}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
              />,
            )}
          </FormItem>
          <div className="sub-action-div">
            <Checkbox>{i18n.t('login.rememberMe')}</Checkbox>
            {/* <a className="login-form-forgot" href="/forgot-password">
              {i18n.t("forgotPassword.title")}
            </a> */}
          </div>
          <div className="action-div">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={this.props.isLoading}
            >
              {this.props.isLoading ? '' : i18n.t('login.loginBtn')}
            </Button>
          </div>
          <br />
          <div to="#" className="action-link">
            Don't have an account?
            <Link to="/register" className="sign-up-link">
              {i18n.t('login.signUp')}
            </Link>
          </div>
        </Form>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isShowLoading,
});
const mapDispatchToProps = (dispatch) => ({
  login: (params) => {
    dispatch(loginAction(params));
  },
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login)),
);
