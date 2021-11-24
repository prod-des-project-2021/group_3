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
                    <label>Username</label><br/>
                    <input onChange={props.updateUser} id={"username"} /><br/><br/>
                    <label>Password</label><br/>
                    <input onChange={props.updatePass} id={"pass"} /><br/><br/>
                    <div onClick={()=> display(register)} className={styles.register}> Register </div>
                </form>
            </div>
        </div>
    )

    register = (
        <div className={styles.modalBackground}>
            <div className={styles.loginBox}>
                <form>
                    <label>Username</label><br/>
                    <input onChange={props.updateUser} id={"username"}/><br/><br/>
                    <label>Password</label><br/>
                    <input onChange={props.updatePass} id={"pass"} /><br/><br/>
                    <label>Confirm Password</label><br/>
                    <input onChange={props.updateConf} id={"confirmation"} /><br/><br/>

                    <div> Confirm </div> <br/>
                    <div onClick={()=> display(login)} className={styles.register}> Login </div>
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