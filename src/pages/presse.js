import Layout from "../components/layout"
import React from "react"
import Seo from "../components/seo"
import Text from '../components/text'
import VideoEmbed from '../components/video/embed'

const ImprintPage = () => (
  <Layout>
    <Seo title="Impressum" />
    <Text>
      <h1>Presse</h1>
      <p><a href="https://landstreicher-booking.de/artists/blond">Pressematerial</a></p>
      <VideoEmbed url="https://www.youtube.com/embed/mOBhuYOyrYM?feature=oembed"/>
      <p><br/><strong>SPIEGEL KULTUR</strong><br/>
      Abgehört – neue Musik von Andreas Borcholte<br/>
      <a href="https://www.spiegel.de/kultur/musik/neue-musik-destroyer-polica-blond-torres-a-d5253237-16fd-45c8-9239-ce258891df37">zum Beitrag</a><br/></p>
      <p><strong>ZE.TT</strong><br/>
      So geht die Band Blond aus Chemnitz mit sexistischen Kommentaren um<br/>
      <a href="https://ze.tt/chemnitzer-band-blond-er-soll-kommen-der-hass/">zum Beitrag</a><br/></p>
      <p><strong>SÜDDEUTSCHE ZEITUNG</strong><br/>
      Pop – Blond – „Martini Sprite“ (Rough Trade)<br/>
      <a href="https://www.freiepresse.de/kultur-wissen/kultur/chemnitzer-trio-blond-kirschen-und-keule-artikel10025942">zum Beitrag</a></p>
      <p><strong>BENTO</strong><br/>
      Blond im Interview: „Die Thorstens wollen den Soundcheck für uns machen“<br/>
      <a href="https://www.bento.de/musik/blond-nina-kummer-im-interview-ueber-martini-sprite-mansplaining-und-ostdeutsche-identitaet-a-23c8fd0e-0997-4807-8937-017021779992">zum Beitrag</a></p>
      <p><strong>DEUTSCHLANDFUNK</strong><br/>
      Stalking, Regelschmerzen, Saboteure<br/>
      <a href="https://diffusmag.de/p/blond-spinaci">zum Beitrag</a></p>
      <p><strong>LAUT.DE</strong><br/>
      Abseitiger Humor und unkonventionelle Themen. Review von <em>David Baldysiak</em><br/>
      <a href="https://www.laut.de/Blond/Alben/Martini-Sprite-113616">zum Beitrag</a></p>
    </Text>
  </Layout>
)

export default ImprintPage
