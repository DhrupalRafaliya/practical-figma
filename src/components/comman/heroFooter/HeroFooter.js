import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { choosingUSData } from '../../../assets/constant/choosingUSData'
import Arrow from '../../../assets/images/ArrowVector.png'
import './heroFooter.scss'

const HeroFooter = () => {
    return (
        <Container className='hero-footer'>
            <Row>
                <Col className='col-3 hero-footer-main-title'> <span className=' main-title   '>Why<br />
                    Choosing Us</span></Col>
                {
                    choosingUSData.map((data) => {
                        return <Col className='col-3' key={data.id}>
                            <ul className='list-unstyled'>
                                <li className='hero-footer-title'>{data.title}</li>
                                <li className='hero-footer-disc'>{data.discription}</li>
                                <li>
                                    <div className='see-more-btn'><span className='more-info-link'>More Info</span> <img src={Arrow} alt="" /> </div>
                                </li>
                            </ul>
                        </Col>
                    })
                }
            </Row>
        </Container>
    )
}

export default HeroFooter