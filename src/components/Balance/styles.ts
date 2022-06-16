import styled from 'styled-components';

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 237px;
  height: 98px;
  border-radius: 10px;
  justify-content: center;
  border: 2px solid #3e79e5;
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

  .title-container {
    display: flex;
    flex-direction: column;

    margin-bottom: 0.3rem;

    .balance-text {
      color: #d3e1f5;
      font-size: 16px;
      align-self: flex-start;
      font-weight: 500;
      margin-bottom: 0.2rem;
      margin-left: 0.7rem;
    }
  }

  .balance-value {
    color: #fff;
    font-weight: 800;
    margin-left: 0.7rem;
    font-size: 32px;
  }

  .small-divider {
    width: 16px;
    height: 2px;

    margin-left: 0.9rem;

    /* Linear */

    background: linear-gradient(77.34deg, #36d9ff 6.16%, #4a00c5 94.12%);
    border-radius: 5px;
  }
`;
