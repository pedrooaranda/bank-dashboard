import { NextPage } from 'next';
import { BalanceContainer } from './styles';

const Balance: NextPage = () => (
  <BalanceContainer>
    <div className="title-container">
      <span className="balance-text"> Total Balance</span>
      <div className="small-divider" />
    </div>
    <span className="balance-value">$25,00</span>
  </BalanceContainer>
);

export default Balance;
