import React, {useState} from 'react'
import styles from './delete.module.css';

// open new modal when delete account is pressed, api isn't working so need to wait for that for testing
export default function DeleteAccount(props) {

  function handleClick() {
    props.toggleWarning(true);
    props.hideDelete();
  }

  return (
    <div>
      <div className={styles.background} onClick={props.hideDelete}> </div>
      <div className={styles.deletebox}> 
          <div onClick={handleClick} className={styles.delete}> Poista tili </div>
      </div>
    </div>
  )
}
