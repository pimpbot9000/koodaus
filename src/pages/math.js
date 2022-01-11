import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import Code from '../components/code'
const MathPage = () => {
    return <Layout pageTitle="Koodausta ja matematiikkaa">
        <p>Tässä osiossa teemme hieman matematiikkaa Pythonin avulla aiemmin opittujen asioiden avulla. Koodaamisen kautta keraamme muutamia matematiikkaa liittyviä asioita. Käytämme
            mm. Pythagoraan lausetta ja palautamme mieleen mikä suoran kulmakerroin taas olikaan. Lisäksi teemme sovelluksen, joka osaa määrittää suoran yhtälön kahden pisteen
            koordinaatin avulla!</p>
        <p> Tämä on tähänastisista osioista kaikista vaikein, sillä nyt sovellamme sekä matematiikassa oppiamme asioita ohjelmoinnissa! Varmasti joudut viimeistään tässä vaiheessa pyytämään
            apua opettajasedältä/tädiltä.
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
            <Obs>
                Käytämme tällä kertaa <code>read_float</code> funktiota, jolloin käyttäjä voi halutessaan syöttää joko kokonaisluvun tai desimaaliluvun. Huomaa että
                desimaalierottimena on piste (näin: <code>2.5</code>) eikä pilkku (ei näin: <code>2,5</code>)
            </Obs>
            <iframe src="https://trinket.io/embed/python3/f78f142beb?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        </Segment>

        <Segment title="2. Kahden pisteen välinen etäisyys">
            <p>Jos tunnetaan kahden pisteen koordinaatit, pisteiden välinen etäisyys voidaan laskea Pythagoraan lauseen avulla. Tämä lienee kaikista eniten käytetty
                pythagoraan lauseen sovellus koko maailmankaikkeudessa. Luonnollisesti, koska kysymyksessä on yleisin Pythagoraan lauseen yleisin sovellus, yhdessäkään
                yläkoulun matematiikan oppikirjassa ei ole koskaan ollut tällaista esimerkkiä, koska fuck you that's why. Joku oppilas voisi pian erehtyä luulemaan että 
                matematiikkaa oikeasti käytetään johonkin.</p>            
            <Obs>
                Tällä kertaa käytössämme on funktio <code>read_coord</code>, joka osaa lukea koordinaatteja jotka on annettu joko muodossa <code>1,2</code> tai <code>(1,2)</code>. Käytämme 
                myös hieman erikoista "destrukturointisijoitusoperaatiota", jonka voi bongata riviltä 8. Emme syvenny tähän sen tarkemmin, mutta näyttää siltä, että
                rivillä 8 sijoitetaan arvot yhtä aikaa kahteen eri muuttujan arvoon!
            </Obs>
            <p>Aivan ensimmäiseksi, testaa ohjelman toimintaa antamalla syötteeksi jokin koordinaatti. Ohjelman tulisi tulostaa erikseen syöttämäsi koordinaatin x- ja y-koordinaatit.</p>
            <iframe src="https://trinket.io/embed/python3/40bf843ca7?runOption=run" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h4>Tehtävä 2.1</h4>
            <p>Laajenna ohjelmaa siten, että se lukee käyttäjältä myös toisen pisteen koordinaatit. Annan näille vaikka nimet <code>x2</code> ja <code>y2</code>.</p>
            <h4>Tehtävä 2.2</h4>
            <p>Nyt kun ohjelma lukee kahden pisteen koordinaatti, koodistele tietokone laskemaan pisteiden välinen etäisyys</p>
            <h4>Tehtävä 2.3</h4>
            <p>Tee lopuksi funktio, jonka avulla pisteiden välinen etäisyys lasketaan. Huomaa että funktiolle tulee antaa 4 eri arvoa argumenttina!</p>            
        </Segment>

        <Segment title="3. Manhattan-etäisyys">

        <p>Oletko käynyt New Yorkissa tai jopa niinkin eksoottisessa paikassa kuin Helsingin keskustassa. Pythagoraan lauseen avulla voidaan laskea kahden pisteen välinen etäisyys
            "linnuntietä" pitkin, mutta kaupungeissa emme voi tietenkään liikkua linnuntietä pitkin.</p>
        <h4>Tehtävä 3.1</h4>
        <p>Googlaa mitä Manhattan-etäisyys tarkoittaa ja pohdi miten tämä lasketaan kahden koordinaatin avulla.</p>
        <h4>Tehtävä 3.2</h4>
        <p>Muokkaa alla olevaa koodia siten, että funktio <code>manhattan_distance</code> laskee ja palauttaa kahden pisteen välisen Manhattan-etäisyyden arvon. Käytä funktiota
        hyväksi siten, että sen avulla lasketaan käyttähän syöttämien koordinaattien Manhattan-etäisyys.</p>
        <Obs>
            Pohdi mihin itseisarvofunktiota <code>abs</code> tarvitaan Manhattan-etäisyyden laskemisessa? Miksi Pythagoraan lauseen tapauksessa ei tarvita itseisarvoa?
        </Obs>
        <iframe src="https://trinket.io/embed/python3/640b2f64a1?runOption=run" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        </Segment>
        
        <Segment title="4. Yhtälöparin ratkaisu, Never Again!">
            <p>Viimeisenä muttei vähäisipänä, yhtäklöparin ratkaisu.</p>
            <p> Ensimmäisenä otat kynän ja paperin käteen ja ratkaiset yhtälöparin ns. yleisessä muodossa. Alla on lineaarinen yhtälöpari esitettynä yleisessä muodossa:</p>
            <Code>ax + bx = c</Code><br/>
            <Code>dx + ex = f</Code>
            <p>(Tässä varsinaisesti tietokone ei ratkaise yhtälöparia. Sinä ratkaiset yhtälöparin mutta tietokone laskee vakioiden avulla yhtälöparin ratkaisujen lukuarvot.)</p>
            <h4>Tehtävä 4.1</h4>
            <p>Laajenna alla olevaa koodia siten, ettei sinun tarvitse ratkaista enää yhtään yhtälöparia käsin!</p>
            <iframe src="https://trinket.io/embed/python3/62e5a77638?runOption=run" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        </Segment>
    </Layout>
}

export default MathPage