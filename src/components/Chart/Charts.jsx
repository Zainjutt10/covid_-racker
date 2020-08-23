import React ,{useEffect,useState} from 'react';
import {fetchdailydata} from "../../api";
import {Line,Bar} from "react-chartjs-2";
import styles from './Chart.module.css';


const Chart= ({data,country}) =>{
    // console.log(data);
    const [dailydata,setdailydata]=useState([]);
    useEffect(() => {
     async function fetchData() {
       
       const daily = await fetchdailydata();
       setdailydata(daily);
      
     }
     fetchData();
   },[])
   const linechart=(
       dailydata.length?
       (<Line 
        data={{
            labels:dailydata.map(({date})=>date),
            datasets:[{
                data:dailydata.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'blue',
                // backgroundColor:'blue',
                fill:true
            },{
                data:dailydata.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                // backgroundColor:'red',
                fill:true
            }],
        }}
       />):null
   )
   const barchar=(
       
       data.confirmed ?
       <Bar
       data={{
           labels:["infected","recovered","deaths","Active-Cases"],
           datasets:[{
               label:'People',
               backgroundColor:['blue','green','red','indigo'],
               data:[data.confirmed.value,data.recovered.value,data.deaths.value,data.confirmed.value-data.recovered.value]
           }]
       }}
       options={{
           legend:{display:false},
           title:{display:true,text:`current state in ${country}`}
       }}
       />:null
   )
//    console.log("in charts"+dailydata);
    return(<div className={styles.container} >{country ? barchar:linechart}</div>)
}

export default Chart;