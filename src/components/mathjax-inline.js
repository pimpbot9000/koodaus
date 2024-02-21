import * as React from 'react'
import MathJax from 'react-mathjax2'

const InlineMath = ({children}) => <MathJax.Context><MathJax.Node>{children}</MathJax.Node></MathJax.Context>

export default InlineMath