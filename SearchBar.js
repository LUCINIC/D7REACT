import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = ({ books, setRenderBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm !== "") {
      console.log(searchTerm)
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRenderBooks(filteredBooks);
    } else {
      setRenderBooks(books);
    }
  };
//Per tornare tutte le cards quando si cancella il termine//
  useEffect(() => {
    handleSearch();
  }, [searchTerm, books]);
//Per non far aggiornare la pagina al submit del btn nel form//
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Container className="my-2">
      <Row>
        <Col sm={12}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Enter a title"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar