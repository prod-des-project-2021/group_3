import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Content from './sectioncomponents/Content.js';
import Linkbutton from './sectioncomponents/linkbutton';

export default function section4_2() {
  return (
    <div>
      <div className={styles.container}>
        <Title title='Taloudellinen hyvinvointi'/>
        <Content text='Taloudellinen hyvinvointi tarkoittaa turvallisuuden tunnetta ja tunnetta oman talouden hallinnasta; se on pärjäämistä arjessa, samalla yllättäviin tilanteisiin ja tulevaan varautuen. Hyvinvoinnin ajallinen näkökulma on siis paitsi tässä ja nyt, myös tulevaisuudessa. '/>
        <Linkbutton buttonText='Lisätietoa' link='https://www.takuusaatio.fi/julkaisu/kasitys-tyohyvinvoinnista-on-syyta-paivittaa-2020-luvulle/'/>
        <Content text ='Taloudellinen turvallisuus on osa hyvinvointia. Erilaiset menetykset tai perhetilanteen muuttuminen voi horjuttaa tätä turvallisuudentunnetta. Maatilayrittäjän perusturvana on lakisääteinen sosiaaliturva. (Yliselä 2009.)  '/>
        <Content text ='Asiaa eläkkeistä ja sosiaaliturvasta löytyy esimerkiksi täältä'/>
        <Linkbutton buttonText='Lisätietoa' link='https://www.mela.fi/'/>
        <Content text='Luonnonvarakeskus (Luke) seuraa Suomen maatalousyritysten talouskehitystä. Maataloustuotannon kannattavuustietoja hyödyntävät maatalousyrittäjät. Kannattavuuskirjanpitoon kuuluvina he voivat hyödyntää heille lähetettäviä talousraportteja oman tilansa talousseurannassa ja suunnittelussa sekä vertailussa muihin yrityksiin. Luken Taloustohtori- verkkopalvelussa he voivat vertailla oman yrityksensä tuloksia muiden yritysryhmien keskiarvotuloksiin. Kannattavuuskirjanpitotoiminta on täysin maksutonta tiloille.'/>
        <Linkbutton buttonText='Lisätietoa' link='https://www.luke.fi/tietoa-luonnonvaroista/maatalous-ja-maaseutu/maatalouden-kannattavuus/'/>
        <Linkbutton buttonText='Taloustohtori' link='https://portal.mtt.fi/portal/page/portal/taloustohtori'/>
        <Content text='talouden tasapaino '/>
        <Linkbutton buttonText='LINKKI UUPUU!!!! Matin ja Pekan oppaaseen' link=''/>
      </div>
    </div>
  )
}
