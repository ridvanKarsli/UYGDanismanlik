import React from "react";
import {  Main, MainFeatures, OurReferences, VisitorStatement } from "@components";
import SloganArea from "@components/sloganArea/intex";
import Blog from "@components/Blog";
import Activities from "@components/activities";
import Head from 'next/head'
import Hizmetler from "@components/boxes";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="og:title" content="UYG Danışmanlık Danışmanlık" key="title" />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    <div
      style={{ display: "flex",overflow:'hidden', flexDirection: "column", minHeight: "100vh" }}
    >
      <Main />
      <Hizmetler />
      <VisitorStatement />
      <MainFeatures />
      <OurReferences />
      <SloganArea />
      <Activities />
    </div>
    </>
  );
};

export default Home;
