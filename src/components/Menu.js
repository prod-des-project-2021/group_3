import React from "react";
import styles from './menu.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function menu(props) {
  return (
    <>
      <div className={styles.menu}> 
        <MenuIcon style={{'marginLeft': '2vw'}}/>
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        <AccountCircleIcon style={{'marginRight': '2vw'}}/>
      </div>
    </>
  )
}

