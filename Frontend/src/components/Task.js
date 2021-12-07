import React, {useState} from 'react'
import styles from './month.module.css';
import Star from '@material-ui/icons/Star';
import Edit from '@material-ui/icons/Edit';

export default function Task(props) {

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  function modify (task) {
    props.toggleModalActivity(task);
  }

  return (
    <>
    <div className={styles.taskContainer}>
      <div onClick={()=>setOpen(!open)} key={props.task.task_id} className={`${styles.task} ${styles[props.task.category]}`}>{props.task.task_name} 
      </div>
        <Star className={styles.starIcon} style={{color: props.task.stage}}/>
        </div>
        {open &&  
          <>
            <div className={styles.info}>
              <Edit className={styles.editIcon} onClick={props.loggedIn ? ()=>modify(props.task) : ()=>setEditOpen(!editOpen)} />{props.task.info}
            </div>
            {editOpen && 
                <div className={styles.info}>Kun olet kirjautunut sisään, tästä voit muokata vuosikellon aktiviteettia, sen info tekstiä ja vaihtaa sen tilaa </div>
            }
          </> 
        }
    </>
  )
}
