import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import images from "../../../assets/images.png"

const Banner = () => {
  return (
   <section id='banner_main'>
    <Container>
      <Row>
        <Col lg={6}>
        <div className="one">
          <h2>Let's make beautiful flowers a part of your life.</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          <button>Shop Now</button>
        </div>
        </Col>
        <Col lg={{span:5, offset:1}}>
        <div className="two">
          <img src={images} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Banner
