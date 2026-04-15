import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Persónuverndarstefna - Pure Deli" },
];

export default function PrivacyPolicy() {
  return (
    <section className="w-full">
      <div className="container pt-12.5 lg:pt-15.5 pb-25 lg:max-w-183.5">
        <h1 className="font-heading text-black text-[30px] lg:text-[45px] mb-6 lg:mb-7">
          Persónuverndarstefna
        </h1>

        <div className="w-full wp-content text-black!">
          <p>
            Pure Deli leggur áherslu á að vernda persónuupplýsingar þínar og
            virða friðhelgi þína. Þessi persónuverndarstefna útskýrir hvernig
            við söfnum, notum, deilum og verndum persónuupplýsingar í samræmi
            við persónuverndarlög (GDPR).
          </p>

          <h2>Ábyrgðaraðili</h2>

          <p>
            Pure Deli er ábyrgðaraðili þeirra persónuupplýsinga sem safnað er.
            Hér eru samskiptaupplýsingar okkar:
          </p>

          <ul>
            <li>
              <strong>Nafn:</strong> Pure Deli
            </li>
            <li>
              <strong>Heimilisföng:</strong>
              <br />
              <p>Suðurlandsbraut 48, 108 Reykjavík</p>
              <p>Bæjarlind 14-16, 201 Kópavogur</p>
            </li>
            <li>
              <strong>Netfang:</strong> puredeli@puredeli.is
            </li>
            <li>
              <strong>Símanúmer:</strong> 553 3133
            </li>
          </ul>

          <h2>Söfnun og notkun persónuupplýsinga</h2>

          <p>
            Við söfnum persónuupplýsingum í mismunandi tilgangi til að veita og
            bæta þjónustu okkar við þig. Tegundir upplýsinga sem við kunnum að
            safna eru:
          </p>

          <ul>
            <li>
              <strong>Samskiptaupplýsingar:</strong> Svo sem nafn, netfang og
              símanúmer þegar þú hefur samband við okkur.
            </li>
            <li>
              <strong>Notkunargögn:</strong> Upplýsingar um hvernig þú notar
              vefsíðuna okkar, svo sem IP-tölu, gerð vafra og heimsóknartíma.
              Tilgangurinn með vinnslu þessara gagna er að veita þjónustu okkar,
              svara fyrirspurnum, bæta vefsíðuna og, með þínu samþykki, í
              markaðslegum tilgangi.
            </li>
          </ul>

          <h2>Vafrakökur (Cookies)</h2>

          <p>
            Vefsíðan okkar notar vafrakökur til að greina hana frá öðrum
            notendum og bæta upplifun þína. Vafrakökur eru litlar textaskrár sem
            vistaðar eru í tækinu þínu. Þú getur stjórnað notkun vafrakaka í
            stillingum vafrans þíns.
          </p>

          <p>
            Þú getur hvenær sem er breytt stillingum fyrir vafrakökur með því að
            smella á fingrafarstáknið neðst til vinstri á síðunni.
          </p>

          <h2>Miðlun upplýsinga til þriðja aðila</h2>

          <p>
            Við deilum ekki persónuupplýsingum þínum með þriðju aðilum nema það
            sé nauðsynlegt til að veita þjónustu okkar (t.d. til greiðslumiðlara
            eða vefþjónustuaðila) eða ef lagaleg skylda krefst þess. Við seljum
            aldrei persónuupplýsingar þínar.
          </p>

          <h2>Réttindi þín</h2>

          <p>
            Samkvæmt persónuverndarlögum hefur þú ýmis réttindi varðandi
            persónuupplýsingar þínar:
          </p>

          <ul>
            <li>Réttur til aðgangs að gögnum þínum.</li>
            <li>
              Réttur til að láta leiðrétta rangar eða ófullnægjandi upplýsingar.
            </li>
            <li>Réttur til eyðingar gagna („rétturinn til að gleymast“).</li>
            <li>Réttur til að takmarka vinnslu gagna.</li>
            <li>
              Réttur til að andmæla vinnslu sem byggir á lögmætum hagsmunum
              okkar.
            </li>
            <li>Réttur til að fá gögn þín flutt á milli kerfa.</li>
          </ul>

          <p>
            Ef þú vilt nýta réttindi þín, vinsamlegast hafðu samband við okkur.
          </p>

          <h2>Öryggi gagna</h2>

          <p>
            Við gerum viðeigandi tæknilegar og skipulagslegar ráðstafanir til að
            tryggja öryggi persónuupplýsinga þinna og vernda þær gegn
            óleyfilegum aðgangi, breytingum eða eyðingu.
          </p>

          <h2>Hafðu samband</h2>

          <p>
            Ef þú hefur einhverjar spurningar varðandi þessa
            persónuverndarstefnu eða meðferð okkar á persónuupplýsingum,
            vinsamlegast hafðu samband í gegnum netfangið puredeli@puredeli.is
            eða í síma 553 3133.
          </p>

          <h2>Breytingar á persónuverndarstefnu</h2>

          <p>
            Þessi persónuverndarstefna kann að taka breytingum frá einum tíma
            til annars. Allar breytingar verða birtar á þessari síðu og
            dagsetning gildistöku uppfærð.
          </p>
        </div>
      </div>
    </section>
  );
}
