import React, { useState } from "react";
import styles from './loginModal.module.css';
import Close from '@material-ui/icons/Close';

export default function LoginModal(props) {
    let login;
    let register;

    login = (
        <div className={styles.modalBackground}>
            <div className={styles.loginBox}>
                <form>
                    <Close onClick={() => props.hideLogin()} className={styles.hide}/>
                    <label>Käyttäjätunnus</label><br/>
                    <input maxLength="12" onChange={props.updateUser} id={"username"} /><br/><br/>
                    <label>Salasana</label><br/>
                    <input type="password" maxLength="50" onChange={props.updatePass} id={"pass"} /><br/><br/>
                    <div onClick={props.onLogin} className={styles.button}>Kirjaudu sisään</div> <br/>
                    <div onClick={()=> display(register)} className={styles.register}>Luo uusi tili </div>
                </form>
            </div>
        </div>
    )

    register = (
        <div className={styles.modalBackground}>
            <div className={styles.loginBox}>
                <form>
                    <Close onClick={() => props.hideLogin()} className={styles.hide}/>
                    <label>Käyttäjätunnus</label><br/>
                    <input maxLength="12" onChange={props.updateUser} id={"username"}/><br/><br/>
                    <label>Salasana</label><br/>
                    <input type="password" maxLength="50" onChange={props.updatePass} id={"pass"} /><br/><br/>
                    <label>Salasanan vahvistus</label><br/>
                    <input type="password" maxLength="50" onChange={props.updateConf} id={"confirmation"} /><br/><br/>
                    <div onClick={props.onRegister} className={styles.button}>Rekisteröidy</div> <br/>
                    <div onClick={()=> display(login)} className={styles.register}>Takaisin sisäänkirjautumiseen </div>
                </form>
            </div>
        </div>
    )

    const [content, display] = useState(login);

    return (
        <>
        {content}
        </>
    )
}