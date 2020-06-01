import styled from 'styled-components';
// import loginBackground from '../../assets/images/login_background.jpg';

const PublicLayoutWrapper = styled.div`
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center  
  }

  .main-img {
    background-image: url(https://previews.123rf.com/images/ashasha/ashasha1904/ashasha190401291/122953956-question-marks-scattered-on-white-background-quiz-doubt-poll-survey-faq-interrogation-query-backgrou.jpg);
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
  }
  
  .main-content {
    background-color: none;
    padding: 70px 50px;
    text-align: center;
    min-width: 450px;
    width: auto;
    @media only screen and (max-width: 500px) {
      min-width: 320px;
      width: 100%;
    }
  }
`;

export default PublicLayoutWrapper;
