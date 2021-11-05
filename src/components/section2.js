import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './Title.js';
import Imgcontainer from './Imgcontainer.js';
import Content from './Content.js';
import Caption from './Caption.js';
import tyokykytalo from './tyokykytalo.png';
import Linkbutton from './linkbutton';
import Subtitle from './Subtitle';

export default function section2() {
  return (
    <div>
      <div className={styles.container}>
        <Title title='Työkyky hyvinvoinnin perustana'/>
        <Caption text ='TEKSTI TÄHÄN'/>
        <Content text ='Maatalousyrittäjä työskentelee usein monien paineiden alla. Työn tekemiseen vaikuttavat monet heistä riippumattomat syyt, jotka vaikuttavat hyvinvoinnin kaikkiin osa-alueisiin. Oman työkyvyn arvioiminen ja sen ennaltaehkäisy ovat tärkeätä. Yrittäjä voi kokea työn määrän ja vaatimusten lisääntyessä riittämättömyyden tunteita, kun jatkuvasti pyritään suurempaan tilakokoon ja tehokkaampaan tuotantoon kannattavuuden parantamiseksi. Alaa vaivaa epävarmuus markkinoiden ja maatalouspolitiikan alati muuttuessa. (Tuure 2011.) Mielekäs ja sopivan haastava työ vahvistaa työkykyä, mutta jos se on pakollista puurtamista eikä vastaa omiin tarpeisiin tai tavoitteisiin, se heikentää työkykyä ja hyvinvointia.'/>
        <Content text='Professori Juhani Ilmarinen (2004) on kehittänyt työkyky -mallin, jota kuvataan nelikerroksisena talona. Terveys ja toimintakyky ovat sen ensimmäinen kerros. Fyysinen toimintakyky, psyykkinen ja sosiaalinen toimintakyky ja terveys muodostavat yhdessä työkyvyn perustan. Osaaminen on sen toisessa kerroksessa ja sen perustana ovat peruskoulutus sekä ammatilliset tiedot ja taidot. Omien tietojen ja taitojen jatkuva päivittäminen on tärkeää, sillä uusia työkykyvaatimuksia ja osaamisen alueita syntyy jatkuvasti kaikilla toimialoilla.'/>
        <Imgcontainer alt="työkykytalo" imgsrc={tyokykytalo}/>
        <Content text='Arvot, asenteet ja motivaatio ovat kolmannessa kerroksessa. Tässä kerroksessa myös työelämän ja muun elämän yhteensovittaminen kohtaavat. Omat asenteet työntekoon vaikuttavat merkittävästi työkykyyn. Jos työ koetaan mielekkäänä ja sopivan haasteellisena, se vahvistaa työkykyä. Mikäli työ on pakollinen osa elämää eikä vastaa omia odotuksia, se heikentää työkykyä. Iän myötä työ- ja eläkeasenteet muuttuvat ja voivat johtaa työelämästä luopumiseen tai ennenaikaiseen syrjäytymiseen.' />
        <Content text='Johtaminen, työyhteisö ja työolot on talon neljännessä kerroksessa. Tämä kerros kuvaa työpaikkaa konkreettisesti. Myös esihenkilötyö ja johtaminen ovat keskeinen osa kerroksen toimintaa, sillä heillä on vastuu ja velvollisuus organisoida ja kehittää työpaikan tykytoimintaa.' />
        <Content text='Työkyvyssä on kysymys ihmisen voimavarojen ja työn välisestä yhteensopivuudesta ja tasapainosta. Työkykytalo toimii ja pysyy pystyssä, kun kaikki kerrokset tukevat toisiaan. Iän myötä tapahtuu merkittäviä muutoksia alemmissa, yksilön voimavaroja kuvaavissa kerroksissa. Neljäs kerros, työ, muuttuu nopeasti eikä aina ota riittävästi huomioon ihmisen edellytyksiä vastata muutoksiin. Usein liian raskaaksi kasvanut neljäs kerros painaa alakerroksia huonoin seurauksin' />
        <Content text='Työkykytaloa ympäröi perheen, sukulaisten ja ystävien verkostot. Yhteiskunnan rakenteet ja säännöt vaikuttavat myös yksilön työkykyyn. Vastuu yksilön työkyvystä jakaantuukin sekä yksilön, yrityksen että yhteiskunnan kesken.'/>
        <Content text='Täältä voit tutustua Yrittäjän työkyky -vinkkikirjaan'/>
        <Linkbutton buttonText='Vinkkikirja' link='https://www.ttl.fi/yrittajan-tyokyky-opas-antaa-kaytannollisia-ohjeita-yrittajille-itsesta-huolehtimiseen/'/>
        <Subtitle text='Yrittäjän työkyky'/>
        <Content text='Täältä voit tilata itsellesi vinkkikirjan, jossa on ideoita siihen, miten voit edistää työkykyäsi ja jaksamista yrittäjänä.'/>
        <Linkbutton buttonText='Tilattava vinkkikirja' link='https://www.ttl.fi/oppimateriaalit/tilaa-opas/yrittajan-tyokyky/'/>
        <Content text='Testaa, millainen työhyvinvoinnin kylväjä olet!'/>
        <Linkbutton buttonText='Testiin' link='https://www.ttl.fi/testaa-millainen-tyohyvinvoinnin-kylvaja-olet/'/>
        <Subtitle text='Työhyvinvoinnin itsearviointi'/>
        <Content text='Omien arvojen, motivaation, asenteiden ja työtyytyväisyyden arvioiminen on ajoittain paikallaan. Maatalousyrittäjien työhön kohdistuu ajoittaista arvostelemista liittyen esim. ilmastonmuutoskeskusteluun. Tällöin oman työn arvostaminen ja sille merkityksen antaminen vaatii paneutumista ja omien arvojen puntarointia. Myös oman ammattitaidon avoin ja rehellinen pohdinta siitä, miten se vaikuttaa omaan terveyteen ja hyvinvointiin on työhyvinvoinnin kannalta tärkeätä (Yliselä 2009). '/>
        <Linkbutton buttonText='Arvot puntarissa' link='https://arvoja.wordpress.com/'/>
        <Linkbutton buttonText='Henkilökohtaiset arvot' link='https://harimaa.com/mentaali/henkilokohtaiset-arvot/'/>
        <Subtitle text='Miten voit? -testi'/>
        <Content text='auttaa sinua hahmottamaan työhyvinvointiasi juuri nyt. Testi sisältää väittämiä, jotka liittyvät työssä koettuihin tuntemuksiin ja toimintamalleihin. Vastattuasi väittämiin saat tutkittuun tietoon perustuvan palautteen. Testin tekemiseen menee noin viisi minuuttia.'/>
        <Linkbutton buttonText='Miten voit? -testi' link='https://hyvatyo.ttl.fi/mielityo/tyokalut/miten-voit-tyohyvinvointitesti'/>
        <Subtitle text='Yksilötutka'/>
        <Content text={<>on maksuton työhyvinvointikysely, jolla kartoitetaan työntekijän omaa arviota työhyvinvointinsa tilasta vastaushetkellä. Kyselyssä on 23 asteikkokysymystä seuraavista työhyvinvoinnin näkökulmista:
          <ul>
            <li>terveys ja toimintakyky</li>
            <li>osaaminen</li>
            <li>arvot, asenteet ja motivaatio</li>
            <li>työ, työolot ja johtaminen</li>
            <li>perhe ja lähiyhteisö</li>
          </ul> Nämä yksilötutkan kysymykset pohjautuvat yllä mainittuun Työkykytalo-malliin. Testin tekeminen vaatii rekisteröitymisen.</>}/>
        <Linkbutton buttonText='Yksilötutka testiin' link='https://ttk.fi/tyoturvallisuus_ja_tyosuojelu/tyokalut_ja_kehittaminen/yksilotutka'/>
        <Content text='Syty2000 (Työn ja terveyden oma-arviointilomake) Tämä työn ja terveyden oma-arviointi on suunniteltu yhdessä yrittäjien kanssa ja sen täyttämiseen kuluu vain muutama minuutti.'/>
        <Linkbutton buttonText='Syty2000' link='https://www.ttl.fi/wp-content/uploads/2016/08/SYTY2000_Uudistettu_oma_arviointi_2015.pdf'/>
        <Content text='Aika ajoin on hyvä miettiä omia työpajoja ja työkäytänteitä – voiko jotain tehdä toisin? Tai sitä, että onko tämä sitä mitä haluan tehdä? Pitäisikö jotain muuttaa? Kykyviisari on maksuton kysely, joka kartoittaa vastaajan työ- ja toimintakykyä ja selvittää vastaajan keskeisiä vahvuuksia ja mahdollisia kehittämisenkohteita. Kykyviisarissa on kokeiluversio ja kirjautumista edellyttävä versio. Kokeiluversio on kertakäyttöinen eikä siihen voi palata palauttamisen jälkeen. Kokeiluversion vastaukset eivät tallennu, eikä niitä voida yhdistää vastaajaan.'/>
        <Linkbutton buttonText='Kykyviisari' link='https://sivusto.kykyviisari.fi/'/>
      </div>
    </div>
  )
}
