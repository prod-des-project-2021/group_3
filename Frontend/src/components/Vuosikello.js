import React from 'react'
import Month from './Month'
import styles from './vuosikello.module.css'
import anotherStyle from './sectionscontainer.module.css'
import actStyles from './month.module.css'
import Content from './sectioncomponents/Content'
import Star from '@material-ui/icons/Star';
import Backbutton from './sectioncomponents/Backbutton';
import NewActivity from './NewActivity.js';
import AddIcon from '@material-ui/icons/AddCircleOutline';

export default function Vuosikello(props) {

  return (
    <>
      <Backbutton/>
      <div className={anotherStyle.container}>
        <div className={styles.year}>2021</div>
        <AddIcon onClick={()=> props.toggleModalActivity()} className={styles.addIcon}/>
        <div className={styles.months}>
          <Month name='Tammikuu' month={1} tasks={props.tasks}/>
          <Month name='Helmikuu' month={2} tasks={props.tasks}/>
          <Month name='Maaliskuu' month={3} tasks={props.tasks}/>
          <Month name='Huhtikuu' month={4} tasks={props.tasks}/>
          <Month name='Toukokuu' month={5} tasks={props.tasks}/>
          <Month name='Kesäkuu' month={6} tasks={props.tasks}/>
          <Month name='Heinäkuu'month={7} tasks={props.tasks}/>
          <Month name='Elokuu' month={8} tasks={props.tasks}/>
          <Month name='Syyskuu' month={9} tasks={props.tasks}/>
          <Month name='Lokakuu'month={10} tasks={props.tasks}/>
          <Month name='Marraskuu'month={11} tasks={props.tasks}/>
          <Month name='Joulukuu' month={12} tasks={props.tasks}/>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.actContainer}>
            <Content text='Aktiviteettien kategoriat:'/>
            <div className={`${actStyles.task} ${actStyles.aktiviteetit}`}>Yleiset aktiviteetit</div>
            <div className={`${actStyles.task} ${actStyles.rahoitus}`}>Rahoitus deadline</div>
            <div className={`${actStyles.task} ${actStyles.kilpailutukset}`}>Kilpailutukset</div>
            <div className={`${actStyles.task} ${actStyles.messut}`}>Messut ja tapahtumat</div>
            <div className={`${actStyles.task} ${actStyles.markkinointi}`}>Markkinointipampanjat ja -aktiviteetit</div>
          </div>
          <div className={styles.starContainer}>
            <Star className={styles.starIcon} style={{color:'green', backgroundColor:'black', padding:'2px', borderRadius:'20px' }}/> Tehty
            <Star className={styles.starIcon} style={{color:'hsl(36, 82%, 51%)'}}/> Menossa
            <Star className={styles.starIcon} style={{color:'red'}}/> Ei aloitettu
            <Star className={styles.starIcon} style={{color:'black'}}/> Siirtyy ensi vuoteen
          </div>
          <NewActivity addNewActivity={props.addNewActivity} toggleModalActivity={props.toggleModalActivity} showModalActivity ={props.showModalActivity}/>
        </div>
      </div>
    </>
  )
}
