import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Imgcontainer from './sectioncomponents/Imgcontainer.js';
import Caption from './sectioncomponents/Caption.js';
import OsaAlueet from './pictures/osa-alueet.png';

export default function section4() {
  return (
    <div>
      <div className={styles.container}>
        <Title title='Hyvinvoinnin osa-alueet'/>
        <Caption text ='Ihminen on kokonaisuus, jonka hyvinvointi koostuu monesta eri asiasta. Kokonaisvaltaista hyvinvointia voidaan tarkastella neljän eri ulottuvuuden näkökulmasta: fyysinen, psyykkinen, sosiaalinen ja taloudellinen hyvinvointi. '/>
        <Imgcontainer alt="hyvinvoinnin neljä osa-aluetta" imgsrc={OsaAlueet}/>
      </div>
    </div>
  )
}
