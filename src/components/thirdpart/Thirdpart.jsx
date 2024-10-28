import React from 'react'
import "./thirdpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images7 from "../../assets/images7.png"

const Thirdpart = () => {
  return (
    <section id='third'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="seven">
                    <h2>Hot Deal ! Sale Up To 25% <h3>Off</h3></h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button>Sign Up</button>
                </div>
                </Col>
                <Col lg={{span:4, offset:2}}>
                <div className="eight">
                    <img src={images7} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Thirdpart
