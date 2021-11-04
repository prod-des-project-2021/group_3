import React from 'react'
import styles from './imgcontainer.module.css'

export default function Imgcontainer(props) {
  return (
    <div className={styles.container}>
      <img src={props.imgsrc}></img>
    </div>
  )
}
