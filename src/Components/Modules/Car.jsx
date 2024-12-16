import React from 'react'
import { Cardata } from '../../Data/Cardata'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import { Link } from 'react-router-dom'






function Car() {
 
  return (
    <div className="container-fluid">
     
    <div>
    <Row>
   
      <Col sm={2}>
   <Sidenav />
      </Col>
      

     
     
      <Col sm={10}>
      
      <Link to={"/dashboard"}> <button type='submit'className='btn btn-outline-success'>Back</button></Link>
     
     

      <div className='d-flex flex-wrap justify-content-around'>
      
      {
        
        Cardata.map((e)=>{
       
          return(
            
            <div key={'id'} className='ggg border p-2 m-2  ' >
           
            <img src={e.Image} alt={e.name}/>
            <h5>{e.brand}</h5>
            <p>{e.price}</p>
           
             <Link to={"/car"}><button type='submit' className='btn btn-outline-success'>Add to cart</button></Link>
            </div>
            
               
           
          )
         
        })
      }
      </div>
      

      
      
      </Col>
      <div/>
      
    </Row>
    </div>  
   
    </div>
  )
}

export default Car