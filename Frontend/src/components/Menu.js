import React, { useState } from "react";
import styles from './menu.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginModal from "./LoginModal";
import SideMenu from "./SideMenu";

export default function Menu(props) {

  const [content, display] = useState("");

  //Removing the login object on screen when pressing x
  function hideLogin(){
    display("");
  }
  function hideMenu(){
    display("");
  }
  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon onClick={() => display(<SideMenu hideMenu={() => hideMenu()}/>)} className={styles.icons} />
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        <AccountCircleIcon onClick={()=> display(<LoginModal pass={props.pass} user={props.user} conf={props.conf}
                           updateConf={props.updateConf} updatePass={props.updatePass} updateUser={props.updateUser} 
                           onLogin={props.onLogin} onRegister={props.onRegister} hideLogin={() => hideLogin()} />)} className={styles.icons}/>
      </div>
      {content}
    </>
  )
}

