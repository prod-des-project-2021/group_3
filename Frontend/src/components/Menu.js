import React, { useState } from "react";
import styles from './menu.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import LoginModal from "./LoginModal";
import DeleteAccount from "./DeleteAccount";
import SideMenu from "./SideMenu";
import Warning from './Warning.js';

export default function Menu(props) {

  const [content, display] = useState("");
  const [DeleteBox, del] = useState("");
  const [showWarning, toggleWarning] = useState(false);

  function close(){
    props.toggleLogin(false);
    props.logFailToFalse();
  }

   //Removing the delete account object on screen when pressing anything else
  function hideDelete(){
    del("");
  }

  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon onClick={() => display(<SideMenu display={display}/>)} className={styles.leftIcon} />
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        
        {props.loggedIn ? <Settings className={styles.rightIcon} 
                  onClick={()=> del(<DeleteAccount toggleWarning={toggleWarning} hideDelete={() => hideDelete()} onDelete={props.onDelete} />)} />
 :
        <AccountCircleIcon className={styles.rightIcon }
                           onClick={()=> props.toggleLogin(true)}/>     }                
        {props.showLogin && <LoginModal showLogin={props.showLogin} logFailToFalse={()=>props.logFailToFalse()} logFail={props.logFail} pass={props.pass} user={props.user} conf_pass={props.conf_pass}
          updateConf={props.updateConf} updatePass={props.updatePass} updateUser={props.updateUser} 
          onLogin={props.onLogin} onRegister={props.onRegister} close={close} toggleLogin={() => props.toggleLogin()} />}
        <Warning deleteActivity={props.onDelete} showWarning={showWarning} toggleWarning={toggleWarning} warning='Haluatko varmasti poistaa tilisi ja vuosikellon pysyvästi?'/>
      </div>
      {content}
      {DeleteBox}
    </>
  )
}

