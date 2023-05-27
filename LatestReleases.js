import { Container, Row, Col } from "react-bootstrap"
import MyBadge from "./MyBadge"
import SingleCard from "./SingleCard"
import SearchBar from "./SearchBar"
import React, { useEffect, useState } from "react"
import PacmanLoader from 'react-spinners/PacmanLoader'
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import CommentsNoModal from "./CommentsNoModal"
import '../styles/loader.css'
import "../styles/bookCard.css"

const LatestReleasePage = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false); // loading inizializzato a false
  const [error, setError] = useState(null); //  error inizializzato a null
  const [books, setBooks] = useState([]); //  books inizializzato con un array vuoto
  //console.log(books);
  const [renderBooks, setRenderBooks] = useState([]); // renderBooks inizializzato con un array vuoto
  const [selected, setSelected] = useState("");

  const getBooks = async () => {
    setLoading(true); //inizio del caricamento true
    try {
      const data = await fetch("https://epibooks.onrender.com/");
      const response = await data.json();
      setBooks(response); // aggiorna lo stato books con i libri response
      setRenderBooks(response); // aggiorna lo stato renderBooks con i libri response
      setLoading(false); //fine del caricamento false
    } catch (error) {
      if (error) {
        setError("Errore durante ricezione dei dati");
      }
    }
  };

  useEffect(() => {
    //  componente  montato
    getBooks(); // funzione getBooks per ottenere i libri
  }, []); //array delle dipendenze vuoto

  return (
    <>
      <div
        className="main-container"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        {error && <h1 className="text-danger">{error}</h1>}
        {loading && !error && <PacmanLoader color="#36d7b7" className="spinner" />}
        {!loading && !error && (
          <div>
            <SearchBar
              books={books}
              setBooks={setBooks}
              setRenderBooks={setRenderBooks}
            />{" "}
            {/* passa i libri e le funzioni di aggiornamento come proprietà alla componente SearchBar */}
            <MyBadge str="fantasy" color="badge rounded-pill text-bg-primary mx-2" />
            <MyBadge str="history" color="badge rounded-pill text-bg-success mx-2" />
            <MyBadge str="horror" color="badge rounded-pill text-bg-danger mx-2" />
            <MyBadge str="romance" color="badge rounded-pill text-bg-warning mx-2" />
            <MyBadge str="scifi" color="sbadge rounded-pill text-bg-info mx-2" />
            <Container>
              <Row>
                <Col className="d-flex flex-wrap gap-2" lg={8} >
                    {renderBooks &&
                      renderBooks.map((book) => (
                        <SingleCard
                          key={book.asin}
                          title={book.title}
                          img={book.img}
                          author={book.author}
                          price={book.price}
                          asin={book.asin}
                          category={book.category}
                          setSelected={setSelected}
                          selected={selected === book.asin}
                        />
                      ))}
                </Col>
                <Col>
                  <CommentsNoModal book={selected} />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};

export default LatestReleasePage