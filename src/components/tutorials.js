import React from 'react'
import Title from './sectioncomponents/Title.js';
import styles from './frontpage.module.css'
import anotherStyles from './sectionscontainer.module.css'
//import Imgcontainer from './sectioncomponents/Imgcontainer.js';
//import Content from './sectioncomponents/Content.js';
import Caption from './sectioncomponents/Caption.js';
import Backbutton from './sectioncomponents/Backbutton';
import { Link } from "react-router-dom";

export default function Tutorials(props) {
    return (
        <>
        <div>
             <Backbutton/>
             <div className={anotherStyles.container}>
                <Title title='Ohjeet'/>
                <Caption text='Tältä sivulta löydät ohjeita'/>
                <div className={styles.sections}>
                    <Link className={styles.sec} to="/PWAinstall">Kuinka asennan sivun tietokoneelleni</Link>
                    <Link className={styles.sec} to="/PWAinstallmobile">Kuinka asennan sivun puhelimelleni</Link>
                </div>
            </div>
        </div>
        </>
    )
}
