import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'

const IfElsePage = () => {
    return <Layout pageTitle="Ehtolauseet: if, else if ja else">
        <p>
            Ehtolauseiden avulla ohjelma voi suorittaa vaihtoehtoisia asioita riippuen siitä onko jokin ehto tosi vai epätosi. Python-ohjelmointikielessä
            ehtolauseita laaditaan if - else if - else -rakenteen avulla. Tässä osiossa tutustutaan ehtolauseiden käyttöön.
        </p>
        <Segment title="1. if-else">
            <p>Alla oleva ohjelma lukee käyttäjältä syötteen (merkkijono), jonka arvo sijoitetaan muuttujaan <code>name</code>. Syötteen lukemisen jälkeen tapahtuu
                seuraavaa:</p>
            <ul>
                <li>Jos (<code>if</code>) muuttujan <code>name</code> arvo on yhtäsuuri kuin <code>Tuomas</code> tulostuu teksti "You're awesome!"</li>
                <li>... muuten (<code>else</code>) tulostuu teksti "meh..." </li>
            </ul>
            <p>Testaa ohjelmaa eri syötteillä! Jos mielestäsi joku muu kuin Tuomas on awesome muokkaa koodia mieleiseksesi.</p>
            <iframe src="https://trinket.io/embed/python3/46f8fc5788" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <Obs>
                <p>Huomasit kenties että if-lauseessa oli yhtäsuuruusmerkkinä <code>==</code>. Nyt täytyy ehdottomasti pysähtyä selventämään eräs tärkeä asia:</p>
                <ul>
                    <li><code>=</code> on <em>sijoitusoperaattori</em>, jota käytetään kun muuttujalle asetetaan arvo.</li>
                    <li><code>==</code> on <em>yhtäsuuruusmerkki</em>, jota käytetään <em>ehtolauseissa</em>, kuten edellisessä koodiesimerkissä.</li>
                </ul>
                <p>On merkille pantavaa että jälkimmäinen tapa käyttää yhtäsuuruusmerkkejä vastaa matematiikan yhtäsuuruutta.</p>
            </Obs>
            <Obs>
                Vertailuoperaattorit:
                <ul>

                    <li><code>==</code> yhtäsuuri kuin</li>
                    <li><code>&lt;</code> pienempi kuin</li>
                    <li><code>&gt;</code> suurempi kuin</li>
                    <li><code>!=</code> eri suuri kuin</li>
                    <li><code>&lt;=</code> pienempi tai yhtäsuuri kuin</li>
                    <li><code>&gt;=</code> suurempi tai yhtäsuuri kuin</li>
                </ul>
            </Obs>
            <h4>Tehtävä 1.1</h4>
            <p> Laajenna alla olevaa ohjelmaa siten, että käytät if-else -rakennetta seuravasti: Jos käyttäjän syöttämä luku on suurempi kuin 1000 tulostuu teksti "Ohhoh!", muuten tulostuu
                teksti "alle donitsi". Huomaa että funktio <code>read_int</code> lukee syötteenä kokonaisluvun.
            </p>
            <iframe src="https://trinket.io/embed/python3/cb6b4e6668?runOption=run" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h4>Tehtävä 1.2</h4>
            <p> Muokkaa ohjelmaa siten, että se pyytää kaksi kokonaislukua käyttäjältä, laskee lukujen summan ja tulostaa tekstin "Yli sata", jos lukujen summa on yli sata, muuten
                tulostetaan teksti "alle sata".
            </p>
        </Segment>

        <Segment title="2. Useita vaihtoehtoja: If - else if - else">
            <p>Jos vaihtoehtoja on useita käytetään if - else if - else -rakennetta. Alla on esimerkki miten kyseistä ehtolauserakennetta käytetään. Tässä vielä seikkaperäiset ohjeet:</p> 
            <ul>
                <li>Ensimmäisenä tulee aina <code>if</code></li>
                <li>Jos vaihtoehtoja on useita läiskytetään aina uusi <code>elif</code> jokaista ehtoa varten (<code>elif</code> on lyhenne sanoista "else if").</li>
                <li><code>if</code>:n ja <code>elif</code>:n jälkeen tulee aina ehto</li>
                <li>Lopuksi laitetaan <code>else</code>, joka tarkoittaa "jokin muu kuin ylläolevat".</li>
            </ul>
            <p>Kokeile allaolevaa ohjelmaa. Toimiiko se niinkuin ajattelisit sen toimivan?</p>
            <iframe src="https://trinket.io/embed/python3/47acb869c0?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <Obs>
                <code>else</code>:ä ei ole pakko olla rakenteessa lainkaan ja itse asiassa monasti riittää pelkkä yksittäinen <code>if</code>.
            </Obs>
            <h4>Tehtävä 2.1</h4>
            <p>Lisää yllä olevaan esimerkkiin vielä yksi <code>elif</code></p>
            <h4>Tehtävä 2.2</h4>
            <p>Kokeile ottaa <code>else</code>-osio pois ja testaa ohjelman toimintaa</p>
            <h4>Tehtävä 2.3</h4>
            <p>Tee ohjelma, joka toimii seuraavasti</p>
            <ul>
                <li>Ohjelma lukee kokonaislukusyötteen käyttäjältä (funktio <code>read_int</code>).</li>
                <li>Jos luku on yli 1000 tulostuu teksti "Yli tuhat".</li>
                <li>Jos tulos on pienempi kuin nolla tulostuu teksti "negatiivinen luku".</li>
                <li>... muutoin tulostuu teksti "jotain siltä väliltä".</li>
            </ul>
            <h4>Tehtävä 2.4</h4>
            <p>Tee ohjelma, joka toimii seuraavasti</p>
            <ul>
                <li>Ohjelma lukee kokonaislukusyötteen käyttäjältä (funktio <code>read_int</code>).</li>
                <li>Jos luku on yli 1000 tulostuu teksti "Yli tuhat".</li>
                <li>Jos luku on alle 20 tulostuu teksti "Alle kakskäät".</li>
                <li>Jos tulos on pienempi kuin nolla tulostuu teksti "negatiivinen luku".</li>                
            </ul>
            <Obs>
                Tehtävä ei olekaan niin helppo miltä näyttää! Joissain tilanteissa tulee miettiä tarkkaan ehtolauseiden järjestys. Jos ehtolauseet kirjoitetaan
                tehtävänannossa olevaan järjestykseen, ohjelma ei koskaan tulosta tekstiä "negatiivinen luku". Pohdi miksi ei ja korjaa sovellus niin että ohjelma
                toimii "oikein".
            </Obs>
        </Segment>


    </Layout>
}

export default IfElsePage