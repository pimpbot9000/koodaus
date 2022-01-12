import * as React from 'react'
import '../components/layout.css'
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import Quote from '../components/quote'
import Code from '../components/code'

const AboutPage = () => {
    return (
        <Layout pageTitle="Never send a human to do a machines job">
            <p>(Agent Smith, <em>The Matrix</em>, 1999)</p>
            <p>Tietokonetta ohjelmoidaan kirjoittamalla lähdekoodia jollain ohjelmointikielellä. Lähdekoodi käännetään (tai tulkataan!) tietokoneen ymmärtämään
                muotoon, jonka jälkeen tietokone osaa ajaa eli suorittaa ohjelman. Täsmällisemmin sanonuttuna lähdekoodin avulla tietokoneelle kirjoitetaan joukko <code>käskyjä</code>,
                jotka tietokone suorittaa järjestyksessä alusta loppuun.</p>
            <p>Tietokone on aika tyhmä, eli se ei osaa tehdä muuta kuin mitä ihminen on ohjelmoinut tietokoneen
                tekemään. Toisaalta tietokone on hyvä ja uskollinen apuri, sillä se ei koskaan väsy eikä tee virheitä suorittaessaan käskyjä täysin orjallisesti.
                Niinkuin vuoden 1984 scifi-klassikkoelokuvassa <em>The Terminator</em> osuvasti todettiin:</p>

            <Quote>
                That terminator is out there, it cant be bargained with, it cant be reasoned with, it doesn't feel pity or remorse or fear, and it absolutely will not stop... ever, untill you are dead!
            </Quote>

            <p>Sen lisäksi että tietokone ei tee virheitä (ellei joku koodari ole mokannut), tietokone pystyy tekemään asioita uskomattoman nopeasti, joka oikeastaan
                tekee tietokoneesta niin hyödyllisen kapistuksen.
            </p>
            <p>Tällä kurssilla käytämme <code>Python</code>-nimistä ohjelmointikieltä, mutta samat periaatteet pätevät riippumatta ohjelmointikielestä ja riippumatta siitä
                ohjelmoiko pelejä, mikroaaltouunin mikropiirejä tai vaikkapa tappajarobotteja. Pythonin tulkkaamisen
                hoitaa Python-tulkki, jolloin ihmisen ei tarvitse olla kiinnostunut siitä, minkälaista kieltä tietokone ymmärtää. Riittää kunhan osaamme "Pythonia".
                Python onkin nykypäivänä yksi käytetyimmästä ohjelmointikielestä koska se on niin "ihmisystävällinen".</p>

            <Segment title="1. Eka ohjelma">
                <p>Alla on ehkäpä yksinkertaisin mahdollinen ohjelma. Ohjelmassa on vain yksi käsky, joka tulostaa tekstin <code>Hello, world!</code></p>
                <p>Kokeile painaa play-nappulaa alla, jolloin alla oleva ohjelma <code>suoritetaan</code> eli <code>ajetaan</code>. Näet ohjelman tulostaman tekstin
                    oikeanpuoleisessa ruudussa.</p>
                <iframe src="https://trinket.io/embed/python3/cd26036c40?runOption=run" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <h5>Tehtävä 1.1</h5>
                <p>Muokkaa ylläolevaa koodia siten, että <code>Hello, world!</code>-tekstin sijasta tulostuu teksti <code>Hei maailma!</code></p>
                <h5>Tehtävä 1.2</h5>
                <p>Lisää edelliseen sovellukseen toinen <code>print</code>-käsky edellisen alle, joka tulostaa ...noh, mitä nyt ikinä keksitkin.</p>
                <h5>Tehtävä 1.3</h5>
                <p>Lisää edelliseen sovellukseen vielä kolmaskin <code>print</code>-käsky!</p>
            </Segment>
            <p>Onneksi olkoon! Olet selvinnyt ensimmäisestä haasteesta. Tähän mennessä olet oppinut sekä hyödyllisen <code>print</code>-käskyn, että sen, että tietokone suorittaa annetut käskyt peräjälkeen alusta loppuun.</p>
            <p>Loppujen lopuksi tietokone ei osaa tehdä kovin montaa eri asiaa. Pääosin tietokone osaa suorittaa laskutoimituksia tietokoneen muistissa olevien arvojen
                avulla. Ohjelmointikielissä käytetään <code>muuttujia</code> kuvaamaan tietokoneen muistissa olevia asioita.
            </p>

            <p>Muuttuja ohjelmointikielessä on hieman eri asia kuin matematiikassa. Matematiikassa muuttuja kuvaa jotain "random" lukua, ohjelmointikielessä muuttuja
                taas on eräänlainen lokero, johon voidaan sijoittaa esimerkiksi luku tai vaikkapa tekstiä. Tietokone siis "muistaa" mikä luku tai teksti muuttujaan - tai lokeroon - on tallennettu, ja tietokone
                osaa suorittaa näiden muistissa olevien lukujen avulla esim. laskutoimituksia.</p>
            
            <Obs>
                Muuttujan ero matematiikassa ja ohjelmointikielissä:
                <ul>
                    <li>Matematiikassa muuttuja kuvaa jotain "random" lukua.</li>
                    <li>Ohjelmointikielissä muuttujalla on aina jokin arvo (joka on tietokoneen muistissa ohjelmaa suoritettaessa).</li>
                </ul>
            </Obs>

            <Segment title="2. Muuttujat">
                <p>Alla olevassa sovelluksessa on asetettu muuttujille <code>a</code>, <code>b</code> ja <code>nimi</code> arvot. Kun muuttujalle asetetaan arvo,
                    muuttujaa voidaan käyttää jatkossa esimerkiksi laskutoimituksissa. Huomaa että muuttujien <code>a</code> ja <code>b</code> arvot ovat kokonaislukuja (<code>integer</code>) kun taas
                    muuttujan <code>nimi</code> arvo on tekstiä (<code>string</code>).</p>
                <Obs>
                    Muuttujan nimeämisessä täytyy ottaa muutama seikka huomioon:
                    <ul>
                        <li>Muuttujan nimessä ei saa olla väliviivaa (<code>-</code>), koska tämä tulkitaan vähennyslaskuna. Väliviivan sijasta käytetään ns. alaviivaa esim. <code>tyypin_etunimi</code>.</li>
                        <li>Muuttujan nimessä ei voi olla välilyöntejä.</li>
                        <li>Muuttujien nimessä ei saa olla ääkkösiä (ä, ö, å)</li>
                        <li>Muuttujan nimessä saa olla numeroita mutta muuttujan nimi ei saa alkaa numerolla</li>
                    </ul>
                    <p>Se että muuttujan nimissä ei saa olla ääkkösiä, ei haittaa sillä ohjelmointia useimmiten tehdään "englanniksi". Toki suomen kieltäkin saa käyttää
                        mutta se näyttää vähän urpolta sillä ohjelmointikielen sisäänrakennetut käskyt (esim. <code>print</code>) ovat kuitenkin englanniksi. Tässä materiaalissa on välillä
                        käytetty sekä suomen kielisiä että englanninkielisiä muuttujien nimiä. Toivottavasti pystyt elämään tämän kanssa :)</p>
                </Obs>

                <p>Kokeile painaa play-nappulaa ja kiinnitä huomiota siihen mitä ohjelma tulostaa.</p>

                <iframe src="https://trinket.io/embed/python3/59b7d176f4?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

                <Obs>
                    <p> Merkki <code>=</code> ei ole sama asia kuin matematiikassa. Python ohjelmointikielessä merkki <code>=</code> on niin sanottu <em>sijoitusoperaattori</em>.</p>
                    <p> Käsky <Code>a = 3</Code> ei siis tarkoita "<code>a</code> on yhtäsuuri kuin 3" vaan "muuttujan arvoksi <code>a</code> asetetaan arvo 3". Samalla koska
                        muuttujaa <code>a</code> ei ole aiemmin määritelty, muuttuja nimeltä <code>a</code> otetaan samalla käyttöön.</p>

                    <p>Lisäksi on syytä kiinnittää huomiota rivin 5 käskyyn <Code>c = a + b</Code>.</p>
                    <p>Tietokone suorittaa käskyn seuraavasti:</p>
                    <ul>
                        <li>Lasketaan muuttujien <code>a</code> ja <code>b</code> arvojen summa</li>
                        <li>Sijoitetaan laskutoimituksen tulos muuttujaan <code>c</code></li>
                    </ul>
                    <p>Kuten edellisestä selviää käsky <Code>c = a + b</Code> siis toimii eräällä tapaa "oikealta vasemmalle".</p>
                </Obs>

                <h5>Tehtävä 2.1</h5>
                <p>Lisää koodiin muuttuja <code>d</code> johon sijoitetaan muuttujien <code>a</code> ja <code>b</code> tulo (eli kertolasku). Kertomerkki on <code>*</code>.
                    Käske tietokonetta myös tulostamaan muuttujan <code>d</code> arvo, jotta näet mitä tapahtuu.
                </p>
                <h5>Tehtävä 2.2</h5>
                <p>Muokkaa ohjelmaa siten että muuttujan <code>etunimi</code> arvoksi asetetaan <code>"jasu"</code> ja muuttujan <code>sukunimi</code> arvoksi asetetaan <code>"petteri"</code>.
                    Lisäksi, muuttujan <code>koko_nimi</code> arvoksi asetetaan muuttujien <code>etunimi</code> ja <code>sukunimi</code> summa (??). Aja koodi ja ihmettele tulosta!</p>
                <h5>Tehtävä 2.3</h5>
                <p>
                    Laita ohjelma tulostamaan jonkin sellaisen muuttujan arvo jota ei ole määritelty, esim. <Code>print(e)</Code> käskyn avulla. Katso tarkasti mitä
                    virheilmoitus sanoo.

                </p>
            </Segment>

            <Segment title="3. Useampi argumentti print-funktiolle">
                <p>Olet kenties matematiikassa oppinut jotain funktioista ja erityisesti että funktiolle "syötetään" arvo (input), jolloin funktio pullauttaa jonkin
                    toisen arvon "ulos" (output). Käyttämämme <code>print</code> on <em>funktio</em>, jolle voi antaa "inputtina" eli <em>funktion argumenttina</em> useamman arvon, jolloin nämä arvot tulostuvat samalle riville.
                    Myöhemmin selviää miksi käsky <code>print</code> ei ole funktio samassa mielessä kuin mitä matematiikassa funktioilla tarkoitetaan.
                </p>

                <Obs>Jos <code>print</code>-funktiolle annetaan useampi argumentti, nämä tulee erottaa toisistaan pilkulla.</Obs>

                <p>Katselmoidaan alla olevaa esimerkkiä: Suorita ohjelma!</p>
                <iframe src="https://trinket.io/embed/python3/6ff25d8c71?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <h5>Tehtävä 3.1</h5>
                <p>Tee vastaavanlainen ohjelma siten että määrittelet kaksi muuttujaa <code>nimi</code> ja <code>fav_color</code> asettamalla näille jotkin arvot. Lisäksi ohjelman tulee
                    tulostaa (esimerkiksi) teksti <code>tyypin Tumppu lempiväri on sininen</code> käyttämällä hyväksi em. muuttujan arvoja.</p>
                <h5>Tehtävä 3.2</h5>
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
                <Obs>Alla olevassa koodissa <code>import</code> käskyllä otetaan käyttöön <code>math</code>-<em>kirjasto</em>, joka sisältää useita hyödyllisiä
                    matematiikkaan liittyviä funktioita! Funktio <code>sqrt</code> on neliöjuuri (square root).
                    Python on suosittu ohjelmointikieli osittain siksi että Pythonille löytyy lukematon määrä erilaisia kirjastoja, joten jokaista pyörää ei tarvitse keksiä
                    uudestaan. Tämä <a href="https://xkcd.com/413/">nöräsarjakuva</a> havainnollistaa sitä, että Pythonille löytyy kaikki mahdollinen ja mahdoton valmiiksi
                    toteutettuna kirjastoina.</Obs>
                <br />
                <iframe src="https://trinket.io/embed/python3/fc6dc37a22" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <h5>Tehtävä 4.1</h5>
                <p>Kokeile laskea "kymmenen potenssiin viisi". Muistathan printata tuloksen.</p>
                <h5>Tehtävä 4.2</h5>
                <p>Suoraan syvään päähän: Jos suorakulmion kateettien pituudet ovat 2 ja 3, laske hypotenuusan pituus Pythonin ja Pythagoraan lauseen avulla. Käytä muuttujia kateettien
                    pituuksina!</p>
                <h5>Tehtävä 4.3</h5>
                <p>Jos ympyrän säteen pituus on <code>3</code>, laske ympyrän pinta-ala. (Huomaa <code>math</code>-kirjastosta tuotu <code>pi</code>, joka ei ole funktio vaan muuttuja, jonka arvoksi on valmiiksi
                    asetettu et ikinä arvaa mikä)</p>
            </Segment>

            <Segment title="5. Muuttujatyypit">
                <p>Ohjelmointikielessä on useita eri muuttuja- tai tietotyyppejä. Tulemme kurssin puitteissa käyttämään seuraavia:</p>
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
                <h5>Tehtävä 5.1</h5>
                <ul>
                    <li>Muokkaa ohjelmaa siten, että ohjelma tulostaa <code>lista1</code>:n viimeisen alkion</li>
                    <li>Muokkaa ohjelmaa siten, että ohjelma tulostaa <code>lista2</code>:n toisen alkion</li>
                    <li>Testaa mitä tapahtuu, jos yrität tulostaa jommankumman listan kuudennen (tai sadannen!) alkion.</li>
                </ul>
                <h5>Tehtävä 5.2</h5>
                <p>Muokkaa ohjelmaa siten että muuttujaan <code>summa</code> lasketaan <code>lista1</code>:n ensimmäisen ja viimeisen alkion summa.</p>
                <h5>Tehtävä 5.3</h5>
                <p>Muuttuja luodaan kun sille asetetaan jokin arvo. Kokeile voiko muuttujan arvoa muuttaa jälkikäteen.</p>
                <h5>Tehtävä 5.4</h5>
                <p>Testaa voiko kokonaisluku- ja desimaalilukutyyppiset muuttujat laskea yhteen? Entäpä kokonaisluku ja merkkijono? Entä kaksi merkkijonoa? Alla
                    olevassa koodissa on valmiiksi määritelty muutamia muuttujia testaamista varten</p>
                    <iframe src="https://trinket.io/embed/python3/a0db8dae6b?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                

            </Segment>

            <Segment title="*6. Suoritusjärjestys">
                <p>Tarkastellaan ensin alla olevaa ohjelmaa. Tässä vaiheessa lienee jo selvää mitä ohjelma tekee mutta kokeile silti ajaa ohjelma.</p>
                <iframe src="https://trinket.io/embed/python3/f8538f5976?runOption=run" width="100%" height="200" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <p>Rivin 6 käsky suoritetaan seuraavassa järjestyksessä</p>
                <ul>
                    <li>Ensiksi lasketaan lausekkeen <Code>a**2 + b**2</Code> arvo käyttämällä hyväksi muuttujan <code>a</code> ja <code>b</code> arvoja.</li>
                    <li>Saatu arvo syötetään funktiolle <code>sqrt</code>.</li>
                    <li>Funktion <code>sqrt</code> arvo sijoitetaan muuttujan <code>c</code> arvoksi.</li>
                </ul>


            </Segment>

        </Layout>
    )
}

// Step 3: Export your component
export default AboutPage