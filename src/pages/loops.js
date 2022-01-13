import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import Code from '../components/code'
const LoopsPage = () => {
    return <Layout pageTitle="Toistolauseet eli silmukat">
        <p>Tässä osassa käsitellään toistolauseita eli silmukoita ("luuppeja"). Toistolauseen avulla jotain käskyjoukkoa suoritetaan monta kertaa peräjälkeen.
            Aloitamme toistolauseen käsitteleminen tutkailemalla <code>for</code>-toistolausetta. <code>for</code>-toistolausetta käytetään tyypillisesti kun
            tulee "käydä läpi" lista.</p>

        <Segment title="1. For-lause, osa 1">
            <p>Alla olevassa esimerkissä for lauseen avulla käydään listan jokainen alkio läpi. Toistolauseessa oleva käsky <Code>print(nimi)</Code> siis toistetaan
                niin monta kertaa kuin listassa on nimiä.</p>

            <p>Tutkaile koodia ja aja ohjelma.</p>
            <Obs>Pistä merkille sisennys rivillä 4. Muista että sisennys tehdään tabulaattori-näppäimellä.</Obs>
            <iframe src="https://trinket.io/embed/python3/08eb7c4eef?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h5>Tehtävä 1.1</h5>
            <p>Muokkaa ohjelmaa siten että silmukassa oleva <code>print</code>-käsky tulostaa joka kierroksella tekstin "Hei [nimi tähän]!". Sovelluksen tulee siis 
            tervehtiä jokaista listasta löytyvää henkilöä.</p>
            <h5>Tehtävä 1.2</h5>
            <p>Kokeile lisätä silmukkaan toinenkin <code>print</code>-käsky. Käsky voi tulostaa mitä ikinä haluatkin. Huomaa sisennys! Sisennyksen avulla Pythonissa kerrotaan mitkä käskyt ovat osa silmukkaa.</p>
        </Segment>

        <Segment title="2. For-lause, osa 2">
            <p>Suorita ohjelma ja tutkaile ohjelman tulostetta. Tässä osiossa ei ole tehtäviä, tämä toimii lähinnä demonstraationa siitä miten silmukka toimii.</p>
            <Obs>
                Silmukan yhden kierroksen aikana suoritetaan 3 käskyä. Huomaa sisennykset riveillä 4, 5 ja 6.
            </Obs>
            <iframe src="https://trinket.io/embed/python3/c470564e43?runOption=run" width="100%" height="350" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        </Segment>

        <Segment title="3. For-lause, osa 3">
            <h5>Tehtävä 2.1</h5> 
            <p>Matematiikan tunnilla opettaja käskee sinua laskemaan funktion <Code>f(x) = 2x + 1</Code> arvon muuttujien arvolla 0...5. Koska olet laiska haluat ulkoistaa
            tämän tietokoneelle. Toteuta tämä alla olevaan koodipohjaan.</p>
            <Obs>Muista että vaikka matematiikassa usein kertomerkkejä ei merkitä näkyviin, ohjelmointikielessä ei voi olla näkymättömiä kertomerkkejä</Obs>
            <iframe src="https://trinket.io/embed/python3/4e0e6f9ff7?runOption=run" width="100%" height="350" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h5>Tehtävä 2.2</h5>
            <p>Taksimatkan aloitusmaksu on 5 € ja kilometritaksa 2 € / km. Muodosta funktio jonka avulla voidaan laskea taksimatkan kokonaishinta, kun taksilla kuljetun
                matkan pituus on x. Tee sovellus, joka laskee taksimatkan hinnat muuttujien arvoilla 0 ... 6. Käske ohjelmaa tulostamaan jokaisella silmukan kierroksella sekä 
                taksimatkan pituus että hinta, esimerkiksi seuraavasti: "<em>Taksimatkan pituus on 1 km ja hinta 7 €</em>".</p>
            <Obs>
                Muista että sisennyksellä Pyhtonissa kerrotaan mitkä käskyt ovat osa silmukkaa.
            </Obs>
                <iframe src="https://trinket.io/embed/python3/2a9c9d5e77?runOption=run" width="100%" height="350" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>            
        </Segment>

    </Layout>
}

export default LoopsPage