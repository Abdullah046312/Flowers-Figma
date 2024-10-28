import React from 'react'
import "./secondpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images4 from "../../assets/images4.png"
import images5 from "../../assets/images5.png"
import images6 from "../../assets/images6.png"

const Secondpart = () => {
  return (
    <section id='second'> 
        <Container>
            <Row>
                <div className="six">
                <Col lg={4}>
                <div className="five">
                <img src={images4} alt="" />
              <h4>Same Day Delivery. Click & Collect.</h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="five">
                <img src={images5} alt="" />
              <h4>Same Day Delivery. Click & Collect.</h4>
                </div>
                </Col>
                <Col lg={4}>
                <div className="five">
                <img src={images6} alt="" />
              <h4>Same Day Delivery. Click & Collect.</h4>
                </div>
                </Col>

                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Secondpart
