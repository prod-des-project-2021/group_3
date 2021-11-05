import React from 'react'

import styles from './subtitle.module.css';

export default function Subtitle(props) {
  return (
    <div className={styles.subtitle}>
      {props.text}
    </div>
  )
}
