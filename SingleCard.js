import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

const SingleCard = ({ asin, title, author, category, price, img, setSelected, selected }) => {
    return (
        <div>
            <Card className={`${selected ? "border border-danger shadow" : null}`} style={{ width: '14rem' }} onClick={() => setSelected(asin)}>
                <Card.Img
                    className="object-fit-cover w-100 book-card"
                    variant="top"
                    src={img}
                    alt={title}
                />
                <Card.Body key={asin}>
                    <Card.Title className="text-truncate">{title}</Card.Title>
                    <Card.Subtitle className="mb-2">{author}</Card.Subtitle>
                    <Card.Text className="mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</Card.Text>
                    <div className='d-flex justify-content-center'>
                        <Link to={`/book/${asin}`}>
                            <Button className="mx-1 my-1 px-1 py-1">Details</Button>
                        </Link>
                        <Badge pill bg="success" className="m-3">€{price}</Badge>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleCard