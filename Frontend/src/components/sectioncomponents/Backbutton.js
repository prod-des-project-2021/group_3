import React from 'react'
import { Link } from "react-router-dom";
import styles from './backbutton.module.css';

import Home from '@material-ui/icons/Home';

export default function Backbutton() {
    return (
        <div className={styles.button}>
            <Link to="/"><Home style={{'color': '#5b8a3c'}} /></Link>
        </div>
    )
}
