import React from 'react'
import styles from './month.module.css';
import Task from './Task.js';

export default function Month(props) {

  var output = <></>
  if (props.tasks) {
    output= <> {props.tasks.filter(task => task.month === props.month).map(task => (
     <Task task={task} key={task.task_id} loggedIn={props.loggedIn} toggleModalActivity={props.toggleModalModify}/>
      ))}
    </>
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>{props.name}</div>
      <div className={styles.taskContainer}>{output}</div>
    </div>
  )
}