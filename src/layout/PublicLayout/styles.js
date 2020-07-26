import styled from 'styled-components';
// import loginBackground from '../../assets/images/login_background.jpg';

const PublicLayoutWrapper = styled.div`
  .layout {
    height: 100vh;
  }

  .main-img {
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
  }

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .main-content {
    padding: 40px 40px;
    text-align: center;
    min-width: 450px;
    width: auto;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
    @media only screen and (max-width: 500px) {
      min-width: 320px;
      width: 100%;
    }
  }
`;

export default PublicLayoutWrapper;
