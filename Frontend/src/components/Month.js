import React from 'react'
import styles from './month.module.css';
import Star from '@material-ui/icons/Star';

export default function month(props) {

  var output = <></>
  if (props.tasks) {
    props.tasks.map(task => {
      if(task.month === props.month) {
        output= <>
        <div className={`${styles.task} ${styles[task.category]}`}>{task.task_name} <span className={styles.info}>{task.info}</span> 
        <Star className={styles.starIcon} style={{color: task.stage}}/></div> </>
      }
    })
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>{props.name} +</div>
      {output}
    </div>
  )
}