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
                
                <div key={'id'} className='ggg border p-2 m-2 bg-dark text-light ' >
               
                <img src={e.Image} alt={e.name}/>
                <p>{e.price}</p>
                <h6>Brand :{e.brand}</h6>
                 <Link to={"/benj"}><button type='submit' className='btn btn-outline-info '>Add to cart</button></Link>
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

export default Benj