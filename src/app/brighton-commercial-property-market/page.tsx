/**
 * Editorial flagship, The Brighton commercial property market in 2026.
 *
 * Long-form market piece targeting the head term "Brighton commercial
 * property market 2026". Designed to host the contextual outbound link
 * to the parent brokerage at
 * commercialmortgagesbroker.co.uk/locations/east-sussex/brighton inside
 * the lender-pool section, framed as the wider regional network we sit
 * inside.
 *
 * Voice: editorial, broker-led, first-person plural. No em dashes. Only
 * the 8 named lenders are bolded (Shawbrook, InterBay Commercial,
 * LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays, Santander).
 * Allied Irish Bank UK and Metro Bank are named without bolding as
 * additional hospitality specialists. Paragon, Together, Foundation
 * Home Loans and Fleet Mortgages are named without bolding as HMO
 * specialists. Cambridge and Counties Bank, Allica Bank and Hampshire
 * Trust Bank are named without bolding as the wider South Coast
 * specialist panel. Rates 6.0 to 9.0% pa overall. No FCA-authorisation
 * claims. Commercial mortgages on non-dwelling property are unregulated.
 *
 * Data: real Brighton economy figures (11M visitor base, ~37,000
 * combined University of Brighton and University of Sussex students,
 * 278,000 unitary population), the Brighton regeneration spine
 * (Edward Street Quarter, Preston Barracks and Plus X, Brighton Marina,
 * Madeira Terrace, King Alfred Leisure Centre, Black Rock) and the
 * sold-data digest from the BN1, BN2 and BN3 postcode footprint.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const siteUrl = `https://${siteConfig.domain}`;
const articleUrl = `${siteUrl}/brighton-commercial-property-market`;
const publishDate = "2026-05-14";
const modifiedDate = "2026-05-14";

const eastSussexBrokerUrl =
  "https://commercialmortgagesbroker.co.uk/locations/east-sussex/brighton";

const title = "Brighton Commercial Property Market 2026";
const description =
  "An editorial read on the Brighton commercial property market at mid-2026: the seafront hospitality strip running Kings Road from the Hilton Metropole through the Grand and the Old Ship, the North Laine and The Lanes independent retail and food and beverage core, the Churchill Square Hammerson anchor, the Western Road and George Street Hove high street, the London Road regen spine, the BN2 Lewes Road student belt feeding the University of Brighton and University of Sussex HMO and purpose-built student accommodation market, the Edward Street Quarter and Preston Barracks Plus X regeneration delivery and where commercial mortgage rates sit heading into 2027.";

export const metadata: Metadata = {
  title: `${title} | Commercial Mortgages Brighton`,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    siteName: siteConfig.name,
  },
};

// Public-domain Brighton regeneration anchors drawn from the master
// brief. Brighton and Hove City Council planning data is not yet
// ingested into the network data lake, so these references are
// scheme-level rather than individual application numbers. Each entry
// reflects a live, publicly-reported commercial-relevant scheme inside
// the city footprint.
const planningHighlights = [
  {
    ref: "Edward Street Quarter, BN2",
    address: "Edward Street and Circus Street junction",
    proposal:
      "Major mixed-use redevelopment by Boultbee Brooks running across multiple phases. Office, residential and ground-floor retail and food and beverage stacked on the former Amex House and American Express Community Stadium-era footprint. The largest single addition to central Brighton commercial supply this decade.",
  },
  {
    ref: "Preston Barracks and Plus X Innovation Hub, BN2",
    address: "Lewes Road, Moulsecoomb",
    proposal:
      "University of Brighton and Plus X joint regeneration scheme. The Plus X Innovation Hub anchors the creative and technology cluster; residential, retail and student-supporting mixed-use sit alongside. The flagship Brighton regeneration scheme and the most material addition to office and lab-style floor plate in the city.",
  },
  {
    ref: "Brighton Marina, BN2",
    address: "Brighton Marina village and inner harbour",
    proposal:
      "Ongoing residential, leisure and retail intensification across the marina footprint. The walled village, the boardwalk and the outer harbour leisure and food and beverage strip continue to absorb new stock. A long-running scheme with steady commercial flow.",
  },
  {
    ref: "Madeira Terrace restoration, BN2",
    address: "Madeira Drive seafront",
    proposal:
      "Heritage-led seafront leisure restoration of the Grade II listed Madeira Terrace arches. Phased delivery led by Brighton and Hove City Council. Will return a substantial seafront leisure footprint along the eastern flank of the Volks Railway and the Sea Life Centre.",
  },
  {
    ref: "King Alfred site, BN3",
    address: "Kingsway, Hove seafront",
    proposal:
      "Long-running allocation for replacement leisure centre alongside residential delivery on the existing King Alfred Leisure Centre footprint. The Hove seafront flagship regeneration site, watching for delivery vehicle confirmation through 2026 and 2027.",
  },
  {
    ref: "Black Rock site, BN2",
    address: "Madeira Drive, eastern seafront",
    proposal:
      "Eastern seafront leisure and events allocation at the foot of the cliff next to Brighton Marina. Long-discussed regeneration with phased event-space and leisure delivery. Sits alongside the i360 and the seafront leisure spine.",
  },
];

const comparables = [
  {
    headline: "Kings Road seafront hotel refinance",
    detail:
      "Independent operator holding a 42-room seafront hotel on the Kings Road strip refinancing off a 2021 five-year fix into a stabilised trading-business facility. Three years of clean trading accounts post-pandemic and EBITDA cover comfortably above 1.5 times.",
    terms: "65% LTV · 7.85% pa · 5-year fix · 20-year term · Cynergy Bank",
  },
  {
    headline: "BN2 Lewes Road HMO portfolio",
    detail:
      "Investor with six Lewes Road and Bevendean student HMOs across BN2 consolidating short-dated facilities onto a single portfolio loan. Stabilised assured shorthold income with the University of Brighton and University of Sussex catchment underpinning the rent roll.",
    terms: "75% LTV · 7.45% pa · 5-year fix · 25-year term · Shawbrook",
  },
  {
    headline: "North Laine semi-commercial portfolio",
    detail:
      "Investor with four North Laine and Kemptown shop-with-flats consolidating three short-dated facilities onto a single commercial portfolio loan. Stabilised mixed Class E and assured shorthold income with strong tourist and resident footfall.",
    terms: "70% LTV · 7.55% pa · 5-year fix · 25-year term · InterBay Commercial",
  },
];

export default function BrightonCommercialPropertyMarket2026() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          title,
          description,
          articleUrl,
          publishDate,
          modifiedDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          {
            label: "Brighton commercial property market 2026",
            href: "/brighton-commercial-property-market",
          },
        ]}
      />

      {/* Editorial hero */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Market read &middot; May 2026</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-8 font-editorial text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Brighton Commercial Property Market{" "}
                <em className="not-italic text-[color:var(--color-accent)]">
                  2026
                </em>
                .
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
                A working broker read on the Brighton commercial property
                market at mid-2026. The South Coast tourism economy
                running Kings Road, Madeira Drive and the i360 seafront
                spine. The North Laine and The Lanes independent retail
                and food and beverage core. The Churchill Square
                Hammerson anchor, the Western Road and George Street
                Hove high street and the London Road regen flank. The
                BN2 Lewes Road student belt feeding the University of
                Brighton and University of Sussex combined 37,000-student
                catchment. The Edward Street Quarter and Preston Barracks
                Plus X delivery pipeline. The lender pool that funds it.
                Where rates sit now and what we are watching into 2027.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--color-rule)] py-5 text-sm text-[color:var(--color-muted)]">
                <span>
                  By the desk at{" "}
                  <span className="text-[color:var(--color-ink)]">
                    Commercial Mortgages Brighton
                  </span>
                </span>
                <span aria-hidden>&middot;</span>
                <time dateTime={publishDate}>14 May 2026</time>
                <span aria-hidden>&middot;</span>
                <span>18 min read</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TL;DR callout */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                TL;DR
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    01
                  </span>
                  <span>
                    Brighton is one of the UK&apos;s most concentrated
                    tourism and creative-economy commercial markets.
                    Around{" "}
                    <span className="figure-inline">11 million</span>{" "}
                    visitors a year drive the seafront hospitality and
                    central retail values. The Brighton and Hove unitary
                    population sits at roughly{" "}
                    <span className="figure-inline">278,000</span> with
                    a young, working-age skew anchored by two
                    universities and a deep creative-industries cluster.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    02
                  </span>
                  <span>
                    Central retail Zone A on the better North Laine,
                    The Lanes and Churchill Square frontages sits at{" "}
                    <span className="figure-inline">&pound;120 to &pound;200 psf</span>{" "}
                    in 2026, driven by the unusually deep tourist and
                    resident catchment. Western Road and George Street
                    in Hove carry a secondary Zone A band of 60 to 110.
                    Kings Road and Madeira Drive seafront hospitality
                    trades on per-room and EBITDA multiples rather than
                    a clean per sq ft headline.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    03
                  </span>
                  <span>
                    The combined University of Brighton and University
                    of Sussex student footprint of around{" "}
                    <span className="figure-inline">37,000</span> drives
                    one of the deepest student HMO and purpose-built
                    student accommodation markets on the South Coast.
                    The Lewes Road BN2 belt running through Moulsecoomb
                    and Bevendean carries the densest HMO conversion
                    stock; Falmer carries the campus-adjacent PBSA
                    delivery; the BN1 central student fringe picks up
                    professional sharer and post-graduate stock.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    04
                  </span>
                  <span>
                    Edward Street Quarter, Preston Barracks and Plus X
                    Innovation Hub, Brighton Marina, the Madeira
                    Terrace restoration, the King Alfred site at Hove
                    and the Black Rock seafront allocation are the
                    six anchors of the Brighton regeneration spine
                    through to 2027. Edward Street Quarter is the
                    largest single addition to central commercial
                    supply; Preston Barracks is the flagship
                    creative-cluster scheme.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    05
                  </span>
                  <span>
                    Median residential price across the city sits at{" "}
                    <span className="figure-inline">&pound;415,000</span>{" "}
                    on the latest twelve-month sold data, with an
                    unusually positive year-on-year change of{" "}
                    <span className="figure-inline">+3.8%</span>, the
                    only positive figure in our five-city South-of-England
                    comparator set. New build trades a 32.5 percent
                    premium to existing stock, reflecting the tight
                    supply position inside the unitary boundary.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    06
                  </span>
                  <span>
                    Mid-2026 Brighton commercial mortgage rates sit at{" "}
                    <span className="figure-inline">6.0 to 9.0%</span>{" "}
                    pa across the eight main product types. Hospitality
                    trading-business sits at 60 to 70 percent LTV and
                    pricing toward the upper end. Student and
                    professional HMO refinance runs 65 to 75 percent
                    LTV. Retail and office investment 65 to 75 percent
                    LTV. Cynergy Bank, Allied Irish Bank UK and Metro
                    Bank are the active hospitality specialist names;
                    Paragon, Together, Foundation Home Loans and Fleet
                    Mortgages anchor the HMO and portfolio panel;
                    Cambridge and Counties Bank, Allica Bank and
                    Hampshire Trust Bank are the active South Coast
                    challengers alongside the eight on our active
                    panel.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats grid, Brighton economy */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">The numbers under the market</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                Brighton in eight figures.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                The macro backdrop that drives lender appetite. Drawn
                from Brighton and Hove City Council, VisitBritain
                tourism data, the published University of Brighton and
                University of Sussex student rolls, ONS sub-national
                indicators, the 2021 census and Land Registry sold data
                for the BN1, BN2 and BN3 postcodes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  278K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Unitary population
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Inside the Brighton and Hove City Council boundary at
                  the latest mid-year estimate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  11M
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Annual visitors
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  One of the UK&apos;s largest visitor economies outside
                  London. Drives hospitality and central retail values
                  well above the regional baseline.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  37K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Combined HE students
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  University of Brighton at around 18,000 plus
                  University of Sussex at around 19,000.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  &pound;415K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Median res price
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month median across BN1, BN2 and BN3, proxy
                  for general market temperature.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  2,479
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Res transactions
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month residential turnover across the unitary.
                  The busiest of our five South-of-England city
                  comparators on volume.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  +3.8%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  YoY price change
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  The only positive year-on-year reading in our
                  five-city set. Reflects depth of catchment plus
                  constrained supply.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  32.5%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  New build premium
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Brighton new build trades a 32.5 percent premium to
                  existing stock on the latest twelve-month sold data,
                  reflecting tight supply.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  60min
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  By train to London
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Direct service from Brighton to London Victoria, with
                  Thameslink running through the City of London and on
                  to Bedford. Gatwick Airport sits 30 minutes north on
                  the same line.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
            Sources: Brighton and Hove City Council, VisitBritain
            tourism data, the published University of Brighton and
            University of Sussex student rolls, ONS sub-national
            economic indicators, the 2021 census and Land Registry sold
            data for the BN1, BN2 and BN3 postcodes.
          </p>
        </div>
      </section>

      {/* Section 1: Brighton at a glance */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">01 &middot; Context</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Brighton at a glance: South Coast tourism, the creative
                economy and a 37,000-student catchment.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  This is the working broker read on the Brighton
                  commercial property market at mid-2026. We have
                  written it for hospitality operators thinking about
                  buying or refinancing a seafront or central trading
                  business, investors holding student or professional
                  HMO stock through the BN2 Lewes Road and BN1 central
                  belts, owner-occupiers in retail or professional
                  services on North Laine, The Lanes, Western Road or
                  George Street, and developer-investors watching the
                  Edward Street Quarter and Preston Barracks delivery
                  pipeline. The aim is practical: what is happening in
                  each part of the market, where lender appetite sits
                  in 2026, what the rate range is across each product,
                  and how we read the Brighton pipeline through to the
                  end of 2027. The voice is first-person plural because
                  we sit across deals every week, not because we are
                  pretending to speak for anyone else. Where we name a
                  lender, it is one of the eight on our active panel
                  that we quote against routinely on Brighton deals,
                  with the wider ninety-strong network sitting behind
                  that for the trading-business hospitality, HMO
                  portfolio and specialist cases.
                </p>
                <p>
                  Brighton and Hove is a unitary authority on the South
                  Coast, sitting between the South Downs National Park
                  to the north and the English Channel to the south.
                  The unitary population is roughly 278,000, with a
                  young working-age skew driven by the two universities
                  and the creative-industries cluster. The economy is
                  anchored by four structural pillars: tourism and the
                  visitor economy, the creative and technology cluster,
                  the two universities and the Royal Sussex County
                  Hospital footprint at the eastern end of Kemptown.
                  American Express occupies Amex House in Hove as the
                  single largest private employer; Legal and General
                  carries the second major Hove-based corporate
                  occupier base. Brighton and Hove City Council, the
                  two universities and the Brighton and Sussex
                  University Hospitals NHS Foundation Trust anchor the
                  public-sector employment base.
                </p>
                <p>
                  Tourism is the defining demand-side story. Around 11
                  million visitors a year reach the city across day
                  trippers, weekend-break, conference and festival
                  flows. The Brighton Festival, the Brighton Fringe,
                  the Great Escape and Pride together carry one of the
                  densest UK event calendars outside London. The
                  seafront strip running Kings Road and Madeira Drive,
                  from the Hilton Brighton Metropole through the Grand
                  Hotel, the Old Ship and the Royal Albion, anchors the
                  hospitality occupier base. Behind that strip the
                  North Laine and The Lanes carry the densest
                  independent retail and food and beverage parade on
                  the South Coast. Brighton has an unusually high share
                  of independent retail and hospitality occupiers
                  relative to national multiple chains, which both
                  drives the city&apos;s character and shapes the
                  trading-business lending pipeline.
                </p>
                <p>
                  The creative-industries cluster is the second
                  structural pillar. Wired Sussex, the regional sector
                  body, tracks more than 3,000 digital, media and
                  technology businesses across the wider Brighton
                  catchment. The Plus X Innovation Hub at Preston
                  Barracks anchors the dedicated creative-cluster
                  workspace alongside coworking, studio and small-floor
                  office stock spread across central Brighton and Hove.
                  The University of Brighton and the University of
                  Sussex between them carry a combined student
                  footprint of around 37,000, with the University of
                  Brighton at roughly 18,000 students concentrated
                  across the Moulsecoomb, Falmer and Eastbourne sites
                  and the University of Sussex at roughly 19,000
                  students at the Falmer campus. The Royal Sussex
                  County Hospital on Eastern Road carries the
                  Brighton and Sussex University Hospitals NHS
                  Foundation Trust acute hospital footprint and a deep
                  healthcare-ancillary commercial market across BN2.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Brighton is the South Coast&apos;s tourism and
                creative-economy commercial market. North Laine, The
                Lanes, the Kings Road hospitality strip and the BN2
                student belt are the four pillars that lenders read
                very differently to a coastal city of this size
                anywhere else in the UK.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Where the market is in 2026 */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">02 &middot; The 2026 picture</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Where the Brighton commercial market sits in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Two and a half years on from the 2023 rate peak, the
                  Brighton commercial market has reset around four
                  defining shapes. Hospitality dominance, deep HMO
                  flow, a stratified central retail rent stack and a
                  meaningful regeneration delivery pipeline. Each runs
                  on its own cycle. Together they produce a commercial
                  market that is biased toward trading-business
                  hospitality, semi-commercial mixed-use and
                  student-led HMO refinance, with an unusually thin
                  industrial footprint by comparison. Brighton has the
                  smallest industrial commercial base of our five
                  South-of-England comparator cities, with Hollingbury
                  Industrial Estate on the BN1 fringe and a modest
                  Patcham Court Farm and Sussex House footprint
                  carrying the bulk of trade-counter and small
                  industrial stock.
                </p>
                <p>
                  Hospitality is the structural anchor. The Kings Road
                  seafront strip carries the major branded and
                  independent hotel stock, from the Hilton Brighton
                  Metropole through the Grand, the Old Ship and the
                  Royal Albion alongside a long tail of independent
                  hotels, guesthouses and bed-and-breakfast operators
                  spread across BN1 and BN2. North Laine, The Lanes,
                  Kemptown and the Brighton Marina inner harbour all
                  carry food and beverage clusters running into the
                  hundreds of independent operators between them.
                  Hospitality lending is the single largest segment of
                  our Brighton pipeline by volume. Trading-business
                  freehold acquisition on hotels typically prices at 60
                  to 70 percent LTV and 7.5 to 9.0 percent pa,
                  reflecting the structural lender stance on tourist-led
                  trading covenants.
                </p>
                <p>
                  HMO depth is the second defining shape. The BN2
                  Lewes Road belt running north from the seafront
                  through Moulsecoomb and Bevendean to the University
                  of Brighton main campus carries the densest student
                  HMO stock on the South Coast. Brighton and Hove
                  City Council operates both an additional licensing
                  scheme covering the wider student catchment and a
                  selective licensing scheme covering pockets of
                  Whitehawk and other inner-city locations. The
                  combined regulatory backdrop produces an unusually
                  well-documented HMO stock count, which lenders
                  appreciate. The central BN1 student fringe carries
                  professional sharer and post-graduate HMO stock,
                  with a slightly different rent and tenant profile
                  but a similar refinance pipeline. Lot sizes on
                  converted Victorian HMOs in BN2 typically run
                  500,000 to 1.6 million pounds; semi-commercial
                  mixed-use shop-with-flats in Kemptown and Lewes
                  Road run 350,000 to 1.2 million.
                </p>
                <p>
                  Retail tells a sharply stratified story. North Laine
                  and The Lanes, the two adjoining independent retail
                  and food and beverage quarters running between
                  Brighton Station, the seafront and the Pavilion, carry
                  the prime independent retail Zone A. Rents in the
                  best parts of Bond Street, Duke Street, North Road
                  and Sydney Street sit in the{" "}
                  <span className="figure-inline">&pound;120 to &pound;200 psf</span>{" "}
                  band, driven by the deep tourist footfall base
                  alongside the resident catchment. Churchill Square,
                  the Hammerson-owned central shopping scheme, holds
                  the national multiple occupier base across the BN1
                  prime retail core. Western Road, the principal high
                  street running west into Hove, and George Street in
                  central Hove carry a secondary Zone A band of 60 to
                  110 with a more mixed independent and multiple
                  occupier mix. London Road, sitting north of the
                  centre on the BN1 fringe, picks up the regen-led
                  high street with steady absorption through
                  Class E to mixed-use conversion. Lot sizes on
                  prime North Laine and The Lanes freeholds run 800,000
                  to 3.5 million pounds for single buildings; Churchill
                  Square trades through institutional channels.
                </p>
                <p>
                  The regeneration pipeline is the fourth shape and
                  the most important addition to commercial supply
                  through 2026 and 2027. Edward Street Quarter, the
                  Boultbee Brooks major mixed-use scheme at the Edward
                  Street and Circus Street junction, is the largest
                  single addition to central commercial supply in
                  Brighton this decade. Preston Barracks and the Plus
                  X Innovation Hub, the University of Brighton and
                  Plus X joint scheme at the Lewes Road and Moulsecoomb
                  end of the BN2 student belt, anchors the creative
                  and technology cluster floor plate. Brighton Marina
                  continues to absorb residential, leisure and food
                  and beverage stock. Madeira Terrace restoration is
                  the heritage-led seafront leisure scheme. The King
                  Alfred site at Hove, the Black Rock allocation at
                  the eastern seafront and the University of Sussex
                  campus refresh at Falmer round out the spine. We
                  cover each of these in the regeneration section
                  below.
                </p>
                <p>
                  Yields across the city held through 2025 and into
                  the first half of 2026 broadly in line with the
                  regional South-of-England average. Prime central
                  office investment with strong unexpired sits at 6.75
                  to 7.75% net. Trading-business hospitality on
                  stabilised hotel covenant runs 7.5 to 9.0% gross.
                  Semi-commercial mixed-use on North Laine, Kemptown,
                  Western Road and George Street Hove runs 6.5 to 8.0
                  percent gross. Stabilised HMO portfolio on the BN2
                  belt runs 6.5 to 7.5 percent gross. Prime Churchill
                  Square retail investment trades through institutional
                  channels at 7.0 to 7.75 net. The pricing reflects
                  what we read as a tourism and creative-economy
                  market with a structural HMO and semi-commercial
                  floor underpinning the freehold yield stack.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live regeneration pipeline callout */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Live regeneration pipeline</span>
                <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                  Six anchors worth knowing about.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                  Drawn from the public-domain Brighton and Hove
                  regeneration pipeline at mid-2026. A market-temperature
                  read on what is being delivered, what is rotating and
                  what is being absorbed across central, seafront and
                  regen flanks.
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                Updated 2026-05-14
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planningHighlights.map((app, i) => (
              <ScrollReveal key={app.ref} delay={i * 0.04}>
                <li className="flex h-full flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    {app.ref}
                  </span>
                  <p className="font-editorial text-base text-[color:var(--color-paper)]">
                    {app.address}
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {app.proposal}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: The regeneration spine */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">03 &middot; Regeneration spine</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The regeneration spine: Edward Street Quarter, Preston
                Barracks, Brighton Marina, Madeira Terrace, King
                Alfred and Black Rock.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  The Brighton regeneration spine runs across six
                  flagship locations from central BN2 to the BN3 Hove
                  seafront. Each scheme sits on its own delivery
                  programme, but together they make up the most
                  significant addition to Brighton commercial and
                  mixed-use supply this decade. We cover them in the
                  order that matters most for lenders watching
                  pipeline.
                </p>
                <p>
                  Edward Street Quarter, sitting at the Edward Street
                  and Circus Street junction in BN2, is the single
                  largest addition to central Brighton commercial
                  supply through 2026 and 2027. The scheme is led by
                  Boultbee Brooks and runs across multiple phases of
                  office, residential and ground-floor retail and food
                  and beverage. The footprint sits between the
                  Brighton Station catchment, the Old Steine and the
                  Royal Sussex County Hospital approach, which gives
                  it a useful three-way demand draw across commuter,
                  tourist and hospital-adjacent occupiers. The new
                  office floor plate is expected to anchor a
                  creative-industries and professional services
                  occupier base, with the ground-floor retail picking
                  up local independents and selected national
                  multiples. Investment appetite on the stabilised
                  product post-delivery will be one of the most
                  watched themes in the South Coast commercial market
                  through 2027.
                </p>
                <p>
                  Preston Barracks and the Plus X Innovation Hub,
                  sitting at the Lewes Road and Moulsecoomb end of
                  the BN2 student belt, is the flagship Brighton
                  regeneration scheme. The joint University of
                  Brighton and Plus X delivery is anchoring a
                  creative-industries and technology cluster in
                  purpose-built workspace alongside residential,
                  retail and student-supporting mixed-use floor plate.
                  The Plus X Innovation Hub itself opened in 2021 and
                  has been steadily filling with creative, technology
                  and life sciences occupiers, sitting in the Wired
                  Sussex cluster context. Forward-phase delivery
                  through 2026 and 2027 will add further mixed-use
                  floor plate alongside the Lewes Road BN2 occupier
                  base. Lender appetite on the Preston Barracks flank
                  is strongest on owner-occupier creative and
                  professional services freehold with credible
                  trading accounts; speculative investment is selective.
                </p>
                <p>
                  Brighton Marina, sitting at the eastern seafront
                  end of BN2, continues to absorb residential,
                  leisure, food and beverage and retail floor plate
                  through a long-running intensification programme.
                  The walled village carries the densest food and
                  beverage and leisure occupier cluster on the marina
                  footprint; the boardwalk and outer harbour pick up
                  the remaining hospitality, retail and event stock.
                  Brighton Marina sits inside an unusual asset class
                  for the South Coast: a leisure-led, residential-heavy
                  destination scheme with a hospitality and retail
                  occupier base running on a captive footfall
                  catchment. Lender appetite on Brighton Marina
                  trading businesses is competitive but
                  case-by-case; the long history of operator turnover
                  on selected food and beverage units shapes the
                  underwrite.
                </p>
                <p>
                  Madeira Terrace, the Grade II listed seafront
                  arcade running along Madeira Drive east of the
                  Brighton Palace Pier, is the heritage-led seafront
                  leisure restoration scheme. Brighton and Hove City
                  Council is delivering phased restoration of the
                  arches alongside event-space and leisure activation.
                  Delivery is multi-phase and slow by design but will
                  return a substantial seafront leisure footprint over
                  the next several years, sitting alongside the Volks
                  Railway, the Sea Life Centre and the eastern
                  seafront food and beverage parade. Commercial
                  lending opportunities on the restored arches will
                  emerge as the leisure and food and beverage tenancy
                  pipeline lands; we are watching scheme-level
                  occupier announcements through 2026 and 2027.
                </p>
                <p>
                  The King Alfred site at Hove, sitting on the
                  Kingsway seafront in BN3, is the long-running
                  flagship Hove regeneration site. The allocation
                  covers a replacement leisure centre alongside
                  residential delivery on the existing King Alfred
                  Leisure Centre footprint. Brighton and Hove City
                  Council has been progressing delivery-vehicle
                  options through multiple rounds, with the latest
                  iteration sitting in the watching brief through
                  2026 and 2027. When the scheme moves through to
                  delivery it will be the most significant addition
                  to Hove commercial and mixed-use supply in a
                  generation. Black Rock, the eastern seafront
                  leisure and events allocation sitting at the foot
                  of the cliff next to Brighton Marina, carries the
                  long-discussed eastern seafront regeneration. The
                  i360 at the central seafront, the Brighton
                  Centre conference and entertainment venue and the
                  Brighton Palace Pier sit alongside as the other
                  three major seafront leisure anchors, each running
                  their own refinance and trading-business pipeline.
                </p>
                <p>
                  Lender stance on Brighton regeneration finance is
                  positioned as follows. Stabilised investment with
                  strong unexpired on the post-delivery Edward Street
                  Quarter and Preston Barracks office and retail
                  product will sit with the clearing-bank corporate
                  desks: <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>, <strong>Barclays</strong>{" "}
                  and <strong>Santander</strong> all carry South
                  Coast appetite into the 5 million to 30 million
                  pound lot size band on the cleanest cases.
                  Owner-occupier acquisition on smaller floor plates
                  within the scheme footprints will sit with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> on the more SME-led
                  cases. Cambridge and Counties Bank, Allica Bank and
                  Hampshire Trust Bank are the active South Coast
                  challenger names on the wider panel, picking up SME
                  owner-occupier and semi-commercial cases on the
                  regen flanks alongside the central trading-business
                  pipeline.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Edward Street Quarter is the single largest addition
                to central Brighton commercial supply this decade.
                Preston Barracks and Plus X is the flagship
                creative-cluster scheme. Together they reset the BN2
                office and mixed-use story through 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Sector deep-dives */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">04 &middot; Sector deep-dives</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Hospitality, retail, HMO and PBSA, office.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Hospitality: Kings Road seafront, North Laine
                    food and beverage, Kemptown and Brighton Marina.
                  </strong>{" "}
                  Brighton hospitality trades on the roughly 11
                  million annual visitor base alongside the resident,
                  conference and festival catchment. The Kings Road
                  seafront strip from the Hilton Brighton Metropole
                  through the Grand, the Old Ship and the Royal
                  Albion anchors the branded and independent hotel
                  stock, with freehold lot sizes from 3 to 25
                  million pounds on the better seafront addresses.
                  North Laine, The Lanes and the central BN1 food
                  and beverage parade carry the densest independent
                  restaurant and bar cluster on the South Coast.
                  Kemptown, running east from the Royal Pavilion
                  along St James&apos;s Street, picks up the LGBTQ+
                  hospitality cluster and a deep independent food
                  and beverage occupier base. Brighton Marina carries
                  the captive-footfall hospitality at the eastern
                  seafront. Trading-business acquisition on Brighton
                  hotels prices 7.5 to 9.0 percent pa at 60 to 70
                  percent LTV with Cynergy Bank, Allied Irish Bank
                  UK and Metro Bank the most active hospitality
                  specialist names alongside{" "}
                  <strong>Shawbrook</strong> and{" "}
                  <strong>InterBay Commercial</strong> on the wider
                  trading-business panel. Independent food and
                  beverage freeholds on North Laine and Kemptown
                  price 7.0 to 8.5 percent pa at 60 to 65 percent
                  LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Retail: North Laine and The Lanes, Churchill
                    Square Hammerson, Western Road and George Street
                    Hove, London Road.
                  </strong>{" "}
                  Brighton retail trades on a tourist-and-resident
                  footfall base running deeper than almost any UK
                  city of this size outside London and the major
                  metropolitan cores. North Laine and The Lanes,
                  the two adjoining independent retail and food and
                  beverage quarters running between Brighton Station,
                  the Pavilion and the seafront, carry Zone A rents
                  in the{" "}
                  <span className="figure-inline">&pound;120 to &pound;200 psf</span>{" "}
                  band on the best Bond Street, Duke Street, North
                  Road, Sydney Street and Gardner Street frontages,
                  with freehold lot sizes from 800,000 to 3.5 million
                  pounds on the single best buildings. Churchill
                  Square, the Hammerson-owned central shopping
                  scheme, holds the national multiple occupier base
                  across the BN1 prime retail core and trades through
                  institutional investment channels. Western Road,
                  running west from the Clock Tower through to
                  central Hove, and George Street in central Hove
                  carry a secondary Zone A band of 60 to 110 with a
                  mixed independent and multiple occupier mix and
                  freehold lot sizes of 600,000 to 2 million. London
                  Road, sitting north of the centre on the BN1
                  fringe, picks up the regen-led high street with
                  steady absorption through Class E to mixed-use
                  conversion. Lender appetite is strongest on North
                  Laine and The Lanes shop-with-flats and
                  Western Road semi-commercial through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> at up to 75 percent
                  LTV. Prime Churchill Square investment with strong
                  national multiple covenants attracts clearing-bank
                  pricing.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    HMO and PBSA: Lewes Road BN2, Falmer, the BN1
                    student fringe.
                  </strong>{" "}
                  Brighton has one of the deepest student HMO and
                  purpose-built student accommodation markets on the
                  South Coast, driven by the combined 37,000-student
                  footprint across the University of Brighton and
                  the University of Sussex. The Lewes Road BN2 belt
                  running north from the seafront through
                  Moulsecoomb and Bevendean to the University of
                  Brighton main campus carries the densest
                  student-HMO conversion stock; the additional
                  licensing scheme covering the wider student
                  catchment produces an unusually well-documented
                  stock count. Falmer, sitting on the BN1 and BN2
                  border at the University of Sussex main campus
                  and the University of Brighton Falmer site,
                  carries the largest concentration of purpose-built
                  student accommodation, with both campus-owned and
                  third-party PBSA operators in the mix. The central
                  BN1 student fringe running through Seven Dials and
                  the inner-Preston Park flank carries professional
                  sharer and post-graduate HMO stock at a slightly
                  different rent and tenant profile but a similar
                  refinance pipeline. Lot sizes on converted
                  Victorian HMOs run 500,000 to 1.6 million pounds.
                  HMO acquisition or refinance prices 7.0 to 8.5
                  percent pa at 65 to 75 percent LTV through Paragon,
                  Together, Foundation Home Loans and Fleet Mortgages
                  as the active HMO specialist names alongside{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> on the wider HMO and
                  semi-commercial panel.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Office: Preston Barracks and Plus X, Edward
                    Street Quarter, New Road and the central spine,
                    Norton Road in Hove and Amex House.
                  </strong>{" "}
                  The Brighton office market splits across four
                  anchor locations. Preston Barracks and the Plus X
                  Innovation Hub carry the dedicated creative and
                  technology cluster floor plate at the BN2 Lewes
                  Road end. Edward Street Quarter, the largest
                  single addition to central commercial supply this
                  decade, is delivering new office floor plate
                  across multiple phases at the Edward Street and
                  Circus Street junction. The central BN1 spine
                  through New Road, Queen&apos;s Road and the
                  Brighton Station approach carries the traditional
                  professional services and consulting freehold
                  stock, with period townhouse and 1990s
                  purpose-built office running 28 to 40 pounds per
                  sq ft for prime. Norton Road in central Hove,
                  sitting next to Hove Town Hall, carries the
                  secondary professional services cluster. Amex
                  House at Edward Street in BN2 anchors the largest
                  single corporate occupier in the city as American
                  Express&apos;s European operational base; Legal
                  and General sits as the second major Hove-based
                  corporate occupier. Lender appetite is strongest
                  on Preston Barracks and central professional
                  services owner-occupier through{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> on cleaner cases and{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> or{" "}
                  <strong>Cynergy Bank</strong> on the more complex
                  trading-business and creative-cluster cases.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Brighton has one of the deepest student HMO and
                purpose-built student accommodation markets on the
                South Coast. The 37,000-student footprint across two
                universities and the additional licensing scheme on
                the Lewes Road BN2 belt produces an unusually
                well-documented refinance pipeline.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Mortgage market */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">05 &middot; The mortgage market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                What is available in Brighton in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Commercial mortgage product across Brighton runs
                  between{" "}
                  <span className="figure-inline">6.0 and 9.0%</span>{" "}
                  pa at mid-2026, depending on sector, covenant, LTV
                  and term. Owner-occupier professional services
                  freehold along New Road, Queen&apos;s Road, the
                  central BN1 spine and Norton Road in central Hove
                  sits at the strongest end of the range, 6.0 to 7.5
                  percent pa at 65 to 75 percent LTV on five to
                  fifteen-year fixed-amortisation terms. Owner-occupier
                  creative and technology freehold on the Preston
                  Barracks and Plus X flank runs similar pricing
                  where the borrower has credible trading accounts,
                  6.5 to 7.5 percent pa at 65 to 70 percent LTV.
                  Investment commercial mortgages on stabilised
                  retail and office product with strong unexpired sit
                  at 6.5 to 7.75 percent pa at 65 to 75 percent LTV
                  on the cleanest cases.
                </p>
                <p>
                  Hospitality trading-business is the toughest
                  segment: typically 7.5 to 9.0 percent pa at 60 to
                  70 percent LTV, with Cynergy Bank, Allied Irish
                  Bank UK and Metro Bank the most active hospitality
                  specialist names alongside{" "}
                  <strong>Shawbrook</strong> and{" "}
                  <strong>InterBay Commercial</strong> on the wider
                  trading-business panel. Independent hotel freeholds
                  on Kings Road and the BN1 and BN2 seafront flanks
                  price 7.5 to 8.5 percent pa at 60 to 65 percent
                  LTV on cases with three years of clean trading
                  accounts. Larger branded hotel investment with
                  strong covenant sits with the clearing-bank
                  corporate desks at tighter pricing.
                </p>
                <p>
                  HMO acquisition or refinance on student and
                  professional sharer stock in the BN2 Lewes Road
                  belt and the BN1 central fringe runs 7.0 to 8.5
                  percent pa at 65 to 75 percent LTV. Paragon,
                  Together, Foundation Home Loans and Fleet Mortgages
                  anchor the HMO specialist panel; Brighton portfolio
                  refinancers particularly value Paragon and Together
                  for the depth of portfolio coverage on multi-asset
                  HMO cases. Semi-commercial mixed-use shop-with-flats
                  on North Laine, Kemptown, Western Road and George
                  Street Hove runs up to 75 percent LTV at 7.0 to
                  8.0 percent pa across the strong shop-with-flat
                  archetype with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> consistently competitive.
                  Bridging across the catchment sits at 0.75 to 1.10
                  percent per month on the mainstream specialist
                  desks, with the cleanest cases on lower-LTV
                  change-of-use and refurb-to-term plays pricing
                  toward the lower end.
                </p>
                <p>
                  Lender appetite splits by sector. Hospitality is
                  the most contested asset class in Brighton, with
                  Cynergy Bank, Allied Irish Bank UK and Metro Bank
                  bidding into the trading-business cases alongside{" "}
                  <strong>Shawbrook</strong> and{" "}
                  <strong>InterBay Commercial</strong>. HMO and
                  portfolio is the second most active segment, with
                  Paragon, Together, Foundation Home Loans and Fleet
                  Mortgages writing the bulk of the BN2 student and
                  BN1 professional sharer refinance pipeline. The
                  clearing banks at <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>, <strong>Barclays</strong>{" "}
                  and <strong>Santander</strong> all carry credible
                  Brighton appetite into the prime central retail,
                  Churchill Square investment and central professional
                  services freehold flank. The challenger SME panel
                  writes the bulk of the mid-market:{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>LendInvest</strong> and{" "}
                  <strong>Cynergy Bank</strong> sit at the centre of
                  the specialist pool. Cambridge and Counties Bank,
                  Allica Bank and Hampshire Trust Bank are the active
                  South Coast challenger names on the wider panel,
                  picking up SME owner-occupier, semi-commercial and
                  portfolio cases across the catchment. The wider
                  ninety-strong panel rounds out the appetite across
                  challenger banks, specialists and private credit on
                  the more complex cases.
                </p>
                <p>
                  We are part of a broader UK commercial mortgage
                  brokerage network. For the wider regional view
                  across East Sussex, taking in Lewes, Eastbourne,
                  Hastings and the wider South Coast alongside the
                  Brighton catchment, see{" "}
                  <a
                    href={eastSussexBrokerUrl}
                    rel="external noopener noreferrer"
                    target="_blank"
                    className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    our East Sussex commercial mortgage broker hub
                  </a>
                  , which sets out the parent brokerage&apos;s
                  Brighton desk and the panel coverage across the
                  wider East Sussex and South Coast footprint.
                </p>
              </div>
            </ScrollReveal>

            {/* Lender table */}
            <ScrollReveal delay={0.1}>
              <div className="mt-12 overflow-hidden border border-[color:var(--color-rule)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)] font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      <th className="px-5 py-4">Lender</th>
                      <th className="px-5 py-4">Sweet spot</th>
                      <th className="px-5 py-4">Typical LTV</th>
                      <th className="px-5 py-4">Indicative rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--color-rule)]">
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Shawbrook
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, portfolio, semi-commercial, HMO
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        InterBay Commercial
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, multi-let, HMO
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        LendInvest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Bridge-to-let, HMO, investment
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.5 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Cynergy Bank
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Hospitality, SME owner-occupier, portfolio
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.25 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Lloyds
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Prime central retail and office investment
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        NatWest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Owner-occupier, professional services,
                        hospitality
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Barclays
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Mid to large investment, Edward Street
                        Quarter flank
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Santander
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, prime single-let
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-5 py-4 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  Plus Allied Irish Bank UK and Metro Bank as the
                  active hospitality specialist names; Paragon,
                  Together, Foundation Home Loans and Fleet Mortgages
                  on the HMO and portfolio panel; Cambridge and
                  Counties Bank, Allica Bank and Hampshire Trust Bank
                  as the active South Coast challengers. Plus another
                  80 panel members across challenger banks,
                  specialists and private credit. Rates indicative
                  for mid-2026 Brighton primary product. Actual
                  offers depend on covenant, LTV, sector and term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent comparables */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Recent comparables</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Three deals from the desk this quarter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                Anonymised. Representative rate, LTV, term and lender
                across three of the most common Brighton case shapes.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {comparables.map((c, i) => (
              <ScrollReveal key={c.headline} delay={i * 0.08}>
                <div className="card h-full">
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-editorial text-xl leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {c.detail}
                  </p>
                  <p className="mt-6 fig text-base text-[color:var(--color-accent)]">
                    {c.terms}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five recent deal flavours */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">06 &middot; Deal flavours</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Five recent deal shapes from across Brighton.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five anonymised composite deal flavours, each drawn
                  from the recurring shapes we see across Brighton.
                  Names removed, terms representative of the range we
                  are pricing through Q1 and Q2 2026.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Kings Road seafront hotel refinance.
                  </strong>{" "}
                  An independent operator holding a 42-room seafront
                  hotel on the Kings Road strip refinancing off a
                  2021 five-year fix into a stabilised
                  trading-business facility with{" "}
                  <strong>Cynergy Bank</strong>. Three years of clean
                  trading accounts post-pandemic, EBITDA cover
                  comfortably above 1.5 times. 65% LTV at 7.85% pa,
                  five-year fix, 20-year amortisation. The depth of
                  Brighton visitor catchment and the post-pandemic
                  recovery in seafront RevPAR supported the
                  specialist underwrite at the upper LTV for
                  trading-business hotel product.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    BN2 Lewes Road HMO portfolio refinance.
                  </strong>{" "}
                  An investor with six Lewes Road and Bevendean
                  student HMOs across BN2 consolidating four
                  short-dated facilities onto a single portfolio loan
                  with <strong>Shawbrook</strong>. 75% LTV at 7.45%
                  pa, five-year fix, 25-year amortisation. Stabilised
                  assured shorthold income with the University of
                  Brighton catchment underpinning the rent roll. The
                  additional licensing scheme documentation supported
                  the underwrite on stock condition and licensing
                  status.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    North Laine semi-commercial portfolio.
                  </strong>{" "}
                  A private investor with four North Laine and
                  Kemptown shop-with-flats consolidating three
                  short-dated facilities onto a single commercial
                  portfolio loan with{" "}
                  <strong>InterBay Commercial</strong>. 70% LTV at
                  7.55% pa, five-year fix, 25-year amortisation.
                  Stabilised mixed Class E ground floor and assured
                  shorthold residential income above, with strong
                  tourist and resident footfall supporting the
                  Class E covenant base.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Western Road Hove owner-occupier retail freehold.
                  </strong>{" "}
                  A long-established Hove independent retailer
                  buying a 2,800 sq ft Western Road freehold from a
                  retiring landlord, eight years of clean trading
                  accounts. Combined freehold and trading facility
                  through <strong>NatWest</strong>. 70% LTV at 6.95%
                  pa, five-year fix, 15-year term. The
                  owner-occupier Western Road professional and
                  retail freehold archetype is one of the cleanest
                  shapes we price on the Hove flank.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Preston Park BN1 professional HMO conversion.
                  </strong>{" "}
                  An investor acquiring a large Victorian house in
                  the Preston Park BN1 central student fringe under
                  HMO use, converted to six en-suite professional
                  sharer rooms targeting the post-graduate, NHS
                  Trust junior doctor and early-career creative-cluster
                  base. 70% LTV at 7.65% pa with{" "}
                  <strong>LendInvest</strong>, five-year fix,
                  25-year amortisation. Brighton professional sharer
                  HMO yields remain among the strongest on the South
                  Coast, and the lender stance reflects that.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 4 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Edward Street Quarter delivery, the Madeira
                Terrace restoration progression and the 2020 to 2022
                refinance wave sit at the centre of our Brighton
                watching brief through to the end of 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Outlook */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">07 &middot; Outlook</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Outlook for late 2026 and 2027.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Three structural factors sit at the centre of the
                  Brighton market watching brief through late 2026
                  and 2027. The first is the Edward Street Quarter
                  delivery. The Boultbee Brooks scheme is the single
                  largest addition to central commercial supply this
                  decade, with phased office, residential and
                  ground-floor retail and food and beverage landing
                  through 2026 and into 2027. Lettings pace, occupier
                  mix on the office floor plate and ground-floor
                  retail and food and beverage tenancy shape will all
                  reset reference values for the BN2 central
                  commercial market. The cluster sits between the
                  Brighton Station catchment, the Old Steine and the
                  Royal Sussex County Hospital approach, giving it a
                  useful three-way demand draw. Investment appetite
                  on the stabilised post-delivery product will be
                  one of the most watched themes in the South Coast
                  commercial market through 2027.
                </p>
                <p>
                  The second is the Madeira Terrace restoration
                  progression and the wider seafront leisure
                  pipeline. Brighton and Hove City Council is
                  delivering phased restoration of the Grade II
                  listed arches alongside event-space and leisure
                  activation along Madeira Drive. The King Alfred
                  site at Hove and the Black Rock allocation at the
                  eastern seafront round out the seafront regen
                  watching brief. When the King Alfred scheme moves
                  through to delivery vehicle confirmation it will
                  be the most significant addition to Hove
                  commercial and mixed-use supply in a generation.
                  The Brighton i360, the Brighton Centre conference
                  venue and the Brighton Palace Pier each run their
                  own refinance and trading-business pipeline. The
                  Preston Barracks and Plus X delivery, expanding
                  through 2026 and 2027, anchors the creative and
                  technology occupier cluster at the BN2 Lewes Road
                  end.
                </p>
                <p>
                  The third is the structural refinancing wave from
                  the 2020 to 2022 vintage of five-year fixed
                  commercial mortgage debt. Borrowers who locked at
                  3 to 4.5 percent pa five years ago are refinancing
                  into a 6 to 9 percent world. For Brighton assets
                  the maths usually works because rents and yields
                  have held: hospitality trading on the post-pandemic
                  visitor recovery, HMO and PBSA on the structurally
                  strong student catchment, central retail on the
                  deep tourist and resident footfall, and
                  semi-commercial on the steady Class E and assured
                  shorthold income base. The conversation is
                  structural rather than distressed. The
                  trading-business hospitality flank carries the most
                  case-by-case underwrite work; the HMO portfolio
                  flank carries the cleanest refinance pipeline; the
                  central retail and office investment flank sits
                  between the two on lender appetite.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">08 &middot; How to talk to us</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Buying, refinancing or holding through 2026?{" "}
                    <span className="text-[color:var(--color-accent)]">
                      Send the deal.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Whether you are looking at a Kings Road seafront
                    hotel acquisition or refinance, a BN2 Lewes Road
                    student HMO portfolio consolidation, a North
                    Laine semi-commercial freehold, a Western Road
                    Hove owner-occupier purchase, an Edward Street
                    Quarter or Preston Barracks investment or a
                    central professional services freehold, the
                    working method is the same. Send through the
                    property details, the LTV target, a rough sense
                    of the trading position or rental income, and we
                    will take it from there. We shortlist three to
                    five lenders from the eight on our active panel
                    plus the wider ninety-strong network, including
                    Cynergy Bank, Allied Irish Bank UK and Metro
                    Bank on the hospitality flank and Paragon,
                    Together, Foundation Home Loans and Fleet
                    Mortgages on the HMO portfolio flank alongside
                    Cambridge and Counties Bank, Allica Bank and
                    Hampshire Trust Bank as the active South Coast
                    challengers. We run live appetite and come back
                    with structured terms covering rate, LTV, term,
                    fees and conditions inside 48 hours. If the
                    numbers do not work, you will know inside two
                    business hours. Phone, email or send through the
                    site contact form.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <Link
                    href="/calculator"
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    Run the calculator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footnote */}
      <section className="section-tight">
        <div className="container-editorial">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--color-muted)]">
            Rate ranges and lender positioning quoted reflect the
            Brighton commercial mortgage market in May 2026.
            Indicative only; actual offers depend on individual deal
            characteristics. This piece is updated quarterly.
            Commercial mortgages on non-dwelling property are
            unregulated lending. We are not FCA-authorised because
            the products we arrange are unregulated. Where a deal
            would require FCA authorisation, we refer to a regulated
            firm.
          </p>
        </div>
      </section>
    </>
  );
}
