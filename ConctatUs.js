import React from 'react'
import { Container, Button } from 'react-bootstrap'
import NavigationSecondary from '../components/NavigationSecondary'
import Footer from '../components/Footer'

const ContactUs = () => {
    return (
        <>
            <NavigationSecondary />
            <Container className='d-flex my-3'>
                <img src="https://i.pinimg.com/originals/56/35/0c/56350c9b273b50fd801dd5a59f3ee32c.png"
                    style={{ height: '500px', width: '700px', Object: 'cover', borderRadius: '10px'}} />

                <div className='mx-3'>
                    <h1>Contattaci</h1>
                    <p>
                        tel. 011.6698877 <br />
                        fax. 011.6698888 <br />
                        email. epicbook@book.it <br />
                        Craven Road 7, London UK
                    </p>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default ContactUs