import React, { createContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import Header from '../Header'
import { Bikedata } from '../../Data/Bikedata'
import { useParams } from 'react-router-dom'

export const useContext=createContext()
function Bikedetails() {
    const[cart, setCart]=useState(0)
    let { id }=useParams()
    let Bikedetails =Bikedata.find((item)=> item.id==id)
   
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
                   
                    <h2>Brand :{Bikedetails.brand}</h2>
                    <h3>Model:{Bikedetails.model}</h3>
                    <h5>Price :₹{Bikedetails.price}</h5>
                    <h5>Rating :{Bikedetails.rating}</h5>
                    <h5>Engine :{Bikedetails.engine}</h5>
                    <h5>Milege :{Bikedetails.milege}</h5>
                    <h5>Fuel-tank-capacity:{Bikedetails.capacity}</h5>
                    <button className='btn btn-outline-danger'onClick={()=>setCart(cart+1)}>add to cart</button>
                </div>
                <div className='bike'>
                    <img src={Bikedetails.Image}alt="" style={{width:"600px"}} />
                </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Bikedetails