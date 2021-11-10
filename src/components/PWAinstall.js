import React from 'react'
import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Imgcontainer from './sectioncomponents/Imgcontainer.js';
import Content from './sectioncomponents/Content.js';
import Caption from './sectioncomponents/Caption.js';
import Backbutton from './sectioncomponents/Backbutton';
import Edgepicture from './pictures/Edgepicture.png';
import threedots from './pictures/threedots.png';
import settingspic from './pictures/settingspic.png';
import installpage from './pictures/Installpage.png';
import savepage from './pictures/Savepage.png';
import newinstallpage from './pictures/Newinstallpage.png';

export default function PWAinstall() {
    return (
        <>
            <Backbutton />
            <div className={styles.container}>
            <Title title='Kuinka asennan sivun tietokoneelleni'/>
            <Caption text='Tässä ohjeessa opetetaan, kuinka tämän sivuston voi asentaa omalle tietokoneelle.'/>
            <Content text='Vaihe 1. Avaa Microsoft Edge nettiselain, jonka logo näyttää tältä'/>
            <div className={styles.image}>
                <Imgcontainer alt='edge'imgsrc={Edgepicture}/>
            </div>
            <Content text='Vaihe 2. Kun selain on auki, mene nettisivulle *sivun osoite*'/>
            <Content text='Vaihe 3. Paina selaimen kulmassa olevaa kolme pistettä nappia'/>
            <Imgcontainer alt='Settings' imgsrc={threedots}/>
            <Content text='Vaihe 4. Tämä avaa valikon. Valikosta etsitän vaihtoehto "Sovellukset"'/>
            <div className={styles.image}>
                <Imgcontainer alt='settings' imgsrc={settingspic}/> 
            </div>
            <Content text='Vaihe 5. Tämä avaa uuden valikon jossa painetaan vaihtoehdosta "Asenna tämä sivu sovelluksena"'/>
            <Imgcontainer alt='installpage' imgsrc={installpage}/>
            <Content text='Vaihe 6. Nyt sivun yläosaan aukeaa uusi kohta. Kohdassa on sinisenä näkyvä teksti johon voi kirjoittaa haluamansa nimen sovellukselle. Kun olet valmis paina asenna näppäintä'/>
            <Imgcontainer alt='savepage' imgsrc={savepage} />
            <Content text='Vaihe 7. Nyt pitäisi avautua uusi näkymä, jossa näkyy muutama vaihtoehto joista voit valita. Nyt sivusto on asennettu sovelluksena tietokoneeseesi ja voit painaa sovelluksen kuvaketta avataksesi sivuston'/>
            <Imgcontainer alt='savepage' imgsrc={newinstallpage} />
            </div>
        </>
    )
}
