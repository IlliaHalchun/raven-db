import React from 'react';
import styles from './App.module.css';
import {Body} from './components/Body/Body';
import {Header} from './components/Header/Header';
import {useTypedSelector} from './redux/store';

export default function App() {
    
    const isModalOpen = useTypedSelector(state => state.general.isModalOpen)

    return (
        <div className={styles.Wrapper}>
            <Header/>
            <Body/>
        </div>
    );
}

