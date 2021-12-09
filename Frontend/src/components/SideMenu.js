import React, {useState} from 'react'
import { Link } from "react-router-dom";
import styles from './sidemenu.module.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function SideMenu (props) {

  const [animation, setAnimation] = useState(false);

    function reverseAnimation() {
        setAnimation(true);
        setTimeout(() => {props.display("")}, 300);
      }
    return (
        <>
            <div className={styles.modalBackground}>
                <div className={animation ? styles.reverseBox : styles.menubox }>
                    <div className={styles.hide}>
                    <ArrowBackIcon onClick={() => reverseAnimation()}/>
                    </div>
                    <Link className={styles.links} onClick={() => reverseAnimation()} to="/">Etusivu</Link>
                    <Link className={styles.links} onClick={() => reverseAnimation()} to="/Sec2">Työkyky hyvinvoinnin perustana</Link>
                    <Link className={styles.links} onClick={() => reverseAnimation()} to="/Sec3">Omatoiminen hyvnvoinnin edistäminen</Link>
                    <Link className={styles.links} onClick={() => reverseAnimation()} to="/Sec4">Hyvinvoinnin osa-alueet</Link>
                    <Link className={styles.links} onClick={() => reverseAnimation()} to="/Tutorials">Ohjeet</Link>
                    <Link className={styles.links} onClick={() => reverseAnimation()} to='/Lahteet'>Lähteet</Link>
                    <Link className={styles.links} onClick={() => reverseAnimation()} to='/Vuosikello'>Vuosikello</Link>
                    <div className={styles.infortexxt}>Emme kerää mitään muita tietoja, kuin käyttäjänimi, salasana sekä vuosikelloon itse tekemäsi muutokset. Voit poistaa tallennetut tiedot, poistamalla tilisi.</div>
                </div>
            </div>
        </>
    )
}
