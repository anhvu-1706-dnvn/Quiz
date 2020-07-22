import React from 'react';
import { Layout, Input, Button, Icon, Menu, Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import JoinGameContainer from '../../../containers/Game/Join';
import { history } from '../../../redux/store';
import { logout as logoutAction } from '../../../redux/user/actions';
import logo from '../../../assets/images/logoFull.png';
import { JoinGamePageWrapper } from '../styles';

const { Header, Content } = Layout;
const { Search } = Input;

export default function JoinGame() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
    history.push('/login');
  };

  return (
    <JoinGamePageWrapper>
      <Layout className="game-layout">
        <Header className="header">
          <div className="left-section">
            <div className="logo">
              <a href="/join">
                <img alt="" src={logo} className="logo-img" />
              </a>
            </div>
            <div className="search">
              <Search className="input-search" placeholder="Find a quiz" />
            </div>
            <div className="btn-section">
              <Button className="btn-nav nav-active">
                <Icon type="home" />
                Home
              </Button>
              <Button className="btn-nav nav-disable">
                <Icon type="history" />
                Activity
              </Button>
            </div>
          </div>
          <div className="right-section">
            {localStorage.getItem('role') !== 'participant' && (
              <Button className="btn-back" onClick={() => history.push('/')}>
                <Icon type="left-circle" />
                Back to dashboard
              </Button>
            )}
            <Dropdown
              overlay={() => (
                <Menu style={{ minWidth: '120px' }}>
                  <Menu.Item onClick={logout} key="logout">
                    Log out
                  </Menu.Item>
                </Menu>
              )}
              trigger={['click']}
              className="btn-menu"
            >
              <Icon type="menu" />
            </Dropdown>
          </div>
        </Header>
        <Content className="content">
          <JoinGameContainer />
        </Content>
      </Layout>
    </JoinGamePageWrapper>
  );
}
