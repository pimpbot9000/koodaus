import * as React from 'react'
import MathJax from 'react-mathjax'

const InlineMath = ({children}) => <MathJax.Provider><MathJax.Node inline formula={children}/></MathJax.Provider>

export default InlineMath