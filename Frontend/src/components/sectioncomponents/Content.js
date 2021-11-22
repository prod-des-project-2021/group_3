import React from 'react'

import styles from './content.module.css'

export default function Content(props) {
  var content = props.text
  if (props.start) {
    content = <><b>{props.start}</b> {props.text}</>
  }
  return (
    <div className={styles.content}>
      {content}
    </div>
  )
}
