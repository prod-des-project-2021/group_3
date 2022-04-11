import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Content from './sectioncomponents/Content.js';
import Linkbutton from './sectioncomponents/linkbutton';
import pdf from '../OAMK_Toimintamalli hyvinvoivan maatilan kehittämiseksi_vedos2.pdf'

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
        <Linkbutton buttonText='Taloustohtori' link='https://portal.mtt.fi/portal/page/portal/taloustohtori'/>
        <Content text=' Yrityksen strateginen suunnittelu ja johtaminen on tärkeä osa päivittäistä toimintaa. Seuraavasta linkistä pääset perehtymään raporttiin, jonka aiheena on TOIMINTAMALLI HYVINVOIVAN MAATILAN KEHITTÄMISEKSI. Sen tarkoituksena on opastaa tilan toiminnasta vastaavia henkilöitä seuraamaan ja mittaamaan toiminnan kannalta oleellisia asioita sekä luomaan tilalle tällä tavoin oma johtamisjärjestelmä, jonka avulla tilalla pystytään keskittymään toiminnan kannattavuuden ja oman jaksamisen näkökulmasta oleellisiin asioihin. Toimintamallin tarkoituksena on mahdollistaa maitotilan, lihatilan ja viljatilan tilakohtainen johtamisprosessin kehittäminen ja käyttöönotto. '/>
        <Linkbutton buttonText='Toimintamalli hyvinvoivan maatilan kehittämiseksi' link={pdf}/>
      </div>
    </div>
  )
}
