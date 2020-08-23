import React,{useEffect,useState} from 'react';
import {FormControl,NativeSelect} from "@material-ui/core";
import styles from './Country.module.css';
import {country} from "../../api";

const Country= ({handlechange}) =>{
    const [countries,setcountry]=useState([]);
    useEffect(() => {
        async function fetchData() {
          
          setcountry(await country()) ;
          //setcountry(daily);           
        }
        fetchData();
        
      },[setcountry])
    //   console.log(countries);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue=' ' onChange={(e) =>{handlechange(e.target.value)}}>
                <option value="">Global</option>
                {countries.map((country,i) =>{
                    return <option key={i} value={country} >{country}</option>
                })}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;