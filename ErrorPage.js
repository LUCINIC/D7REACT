import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/errorPage.css'

const ErrorPage = () => {
    return (
        <>
            <h1 className='my-3' id='errorTitle'>ERROR 404!</h1>
            <Container className="d-flex justify-content-center">
                <img src="https://media.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" />
            </Container>
            <h3 className='mt-2' id='errorP'>PAGE NOT FOUND</h3>
        </>
    )
}

export default ErrorPage