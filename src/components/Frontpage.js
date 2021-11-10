import React, {useEffect} from 'react'
import styles from './frontpage.module.css';
import { Link } from "react-router-dom";

import Section1 from './section1';

export default function Frontpage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className={styles.sections}>
                <div className={styles.sec}>
                    <Link to="/Sec2">Työkyky hyvinvoinnin perustana</Link>
                </div>      
                <div className={styles.sec}>
                    <Link to="/Sec3">Hyvinvoinnin ennaltaehkäiseminen ja sen vahvistaminen</Link>
                </div>
                <div className={styles.sec}>
                    <Link to="/Sec4">Hyvinvoinnin osa-alueet</Link>
                </div>      
            </div>
            <Section1/>
        </>
    )
}
