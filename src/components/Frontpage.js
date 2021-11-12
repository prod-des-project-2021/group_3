import React, {useEffect} from 'react'
import styles from './frontpage.module.css';
import { Link } from "react-router-dom";
import cowRight from './pictures/cowright.png';

import Section1 from './section1';

export default function Frontpage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className={styles.cowContainer}>
              <img className={styles.cow} alt='helpful cow Mansikki' src={cowRight}></img>
            </div>
            <div className={styles.sections}>
                <Link className={styles.sec} to="/Sec2">Työkyky hyvinvoinnin perustana</Link>
                <Link className={styles.sec} to="/Sec3">Hyvinvoinnin edistäminen ja sen vahvistaminen</Link>
                <Link className={styles.sec} to="/Sec4">Hyvinvoinnin osa-alueet</Link>
                <Link className={styles.sec} to="/Tutorials">Ohjeet</Link>
            </div>
            <Section1/>
        </>
    )
}
