import React from 'react';
import styles from './App.module.css';
import {Body} from './components/Body/Body';
import {Header} from './components/Header/Header';
import {ModalConductor} from './components/ModalConductor/ModalConductor';
import {useTypedSelector} from './redux/store';

export default function App() {
    
    const modalType = useTypedSelector(state => state.general.modal)

    return (
        <div className={styles.Wrapper}>
            <Header/>
            <Body/>
            <ModalConductor modalType={modalType}/>
        </div>
    );
}

