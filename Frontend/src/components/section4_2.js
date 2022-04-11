import React from 'react';

import styles from './sectionscontainer.module.css'
import Title from './sectioncomponents/Title.js';
import Content from './sectioncomponents/Content.js';
import Linkbutton from './sectioncomponents/linkbutton';
import Intendedcontent from './sectioncomponents/Intendedcontent';
import Subtitle from './sectioncomponents/Subtitle';

export default function section4_2() {
  return (
    <div>
      <div className={styles.container}>
        <Title title='Psyykkinen hyvinvointi'/>
        <Content start='Psyykkisellä hyvinvoinnilla' text ='tarkoitetaan kokemusta omasta hyvinvoinnista ja mielen tasapainosta. Psyykkiseen hyvinvointiin vaikuttavat monet arkiset asiat kuten uni ja lepo, ravitsemus, ihmissuhteet ja tunteet, liikunta, harrastukset ja luovuus. Yksi ihmisen perustarpeista on kuulua ryhmään ja tulla hyväksytyksi. Ympärilleen ihminen tarvitsee työn lisäksi muitakin ryhmiä kuten perheen ja ystävät. (Sallinen, Kandolin & Purola 2007.) Psyykkistä työhyvinvointia edistää kokemus oman työn hallinnasta ja vaikutusmahdollisuuksista. Työntekijä tarvitsee psyykkistä vahvuutta selviytyäkseen työn kuormitustekijöistä ja palautuakseen niistä. (Kivistö, Kallio & Turunen 2008.)'/>
        <Content text ='Työ vaatii tekijältään joustavuutta, soveltamista ja ennakointia. Resilienssi eli psyykkinen palautumiskyky on selviytymistä vakavasta sairaudesta, kuten muistakin vastoinkäymisistä. Se on psyykkinen ominaisuus, jota toisilla on enemmän kuin toisilla. Jotkut selviävät monista vaikeista vastoinkäymisistä, joillekin pienimmätkin koettelemukset voivat olla liikaa. Resilienssi on osa terveyttä ja mielenterveyttä. Mitä suurempi resilienssi, sitä parempi on koettu terveys.'/>
        <Content text ='Resilienssistä voi lukea lisää seuraavilta sivuilta. Siellä on myös keinoja siihen, miten voi lisätä tai kehittää omaa resilienssiään.'/>
        <Linkbutton buttonText='mieli.fi' link='https://mieli.fi/vahvista-mielenterveyttasi/mita-mielenterveys-on/resilienssi-auttaa-selviytymaan/ '/>
        <Linkbutton buttonText='Työn kehittäminen' link='https://www.ttl.fi/tyoyhteiso/tyon-kehittaminen/mita-on-resilienssi/'/>
        <Linkbutton buttonText='Resilienssitesti' link='https://www.evermind.fi/resilienssi-testi/'/>
        <Linkbutton buttonText='Työuupumus tai stressi' link='https://www.terveystalo.com/fi/Tietopaketit/Stressi/#Stressitesti'/>
        <Linkbutton buttonText='Omien voimavarojen tunnistaminen ja vahvistaminen' link='https://www.terveyskyla.fi/kuntoutumistalo/kuntoutujalle/oma-hyvinvointi/opas-omien-voimavarojen-tunnistamiseen-ja-vahvistamiseen'/>
        <Content text ='Markkinoilla on erilaisia sovelluksia oman mielialan seurantaan tai tuen saamiseen:'/>
        <Intendedcontent text='Mielialapäiväkirja DAYLIO. Se on ilmainen ja suomenkielinen mobiilipäiväkirja mielialan seurantaan ja siihen vaikuttavia asioita. Daylio kerää sovellukseen kirjaamasi merkinnät kalenteriin ja tilastoihin. Daylio ei kerää tai tallenna mitään henkilökohtaisia tietoja. '/>
        <Linkbutton buttonText='App store' link='https://apps.apple.com/fi/app/daylio-mielialap%C3%A4iv%C3%A4kirja/id1194023242?l=fi'/>
        <Linkbutton buttonText='Play store' link='https://play.google.com/store/apps/details?id=net.daylio&hl=fi&gl=US'/>
        <Linkbutton buttonText='Sovelluksen asennusohje' link='https://www.youtube.com/watch?v=fbBIPGQxKQA'/>
        <Content start='OIVA' text='on kehitetty yhteistyössä Suomen Mielenterveys ry:n kanssa. Tekijöinä VTT, Jyväskylän Yliopisto ja Headsted. Sen avulla voit lievittää stressiä, parantaa mielialaa ja löytää mielekkyyttä elämään. Oiva-hyvinvointiohjelman harjoituksilla voit tutkia, mikä on tunteille ja ajatuksille luontaista, ja miten niiden kanssa voi elää hyvässä sovussa'/>
        <Linkbutton buttonText='Oiva' link='https://oivamieli.fi/ '/>
        <Content text=
          {<><ul>
            <li>Oiva perustuu arvo-, hyväksyntä- ja tietoisen läsnäolon (mindfulness) menetelmiin.</li>
            <li>Oivan harjoitukset ovat toiminnallisia tai pohdittavia tehtäviä, näkökulmaa antavia kielikuvia sekä vinkkejä arjen tilanteisiin.</li>
            <li>Harjoitukset ovat kokemuksellisia eikä niitä tarvitse ymmärtää tietyllä tavalla. Ne saavat tuntua oudoilta tai huvittavilta.</li>
            <li>Harjoituksia voi tehdä lukemalla tai kuuntelemalla.</li>
            <li>Harjoituksen kestot ovat suuntaa-antavia – voit syventää harjoituksia pidentämällä niihin käyttämääsi aikaa!</li>
            <li>Oiva ohjaa tekemään harjoituksia tietyssä järjestyksessä, mutta harjoituksia on hyvä tehdä useamman kerran.</li>
          </ul></>}/>
        <Subtitle text='Mielenterveystalon sivuilta löydät tietoa, omahoito-ohjelmia, oppaita, oirenavigaattoreita sekä palveluhakuja. '/>
        <Intendedcontent buttonText='Mielenterveystalo' link='https://www.mielenterveystalo.fi' text='Ei kirjautumista, ei tallenteita'/>
        <Content start='Suomen Mielenterveysseura:' text='mm. mielenterveyttä vahvistavia harjoituksia, kriisistä selviytymistä tukeva omahoito-ohjelmat Selma (aikuisille) ja Toivo (nuorille) ja verkkokriisikeskus Tukinet '/>
        <Linkbutton buttonText='Lisätietoja' link='http://www.mielenterveysseura.fi/fi'/>
        <Content start='Lohtu:' text='Surunauha ry:n kehittämä Lohtu-mobiilisovellus. Sovelluksen avulla voi pitää yhteyttä muihin itsemurhan tehneiden läheisiin'/>
        <Linkbutton buttonText='Lisätietoja' link='https://surunauha.net/lohtusovellus/ '/>
        <Content text='Näiltä sivuilta löydät mielenterveyden itsearviointityökaluja. Ne on tarkoitettu helpottamaan oman psyykkisen voinnin arviointia ja seurantaa. Kyselyiden tulokset ovat aina suuntaa antavia, eikä minkään yksittäisen kyselyn perusteella voida asettaa jonkin mielenterveyshäiriön diagnoosia.'/>
        <Linkbutton buttonText='Lisätietoja' link='https://www.mielenterveystalo.fi/aikuiset/itsearviointi/Pages/default.aspx'/>
      </div>
    </div>
  )
}
