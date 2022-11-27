import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"




function Navigation() {
    return (
        <Navbar expand="lg" variant="light" bg="danger">
            <Container>
                <Nav className='me-auto'>
                    <Link to="/" className='ms-5 text-decoration-none  text-light ' >
                        🏠 Home
                    </Link>
                    <Link to="Contacto" className='ms-5 text-decoration-none text-light '>
                        📒 Contacto
                    </Link>
                </Nav>
                <Navbar.Brand href="#" className='text-light'>Happy Cake 🍰 </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigation;