import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Form, Icon, Button, Select } from 'antd';
import i18n from 'i18next';
import { registerAction } from '../../../redux/user/actions';
import MaterialInput from '../../../components/common/MaterialInput/index';
import Wrapper from '../styles';
import logo from '../../../assets/images/logoFull.png';

const FormItem = Form.Item;
const { Option } = Select;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { roleId: 2 };
    this.handleChangeRoleId = this.handleChangeRoleId.bind(this);
  }

  handleChangeRoleId = (e) => {
    this.setState({ roleId: e });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.roleId = Number(this.state.roleId);
        values.phoneNumber = `+84${values.phoneNumber}`;
        this.props.register(values);
      }
    });
  };

  render() {
    const { form, isAuthenticated, registerSuccess } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    if (registerSuccess) {
      return <Redirect to="/verify" />;
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
            {getFieldDecorator('fullName', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.fullName.validateMsg.required'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.fullName.placeholder')}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />
            )}
          </FormItem>
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
              />
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
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('phoneNumber', {
              rules: [
                {
                  required: true,
                  message: i18n.t('input.phone.validateMsg.required'),
                },
              ],
            })(
              <MaterialInput
                placeholder={i18n.t('input.phone.placeholder')}
                prefix={
                  <Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                addonBefore="+84"
              />
            )}
          </FormItem>
          <FormItem>
            <div style={{ marginBottom: '6px' }}>
              <Icon
                type="setting"
                style={{ color: 'rgba(0,0,0,.25)', marginRight: '5px' }}
              />
              Role
            </div>
            <Select defaultValue="2" onChange={this.handleChangeRoleId}>
              <Option value="2">
                <span style={{ fontWeight: 'bold' }}>Creator</span> - Can join,
                create and custom quizzes
              </Option>
              <Option value="3">
                <span style={{ fontWeight: 'bold' }}>Participant</span> - Only
                can join, quizzes
              </Option>
            </Select>
          </FormItem>
          <div className="action-div">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={this.props.isLoading}
            >
              {this.props.isLoading ? '' : i18n.t('register.registerBtn')}
            </Button>
          </div>
          <br />
          <div to="#" className="action-link">
            Already have an account?
            <Link to="/login" className="sign-up-link">
              {i18n.t('register.logIn')}
            </Link>
          </div>
        </Form>
      </Wrapper>
    );
  }
}

Register.propTypes = {
  form: PropTypes.object,
  register: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  registerSuccess: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isShowLoading,
  registerSuccess: state.user.registerSuccess,
});
const mapDispatchToProps = (dispatch) => ({
  register: (params) => {
    dispatch(registerAction(params));
  },
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Form.create()(Register))
);
