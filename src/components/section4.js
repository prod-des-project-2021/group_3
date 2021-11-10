import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Imgcontainer from './sectioncomponents/Imgcontainer.js';
import Caption from './sectioncomponents/Caption.js';
import OsaAlueet from './pictures/osa-alueet.png';
import Content from './sectioncomponents/Content';
import Backbutton from './sectioncomponents/Backbutton';
import Section4_1 from './section4_1';
import Section4_2 from './section4_2';
import Section4_3 from './section4_3';
import Section4_4 from './section4_4';

export default function section4() {

  return (
    <div>
      <Backbutton/>
      <div className={styles.container}>
        <Title title='Hyvinvoinnin osa-alueet'/>
        <Caption text ='Ihminen on kokonaisuus, jonka hyvinvointi koostuu monesta eri asiasta. Kokonaisvaltaista hyvinvointia voidaan tarkastella neljän eri ulottuvuuden näkökulmasta: fyysinen, psyykkinen, sosiaalinen ja taloudellinen hyvinvointi. '/>
        <Content text='Maatilayrittämiseen liittyvät roolien moninaisuus, työn fyysinen kuormitus, epäsäännöllinen työ ja ajan puute, alan investointivaltaisuus, luonnonolosuhteet sekä tukipolitiikka tuovat omat haasteensa työkykyyn ja sen ylläpitämiseen. Yrityksen on oltava kannattava sekä lyhyellä että pitkällä aikavälillä, joten henkisiä ja fyysisiä voimavaroja tarvitaan jokaiselle päivälle. Erityisen tärkeää on työkyvyn ylläpitäminen pitkäjänteisesti ja siihen vaikuttavia asioita monista eri näkökulmista. Maatilan ja sillä työskentelevien ihmisten hyvinvointi on sitä varmempaa mitä useampi tekijä on kunnossa. (Yliselä 2009.)'/>
        <Imgcontainer alt="hyvinvoinnin neljä osa-aluetta" imgsrc={OsaAlueet}/>
        <button>Fyysinen</button><button>Psyykkinen</button><button>Sosiaalinen</button><button>Taloudellinen</button>
      </div>
      <Section4_1/>
      <Section4_2/>
      <Section4_3/>
      <Section4_4/>
    </div>
  )
}
