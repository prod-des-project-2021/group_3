import React from 'react'
import Title from './sectioncomponents/Title.js';
import styles from './frontpage.module.css'
import Imgcontainer from './sectioncomponents/Imgcontainer.js';
import Content from './sectioncomponents/Content.js';
import Caption from './sectioncomponents/Caption.js';
import Backbutton from './sectioncomponents/Backbutton';
import { Link } from "react-router-dom";

export default function tutorials() {
    return (
        <>
        <div>
             <Backbutton/>
             <div className={styles.container}>
                <Title title='Ohjeet'/>
                <Caption text='Tältä sivulta löydät ohjeita'/>
                <div className={styles.sec}>
                    <Link to="/PWAinstall">Kuinka asennan sivun tietokoneelleni</Link>
                </div>
            </div>
        </div>
        </>
    )
}
