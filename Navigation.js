import {Container, Nav, Navbar} from 'react-bootstrap/'
import { ThemeContext } from '../components/ThemeContext'
import { useContext } from 'react'

function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">M7-D8 📚</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="/Fantasy">Fantasy</Nav.Link>
          <Nav.Link href="#link">History</Nav.Link>
          <Nav.Link href="#link">Horror</Nav.Link>
          <Nav.Link href="#link">Romance</Nav.Link>
          <Nav.Link href="#link">Sci-Fi</Nav.Link>
        </Nav>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.background,
            color: theme.text,
            padding: '0.5rem 1rem',
            border: `2px solid ${theme.text}`,
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          {theme === ThemeContext ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          
        </button>
      </Container>
    </Navbar>
  );
}

export default Navigation