import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 4rem;

  display: flex;
  flex-direction: column;
  background-color: #050624;
`;

export const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 800;
  }

  .balance-container {
    display: flex;
    flex-direction: column;
  }

  .header-text {
    padding-bottom: 1.6rem;
  }

  .balance {
    padding-bottom: 1.2rem;
  }

  .payment-btn {
    justify-content: center;
    align-items: center;
    border: none;

    width: 237px;
    height: 35px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: #ffffff;

    background: linear-gradient(90deg, #3e79e5 0%, #01b8e3 100%);
    border-radius: 10px;
  }

  .graph-container {
    box-sizing: border-box;
    width: 535px;
    height: 277px;

    margin-left: 2rem;
    margin-top: 3.6rem;

    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: linear-gradient(
        0deg,
        rgba(250, 251, 252, 0.1),
        rgba(250, 251, 252, 0.1)
      ),
      linear-gradient(
        90deg,
        rgba(240, 240, 240, 0.2) 0%,
        rgba(240, 240, 240, 0) 100%
      );
    border: 2px solid #4b6eac;
    border-radius: 10px;
  }
`;
