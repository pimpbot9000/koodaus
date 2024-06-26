import * as React from "react"
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import { Link } from 'gatsby'

const IndexPage = () => {
  const pageContext = {
    title: "Coding 101 for children and slow adults",
    pagesMetaData: []
  }
  return (
    <Layout pageContext={pageContext}>
      <Segment title="Tervetuloa">
      <p>Opiskelohjeet. Lue materiaalia. Kun törmäät koodiesimerkkiin toimi seuraavasti:</p>
      <ul>
        <li>Jeejee   jsjdj Ensiksi tutkaile koodia ja pohdi mitä se kenties tekee</li>
        <li>Kun olet saanut jonkinlaisen tuntuman koodiin, suorita koodi (painamalla "play" nappulaa) ja katso toimiiko se niinkuin ajattelit sen toimivan.</li>
      </ul>
      <p>Ensimmäinen harjoitus: Mitä ajattelisit että alla oleva koodi tekee? Sinun ei tarvitse tietää (vielä) koodaamisesta yhtään mitään!</p>
      <iframe title="2dd2506c27" src="https://trinket.io/embed/python3/2dd2506c27?runOption=run" width="100%" height="300"></iframe>
      <p>Jahka olet suorittanut pähkäilyn ja ajanut ohjelman voit siirtyä ensimmäiseen osioon nimeltä <Link to="/basics">Perusteet</Link></p>
      </Segment>
      <Obs>
        Tämä materiaali on tarkoitettu osaksi peruskoulun yhdeksännen luokan matematiikan opiskelua.
      </Obs>
    </Layout>
  )
}


export default IndexPage
