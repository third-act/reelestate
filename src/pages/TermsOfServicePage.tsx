import { Link } from 'react-router-dom'

const p = 'mb-4 text-[0.9375rem] leading-relaxed text-muted'
const h2 = 'mt-12 scroll-mt-24 text-xl font-bold text-ink first:mt-0'
const h3 = 'mt-6 text-base font-semibold text-ink'
const ul = 'mb-4 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-muted'

export function TermsOfServicePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <p className="mb-8 text-sm">
        <Link to="/" className="font-medium text-brand hover:text-brand-hover">
          ← Tillbaka till startsidan
        </Link>
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Användarvillkor
      </h1>
      <p className={`${p} mt-2 text-sm`}>Senast uppdaterad enligt version på webbplatsen.</p>

      <h2 className={h2}>1. INLEDNING</h2>
      <h3 className={h3}>1.1</h3>
      <p className={p}>
        Dessa villkor och riktlinjer (”Användarvillkor”) reglerar användningen av den
        mobilapplikation (”Appen”) som tillhandahålls av Reel Estate AB,
        organisationsnummer 559529-2771, registrerad företagsadress
        Malmskillnadsgatan 36, 111 57 Stockholm (”Reel Estate” eller ”vi”).
        Användarvillkoren tillämpas mellan Reel Estate och den fysiska person som
        tilldelas ett användarkonto i Appen (”Användare”, ”Du” eller ”Dig”).
      </p>
      <h3 className={h3}>1.2</h3>
      <p className={p}>
        Innan Appen kan användas måste dessa Användarvillkor godkännas genom att trycka
        ”jag accepterar” i samband med Användarens första inloggning i Appen. Vi
        rekommenderar noggrann genomläsning av Användarvillkoren.
      </p>

      <h2 className={h2}>2. KONTAKTUPPGIFTER</h2>
      <h3 className={h3}>2.1</h3>
      <p className={p}>
        För frågor angående Tjänsten kan Reel Estate kontaktas på följande sätt:
      </p>
      <ul className={ul}>
        <li>a) via e-post på support@reelestate.se</li>
        <li>c) via post till Reel Estate AB, Malmskillnadsgatan 36, 111 57 Stockholm.</li>
      </ul>

      <h2 className={h2}>3. APPENS SYFTE</h2>
      <h3 className={h3}>3.1</h3>
      <p className={p}>
        Reel Estate tillhandahåller digitala tjänster för smarta fastigheter (proptech)
        för att förenkla och effektivisera hanteringen av fastigheter samt öka
        kundnöjdheten hos fastighetsägarens kunder. Reel Estate erbjuder anpassade
        mobila applikationer samt en IoT- och integrationsplattform för olika
        målgrupper i fastigheten.
      </p>
      <h3 className={h3}>3.2</h3>
      <p className={p}>
        Appens syfte är att underlätta för Användare genom att erbjuda digitala
        lösningar för bland annat felanmälningar, kontakt med bostadsrättsföreningens
        styrelse och grannar samt bokning av boendenära tjänster.
      </p>
      <h3 className={h3}>3.3</h3>
      <p className={p}>
        Användning av Appen förutsätter att Du har en fungerande smartphone och
        internetuppkoppling.
      </p>
      <h3 className={h3}>3.4</h3>
      <p className={p}>
        Appen får endast användas i enlighet med dessa Användarvillkor, och inga
        ytterligare rättigheter till Appen eller till Appens innehåll överförs eller
        tillerkänns förutom vad som beskrivs i dessa Användarvillkor.
      </p>

      <h2 className={h2}>4. IMMATERIELLA RÄTTIGHETER</h2>
      <h3 className={h3}>4.1</h3>
      <p className={p}>
        Med immateriella rättigheter avses immateriell egendom och rättigheter av varje
        slag, oavsett om de kan registreras eller ej, inklusive men inte begränsat till
        patent, varumärken, design, upphovsrätt, förlagsrättigheter, rättigheter i
        mjukvara, källkod och objektkod, databasrättigheter, logotyper, domännamn,
        företagsnamn, företagshemligheter, know-how, teorier, metoder, processer,
        algoritmer, webbadresser samt varje utveckling, ändring eller förbättring av
        ovanstående (”Immateriella rättigheter”).
      </p>
      <h3 className={h3}>4.2</h3>
      <p className={p}>
        Samtliga nuvarande och framtida Immateriella rättigheter som används eller
        uppkommer i samband med Appen ägs uteslutande av Reel Estate, Reel Estates
        affärspartner eller övriga från vilka Reel Estate härleder sin rätt.
      </p>

      <h2 className={h2}>5. APPENS INNEHÅLL</h2>
      <h3 className={h3}>5.1</h3>
      <p className={p}>
        All information som Användare laddar upp i Appen tillhör den enskilde
        Användaren.
      </p>
      <h3 className={h3}>5.2</h3>
      <p className={p}>
        Allt övrigt innehåll, förutom vad som nämnts i punkten 5.1 ovan, som Användare
        ges tillgång till eller har fått förevisat eller demonstrerat via Appen ägs
        uteslutande av Reel Estate, inklusive men inte begränsat till all teknisk
        information, mappningsverktyg och rapporter.
      </p>
      <h3 className={h3}>5.3</h3>
      <p className={p}>
        Användaren ges en icke-exklusiv och icke-överlåtbar rätt att använda tjänsten
        under förutsättning att vid var tid gällande licensavgift har erlagts till Reel
        Estate.
      </p>

      <h2 className={h2}>6. ANVÄNDARGENERERAT INNEHÅLL</h2>
      <h3 className={h3}>6.1</h3>
      <p className={p}>
        Med användargenererat innehåll avses allt sådant innehåll som Användare skapar
        och/eller lägger upp i Appen som t.ex. bilder, texter och information
        (”Användargenererat innehåll”).
      </p>
      <h3 className={h3}>6.2</h3>
      <p className={p}>
        När Du publicerar Användargenererat innehåll blir det tillgängligt för andra
        användare, såsom nuvarande och tillkommande medlemmar i Din
        bostadsrättsförening. Detsamma gäller när Du postar inlägg i en chatt med flera
        användare. Ditt Användargenererade innehåll blir då tillgängligt för medlemmarna
        i chatten, inklusive tillkommande medlemmar. Meddelanden som skickas endast till
        en person blir bara tillgängliga för den mottagaren.
      </p>
      <h3 className={h3}>6.3</h3>
      <p className={p}>
        Du garanterar att du innehar nödvändiga rättigheter till det Användargenererade
        innehållet, antingen genom att Du själv skapat innehållet (vare sig det är
        exempelvis en bild, en text eller information), eller att Du på annat sätt fått
        tillstånd att använda det Användargenererade innehållet i Appen i enlighet med
        Användarvillkoren.
      </p>
      <h3 className={h3}>6.4</h3>
      <p className={p}>
        Du garanterar att Användargenererat innehåll inte innehåller upphovsrättsligt
        skyddat material som du inte har fått tillåtelse från upphovsmannen att använda
        i Appen.
      </p>
      <h3 className={h3}>6.5</h3>
      <p className={p}>
        Du garanterar att du sett till att de personer som kan identifieras i det
        Användargenererade innehållet är medvetna om hur materialet kommer att användas
        och att de uttryckligen har godkänt att förekomma i det Användargenererade
        innehållet och också godkänt användandet av den information som kan finnas om
        dem, inklusive personuppgifter.
      </p>
      <h3 className={h3}>6.6</h3>
      <p className={p}>
        Genom att lägga upp Användargenererat innehåll, ger Du Reel Estate en
        icke-exklusiv, oinskränkt rätt att fritt förfoga över det Användargenererade
        innehållet, genom att till exempel bearbeta, formatanpassa, lagra eller kopiera
        det samt att vidareupplåta dessa rättigheter till tredje man.
      </p>
      <h3 className={h3}>6.7</h3>
      <p className={p}>
        Du efterger härmed alla krav på ersättning från Reel Estate för Reel Estates
        användning av det Användargenererade innehållet.
      </p>
      <h3 className={h3}>6.8</h3>
      <p className={p}>
        Användargenererat innehåll får ej innehålla material som är olagligt, obscent
        eller stötande. Appen får i övrigt inte användas i strid med det syfte för
        vilket Appen tillhandahålls, vilket innebär att Användargenererat innehåll inte
        får innehålla pornografiskt, diskriminerande, rasistiskt, integritetskränkande,
        förnedrande, hotfullt eller våldsamt material eller material som utgör olaga hot,
        hets mot folkgrupp, förtal eller som i övrigt är olagligt eller uppmuntrar till
        olagliga aktiviteter. Användargenererat innehåll får inte heller i övrigt
        innehålla känsliga personuppgifter, uppgifter om lagöverträdelser eller
        personuppgifter som behandlas i strid med lag eller annan författning.
      </p>
      <h3 className={h3}>6.9</h3>
      <p className={p}>
        Användargenererat innehåll får inte innehålla virus, trojaner eller annan
        skadlig kod eller annars ingripa i eller avbryta tillhandahållandet av Appen.
      </p>

      <h2 className={h2}>7. RIKTLINJER FÖR ANVÄNDANDE</h2>
      <h3 className={h3}>7.1</h3>
      <p className={p}>
        För användande av Appen måste ett användarkonto skapas av en administratör.
        Konton får endast skapas för fysiska personer som är bosatta i en
        bostadsrättsförening som är ansluten till Reel Estates tjänster.
      </p>
      <h3 className={h3}>7.2</h3>
      <p className={p}>
        Ett användarkonto skapas av en kontoadministratör (”Administratör”) utsedd av
        den bostadsrättsförening eller det bolag som är direktkund till Reel Estate och
        som betalar licensavgift för Appen för Användarnas räkning. Administratören kan
        lägga till ytterligare Användare till kontot. Administratören identifierar
        ytterligare Användare genom att tillhandahålla adress, e-postadress och
        telefonnummer för varje Användare.
      </p>
      <h3 className={h3}>7.3</h3>
      <p className={p}>
        Användare måste vara minst 18 år gammal eller ha målsmans godkännande för att
        kunna registrera ett användarkonto och använda Appen.
      </p>
      <h3 className={h3}>7.4</h3>
      <p className={p}>
        Administratören kan när som helst ändra tillämplig abonnemangsplan, och
        Administratören kan när som helst uppgradera abonnemanget och/eller lägga till
        egenskaper eller användarlicenser. Administratören kontrollerar handhavandet av
        användarkontot. Abonnemanget förnyas i enlighet med SaaS-avtal mellan Reel Estate
        och annan juridisk person (exempelvis en bostadsrättsförening eller förvaltare)
        avseende Användarens tillgång till Appen. Administratören kan när som helst
        utan angivande av orsak avsluta ett användarkonto. Ett avslut innebär att all
        information som lagts till Appen raderas.
      </p>
      <h3 className={h3}>7.5</h3>
      <p className={p}>
        Administratören ansvarar för att Användare läggs till eller avlägsnas från
        Appen.
      </p>
      <h3 className={h3}>7.6</h3>
      <p className={p}>
        Reel Estate och Administratören har möjlighet att avläsa aktivitetsloggar för
        användarkontot, inklusive användaraktivitet.
      </p>
      <h3 className={h3}>7.7</h3>
      <p className={p}>
        Administratören och Användaren är solidariskt ansvariga för att säkerställa att
        all information som registreras i Appen vid varje tidpunkt är fullständig,
        korrekt och aktuell. Användaren ansvarar för tillgången till den e-postadress som
        använts vid registrering av en Användare.
      </p>
      <h3 className={h3}>7.8</h3>
      <p className={p}>
        Användarnamn och lösenord är privata och ska inte delas med andra. Användare
        ansvarar för att tillse att användarnamn och lösenord är säkra och hålls
        hemliga.
      </p>
      <h3 className={h3}>7.9</h3>
      <p className={p}>
        Reel Estate kan utan föregående meddelande komma att göra ändringar i Appen,
        dess layout och utformning i övrigt, samt lägga till eller ta bort funktioner i
        Appen.
      </p>

      <h2 className={h2}>8. TILLÅTEN ANVÄNDNING</h2>
      <h3 className={h3}>8.1</h3>
      <p className={p}>
        Appen ska endast användas i enlighet med Användarvillkoren samt gällande lagar
        och föreskrifter.
      </p>
      <h3 className={h3}>8.2</h3>
      <p className={p}>
        Appen får ej användas på sätt som inkräktar på andras rättigheter, ger obehörigt
        tillträde till eller stör annan tjänst, anordning, data, användare eller nätverk,
        skicka skräppost eller sprida sabotageprogram som kan skada eller sänka
        kvaliteten hos Appen eller göra det svårt för andra att använda Appen.
      </p>
      <h3 className={h3}>8.3</h3>
      <p className={p}>
        Appen ska endast användas för boendeändamål och endast för Användarens egen
        räkning. Genom att använda Appen samtycker Användaren till att inte kopiera,
        reproducera, distribuera, sälja, licensiera eller på annat sätt utnyttja eller
        överföra Appen till tredje part.
      </p>
      <h3 className={h3}>8.4</h3>
      <p className={p}>
        All information avseende Reel Estates affärsmodell, strategi, priser och
        tekniska lösningar är konfidentiell och får inte ställas till tredje parts
        förfogande.
      </p>

      <h2 className={h2}>9. UPPFYLLANDE AV SAAS-AVTAL</h2>
      <h3 className={h3}>9.1</h3>
      <p className={p}>
        Användning av Appen är villkorad av ingåendet av ett SaaS-avtal mellan Reel
        Estate och annan juridisk person (exempelvis en bostadsrättsförening eller
        förvaltare) avseende Användarens tillgång till Appen (”SaaS-avtalet”).
        Användande av Appen är villkorad av att SaaS-avtal vid var tidpunkt är giltigt
        och att betalning av förfallna skulder enligt SaaS-avtalet erlagts.
      </p>

      <h2 className={h2}>10. BOKNING AV BOENDENÄRA TJÄNSTER</h2>
      <h3 className={h3}>10.1</h3>
      <p className={p}>
        Genom Appen kan förekomma att Användare kan beställa boendenära tjänster såsom
        städ eller flytthjälp. Reel Estate ansvarar inte för, och utgör inte part i,
        några sådana avtal som ingås mellan Användaren och Administratören eller tredje
        part genom Appen.
      </p>

      <h2 className={h2}>11. ÖVERTRÄDELSE AV ANVÄNDARVILLKOREN</h2>
      <h3 className={h3}>11.1</h3>
      <p className={p}>
        All obehörig användning av Appen som strider mot lag eller Användarvillkoren
        kommer att anmälas till relevant behörig myndighet.
      </p>
      <h3 className={h3}>11.2</h3>
      <p className={p}>
        Reel Estate förbehåller sig rätten att förhindra tillgång till eller användning
        av Appen och/eller avsluta användarkontot, om Administratören eller Användaren
        bryter mot Användarvillkoren.
      </p>

      <h2 className={h2}>12. FRISKRIVNINGSKLAUSUL OCH ANSVARSBEGRÄNSNING</h2>
      <h3 className={h3}>12.1</h3>
      <p className={p}>
        Tjänsten är huvudsakligen en kommunikationsplattform där Du kommunicerar med
        andra privatpersoner som bor i samma förening eller område som Dig själv eller
        med representanter för företag som hanterar ert boende som bostadsutvecklare,
        förvaltare eller styrelsen i Din bostadsrättsförening. Reel Estate har ingen
        kontroll över eller medverkar i kommunikationen mellan dessa fysiska och/eller
        juridiska personer. Du är ansvarig för innehållet i din kommunikation och Reel
        Estate förhandsgranskar inte innehållet i Appen. Reel Estate förbehåller sig
        rätten att ta bort innehåll som enligt Reel Estates uppfattning bryter mot dessa
        Användarvillkor.
      </p>
      <h3 className={h3}>12.2</h3>
      <p className={p}>
        Appen erbjuds i befintligt skick utan någon form av garanti. Såvida inte gällande
        lag utesluter detta, ska Reel Estate eller Reel Estates partner, leverantörer
        eller återförsäljare inte ansvara för indirekt skada, följdskador eller annan
        skada av vilket slag det må vara som uppstår till följd av eller på annat sätt
        sammanhänger med användande av eller oförmåga att använda Appen, även om Reel
        Estate eller annan leverantör har underrättats om möjligheten av sådan skada.
      </p>
      <h3 className={h3}>12.3</h3>
      <p className={p}>
        Genom att godkänna dessa Användarvillkor godtar ni att ni inte kan utkräva
        ansvar från Reel Estate för förseningar eller fel avseende Appen.
      </p>
      <h3 className={h3}>12.4</h3>
      <p className={p}>
        Reel Estate ansvarar inte för problem som är hänförliga till tredje parts
        applikationer.
      </p>
      <h3 className={h3}>12.5</h3>
      <p className={p}>
        Reel Estate ansvarar inte för innehållet i information och data som laddas upp av
        enskild Användare eller Administratör.
      </p>
      <h3 className={h3}>12.6</h3>
      <p className={p}>
        Som Användare accepterar och samtycker ni till att Reel Estate inte bär ansvar
        gentemot er för någon åtgärd som vidtagits av Administratören med avseende på
        användarkontot. Som Administratör accepterar och samtycker ni till att Reel
        Estate inte ansvarar för och inte kommer att bära något skadeståndsansvar
        gentemot er för någon handling som företagits av en Användare med avseende på
        användarkontot eller information från externa molntjänster.
      </p>
      <h3 className={h3}>12.7</h3>
      <p className={p}>
        Utan begränsning av ovanstående ska det sammanlagda ansvaret för Reel Estate,
        dess leverantörer och återförsäljare som uppstår ur eller hänför sig till Appen
        inte överstiga beloppet som erlagts till Reel Estate för Appen under de senaste
        tolv (12) månaderna.
      </p>
      <h3 className={h3}>12.8</h3>
      <p className={p}>
        Användare åtar sig att hålla Reel Estate skadelösa för det fall att tredje part
        framställer krav på ersättning på grund av Användargenererat innehåll eller på
        grund av att Användaren i övrigt agerat i strid med dessa Användarvillkor eller
        lag.
      </p>

      <h2 className={h2}>13. ÄNDRING AV ANVÄNDARVILLKOREN</h2>
      <h3 className={h3}>13.1</h3>
      <p className={p}>
        Reel Estate arbetar fortlöpande med att förbättra Appen och utveckla nya
        egenskaper för att förbättra våra tjänster och produkter. Reel Estate kan därför
        emellanåt behöva uppdatera Användarvillkoren för att de ska ge en korrekt bild av
        tjänsterna. Såvida inte annat lagligen krävs, kommer Reel Estate att kungöra alla
        ändringar i Användarvillkoren på vår hemsida{' '}
        <a
          href="https://reelestate.se/"
          className="font-medium text-brand underline hover:text-brand-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://reelestate.se/
        </a>
        . Uppdaterade Användarvillkor träder i kraft 14 dagar efter kungörelse på
        hemsidan.
      </p>

      <h2 className={h2}>14. PERSONUPPGIFTER</h2>
      <h3 className={h3}>14.1</h3>
      <p className={p}>
        I Reel Estates Integritetspolicy finns information om hur vi behandlar dina
        personuppgifter och skyddar din integritet när du använder Appen. Ni kan läsa
        integritetspolicyn på{' '}
        <a
          href="https://reelestate.se/integritet"
          className="font-medium text-brand underline hover:text-brand-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://reelestate.se/integritet
        </a>{' '}
        eller på denna webbplats under{' '}
        <Link to="/integritet" className="font-medium text-brand hover:text-brand-hover">
          Integritetspolicy
        </Link>
        .
      </p>

      <h2 className={h2}>15. LAG OCH TVISTELÖSNING</h2>
      <h3 className={h3}>15.1</h3>
      <p className={p}>Svensk lag ska tillämpas på dessa Användarvillkor.</p>
      <h3 className={h3}>15.2</h3>
      <p className={p}>
        Tvist hänförlig till dessa Användarvillkor ska handläggas av svensk domstol.
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
      </div>
    </article>
  )
}
