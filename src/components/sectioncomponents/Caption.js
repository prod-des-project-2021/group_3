import React from 'react'

import styles from './caption.module.css'

export default function Caption(props) {
  return (
    <div className={styles.caption}>
      {props.text}
    </div>
  )
}
