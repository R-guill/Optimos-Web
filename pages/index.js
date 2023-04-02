import React from 'react';
import Quizselection from "../components/Quizselection";
import 'tailwindcss/tailwind.css';
import Footer
 from '../components/Footer';
 import Head from 'next/head';
 import Header from '../components/Header';
 
export default function Home() {
  return (
    <div>
      <Head>
        <title>Optimos Web</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/1188/1188086.png"/>
      </Head>
      


    <div className="bg-gradient-to-t from-yellow-700">
      <Header />
      <Quizselection />
      <Footer />
    </div>
    </div>
    
  );
}