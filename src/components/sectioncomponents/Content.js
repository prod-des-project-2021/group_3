import React from 'react'

import styles from './content.module.css'

export default function Content(props) {
  return (
    <div className={styles.content}>
      {props.text}
    </div>
  )
}
