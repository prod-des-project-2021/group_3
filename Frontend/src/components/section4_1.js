import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Imgcontainer from './sectioncomponents/Imgcontainer.js';
import Content from './sectioncomponents/Content.js';
import Caption from './sectioncomponents/Caption.js';
import Linkbutton from './sectioncomponents/linkbutton';
import Intendedcontent from './sectioncomponents/Intendedcontent';
import buttonStyle from "./sectioncomponents/linkbutton.module.css";
import { Link } from "react-router-dom";

export default function section4_1() {
  return (
    <div>
      <div className={styles.container}>
        <Title title='Fyysinen hyvinvointi'/>
        <Caption text ='Fyysiseen hyvinvointiin kuuluvat yksilön terveys, fyysinen kunto, jaksaminen työpaikalla sekä työpaikan fyysinen ja henkinen turvallisuus. Myös tae siitä, että työ on jatkuvaa, liittyy painokkaasti fyysiseen hyvinvointiin. Työntekijällä on oikeus työskennellä turvallisissa olosuhteissa sekä asiaankuuluvilla ja turvallisilla työvälineillä. (Suutarinen & Vesterinen 2010.)'/>
        <Content text ='Terveellinen ruokavalio, riittävä päivittäinen liikunta ja uni edistävät terveyttä. Ne vähentävät riskiä sairastua moniin sairauksiin. Hyvä kunto ja oma terveys on maatilayrittäjän työkyvyn ja hyvinvoinnin perusta. (Yliselä 2009.)'/>
        <Content text ='Ravitsemus on tärkeä osa monien elintapasairauksien ehkäisyä.'/>
        <Linkbutton buttonText='Terveyskylän ravitsemusopas' link='https://www.terveyskyla.fi/kuntoutumistalo/kuntoutujalle/ravitsemus'/>
        <Linkbutton buttonText='Marttojen ohje ravitsemukseen' link='https://www.martat.fi/marttakoulu/ravitsemus/'/>
        <Content text='Elämäntapamuutoksissa apuvälineenä voi olla esimerkiksi erilaiset ruokapäiväkirjat:'/>
        <Intendedcontent buttonText='LINKKI?????' link='' text='Ilmaisella YAZIO Kalorilaskurilla ruokapäiväkirjan pito käy helposti ja nopeasti. Ladattavissa esimerkiksi puhelimeen, jossa Android-käyttöjärjestelmä. '/>
        <Intendedcontent buttonText='LINKKI?????' link='' text='Myös ilmaisen FatSecret Kalorilaskurin voi ladata Google Play kaupasta. Sinne kirjaudutaan sähköpostiosoitteella. Palvelua voi käyttää myös tietokoneella. Käyttäjä kirjaa pituutensa, sukupuolensa, ikänsä nykyisen painonsa ja painotavoitteensa sekä yleisen aktiivisuustasonsa. Näiden perusteella FatSecret laskee henkilökohtaisen energiantarpeen ja kulutuksen.'/>
        <Content start='Liikunta' text='on tarkoituksellista fyysistä aktiivisuutta, jonka tarkoituksena on esimerkiksi kunnon kohottaminen, terveyden parantaminen tai pelkästään liikunnan tuottama ilo ja mielihyvä. Sillä on tutkitusti lukuisia hyviä vaikutuksia ihmisen terveyteen ja useiden sairauksien ehkäisyyn.'/>
        <Linkbutton buttonText='Lisätietoa' link='https://ukkinstituutti.fi/liikkuminen/liikkumisen-vaikutukset/'/>
        <Imgcontainer alt='Vinkkejä liikunnan aloittamiseen' imgsrc='https://ukkinstituutti.fi/wp-content/webpc-passthru.php?src=https://ukkinstituutti.fi/wp-content/uploads/2021/01/liikkumisen-aloittamisen-vinkit-infograafi-1024x576.png&nocache=1' />
        <Intendedcontent buttonText='Liikuntakortti' link='https://ukkinstituutti.fi/aineistot/liikkumisen-viikko-ohjelma-ja-seuranta/' text='Täältä voit ladata itselle liikkumiskortin, johon voit merkitä viikoittaisen liikkumistavoitteen ja seurata sen toteutumista'/>
        <Content text='Maatalousyrittäjän työ kulkee mukana vapaa-ajalla eikä yrittäjällä ole määrättyä työaikaa, vaan hän voi hyvin pitkälle suunnitella sen itse. Tästä johtuen työ- ja vapaa-ajan erottaminen toisistaan voi olla vaikeaa. Esimerkiksi karjataloutta harjoittava yrittäjä tekee usein jopa yli 12 tunnin mittaisia työpäiviä. Sesonkiaikoina työpäivän pituus nousee vielä tätä suuremmaksi. (Lätti & Karttunen 2010.) Omasta hyvinvoinnista huolehtiminen voi olla hankalaa, jos työ- ja vapaa-aika eivät ole tasapainossa eikä palautumiselle jää riittävästi aikaa.'/>
        <Content start='Vuosikello' text ='on apunasi suunnitellessa vuottasi. Sen avulla voit jäsentää yrityksesi aktiviteetit vuoden kulun mukaan. Jotkut yrityksen aktiviteetit liittyvät toisiinsa ja onkin hyvä huomioida, että tarvittavat aktiviteetit ovat tehtynä ennen seuraavan alkua.'/>
        <Link className={buttonStyle.button} to="/Vuosikello">Omaan vuosikelloon</Link>       
        <Content start='Omaa terveydentilaa voi seurata' text ='erilaisilla sovelluksilla esim. aktiivisuutta ja askelmäärää. Sykkeen vaihtelu ja leposykkeen taso antavat tietoa palautumisesta ja stressistä. '/>
        <Intendedcontent text='Markkinoilla on erilaisia sovelluksia, joita voi ladata omaa älypuhelimeen, tablettiin tai omalle tietokoneelle. Sovellusten kautta voi seurata omia terveyteen ja hyvinvointiin liittyviä asioita ja kertynyttä dataan voi hyödyntää esim. seurannassa. Näitä on erilaisia älykelloja ja älysormuksia, joihin on lisätty useita eri ominaisuuksia. esim. Polar flow, Fitbit, Yazio, askelmäärät. Nämä keräävät päivittäistä tilastoa kehontoiminnoista.'/>
        <Intendedcontent text='Naisille on kehitetty erityinen kuukautissovellus Flo, mikä tarjoaa käyttäjälle monipuolisen mahdollisuuden pitää kirjaa omaan hyvinvointiin liittyvistä oireista. Sovellus ennustaa kuukautiset ja ovulaatiopäivän käyttäjän antamien tietojen mukaan. Lisäksi sovelluksen avulla voi tarkkailla muun muassa yöunien pituutta, otettujen askelten määrää, päivässä juodun veden määrää, painon kehitystä, mielialaa, fyysisiä oireita, seksuaalista aktiivisuutta ja valkovuodon laatua. Kuukautisten aikana sovellukseen kirjataan myös vuodon määrä. Lisäksi sovelluksen voi asettaa muistuttamaan e-pillerin ottamisesta ja siihen voi kirjata tiedon tehdyistä raskaustesteistä ja niiden tuloksista. ilmaiseksi Androidille ja iPhonelle.'/>
        <Linkbutton buttonText='App storeen' link='https://apps.apple.com/us/app/flo-period-ovulation-tracker/id1038369065'/>
        <Linkbutton buttonText='Play storeen' link='https://play.google.com/store/apps/dev?id=7859780945987939075&hl=en_SG&gl=US'/>
      </div>
    </div>
  )
}
