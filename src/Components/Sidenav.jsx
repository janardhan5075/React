import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='sidenav'>
     
     <ul>
      <Link to={"/dashboard"}><li>Dashboard</li></Link>
      <Link to={"/benj"}><li>Bikes</li></Link>
      <Link to={"/car"}><li>Cars</li></Link>
      <Link to={"/scooty"}><li>Scooty</li></Link>
      
     
     </ul>
     
     <div>
        <Link to={"/"}><button type='submit' className='btn btn-outline-success'>Logout</button></Link>
        </div>
    </div>
  )
}

export default Sidenav