import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Charts";
import Country from "./components/Country/Country";
import {fetchdata} from "./api/index";
import {motion} from 'framer-motion';
import Footer from './components/Footer/Footer';

function App() {

  const [data,setdata]=useState({
    data:{},
    country:''
  });
  
 useEffect(() => {
  async function fetchData() {
    
    const response = await fetchdata();
    setdata({data:response});
   
  }
  fetchData();
},[setdata])
async function handlechangein (country) 
{
  const response = await fetchdata(country);
  setdata({data:response,country:country});
}
//  console.log(data);
  return (
    <div className={styles.container}>
      <motion.img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID-19" 
        initial={{y:'-100vw'}}
        animate={{y:0}}
        transition={{dealy:1,type:'spring',stiffness:200}}
      />
      <Cards data={data.data} country={data.country}/>
      <Country handlechange={handlechangein}/>
      <Chart data={data.data} country={data.country} />
      <Footer />
    </div>
  );
}

export default App;
