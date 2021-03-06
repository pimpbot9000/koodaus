import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import Code from '../components/code'

const FunctionsPage = () => {
    return <Layout pageTitle="Funktiot">
        <p>Edellisessä osassa törmäsimme muutamaan funktioon kuten <code>sqrt</code> ja <code>print</code>. Tässä osiossa laadimme itse funktioita.</p>
        <Segment title="1. Eka funktio">
            <p>Mikä funktio ohjelmointikielessä oikein on? Tyypillisesti funktio on samanlainen kuin matematiikassa: funktiolle syötetään jokin arvo
                tai arvoja ("input") ja näiden arvojen avulla lasketaan jotain ja pullautetaan tulos ulos ("output").</p>
            <p>Alla olevassa esimerkissä on määritelty funktio nimeltä <code>summa</code> jolle voidaan syöttää inputtina kaksi lukua <code>x</code> ja <code>y</code>. Funktio
                laskee lukujen <code>x</code> ja <code>y</code> summan ja pullauttaa tämän ulos.</p>
            <Obs>Virallinen termi ulos pullauttamiselle on "palauttaa arvo", tästä syystä
                Pythonissa käytetään <code>return</code> nimistä käskyä funktioissa.</Obs>
            <Obs><code>def</code> tulee sanasta <em>define</em> eli "määrittele". Huomaa myös sisennys rivillä 2. Sisennys kertoo Pythonissa mitkä käskyt ovat
                osa funktiota. Sisennys tehdään tabulaattori-näppäimen avulla. Tabulaattori on Caps Lock -näppäimen yläpuolella.</Obs>
            <br />
            <iframe src="https://trinket.io/embed/python3/9fb9364433" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <Obs>
                <p>Edellisessä on syytä kiinnittää huomiota riviin 5, jossa on käsky <Code>tulos = summa(3, 5)</Code></p>
                <p>Koska kyseessä on sijoitusoperaatio, käsky on syytä taas ajatella "oikealta vasemmalle"</p>
                <ul>
                    <li>Funktiokutsu <Code>summa(3, 5)</Code> laskee lukujen 3 ja 5 summan ja palauttaa summan arvon.</li>
                    <li>Palautettu arvo sijoitetaan muuttujaan <code>tulos</code></li>
                </ul>
            </Obs>
            <p>Seuraavaksi rohkeasti kokeilemaan omien funktioiden laadintaa! Testaa laatimiesi funktioden toimintaa <code>print</code> käskyn avulla.</p>
            <h5>Tehtävä 1.1</h5>
            <p>Nimeä funktio uudestaan ja anna sille nimi <code>tulo</code> ja muokkaa funktiota siten että se laskee lukujen <code>x</code> ja <code>y</code> tulon
                ja palauttaa tulon arvon.</p>

            <h5>Tehtävä 1.2</h5>
            <p>Luo uusi funktio, joka laskee kolmen inputtina eli <em>argumenttina</em> annetun luvun summan. </p>
            <h5>Tehtävä 1.3</h5>
            <p>Luo uusi funktio, joka laskee kolmen argumenttina annetun luvun tulon.</p>

        </Segment>
        <Segment title="2. Matematiikasta tuttuja funktioita">
            <p>Muista seuraavissa tehtävissä testata laatimiesi funktioiden toimintaa <code>print</code>-käskyn avulla.</p>
        <iframe src="https://trinket.io/embed/python3/6952c692bc?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h5>Tehtävä 2.1</h5>
            <p>Luo funktio nimeltä <code>piiri</code>, jolle syötetään säteen <code>r</code> pituus. Funktion tulee laskea ympyrän kehän pituus.</p>
            <Obs>Huom! Koodiin on valmiiksi lisätty käsky <Code>from math import sqrt, pi</Code> joten käytössäsi on muuttuja <code>pi</code> (pii) ja funktio <code>sqrt</code> eli neliöjuuri.</Obs>
            <h5>Tehtävä 2.2</h5>
            <p>Luo funktio nimeltä <code>pinta_ala</code>, jolle syötetään säteen <code>r</code> pituus. Funktion tulee laskea ympyrän pinta-ala.</p>
            <h5>Tehtävä 2.3</h5>
            <p>Luo funktio nimeltä <code>hypotenuusa</code>, jolle annetaan inputtina kaksi eri lukua <code>a</code> ja <code>b</code>, jotka ovat suorakulmaisen
                kolmion kateettien pituudet. Funktion tulee laskea hypotenuusan pituus.</p>

        </Segment>
        <Segment title="3. Funktio ilman paluuarvoa">
            <p>Matematiikassa funktio palauttaa aina jonkin arvon. Ohjelmointikielissä voidaan myös laatia funktioita, jotka eivät palauta mitään arvoja.
                Alla on esimerkki tällaisesta funktiosta, joka ei palauta mitään arvoa, vaan ainoastaan tulostaa tekstiä.</p>
            <iframe src="https://trinket.io/embed/python3/7190f5e043" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

            <Obs>Koska Python-ohjelmointikielellä laaditun funktion ei välttämättä tarvitse palauttaa mitään arvoa, kaikki Python-kielellä laaditut funktiot eivät ole funktioita samassa mielessä kuin
                matematiikassa.
            </Obs>
            <h5>Tehtävä 3.1</h5>
            <p>Luo funktio nimeltä <code>greeter2</code> jolle syötetään kaksi eri muuttujan arvoa <code>first_name</code> ja <code>last_name</code>. Funktio ei palauta
                mitään arvoja vaan sen sijasta tulostaa muuttujien arvojen avulla seuraavanlaisen tekstin:</p>
            <p><code>Hyvää iltapäivää Oliver Stark. Voinko kutsua sinua etunimelläsi Oliver?</code></p>
            <h5>Tehtävä 3.2</h5>
            <p>Luo funktio jolle ei syötetä mitään arvoa. Funktio ainoastaan tulostaa tekstin <code>moi!</code></p>
            <Obs>
                Jos funktiolle ei syötetä arvoja, tällöin funktio määritelmässä täytyy kuitenkin olla sulkeet, mutta sulkeiden sisälle ei laiteta mitään, esim.
                seuraavasti:<br />
                <Code>def oma_funktio():</Code><br />

            </Obs>
        </Segment>

    </Layout>
}

export default FunctionsPage