import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
       <ul className="nav justify-content-center my-2">
  <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/" style={{color:'wheat',fontFamily:'Libre Baskerville, serif',fontSize:'20px'}}>Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/National" style={{color:'wheat',fontFamily:'Libre Baskerville, serif',fontSize:'20px'}}>National</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/International" style={{color:'wheat',fontFamily:'Libre Baskerville, serif',fontSize:'20px'}}>International</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/Sports" style={{color:'wheat',fontFamily:'Libre Baskerville, serif',fontSize:'20px'}}>Sports</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/Entertainment" style={{color:'wheat',fontFamily:'Libre Baskerville, serif',fontSize:'20px'}}>Entertainment</Link>
  </li>
 
</ul> 
    </div>
    
  )
}
