import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'

import { Link } from 'react-router-dom'
import { Cardata } from '../../Data/Cardata'
import { Bikedata } from '../../Data/Bikedata'
import { Scootydata } from '../../Data/Scootydata'



function Dashboard() {
  const display = Cardata.slice(0,4)
  const displayBenz = Bikedata.slice(0,4)
  const displayScooty = Scootydata.slice(0,4)
  return (

    <Row>
        <Col sm={2} className="dash">
     
      
      <Sidenav />
        </Col>
      
       
        <Col sm={10} className="dash-1">
        
        
       <div  className='container-fluid d-flex flex-wrap justify-content-around align-items-center my-5' >

       {
        displayBenz.map((e)=>{
          return(
            
            <Link to={"/benj"}  className='text-decoration-none'>
            <div key={'id'} className='ggg border p-2 m-2 ' >
            
            <img src={e.Image} alt={e.name} />
           
            <h5>{e.brand}</h5>
            
            </div>
            </Link>
          )
          
        })
      }
      <div className='view'>
       <Link to={"/benj"}><h4> Viewmore</h4></Link>
      
       </div>
      </div>
 
     
        <div className='container-fluid  d-flex flex-wrap justify-content-around my-4'>
        {
        display.map((e)=>{
          return(
            <Link to={"/car"} className='text-decoration-none'>
            <div key={'id'} className='ggg border p-2 m-2 ' >
            
            <img src={e.Image} alt={e.name} />
           
            <h5>{e.brand}</h5>
            
            </div>
            </Link>
          )
        })
      }
       <div className='view'>
       <Link to={"/car"}><h4> Viewmore</h4></Link>
      
       </div>
      </div>

      <div className='container-fluid d-flex flex-wrap justify-content-around my-4'>
        {
        displayScooty.map((e)=>{
          return(
            <Link to={"/scooty"}  className='text-decoration-none'>
            <div key={'id'} className='ggg border p-2 m-2 ' >
            
            <img src={e.Image} alt={e.name} />
           
            <h5>  {e.brand}</h5>
            
            </div>
            </Link>
          )
        })
      }
       <div className='view'>
       <Link to={"/"}><h4> Viewmore</h4></Link>
      
       </div>
      </div>
      
        </Col>
       
    </Row>
   
  
  )
}

export default Dashboard