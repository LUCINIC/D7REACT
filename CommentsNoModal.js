import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import RatingSystem from './RatingSystem'
import { nanoid } from 'nanoid'
import AddCommentsNoModal from './AddCommentsNoModal'
import Container from 'react-bootstrap/Container'

const CommentNoModal = ({ book }) => {
  console.log(book)
  const [comments, setComments] = useState([]);
  const getSingleBookComments = async () => {
    try {
      const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWQ5ZmIxNGE1MTAwMTQ2NjQwMDUiLCJpYXQiOjE2ODMzMTI2NjAsImV4cCI6MTY4NDUyMjI2MH0.72_8Ghdn3dYZ-2Rx5Fk5pLumoX8KP1pvriQjB-RrU04"
        }
      });
      const response = await data.json();
      setComments(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleBookComments();
  }, [book]);

  return (
    <>
      <h5>SEZIONE DEDICATA AI COMMENTI:</h5>
      <ListGroup style={{ height: "200px", overflowY: "auto" }}>
        {(book.length > 0) && comments.map((comment) => (
          <ListGroup.Item key={nanoid()} className="d-flex justify-content-between align-items-start">
            <div className='ms-2 me-auto'>
              <div>{comment.comment}</div>
              <div>relativo al libro: {comment.elementId}</div>
            </div>
            <RatingSystem stars={comment.rate} />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Container>
        <AddCommentsNoModal asin={book} />
      </Container>
    </>
  );
};

export default CommentNoModal
