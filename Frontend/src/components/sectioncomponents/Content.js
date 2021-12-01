import React from 'react'

import styles from './content.module.css';

export default function Content(props) {

  return (
    <div className={styles.content}>
      {props.start && <b>{props.start}</b>}
      {props.text}
      {props.link && <a href={props.link} target='_blank' rel='noreferrer' className={styles.link} >{props.link}</a>}
    </div>
  )
}