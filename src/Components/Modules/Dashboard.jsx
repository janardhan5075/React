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
        
        
       <div  className='container-fluid d-flex flex-wrap justify-content-around align-items-center' >

       {
        displayBenz.map((e)=>{
          return(
            <Link to={"/benj"}>
            <div key={'id'} className='ggg border p-2 m-2 ' >
            
            <img src={e.Image} alt={e.name} />
           
            <h5>{e.brand}</h5>
            
            </div>
            </Link>
          )
          
        })
      }
      <div className='view'>
       <Link to={"/benj"}> <button type='submit'className='btn btn-outline-primary'>Viewmore</button></Link>
      
       </div>
      </div>
 
     
        <div className='container-fluid  d-flex flex-wrap justify-content-around'>
        {
        display.map((e)=>{
          return(
            <div key={'id'} className='ggg border p-2 m-2 ' >
            
            <img src={e.Image} alt={e.name} />
           
            <h5>  <span style={{ color: 'darkgrey' }}>  Brand : </span>{e.brand}</h5>
            
            </div>
          )
        })
      }
       <div className='view'>
       <Link to={"/car"}> <button type='submit'className='btn btn-outline-success'>Viewmore</button></Link>
      
       </div>
      </div>

      <div className='container-fluid d-flex flex-wrap justify-content-around'>
        {
        displayScooty.map((e)=>{
          return(
            <div key={'id'} className='ggg border p-2 m-2 ' >
            
            <img src={e.Image} alt={e.name} />
           
            <h5>  {e.brand}</h5>
            
            </div>
          )
        })
      }
       <div className='view'>
       <Link to={"/"}> <button type='submit'className='btn btn-outline-success'>Viewmore</button></Link>
      
       </div>
      </div>
      
        </Col>
       
    </Row>
   
 
  )
}

export default Dashboard