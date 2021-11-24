import React, { useState } from "react";
import styles from './menu.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginModal from "./LoginModal";

export default function Menu(props) {

  const [content, display] = useState("");

  function hideLogin(){
    display("");
  }

  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon className={styles.icons}/>
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        <AccountCircleIcon onClick={()=> display(<LoginModal pass = {props.pass} user = {props.user} conf={props.conf} updateConf = {props.updateConf} updatePass = {props.updatePass} updateUser = {props.updateUser} hideLogin={() => hideLogin()} />)} className={styles.icons}/>
      </div>
      {content}
    </>
  )
}

