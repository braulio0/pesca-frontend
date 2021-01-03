import Head from 'next/head'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'
import Test from './Test.js'

const Home = () => {
  //const url = `http://localhost:8080/solicitante/${user}`;
    return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> Hello </h1>
        <Test users = { 'brauiloelias6@gmail.com' } / >
          <h1> test </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
export default Home;
