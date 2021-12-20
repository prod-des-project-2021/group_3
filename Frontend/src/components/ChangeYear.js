import React from 'react'
import styles from './newActivity.module.css';
import Close from '@material-ui/icons/Close';

export default function NewActivity(props) {

  function post(event) {
    event.preventDefault();
    props.toggleChangeYear(false);
    props.changeYear(
      event.target['yearclockTitle'].value
    )
  }

  if(!props.showChangeYear) {
    return null;
  }
  else {
    return (
      <div className={styles.moduleContainer} style={{marginTop:'200px'}}>
        <Close onClick={()=>props.toggleChangeYear(false)} className={styles.close}/>
        <div className={styles.title}>Vaihda vuosikellon otsikkoa</div>
        <div className={styles.formContainer}>
          <form className={styles.addActivity} onSubmit={post}>
            <label>Anna uusi otsikko</label>
            <input type="text" name="yearclockTitle" maxLength="50" className={styles.nameBox} defaultValue={props.year}/>
            <input type="submit" value='Päivitä' className={styles.button}/>
            <input type="button" value="Peruuta" onClick={()=>props.toggleChangeYear(false)} className={styles.cancel}/>
          </form>
        </div>
      </div>
    )
  }
}
