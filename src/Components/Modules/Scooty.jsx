import React from "react";
import { Scootydata } from "../../Data/Scootydata";
import Sidenav from "../Sidenav";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
function Scooty() {
  return (
    <div className="container-fluid">
      <div>
        <Row>
          <Col sm={2}>
            <Sidenav />
          </Col>

          <Col sm={10}>
            <Link to={"/dashboard"}>
              <button type="submit" className="btn btn-outline-success">
                Back
              </button>
            </Link>

            <div className="d-flex flex-wrap justify-content-around">
              {Scootydata.map((e) => {
                return (
                     <Link to={`/scooty/${e.id}`}  className='text-decoration-none'>
                  <div key={"id"} className="ggg border p-2 m-2  ">
                    <img src={e.Image} alt={e.name} />
                    <h5>{e.brand}</h5>
                    <p>₹ {e.price}</p>

                    <Link to={"/scooty"}><button type='submit' className='btn btn-outline-success'>Add to cart</button></Link>
                  </div>
                  </Link>
                );
              })}
            </div>
          </Col>
          <div />
        </Row>
      </div>
    </div>
  );
}

export default Scooty;

