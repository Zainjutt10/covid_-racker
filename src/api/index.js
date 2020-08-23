import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchdata = async(country) =>{
    let changeurl =url;
    console.log(country);
    if(country)
    {
        changeurl=`${url}/countries/${country}`;
    }
try{
    // const resp=await axios.get(url);
    const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeurl);
    const modifydata={
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
    // console.log(resp);
    return modifydata;
}catch(error){
     console.log(error);
}
}

export const fetchdailydata =async () =>
{
    try{
        const {data}=await axios.get(`${url}/daily`);
        const modifydata=data.map((dailydata)=>
        ({
            confirmed:dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate
        }))
        
        return modifydata;
    }catch(error)
    {
        console.log(error);
    }
}

export const country =async () =>
{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        return countries.map((country) =>country.name);
    }catch(error)
    {
        console.log(error);
    }
}