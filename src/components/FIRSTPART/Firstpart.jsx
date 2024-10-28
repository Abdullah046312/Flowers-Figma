import React from 'react'
import "./firstpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images1 from "../../assets/images1.png"
import images2 from "../../assets/images2.png"
import images3 from "../../assets/images3.png"
const Firstpart = () => {
  return (
    <section id='first'>
        <Container>
            <Row>
                <Col lg={{span:6, offset:3}}>
                <div className="three">
                <h2>Our Featured Flowers</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                <div className="four">
                    <img src={images1} alt="" />
                    
                </div>
                </Col>
                <Col lg={4}>
                <div className="four">
                    <img src={images2} alt="" />
                    
                </div>
                </Col>
                <Col lg={4}>
                <div className="four">
                    <img src={images3} alt="" />
                    
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Firstpart
