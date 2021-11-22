import React, { useState } from "react";
import styles from './loginModal.module.css';



export default function LoginModal(props) {
    let login;
    let register;

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirmation, setConfirmation] = useState('');

    // function compare(){    
    //     console.log("pass is" + pass)
    //     if({pass})
    //     {
    //         if({pass} === {confirmation}){
    //             if({user}){
    //                 /* send to api */
    //                 console.log("success")
    //            }
    //         }
    //         else{
    //             console.log("password does not match")
    //         }
    //     }
    //     else{
    //         // password not given
    //         console.log("no password given")
    //     }
    // }

    login = (
        <div className={styles.modalBackground}>
            <div className={styles.loginBox}>
                <form>
                    <div onClick={() => props.hideLogin()} className={styles.hide}> x </div>
                    <label>Username</label><br/>
                    <input onChange={e => setUser(e.target.value)} id={"username"} /><br/><br/>
                    <label>Password</label><br/>
                    <input onChange={e => setPass(e.target.value)} id={"password"} /><br/><br/>
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
                    <input onChange={e => setUser(e.target.value)} id={"username"} /><br/><br/>
                    <label>Password</label><br/>
                    <input onChange={e => setPass(e.target.value)} id={"password"} /><br/>
                    <label>Confirm Password</label><br/>
                    <input onChange={e => setConfirmation(e.target.value)} id={"confirmation"} /><br/><br/>
                    <div /* onClick={()=> compare()} */> Confirm </div> <br/>
                    <div onClick={()=> display(login)} className={styles.register}> Login </div>
                </form>
            </div>
        </div>
    )

    const [content, display] = useState(login);
    console.log(user)
    console.log(pass)
    console.log(confirmation)

    return (
        <>
        {content}
        </>
    )
}