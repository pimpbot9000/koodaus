import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'

const InputsPage = () => {
    return <Layout pageTitle="Syötteen lukeminen">
        <p>Yleensä sovellukset ovat vuorovaikutteisia eli interaktiivisia, toisin sanoen käyttäjä pystyy jollain tavalla vaikuttaa sovelluksen toimintaan. Tässä
            osiossa teemme yksinkertaisia sovelluksia, jossa käyttäjä voi ohjelman suorituksen aikana syöttää ohjelmalle esim. merkkijonon tai lukuja.
        </p>
        <Segment title="1. Merkkijonon lukeminen">
        <p>Kokeile ajaa alla oleva ohjelma. Ohjelman suoritus pysähtyy <code>print</code> käskyn jälkeen ja ohjelma odottaa että käyttäjä (oikeanpuoleisessa konsolissa)
        syöttää luvun ja painaa enter-näppäintä. Kokeile syöttää konsolissa oma nimesi. Syötteen lukemisen hoitaa <code>read_str</code>-funktio.</p>
        <Obs>
            <code>read_str</code> ei ole Python-ohjelmointikielen sisäänrakennettu funktio. Kyseinen funktio käyttää hyödyksi Pythonin sisäänrakennettua 
            funktiota <code>input</code>, mutta tässä kurssissa käytämme helpotuksena valmiiksi laadittuja funktioita merkkijonojen, kokonaislukujen ja desimaalilukujen lukemiseksi.
        </Obs>
        <iframe src="https://trinket.io/embed/python3/cb12130092?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        <h4>Tehtävä 1.1</h4>
        <p>Laajenna ohjelmaa siten, että etunimen syöttämisen jälkeen ohjelma kysyy sukunimeä ja tallentaa tämän muuttujaan <code>sukunimi</code>. Lopuksi ohjelma
        tulostaa (esimerkiksi) tekstin <code>Hyvää iltapäivää Matias Häggman</code> muuttujia <code>nimi</code> ja <code>sukunimi</code> hyväksikäyttäen.</p>
        </Segment>
        <Segment title="2. Kokonaisluvun lukeminen">
            <p>TODO</p>
        </Segment>

        <Segment title="2. desimaaliluvun lukeminen">
            <p>TODO</p>
        </Segment>

    </Layout>
}

export default InputsPage