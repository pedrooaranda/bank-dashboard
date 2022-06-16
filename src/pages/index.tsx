import type { NextPage } from 'next';
import Head from 'next/head';
import Balance from '../components/Balance';

import { Container, DashboardContainer } from '../styles/pages/Home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Dashboard</title>
    </Head>

    <DashboardContainer>
      <div className="balance-container">
        <div className="header-text">
          <h1>Overview</h1>
        </div>
        <div className="balance">
          <Balance />
        </div>
        <div className="balance">
          <Balance />
        </div>
        <button className="payment-btn" type="button">
          Make a payment
        </button>
      </div>
      <div className="graph-container">
        <span>Money Flow</span>
      </div>
    </DashboardContainer>
  </Container>
);

export default Home;
