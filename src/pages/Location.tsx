import { Link, Heading } from "../components/Elements";

export function Location() {

  return (
    <main className="m-auto flex max-w-7xl flex-col gap-4">
      <div className="justify-center gap-4 mx-auto">
        <img
          src="https://konferencnizamek.cz/wp-content/uploads/photo-gallery/imported_from_media_libray/z%C3%A1mek.jpg?bwg=1549014679"
          alt="Nové Hrady venue"
         className="min-h-40 max-w-full object-cover mx-auto"
          width="50%"
          height="50%"
       />
      </div>
      <p>
        The workshop will be held at the <Link href="https://konferencnizamek.cz/en/"
        text="Nové Hrady Castle" /> in South Bohemia in Czechia.
      </p>
    <Heading text="Getting there" />
      <p>
        The nearest airport is in Prague (PRG).
      </p>
      <p>
        Please make sure that you are travelling to the correct Nové Hrady (South Bohemia, district České Budějovice) as there are multiple places with this name in Czechia.
      </p>
      <p>
        These are the recommended services of public transport on how to get to the venue from Prague:
        You can go by train from the Prague main train station (Praha hl.n.) to České Budějovice.
        Here, you can change to a local train (direction České Velenice) and go to the Nové Hrady train station (Nové Hrady, žel.st.).
        Note that that train station is quite far from the venue itself so continue by local bus to the Nové Hrady bus station (Nové Hrady, autobusové nádraží).
        You can buy tickets for the local bus at the driver.
      </p>
      <div className="justify-center gap-4 mx-auto">
        <img
          src={`${import.meta.env.BASE_URL}/travel_idos.png`}
          className="min-h-40 max-w-full object-cover mx-auto"
          width="100%"
          height="100%"
        />
      </div>
      <p>
        In case you chose alternative services, 
        please note that the transfer between the train and bus stations in České Budějovice 
        takes some time as the buses depart from the roof of the Mercury shopping centre located close to the train station.
      </p>
      <p>Another option could be to use the Vienna airport, however, the travel from there to the venue is a bit longer.</p>
      <p>
        If you had any question or problem with travelling to the venue, please do not hesitate to contact the organisers.
        We are happy to help! We understand that travelling to the venue can be complicated, however, there are many reasons why we chose this particular venue.
      </p>
      <p> 
      </p>
    <Heading text="General notes about travelling in Czechia" />
      <p>
        Public transport in Czechia is quite reliable and reasonably priced.
        For timetables (and also some bookings) of public transport in Czechia, you can use the IDOS website and application:<br />
    <Link href="https://idos.cz/en/vlakyautobusymhdvse/spojeni/" text="IDOS website" /><br />
    <Link href="https://play.google.com/store/apps/details?id=cz.mafra.jizdnirady&hl=en_GB" text="Google Play Store" /><br />
    <Link href="https://apps.apple.com/us/app/j%C3%ADzdn%C3%AD-%C5%99%C3%A1dy-idos/id473503749" text="Apple App Store" />
      </p>
      <p>
        For booking train tickets in Czechia, you can use the Czech Railways website or their application "Můj vlak":<br />
    <Link href="https://www.cd.cz/en/" text="Czech Railways website" /><br />
    <Link href="https://play.google.com/store/apps/details?id=cz.cd.mujvlak.an&hl=en_GB" text="Google Play Store" /><br />
    <Link href="https://apps.apple.com/us/app/m%C5%AFj-vlak/id1082233301" text="Apple App Store" />
      </p>
      <p>
        For booking of public transport tickets in Prague (buses, trams, metro), you can use the PID Lítačka application.
        Do not forget to activate a ticket at least 1 minute before your travel.<br />
        <Link href="https://app.pidlitacka.cz/" text="PID Lítačka application" />
      </p>
      <p>
        It can be useful to have the Mapy.com application for navigation and maps in Czechia:<br />
        <Link href="https://mapy.com" text="Mapy.com website" /><br />
        <Link href="" text="Google Play Store" /><br />
        <Link href="https://apps.apple.com/us/app/mapy-com/id369494785" text="Apple App Store" />
      </p>
    </main>
  );
}
