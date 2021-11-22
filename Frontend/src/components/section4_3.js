import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Content from './sectioncomponents/Content.js';
import Intendedcontent from './sectioncomponents/Intendedcontent';
import speechBubble from './pictures/sosiaalinenAjatusKupla.png';

export default function section4_2() {
  return (
    <div>
      <div className={styles.container}>
        <Title title='Sosiaalinen hyvinvointi'/>
        <Content text='Sosiaalisen hyvinvoinnin tunnusmerkkejä ovat yleinen tyytyväisyys elämään, hyvä itsetunto ja tyydyttävä fyysinen toimintakyky (Partala 2009). Siihen vaikuttavat esimerkiksi perhe, ystävät ja työtoverit. Sosiaalista hyvinvointia työpaikalla edistää mahdollisuus saada tarvittaessa apua työtovereilta. Jos työyhteisö on kannustava, syntyy halu tehdä työtä. Hyvinvointia edistää mahdollisuus keskustella muiden työntekijöiden kanssa. Työ pitäisi jaksottaa niin, ettei pitkiä yksintyöskentelyjaksoja tule. (Työsuojeluhallinto 2011.) Maatalousyrittäjän työn luonne on usein sellaista, että sitä tehdään yksin, jolloin ei työn myötä synny työyhteisöä tai työyhteisön jäsenyyttä. Tällöin toisilta saatu tuki ja kannustus jää puuttumaan.'/>
        <Content text ='Parisuhteen ja muiden ihmissuhteiden merkitys omalle hyvinvoinnille on merkityksellinen. Maatalousyrityksissä puolisot ovat usein toistensa yrityskumppaneita ja työtovereita. Tällöin toimiva parisuhde on maatalousyrityksen jatkuvuuden edellytys ja menestyksen kulmakivi. Silloin kun puolisoiden välit ovat sopuisat ja yhteistyö toimii, onnistuu tilan töiden jakaminen ja yrityksen tulevaisuuden suunnittelukin usein hyvin. Ongelmat parisuhteessa voivat taas kärjistyessään johtaa jopa perintötilasta luopumiseen ja pois muuttoon maaseudulta. Maatalousyrittäjille tehdyn kartoituksen mukaan parisuhteen kantavana voimana ovat luottamus kumppaniin ja puolisoiden jakama näkemys yhdessä tehtävän työn tärkeydestä. Samanlaiset elämänarvot ja molemminpuolinen kunnioitus vahvistaa myös maatalousyrittäjien parisuhdetta. (Jyväskylän ammattikorkeakoulu Yksissä-hanke.) Useat maatalousyrittäjät ovat kuitenkin tahtomattaan vailla kumppania ja muita merkityksellisiä ihmissuhteita. Tämä heikentää heidän elämänlaatuaan, hyvinvointia ja työkykyä.'/>
        <Content text ='Parisuhde, ystävyyssuhde, kaverisuhde – mitä se kellekin on. Miten tutustun uusiin ihmisiin ja luon pysyviä, pitkäaikaisia suhteita? Seurustelu- tai ystävyyssuhde voi löytyä samoista paikoista, joissa itse viihtyy. Heinemaa (2020) mukaan helpoimmaksi tavaksi löytää kumppani on tutun kautta, netistä tai harrastusten parista.'/>
        <Content text='Erilaisia keskustelualustoja netissä'/>
        <Intendedcontent text='tänne pitää kirjautua ja rekisteröityä, luoda itselle nimimerkki, anonyymisti keskustella erilaisista asioita ja erilaisten ihmisten kanssa'/>
        <Intendedcontent text={
        <>Esimerkkejä erilaisista livechateista:
          <ul>
            <li>APUA, MIKÄ IHMISSUHDE -keskustelualusta </li>
            <li>YLPEET LANDET -keskustelualusta noin 20-35v.maaseudun nuorille</li>
            <li>YMPÄRISTÖAHDISTUS- livechat</li>
            <li>ELÄMÄÄ MAASEUDULLA - keskustelualusta</li>
          </ul>
          Näissä ryhmissä keskustellaan elämästä maaseudulla ja siihen liittyvistä aiheista, kuten sukupolvenvaihdoksista, luopumisesta, jaksamisesta, tai yksinäisyydestä
        </>} buttonText='Keskustelemaan' link='https://tukinet.net/'/>
        <img style={{'maxWidth':'100%'}} alt="" src={speechBubble}></img>
      </div>
    </div>
  )
}
