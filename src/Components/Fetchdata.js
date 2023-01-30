import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react'
export default function Fetchdata() {
  const [Data,setData] =  useState('');
  const fetchdata = () =>{
     axios.get(
      `https://newsdata.io/api/1/news?apikey=pub_16266d70e5af4ff1a7d90be7b1d2b33a6ad5e&q=national&country=in&language=en&category=top  `)
    
  
    .then((res)=>{setData(res.data.results)});
  }
  useEffect(()=>{
    fetchdata()
    
  },[]);
/*res.data.articles*/
  return (
    <>
    <div className='container my-5'>
      <h1 style={{fontFamily:'Montserrat, sans-serif',display:'flex',justifyContent:'center',alignItems:'center'}}><b>
      Top Headlines</b></h1>
    </div>
     <div className="container my-3" style={{boxShadow:'2px 2px 10px black',paddingTop:'30px',borderRadius:'10px',paddingBottom:'30px'}}>
      {Data ? Data.map((items,index)=>{
        return(
        <>
        <div className="container my-5">
        <h3 className='my-3' style={{fontFamily:'Roboto,sans-serif'}}>{items.title}</h3>
        <div className='container my-3' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src={items.image_url} alt="Cant Find!" className='img-fluid my-2' style={{width:'auto',height:'300px',objectFit:'auto'}}/>
        </div>
        <p className='my-3' style={{fontFamily:'Unbounded, cursive'}}>{items.description}</p>
        <div className="container" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <a href={items.link} target='blank'><button type="button" className="btn btn-primary my-2">View More</button></a>
    
        
        </div>
        <hr />
        </div>
        </>
        )
      }):'Loading....'}
    </div> 


    </>
  )
}
