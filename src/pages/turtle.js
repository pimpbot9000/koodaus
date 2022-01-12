import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import Code from '../components/code'
const MathPage = () => {
    return <Layout pageTitle="Piirustamista kilpparilla">
        <iframe src="https://trinket.io/embed/python/413c450ce5?runOption=run" width="100%" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
    </Layout>
}

export default MathPage