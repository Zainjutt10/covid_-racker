import React from 'react';
import {Card, CardContent,Typography,Grid} from '@material-ui/core';
import Count from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import {motion} from 'framer-motion';

const Cards= ({data:{confirmed,recovered,deaths,lastUpdate},country}) =>{
    console.log(country);
    if(!confirmed)
    {
        return("Loading..");
    }
    // console.log(lastUpdate);
    return(
        <div className={styles.container}>
           <Grid container spacing={3} justify='center'>
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                        <Typography variant='h5'>
                            <Count start={0} end={confirmed.value} duration={2} separator=',' />
                        </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Infected people due to COVID-19.</Typography>
                   </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                       <Typography variant='h5'>  <Count start={0} end={recovered.value} duration={2} separator=',' /></Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Recovered people from COVID-19.</Typography>
                   </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                       <Typography variant='h5'>  <Count start={0} end={deaths.value} duration={2} separator=',' /></Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Deaths due to COVID-19.</Typography>
                   </CardContent>
                </Grid>
                {(country)?<motion.Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.active)}
                    initial={{x:'-100vw'}}
                    animate={{x:0}}
                    transition={{delay:1,duration:1}}
                >
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
                       <Typography variant='h5'>  <Count start={0} end={confirmed.value-recovered.value} duration={2} separator=',' /></Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Active cases of COVID-19 in {country}.</Typography>
                   </CardContent>
                </motion.Grid>:null}
            </Grid>
        
        </div>
        
    )
}
export default Cards;