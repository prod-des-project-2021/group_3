import React from "react";
import styles from './menu.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function menu(props) {
  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon className={styles.icons}/>
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        <AccountCircleIcon className={styles.icons}/>
      </div>
    </>
  )
}

