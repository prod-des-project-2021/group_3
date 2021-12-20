import React, {useState, useEffect} from 'react'
import Month from './Month'
import styles from './vuosikello.module.css'
import anotherStyle from './sectionscontainer.module.css'
import actStyles from './month.module.css'
import Star from '@material-ui/icons/Star';
import Backbutton from './sectioncomponents/Backbutton';
import NewActivity from './NewActivity.js';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import Warning from './Warning.js';
import ChangeYear from './ChangeYear';

export default function Vuosikello(props) {

  const [showWarning, toggleWarning] = useState(false);
  const [showChangeYear, toggleChangeYear] = useState(false);
  const [yearOpen, toggleYearOpen] = useState(false);
  const [addOpen, toggleAddOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <div className={styles.modalContainer}>
        <NewActivity submit='Lisää' title='Luo uusi tehtävä' addNewActivity={props.addNewActivity} toggleModalActivity={props.toggleModalActivity} showModalActivity ={props.showModalActivity}/>
        <NewActivity deleteActivity={toggleWarning} submit='Päivitä' task={props.activityToBeUpdated} title='Muokkaa aktiviteettia' addNewActivity={props.modifyActivity} toggleModalActivity={props.toggleModalModify} showModalActivity ={props.showModalModify}/>
        <Warning class='moduleContainer2' id={props.activityToBeUpdated} deleteActivity={props.deleteActivity} showWarning={showWarning} toggleWarning={toggleWarning} warning='Haluatko varmasti poistaa tehtävän?'/>
        <ChangeYear changeYear={props.changeYear} showChangeYear={showChangeYear} toggleChangeYear={toggleChangeYear} year={props.year} />
      </div>
      <Backbutton/>
      <div className={anotherStyle.container}>
          <div className={styles.infoNotLogged}> {!props.loggedIn ? 'Hei, tämä on esimerkki Vuosikellosta ja sen käytöstä. Kirjaudu sisään, jotta pääset muokkkaamaan vuosikelloa ja saat siitä kaiken hyödyn irti'
        : 'Älä tallenna vuosikelloon arkaluontoisia tietoja, kuten salasanaasi tai henkilötunnuksia.'}</div>
        <div className={styles.year} onClick={props.loggedIn ? ()=>toggleChangeYear(true) : ()=> toggleYearOpen(!yearOpen)}>{props.year}</div>
        {yearOpen && 
          <div className={styles.info}>Kun olet kirjautunut sisään, tästä voit vaihtaa Vuosikellosi otsikkoa</div>
        }
        <AddIcon onClick={props.loggedIn ? ()=> props.toggleModalActivity() : () =>toggleAddOpen(!addOpen)} className={styles.addIcon}/>
        {addOpen && 
          <div className={styles.info}>Kun olet kirjautunut sisään, tästä voit lisätä uusia tehtäviä tai aktiviteetteja Vuosikelloosi</div>
        }
        <div className={styles.months}>
          <Month name='Tammikuu' month={1} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify} />
          <Month name='Helmikuu' month={2} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Maaliskuu' month={3} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Huhtikuu' month={4} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Toukokuu' month={5} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Kesäkuu' month={6} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Heinäkuu'month={7} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Elokuu' month={8} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Syyskuu' month={9} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Lokakuu'month={10} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Marraskuu'month={11} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
          <Month name='Joulukuu' month={12} loggedIn={props.loggedIn} tasks={props.tasks} toggleModalModify={props.toggleModalModify}/>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.actContainer}>
            <div className={styles.infoTitle}>Aktiviteettien kategoriat:</div>
            <div className={`${actStyles.task} ${actStyles.aktiviteetit}`}>Yleiset aktiviteetit</div>
            <div className={`${actStyles.task} ${actStyles.rahoitus}`}>Rahoitus deadline</div>
            <div className={`${actStyles.task} ${actStyles.kilpailutukset}`}>Kilpailutukset</div>
            <div className={`${actStyles.task} ${actStyles.messut}`}>Messut ja tapahtumat</div>
            <div className={`${actStyles.task} ${actStyles.markkinointi}`}>Markkinointipampanjat ja -aktiviteetit</div>
          </div>
          <div className={styles.starContainer}>
            <div className={styles.infoTitle}>Aktiviteettien tilanne:</div>
            <div><Star className={styles.starIcon} style={{color:'green'}}/> Tehty</div>
            <div><Star className={styles.starIcon} style={{color:'hsl(36, 82%, 51%)'}}/> Käynnissä</div>
            <div><Star className={styles.starIcon} style={{color:'red'}}/> Ei aloitettu</div>
            <div><Star className={styles.starIcon} style={{color:'black'}}/> Siirtyy ensi vuoteen</div>
          </div>
        </div>
      </div>
    </>
  )
}
