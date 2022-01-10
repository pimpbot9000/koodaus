import * as React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Koodikouliminen</Navbar.Brand>
                </Container>
            </Navbar>
            <br></br>
            <div className="Container">
                <title>{pageTitle}</title>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <main>
                    <h1>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout