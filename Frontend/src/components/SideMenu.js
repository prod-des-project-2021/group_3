import React from 'react'
import { Link } from "react-router-dom";
import styles from './sidemenu.module.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function SideMenu (props) {
    return (
        <>
            <div className={styles.modalBackground}>
                <div className={styles.menubox}>
                    <div className={styles.hide}>

                    <ArrowBackIcon onClick={() => props.hideMenu()}/>
                    </div>
                    <Link className={styles.links} onClick={() => props.hideMenu()} to="/">Etusivu</Link>
                    <Link className={styles.links} onClick={() => props.hideMenu()} to="/Sec2">Työkyky hyvinvoinnin perustana</Link>
                    <Link className={styles.links} onClick={() => props.hideMenu()} to="/Sec3">Omatoiminen hyvnvoinnin edistäminen</Link>
                    <Link className={styles.links} onClick={() => props.hideMenu()} to="/Sec4">Hyvinvoinnin osa-alueet</Link>
                    <Link className={styles.links} onClick={() => props.hideMenu()} to="/Tutorials">Ohjeet</Link>
                </div>
            </div>
        </>
    )
}
