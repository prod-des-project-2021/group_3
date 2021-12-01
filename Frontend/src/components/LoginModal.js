import React, { useState } from "react";
import styles from './loginModal.module.css';

export default function LoginModal(props) {
    let login;
    let register;

    login = (
        <div className={styles.modalBackground}>
            <div className={styles.loginBox}>
                <form>
                    <div onClick={() => props.hideLogin()} className={styles.hide}> x </div>
                    <label>Käyttäjätunnus</label><br/>
                    <input maxlength="12" onChange={props.updateUser} id={"username"} /><br/><br/>
                    <label>Salasana</label><br/>
                    <input type="password" maxlength="50" onChange={props.updatePass} id={"pass"} /><br/><br/>
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
                    <div onClick={() => props.hideLogin()} className={styles.hide}> x </div>
                    <label>Käyttäjätunnus</label><br/>
                    <input maxlength="12" onChange={props.updateUser} id={"username"}/><br/><br/>
                    <label>Salasana</label><br/>
                    <input type="password" maxlength="50" onChange={props.updatePass} id={"pass"} /><br/><br/>
                    <label>Salasanan vahvistus</label><br/>
                    <input type="password" maxlength="50" onChange={props.updateConf} id={"confirmation"} /><br/><br/>
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