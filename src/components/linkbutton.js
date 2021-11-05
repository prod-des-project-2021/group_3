import React from 'react'

import styles from './linkbutton.module.css'

function openLink(link) {
  window.open(link);
}

export default function linkbutton(props) {
  return (
    <div className={styles.button} onClick={() => openLink(props.link)}>
      {props.buttonText}
    </div>
  )
}
