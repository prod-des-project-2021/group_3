import React, { useState } from "react";
import styles from './loginModal.module.css';
import Close from '@material-ui/icons/Close';

export default function LoginModal(props) {

  const [logReg, setLogReg] = useState(false);
  const [warnUser, setWarnUser] = useState('');
  const [warnPass, setWarnPass] = useState('');

  function switchLogReg(set) {
    props.logFailToFalse();
    setLogReg(set);
  }

  function register() {
    let username = props.user.toString();
    let password = props.pass.toString();
    let confPassword = props.conf_pass.toString();
    if(username.length > 2) {
      setWarnUser('');
    }else {
      setWarnUser('Käyttäjätunnuksen tulee olla vähintään 3 merkkiä pitkä');
    }
    if(password === confPassword) {
      if (password.length >= 6) {
        setWarnPass('');
        props.onRegister();
      }else {
        setWarnPass('Salasanan tulee olla vähintään 6 merkkiä pitkä');
      }      
    } else {
    setWarnPass('Salasanan ja salasanan vahvistuksen tulevat olla samat');
    }
  }

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.loginBox}>
          <form>
            <Close onClick={() => props.close()} className={styles.hide}/>
            <label>Käyttäjätunnus</label><br/>
            <input maxLength="12" onChange={props.updateUser} id={"username"}/><br/><br/>
            <label>Salasana</label><br/>
            <input type="password" maxLength="50" onChange={props.updatePass} id={"pass"} /><br/><br/>
            {logReg ? 
              <> 
                <label>Salasanan vahvistus</label><br/>
                <input type="password" maxLength="50" onChange={props.updateConf} id={"confirmation"} /><br/><br/>
                <div disabled onClick={register} className={styles.button}>Rekisteröidy</div> <br/>
                <div onClick={()=> switchLogReg(false)} className={styles.register}>Takaisin sisäänkirjautumiseen </div>
                <div className={styles.logFail}>{warnUser}</div>
                <div className={styles.logFail}>{warnPass}</div>
                {props.logFail ? <div className={styles.logFail}>Käyttäjänimi varattu</div> : null}
              </> : 
              <>
                <div onClick={props.onLogin} className={styles.button}>Kirjaudu sisään</div> <br/>
                <div onClick={()=> switchLogReg(true)} className={styles.register}>Luo uusi tili </div>
                {props.logFail ? <div className={styles.logFail}>Tarkista käyttäjänimi sekä salasana</div> : null}
              </> 
            }
          </form>
        </div>
      </div>
    </>
  )
}