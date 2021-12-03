import React from 'react'
import styles from './newActivity.module.css';
import buttonStyles from './sectioncomponents/linkbutton.module.css';
import Close from '@material-ui/icons/Close';

export default function NewActivity(props) {

  function onDelete() {
    props.toggleWarning(false);
    props.deleteActivity(props.id ? props.id.task.task_id: null);
  }

  if(!props.showWarning) {
    return null;
  }
  else {
    return (
      <div className={styles.moduleContainer} style={{marginTop:'200px'}}>
        <Close onClick={()=>props.toggleWarning(false)} className={styles.close}/>
        <div className={styles.title}>{props.warning}</div>
        <div className={styles.buttonContainer}>
          <button className={buttonStyles.button} onClick={onDelete}> Kyllä </button>
          <button onClick={()=>props.toggleWarning(false)} className={styles.cancel}> Ei </button>
        </div>
      </div>
    )
  }
}
