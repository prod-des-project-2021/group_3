import React from 'react'
import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Imgcontainer from './sectioncomponents/Imgcontainer.js';
import Content from './sectioncomponents/Content.js';
import Caption from './sectioncomponents/Caption.js';
import Backbutton from './sectioncomponents/Backbutton';
import appdrawer from './pictures/appdrawer.jpeg';
import chromeview from './pictures/chromeview.jpeg';
import chromesettings from './pictures/chromesettings.jpeg';
import addhome from './pictures/addhome.jpeg';
import wherefile from './pictures/wherefile.jpeg';
import herefile from './pictures/herefile.jpeg';


export default function PWAinstallmobile() {
    return (
        <>
            <Backbutton />
            <div className={styles.container}>
                <Title title='Kuinka asennan sivun puhelimelleni' />
                <Caption text='Tässä ohjeessa opetetaan, kuinka tämän sivuston voi asentaa omaan puhelimeen'/>
                <Content start='Vaihe 1.' text='Avaa Google Chrome selain puhelimessasi. Sen kuvake näyttää tältä' />
                <div className={styles.image}>
                    <Imgcontainer alt='' imgsrc={appdrawer} />
                </div>
                <Content start='Vaihe 2.' text='Kun selain on auki, mene nettisiulle *sivun osoite*' />
                <Content start='Vaihe 3.' text='Paina selaimen kulmassa olevaa kolme pistettä nappia' />
                <div className={styles.image}>
                    <Imgcontainer alt='' imgsrc={chromeview} />
                </div>
                <Content start='Vaihe 4.' text ='Tämä avaa valikon. Valikosta etsitään vaihtoehto "Lisää aloitusnäyttöön"' />
                <div className={styles.image}>
                    <Imgcontainer alt='' imgsrc={chromesettings} />
                </div>
                <Content start='Vaihe 5.' text='Tämä avaa uuden kohdan josta valitaan "Lisää"' />
                <Imgcontainer alt='' imgsrc={addhome} />
                <Content start='Vaihe 6.' text='Tästä avautuu jälleen uusi kohta josta valitaan "Lisää automaattisesti"' />
                <Imgcontainer alt='' imgsrc={wherefile} />
                <Content text='Nyt jos menet takaisin kotinäyttöösi, sinulta pitäisi löytyä kuvake sivustolle' />
                <div className={styles.image}>
                    <Imgcontainer alt='' imgsrc={herefile} />
                </div>
            </div>
        </>
    )
}
