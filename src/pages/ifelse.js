import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import Code from '../components/code'

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
            <p>Testaa ohjelmaa eri syötteillä! Jos mielestäsi joku muu kuin Tuomas on awesome muokkaa koodia mieleiseksesi. Testaa myös onko isolla alkukirjaimella merkitystä</p>
            <iframe src="https://trinket.io/embed/python3/46f8fc5788" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <Obs>
                <p>Huomasit kenties että if-lauseessa oli yhtäsuuruusmerkkinä <Code>==</Code>. Nyt täytyy ehdottomasti pysähtyä selventämään eräs tärkeä asia:</p>
                <ul>
                    <li><Code>=</Code> on <em>sijoitusoperaattori</em>, jota käytetään kun muuttujalle asetetaan arvo.</li>
                    <li><Code>==</Code> on <em>yhtäsuuruusmerkki</em>, jota käytetään <em>ehtolauseissa</em>, kuten edellisessä koodiesimerkissä.</li>
                </ul>
                <p>Huomaa että jälkimmäinen tapa käyttää yhtäsuuruusmerkkejä vastaa matematiikan yhtäsuuruusmerkkiä.</p>
            </Obs>
            <Obs>
                <p>Vertailuoperaattorit:</p>
                <ul>
                    <li>yhtäsuuri kuin: <Code>==</Code> </li>
                    <li>pienempi kuin:<Code>&lt;</Code> </li>
                    <li>suurempi kuin: <Code>&gt;</Code> </li>
                    <li>eri suuri kuin: <Code>!=</Code> </li>
                    <li>pienempi tai yhtäsuuri kuin: <Code>&lt;=</Code> </li>
                    <li>suurempi tai yhtäsuuri kuin: <Code>&gt;=</Code> </li>
                </ul>
            </Obs>
            <h5>Tehtävä 1.1</h5>
            <p> Laajenna alla olevaa ohjelmaa siten, että käytät if-else -rakennetta seuravasti:</p>
                <ul>
                    <li>Jos käyttäjän syöttämä luku on suurempi kuin 1000 tulostuu teksti "Ohhoh!"</li>
                    <li>... muuten tulostuu teksti "alle donitsi".</li>
                </ul>
                <p>Huomaa että funktio <code>read_int</code> lukee syötteenä kokonaisluvun.</p>
        
            <iframe src="https://trinket.io/embed/python3/cb6b4e6668?runOption=run" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h5>Tehtävä 1.2</h5>
            <p> Muokkaa ohjelmaa siten, että se pyytää kaksi kokonaislukua käyttäjältä, laskee lukujen summan ja tulostaa tekstin "Yli sata", jos lukujen summa on yli sata, muuten
                tulostetaan teksti "alle sata".
            </p>
        </Segment>

        <Segment title="2. Useita vaihtoehtoja: If - else if - else">
            <p>Jos vaihtoehtoja on useita käytetään if - else if - else -rakennetta. Tutkaile ensin alla olevaa koodiesimerkkiä, miten kyseistä ehtolauserakennetta käytetään. Tässä vielä seikkaperäiset ohjeet:</p>
            <ul>
                <li>Ensimmäisenä tulee aina <code>if</code></li>
                <li>Jos vaihtoehtoja on useita läiskytetään aina uusi <code>elif</code> jokaista uutta ehtoa varten (<code>elif</code> on lyhenne sanoista "else if").</li>
                <li><code>if</code>:n ja <code>elif</code>:n tapauksessa tulee aina ehto esim. <Code>if nimi == "Tuomas":</Code>, <Code>elif x &lt; 10:</Code> tai  <Code>elif y != 6:</Code></li>
                <li>Lopuksi laitetaan <code>else</code>, joka tarkoittaa "jokin muu kuin ylläolevat". Tähän ei tule ehtoa. </li>
            </ul>
            <p>Kokeile allaolevaa ohjelmaa. Toimiiko se niinkuin ajattelisit sen toimivan?</p>
            <Obs>
                Huomaathan puolipisteet sekä sisennyksen riveillä 7, 9, 11 ja 13. Sisennys tehdään tabulaattorinäppäimellä!
            </Obs>
            <iframe src="https://trinket.io/embed/python3/47acb869c0?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <Obs>
                Rakenteesta voidaan jättää kokonaan <code>else</code> pois ja itse asiassa useissa tilanteissa riittää pelkkä yksittäinen <code>if</code>.
            </Obs>
            <h5>Tehtävä 2.1</h5>
            <p>Lisää yllä olevaan esimerkkiin vielä yksi <code>elif</code></p>
            <h5>Tehtävä 2.2</h5>
            <p>Kokeile ottaa <code>else</code>-osio pois ja testaa ohjelman toimintaa</p>
            <h5>Tehtävä 2.3</h5>
            <p>Tee ohjelma, joka toimii seuraavasti</p>
            <ul>
                <li>Ohjelma lukee kokonaislukusyötteen käyttäjältä (funktio <code>read_int</code>).</li>
                <li>Jos luku on yli 1000 tulostuu teksti "Yli tuhat".</li>
                <li>Jos tulos on pienempi kuin nolla tulostuu teksti "negatiivinen luku".</li>
                <li>... muutoin tulostuu teksti "jotain siltä väliltä".</li>
            </ul>
            <h5>Tehtävä 2.4</h5>
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
            <h5>Tehtävä 2.5</h5>
            <p>Tehdään "laskin", joka osaa kaksi eri laskutoimitusta, plus- ja kertolaskun ja kertoo meille laskutoimituksen tuloksen. Alla on valmis pohja, jota voit täydentää.</p>
            <iframe src="https://trinket.io/embed/python3/0dc64f2228?runOption=run" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h5>Tehtävä 2.6</h5>
            <p>Lisää laskimeen vielä miinus- ja jakolasku</p>
        </Segment>


    </Layout>
}

export default IfElsePage