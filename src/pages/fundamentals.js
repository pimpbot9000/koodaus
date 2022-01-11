// Step 1: Import React
import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'

const AboutPage = () => {
    return (
        <Layout pageTitle="Never send a human to do a machines job!">

            <p>Tietokonetta ohjelmoidaan kirjoittamalla lähdekoodia jollain ohjelmointikielellä. Lähdekoodi käännetään (tai tulkataan!) tietokoneen ymmärtämään
                muotoon, jonka jälkeen tietokone osaa ajaa ohjelman. Täsmällisemmin sanonuttuna lähdekoodin avulla tietokoneelle kirjoitetaan joukko <code>käskyjä</code>,
                jotka tietokone suorittaa järjestyksessä alusta loppuun.</p>
            <p>Tietokone on aika tyhmä, eli se ei osaa tehdä mitään muuta kuin mitä ihminen on ohjelmoinut tietokoneen
                tekemään. Toisaalta tietokone on hyvä apuri, sillä se ei koskaan väsy eikä tee virheitä suorittaessaan käskyjä täysin orjallisesti.          </p>
            <p>Tällä kurssilla käytämme <code>Python</code>-nimistä ohjelmointikieltä, mutta samat periaatteet pätevät riippumatta ohjelmointikielestä. Pythonin tulkkaamisen
                hoitaa Python-tulkki, jolloin ihmisen ei tarvitse olla kiinnostunut siitä, minkälaista kieltä tietokone ymmärtää. Riittää kunhan osaamme "Pythonia".</p>

            <Segment title="1. Eka ohjelma">
                <p>Alla on ehkäpä yksinkertaisin mahdollinen ohjelma. Ohjelmassa on vain yksi käsky, joka tulostaa tekstin <code>Hello, world!</code></p>
                <p>Kokeile painaa play-nappulaa alla, jolloin alla oleva ohjelma <code>suoritetaan</code> eli <code>ajetaan</code>. Näet ohjelman tulostaman tekstin
                    oikeanpuoleisessa ruudussa.</p>
                <iframe src="https://trinket.io/embed/python3/cd26036c40?runOption=run" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <h4>Tehtävä 1.1</h4>
                <p>Muokkaa ylläolevaa koodia siten, että <code>Hello, world!</code>-tekstin sijasta tulostuu teksti <code>Hei maailma!</code></p>
                <h4>Tehtävä 1.2</h4>
                <p>Lisää edelliseen sovellukseen toinen <code>print</code>-käsky edellisen alle, joka tulostaa ...noh, mitä nyt ikinä keksitkin.</p>
                <h4>Tehtävä 1.3</h4>
                <p>Lisää edelliseen sovellukseen vielä kolmaskin <code>print</code>-käsky!</p>
            </Segment>
            <p>Onneksi olkoon! Olet selvinnyt ensimmäisestä haasteesta. Tähän mennessä olet oppinut sekä hyödyllisen <code>print</code>-käskyn, että sen, että tietokone suorittaa annetut käskyt peräjälkeen alusta loppuun.</p>
            <p>Loppujen lopuksi tietokone ei osaa tehdä kovin montaa eri asiaa. Pääosin tietokone osaa suorittaa laskutoimituksia tietokoneen muistissa olevien arvojen
                avulla. Ohjelmointikielissä käytetään <code>muuttujia</code> kuvaamaan tietokoneen muistissa olevia asioita.
            </p>

            <p>Muuttuja ohjelmointikielessä on hieman eri asia kuin matematiikassa. Matematiikassa muuttuja kuvaa jotain "random" lukua, ohjelmointikielessä muuttuja
                taas on eräänlainen lokero, johon voidaan sijoittaa esimerkiksi luku tai vaikkapa tekstiä. Tietokone siis "muistaa" mikä luku tai teksti muuttujaan - tai lokeroon - on tallennettu, ja tietokone
                osaa suorittaa näiden muistissa olevien lukujen avulla esim. laskutoimituksia.</p>

            <Segment title="2. Muuttujat">
                <p>Alla olevassa sovelluksessa on asetettu muuttujille <code>a</code>, <code>b</code> ja <code>nimi</code> arvot. Kun muuttujalle asetetaan arvo,
                    muuttuja (eli muistilokero) taianomaisesti luodaan. Huomaa että muuttujien <code>a</code> ja <code>b</code> arvot ovat kokonaislukuja (<code>integer</code>) kun taas
                    muuttujan <code>nimi</code> arvo on tekstiä (<code>string</code>).</p>

                <p>Kokeile painaa play-nappulaa ja kiinnitä huomiota siihen mitä ohjelma tulostaa.</p>

                <iframe src="https://trinket.io/embed/python3/59b7d176f4?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                
                <Obs>
                    <p>Merkki <code>=</code> ei ole sama asia kuin matematiikassa. Python ohjelmointikielessä merkki <code>=</code> on niin sanottu <em>sijoitusoperaattori</em>.
                        Rivi <code>a = 3</code> ei siis tarkoita "<code>a</code> on yhtäsuuri kuin 3" vaan "muuttujan arvoksi <code>a</code> asetetaan arvo 3". Samalla koska
                        muuttujaa <code>a</code> ei ole aiemmin määritelty, muuttuja nimeltä <code>a</code> otetaan samalla käyttöön.</p>

                    <p>Lisäksi on syytä kiinnittää huomiota rivin 5 käskyyn <code>c = a + b</code>.</p>
                    <p>Tietokone suorittaa käskyn seuraavasti:</p>
                    <ul>
                        <li>Lasketaan muuttujien <code>a</code> ja <code>b</code> arvojen summa</li>
                        <li>Sijoitetaan laskutoimituksen tulos muuttujaan <code>c</code></li>
                    </ul>
                    <p>Kuten edellisestä selviää käsky <code>c = a + b</code> siis toimii eräällä tapaa "oikealta vasemmalle".</p>
                </Obs>
                <Obs>
                    Muuttujan nimeämisessä täytyy ottaa muutama seikka huomioon:
                    <ul>
                        <li>Muuttujan nimessä ei saa olla väliviivaa (<code>-</code>), koska tämä tulkitaan vähennyslaskuna. Väliviivan sijasta käytetään ns. alaviivaa esim <code>mun_muuttuja</code>.</li>
                        <li>Muuttujien nimessä ei saa olla ääkkösiä (ä, ö, å)</li>
                        <li>Muuttujan nimessä saa olla numeroita mutta muuttujan nimi ei saa alkaa numerolla</li>
                    </ul>
                    <p>Se että muuttujan nimissä ei saa olla ääkkösiä, ei haittaa sillä ohjelmointia useimmiten tehdään "englanniksi". Toki suomen kieltäkin saa käyttää
                    mutta se näyttää vähän urpolta sillä ohjelmointikielen sisäänrakennetut käskyt (esim. <code>print</code>) ovat kuitenkin englanniksi.</p>
                </Obs>
                <h4>Tehtävä 2.1</h4>
                <p>Lisää koodiin muuttuja <code>d</code> johon lasketaan muuttujien <code>a</code> ja <code>b</code> tulo (eli kertolasku). Kertomerkki on <code>*</code>.
                    Laita ohjelma myös tulostamaan muuttujan <code>d</code> arvo.
                </p>
                <h4>Tehtävä 2.2</h4>
                <p>Muokkaa ohjelmaa siten että muuttujan <code>etunimi</code> arvoksi asetetaan <code>"jasu"</code> ja muuttujan <code>sukunimi</code> arvoksi asetetaan <code>"petteri"</code>.
                    Lisäksi, muuttujan <code>kokonimi</code> arvoksi asetetaan muuttujien <code>etunimi</code> ja <code>sukunimi</code> summa. Aja koodi ja ihmettele tulosta!</p>
            </Segment>

            <Segment title="3. Useampi argumentti print-funktiolle">
                <p>Olet kenties matematiikassa oppinut jotain funktioista ja erityisesti että funktiolle "syötetään" arvo (input), jolloin funktio pullauttaa jonkin
                    toisen arvon "ulos" (output). Käyttämämme <code>print</code> on <em>funktio</em>, jolle voi antaa "inputtina" useamman arvon, jolloin nämä arvot tulostuvat samalle riville
                    (Myöhemmin perehdymme siihen miksi käsky <code>print</code> ei oikeastaan ole funktio samassa mielessä kuin mitä matematiikassa funktioilla tarkoitetaan).
                </p>

                <p>Jos print-funktiolle annetaan useampi inputti (<em>argumentti</em>), nämä tulee erottaa toisistaan pilkulla.</p>

                <p>Katselmoidaan alla olevaa esimerkkiä: Suorita ohjelma!</p>
                <iframe src="https://trinket.io/embed/python3/6ff25d8c71?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <h4>Tehtävä 3.1</h4>
                <p>Tee vastaavanlainen ohjelma siten että määrittelet kaksi muuttujaa <code>nimi</code> ja <code>fav_color</code> asettamalla näille jotkin arvot. Lisäksi ohjelman tulee
                    tulostaa (esimerkiksi) teksti <code>tyypin Tumppu lempiväri on sininen</code> käyttämällä hyväksi em. muuttujan arvoja.</p>
                <h4>Tehtävä 3.2</h4>
                <p>Lisää ohjelmaan vielä kolmas muuttuja nimeltä <code>fav_animal</code> ja aseta tälle vaikka arvo <code>"pupu"</code>. Ohjelman tulee tulostaa muuttujien avulla
                    (esimerkiksi) teksti <code>tyypin Tumppu lempiväri on sininen ja suosikkieläin on pupu.</code></p>
            </Segment>
            <Segment title="4. Peruslaskutoimitukset">
                <p> Ohjelmointikielessä yleensä - ja niin Pythonissakin - on "sisäänrakennettuna" useimmiten 5 eri laskutoimitusta, jotka ovat kerto, jako, plus ja miinus, sekä kummallinen modulo,
                    joka on "jakojäännös" (ja jonka unohdamme samantien). Pythonissa on lisäksi sisäänrakennettuna potenssilasku, harvinaista kyllä. Laskutoimitukset merkitään seuraavasti:               </p>
                <ul>
                    <li>Kertolasku: <code>*</code></li>
                    <li>Jakolasku: <code>/</code></li>
                    <li>pluslasku: <code>+</code></li>
                    <li>miinuslasku: <code>-</code></li>
                    <li>Potenssilasku: <code>2**3</code> tarkoittaa "2 potenssiin 3".</li>

                </ul>
                <p>Alla on esimerkki laskutoimitusten käytöstä.</p>
                <Obs><code>import</code> käskyllä otetaan käyttöön <code>math</code>-<em>kirjasto</em>, joka sisältää useita hyödyllisiä
                    matematiikkaan liittyviä funktioita! </Obs>
                <br />
                <iframe src="https://trinket.io/embed/python3/fc6dc37a22" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <h4>Tehtävä 4.1</h4>
                <p>Kokeile laskea "kymmenen potenssiin viisi". Muistathan printata tuloksen.</p>
                <h4>Tehtävä 4.2</h4>
                <p>Suoraan syvään päähän: Jos suorakulmion kateettien pituudet ovat 2 ja 3, laske hypotenuusan pituus Pythonin ja Pythagoraan lauseen avulla. Käytä muuttujia kateettien
                    pituuksina!</p>
                <h4>Tehtävä 4.3</h4>
                <p>Jos ympyrän säteen pituus on <code>3</code>, laske ympyrän pinta-ala. (Huomaa <code>pi</code>, joka ei ole funktio vaan muuttuja, jonka arvoksi on valmiiksi
                    asetettu et ikinä arvaa mikä)</p>
            </Segment>

            <Segment title="5. Muuttujatyypit">
                <p>Ohjelmointikielessä on useita eri muuttuja tai tietotyyppejä. Tulemme kurssin puitteissa käyttämään seuraavia:</p>
                <ul>
                    <li>Kokonaisluku eli <code>integer</code></li>
                    <li>Desimaaliluku eli <code>floating point number</code></li>
                    <li>Merkkijono ("tekstiä") eli <code>string</code></li>
                    <li>Lista</li>
                </ul>
                <p>Alla olevassa koodissa on määritelty kokonaislukumuuttuja, desimaalilukumuuttuja, merkkijonomuuttuja sekä kaksi listaa. Huomaathan että Python-ohjelmointikielessä ei tarvitse millään tavalla
                    erikseen kertoa minkä tyyppinen muuttuja on kyseessä, Python päättelee sen itse kun muuttujalle asetetaan arvo.</p>
                <Obs>Alla olevaan koodiin on lisätty <em>kommentteja</em> käyttäen hyväksi risuaitaa tai "hashtagia" (<code>#</code>). Kommentit eivät ole suoritettavaa
                    ohjelmakoodia. Kun ohjelma ajetaan Python-kääntäjä ignooraa kommentit. Jos kommentit häiritsevät sinua, voit poistaa ne.</Obs>
                <Obs>Merkkijonon nimitys <code>string</code> ei liity bikineihin vaan se tarkoittaa "nauhaa". Nimitys on todennäköisesti peräisin ajoilta, jolloin
                    tietokoneita todellakin ohjelmoitiin syöttämällä niille nauhaa, jossa oli käskyjä.</Obs>
                <p>Kokeile ajaa koodi ja tee alla olevat tehtävät!</p>

                <iframe src="https://trinket.io/embed/python3/7e56f73972?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <Obs>
                    Kenties huomasit tarkastelemalla esimerkkikoodia että listan alkioiden numerointi lähtee nollasta?
                </Obs>
                <h4>Tehtävä 5.1</h4>
                <p>Muokkaa ohjelmaa siten, että ohjelma tulostaa <code>lista1</code>:n viimeisen alkion</p>
                <h4>Tehtävä 5.2</h4>
                <p>Muokkaa ohjelmaa siten, että ohjelma tulostaa <code>lista2</code>:n toisen alkion</p>
                <h4>Tehtävä 5.3</h4>
                <p>Testaa mitä tapahtuu, jos yrität tulostaa jommankumman listan kuudennen (tai sadannen!) alkion.</p>
                <h4>Tehtävä 5.4</h4>
                <p>Muokkaa ohjelmaa siten että muuttujaan <code>summa</code> lasketaan <code>lista1</code>:n ensimmäisen ja viimeisen alkion summa.</p>
                <h4>Tehtävä 5.5</h4>
                <p>Muuttuja luodaan kun sille asetetaan jokin arvo. Kokeile voiko muuttujan arvoa muuttaa jälkikäteen.</p>
                <h4>Tehtävä 5.6</h4>
                <p>Testaa voiko kokonaisluku- ja desimaalilukutyyppiset muuttujat laskea yhteen? Entäpä kokonaisluku ja merkkijono? Entä kaksi merkkijonoa?</p>

            </Segment>

            <Segment title="*6. Kontekstivapaa kieli">
                <p>Tarkastellaan ensin alla olevaa ohjelmaa. Tässä vaiheessa lienee jo selvää mitä ohjelma tekee mutta kokeile silti ajaa ohjelma.</p>
                <iframe src="https://trinket.io/embed/python3/f8538f5976?runOption=run" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <p>Entäpä toimiiko tämä seuraavasti? Kokeile ajaa ohjelma.</p>
                <iframe src="https://trinket.io/embed/python3/c8f6312148?runOption=run" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <p>Kuten huomaat, ohjelma toimii molemmilla tavoilla. Ohjelmointikielet muodostavat niin sanotun kontekstivapaan kielen, jonka merkitys (menemättä yksityiskohtiin) ilmeni edellisissä ohjelmakoodeissa:
                    "jos siihen voi laittaa muuttujan tai luvun, siihen voi myös laittaa laskutoimituksen tai vertailuoperaattorin, tai funktion joka palauttaa arvon!".
                </p>
                <p>Kontekstivapaa kielioppi tekee ohjelmointikielien käyttämisestä hyvin joustavaa! Alla oleva esimerkki laskee hypotenuusan pituuden suorakulmaiselle kolmiolle, jonka
                    sivun pituudet ovat 3 ja 4.</p>
                <iframe src="https://trinket.io/embed/python3/b736899201" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

                <p>Eräs kontekstivapaa kielioppi sinulle onkin jo entuudestaan tuttu, nimittäin matematiikan lausekkeet. Jos on lauseke <code>2x + 1</code> mikään ei estä sinua sijoittamasta
                    muuttujan <code>x</code> tilalle vaikkapa lauseketta <code>y + 1</code>, jolloin saadaan lauseke <code>2(y + 1) + 1</code>. Konteksivapaa siis tarkoittaa sitä, että
                    "riippumatta siitä mitä <code>x</code>:n 'ympärillä' on (konteksti) voit silti sijoittaa <code>x</code>:n tilalle lausekkeen <code>y + 1</code>". Joitain rajoituksia
                    kontekstivapaissakin kieliopeissa on: et voi esimerkiksi sijoittaa lausekkeessa <code>2x + 1</code> muuttujan <code>x</code> tilalle yhtälöä <code> y = 1 </code>,
                    koska <code>2(y = 1) + 1</code> rikkoo matematiikan "kielioppisääntöjä". Samalla tavalla ohjelmointikielissä voi kirjoittaa käskyjä jotka rikkovat ohjelmointikielen
                    kielioppisääntöjä. Tällöin tietokone ei suorita ohjelmaa koska tietokone ei osaa tulkita mitä sen pitäisi tehdä.
                </p>
                <p>Tällöin kääntäjä antaa virheilmoituksen <code>syntax error</code>, joka tarkoittaa "kielioppivirhe!"</p>

            </Segment>

        </Layout>
    )
}

// Step 3: Export your component
export default AboutPage