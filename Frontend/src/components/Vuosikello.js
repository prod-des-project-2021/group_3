import React from 'react'
import Month from './Month'
import styles from './vuosikello.module.css'
import anotherStyle from './sectionscontainer.module.css'
import actStyles from './month.module.css'
import Content from './sectioncomponents/Content'
import Star from '@material-ui/icons/Star';
import Backbutton from './sectioncomponents/Backbutton';

const arr = [{task: 'markkinointikampanja', m:'tammikuu', category:'markkinointi', info: 'tähän lisäinfoa?', stage:'green'},{task: 'nettisivut', m:'tammikuu', category:'aktiviteetit', info: 'tee nettisivut', stage:'green'},{task: 'nettisivut', m:'tammikuu', category:'aktiviteetit', info: 'tee nettisivut', stage:'green'},{task: 'nettisivut', m:'tammikuu', category:'aktiviteetit', info: 'tee nettisivut', stage:'green'},{task: 'nettisivut', m:'tammikuu', category:'aktiviteetit', info: 'tee nettisivut', stage:'green'}]
const arr2 = [{task: 'paikallisten yrittäjien messut', m:'maaliskuu', category:'messut', info: 'messut 23.3. ota mukaan lehmäpuku, ota hyvä kuva blogia varten', stage:'red'},{task: 'blogikirjoitus', m:'maaliskuu', category:'markkinointi', info: 'tee blogipostaus messuista', stage:'green'}]
const arr3 = [{task: 'tilikauden päätös', m:'joulukuu', category:'rahoitus', info: 'muista lisätä maaliskuun messukulut', stage:'green'}]
const arr4 = [{task: 'tarjouspyyntöön osallistuminen', m:'toukokuu', category:'kilpailutukset', info: 'kouluruokailujen perunoiden kilpailutukset', stage:'hsl(36, 82%, 51%)'}]
const arr5 = [{task: 'koulutus', m:'syyskuu', category:'aktiviteetit', info: 'Koulutus Pihtiputaalla', stage:'black'}]

function changeStar(){

}

export default function vuosikello() {
  return (
    <>
      <Backbutton/>
      <div className={anotherStyle.container}>
        <div className={styles.year}>2021</div>
        <div className={styles.months}>
          <Month month='Tammikuu' tasks={arr}/>
          <Month month='Helmikuu'/>
          <Month month='Maaliskuu' tasks={arr2}/>
          <Month month='Huhtikuu'/>
          <Month month='Toukokuu' tasks={arr4}/>
          <Month month='Kesäkuu'/>
          <Month month='Heinäkuu'/>
          <Month month='Elokuu'/>
          <Month month='Syyskuu' tasks={arr5}/>
          <Month month='Lokakuu'/>
          <Month month='Marraskuu'/>
          <Month month='Joulukuu' tasks={arr3}/>
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
        </div>
      </div>
    </>
  )
}
