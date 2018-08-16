import '../sass/index.scss';
import Head from 'next/head';
import Header from '../components/Header.js';
import '../sass/bootstrap/bootstrap.scss';

export default () => (
  <div>
    <Head>
      <title>Keep Academy</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
  </div>
);
