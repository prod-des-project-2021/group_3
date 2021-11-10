import React from 'react'
import styles from './month.module.css';
import Star from '@material-ui/icons/Star';


export default function month(props) {

  var output = <></>
  if (props.tasks) {
    output =      
      <div>
        {props.tasks.map(task => (
          <div className={`${styles.task} ${styles[task.category]}`}>{task.task} <span className={styles.info}>{task.info}</span> 
            <Star className={styles.starIcon}/>
          </div>
        ))}
      </div>
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>{props.month} +</div>
      {output}
    </div>
  )
}