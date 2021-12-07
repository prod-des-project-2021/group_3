import React, { useState } from 'react';

import styles from './sectionscontainer.module.css'
import anotherStyle from './sectioncomponents/linkbutton.module.css'
import Title from './sectioncomponents/Title.js';
import Caption from './sectioncomponents/Caption.js';
import OsaAlueet from './pictures/osa-alueet2.png';
import Content from './sectioncomponents/Content';
import Backbutton from './sectioncomponents/Backbutton';
import SECTION4_1 from './section4_1';
import SECTION4_2 from './section4_2';
import SECTION4_3 from './section4_3';
import SECTION4_4 from './section4_4';

export default function Section4() {

  const [content, display] = useState(0);

  return (
    <div>
      <Backbutton/>
      <div className={styles.container}>
        <Title title='Hyvinvoinnin osa-alueet'/>
        <Caption text ='Ihminen on kokonaisuus, jonka hyvinvointi koostuu monesta eri asiasta. Kokonaisvaltaista hyvinvointia voidaan tarkastella neljän eri ulottuvuuden näkökulmasta: fyysinen, psyykkinen, sosiaalinen ja taloudellinen hyvinvointi. '/>
        <Content text='Maatilayrittämiseen liittyvät roolien moninaisuus, työn fyysinen kuormitus, epäsäännöllinen työ ja ajan puute, alan investointivaltaisuus, luonnonolosuhteet sekä tukipolitiikka tuovat omat haasteensa työkykyyn ja sen ylläpitämiseen. Yrityksen on oltava kannattava sekä lyhyellä että pitkällä aikavälillä, joten henkisiä ja fyysisiä voimavaroja tarvitaan jokaiselle päivälle. Erityisen tärkeää on työkyvyn ylläpitäminen pitkäjänteisesti ja siihen vaikuttavia asioita monista eri näkökulmista. Maatilan ja sillä työskentelevien ihmisten hyvinvointi on sitä varmempaa mitä useampi tekijä on kunnossa. (Yliselä 2009.)'/>
        
        <img src={OsaAlueet} alt="hyvinvoinnin neljä osa-aluetta" useMap="#puzzle-map"></img>
        <map name="puzzle-map">
            <area onClick={()=> display(<SECTION4_1/>)} alt="fyys" title="fyys"  coords="156,36,151,92,117,86,114,116,145,109,159,157,197,155,204,144,192,127,211,113,230,123,223,134,230,154,271,154,272,121,285,116,313,116,314,87,298,87,281,92,273,39,230,38,225,52,223,82,200,80,192,66,202,48,198,38" shape="poly"></area>
            <area onClick={()=> display(<SECTION4_2/>)} alt="psyyk" title="psyyk"  coords="155,156,156,203,169,212,189,206,198,220,194,234,161,235,152,267,105,268,102,255,108,242,98,229,78,233,80,246,87,265,34,270,28,228,8,233,5,205,30,210,37,153,81,158,78,192,99,197,109,186,101,162,114,155" shape="poly"></area>
            <area onClick={()=> display(<SECTION4_3/>)} alt="tal" title="tal"  coords="154,272,153,331,141,328,132,321,115,336,115,356,146,350,157,361,157,389,190,387,205,376,198,351,221,347,228,360,223,385,273,387,275,360,286,353,308,353,317,334,301,326,274,326,274,276,227,273,222,292,230,305,209,315,197,294,199,274" shape="poly"></area>
            <area onClick={()=> display(<SECTION4_4/>)} alt="sos" title="sos"  coords="274,273,273,232,240,240,229,223,239,207,271,208,277,155,318,159,317,186,329,196,343,191,341,159,392,158,395,203,413,207,410,232,401,231,392,270,351,270,344,250,351,238,336,229,316,233,316,251,318,268" shape="poly"></area>
        </map> <br/>

        <button className={anotherStyle.button} onClick={()=> display(<SECTION4_1/>)}>Fyysinen</button><button className={anotherStyle.button} onClick={()=> display(<SECTION4_2/>)}>Psyykkinen</button>
        <button className={anotherStyle.button} onClick={()=> display(<SECTION4_3/>)}>Sosiaalinen</button><button className={anotherStyle.button} onClick={()=> display(<SECTION4_4/>)}>Taloudellinen</button>
      </div>
      {content}
    </div>
  )
}