import * as React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import { MDXProvider } from "@mdx-js/react"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Segment from './segment'
import Obs from './obs'
import Quote from './quote'
import Code from './code'
import Task from './task'
import Trinket from './trinket'
import InlineMath from './mathjax-inline'
import Error from './error'



const PageTemplate = ({ pageTitle, children }) => {

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">🐶KoodiKoiraKoulu🐶</Navbar.Brand>
                </Container>
            </Navbar>
            <br></br>
            <div className="Container">
                <title>{pageTitle}</title>
                <nav>
                    Sisältö:
                    <ul>
                        <li><Link to="/">Etusivu</Link></li>
                        <li><Link to="/fundamentals">Perusteet</Link></li>
                        <li><Link to="/functions">Funktiot</Link></li>
                        <li><Link to="/input">Syötteen lukeminen</Link></li>
                        <li><Link to="/ifelse">Ehtolauseet</Link></li>
                        <li><Link to="/loops">Toistolauseet eli silmukat</Link></li>
                        <li><Link to="/math">Matikkaa</Link></li>
                        <li><Link to="/algorithms">Algoritmit</Link></li>
                        <li><Link to="/turtle">Loppukevennys: kilppari</Link></li>
                    </ul>
                </nav>
                <main>
                    <h1>{pageTitle}</h1>
                    <MDXProvider components={{
                        h3: Task,
                        thematicBreak: () => <><br/><br></br></>,
                        Segment, Obs, Quote, Code, Task, Trinket, InlineMath, Error
                    }}>{children}</MDXProvider>
                </main>
            </div>
        </>
    )
}



/*export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`*/
export default PageTemplate