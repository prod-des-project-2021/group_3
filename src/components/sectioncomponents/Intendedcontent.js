import React from 'react'

import styles from './intendedcontent.module.css';
import Linkbutton from './linkbutton';

export default function Intendedcontent(props) {
  var content = props.text
  if (props.link) {
    content = 
    <>
      {props.text}<br/>
      <Linkbutton buttonText={props.buttonText} link={props.link}/>
    </> 
  }
  return (
    <div className={styles.container}>
      {content}
    </div>
  )
}
