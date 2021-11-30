import React from 'react'
import styles from './newActivity.module.css';
import buttonStyles from './sectioncomponents/linkbutton.module.css';
import Close from '@material-ui/icons/Close';
import Delete from '@material-ui/icons/DeleteForever';


export default function NewActivity(props) {

  function post(event) {
    event.preventDefault();
    props.addNewActivity(
      event.target['taskName'].value,
      event.target['info'].value,
      event.target['months'].value,
      event.target['categorys'].value,
      event.target['stage'].value,
      id
    )
  }

  let name=''
  let info=''
  let month=''
  let category=''
  let id=''

  if(props.task) {
    name = props.task.task.task_name;
    info = props.task.task.info;
    month = props.task.task.month;
    category = props.task.task.category;
    id = props.task.task.task_id;
  }

  if(!props.showModalActivity) {
    return null;
  }
  else {
    return (
      <div className={styles.moduleContainer}>
        <Close onClick={props.toggleModalActivity} className={styles.close}/>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.formContainer}>
          <form className={styles.addActivity} onSubmit={post}>
            <label>Anna tehtävälle nimi</label>
            <input placeholder='Aktiviteetin nimi...' type="text" name="taskName" maxLength="200" className={styles.nameBox} defaultValue={name}/>
            <label>Lisäinfoa koskien tehtävää</label>
            <textarea placeholder='Lisätietoja...' type="text" name="info" maxLength="250" cols={50} rows={4} className={styles.infoBox} defaultValue={info}/>
            <label htmlFor="months">Valitse kuukausi</label> <br></br>
            <select name="months" id="months" defaultValue={month}>
              <option value="1">Tammikuu</option>
              <option value="2">Helmikuu</option>
              <option value="3">Maaliskuu</option>
              <option value="4">Huhtikuu</option>
              <option value="5">Toukokuu</option>
              <option value="6">Kesäkuu</option>
              <option value="7">Heinäkuu</option>
              <option value="8">Elokuu</option>
              <option value="9">Syyskuu</option>
              <option value="10">Lokakuu</option>
              <option value="11">Marraskuu</option>
              <option value="12">Joulukuu</option>
            </select> <br></br>
            <label htmlFor="categorys">Valitse kategoria</label> <br></br>
            <select name="categorys" id="categorys" defaultValue={category}>
              <option value="aktiviteetit">Aktiviteetit</option>
              <option value="rahoitus">Rahoitus</option>
              <option value="kilpailutukset">Kilpailutukset</option>
              <option value="messut">Messut ja tapahtumat</option>
              <option value="markkinointi">Markkinointikampanja/-aktiviteetti</option>
            </select> <br></br>
            {props.task ?  
            <>
              <label htmlFor="stage">Valitse tehtävän tila</label> <br></br>
              <select name="stage" id="stage" defaultValue={props.task.task.stage}>
                <option value="red">Ei aloitettu</option>
                <option value="yellow">Käynnissä</option>
                <option value="green">Tehty</option>
                <option value="black">Siirtyy ensi vuoteen</option>
              </select> <br></br>
            </> :
            <input type='hidden' name='stage' value='red'/>}
            <input type="submit" value={props.submit} className={buttonStyles.button}/>
            <input type="button" value="Peruuta" onClick={props.toggleModalActivity} className={styles.cancel}/>
            {props.task && <Delete onClick={()=>props.deleteActivity(true)}className={styles.delete}/>}
          </form>
        </div>
      </div>
    )
  }
}
