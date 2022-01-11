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
                        <li><Link to="/fundamentals">Perusteet</Link></li>
                        <li><Link to="/functions">Funktiot</Link></li>
                        <li><Link to="/input">Syötteen lukeminen</Link></li>
                        <li><Link to="/ifelse">Ehtolauseet</Link></li>
                        <li>Toistolauseet eli silmukat</li>
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