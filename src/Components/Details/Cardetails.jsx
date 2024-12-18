import React, { createContext, useState } from 'react';
import { Cardata } from '../../Data/Cardata';
import { Col, Row } from 'react-bootstrap';
import Sidenav from '../Sidenav';
import Header from '../Header';
import { useParams } from 'react-router-dom';

export const CartContext = createContext();

function Cardetails() {
  const [cart, setCart] = useState([]); // Initialize cart as an empty array
  let { id } = useParams();
  let Cardetails = Cardata.find((item) => item.id == id);

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <CartContext.Provider value={{ cart, addToCart }}>
            <Header />
            <div className="container-fluid details my-5">
              <div className="Bike">
                <h1>{Cardetails.brand}</h1>
                <h3>Model: {Cardetails.model}</h3>
                <h5>Price: ₹{Cardetails.price}</h5>
                <h5>Rating: {Cardetails.rating}</h5>
                <h5>Engine: {Cardetails.engine}</h5>
                <h5>Mileage: {Cardetails.milege}</h5>
                <h5>Fuel Tank Capacity: {Cardetails.capacity}</h5>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => addToCart(Cardetails)} // Add product to cart
                >
                  Add to Cart
                </button>
              </div>
              <div className="bike">
                <img src={Cardetails.Image} alt="" style={{ width: '600px' }} />
              </div>
            </div>
          </CartContext.Provider>
        </Col>
      </Row>
    </div>
  );
}

export default Cardetails;
