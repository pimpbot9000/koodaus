// Step 1: Import React
import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'

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
                <p>Ohjelma näyttää yksinkertaiselta (ja onkin) mutta on syytä täsmestää muutamaa seikkaa:</p>

                <p>Merkki <code>=</code> ei ole sama asia kuin matematiikassa. Python ohjelmointikielessä merkki <code>=</code> on niin sanottu <em>sijoitusoperaattori</em>.
                    Rivi <code>a = 3</code> ei siis tarkoita "<code>a</code> on yhtäsuuri kuin 3" vaan "muuttujan arvoksi <code>a</code> asetetaan arvo 3". Samalla koska 
                    muuttujaa <code>a</code> ei ole aiemmin käytetty, muuttuja nimeltä <code>a</code> otetaan samalla käyttöön.</p>

                <p>Lisäksi on syytä kiinnittää huomiota rivin 5 käskyyn <code>c = a + b</code>.</p>
                <p>Tietokone suorittaa käskyn seuraavasti:</p>
                <ul>
                    <li>Lasketaan muuttujien <code>a</code> ja <code>b</code> arvojen summa</li>
                    <li>Sijoitetaan laskutoimituksen tulos muuttujaan <code>c</code></li>
                </ul>
                <p>Kuten edellisestä selviää käsky <code>c = a + b</code> siis toimii eräällä tapaa "oikealta vasemmalle".</p>
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
                    toisen arvon "ulos" (output). Käyttämämme <code>print</code> on funktio, jolle voi antaa "inputtina" useamman arvon, jolloin nämä tulostuvat samalle riville.
                </p>

                <p>Jos print-funktiolle annetaan useampi inputti, nämä tulee erottaa toisistaan pilkulla.</p>

                <p>Katselmoidaan alla olevaa esimerkkiä: Suorita ohjelma!</p>
                <iframe src="https://trinket.io/embed/python3/6ff25d8c71?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                <h4>Tehtävä 3.1</h4>
                <p>Tee vastaavanlainen ohjelma siten että määrittelet kaksi muuttujaa <code>nimi</code> ja <code>fav_color</code> asettamalla näille jotkin arvot. Lisäksi ohjelman tulee
                    tulostaa (esimerkiksi) teksti <code>tyypin Tumppu lempiväri on sininen</code> käyttämällä hyväksi em. muuttujan arvoja.</p>
                <h4>Tehtävä 3.2</h4>
                <p>Lisää ohjelmaan vielä kolmas muuttuja nimeltä <code>fav_animal</code> ja aseta tälle vaikka arvo <code>"pupu"</code>. Ohjelman tulee tulostaa muuttujien avulla
                    (esimerkiksi) teksti <code>tyypin Tumppu lempiväri on sininen ja suosikkieläin on pupu.</code></p>
            </Segment>

            <Segment title="*4. Kontekstivapaa kieli">
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
                <p>Ei ole väliä vaikka et ymmärtäisikään ohjelmakoodia mutta koodi toimii aikalailla siten että "muuttujan a ja b arvot annetaan funktioille, jotka laskevat lukujen neliöt,
                    jotka summataan, ja summa syötetään neliöjuuri-funktiolle ja jonka tulos syötetään print-funktiolle, joka tulostaa neliöjuuren arvon". Tämän kaltaisen ohjelmakoodin kirjoittaminen vaatii kuitenkin harjaantumista,
                    eikä kannata säikähtää.
                </p>

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