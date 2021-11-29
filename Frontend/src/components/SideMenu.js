import React from 'react'
import { Link } from "react-router-dom";
import Frontpage from './Frontpage';
import styles from './loginModal.module.css';

export default function SideMenu (props) {
    return (
        <>
            <div className={styles.modalBackground}>
                <div className={styles.loginBox}>
                    <div onClick={() => props.hideMenu()} className={styles.hide}> x </div>
                    {/* <Link className={styles.button} to="/Sec2">testing</Link> */}
                    <Link to="/Sec2">Työkyky hyvinvoinnin perustana</Link>
                    <Link to="/Sec3">Omatoiminen hyvnvoinnin edistäminen</Link>
                    <Link to="/Sec4">Hyvinvoinnin osa-alueet</Link>
                    <Link to="/Tutorials">Ohjeet</Link>
                </div>
            </div>
        </>
    )
}
