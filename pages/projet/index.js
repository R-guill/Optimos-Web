import React from "react";
import "tailwindcss/tailwind.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Body from "../../components/ProjectBody";

export default function Projet() {
  return (
    <div>
      <Head>
        <title>Optimos Web</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/1188/1188086.png"
        />
      </Head>
      <div className="bg-gradient-to-t from-yellow-700">
      <Header />
      <Body/>
      <Footer />
      </div>
      </div>
      
    
  );
}
