import React from 'react'
import styles from './title.module.css'

export default function Title(props) {
  return (
    <>
        <div className={props.sub ? styles[props.sub] : styles.title}>{props.title}</div>
    </>
  )
}
