import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="card container-fluid container my-5" style={{background:'rgba(68, 68, 169, 0.699)',display:'flex',justifyContent:'center',alignItems:'center',color:'white',flex:'column'}}>
      <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p style={{fontFamily:'Montserrat, sans-serif'}}>Made by Samit Bhattacharjee</p>
      <footer className="blockquote-footer" style={{fontSize:'20px'}}> With React.js , Bootstrap and NewsAPI  <cite title="Source Title"></cite></footer>
      
    </blockquote>
  </div>
</div>
    </div>
  )
}
