import React from "react";
import styles from './menu.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function menu(props) {
  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon style={{'margin-left': '2vw'}}/>
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        <AccountCircleIcon style={{'margin-right': '2vw'}}/>
      </div>
    </>
  )
}

