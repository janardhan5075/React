import React, { createContext, useState } from 'react'
import { Scootydata } from '../../Data/Scootydata'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import Header from '../Header'
import { useParams } from 'react-router-dom'


export const useContext=createContext()

function Scootydaetails() {
    
   
        const[cart, setCart]=useState(0)
           let { id }=useParams()
           let Scootydetails =Scootydata.find((item)=> item.id==id)
       
      return (
        <div>
            <Row>
                <Col sm={2}>
                <Sidenav />
                </Col>
                <Col sm={10}>
                <useContext.Provider  value={ cart }>
                <Header />
                </useContext.Provider>
                <div className='container-fluid details my-5 '>
                    <div className='bike'>
                       
                        <h2>Brand :{Scootydetails.brand}</h2>
                        <h3>Model:{Scootydetails.model}</h3>
                        <h5>Price :₹{Scootydetails.price}</h5>
                        <h5>Rating :{Scootydetails.rating}</h5>
                        <h5>Engine :{Scootydetails.engine}</h5>
                        <h5>Milege :{Scootydetails.milege}</h5>
                        <h5>Fuel-tank-capacity:{Scootydetails.capacity}</h5>
                        <button className='btn btn-outline-warning'onClick={()=>setCart(cart+1)}>add to cart</button>
                    </div>
                    <div>
                        <img src={Scootydetails.Image}alt="" style={{width:"600px"}} />
                    </div>
                </div>
                </Col>
            </Row>
        </div>
      )
    }
    

export default Scootydaetails