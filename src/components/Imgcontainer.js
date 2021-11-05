import React from 'react'
import styles from './imgcontainer.module.css'

export default function Imgcontainer(props) {
  return (
    <div className={styles.container}>
      <img alt={props.alt} src={props.imgsrc}></img>
    </div>
  )
}
