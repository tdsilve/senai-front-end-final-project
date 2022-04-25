import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

export default function Home() {
  //Set the default background color
  useEffect(() => {
    document.body.style.backgroundColor = '#00c1b5';
  },[])
  return (
    <>
      <Head>
        <title>Backstage Talks</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
