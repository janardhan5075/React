import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';


function Login() {
  return (
    <div className='container-fluid'>
      
      <Row className="main">
        <Col sm={6} className="log-sign">
        <h1>hello</h1>
        <h1>WElcome</h1>
        </Col>
        <Col sm={6} className="log-sign-1">

        <h1>Login</h1>
        <form action="">
            <input type="text" placeholder='Enter your user name'className=' text-center my-3' />
            <br />
            <input type="password" placeholder='Enter your password'className=' text-center my-3' />
            <br />
            <Link to={"/dashboard"}><button type="submit" className="btn btn-primary my-3">Login</button></Link><br/>
        </form>
        <p>Don't have an account? <Link to={"/signup"}>Create Account</Link></p>
        <Link to={"/"}><button type="submit" className="btn btn-primary my-3">Back to home</button></Link>
        </Col>
      </Row>
    
    </div>
  );
}

export default Login;
