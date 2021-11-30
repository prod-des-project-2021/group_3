import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Content from './sectioncomponents/Content';
import Backbutton from './sectioncomponents/Backbutton';

export default function References() {

  return (
    <div>
      <Backbutton/>
      <div className={styles.container}>
        <Title title='Lähdeluettelo'/>
        <Content start='Heinemaa, S.' text=' 2020. Poutapäiviä ja pakkasaamuja – Maatalousyrittäjän parisuhde. Opinnäytetyö. Hämeen ammattikorkeakoulu HAMK. Maaseutuelinkeinojen koulutusohjelma.'/>
        <Content start='Jyväskylän' text=' ammattikorkeakoulu Yksissä-hanke. Tietoa ja taitoa ihmissuhteisiin, kohtaamisia maaseudun asukkaiden parhaaksi ' link='https://www.jamk.fi/fi/Tutkimus-ja-kehitys/projektit/yksissa/parisuhdemateriaalia/'/>
        <Content start='Kivistö, S.' text=', Kallio, E. & Turunen, G. 2008. Työ, henkinen hyvinvointi ja mielenterveys. Sosiaali- ja terveysministeriö. Työterveyslaitos.'/>
        <Content start='Leskinen, T.' text=' & Hult, H-M. 2010. Kokonaisvaltainen hyvinvointi. Kristallisoi toimintasi. Saavuta tavoitteesi. Latvia: PRO Tammi'/>
        <Content start='Lätti, M.' text=' & Karttunen, J. Työ ja lepo tasapainoon. Teho 2010 (5).'/>
        <Content start='Partala, A-E.' text=' 2009. Fyysisen aktiivisuuden ja toimintakyvyn yhteys ikääntyneiden hyvinvointiin Suomessa. Pro gradu –tutkielma. Liikuntatieteiden laitos, Jyväskylän yliopisto.'/>
        <Content start='Sallinen, M.' text=', Kandolin, I. & Purola, M. 2002. Elämisen rytmi: kohti tasapainoa työn ja muun elämän välillä. Työterveyslaitos.'/>
        <Content start='Suutarinen, M.' text=' 2010. Työhyvinvoinnin organisointi. Teoksessa Suutarinen, M. & Vesterinen P-L. (toim.) Työhyvinvoinnin johtaminen. Keuruu: Otava'/>
        <Content start='Tuure, V-M.' text=' 2011. Ajankohtaista viljelijöiden työhyvinvoinnista. Teho 2011 (2).'/>
        <Content start='Työsuojeluhallinto' text=' ' link= 'https://www.tyosuojelu.fi/'/>
        <Content start='Työterveyslaitos' text=' ' link='https://www.ttl.fi/tyoyhteiso/tyokykytalo'/>
        <Content start='Yliselä, P.' text='(toim.) 2009. Maatalousyrittäjän hyvinvointi. Porvoo: ProAgria Keskusten Liitto.'/>
      </div>
    </div>
  )
}
