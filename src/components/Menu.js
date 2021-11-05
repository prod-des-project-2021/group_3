import React from "react";
import styles from './menu.module.css';

export default function menu(props) {
  return (
    <>
      <div className={styles.menu}> 
        <img alt='menu icon' className = {styles.hamIcon}></img>
        <div className = {styles.menuTitle}>Hyvinvoiva maaseutu</div>
        <div className={styles.icon}> icon </div>
      </div>
      <div className={styles.sections}>
        <div className={styles.sec1}>section 1</div>
        <div className={styles.sec2}>section 2</div>
        <div className={styles.sec3}>section 3</div>
        <div className={styles.sec4}>section 4</div>
      </div>
    </>
  )
}

