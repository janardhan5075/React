import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';



function Signup() {
  return (
    <div className='container-fluid'>
    <Row className="main">
        <Col sm={6} className="log-sign">
        <h1>please enter valid detials</h1>
        </Col>
        <Col sm={6} className="log-sign-1">
      <h1>Signup</h1>
      <form action="">
        <input type="mail"placeholder='Enter Your Email id...'className=' text-center my-3' /><br/>
          <input type="text" placeholder='Enter Your user name'className=' text-center my-3' />
          <br />
          <input type="password" placeholder='Enter Your password'className=' text-center my-3' />
          <br />
          <button type="submit" className="btn btn-primary">Signup</button>
      </form>
     <Link to="/">Back</Link>
     </Col>
      </Row>
  </div>
  )
}

export default Signup