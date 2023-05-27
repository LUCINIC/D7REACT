import React from 'react'
import { Container, Button } from 'react-bootstrap'
import NavigationSecondary from '../components/NavigationSecondary'
import Footer from '../components/Footer'

const Fantasy = () => {
    return (
        <>
        <NavigationSecondary />
        <Container className='d-flex justify-content-center my-2'>
            <img src="https://globaluserfiles.com/media/161_928943ed32cc09693d8de753a775697a1679b742.jpeg/v1/w_0,h_0/news133-1581290659.png" style={{ height: 'auto', width: '80%', Object: 'cover', borderRadius: '10px'}} />
        </Container>
        <Footer />
        </>
    )
}

export default Fantasy