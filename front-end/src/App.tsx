import React from 'react';
import styles from './App.module.css';
import {Body} from './components/Body/Body';
import {Header} from './components/Header/Header';

export default function App() {
  return (
    <div className={styles.Wrapper}>
        <Header/>
        <Body/>
    </div>
  );
}

