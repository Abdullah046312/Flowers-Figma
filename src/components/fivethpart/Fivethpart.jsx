import React from 'react'
import "./fivethpart.css"
import { Col, Container, Row } from 'react-bootstrap'
import images12 from "../../assets/images12.png"

const Fivethpart = () => {
  return (
   <section>
    <Container>
        <Row>
            <Col lg={12}>
            <div className="eleven">
                <h2>Get The Latest Deals</h2>
                <p>$30 coupon for first shopping</p>
                <div className="twelve">
                <input type="text" placeholder='Enter your email here....' />
                <button>Subscribe</button>

                </div>

            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Fivethpart
