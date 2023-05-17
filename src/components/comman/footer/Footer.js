import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { SiInstagram } from 'react-icons/si'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import './footer.scss'

const footer = () => {
    return (
        <div className='footer'>
            <Container className='footer-sec'>
                <Row className='footer-sec-main'>
                    <Col className='col-3'>
                        <Row><span className='footer-logo'>Panto</span></Row>
                        <Row><span>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</span></Row>
                    </Col>
                    <Col></Col>
                    <Col className='col-2'>
                        <ul className='list-unstyled'>
                            <li className='footer-title'>Services</li>
                            <li>Email Marketing</li>
                            <li>Campaigns</li>
                            <li>Branding</li>
                        </ul>
                    </Col>
                    <Col></Col>
                    <Col className='col-2'>
                        <ul className='list-unstyled'>
                            <li className='footer-title'>Furniture</li>
                            <li>Beds</li>
                            <li>Chair</li>
                            <li>All</li>
                        </ul>
                    </Col>
                    <Col></Col>
                    <Col className='col-2'>
                        <ul className='list-unstyled'>
                            <li className='footer-title'>Follow Us</li>
                            <li><span className='social-logo'><AiOutlineTwitter /></span><span>Twitter</span></li>
                            <li><span className='social-logo'><GrFacebookOption /></span><span>Facebook</span></li>
                            <li><span className='social-logo'><SiInstagram /></span><span>Instagram</span></li>

                        </ul>
                    </Col>
                </Row>
                <Row className='d-flex footer-sec-sub'>
                    <Col className='col-8 copyright'>
                        <span>Copyright © 2021</span>
                    </Col>
                    <Col className='col-2'>
                        <span>Terms & Conditions</span>
                    </Col>
                    <Col className='col-2'>
                        <span>Privacy Policy</span>
                    </Col>
                </Row>
            </Container></div>
    )
}

export default footer