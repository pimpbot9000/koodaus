import * as React from 'react'
// Step 2: Define your component
import Layout from '../components/layout'
import Segment from '../components/segment'
import Obs from '../components/obs'
import Code from '../components/code'

const MathPage = () => {
    return <Layout pageTitle="Algoritmit">
        <p>Olet varmasti kuullut algoritmeistä. Algoritmi on Wikipedia mukaan määritelty seuraavasti 
            "<em>Algoritmi on yksityiskohtainen kuvaus tai ohje siitä, miten tehtävä tai prosessi suoritetaan; jota seuraamalla voidaan ratkaista tietty ongelma</em>".
            </p>
        <p> Periaatteessa siis voidaan ajatella että keittokirjan ohjeetkin voidaan lukea algoritmeiksi. Jos puhutaan ohjelmoinnista yksinkertainen if-else -lauseenkin voidaan
            tulkita olevan algoritmi, tai oikeastaan minkä tahansa ohjelman, sillä jokainen ohjelmahan on "<em>yksityiskohtainen kuvaus tai ohje siitä, miten tehtävä tai prosessi suoritetaan</em>".            
            </p>
        <p> Käytännössä algoritmeilla tarkoitetaan jonkinlaista nokkelaa tapaa ratkaista jokin ongelma toistamalla jotain samaa proseduuria uudestaan ja uudestaan. 
            Ehkä parhaiten yksinkertaista algoritmia kuvaa tilanne, jossa opettaja sanoo "Avaa kirja sivulta 58".</p>
        <p>    Miten toimit tilanteessa? Yksinkertaisin tapa on tietysti alkaa selaamaan kirjaa alusta kunnes päädyt sivulle 58. Tämä on algoritmi, mutta ei kovin tehokas sellainen.
            Useimmiten algoritmin tulee suoriutua tehtävästä mahdollisimman nopeasti. Kuvittele että HSL:n reittihaku kokeilisi kaikki mahdolliset bussireitit, ennenkuin osaisi ehdottaa nopeinta
            vaihtoehtoa. Tähän kuluisi Helsingin kokoisessa joukkoliikennesysteemissä tietokoneeltakin monta vuotta!
        </p>

        <p>Toinen tapa löytää oikea aukeama on toimia seuraavasti:</p>
        <ul>
            <li>Avaa kirja about puolesta välistä.</li>
            <li>Jos aukeaman sivunumero on liian iso, avaa kirja uudestaan aikaisempien sivujen puolesta välistä.</li>
            <li>Jos aukeaman sivunumero on liian pieni, avaa kirja uudestaan jälkimmäisten sivujen puolesta välistä.</li>
        </ul>
        <p>Toistamalla edellistä algoritmia päädyt oikealle sivulle / aukeamalla suhteellisen nopeasti, nopeammin kuin jos selaisit kirjaa aloittaen ensimmäiseltä sivulta.</p>

        <p>Edellisellä algoritmilla itseasiassa nimikin, nimeltä puolitushaku (Binary search algorithm).</p>

        <p>Tässä osiossa ohjelmoimme muutaman yksinkertaisen algoritmin</p>        


        <Segment title="1. Isoimman luvun etsiminen listasta">
            <p>Ehkä yksinkertaisin algoritmi (ja joka luokitellaan "oikeaksi" algoritmiksi) on isoimman tai pienimmän luvun etsiminen listasta</p>
            <p>Alla on toteutettu kyseinen algoritmi s.e. se etsii listan isoimman luvun. Algoritmi toimii seuraavasti:</p>
            <ul>
                <li>Olkoon "suurin tähän mennessä nähty luku" <code>max_value</code>. Jos kaikki listan luvut ovat positiivisia asetetaan tämän arvoksi 0.</li>
                <li>Käydään läpi jokainen listan luku ja suoritetaan seuraava operaatio: Jos tämänhetkinen luku (<code>x</code>) on suurempi kuin "suurin tähän
                mennessä nähty luku" (<code>max_value</code>) asetetaan muuttujan <code>max_value</code> arvoksi muuttujan <code>x</code> arvo. </li>
            </ul>
            <iframe src="https://trinket.io/embed/python3/b73ba4628c?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h5>Tehtävä 1.1</h5>
            <p>Muokkaa ohjelmaa siten että se etsii listan pienimmän luvun. Ensimmäisenä tietysti nimetään muuttuja <code>max_value</code> uudestaan (<code>min_value</code>). Pohdi tarkkaan mikä
            nyt asetetaan muuttujan <code>min_value</code> alkuperäiseksi arvoksi.</p>
        </Segment>

        <Segment title="2. Listan lukujen summa">
            <p>Tyypillä on 100 € rahaa. Tyyppi on tehnyt ostoslistan, johon hän on merkinnyt niiden tuotteiden hinnan, jotka hän aikoo ostaa Alepasta.</p>
            <p>Tyyppi ei halua laskea päässä kuinka paljon hänellä jää rahaa jäljelle. Tätä varten hän kirjoittaa Python-kielisen sovelluksen, joka löytyy alta.</p>
            <Obs>
                <p>Tarkastellaan rivin 6 käskyä. Käsky suoritetaan (oikealta vasemmalle) seuraavasti:</p>
                <ul>
                    <li>Muuttujan <code>money</code> arvosta vähennetään muuttujan <code>x</code> arvo</li>
                    <li>Saatu arvo asetetaan muuttujan <code>money</code> (uudeksi) arvoksi.</li>
                </ul>
                <p>Edellinen toistetaan jokaiselle listan luvulle, joten saamme selville kuinka paljon rahaa jäi jäljelle.</p>
            </Obs>

        <iframe src="https://trinket.io/embed/python3/88d75f3113?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            <h5>Tehtävä 2.1</h5>
            <p>Muokkaa ohjelmaa siten, että se laskee kuinka paljon ostokset maksavat yhteensä.</p>
            <h5>Tehtävä 2.2</h5>
            <p>Tee sovellus, joka laskee lukujen 1, 2, 3, 4, ..., 999, 1000 summan. Alla olevalla koodinpätkällä pääset alkuun. Kokeile ensin ajaa ohjelma, jossa saat käsityksen siitä,
                miten <code>range</code>-funktio toimii.
            </p>
            <iframe src="https://trinket.io/embed/python3/123c5b848e?runOption=run" width="100%" height="300" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
        </Segment>


    </Layout>
}

export default MathPage