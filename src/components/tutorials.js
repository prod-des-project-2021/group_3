import React from 'react'
import Title from './sectioncomponents/Title.js';
import styles from './sectioncomponents/linkbutton.module.css'
import anotherStyles from './sectionscontainer.module.css'
//import Imgcontainer from './sectioncomponents/Imgcontainer.js';
//import Content from './sectioncomponents/Content.js';
import Caption from './sectioncomponents/Caption.js';
import Backbutton from './sectioncomponents/Backbutton';
import { Link } from "react-router-dom";

export default function tutorials() {
    return (
        <>
        <div>
             <Backbutton/>
             <div className={anotherStyles.container}>
                <Title title='Ohjeet'/>
                <Caption text='Tältä sivulta löydät ohjeita'/>
                <Link className={styles.button} to="/PWAinstall">Kuinka asennan sivun tietokoneelleni</Link>
            </div>
        </div>
        </>
    )
}
