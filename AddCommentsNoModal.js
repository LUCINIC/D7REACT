import React, { useState, useRef } from "react"
import { Form, Button } from "react-bootstrap/"

const AddCommentsNoModal = ({ asin }) => {
  const [formData, setFormData] = useState({ comment: "", rate: "" });
  const formRef = useRef()
  const isFormValid = () => {
    const { comment, rate } = formData
    const commentLenght = comment.length
    const rateLenght = rate.length
    if (commentLenght > 0 && rateLenght > 0) {
      return true
    }
    return false
  }

  const postComment = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWQ5ZmIxNGE1MTAwMTQ2NjQwMDUiLCJpYXQiOjE2ODMzMTI2NjAsImV4cCI6MTY4NDUyMjI2MH0.72_8Ghdn3dYZ-2Rx5Fk5pLumoX8KP1pvriQjB-RrU04"
          },
          body: JSON.stringify(formData),
        }
      );

      formRef.current.reset()

    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Form ref={formRef}
      onSubmit={postComment}>
      <Form.Control
        as="textarea"
        rows="5"
        name="comment"
        placeholder="Comment..."
        className="my-2 shadow"
        onChange={(e) =>
          setFormData({
            ...formData,
            comment: e.target.value,
            elementId: asin
          })
        }
      />
      <Form.Select
        name="rate"
        className="my-2 shadow"
        onChange={(e) => {
          console.log(e.target.value);
          setFormData({
            ...formData,
            rate: e.target.value,
          });
        }}
      >
        <option>Dai un voto</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <Button disabled={!isFormValid()} type="submit" className="btn btn-primary shadow">Invia</Button>
    </Form>
  );
};

export default AddCommentsNoModal
