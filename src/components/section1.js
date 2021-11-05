import React from 'react';

import styles from './sectionscontainer.module.css'
import image1 from './image1.jpg';
import Title from './Title.js';
import Imgcontainer from './Imgcontainer.js';
import Content from './Content.js';
import Caption from './Caption.js';

export default function section1() {
  return (
    <div>
      <div className={styles.container}>
        <Title title='Hyvinvoivat maaseudun yritykset'/>
        <Caption text ='Tervetuloa näille maatalousyrittäjien hyvinvointia käsitteleville sivuille.'/>
        <Imgcontainer imgsrc={image1}/>
        <Content text ='Sivut on tuotettu osana HYMYT – hyvinvoivat maaseudun yritykset hanketta. Tähän on koottua hyvinvointiin liittyvää materiaalia ja erilaisia tehtäviä ja vinkkejä sovelluksista, joiden avulla voi halutessaan arvioida ja seurata omaan hyvinvointiin liittyviä tekijöitä.'/>
        <Content text='Aluksi esitellään työkyky -malli, joka on hyvinvoinnin perusta ja tähän liittyviä näkökulmia siihen, miten voi itse arvioida omaa työhyvinvointia. Seuraavaksi tarkastellaan Hyvinvoinnin ennaltaehkäisemistä ja sen vahvistamista erilaisista näkökulmista. Lopuksi kuvataan Hyvinvoinnin osa-alueet, joita tässä tarkastellaan fyysisen, psyykkisen, sosiaalisen ja taloudellisen hyvinvoinnin näkökulmasta. Jokaiseen osioon on liitetty erilaisia aktiviteetteja ja esitelty joitain omaan hyvinvoinnin seurantaan liittyviä työkaluja.'/>
        <Content text='Hanke on saanut rahoituksen Euroopan maaseudun kehittämisen maatalousrahastosta Pohjois-Pohjanmaan ELY-keskuksesta. Hanketta hallinnoi Oulun ammattikorkeakoulu ja se toteutetaan yhdessä MTK Pohjois-Suomi ry:n kanssa.' />
        <Content text='HYMYT-hankkeella pyritään maaseudun yrittäjien ammatillisen osaamisen kohentamiseen, yrittäjien työhyvinvoinnin kohottamiseen, yritysten yhteistyö- ja tukiverkkojen laajentamiseen ja yritysten kannattavuuden parantamiseen.' />
        <Content text={<>HYMYT-hankkeessa tehtävillä toimenpiteillä pyritään 
          <ul>
            <li>parantamaan maaseutuyrittäjien ammatillista ja liiketaloudellista osaamista</li>
            <li>kohentamaan yritysten kannattavuutta</li>
            <li>laajentamaan yritysten välisiä yhteistyö- ja tukiverkkoja sekä</li>
            <li>parantamaan yrittäjien työkykyä ja työhyvinvointia</li>
            <li>etsimään uusia ansaintamahdollisuuksia maaseudun yrityksille</li>
          </ul></>} />
      </div>
    </div>
  )
}
