import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import { colOne, colTwo, colThree } from '../data/footerLinks'
import { nanoid } from 'nanoid';
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='footer pt-3 d-flex justify-content-end'>
            <Row>
                <Col lg={1}>
                    <ul>
                        {
                            colOne.map((item) => {
                                return (
                                    <li key={nanoid()}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col lg={4}>
                    <ul>
                        {
                            colTwo.map((item) => {
                                return (
                                    <li key={nanoid()}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col lg={7}>
                    <ul>
                        {
                            colThree.map((item) => {
                                return (
                                    <li key={nanoid()} > {item.title} </li>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Footer