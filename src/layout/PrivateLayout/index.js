/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/named */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Layout, Menu, Icon, Dropdown, Avatar, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import PrivateLayoutWrapper from './styles';
import SideBarMenu from './SideBarMenu/index';
import { logout as logoutAction } from '../../redux/user/actions';
import logo from '../../assets/images/logo.png';
import logoFull from '../../assets/images/logoFull.png';
import { history } from '../../redux/store';

const { Header, Sider, Content } = Layout;

const profileMenu = [];

// const mobileTabs = [];

class PrivateLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {
    this.props.isAuthenticated && push('/login');
  }

  toggle = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { children, logout, isAuthenticated, fullName, avatar } = this.props;
    const path = window.location.pathname;
    const role = localStorage.getItem('role')
    if (!isAuthenticated) return <Redirect to="/login" />;
    return (
      <PrivateLayoutWrapper>
        <Layout className="windowView">
          <input
            onChange={() => {}}
            id="collapsedTracker"
            type="checkbox"
            checked={!this.state.collapsed}
          />
          <label
            htmlFor="collapsedTracker"
            className="overlay"
            onClick={this.toggle}
          />
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            className="sidebar"
          >
            <div className="logo">
              <div
                className={
                  this.state.collapsed === true
                    ? 'logo-image'
                    : 'logo-image-full'
                }
              >
                <a href="/">
                  <img
                    alt=""
                    src={this.state.collapsed === true ? logo : logoFull}
                    className="logo-img"
                  />
                </a>
              </div>
            </div>
            <div className="sidebar-btn-create-wrapper">
              {role === 'admin'? '' : !this.state.collapsed ? (
                <Button
                  className="create-quiz-button"
                  onClick={() => history.push('/create-quizzes')}
                >
                  <Icon type="plus-circle" />
                  <span>Create a new quizz</span>
                </Button>
              ) : (
                <Icon
                  type="plus-circle"
                  onClick={() => history.push('/create-quizzes')}
                />
              )}
            </div>
            <SideBarMenu />
          </Sider>
          <Layout className="mainView">
            {path === '/create-quizzes' ? (
              <Header className="header">
                <div className="leftHeader">
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                </div>
                <div className="btn-section">
                  <Button
                    className="btn-exit"
                    onClick={() => {
                      history.push('/');
                    }}
                  >
                    Exit
                  </Button>
                  <Button
                    className="btn-done"
                    onClick={() => {
                      history.push('/');
                    }}
                  >
                    Done
                  </Button>
                </div>
                <div className="rightHeader">
                  <Dropdown
                    overlay={() => (
                      <Menu style={{ minWidth: '120px' }}>
                        {profileMenu.map((menu) => (
                          <Menu.Item key={menu.key}>
                            <a href={menu.url}>{menu.text}</a>
                          </Menu.Item>
                        ))}
                        <Menu.Divider />
                        <Menu.Item onClick={logout} key="logout">
                          Log out
                        </Menu.Item>
                      </Menu>
                    )}
                    trigger={['click']}
                  >
                    <div>
                      <Avatar size="large" src={avatar} />
                      {'   '}
                      <span>
                        Hi,
                        {fullName}
                      </span>
                    </div>
                  </Dropdown>
                </div>
              </Header>
            ) : (
              <Header className="header">
                
                <div className="leftHeader">
                  {role === 'admin'? '' : (
                    <div>
                      <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                      />
                      <Button
                        className="create-quiz-button"
                        onClick={() => history.push('/create-quizzes')}
                        >
                        <PlusCircleFilled />
                        <span>Create a new quizz</span>
                      </Button>
                    </div>
           
                    )}

                </div>
                    
                
                <div className="rightHeader">
                  {role === 'admin'? '' : (
                    <Button
                      className="btn-join"
                      onClick={() => history.push('/join')}>
                      Join a game
                    </Button>
                )}
                  <Dropdown
                    overlay={() => (
                      <Menu style={{ minWidth: '120px' }}>
                        {profileMenu.map((menu) => (
                          <Menu.Item key={menu.key}>
                            <a href={menu.url}>{menu.text}</a>
                          </Menu.Item>
                        ))}
                        <Menu.Divider />
                        <Menu.Item onClick={logout} key="logout">
                          Log out
                        </Menu.Item>
                      </Menu>
                    )}
                    trigger={['click']}
                  >
                    <div>
                      <Avatar size="large" src={avatar} />
                      {'   '}
                      <span>
                        Hi,
                        {fullName}
                      </span>
                    </div>
                  </Dropdown>
                </div>
              </Header>
            )}

            <Content className="container">
              <div className="content">{children}</div>
              {/* <Footer className="footer">{I18n.t("appInfo.footer")}</Footer> */}
            </Content>
            {/* <Footer className="footerMobile">
              {mobileTabs.map(tab => (
                <a href={tab.url} key={tab.key}>
                  <Icon type={tab.icon} className="tabIcon" />
                </a>
              ))}
            </Footer> */}
          </Layout>
        </Layout>
      </PrivateLayoutWrapper>
    );
  }
}

PrivateLayout.propTypes = {
  children: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func,
};

export default connect(
  (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    fullName: state.user.data.fullName,
    avatar: state.user.data.avatar,
  }),
  {
    logout: logoutAction,
  },
)(PrivateLayout);
