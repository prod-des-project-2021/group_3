import React, { useState } from "react";
import styles from './menu.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import LoginModal from "./LoginModal";
import DeleteAccount from "./DeleteAccount";

export default function Menu(props) {

  const [content, display] = useState("");
  const [DeleteBox, remove] = useState("");

  //Removing the login object on screen when pressing x
  function hideLogin(){
    display("");
  }

  function hideDelete(){
    remove("");
  }

  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon className={styles.icons}/>
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        
        <Settings className={ props.loggedIn ? styles.settings : styles.scale0 } 
                  onClick={()=> display(<DeleteAccount hideDelete={() => hideDelete()} />)} />

        <AccountCircleIcon className={ props.loggedIn ? styles.scale0 : styles.icons2 }
                           onClick={()=> display(<LoginModal pass={props.pass} user={props.user} conf={props.conf}
                           updateConf={props.updateConf} updatePass={props.updatePass} updateUser={props.updateUser} 
                           onLogin={props.onLogin} onRegister={props.onRegister} hideLogin={() => hideLogin()} />)} />
        
      </div>
      {content}
      {DeleteBox}
    </>
  )
}

