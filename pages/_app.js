import React, { useEffect } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;