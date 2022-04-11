import React from  'react';

import styles from  './sectionscontainer.module.css'
import Title from  './sectioncomponents/Title.js';
import Content from  './sectioncomponents/Content';
import Backbutton from  './sectioncomponents/Backbutton';

export default function References() {

  return (
    <div>
      <Backbutton/>
      <div className={styles.container}>
        <Title title= 'Lähdeluettelo '/>
        <Content start=  'Aivoliitto 2022.  ' text=  'Aivoterveyttä arkeesi. Hakupäivä 6.4.2022.  ' link="https://www.aivoliitto.fi/aivoterveys/" />
        <Content start=  'Aivosäätiö ja Merck Oy 2022.  ' text=  'Aivojen rakenne ja toiminta. Hakupäivä 6.4.2022.  ' link="https://www.rakkaataivot.fi/aivojen-rakenne-ja-toiminta/" />
        <Content start=  'BREAK PRO 2019.   ' text=  '2022.  ' link="https://breakpro.fi/" />
        <Content start=  'Evermind 2020.   ' text=  'Resilienssitesti kertoo, kuinka paljon sinussa on resilienssiä. Hakupäivä 6.4.2022  ' link="https://www.evermind.fi/resilienssi-testi/"/>
        <Content start=  'Hakanen, Jari, Kaltiainen, Janne ja Mäkiniemi, Janna-Piia. Työterveyslaitos.  ' text=  'Työelämän mielenterveysohjelma. Hakupäivä 6.4.2022.  ' link="https://hyvatyo.ttl.fi/mielityo/tyokalut/miten-voit-tyohyvinvointitesti" />
        <Content start=  'Harima Joonas.  ' text=  'Henkilökohtaiset arvot. Hakupäivä 6.4.2022.  ' link="https://harimaa.com/mentaali/henkilokohtaiset-arvot/" />
        <Content start=  'Heinemaa, Satu 2020.  ' text=  'Poutapäiviä ja pakkasaamuja – Maatalousyrittäjän parisuhde. Opinnäytetyö. Hämeen ammattikorkeakoulu HAMK. Maaseutuelinkeinojen koulutusohjelma.  ' />
        <Content start=  'Jyväskylän ammattikorkeakoulu Yksissä-hanke.  ' text=  'Tietoa ja taitoa ihmissuhteisiin, kohtaamisia maaseudun asukkaiden parhaaksi  ' link="https://www.jamk.fi/fi/Tutkimus-ja-kehitys/projektit/yksissa/parisuhdemateriaalia/" />
        <Content start=  'HYMYT-hanke 2021.  ' text=  'Toimintamalli hyvinvoivan maatilan kehittämiseksi. Oamk Oy.  ' />
        <Content start=  'Karpakka, Jarmo.   ' text=  'Terveet elämäntavat vaalivat aivoterveyttä. Liikkuva aikuinen. Hakupäivä 6.4.2022.  ' link="https://www.olipakerranmies.fi/terveet-elamantavat-vaalivat-aivoterveytta/" />
        <Content start=  'Kivistö, Sirkku, Kallio, Eila & Turunen, Greta 2008.   ' text=  'Työ, henkinen hyvinvointi ja mielenterveys. Sosiaali- ja terveysministeriö. Työterveyslaitos.  ' />
        <Content start=  'Kouvolan seudun Muisti ry & Muistiliitto 2015.  ' text=  'Kohti parempaa aivoterveyttä. Opas aivojen huoltoon ja hyvinvointiin. Hakupäivä 6.4.2022.  ' link="https://www.muistiliitto.fi/application/files/3015/0922/4743/Kohti_parempaa_aivoterveytta.pdf" />
        <Content start=  'Leskinen, Tomi & Hult, Hanna-Maria 2010.  ' text=  'Kokonaisvaltainen hyvinvointi. Kristallisoi toimintasi. Saavuta tavoitteesi. Latvia: PRO Tammi.  ' />
        <Content start=  'Luke Luonnonvarakeskus 2015.  ' text=  'Luke Luonnonvarakeskus 2015.  ' link="https://portal.mtt.fi/portal/page/portal/mtt/hankkeet/maatilanriskienhallinta" />
        <Content start=  'Luke taloustohtori.   ' text=  'Maa- ja puutarhatalous. Hakupäivä 6.4.2022.  ' link="https://portal.mtt.fi/portal/page/portal/taloustohtori/kannattavuuskirjanpito/taustatiedot/Kannattavuuskirjanpito/" />
        <Content start=  'Lätti, Markku & Karttunen, Janne 2010.  ' text= 'Työ ja lepo tasapainoon. Teho 2010 (5). ' />
        <Content start= 'Heinemaa, S. ' text= ' 2020. Poutapäiviä ja pakkasaamuja – Maatalousyrittäjän parisuhde. Opinnäytetyö. Hämeen ammattikorkeakoulu HAMK. Maaseutuelinkeinojen koulutusohjelma. '/>
        <Content start= 'Maaseutu.fi 2021. ' text= 'Kylillä tehdään yhdessä. Halupäivä 6.4.2022. ' link= 'https://www.maaseutu.fi/maaseutu/kylat '/>
        <Content start= 'Maaseudun tukihenkilöverkko 2020. ' text= 'Jelppi-ryhmä. Hakupäivä 6.4.2022. ' link= ' https://tukihenkilo.fi/tukihenkiloverkon-toiminta/jelppi-ryhma/ '/>
        <Content start= 'Maatalousyrittäjien eläkelaitos Mela. ' text= ' Hakupäivä 6.4.2022.  ' link= 'https://www.mela.fi/ '/>
        <Content start= 'Martat. ' text= 'Ravitsemus. Hakupäivä 6.4.2022. ' link= 'https://www.martat.fi/marttakoulu/ravitsemus/ '/>
        <Content start= 'Mela 2022. ' text= 'Välitä viljelijästä. Hakupäivä 6.4.2022. ' link= 'https://www.mela.fi/maatalousyrittajat/valita-viljelijasta/ '/>
        <Content start= 'Mielenterveystalo. ' text= 'Itsearviointityökalut. Hakupäivä 6.4.2022. ' link= 'https://www.mielenterveystalo.fi/aikuiset/itsearviointi/Pages/default.aspx '/>
        <Content start= 'Oiva  ' text= 'Harjoituksia mielen ja kehon hyvinvointiin. Tietoisuutta arkeen. Hakupäivä 6.4.2022. ' link= 'https://oivamieli.fi/ '/>
        <Content start= 'Partala, Anne-Elina 2009. ' text= 'Fyysisen aktiivisuuden ja toimintakyvyn yhteys ikääntyneiden hyvinvointiin Suomessa. Pro gradu –tutkielma. Liikuntatieteiden laitos, Jyväskylän yliopisto. ' />
        <Content start= 'Pro Agria 2014. ' text= 'Hakupäivä 6.4.2022. ' link= 'https://www.proagria.fi/ '/>
        <Content start= 'Sallinen, Mikael, Kandolin, Irja & Purola, Mari 2002. ' text= 'Elämisen rytmi: kohti tasapainoa työn ja muun elämän välillä. Työterveyslaitos. '/>
        <Content start= 'Salonen, Marika & Utriainen, Tommi. ' text= 'Arvot puntarissa. Arvotesti. Hakupäivä 6.4.2022. ' link= 'https://arvoja.wordpress.com/ '/>
        <Content start= 'Selkäliitto 2018. ' text= 'Selkäkanava. Hakupäivä 6.4.2022. ' link= 'https://selkakanava.fi/selkaliitto/liikkeen-liikkumisen-ja-liikunnan-lisaaminen/tilaa-maksuton-taukojumppamuistutus '/>
        <Content start= 'Suomen Mielenterveys ry. Mieli.  2021. ' text= 'Resilienssi auttaa selviytymään. Hakupäivä 6.4.2022. ' link= 'https://mieli.fi/vahvista-mielenterveyttasi/mita-mielenterveys-on/resilienssi-auttaa-selviytymaan/ '/>
        <Content start= 'Suutarinen, Marjaana 2010. ' text= 'Työhyvinvoinnin organisointi. Teoksessa Suutarinen, Marjaana & Vesterinen Pirkko-Liisa (toim.) Työhyvinvoinnin johtaminen. Keuruu: Otava '/>
        <Content start= 'Surunauha ry 2022. ' text= 'Lohtu-sovellus. Hakupäivä 6.4.2022. ' link= 'https://surunauha.net/lohtusovellus/ '/>
        <Content start= 'Takuusäätiö 2020. ' text= 'Käsitys työhyvinvoinnista on syytä päivittää 2020-luvulle. Hakupäivä 6.4.2022. ' link= 'https://www.takuusaatio.fi/julkaisu/kasitys-tyohyvinvoinnista-on-syyta-paivittaa-2020-luvulle/ '/>
        <Content start= 'Terveyskylä,  ' text= 'Kuntoutumistalo. Opas levon ja toiminnan tasapainottamiseen Hakupäivä 6.4.2022. ' link= 'https://www.terveyskyla.fi/kuntoutumistalo/kuntoutujalle/oma-hyvinvointi/opas-levon-ja-toiminnan-tasapainottamiseen '/>
        <Content start= 'Terveyskylä,  ' text= 'Mielenterveystalo. Hakupäivä 6.4.2022. ' link= 'https://www.mielenterveystalo.fi/ ' />
        <Content start= 'Terveyskylä,  ' text= 'Kuntoutumistalo. Opas omien voimavarojen tunnistamiseen ja vahvistamiseen. Hakupäivä 6.4.2022. ' link= 'https://www.terveyskyla.fi/kuntoutumistalo/kuntoutujalle/oma-hyvinvointi/opas-omien-voimavarojen-tunnistamiseen-ja-vahvistamiseen ' />
        <Content start= 'Terveyskylä,  ' text= 'Kuntoutumistalo 2020. Ravitsemus. Hakupäivä 6.4.2022. ' link= 'https://www.terveyskyla.fi/kuntoutumistalo/kuntoutujalle/ravitsemus ' />
        <Content start= 'Terveystalo,  ' text= 'Kuntoutumistalo. Stressi uuvuttaa ja altistaa muille mielenterveyshäiriöille. Hakupäivä 6.4.2022. ' link= 'https://www.terveystalo.com/fi/Tietopaketit/Stressi/#Stressitesti ' />
        <Content start= 'Tuure,  ' text= 'Veli-Matti 2011. Ajankohtaista viljelijöiden työhyvinvoinnista. Teho 2011 (2). '/>
        <Content start= 'Työsuojeluhallinto ' text= ' ' link= 'https://www.tyosuojelu.fi/ ' />
        <Content start= 'Työterveyslaitos ' text= ' ' link= ' https://www.ttl.fi/tyoyhteiso/tyokykytalo ' />
        <Content start= 'Työterveyslaitos. ' text= 'Yrittäjän työkyky – menestyvän yrityksen kivijalka -vinkkikirja. Hakupäivä 6.4.2022. ' link= 'https://hyvinvoivaamis.fi/sites/default/files/attachments/good_practices/ttl_vinkkikirja_netti.pdf ' />
        <Content start= 'Työterveyslaitos 2022. ' text= 'Kykyviisari työ- ja toimintakyvyn tukena. Hakupäivä 6.4.2022. ' link= 'https://sivusto.kykyviisari.fi/ ' />
        <Content start= 'Työterveyslaitos Mieli ja työ.  ' text= 'Mielenterveyden tuen työelämäpakki. Hakupäivä 6.4.2022. ' link= 'https://hyvatyo.ttl.fi/mielityo/?_ga=2.252169472.808035541.1632380079-1256305749.1607087018 ' />
        <Content start= 'Työterveyslaitos. ' text= 'Resilientti organisaatio. Hakupäivä 6.4.2022. ' link= 'https://www.ttl.fi/teemat/tyohyvinvointi-ja-tyokyky/resilientti-organisaatio ' />
        <Content start= 'Työturvallisuuskeskus. ' text= 'Hakupäivä 6.4.2022. ' link= 'https://ttk.fi/tyoturvallisuus_ja_tyosuojelu/tyokalut_ja_kehittaminen/yksilotutka#8bc7a548 ' />
        <Content start= 'UKK-instituutti 2009. ' text= 'Liikkumisen viikko-ohjelma ja seuranta. Hakupäivä 6.4.2022. ' link= 'https://ukkinstituutti.fi/aineistot/liikkumisen-viikko-ohjelma-ja-seuranta/ ' />
        <Content start= 'UKK-instituutti 2022. ' text= 'Liikkumisen vaikutukset. Hakupäivä 6.4.2022. ' link="https://ukkinstituutti.fi/liikkuminen/liikkumisen-vaikutukset/"/>
        <Content start= 'Yliselä, Paula (toim.) 2009. ' text= 'Maatalousyrittäjän hyvinvointi. Porvoo: ProAgria Keskusten Liitto. ' />
        <Content start= 'Wikli Group Oy 2022. ' text= 'Talouden ja liiketoiminnan asiantuntijapalvelut maatalousyrityksille. Hakupäivä 6.4.2022. ' link="https://www.wikligroup.fi/" />
      </div>  
    </div>
  )
}
