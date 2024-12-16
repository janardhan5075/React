import React from 'react'
import { Bikedata } from '../../Data/Bikedata'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import { Link } from 'react-router-dom'


function Benj() {
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
            
            Bikedata.map((e)=>{
           
              return(
                <Link to={`/benj/${e.id}`}>
                
                <div key={'id'} className='ggg border p-2 m-2 ' >
               
                <img src={e.Image} alt={e.name}/>
                <h5>{e.brand}</h5>
                <p>{e.price}</p>
               
               
                </div>
                </Link>
                   
               
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

export default Benj