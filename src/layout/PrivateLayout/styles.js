import styled from 'styled-components';

const PrivateLayoutWrapper = styled.div`
  .windowView {
    height: 100vh;
  }
  .mainView {
    height: 100vh;
    margin-left: 80px;
    overflow: hidden;
    transition: all 0.3s ease 0s;
    background: ${({ theme }) => theme.background.container};
  }
  .container {
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
  .content {
    padding: 34px 20px;
    flex: 1;
    ${
      '' /* @media only screen and (max-width: 430px) {
      padding-top: 80px;
    } */
    }
  }
  .trigger {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    color: #fff;

    &:hover {
      color: ${({ theme }) => theme.palette.lightPrimary};
    }
    @media only screen and (max-width: 430px) {
      color: ${({ theme }) => theme.palette.primary};
    }
  }

  .sidebar-btn-create-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 90px;
    color: ${({ theme }) => theme.palette.primary};
    .create-quiz-button {
      color: ${({ theme }) => theme.palette.primary};
      border: 1px solid #E5E5E5;
      &:hover {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
        transform: translateY(-2px);
      }
    }
  }

  .triggerMobile {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary};
    transition: color 0.3s;
    position: fixed;
    top: 0px;
    left: 20px;
    z-index: 2;
    display: none;
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    @media only screen and (max-width: 430px) {
      display: block;
    }
  }
  
  .logo {
    position: absolute;
    width: 100%;
    height: 64px;
    left: 0px;
    top: 0px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px;
  }
  .logo-image {
    position: absolute;
    width: auto;
    height: auto;
    overflow: hidden;
  }
  .logo-image-full {
    position: absolute;
    width: auto;
    height: auto;
    //background: rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .logo a {
    width: 100%;
    heigth: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .logo h2 {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 0 12px;
  }
  .logo-img  {
    height: 40px;
    display: inline-block;
  }
  .logo h2 {
    color: ${({ theme }) => theme.palette.lightPrimary};
    font-weight: 700;
  }
  .sidebar {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    left: 0;
    background: #fff;
    border-right: 1px solid #e8e8e8;

    .sidebarMenu{
      margin-top: 30px;
    }
    .ant-menu {
      border-right: 1px solid #fff;
      .ant-menu-submenu-title:hover {
        color: ${({ theme }) => theme.palette.lightPrimary};
      }
      .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::before{
        background: ${({ theme }) => theme.palette.lightPrimary};
      }
      .ant-menu-submenu-title:hover > .ant-menu-submenu-arrow::after{
        background: ${({ theme }) => theme.palette.lightPrimary};
      }

      .ant-menu-submenu-selected {
        // color: ${({ theme }) => theme.palette.lightPrimary};
      }
    }
    .ant-menu-item {
      color: ${({ theme }) => theme.text.secondary};
      
      
      &.ant-menu-item-selected {
        color: ${({ theme }) => theme.palette.primary};
        // background: ${({ theme }) => theme.background.light};
        border-left: solid;
        & > span {
          color: ${({ theme }) => theme.text.lightPrimary};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
      }
      
    }
    .ant-menu-item::after {
      border-right: none;
    }
  }
  

  .header {
    position: 'fixed';
    z-index: 1;
    background: #00588D;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease 0.2s;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    @media only screen and (max-width: 430px) {
      display: inherit;
    }

    .btn-section {
      width: 56%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .btn-exit {
        min-width: 84px;
        background-color: #00639f;
        margin-right: 16px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        color: #fff;
        padding: 0 12px;
        height: 44px;
        font-size: 16px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        &:hover {
          background-color: ${({ theme }) => theme.palette.primary};
        }
        
      }
      .btn-done {
        min-width: 120px;
        text-align: center;
        background-color: #FFFFFF;
        color: #292A3A;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        padding: 0 12px;
        height: 44px;
        font-size: 16px;
        text-transform: uppercase;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover {
          box-shadow: 0 1px 2px rgba(0,0,0,0.45);
        }
      }
    }
    .leftHeader {
      @media only screen and (max-width: 430px) {
        width: 100%;
        display: inherit;
        padding-right: 45px;
      }
      .create-quiz-button {
        margin-left: 20px;
        color: white;
        background-color: ${({ theme }) => theme.palette.boldPrimary}
        border-color: ${({ theme }) => theme.palette.boldPrimary}
        &:hover {
          background-color: ${({ theme }) => theme.palette.boldestPrimary}
          border-color: ${({ theme }) => theme.palette.boldestPrimary}
        }
      }
    }
    .rightHeader {
      cursor: pointer;
      color: #fff;
      @media only screen and (max-width: 430px) {
        display: none;
      }
    }
    .title {
      display: none;
      opacity: 0;
      transition: opacity 0.3s;
      text-align: center;
      @media only screen and (max-width: 430px) {
        opacity: 1;
        display: inline-block;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 500;
        width: 100%;
      }
    }

    & .ant-avatar-lg.ant-avatar-icon {
      .anticon {
        font-size: 24px;
      }
    }
    ${
      '' /* @media only screen and (max-width: 430px) {
      margin-top: -80px;
    } */
    }
  }

  .mainContent {
    padding: 20px;
    background: #fff;
    min-height: 280;
  }

  .footer {
    text-align: center;
    @media only screen and (max-width: 430px) {
      display: none;
    }
  }
  #collapsedTracker {
    width: 0px;
    height: 0px;
    position: absolute;
  }
  #collapsedTracker:checked ~ .sidebar {
  }

  #collapsedTracker:checked ~ .mainView {
    margin-left: 200px !important;
  }
  @media only screen and (max-width: 430px) {
    .sidebar {
      left: -80px;
      position: fixed;
      z-index: 9999;
    }
    .mainView {
      margin-left: 0px;
      z-index: 1;
    }
    .overlay {
      z-index: 9998;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.5);
      transition: all 0.5s ease 0s;
    }
    #collapsedTracker:checked ~ .sidebar {
      left: 0px;
    }

    #collapsedTracker:checked ~ .mainView {
      margin-left: 0px !important;
      z-index: 1;
    }
    #collapsedTracker:checked ~ .overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .footerMobile {
    position: fixed;
    height: 60px;
    left: 0px;
    right: 0px;
    bottom: -60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease 0.2s;
    a {
      text-align: center;
      flex: 1;
    }
    .tabIcon {
      font-size: 25px;
    }
    @media only screen and (max-width: 430px) {
      bottom: 0px;
    }
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${({ theme }) => theme.scrollbar.thumb} !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.scrollbar.track} !important;
  }
`;

export default PrivateLayoutWrapper;
