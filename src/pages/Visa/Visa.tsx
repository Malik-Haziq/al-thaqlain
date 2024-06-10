import { Header } from "../../components/header";
import visa from "../../assets/visa/visa.webp";
import visaapl from "../../assets/visa/visa-apl.webp";

export function Visa() {
  return (
    <>
      <Header heading="Visa Services" img="headerBg" />
      <section className="flex flex-col justify-center">
        <Visa_Outlet />
        <div className="flex flex-wrap gap-6">
          <Visa_Card
            heading="Normal Visa"
            para="Normal Visa allows the holder to enter Iraq once during the three months from the date of issue and residence in Iraq for a period not exceeding three months, he must visit the Directorate of residence to put in the knowledge of the arrival ten days after his arrival and enter Iraqi territory."
          />
          <Visa_Card
            heading="Political Visa"
            para="The political Visa is issued to officials in other countries who are visiting Iraq on an official mission as well as workers in the Diplomatic, international, regional, and Arab Missions in the Republic of Iraq with their families, according to an official memo, and granted under it a special residency."
          />
          <Visa_Card
            heading="Service Visa"
            para="Service Visa issued to people who hold Service passports on the basis of an official memorandum by the Ministry of Foreign Affairs of the country in which the Mission accredited,"
          />
          <Visa_Card
            heading="Transit Visa"
            para="A transit visa allows the holder to enter Iraq once during the three months from the date of issue and a residence for a period of not more than seven days.
            "
          />
          <Visa_Card
            heading="Non stop Visa"
            para="This Visa allows the holder to transit through Iraqi territory under the supervision of the competent authorities without stopping and one time within three months from the date of the issue."
          />
          <Visa_Card
            heading="Urgent Visa"
            para="This Visa issued by a residency officer at the border crossing points to a foreigner who arrives intending to enter Iraq, and he doesn’t have a visa from our Missions abroad if the officer is convinced of the reasons that have prevented him to get a Visa."
          />
        </div>
      </section>
      <Visa_Info />
    </>
  );
}

function Visa_Outlet() {
  return (
    <>
      <div className="mb-24">
        <p className="text-white-100 text-center">
          We at ALTHAQLAIN TRAVEL & TOUR providing Visa Services to our
          customers, which includes, all kind of visa like Visit or Tourism
          Visa, Normal Visit Visa, Political Visa, Service Visa, Transit Visa,
          Non-stop Transit Visa, Urgent Visa, Multi- Visa.{" "}
        </p>
      </div>
      <section>
        <div className="flex gap-16 items-center flex-wrap">
          <div>
            <h2 className="text-5xl mb-12 text-secondary-400">
              Visit or Tourism Visa
            </h2>
            <p className="mb-4">
              A tourist visa allows the holder to enter Iraq once during the
              three months <br></br> from the date of issue and stay in it for a
              period of one month, for the purpose<br></br> of visiting tourist
              and relic sites.
            </p>
            <p className="mb-4">
              The visit Visa allows the holder to enter Iraq once during one
              month from the <br></br> date of issue and the residence for a
              one-month whether for the purposes of <br></br> religious events
              or visiting holy sites.
            </p>
            <p className="mb-4">
              Also, Visas are issued to public and political figures,
              businessmen and investors, <br></br> and the people who the
              Ambassadors and charge d’affaires find interested in their{" "}
              <br></br> visit to Iraq, according to their judgment for a period
              of 30 days.
            </p>
            <p className="mb-4">
              In the case of tourists, groups offer applications precede through
              tourism companies <br></br> in the work area of the Mission in
              coordination with one of the officially licensed <br></br> tourism
              companies in Iraq.
            </p>
          </div>
          <div>
            <img src={visa} className="h-80" alt="visa" />
          </div>
        </div>
      </section>
    </>
  );
}

function Visa_Card(_props: { heading: string; para: string }) {
  return (
    <>
      <div className="border p-8 text-center w-96">
        <h3 className="text-4xl mb-8 text-secondary-400">{_props.heading}</h3>
        <p className="text-base ">{_props.para}</p>
      </div>
    </>
  );
}

function Visa_Info() {
  return (
    <>
      <section>
        <div className="mb-16">
          <h2 className="text-secondary-400 text-4xl mb-8">Multi Visa</h2>
          <p className="leading-normal mb-8">
            This Visa is granted for a period of three months, six months, or
            one year after obtaining the legal conditions. <br></br> (Foreigners
            Residence law No. 118 for the year 1987, and it’s amended (Article
            IV) and (Letter of the Directorate <br></br> of Residence/ the
            section of foreign No. 37344 on 22 Dec. 2009)
          </p>
        </div>
        <div className="mb-28">
          <h2 className="text-secondary-400 text-4xl mb-8">
            Visa fee for Zairean Groups
          </h2>
          <p className="leading-normal">
            The above mentioned fee is for one person and reduces on increase in
            the number of person in a group
          </p>
        </div>
        <div className="flex gap-10 items-center flex-wrap mb-28">
          <div>
            <h2 className="text-4xl mb-12 text-secondary-400">
              Requirements of the Visa request
            </h2>
            <p className="mb-4 text-white-100">
              The following conditions must be available in the Visa request:{" "}
            </p>
            <p className="mb-2">
              1 – The passport has validity for a period of a minimum of six
              months.
            </p>
            <p className="mb-2">
              2 – Fill in a Visa application form with two photographs.
            </p>
            <p className="mb-2">
              3 – Ability to cover the cost of living during the period of his
              stay in Iraq for holders <br></br> of ordinary passports.
            </p>
            <p className="mb-4">
              4 – There is no objection to preventing him from entering the
              territory of the Republic <br></br> of Iraq regarding public
              health, security, morals, or the national economy
            </p>
            <p className="mb-2">
              5 – Provide a convincing reason for the visit depending on the
              Visa type.
            </p>
            <p className="mb-2">
              6 – The requester not accused or convicted of a crime outside Iraq
              may be extradited for.
            </p>
            <p className="mb-2">
              7 – There is no order of deporting him from the Republic of Iraq
              and to achieve this must <br></br> check the records for the
              barred from entering Iraq in accordance with the attached form .
            </p>
            <p className="mb-2">
              8 – Full address in the place, which he will stay in the Republic
              of Iraq.
            </p>
          </div>
          <div>
            <img src={visaapl} className="h-80 mt-5" alt="visa application" />
          </div>
        </div>
        <div>
          <h2 className="text-4xl mb-12 text-secondary-400">INSTRUCTIONS</h2>
          <p className="mb-4">
            1. When the presence of banned to enter the territory of the
            Republic of Iraq for the cause of public health, national security,
            morals, or the national economy, can approach the Iraqi authorities
            to find out their opinion on the subject.
          </p>
          <p className="mb-4">
            2. Urgent Visa granted according to the authorities of the residence
            officer who works at the border Center if he is convinced of the
            reasons that have prevented the Visa obtaining.
          </p>
          <p className="mb-4">
            3. The expired Visa not extendable, but they can be to obtain a new
            approval with new fees, but in exceptional cases, like, closing
            border, the center of Passports and Residence at the border, will
            explain the situation on the Visa and allows them to enter without
            an extension or requesting a new approval, but this should not
            exceed more than seven days from the reopen the border.
          </p>
          <p className="mb-8">
            4. Based on the letter of the Directorate of Residency, foreigners
            section number A. C / Visa / 1822 / 2011/29559 on 6 July 2011
            containing ((to not grant visas or residency permits for foreign
            workers unless they obtain work permits from the Ministry of Labor
            and Social Affairs)) with the exception of the following categories:
            –
          </p>
          <p className="mb-4">
            A – Employed by International Organizations, Diplomatic Missions and
            Consulates accredited in Iraq.
          </p>
          <p className="mb-4">
            B – Foreigners who the international laws, conventions, and treaties
            allow working, which the Government is a party in them.
          </p>
          <p className="mb-4">
            C – Foreigners who work for the Iraqi government, but are required
            to provide the Directorate residence with a letter that supports the
            contract
          </p>
          <p className="mb-4">
            between the Foreign Ministries, and government departments by
            filling out a Visa application in the Arabic language in order to
            take.
          </p>
          <p className="mb-20">
            D – Foreign workers in the reconstruction of holy shrines in Iraq.
          </p>
          <div className="text-center inline-block">
            <a
              href="#"
              className="text-2xl bg-secondary-400 p-4 font-semibold hover:bg-slate-50 hover:text-secondary-400 "
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
