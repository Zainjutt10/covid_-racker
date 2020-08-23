import React from 'react';
import styles from "./Footer.module.css";
import {motion} from 'framer-motion';


function Footer()
{
    return (<div className={styles.footer} >
        <motion.img className={styles.image} src="https://www.fda.gov/files/covid19-1600x900.jpg" alt="COVID-19" 
        initial={{y:'100vw'}}
        animate={{y:0}}
        transition={{delay:1,duration:1,type:'spring',stiffness:120}}
        />
        <motion.p initial={{opacity:0.2}} animate={{opacity:1}} transition={{delay:2,duration:2}}>The first confirmed death was in Wuhan on 9 January 2020 due to <b>COVID-19</b>.</motion.p></div>)
}

export default Footer;