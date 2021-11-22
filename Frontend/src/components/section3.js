import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Imgcontainer from './sectioncomponents/Imgcontainer.js';
import Content from './sectioncomponents/Content.js';
import Caption from './sectioncomponents/Caption.js';
import aivot from './pictures/aivot.png';
import Linkbutton from './sectioncomponents/linkbutton';
import Subtitle from './sectioncomponents/Subtitle';
import Intendedcontent from './sectioncomponents/Intendedcontent';
import Backbutton from './sectioncomponents/Backbutton';

export default function section3() {
  return (
    <div>
      <Backbutton/>
      <div className={styles.container}>
        <Title title='Hyvinvoinnin ennaltaehkäiseminen ja sen vahvistaminen'/>
        <Caption text ='Hyvinvointimme koostuu monesta eri tekijästä, joihin voimme itse vaikuttaa. Pienilläkin muutoksilla voi olla vaikutuksia hyvinvointiimme. Työn, toiminnan ja levon tasapaino, sopiva liikunnan määrä sekä terveellinen ja hyvä ruoka vaikuttavat niin aivoterveyteemme kuin myös mielenterveytemme sitä kautta kokonaisvaltaiseen hyvinvointiimme. '/>
        <Imgcontainer alt="kuva aivoista" imgsrc={aivot}/>
        <Content start='Aivoterveydestä' text ='puhutaan nykyään paljon ja kehotetaan pitämään huolta omista aivoista. Aivoterveydellä tarkoitetaan laaja-alaisesti aivojen hyvinvointia. Se on ihmisen toimintakykyisyyden perusta, joka vaatii kaikkein monimutkaisinta eri aivojen osien yhteistoimintaa.'/>
        <Linkbutton buttonText='Lue lisää' link='https://www.aivoliitto.fi/aivoterveys/'/>
        <Intendedcontent buttonText='Lue lisää' link='https://www.rakkaataivot.fi/aivojen-rakenne-ja-toiminta/' text='Aivoterveydestä ja aivojen muovautuvuudesta (Aivosäätiö ja Merck Oy, Suomi)'/>
        <Intendedcontent buttonText='Oppaaseen' link='https://www.muistiliitto.fi/application/files/3015/0922/4743/Kohti_parempaa_aivoterveytta.pdf' text='Kohti parempaa aivoterveyttä. Opas aivojen huoltoon'/>
        <Intendedcontent buttonText='Huoltokirjaan' link='https://www.olipakerranmies.fi/terveet-elamantavat-vaalivat-aivoterveytta/' text='Aikuisen miehen huoltokirja. Terveet elämäntavat vaalivat aivoterveyttä.'/>
        <Content text='Aivojen kuormitusta voi vähentää erilaisilla sovelluksilla. Esimerkiksi ostoslistojen tai to do -listojen tekemisessä voi hyödyntää erilaisia sovelluksia. Näin ne pysyvät tallessa eikä tarvitse enää käyttää paperilistoja ja jättää asioita muistin varaan. '/>
        <Content text='Esimerkkinä muutama ilmainen sovellus:'/>
        <Intendedcontent link='https://apps.apple.com/sg/app/ticked-2/id1411719870' buttonText='Sovelluskauppaan tästä' text='Ticked 2 -sovellus, johon voi luoda kymmeniä listoja, jotka helppo hallita ja päivittää. Listat voi jakaa sovelluksessa helposti toisten käyttäjien kanssa. Sovellus ei vaadi kirjautumista. Tämä on ilmainen ladata ja käyttää iOSille (iPhone).' />
        <Intendedcontent link='https://play.google.com/store/apps/details?id=com.headcode.ourgroceries' buttonText='Sovelluskauppaan tästä' text='OurGroceries on myös Kauppalappu-ohjelma. Se on nopea ja looginen käyttää ja se on ladattavissa Google Playsta. ' />
        <Content start='Taukoliikunta' text ='edistää mm. keskittymiskykyä, lisää mielen ja kehon hyvinvointia ja ehkäisee nivelten ja lihasten kireyksiä yms. Puhelimeen on mahdollista ladata erilaisia sovelluksia, johon voi asentaa muistutuksia silloin kun itse haluaa'/>
        <Intendedcontent link='https://selkakanava.fi/selkaliitto/liikkeen-liikkumisen-ja-liikunnan-lisaaminen/tilaa-maksuton-taukojumppamuistutus' buttonText='Taukojumpan ohjeet' text='Selkäliitto tarjoaa ilmaisen muistutuksen taukojumpasta jumppaohjeineen. Voit tutustua siihen täältä' />
        <Intendedcontent link='https://breakpro.fi/' buttonText='Lisätietoja' text='Maksullinen BREAK PRO® Taukoliikuntasovellus työn tauottamiseen, ergonomian parantamiseen ja työhyvinvoinnin lisäämiseen. Ohjelma muistuttaa pitämään taukoja valitsemallasi aikataululla. Se on saatavilla kaikille laitteilla ja se sisältää 108 lyhyttä taukoliikuntaohjelmaa. Sitä voi kokeilla 14 päivää ilmaiseksi.' />
        <Content start='Unella' text="on suuri merkitys ihmisen hyvinvointiin ja jaksamiseen. Uni täydentää aivojen energiavarastoja, vaikuttaa sokeriaineenvaihduntaan, autonomisen hermoston toimintaan ja hormoneihin. Unen merkitystä usein vähätellään arjessa ja siitä ollaan usein valmiita tinkimään. Unen tärkeimmät tehtävät liittyvät mm. fyysisen levon (aivot, lihakset) ja voimien palauttamiseen, muistitoimintojen säilymiseen, muistiin painamiseen ja oppimisen edistämiseen. Myös psyykkinen lepo ja palautuminen sekä psyykkisen vireyden ylläpitäminen ovat unen tärkeitä tehtäviä. Unen riittämättömyys puolestaan aiheuttaa heikentymistä valppauteen, keskittymiskykyyn, muistiin ja oppimiseen sekä paineensietokykyyn. Stressi, hermostuneisuus tai ärtyneisyys voivat myös johtua unen puutteesta. Sillä on negatiivisia vaikutuksia myös sydän- ja verisuonitaudeille. (Leskinen & Hult 2010.)" />
        <Linkbutton buttonText='Opas levon ja toiminnan tasapainottamiseen' link='https://www.terveyskyla.fi/kuntoutumistalo/kuntoutujalle/oma-hyvinvointi/opas-levon-ja-toiminnan-tasapainottamiseen'/>
        <Content start='Mielenterveyden' text='tuen työkalupakki tarjoaa työpaikoille ja työterveyshuolloille keinoja pitää huolta mielenterveydestä ennaltaehkäisevästi. Sivuilta löytyy tietoa erilaisista työhön liittyvistä niin yksilöön kuin työyhteisöönkin liittyviä työkaluja mm. palautumislaskuri, Miten voit? -työhyvinvointitesti. ' />
        <Linkbutton buttonText='Työkalupakkiin tästä' link='https://hyvatyo.ttl.fi/mielityo/etusivu?_ga=2.252169472.808035541.1632380079-1256305749.1607087018'/>
        <Subtitle text='Työturvallisuus ja työhyvinvointi  '/>
        <Content text='Maatilan toimintoihin liittyy aina riskejä ja niiden tunnistaminen ja ennaltaehkäiseminen on erityisen tärkeätä. Luonnonvarakeskuksen (Luke) sivuilla voi perehtyä erilaisiin maatilan riskienhallinnan välineisiin.  ' />
        <Linkbutton buttonText='Sivuille tästä' link='https://portal.mtt.fi/portal/page/portal/mtt/hankkeet/maatilanriskienhallinta'/>
        <Subtitle text='Maatalousyrittäjien tuen ja jaksamisen työkaluja'/>
        <Content text='Erilaiset haasteelliset elämäntilanteet ja niiden mukana tuomat muutokset haastavat maatalousyrittäjää monella tavalla. Avun hakemisessa voi olla itseen liittyvää epävarmuutta tai rohkeuden puutetta. Yksin ei kuitenkaan kannata tai tarvitse jaksaa.'/>
        <Content text='Seuraavassa on kuvattu erilaisia keinoja jaksamisen ja elämäntilanteen selvittelyn tueksi.'/>
        <Content start='Melan Välitä viljelijästä' text='-projektin kautta saat maatalousyrittäjänä maksutonta ja luottamuksellista apua silloin, kun henkiset voimavarasi tai taloudelliset resurssisi joutuvat koetukselle.'/>
        <Linkbutton buttonText='Lisätietoa tästä' link='https://www.mela.fi/maatalousyrittajat/valita-viljelijasta/'/>
        <Content start='Maaseudun tukihenkilöverkko' text='on vapaaehtoistoimintaan perustuva auttamisverkosto, joka tarjoaa keskusteluapua kaikille maaseudun asukkaille. Tukihenkilö on maaseudun olosuhteet tunteva vapaaehtoinen, tehtävään koulutettu auttaja, jolle voi puhua ja jonka kanssa voi etsiä ulospääsyä vaikeista tilanteista. Tukeminen on kuulemista, keskustelemista ja rinnalla kulkemista. Tuen saaminen on luottamuksellista.'/>
        <Linkbutton buttonText='Lisätietoa' link='https://tukihenkilo.fi/'/>
        <Content start='Jelppi-ryhmä' text='tarjoaa käytännön apua tilanteissa, joissa perhettä/henkilöä on kohdannut äkillinen tai pitkittyneestä tilanteesta johtuva kriisi tai silloin, kun yrittäjän voimat alkavat hiipua ja työt kasaantua. Tukihenkilöverkosta saa luotettavaa ja maksutonta tukea ilman jonottamista. Vapaaehtoisista koostuvien Jelppi-ryhmien tarkoituksena on auttaa käytännön asioiden järjestämisessä.  Ryhmä tarjoaa apua pääsääntöisesti 1-3 päivän ajan. Auttamisen tavat ja määrä sovitaan aina yksilöllisesti. Jelppi-ryhmään kuuluu 3-5 maaseudun tukihenkilöä.'/>
        <Linkbutton buttonText='Lisätietoa' link='https://tukihenkilo.fi/tukihenkiloverkon-toiminta/jelppi-ryhma/'/>
        <Content start='Naapuriapu' text='on usein korvaamatonta esimerkiksi silloin, kun etäisyydet kuntakeskuksiin ovat pitkiä. Naapurit auttavat luontevasti toisiaan monissa asioissa ja myös hätätilanteissa nopein apu saattaa löytyä läheltä.'/>
        <Linkbutton buttonText='Lisätietoa' link='https://www.maaseutu.fi/'/>
        <Content start ='Oman alueen tuottajayhdistys,' text='jonka tehtävänä on yhdessä jäsenistönsä kanssa varmistaa maaseutuelinkeinojen kannattavuus ja arvostus. Maa- ja metsätaloustuottajain Keskusliitto MTK on ammatti- ja etujärjestö maanviljelijöille, metsänomistajille ja maaseutuyrittäjille. Jäsenkuntamme ammatteja ja elinkeinoja yhdistää se, että ne kaikki perustuvat uusiutuviin luonnonvaroihin ja niiden kestävään ja taloudelliseen hyödyntämiseen.'/>
        <Content start='Työterveyspalvelut,' text='joihin liittyminen on maatalousyrittäjälle vapaaehtoista. Työterveyshuollosta saa tukea työssä jaksamiseen ja sen avulla voi ennaltaehkäistä työperäisiä sairauksia. Säännölliset terveystarkastukset lisäävät myös turvallisuuden tunnetta omasta terveydestä, mikä auttaa ehkä katsomaan valoisammin tulevaisuuteen. Työterveyteen kuuluu myös työkykyä ylläpitävä toiminta ja kuntoutukseen ohjaaminen. Jokainen yrittäjä voi vaikuttaa siihen, missä laajuudessa hän ostaa työterveyspalveluita, ketä tilakäynnille osallistuu ja mitä korjaavia toimenpiteitä hän toteuttaa (Yliselä 2009). '/>
        <Linkbutton buttonText='Lisätietoa' link='https://tukihenkilo.fi/tukihenkiloverkon-toiminta/jelppi-ryhma/'/>
        <Content text='Oman alueen Terveys- ja sosiaalipalvelut '/>
        <Subtitle text='Asiantuntijapalveluiden käyttäminen: esim.'/>
        <Content text='ProAgria, joka tarjoaa asiantuntijapalveluja ja osaamista maatalouden ja maaseudun yritystoiminnan kilpailukyvyn kehittämiseen.'/>
        <Linkbutton buttonText='Lisätietoa' link='https://www.proagria.fi/'/>
        <Content text='Wikli Group Oy on maatiloille talouden ja liiketoimintapalveluita tarjoava asiantuntijayritys. '/>
        <Linkbutton buttonText='Lisätietoa' link='https://www.wikligroup.fi/'/>
      </div>
    </div>
  )
}
