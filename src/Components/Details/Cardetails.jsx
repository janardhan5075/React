import React from 'react'
import React, { createContext, useState } from 'react'
import { Cardata } from '../../Data/Cardata'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import Header from '../Header'
import { useParams } from 'react-router-dom'


export const useContext=createContext()

function Cardetails() {
    
   
        const[cart, setCart]=useState(0)
           let { id }=useParams()
           let Cardetails =Scootydata.find((item)=> item.id==id)
       
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
                <div className='container details my-5 '>
                    <div className='bike'>
                       
                        <h2>Brand :{Cardetails.brand}</h2>
                        <h3>Model:{Cardetails.model}</h3>
                        <h5>Price :₹{Cardtails.price}</h5>
                        <h5>Rating :{Cardetails.rating}</h5>
                        <h5>Engine :{Cardetails.engine}</h5>
                        <h5>Milege :{Cardetails.milege}</h5>
                        <h5>Fuel-tank-capacity:{Cardetails.capacity}</h5>
                        <button className='btn btn-outline-warning'onClick={()=>setCart(cart+1)}>add to cart</button>
                    </div>
                    <div>
                        <img src={Cardetails.Image}alt="" style={{width:"600px"}} />
                    </div>
                </div>
                </Col>
            </Row>
        </div>
      )
    }
    



export default Cardetails