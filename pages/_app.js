import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps }) => {
  const [ showChild, setShowChild ] = useState(false);

  useEffect(() => {
    setShowChild(true);
    AOS.init();
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Mai Resume</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default App;