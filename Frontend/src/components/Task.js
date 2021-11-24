import React, {useState} from 'react'
import styles from './month.module.css';
import Star from '@material-ui/icons/Star';


export default function Task(props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={()=>setOpen(!open)} key={props.task.task_id} className={`${styles.task} ${styles[props.task.category]}`}>{props.task.task_name} 
        <Star className={styles.starIcon} style={{color: props.task.stage}}/>
      </div>
        {open &&  <><div className={styles.info}>{props.task.info}</div></> }
    </>
  )
}
