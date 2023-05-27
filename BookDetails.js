import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Card, Badge } from 'react-bootstrap'

const BookDetails = () => {
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { asin } = useParams()
    const bookDetails = async () => {
        setLoading(true);
        try {
            const data = await fetch(`https://epibooks.onrender.com/${asin}`);
            const response = await data.json();
            setDetails(response);
            setLoading(false);
        } catch (error) {
            if (error) setError("si è verificato un errore");
        }
    }
    useEffect(() => {
        bookDetails();
    }, []);
    return (
        <>
            {loading && <div>caricamento</div>}
            {!loading && error && <div>si è verificato un errore</div>}
            {!loading && !error && details &&
                <Card className="mt-5 mx-5" style={{ width: '18rem' }}>
                    <Card.Img className="object-fit-cover w-100 book-card" variant="top" src={details[0].img} />
                    <Card.Body>
                        <Card.Title>{details[0].asin}</Card.Title>
                        <Card.Title>{details[0].title}</Card.Title>
                        <Card.Text>{details[0].category}</Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Link to="/">
                                <Button variant="primary">Home</Button>
                            </Link>
                            <Badge pill bg="success" className="m-3">€{details[0].price}</Badge>
                        </div>
                    </Card.Body>
                </Card >
            }
        </>
    )
}

export default BookDetails