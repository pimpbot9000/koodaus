import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'

const MathPage = () => {
    return <Layout pageTitle="Koodausta ja matematiikkaa">
        <p>Tässä osiossa teemme hieman matematiikkaa Pythonin avulla aiemmin opittujen asioiden avulla. Koodaamisen kautta keraamme muutamia asioita, kuten
            Pythagoraan lause ja suoran kulmakerroin.
        </p>

        <Segment title="1. Pythagoraan lause">
            <h4>Tehtävä 1.1</h4>
            <p>Laajenna alla olevaa sovellusta seuraavasti:</p>
            <ul>
                <li>Ohjelman tulee kysyy käyttäjältä toisenkin kateetin pituus ja tallentaa tämä muuttujaan <code>kateetti2</code>.</li>
                <li>Funktion <code>hypotenuusa</code> tulee laskea hypotenuusan pituus ja palauttaa tämä arvo.</li>
                <li>Käyttäjän syötteiden avulla lasketaan hypotenuusan pituus käyttämällä funktiota <code>hypotenuusa</code></li>
                <li>Lopuksi hypotenuusan pituus tulostetaan <code>print</code>-käskyn avulla</li>
            </ul>
            <iframe src="https://trinket.io/embed/python3/f78f142beb?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        </Segment>

    </Layout>
}

export default MathPage