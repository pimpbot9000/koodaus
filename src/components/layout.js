import * as React from 'react'
import { useEffect } from 'react'
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



const PageTemplate = ({data, pageContext, children}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const linkItems = pageContext.pagesMetaData.map( (page) => {
        const linkPath = "/" + page.slug

        return (<li><Link to={linkPath}>{page.title}</Link></li>)
    })

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="">🐶KoodiKoiraKoulu🐶</Navbar.Brand>
                </Container>
            </Navbar>
            <br></br>
            <div className="Container">
                <Segment title="Sisältö">
                <title>{pageContext.title}</title>
                <nav>
                  
                    <ul>
                       {linkItems}
                    </ul>
                </nav>
                </Segment>
                <main>
                    <h1>{pageContext.title}</h1>
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


export default PageTemplate