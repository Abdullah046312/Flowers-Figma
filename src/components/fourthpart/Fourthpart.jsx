import React from 'react'
import "./fourthpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images8 from "../../assets/images8.png"
import images9 from "../../assets/images9.png"
import images10 from "../../assets/images10.png"
import images11 from "../../assets/images11.png"

const Fourthpart = () => {
  return (
    <section id='four'>
        <Container>
            <Row>
                <Col lg={{span:6, offset:3}}>
                <div className="nine">
                    <h2>Instagram</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                <div className="ten">
                    <img src={images8} alt="" />
                </div>
                </Col>
                <Col lg={3}>
                <div className="ten">
                    <img src={images9} alt="" />
                </div>
                </Col>
                <Col lg={3}>
                <div className="ten">
                    <img src={images10} alt="" />
                </div>
                </Col>
                <Col lg={3}>
                <div className="ten">
                    <img src={images11} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Fourthpart
