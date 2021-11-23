import React from 'react'
import styles from './newActivity.module.css';
import buttonStyles from './sectioncomponents/linkbutton.module.css';

export default function NewActivity(props) {

  function post(event) {
    event.preventDefault();
    props.addNewActivity(
      event.target['taskName'].value,
      event.target['info'].value,
      event.target['months'].value,
      event.target['categorys'].value,
    )
  }

  if(!props.showModalActivity) {
    return null;
  }
  else {
    return (
      <div className={styles.moduleContainer}>
        <div onClick={props.toggleModalActivity} className={styles.xButton}>X</div>
        <div className={styles.title}>Luo uusi tehtävä</div>
        <div className={styles.formContainer}>
          <form className={styles.addActivity} onSubmit={post}>
            <label>Anna tehtävälle nimi</label>
            <input type="text" name="taskName" maxLength="200" className={styles.textBox}/>
            <label>Lisäinfoa koskien tehtävää</label>
            <input type="text" name="info" maxLength="250" className={styles.textBox}/>
            <label for="months">Valitse kuukausi:</label>
            <select name="months" id="months">
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
            <label for="categorys">Valitse kategoria:</label>
            <select name="categorys" id="categorys">
              <option value="aktiviteetit">Aktiviteetit</option>
              <option value="rahoitus">Rahoitus</option>
              <option value="kilpailutukset">Kilpailutukset</option>
              <option value="messut">Messut ja tapahtumat</option>
              <option value="markkinointi">Markkinointikampanja/-aktiviteetti</option>
            </select> <br></br>
            <input type="submit" value="Submit" className={buttonStyles.button}/>
            <input type="button" value="Cancel" onClick={props.toggleModalActivity} className={styles.cancel}/>
          </form>
        </div>
      </div>
    )
  }
}
