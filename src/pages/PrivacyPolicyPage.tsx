import { Link } from 'react-router-dom'

const p = 'mb-4 text-[0.9375rem] leading-relaxed text-muted'
const h2 = 'mt-12 scroll-mt-24 text-xl font-bold text-ink first:mt-0'
const h3 = 'mt-8 text-base font-semibold text-ink'
const label = 'mt-4 block text-sm font-semibold text-ink'
const ul = 'mb-4 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-muted'

export function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <p className="mb-8 text-sm">
        <Link to="/" className="font-medium text-brand hover:text-brand-hover">
          ← Tillbaka till startsidan
        </Link>
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Integritetspolicy
      </h1>
      <p className={`${p} mt-2 text-sm`}>Senast uppdaterad enligt version på webbplatsen.</p>

      <h2 className={h2}>1 INLEDNING</h2>
      <p className={p}>
        Reel Estate AB, org.nr 559529-2771 (härefter ”Reel Estate”, ”vi” eller ”oss”)
        värnar om individens personliga integritet och är mån om att personuppgifter
        behandlas på ett säkert, korrekt och lagenligt sätt. Reel Estate har antagit denna
        policy i syfte att informera dig om hur vi behandlar dina personuppgifter. Om du
        på något vis ska lämna personuppgifter till oss på Reel Estate uppmanar vi dig
        att först läsa igenom policyn.
      </p>
      <p className={p}>
        Denna policy riktar sig till (i) befintliga-, tidigare- och potentiella kunder
        (ii) användare av våra tjänster, (iii) besökare av vår webbplats och våra sociala
        kanaler, samt (iv) personer som kontaktar oss via mail.
      </p>

      <h2 className={h2}>2 KONTAKTUPPGIFTER OCH PERSONUPPGIFTSANSVAR</h2>
      <p className={p}>
        Reel Estate är personuppgiftsansvarig för den personuppgiftsbehandling som
        beskrivs i denna policy. Har du frågor kring behandlingen av dina personuppgifter
        är du välkommen att kontakta oss på adressen: Reel Estate AB,
        Malmskillnadsgatan 36, 111 57 Stockholm eller e-post: support@reelestate.se.
      </p>

      <h2 className={h2}>3 HUR DINA PERSONUPPGIFTER BEHANDLAS</h2>

      <h3 className={h3}>3.1 Våra kunder</h3>
      <p className={label}>Vilka personer behandlar vi personuppgifter om?</p>
      <p className={p}>Fysiska personer hos våra kunder (bostadsrättsföreningar och företag).</p>
      <p className={label}>Vilka personuppgifter behandlar vi?</p>
      <p className={p}>
        Uppgifter om din arbetsgivare, ditt för- och efternamn, yrkesroll,
        avtalsinformation, telefonnummer, e-postadress, din vistelseort och information i
        kommunikation mellan Reel Estate och dig.
      </p>
      <p className={label}>Hur dina uppgifter samlas in</p>
      <p className={p}>
        Från dig själv i samband med beställningar och under avtalsförhållandet, eller
        från det företag som du representerar.
      </p>
      <p className={label}>Varför och enligt vilken rättslig grund behandlar vi dina personuppgifter?</p>
      <p className={p}>
        I samband med köp och beställningar av Reel Estates tjänster och produkter
        behandlar vi dina personuppgifter för följande ändamål:
      </p>
      <ul className={ul}>
        <li>
          För att hantera beställningar och ingå avtal om köp med dig eller det företag du
          representerar. I detta ingår bl.a. att bekräfta din identitet och i förekommande
          fall din rätt att företräda företaget/bostadsrättsföreningen.
        </li>
        <li>
          För att erbjuda dig olika betalningsalternativ och hantera betalningar. I detta
          ingår att dela dina uppgifter med en samarbetande bank eller
          betaltjänstleverantör.
        </li>
        <li>
          För att administrera och fullgöra avtalsförhållandet. I detta ingår bl.a. att
          skicka orderbekräftelse, leverera tjänster och produkter samt kommunicera med
          dig.
        </li>
        <li>För att hantera supportärenden, reklamationer och garantiärenden.</li>
        <li>För att hantera administratörskonton (identitet, behörigheter m.m.).</li>
      </ul>
      <p className={p}>
        Den rättsliga grunden för behandlingen är Reel Estates berättigade intresse att
        kunna ingå och fullgöra avtal med sina kunder.
      </p>
      <p className={p}>
        I vissa fall kan dina personuppgifter behöva behandlas för att vi ska kunna göra
        gällande, utreda, bemöta eller försvara oss mot ett rättsligt anspråk. Den
        rättsliga grunden är då Reel Estates berättigade intresse att hantera och försvara
        rättsliga anspråk.
      </p>
      <p className={label}>Hur länge sparar vi dina personuppgifter?</p>
      <p className={p}>
        Till dess att vi har fullgjort avtalet med kunden inklusive under tiden en löpande
        licens finns. Vid behov för rättsliga anspråk eller rättsliga förpliktelser kan
        lagringstiden förlängas.
      </p>

      <h3 className={h3}>3.2 Användare av våra tjänster</h3>
      <p className={label}>Vilka personer behandlar vi personuppgifter om?</p>
      <p className={p}>
        Användare av våra tjänster som tilldelats ett användarkonto av det företag eller
        den bostadsrättsförening som ingått avtal med oss.
      </p>
      <p className={label}>Vilka personuppgifter behandlar vi?</p>
      <p className={p}>
        För- och efternamn, personnummer, adress- och kontaktuppgifter, kundnummer,
        användarnamn, avtalsinformation, kundsupport/reklamationsärenden, telefonnummer,
        e-postadress och information i kommunikation mellan Reel Estate och dig.
      </p>
      <p className={label}>Hur dina uppgifter samlats in</p>
      <p className={p}>
        Från det företag eller den bostadsrättsförening som skapat ditt användarkonto
        eller från dig själv.
      </p>
      <p className={label}>Varför och enligt vilken rättslig grund behandlar vi dina personuppgifter?</p>
      <p className={p}>I samband med leverans av Reel Estates tjänster:</p>
      <ul className={ul}>
        <li>
          Supportärenden och tjänstefunktioner (t.ex. felanmälningar; identitet, adress,
          lägenhetsnummer).
        </li>
        <li>
          Förmedla kontaktuppgifter vid felanmälningar till det företag/den förening som
          tilldelat kontot.
        </li>
        <li>Administrera bokningar (t.ex. hushållsnära tjänster).</li>
        <li>
          Fullgöra avtalet med kundorganisationen (notiser, leveranser, kommunikation).
        </li>
        <li>Kundservice, reklamationer och garantiärenden.</li>
        <li>Hantera ditt användarkonto (identitet, behörigheter m.m.).</li>
      </ul>
      <p className={p}>
        Rättslig grund: Reel Estates berättigade intresse att kunna fullgöra avtal med
        sina kunder. Vid rättsliga anspråk: berättigat intresse.
      </p>
      <p className={label}>Hur länge sparar vi dina personuppgifter?</p>
      <p className={p}>
        Tills kontot avslutas eller så länge det finns en giltig licens. Huvudregel:
        radering när prenumerationen avslutas av dig, kundorganisationen eller Reel Estate.
        Förlängd lagring kan ske vid rättsliga behov.
      </p>

      <h3 className={h3}>3.3 Marknadsföring och kunduppföljning</h3>
      <p className={label}>Vilka personer?</p>
      <p className={p}>
        Fysiska personer hos befintliga, tidigare och potentiella kunder samt
        prenumeranter på nyhetsbrev och informationsutskick.
      </p>
      <p className={label}>Vilka uppgifter?</p>
      <p className={p}>
        Arbetsgivare, namn, yrkesroll, avtalsinfo, telefon, e-post, vistelseort samt
        kommunikation.
      </p>
      <p className={label}>Insamling</p>
      <p className={p}>Från dig eller företaget du representerar.</p>
      <p className={label}>Ändamål och rättslig grund</p>
      <ul className={ul}>
        <li>
          Marknadsföring/erbjudanden/info via sms, mail och brev – berättigat intresse.
        </li>
        <li>
          Analys och uppföljning av försäljning/marknadsföring (inkl. enkäter) –
          berättigat intresse.
        </li>
        <li>Nyhetsbrev – avtal (prenumeration).</li>
      </ul>
      <p className={label}>Lagring</p>
      <p className={p}>
        Nyhetsbrev: tills du avanmäler. Marknadsföring till kundkontakter: max 2 år efter
        avslutad kundrelation. Kunduppföljning: 1 gång efter köp och anonymiseras. Du kan
        alltid invända mot direktmarknadsföring; då raderar Reel Estate dina uppgifter för
        det ändamålet utan dröjsmål.
      </p>

      <h3 className={h3}>
        3.4 Hantera förfrågningar och fullgöra skyldigheter enligt lag
      </h3>
      <p className={label}>Vilka personer?</p>
      <p className={p}>
        Företagskunder, leverantörer, myndigheter, andra intressenter; personer som
        kontaktar Reel Estate (t.ex. via mail).
      </p>
      <p className={label}>Vilka uppgifter?</p>
      <p className={p}>
        Namn, personnummer, kontaktuppgifter, kundnummer, ärendedata och kommunikation.
        För företags-/myndighetsrepresentanter: arbetsgivare, yrkesroll, vistelseort,
        kommunikation.
      </p>
      <p className={label}>Insamling</p>
      <p className={p}>Från dig eller din organisation/myndighet.</p>
      <p className={label}>Ändamål och rättslig grund</p>
      <ul className={ul}>
        <li>Besvara förfrågningar – berättigat intresse.</li>
        <li>
          Fullgöra lag (t.ex. säkerhet, bokföring, dataskyddsrättigheter,
          felkommunikation) – rättslig förpliktelse eller berättigat intresse att visa
          regelefterlevnad.
        </li>
      </ul>
      <p className={label}>Lagring</p>
      <p className={p}>
        Bokföring: 8 år. Övrigt enligt lagkrav. Förfrågningar: normalt 6 månader efter
        besvarat ärende. Förlängning vid rättsliga behov.
      </p>

      <h3 className={h3}>3.5 Webbplatsen och sociala kanaler</h3>
      <p className={label}>Vilka personer?</p>
      <p className={p}>
        Besökare av vår webbplats och sociala kanaler; personer som kontaktar oss där.
      </p>
      <p className={label}>Vilka uppgifter?</p>
      <p className={p}>
        Via cookies: tekniska uppgifter/onlineidentifierare (IP, enhets-/cookie-/annons-ID),
        användning av webbplatsen (klick, tidigare klick, trafikkälla, språk, val,
        geografi via IP). I sociala kanaler: uppgifter du lämnar (namn, e-post, bild,
        klipp, användarnamn, kommentarer/inlägg).
      </p>
      <p className={label}>Insamling</p>
      <p className={p}>Direkt från dig eller via cookies (med ditt samtycke).</p>
      <p className={label}>Ändamål och rättslig grund</p>
      <ul className={ul}>
        <li>
          Marknadsföring/kommunikation (annons/erbjudanden baserat på beteende) – kräver
          samtycke till marknadsförings-cookies.
        </li>
        <li>
          Bättre användarupplevelse – samtycke till cookies; därefter berättigat intresse.
        </li>
        <li>
          Analys/utveckling/förbättring (statistik, felavhjälpning) – samtycke; därefter
          berättigat intresse.
        </li>
        <li>
          Inlägg och förfrågningar i sociala kanaler – berättigat intresse. Offentlig
          aktivitet kan ses och delas av andra. Reel Estate kan radera inlägg som strider
          mot lag/rättigheter/policy.
        </li>
      </ul>

      <h2 className={h2}>4 MOTTAGARE OCH LAGRING AV PERSONUPPGIFTER</h2>
      <p className={p}>
        Reel Estate skyddar och lagrar dina personuppgifter säkert med lämpliga tekniska
        och organisatoriska åtgärder.
      </p>
      <p className={p}>Uppgifter kan delas med:</p>
      <ul className={ul}>
        <li>
          IT-tjänsteleverantörer (t.ex. drift, lagring, dokument, e-post/kommunikation,
          andra system).
        </li>
        <li>Sociala kanaler och deras användare (se 3.5). Vissa ägs av amerikanska bolag.</li>
        <li>
          Analys- och marknadsföringspartners (t.ex. Google Analytics; se Googles
          integritetspolicy och dataskyddslänkar ovan).
        </li>
        <li>Tillhandahållare av boendenära tjänster via appen.</li>
        <li>I vissa fall: försäkringsbolag, revisorer, jurister, myndigheter, inkassobolag.</li>
      </ul>
      <p className={p}>
        Vi delar bara uppgifter med parter vi litar på och, där det behövs, med
        biträdes-/dataöverföringsavtal. Vid överföring utanför EU/EES (t.ex. USA) använder
        vi nödvändiga skydd (t.ex. EU:s standardavtalsklausuler).
      </p>

      <h2 className={h2}>5 VAD HAR DU SOM REGISTRERAD FÖR RÄTTIGHETER?</h2>
      <p className={p}>
        Du utövar dina rättigheter genom att kontakta Reel Estate (se avsnitt 2). Vi
        bedömer varje begäran; vissa rättigheter är inte absoluta. Vi svarar utan onödigt
        dröjsmål och senast inom en månad.
      </p>
      <ul className={ul}>
        <li>Rätt till information – hur vi behandlar dina uppgifter.</li>
        <li>
          Rätt till tillgång – bekräftelse och kopia av uppgifter (med hänsyn till andras
          rättigheter).
        </li>
        <li>Rätt till rättelse – felaktiga/inkompletta uppgifter.</li>
        <li>Rätt till radering – när villkoren är uppfyllda.</li>
        <li>Rätt till begränsning – t.ex. under utredning eller i stället för radering.</li>
        <li>
          Rätt att invända – mot behandling baserad på berättigat intresse; alltid mot
          direktmarknadsföring.
        </li>
        <li>
          Rätt till dataportabilitet – för uppgifter du lämnat med samtycke/avtal, om
          tekniskt möjligt.
        </li>
        <li>
          Rätt att återkalla samtycke – när som helst (påverkar inte tidigare laglig
          behandling).
        </li>
        <li>
          Klagomål – till Integritetsskyddsmyndigheten, Box 8114, 104 20 Stockholm.
        </li>
      </ul>
      <p className={p}>
        Reel Estate företar ingen personuppgiftsbehandling som medför automatiskt
        beslutsfattande, inbegripet profilering.
      </p>

      <h2 className={h2}>6 ÄNDRING AV POLICYN</h2>
      <p className={p}>
        Reel Estate förbehåller sig rätten att ändra och uppdatera denna policy. Vid
        materiella ändringar, eller om befintlig information ska behandlas på annat sätt
        än vad som anges, informerar vi på lämpligt sätt.
      </p>

      <div className="mt-12 border-t border-border pt-8">
        <p className={`${p} text-ink`}>
          Reel Estate är mer än bara en app — det är nyckeln till en enklare, effektivare
          och mer integrerad framtid.
        </p>
        <p className={p}>
          Vi förenklar vardagen, skapar en bättre hyresupplevelse och en mer effektiv
          fastighet genom att koppla samman hyresgäster och tjänster med byggnaden.
        </p>
        <p className={`${p} mt-6`}>
          Se även våra{' '}
          <Link to="/anvandarvillkor" className="font-medium text-brand hover:text-brand-hover">
            användarvillkor
          </Link>
          .
        </p>
      </div>
    </article>
  )
}
