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
  const [login, toggleLogin] = useState(false);

  function close(){
    toggleLogin(false);
    props.logFailToFalse();
  }

   //Removing the delete account object on screen when pressing anything else
  function hideDelete(){
    del("");
  }

  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon onClick={() => display(<SideMenu display={display}/>)} className={styles.icons} />
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        
        <Settings className={ props.loggedIn ? styles.settings : styles.scale0 } 
                  onClick={()=> del(<DeleteAccount toggleWarning={toggleWarning} hideDelete={() => hideDelete()} onDelete={props.onDelete} />)} />

        <AccountCircleIcon className={ props.loggedIn ? styles.scale0 : styles.icons2 }
                           onClick={()=> toggleLogin(true)}/>                    
        {login && <LoginModal logFailToFalse={()=>props.logFailToFalse()} logFail={props.logFail} pass={props.pass} user={props.user} conf_pass={props.conf_pass}
          updateConf={props.updateConf} updatePass={props.updatePass} updateUser={props.updateUser} 
          onLogin={props.onLogin} onRegister={props.onRegister} close={close} toggleLogin={() => toggleLogin} />}
        <Warning deleteActivity={props.onDelete} showWarning={showWarning} toggleWarning={toggleWarning} warning='Haluatko varmasti poistaa tilisi ja vuosikellon pysyvästi?'/>
        
      </div>
      {content}
      {DeleteBox}
    </>
  )
}

