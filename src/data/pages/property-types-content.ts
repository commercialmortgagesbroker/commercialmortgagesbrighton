/**
 * Property-type / asset-class commercial mortgage pages, Brighton.
 *
 * Twelve sector pages plus a hub. Each sector covers the lender-appetite
 * realities, cover tests (ICR / DSCR / EBITDA), sector-specific underwriting
 * concerns, and Brighton-specific examples. Voice matches the home page,
 * editorial, broker-led, specifics over slogans, real lender names where
 * defensible per NAMED-LENDERS.md.
 *
 * Slugs match src/lib/constants.ts and are used as /property-types/[slug] routes.
 */

export interface AssetTypeFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface AssetTypeDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    metrics: Array<{ label: string; value: string }>;
  };
  overview: { h2: string; body: string[] };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  financeStructures: {
    h2: string;
    intro: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  brightonContext: { h2: string; body: string };
  lenderAppetite: { h2: string; body: string };
  faqs: AssetTypeFaq[];
}

export interface PropertyTypesHubContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: { h2: string; body: string[] };
  underwriting: {
    h2: string;
    body: string;
    items: Array<{ label: string; detail: string }>;
  };
  closingCta: { h2: string; body: string };
}

const standardStructures = [
  { product: "Owner-occupier commercial mortgage", applicability: "Where the borrower's business trades from the property, EBITDA cover at 1.3 to 1.5x." },
  { product: "Commercial investment mortgage", applicability: "Let assets, ICR-led underwriting at 140 to 160% stressed cover." },
  { product: "Commercial bridge-to-let", applicability: "Vacant or value-add acquisition with agreed term-out onto investment mortgage." },
  { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing assets." },
];

// Hub page content
export const propertyTypesHubContent: PropertyTypesHubContent = {
  metaTitle: "Commercial Mortgages Brighton by Property Type | 12 Sectors, 90+ Lenders",
  metaDescription:
    "Commercial mortgage finance for Brighton property, twelve sector pages covering retail, office, industrial, leisure, healthcare, pubs, MOT, nurseries, mixed-use, semi-commercial, HMO and holiday-let. Sector-specific lender appetite, real mid-2026 rates.",
  hero: {
    eyebrow: "Twelve sectors",
    h1: "Commercial Mortgages by Property Type Brighton",
    lede:
      "A Brighton commercial mortgage on a Kings Road seafront hotel prices nothing like a North Laine independent retail freehold or a Lewes Road student HMO block. The asset class drives the lender list, the LTV band, the cover test and the rate. Twelve sector pages, each with the underwriting that actually applies and the lenders that actually write the deal.",
  },
  intro: {
    h2: "The asset class is the first variable a commercial mortgage lender prices.",
    body: [
      "Borrowers often start with the geography, the LTV they want, or the rate they have read about. Lenders start with the property type. A commercial mortgage on a Churchill Square retail investment runs through a different desk to one on a wet-led Kemptown pub freehold or a Falmer student HMO, different cover test, different LTV cap, different valuation methodology, different rate.",
      "Across the broker panel, the practical division splits twelve ways. Three pure investment classes (<a href=\"/property-types/retail\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">retail</a>, <a href=\"/property-types/office\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">office</a>, <a href=\"/property-types/industrial-warehouse\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">industrial and warehouse</a>) underwritten on ICR against a tenant covenant. Five trading-business classes (<a href=\"/property-types/leisure-hospitality\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">leisure and hospitality</a>, <a href=\"/property-types/healthcare-care-home\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">healthcare and care homes</a>, <a href=\"/property-types/pub-restaurant\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">pubs and restaurants</a>, <a href=\"/property-types/mot-garage-petrol\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">MOT and forecourt</a>, <a href=\"/property-types/nursery-school\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">nurseries and schools</a>) underwritten on EBITDA cover with sector-specialist regulators (CQC, Ofsted, VOSA) feeding the credit decision. Four mixed-tenure or hybrid classes (<a href=\"/property-types/mixed-use\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">mixed-use</a>, <a href=\"/property-types/semi-commercial\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">semi-commercial</a>, <a href=\"/property-types/hmo-block\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">HMO blocks</a>, <a href=\"/property-types/holiday-let-portfolio\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">holiday-let portfolios</a>) where lender appetite varies dramatically with the residential proportion or the operating model.",
      "Brighton is hospitality-heavy, HMO-heavy and retail-heavy. The industrial commercial base is the smallest of any city we cover. Each page below sets out the LTV band, the cover test, the sector-specific underwriting concerns, the rate range in mid-2026, the lenders most active on the panel, and worked Brighton examples. Where a deal sits awkwardly between sectors, a pub with an operator flat above, a seafront hotel doubling as serviced apartments, a North Laine retail-plus-flat with the upper floors run as short-stay, we say so and explain how lenders treat it.",
    ],
  },
  underwriting: {
    h2: "Three cover tests, twelve sectors. Which test applies to you decides the lender.",
    body:
      "The single most important variable on a commercial mortgage is which cover test the lender uses to size the loan. Get this wrong at outset and the offer either prices materially down at credit committee or falls over. Three tests dominate.",
    items: [
      {
        label: "ICR, interest cover ratio",
        detail:
          "Used on let investment property, retail, office, industrial, semi-commercial, mixed-use. Tests rent against interest only at a stressed notional rate, typically 140 to 160%. The driver is the lease and the tenant covenant, not the borrower's income.",
      },
      {
        label: "DSCR, debt-service cover ratio",
        detail:
          "Used on portfolios and on assets where capital amortisation matters to the lender. Tests net rent against the full mortgage payment (interest plus capital), typically 130 to 145%. Common on portfolio refinance and on larger HMO and FHL portfolios.",
      },
      {
        label: "EBITDA cover",
        detail:
          "Used on owner-occupier and trading-business mortgages, pubs, care homes, MOT centres, nurseries, dental practices, hotels. Tests business operating profit against the mortgage payment, typically 1.3 to 1.5x for mainstream sectors and 1.5 to 2.0x for higher-risk trading sectors. Filed accounts and a credible forward-looking forecast both matter.",
      },
      {
        label: "Sector overlays",
        detail:
          "On top of the cover test, sector-specific overlays drive the credit decision: CQC rating on care homes, Ofsted on nurseries, VOSA approval on MOT centres, barrelage on pubs, lease length on retail, occupancy and ADR on hotels and FHLs.",
      },
    ],
  },
  closingCta: {
    h2: "Send the property, the LTV target and the trading or rental income.",
    body:
      "We will tell you which sector the deal sits in, which lender desks will look at it, which cover test will apply, and what indicative terms look like across the panel. Indicative numbers in 48 hours. If the deal does not work, wrong sector for the LTV, cover test fails, regulator rating insufficient, we say so up front rather than burning weeks at valuation.",
  },
};

export const assetTypeDetails: Record<string, AssetTypeDetail> = {
  // Retail
  retail: {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail Commercial Mortgages Brighton | North Laine, The Lanes, Churchill Square, Western Road",
    metaDescription:
      "Commercial mortgage finance for retail property in Brighton, North Laine independent retail, The Lanes, Churchill Square (Hammerson), Western Road, George Street Hove, London Road, Edward Street Quarter, Brighton Marina. Investment LTVs to 75%, ICR 140 to 160%, mid-2026 rates 6.5 to 8.5% pa. NatWest, Lloyds, Barclays, InterBay Commercial.",
    hero: {
      eyebrow: "Retail",
      h1: "Retail Commercial Mortgages Brighton",
      lede:
        "Investment finance for let retail property and owner-occupier finance for independent retailers buying their unit. Brighton has one of the deepest independent retail bases of any UK regional city, anchored by North Laine and The Lanes, with Churchill Square and Western Road carrying the prime national-covenant stock. Lender appetite varies sharply by retail sub-type. Investment LTV 65 to 75%, ICR 140 to 160% stressed, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "Investment LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton retail commercial mortgage",
      body: [
        "The Brighton retail estate splits into four practical brackets and lenders price each one differently. <strong>Prime BN1 city-centre</strong> covers Churchill Square (Hammerson), North Street and the Western Road / East Street prime spine, institutional-grade pitches dominated by national fashion, beauty and F&B covenants. <strong>Independent-led prime</strong> covers North Laine (Kensington Gardens, Sydney Street, Gardner Street, Bond Street) and The Lanes, the dense independent retail core that defines Brighton's retail identity. <strong>District and neighbourhood retail</strong> covers Western Road into Hove, George Street Hove (BN3), London Road (BN1), Edward Street Quarter (BN2) and Brighton Marina (BN2). <strong>Suburban high streets</strong> covers Lewes Road, Beaconsfield Road, Hangleton Road and Portland Road Hove.",
        "Investment underwriting tests <strong>ICR</strong>, rent versus stressed interest, at typically 140 to 160%. The two drivers a credit committee reads first are <strong>unexpired lease term</strong> and <strong>tenant covenant</strong>. A 10-year FRI to a national fashion operator at Churchill Square prices materially better than three two-year leases to local independents on the same Western Road pitch. WAULT (weighted-average unexpired lease term) under five years pulls LTV down 5 to 10 percentage points and pricing 50 to 75bps wider.",
        "Worked example: a BN1 Churchill Square / North Street retail unit on a 10-year FRI to a national fashion covenant, £1.45M valuation, £105K passing rent. ICR at 145% on a 7.6% pa stressed rate sizes the loan to roughly £1.05M, about 72% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on prime CBD investment of this profile. Worked example two: a Sydney Street North Laine unit let to two independent operators on shorter leases, £465K valuation, two-year tail to the lead tenant. Same ICR test sizes the loan to roughly 60% LTV; <strong>InterBay Commercial</strong>, Together and <strong>LendInvest</strong> are the realistic desks at 8.5 to 9.5% pa.",
        'For shop-with-flat semi-commercial archetypes, see the <a href="/property-types/semi-commercial">semi-commercial commercial mortgage page</a>; for retail-led mixed-use blocks, see <a href="/property-types/mixed-use">mixed-use</a>. Vacant retail acquisition routes through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> with refurb and re-let exit onto term investment.',
      ],
    },
    schemeTypes: {
      h2: "Retail asset types we fund",
      items: [
        { label: "Prime city-centre retail (BN1)", detail: "Churchill Square (Hammerson), North Street, Western Road prime, East Street. Institutional investment territory; long FRI leases to national covenants." },
        { label: "North Laine and The Lanes independent prime", detail: "Kensington Gardens, Sydney Street, Gardner Street, Bond Street and the Lanes. Independent-led but pitch values close to prime national-covenant levels given footfall density and tourist overlay." },
        { label: "District centre retail", detail: "Western Road into Hove, George Street Hove (BN3), London Road (BN1), Edward Street Quarter (BN2), Brighton Marina. Mixed national and independent covenant; convenience and service retail." },
        { label: "Suburban independent high street", detail: "Lewes Road, Beaconsfield Road, Hangleton Road, Portland Road Hove. Independent-led, tighter covenant profile but stable tenant base." },
        { label: "Owner-occupier independent retailer", detail: "Independent businesses buying the freehold they trade from, EBITDA cover route via the owner-occupier service. Common across North Laine and The Lanes." },
        { label: "Vacant retail acquisition", detail: "Bridge-to-let funds purchase plus refurbishment plus re-letting period; term-out onto investment mortgage at 12 to 24 months." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton retail",
      intro:
        "Most retail deals route as investment (let asset, ICR-led) or owner-occupier (independent retailer buying their unit, EBITDA-led). Vacant or short-lease assets route through commercial bridge-to-let with an agreed exit. Multi-asset retail portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    brightonContext: {
      h2: "The Brighton retail estate",
      body: 'Brighton retail is shaped by an unusually large independent retail base, a powerful tourism overlay (approximately 11 million visitors a year), and a tight central footprint that keeps prime pitch values high. Churchill Square (Hammerson, opened 1968 and rebuilt in 1998) anchors prime; North Street and the Western Road / East Street spine carries the legacy comparison core. North Laine (Kensington Gardens, Sydney Street, Gardner Street, Bond Street) and The Lanes hold the densest independent retail concentration in regional England, the area that defines Brighton retail and that drives most owner-occupier independent freehold demand. Western Road continues into Hove and George Street Hove serves the BN3 high-street catchment. London Road carries the regen-led northern spine. Edward Street Quarter (Boultbee Brooks) is the major mixed-use regen scheme east of the centre; Brighton Marina anchors retail and F&B at the eastern edge of the BN2 seafront. Independent operators dominate stock turnover; institutional churn is concentrated at Churchill Square and on the Western Road prime band.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton retail",
      body: 'Strongest pricing on convenience and food-led retail with national covenants and on Churchill Square anchor and Western Road prime investment let on long FRI leases. Mid-strength on North Laine / The Lanes independent prime, where rents are strong but covenants are independent. Tighter on suburban high-street pure-comparison units, particularly where WAULT is under five years. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment with strong covenants, typical 7.0 to 7.75% pa at 65 to 70% LTV. Mid-market and challenger appetite from Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties on district-centre and George Street Hove investment at 8.0 to 8.75% pa. <strong>InterBay Commercial</strong> (OSB Group) and <strong>LendInvest</strong> take the harder cases, short lease tail, secondary covenant, semi-commercial overlap, at 8.5 to 9.5% pa. High-street desks routinely decline retail with WAULT under three years; Together and InterBay Commercial are the realistic desks for that profile.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Brighton retail investment mortgage?",
        answer: "Up to 75% LTV on let retail with strong national covenants and a long FRI lease. Semi-commercial shop-with-flat reaches 75% on the right archetype, common across North Laine and Western Road. Vacant retail or short leases (under three years tail) typically cap at 60 to 65%. Convenience-led with a supermarket covenant prices at the keenest end of the band.",
      },
      {
        question: "What ICR do retail lenders need?",
        answer: "Typical 140 to 160% stressed at a notional rate 1 to 2% above pay rate. Prime Churchill Square or Western Road with a 10-year FRI to a national covenant sometimes funds at 130%. Suburban Hove parade with mid-covenant sits at 150 to 160%. The stressed rate is the variable that catches borrowers out, the headline ICR on the actual rate often looks fine, but stressed it pulls the loan size down materially.",
      },
      {
        question: "Are retail rates wider than office or industrial investment?",
        answer: "Retail typically prices 25 to 50bps wider than equivalent office investment in mid-2026, and 50 to 75bps wider than industrial. Convenience and food-led close that gap, supermarket-anchored retail prices closer to industrial than to comparison high-street. The rate gap between sectors has narrowed since 2023 as institutional appetite for prime retail has reasserted.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant retail unit?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition plus refurbishment plus the re-letting period; exit is onto a term investment mortgage once the new lease is in place. The lender for the bridge will normally also be the term-out lender. We model both legs at outset so you know the all-in cost of the strategy before exchange.',
      },
      {
        question: "Churchill Square prime, what does it price at right now?",
        answer: "Churchill Square investment with a national fashion or F&B covenant on a 10-year FRI prices in the 6.5 to 7.5% pa band at 65% LTV in mid-2026. Lloyds, NatWest, Barclays and Santander all compete on this profile. The scheme's anchor draw and Brighton's tight central supply position mean lenders treat it close to institutional-grade.",
      },
    ],
  },

  // Office
  office: {
    slug: "office",
    name: "Office",
    metaTitle: "Office Commercial Mortgages Brighton | New Road, Queens Road, Plus X Preston Barracks",
    metaDescription:
      "Commercial mortgage finance for office property in Brighton, New Road and Pavilion Buildings central CBD, Queens Road station district, Preston Park Avenue creative office, Plus X Innovation Hub at Preston Barracks, Norton Road Hove Town Hall area, Amex House Hove. LTVs 65 to 75%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Office",
      h1: "Office Commercial Mortgages Brighton",
      lede:
        "Investment and owner-occupier mortgage finance for Brighton office property. New Road and Pavilion Buildings central CBD at the top, Queens Road / station district office stock, Preston Park Avenue creative-led freeholds, Plus X Innovation Hub at Preston Barracks, Norton Road in Hove around Hove Town Hall, plus the Amex House anchor effect across Hove BN3. Investment LTV 65 to 75%, owner-occupier to 75% on EBITDA cover, mid-2026 rates 7.0 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton office commercial mortgage",
      body: [
        "Brighton office stock is unusual. The market is small by national standards and tightly constrained by the South Downs / sea geography, but the occupier base is exceptionally varied for a city of this size, driven by the University of Brighton, University of Sussex, Brighton & Hove City Council, American Express (Amex House, Hove), Legal & General (Hove), Brighton & Sussex University Hospitals NHS Trust, and the Wired Sussex creative cluster. The commercial mortgage market splits four ways. <strong>Central CBD professional offices</strong> on New Road, Pavilion Buildings and the Queens Road / station district in BN1, the £400K to £3M owner-occupier and small-investment bracket. <strong>Creative-led office</strong> along Preston Park Avenue (BN1), Plus X Innovation Hub at Preston Barracks (BN2) and the digital cluster anchored by Wired Sussex. <strong>Hove BN3 professional services</strong> around Norton Road (Hove Town Hall) and the Amex House halo. <strong>Suburban and outer office stock</strong> in Hollingbury and along the A23 fringe.",
        "Investment underwriting tests <strong>ICR</strong> at 140 to 155% on let office stock. Tenant covenant carries even more weight than on retail, a five-year unbroken lease to a national professional services firm prices materially better than the same building let on three two-year leases. Multi-let assets with rolling renewals price at the wider end. Owner-occupier office routes through the EBITDA-cover product at 1.3 to 1.5x, the accountancy practice converting from leasehold to a Queens Road freehold, the design studio buying its Preston Park Avenue building, the legal firm taking the freehold of its New Road townhouse.",
        "<strong>Creative-led and innovation-hub office</strong> at Plus X Preston Barracks is a discrete sub-pool. The University of Brighton-anchored innovation district is a flexible-workspace and incubator model rather than traditional FRI-let office, which changes the underwriting profile materially. Mainstream commercial desks engage where individual units are let to single-tenant covenant occupiers; multi-let serviced or licence-based occupation sits with specialist lenders.",
        "Worked example: a New Road 5,800 sq ft office investment, £1.65M valuation, let on a 7-year FRI to a regional law firm at £115K passing rent. ICR at 145% sizes a £1.05M loan at 64% LTV; <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Santander</strong> all price this profile at 7.5 to 8.0% pa on a five-year fix. Worked example two: a Preston Park Avenue creative-services freehold purchase by a small architecture practice, £720K, EBITDA cover 1.4x. Owner-occupier route at 70% LTV places with Allica Bank or <strong>Shawbrook</strong> at 7.5 to 8.25% pa.",
      ],
    },
    schemeTypes: {
      h2: "Office asset types we fund",
      items: [
        { label: "Central CBD professional office", detail: "New Road, Pavilion Buildings, Queens Road BN1. The £400K to £3M bracket where most owner-occupier and small-investment commercial mortgage volume sits." },
        { label: "Creative-led Preston Park Avenue office", detail: "Preston Park Avenue BN1 and surrounding streets, the Brighton creative-services freehold spine. Design studios, agencies, architecture and consultancy practices." },
        { label: "Plus X / Preston Barracks innovation district", detail: "University of Brighton-anchored innovation hub at BN2 Preston Barracks. Mixed flexible-workspace and let office; specialist lender appetite for the investment cases." },
        { label: "Hove Norton Road professional services", detail: "Norton Road around Hove Town Hall (BN3) and the Amex House halo. Accountancy, legal, consultancy and financial services freeholds." },
        { label: "Owner-occupier office freehold", detail: "Professional services buying their building, accountancy, legal, consultancy, financial services. EBITDA cover route at 1.3 to 1.5x." },
        { label: "Multi-let small-cap office", detail: "Serviced or multi-tenant small-cap office buildings; specialist lender appetite, ICR tested at the wider end." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton office",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant or value-add via bridge-to-let with an agreed term-out. Innovation-hub stock with serviced or licence-based occupation routes through specialist desks.",
      structures: standardStructures,
    },
    brightonContext: {
      h2: "The Brighton office estate",
      body: 'Brighton office stock is constrained by geography (South Downs to the north, sea to the south) and by a planning regime that has not released speculative office volume for over twenty years. Central CBD sits on New Road, Pavilion Buildings and the Queens Road / station district in BN1, mostly converted townhouses, small purpose-built office stock from the 1960s and 1980s, and Regency conversions, refurbished continually. Preston Park Avenue carries the creative-services freehold spine, design studios, agencies, architecture and consultancy practices working from converted Victorian and Edwardian villas, anchored by the Wired Sussex creative cluster. Plus X Innovation Hub at Preston Barracks (BN2) is the flagship innovation district, a University of Brighton joint venture combining flexible workspace, incubator units and lab space. Hove BN3 holds the professional-services freehold cluster around Norton Road (Hove Town Hall) and benefits from the Amex House anchor (Brighton & Hove\'s largest single private employer). The structural undersupply means owner-occupier freehold demand outstrips supply persistently, and refinancing flow is the dominant deal type rather than fresh investment churn.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton office",
      body: 'Strong on prime let stock with national covenants and unexpired lease term over five years. Mid-strength on secondary CBD with mid-covenant tenants on shorter leases. Tighter, but still fundable, on vacant or part-let secondary office routed through bridge-to-let with a credible refurbishment story. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment at 7.0 to 7.75% pa for 65% LTV with strong covenants. <strong>Shawbrook</strong>, Allica Bank, HTB and Cambridge & Counties cover mid-market at 7.75 to 8.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> handle secondary, short-lease and refurb-to-let stories at 8.25 to 9.25% pa. Plus X / Preston Barracks innovation-district stock with conventional FRI lettings sits on the standard panel; flexible-workspace and licence-occupied buildings route through specialist lenders only.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Brighton office investment?",
        answer: "Up to 75% LTV on strong-covenant let stock with five-plus years unexpired. ICR cover tested at 140 to 155% stressed. Vacant or short-lease assets cap at 60 to 65% LTV. WAULT under three years usually pulls the loan to 60% even where the building is otherwise well-let.",
      },
      {
        question: "Is post-Covid Brighton office stock still fundable?",
        answer: "Yes, and the structural undersupply means Brighton has held up better than most regional markets through the post-Covid cycle. Bridge-to-let funds acquisition plus refurbishment plus re-letting; specialists like Shawbrook, LendInvest and HTB have appetite for genuine refurbishment stories with credible exit lettings. The EPC-B 2030 deadline has if anything strengthened lender comfort with refurb plans, because it forces the upgrade work the asset needs anyway.",
      },
      {
        question: "Plus X Preston Barracks office purchase, can you fund it?",
        answer: "Yes, where the asset is let on conventional FRI to a single tenant. The innovation-hub model with licence-based or flexible occupation needs a specialist lender comfortable with that revenue structure. The University of Brighton anchor and the regen-led credit story help the deal; the underwriting still tests the income on its own merits. Above £5M the deal typically routes through structured commercial debt outside the standard broker panel.",
      },
      {
        question: "What about owner-occupier office purchase on Preston Park Avenue?",
        answer: 'Routes via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier commercial mortgage</a>. EBITDA cover 1.3 to 1.5x; LTV up to 75%; rate 7.0 to 8.25% pa for strong covenants. The design studio or architecture practice taking the freehold of its existing leased Preston Park Avenue or Queens Road building is the archetypal deal, typically £600K to £2M facility.',
      },
      {
        question: "Are multi-let serviced offices fundable in Brighton?",
        answer: "Yes, but the lender pool narrows. Multi-let small-cap office with rolling short-term licenses (rather than full FRI leases) routes through Shawbrook, Allica Bank, InterBay Commercial and Cynergy Bank. ICR tested at the wider end (155 to 165%) reflecting the income volatility. Pricing typically 8.5 to 9.0% pa at 65% LTV.",
      },
    ],
  },

  // Industrial / warehouse
  "industrial-warehouse": {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse",
    metaTitle: "Industrial Commercial Mortgages Brighton | Hollingbury, Patcham Court Farm",
    metaDescription:
      "Commercial mortgage finance for industrial and warehouse property in Brighton, Hollingbury Industrial Estate and Patcham Court Farm. The smallest commercial sector in Brighton by stock; lender appetite limited and deal sizes typically modest. Mid-2026 rates 6.5 to 8.0% pa.",
    hero: {
      eyebrow: "Industrial & warehouse",
      h1: "Industrial and Warehouse Commercial Mortgages Brighton",
      lede:
        "Investment and owner-occupier finance for B2/B8 industrial property and trade-counter units across Brighton's small industrial estate. Hollingbury Industrial Estate and Patcham Court Farm carry most of the stock, the smallest industrial commercial sector of any city we cover, and deal sizes tend to be modest. Lender pool is narrower than in any other regional market, but appetite for the limited stock that exists is strong. Investment LTV to 75%, owner-occupier to 75%, rates 6.5 to 8.0% pa.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "6.5 to 8.0% pa" },
        { label: "Facility", value: "£200K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton industrial commercial mortgage",
      body: [
        "Brighton industrial stock is the smallest of any city we cover. The geography (South Downs to the north, sea to the south, dense Regency and Victorian urban grain in between) has limited the city's ability to release B2/B8 floorspace for thirty years, and the existing stock concentrates on two main sites plus a scattering of small workshop units across BN1 and BN2. The market splits two ways. <strong>Hollingbury Industrial Estate (BN1)</strong> is the principal industrial cluster, north of the centre off the A23 / A27 junction, holding light-industrial, warehouse and trade-counter stock. <strong>Patcham Court Farm (BN1)</strong> on the outer northern fringe carries smaller workshop and light-industrial units. Beyond these two sites, stock is scattered and individual units are typically too small for institutional investment interest.",
        "Despite the small stock base, lender appetite for the limited stock that exists is strong. Industrial enjoys broad lender competition nationally in mid-2026 because the asset class has performed consistently well through 2022 to 2026, and Brighton stock benefits from genuine structural scarcity. Investment LTVs of 75% are achievable on strong-covenant let assets with five-plus years unexpired; owner-occupier 70 to 75% on businesses with two years' clean accounts and EBITDA cover of 1.3 to 1.5x. Deal sizes are typically smaller than in Reading, Milton Keynes or Cambridge, the broker volume in Brighton industrial sits in the £200K to £1.5M bracket rather than the £2M to £8M bracket common elsewhere.",
        "Worked example: a Hollingbury trade-counter unit, 6,200 sq ft, £1.35M purchase by an existing operator. Owner-occupier route on filed accounts showing EBITDA cover of 1.55x. Placed with <strong>Lloyds</strong> at 65% LTV, 6.85% pa on a five-year fix, 20-year term. Worked example two: a Patcham Court Farm light-industrial unit let to two SME tenants on five-year FRI leases, £685K valuation, £52K passing rent. Investment route at 70% LTV; <strong>Shawbrook</strong> took it at 8.0% pa with ICR cover at 145%.",
        "Brokers and borrowers looking at trade-counter format (Toolstation, Howdens, Screwfix, City Plumbing) will find the small Brighton catchment limits how many such operators are present; most of the Sussex trade-counter footprint sits in Worthing, Shoreham or Burgess Hill rather than Brighton itself. For Brighton industrial deals, the realistic comparable evidence pool is correspondingly limited and lenders sometimes pull in Shoreham, Newhaven and Burgess Hill comparables.",
      ],
    },
    schemeTypes: {
      h2: "Industrial asset types we fund",
      items: [
        { label: "Light industrial / B2", detail: "Engineering, fabrication, food production, small manufacturing. Owner-occupier and let investment. Hollingbury Industrial Estate and Patcham Court Farm dominant locations." },
        { label: "Storage and B8 warehouse", detail: "Self-storage, distribution, third-party logistics. Smaller stock base in Brighton than in any other UK regional market; demand routinely overflows to Shoreham and Newhaven." },
        { label: "Trade-counter retail-in-industrial", detail: "Toolstation, Howdens, Screwfix, City Plumbing format where it exists in Brighton itself; the Sussex trade-counter footprint mostly sits outside Brighton in Shoreham, Burgess Hill and Worthing." },
        { label: "Multi-let industrial estate", detail: "Small-unit industrial estates with multiple FRI tenants; rare in Brighton given the supply position but very tightly held when they trade." },
        { label: "Owner-occupier SME industrial", detail: "Manufacturing, engineering, distribution SMEs buying their workshop, the £200K to £1.5M bracket. EBITDA-led owner-occupier route." },
        { label: "Vacant industrial acquisition", detail: "Bridge-to-let funded purchase of vacant or partly-tenanted industrial; refurbishment and re-letting strategy with term-out onto investment mortgage." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton industrial",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant industrial via bridge-to-let. Multi-let estate volume is too small in Brighton to support portfolio refinance as a regular product.",
      structures: standardStructures,
    },
    brightonContext: {
      h2: "The Brighton industrial estate",
      body: 'Brighton is the smallest industrial commercial market of any city in this network, the geography (South Downs to the north, sea to the south, tight urban grain in between) has limited B2/B8 floorspace release for thirty years. Hollingbury Industrial Estate (BN1), north of the centre off the A23 / A27 junction, is the principal cluster and holds light-industrial, warehouse and trade-counter stock. Patcham Court Farm (BN1), on the outer northern fringe, carries smaller workshop and light-industrial units. Beyond these two sites, industrial is scattered, single-unit workshop premises across BN1 and BN2 in mews and back-yard locations. The structural undersupply has driven rents upwards consistently and supports tight investment yields, but the absolute stock base is too small for institutional churn to be a feature. Most Brighton industrial deal flow is owner-occupier SME purchase in the £200K to £1.5M bracket; multi-let estate investment is rare in volume terms but tightly held when it does trade. Industrial demand from Brighton-based occupiers routinely overflows to Shoreham, Newhaven and Burgess Hill where stock and pricing are more favourable.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton industrial",
      body: 'Strong for the limited stock that exists, but deal sizes are typically small. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on prime let industrial in Hollingbury or Patcham Court Farm at 7.0 to 7.75% pa, 65 to 70% LTV with strong covenants. Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties dominate mid-market and owner-occupier industrial at 7.0 to 8.0% pa. <strong>InterBay Commercial</strong>, Together and Allica Bank take the multi-let and value-add cases at 8.0 to 8.75% pa. Owner-occupier industrial enjoys near-best pricing of any sector, 6.5 to 7.5% pa for SMEs with two years\' clean accounts, EBITDA cover 1.3 to 1.5x. The small Brighton catchment means lenders sometimes pull in comparable evidence from Shoreham, Newhaven and Burgess Hill to support valuations; underwriters know the South Coast geography and will look at a Brighton workshop on the same logic they apply elsewhere.',
    },
    faqs: [
      {
        question: "What rate can I get on Brighton industrial investment?",
        answer: "Currently 6.5 to 8.0% pa for prime let industrial with strong covenants and five-plus years unexpired. Trade-counter with national covenant prices at 7.0 to 7.75%. Brighton industrial deals tend to be smaller than equivalents in larger markets, so the lender competition is concentrated on Hollingbury and Patcham Court Farm units in the £400K to £1.5M bracket.",
      },
      {
        question: "Can I fund an owner-occupier industrial purchase in Hollingbury?",
        answer: 'Yes, typically 70 to 75% LTV on strong-covenant SME buyers via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a>. EBITDA cover 1.3 to 1.5x. Allica Bank and Shawbrook are the most active mid-market owner-occupier desks; Lloyds and NatWest compete on the larger end where the borrowing is over £1M and the covenant is strong.',
      },
      {
        question: "Is Brighton industrial really that scarce?",
        answer: "Yes. The combination of South Downs national park to the north, sea to the south and dense Regency / Victorian urban grain in between has prevented industrial release for decades. Hollingbury Industrial Estate and Patcham Court Farm account for most of the stock, and beyond those two clusters industrial premises are scattered across small mews and back-yard sites. Brighton-based occupiers routinely look at Shoreham, Newhaven and Burgess Hill when they cannot find suitable space inside the city.",
      },
      {
        question: "What about trade-counter, different to industrial?",
        answer: "Trade-counter format (Toolstation, Howdens, Screwfix, City Plumbing) sits formally as industrial but lenders treat it as industrial investment with a retail-tenant covenant overlay. The Brighton trade-counter footprint is limited, most Sussex trade-counter activity sits in Shoreham, Worthing or Burgess Hill. Where it exists in Hollingbury, pricing is usually 25bps inside generic industrial because the covenants are stronger than mid-market industrial tenants.",
      },
      {
        question: "Multi-let industrial in Brighton, premium or penalty?",
        answer: "Premium in mid-2026, but the volume is tiny. Multi-let industrial estates have been the strongest-performing UK commercial asset class for three years running, and Brighton's structural scarcity intensifies that. Lenders price the rare Hollingbury multi-let assets at 7.0 to 7.75% pa at 70 to 75% LTV with ICR cover at 140 to 150%. Most Brighton industrial broker volume is single-unit rather than multi-let.",
      },
    ],
  },

  // Leisure & hospitality
  "leisure-hospitality": {
    slug: "leisure-hospitality",
    name: "Leisure & Hospitality",
    metaTitle: "Leisure Commercial Mortgages Brighton | Kings Road Seafront Hotels, Brighton Marina, North Laine F&B",
    metaDescription:
      "Trading-business commercial mortgage finance for leisure and hospitality property in Brighton, Kings Road seafront hotel strip (Hilton Metropole, Grand, Old Ship, Royal Albion plus independent tail), Brighton Marina, North Laine F&B, Kemptown F&B. EBITDA, occupancy and RevPAR underwriting. Approximately 11 million visitors a year underpins demand. LTVs 60 to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Leisure & hospitality",
      h1: "Leisure and Hospitality Commercial Mortgages Brighton",
      lede:
        "Trading-business and investment finance for hotels, aparthotels, restaurant-led leisure and F&B-anchored venues. Brighton draws approximately 11 million visitors a year, one of the largest visitor economies outside London, and the Kings Road seafront hotel strip carries the deepest hospitality concentration on the South Coast. Brand affiliation, operator track record and seafront-versus-side-street location matter materially. LTVs 60 to 70%, rates 7.0 to 9.0% pa. <strong>Cynergy Bank</strong> is the most active named lender for Brighton hospitality.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£500K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton leisure or hospitality commercial mortgage",
      body: [
        "Leisure and hospitality is the most operator-led segment of the commercial mortgage market, and Brighton is the most hospitality-heavy city we cover. Underwriting tests <strong>EBITDA cover</strong> at 1.5 to 2.0x, wider than mainstream owner-occupier, because the trading is more volatile and recovery on default depends more on goodwill and operator continuity than on bricks-and-mortar value alone. The headline metrics a lender reads first are <strong>occupancy</strong>, <strong>ADR (average daily rate)</strong> and <strong>RevPAR (revenue per available room)</strong> for hotels and aparthotels; for gyms and F&B venues it is membership retention or covers per session against operating margin.",
        "Brighton's hospitality story is one of the strongest in the United Kingdom. Approximately 11 million visitors a year drives leisure demand year-round, conference traffic anchored by the Brighton Centre and the Hilton Metropole supports midweek occupancy, weekend leisure runs at near-saturation through April to October, and student-led demand from the University of Brighton and University of Sussex supports F&B and lower-end accommodation through term-time. Hotels split sharply by location and by brand affiliation. <strong>Kings Road seafront strip</strong> is the prime hotel band, anchored by the <strong>Hilton Brighton Metropole</strong>, <strong>The Grand Brighton</strong>, the <strong>Old Ship</strong>, the <strong>Royal Albion</strong>, plus a long tail of independents stretching east to Kemptown and west into Hove seafront. <strong>Branded franchise hotels</strong> (Premier Inn, Holiday Inn Express, Hilton, Ibis) price materially better than independents because the franchise system gives lenders comfort on demand stability and recovery options. Branded budget freehold prices at 7.5 to 8.5% pa at 65% LTV; independent boutique hotels in the same size band sit at 8.5 to 9.5% pa at 60 to 65% LTV. Aparthotels and serviced-apartment formats route through hotel-comfortable lenders, particularly active around the Marina, Kemptown and central seafront.",
        "Worked example: a 65-bed branded franchise budget hotel on the Kings Road seafront, £5.8M valuation, EBITDA £820K. <strong>Shawbrook</strong> placed at 65% LTV, 7.25% pa, 25-year term, EBITDA cover 1.85x. Worked example two: an independent 28-bed boutique hotel on Madeira Place in Kemptown, £2.2M valuation, EBITDA £255K. Independent route is narrower, <strong>Cynergy Bank</strong> is the lead named lender, OakNorth and Allied Irish Bank UK also realistic. Placed at 60% LTV, 9.0% pa, 20-year term, EBITDA cover 1.7x.",
        "Bars and licensed F&B venues route through licensed-trade specialist desks, see also our <a href=\"/property-types/pub-restaurant\">pub and restaurant page</a>. The North Laine F&B cluster, Kemptown St James Street, Hove George Street and Western Road carry the bulk of Brighton's mid-scale F&B operator activity. Gyms split between corporate chain (PureGym, The Gym Group, corporate-financed, not brokered) and independent / small-chain operators where commercial mortgage lenders test membership economics and equipment depreciation alongside EBITDA.",
      ],
    },
    schemeTypes: {
      h2: "Leisure and hospitality assets we fund",
      items: [
        { label: "Kings Road seafront hotel", detail: "Prime BN1 / BN2 seafront strip, Hilton Metropole anchor through the Grand, Old Ship, Royal Albion and the long tail of independents east to Kemptown and west into Hove seafront." },
        { label: "Branded franchise hotel", detail: "Premier Inn, Holiday Inn Express, Hilton, Ibis, Travelodge. Best-priced leisure asset class, franchise comfort drives lender appetite." },
        { label: "Independent boutique hotel", detail: "Kemptown, Madeira Place, central side-street stock. Specialist underwriting on EBITDA, occupancy and ADR; Cynergy Bank the most active named lender." },
        { label: "Aparthotel and serviced apartments", detail: "Marina, Kemptown and central seafront serviced-apartment formats. Operator-letting model, investment if let on FRI to brand, trading if owner-operated." },
        { label: "Independent gym and fitness", detail: "Independent and small-chain gym freeholds. Membership economics, retention, equipment depreciation tested alongside EBITDA." },
        { label: "F&B-anchored leisure", detail: "Restaurants and food-led venues across North Laine, Kemptown St James Street, Hove George Street and Western Road." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton leisure",
      intro:
        "Trading-business mortgage is the primary route for owner-operated leisure assets, on EBITDA cover. Investment mortgage applies where the asset is let on FRI to a brand or operator covenant. Bridge-to-let funds vacant hotel acquisition with refurbishment and repositioning before income stabilisation.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator hotels, gyms, aparthotels, leisure venues, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial investment mortgage", applicability: "Where the asset is let on FRI to a brand or operator covenant, Premier Inn franchise on a 25-year lease for instance." },
        { product: "Commercial bridge-to-let", applicability: "Vacant hotel acquisition with refurbishment or repositioning before income stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing leisure freehold, typically funding an extension, refurbishment programme or onward acquisition." },
      ],
    },
    brightonContext: {
      h2: "The Brighton leisure economy",
      body: 'Brighton draws approximately 11 million visitors a year, one of the largest visitor economies outside London, and hospitality and leisure dominate the city\'s commercial economy more decisively than in any other UK regional city. The Kings Road seafront strip (BN1 into BN2) carries the deepest hotel concentration, anchored by the Hilton Brighton Metropole (the conference flagship), the Grand Brighton, the Old Ship and the Royal Albion, with a long tail of independent hotels and B&Bs stretching east toward Kemptown and west into Hove seafront. The Brighton Centre next to the Metropole anchors mid-week conference demand. Brighton Marina (BN2) holds a secondary leisure and hospitality cluster combining hotels, F&B and entertainment. North Laine and The Lanes hold the densest F&B cluster, drawing tourist trade. Kemptown St James Street carries the East Brighton F&B spine. Hove George Street and Western Road run the BN3 F&B strip. Brighton i360, Madeira Terrace (under restoration) and the Black Rock site round out the seafront leisure stock. University-led demand from approximately 18,000 University of Brighton students and approximately 19,000 University of Sussex students supports student-leisure F&B through term-time.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton leisure",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Brighton hospitality, the bank has built a deep Brighton seafront and Kemptown independent-hotel book and will look at deals other lenders decline. Branded franchise hotels well-served by <strong>Shawbrook</strong>, Cambridge & Counties, Hampshire Trust Bank and selectively Allica Bank, typical 7.5 to 8.5% pa at 65% LTV with EBITDA cover 1.7x+. Independent hotels narrower, Cynergy Bank, OakNorth and Allied Irish Bank UK and Metro Bank are the realistic desks; ASK Partners on the structured-debt end above £5M. Aparthotels hotel-comfortable lenders only; appetite has broadened materially since 2024 as the operating model has matured, and Brighton\'s tourism story makes underwriting easier than in many regional markets. Bars and licensed venues route through Cynergy Bank and specialist licensed-trade desks. Independent gym and fitness narrower still, Cynergy Bank and Together for the trickier cases. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline trading-business hotel and gym; they will look at branded-hotel investment let on FRI to a brand covenant.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on a Brighton independent hotel?",
        answer: "Yes, typically 60 to 65% LTV on independent hotels with two-plus years' trading and EBITDA cover at 1.7x or better. Specialist underwriting on EBITDA, occupancy and ADR. Cynergy Bank is the most active named lender for Brighton independents; OakNorth and Allied Irish Bank UK also realistic. Mid-2026 rates 8.5 to 9.5% pa for the 22 to 50 bed bracket; pricing tightens on larger independents with stronger track record. Brighton's 11 million annual visitors materially help the underwriting story.",
      },
      {
        question: "What about pubs and bars specifically?",
        answer: 'See our dedicated <a href="/property-types/pub-restaurant">pub and restaurant commercial mortgage page</a>, these route through licensed-trade specialist desks (Cynergy Bank, ASK Partners) with barrelage, beer-tie status and freehold-versus-leasehold all material. Gastropubs with strong food revenue overlap with this leisure category but are scored differently.',
      },
      {
        question: "How is a Brighton hotel valued for lending?",
        answer: "Specialist RICS valuer using EBITDA-multiple methodology, typically 7 to 9x EBITDA for branded franchise, 5 to 7x for independent. Bricks-and-mortar value calculated separately and the lender takes the lower of the two figures. Brand affiliation typically adds 1.5 to 2x to the EBITDA multiple; AA Rosettes and Visit England rating influence the multiple at the margin. Brighton seafront bricks-and-mortar values tend to be high enough that the going-concern valuation rarely undershoots, particularly on the Kings Road strip.",
      },
      {
        question: "Aparthotel, investment mortgage or trading-business?",
        answer: "Depends on the operating structure. Where the asset is let on a long FRI lease to the operator brand (a national aparthotel operator takes a 25-year FRI on the building, runs the operations, pays rent), it is investment, ICR-led at 140 to 150%. Where the owner operates the aparthotel themselves under a soft franchise or marketing agreement, it is trading-business, EBITDA-led at 1.5 to 2.0x cover. Brighton has both formats active, particularly around the Marina and central seafront.",
      },
      {
        question: "Are gyms harder to fund than hotels?",
        answer: "On the independent end, yes. The lender pool is narrower, equipment depreciation is treated as a real cost rather than a non-cash add-back, and membership churn is scrutinised. Cynergy Bank and Together are the realistic desks; rates 8.5 to 9.5% pa at 60 to 65% LTV. Gyms with a 12-month-plus track record, strong retention, and a freehold premises fund cleanly; new openings or leasehold operations do not.",
      },
    ],
  },

  // Healthcare / care home
  "healthcare-care-home": {
    slug: "healthcare-care-home",
    name: "Healthcare & Care Home",
    metaTitle: "Care Home Commercial Mortgages Brighton | CQC, Royal Sussex County Hospital Halo",
    metaDescription:
      "Specialist commercial mortgage finance for CQC-rated care homes, GP surgeries and dental practices in Brighton. Royal Sussex County Hospital halo in Kemptown, Brighton General, Hove Polyclinic. CQC-led underwriting, LTVs 60 to 70%.",
    hero: {
      eyebrow: "Healthcare",
      h1: "Care Home Mortgages Brighton",
      lede:
        "Trading-business mortgage finance for care homes, GP surgeries, dental practices and other healthcare property. CQC rating drives lender appetite on care; NHS contract security on dental and GP. Royal Sussex County Hospital in Kemptown anchors Brighton's largest healthcare ancillary cluster, with Brighton General and Hove Polyclinic supporting secondary clusters. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa. Specialist sector, wrong desk first time can lose six weeks.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £8M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton care home commercial mortgage",
      body: [
        "Healthcare in the Brighton commercial mortgage market splits cleanly. <strong>Care homes</strong>, operational properties with bed-by-bed economics, sit firmly in the trading-business mortgage world. CQC rating drives appetite; weighted-average bed value, occupancy, fee-rate mix (private versus local-authority funded) and staffing cost feed the underwrite. <strong>Medical and dental practices</strong> route either as owner-occupier (EBITDA cover 1.3 to 1.5x) or trading-business (sector-specialist underwrite at 1.5x), depending on size, structure and whether NHS contract value is being underwritten as quasi-collateral.",
        "Care home credit decisions hinge on the <strong>CQC rating</strong> first and everything else second. <strong>Good</strong> or <strong>Outstanding</strong> is the threshold for mainstream lender appetite at standard LTV and pricing. <strong>Requires Improvement</strong> can fund, but at tighter LTV (50 to 60%), wider pricing (9.0 to 9.5% pa) and a clear written remediation plan. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers; specialist private credit may engage, but rarely at sensible terms. Lenders also look at the bed mix, small homes (sub-30 beds) are harder to fund than 50 to 80 bed homes, because operating leverage matters; under 20 beds typically declines on high-street desks.",
        "Worked example: a 52-bed CQC-rated Good care home on the outer Hove fringe, £3.6M valuation, EBITDA £470K, predominantly private-pay fee mix. <strong>Shawbrook</strong> placed at 65% LTV, 7.5% pa on a 5-year fix, 25-year term, EBITDA cover 1.85x. Worked example two: a Kemptown dental practice freehold purchase by the existing principal partner, £1.4M, EBITDA £200K, mixed NHS / private revenue, half a mile from the Royal Sussex County Hospital. Owner-occupier route at 75% LTV, 6.95% pa on a 20-year term, placed via a specialist health desk that will use NHS UDA contract value as additional security.",
        "Kemptown (BN2) is the dominant Brighton healthcare ancillary cluster, the Royal Sussex County Hospital on Eastern Road draws a deep cluster of dental practices, GP surgeries, private clinics and allied health operators along Eastern Road and the surrounding Kemptown streets. Brighton General (BN2) supports the inner-Kemptown community clinic stock. Hove Polyclinic (BN3) anchors a smaller cluster on the Hove side. Outer Brighton & Hove and the wider Sussex market towns carry village GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes.",
      ],
    },
    schemeTypes: {
      h2: "Healthcare asset types we fund",
      items: [
        { label: "Care home (owner-operator)", detail: "Across Brighton & Hove and outer Sussex. CQC Good or Outstanding for mainstream pricing." },
        { label: "Supported living and SEN housing", detail: "Specialist housing with care; institutional and SME operator. Local-authority contract security drives lender comfort." },
        { label: "GP surgery, owner-occupier and let", detail: "Owner-occupier purchase by a GP partnership; let GP surgery investment with NHS lease covenant." },
        { label: "Dental practice freehold", detail: "Owner-occupier dental, Royal Sussex County Hospital halo in Kemptown the dominant location. NHS UDA contract value used as additional security on most placements." },
        { label: "Pharmacy", detail: "Independent pharmacy owner-occupier; let-to-pharmacy investment. Strong covenant, broad lender pool." },
        { label: "Health and wellness / private clinics", detail: "Physiotherapy, opticians, podiatry, private clinics drawing Royal Sussex County Hospital halo. Owner-occupier route on EBITDA cover." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton healthcare",
      intro:
        "Care homes use trading-business mortgages on EBITDA / occupancy / CQC underwriting. Smaller medical and dental routes via owner-occupier on EBITDA cover. Investment routes via standard commercial investment mortgage where there is a covenant tenant, most commonly an NHS lease on a GP surgery.",
      structures: standardStructures,
    },
    brightonContext: {
      h2: "The Brighton healthcare property estate",
      body: 'Brighton & Sussex University Hospitals NHS Foundation Trust runs the Royal Sussex County Hospital on Eastern Road in Kemptown (BN2), one of the largest acute-care sites on the South Coast and Brighton\'s anchor healthcare site. The Royal Sussex draws the deepest healthcare ancillary property cluster in the city, dental practices, GP surgeries, private clinics, allied health operators all concentrate along Eastern Road and the surrounding Kemptown streets to serve the hospital catchment, the staff base and the visiting patient population. Brighton General Hospital (BN2), inner Kemptown, supports community-clinic stock. Hove Polyclinic (BN3) anchors a smaller healthcare ancillary cluster on the Hove side. Outer Brighton & Hove and the wider Sussex market towns hold village GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes. Care home stock is dispersed, with concentrations on outer Hove fringe, Patcham and outer Brighton suburbs where larger plot sizes have supported purpose-built or converted care premises.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton healthcare",
      body: 'Care homes, <strong>Shawbrook</strong>, Cambridge & Counties and Hampshire Trust Bank dominate at 7.5 to 9.0% pa at 60 to 70% LTV; CQC Good or better is essential. Dental, Hampshire Trust Bank, Allica Bank\'s health desk and Together cover the range; NHS UDA contract value treated as quasi-collateral by the specialist desks. The Royal Sussex County Hospital-adjacent dental cluster in Kemptown has been a steady refinance volume zone through 2024 to 2026. GP surgery, <strong>NatWest</strong>, <strong>Lloyds</strong> and the challengers compete on owner-occupier purchase by a GP partnership at near-best owner-occupier pricing (6.5 to 7.5% pa) given the strength of the implied NHS revenue. Pharmacy, well-served across multiple lenders given the strong covenant and the consistent fee structure. Independent specialist clinics narrower; route through Allica Bank or <strong>Shawbrook</strong> on owner-occupier at 7.5 to 8.5% pa.',
    },
    faqs: [
      {
        question: "What CQC rating do care home commercial mortgage lenders need?",
        answer: "Generally <strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 9.0% pa). <strong>Requires Improvement</strong> can fund at tighter LTV (50 to 60%), wider pricing (9.0 to 9.5% pa) and with a clear written remediation plan from the operator. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers, typically a 12-month process under the CQC inspection cycle.",
      },
      {
        question: "How are Brighton care homes valued for lending?",
        answer: "Specialist RICS valuer using an EBITDA-multiple methodology, typically 6 to 8x trailing EBITDA, with weighted-average bed value calibration as a sense-check. Bricks-and-mortar value (Existing Use Value, EUV) calculated separately. The lender takes the lower of the going-concern value and the EUV. CQC Outstanding adds 0.5 to 1.0x to the EBITDA multiple; private-pay fee mix above 70% lifts it further.",
      },
      {
        question: "Can I get a dental practice commercial mortgage in Kemptown?",
        answer: "Yes, this is one of the most active sub-niches in Brighton healthcare property. Owner-occupier route on EBITDA cover (1.3 to 1.5x). NHS UDA contract value treated as additional security by the specialist desks. Hampshire Trust Bank and Allica Bank's health desk are the most active. LTVs 70 to 75%; mid-2026 rates 6.5 to 8.0% pa for established principal-led practices. The Royal Sussex County Hospital-adjacent cluster supports unusually strong patient throughput and consistent revenue stability, which feeds the lender comfort.",
      },
      {
        question: "What about a GP surgery let to an NHS partnership, investment route?",
        answer: "Yes, NHS lease covenant on a GP surgery let to a partnership prices very keenly. Typically 6.0 to 7.5% pa at 65 to 70% LTV. The implied NHS covenant strength gets the deal close to gilt-equivalent treatment by some desks. Owner-occupier purchase by the partnership uses the standard EBITDA-cover route.",
      },
      {
        question: "Small care homes, what is the floor?",
        answer: "Mainstream lender appetite drops sharply below 30 beds and effectively stops below 20. Operating leverage matters in care, staffing cost is largely fixed, so EBITDA per bed compresses materially on small homes. Specialist owner-operator routes can fund 25 to 30 bed homes at tighter LTV. Below that, private credit or direct vendor finance are the realistic routes.",
      },
    ],
  },

  // Pub & restaurant
  "pub-restaurant": {
    slug: "pub-restaurant",
    name: "Pub & Restaurant",
    metaTitle: "Pub Mortgages Brighton | North Laine, The Lanes, Kemptown St James Street, Hove George Street",
    metaDescription:
      "Trading-business mortgage finance for pubs, gastropubs, bars and restaurants in Brighton. North Laine and The Lanes F&B core, Kemptown St James Street, Hove George Street and Western Road. Barrelage and EBITDA underwriting. LTVs 60 to 65%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Pub & restaurant",
      h1: "Pub and Restaurant Mortgages Brighton",
      lede:
        "Specialist licensed-trade commercial mortgages for freehold pubs, gastropubs, wet-led pubs and restaurants. Underwriting uses barrelage, full-trading EBITDA, license type, beer-tie status and freehold-versus-leasehold structure. Brighton's combination of tourist trade, student demand and high-density independent operator base makes it one of the more active licensed-trade markets in the South. Different lenders dominate different sub-niches, getting the right desk first time matters more here than almost any other commercial sub-sector.",
      metrics: [
        { label: "LTV", value: "60 to 65%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£300K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton pub commercial mortgage",
      body: [
        "Pubs and restaurants are the most specialised sub-segment of trading-business commercial mortgages, and the one where lender choice matters most. The credit decision turns on five variables: <strong>barrelage</strong> (annual beer volume, the proxy for wet-led trade), <strong>full-trading EBITDA</strong>, <strong>license type</strong> (premises, on-sales, off-sales, late-night, sui generis nightclub), <strong>beer-tie status</strong> (free-of-tie versus tied to a brewery or pub-co), and <strong>freehold-versus-leasehold structure</strong>. Different lenders dominate different sub-niches.",
        "<strong>Free-of-tie freehold pubs</strong> sit at the keenest pricing, the operator owns the asset outright and controls the supply contracts, giving the lender comfort on margin and recovery options. Typical 60 to 65% LTV at 8.0 to 8.75% pa. <strong>Tied pubs</strong> price 50 to 100bps wider because tied beer prices compress operator margin. <strong>Tenanted leasehold pubs</strong> are narrowest, only one or two specialist desks engage, and pricing reflects the limited recovery options. <strong>Gastropubs</strong> with strong food revenue (45%+ of turnover from food) sit closer to mainstream restaurant pricing, the food margin smooths what would otherwise be wet-led volatility.",
        "Worked example: a free-of-tie freehold gastropub on Hove George Street, £1.05M valuation, full-trading EBITDA £185K (60% food / 40% wet), 305 barrels per annum. <strong>Cynergy Bank</strong> placed at 65% LTV, 8.45% pa on a 5-year fix, 20-year term. EBITDA cover 1.78x. Worked example two: a wet-led tied freehold on Kemptown St James Street, £695K valuation, EBITDA £98K, 460 barrels per annum. Tighter case, placed via ASK Partners at 60% LTV, 9.25% pa, 15-year term.",
        "North Laine and The Lanes carry the densest tourist-overlay F&B trade, drawing on Brighton's approximately 11 million annual visitors. Hove George Street and Western Road carry the BN3 high-street F&B spine. Kemptown St James Street holds the East Brighton independent operator base, particularly strong on the LGBTQ+ scene. London Road runs the regen-led northern F&B strip. Brighton trades a high volume of change-of-use cases each year, retail-to-takeaway, retail-to-restaurant, restaurant-to-bar, these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.",
      ],
    },
    schemeTypes: {
      h2: "Pub and restaurant assets we fund",
      items: [
        { label: "Free-of-tie freehold pub", detail: "Best-priced licensed-trade asset class. Owner-operator EBITDA-led, full margin control on supply contracts." },
        { label: "Tied freehold pub", detail: "Tied to brewery or pub-co supply contract; tighter operator margin, 50 to 100bps pricing penalty versus free-of-tie." },
        { label: "Tenanted leasehold pub", detail: "Operating leasehold from pub-co landlord; narrowest lender pool, specialist desks only." },
        { label: "Gastropub / restaurant-led pub", detail: "Food revenue 45%+ of turnover. EBITDA from food-led operations rather than pure wet-led barrelage." },
        { label: "Independent restaurant", detail: "Operator-led restaurant business and freehold. Trading-business underwrite on covers per session, margin and EBITDA. North Laine, The Lanes, Hove George Street, Kemptown St James Street clusters." },
        { label: "Pub with operator flat above", detail: "Semi-commercial overlap; some lenders treat as semi-commercial commercial mortgage at better LTV." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton pubs and restaurants",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Investment route applies where the pub is let on FRI to a chain operator with covenant strength. Bridge-to-let funds vacant pub acquisition or change-of-use scenarios with a clear stabilisation plan.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator pubs, gastropubs and restaurants, EBITDA, barrelage and license type underwritten." },
        { product: "Commercial investment mortgage", applicability: "Pub or restaurant let on FRI to a chain operator (Greene King, Mitchells & Butlers, Stonegate, JD Wetherspoon)." },
        { product: "Commercial bridge-to-let", applicability: "Vacant pub acquisition, change-of-use deals or refurbishment before stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing pub freehold; commonly funds extension, kitchen refurbishment or onward acquisition." },
      ],
    },
    brightonContext: {
      h2: "The Brighton licensed-trade economy",
      body: 'Brighton carries one of the deepest licensed-trade economies of any UK regional city, combining tourist-overlay F&B (approximately 11 million visitors a year), student trade from the University of Brighton and University of Sussex (approximately 37,000 students combined), conference traffic anchored by the Brighton Centre, and a year-round resident leisure economy stronger than almost any comparable city. North Laine and The Lanes hold the densest tourist-overlay F&B cluster. Hove George Street and Western Road carry the BN3 high-street F&B spine. Kemptown St James Street is the East Brighton independent operator base, with a particularly strong LGBTQ+ leisure scene anchoring sustained operator demand. London Road runs the regen-led northern F&B strip. Brighton Marina carries a separate hospitality-led F&B cluster anchored by the leisure complex. The volume of change-of-use F&B activity is high, retail-to-takeaway, retail-to-restaurant, restaurant-to-bar, these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton pubs and restaurants",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Brighton licensed-trade, strong appetite on free-of-tie freehold pubs and gastropubs at 8.0 to 8.75% pa, 60 to 65% LTV. ASK Partners and Allica Bank\'s licensed-trade desk compete strongly on the same profile. Together covers more challenged cases (tied pubs, shorter trading history, secondary location) at wider pricing. <strong>Shawbrook</strong> takes selective licensed-trade where the operator track record is strong and food revenue dominates. Hampshire Trust Bank active on multi-site restaurant operator portfolios. Allied Irish Bank UK and Metro Bank engage selectively on hospitality-led freehold pubs. High-street commercial desks (NatWest, Lloyds, Barclays) do not engage with owner-operator pubs at all; they will look at investment-let pub assets where a chain operator has a long FRI lease in place.',
    },
    faqs: [
      {
        question: "Can I get a freehold pub commercial mortgage in Brighton?",
        answer: "Yes, free-of-tie freehold pubs are the best-priced licensed-trade asset class. Typical 60 to 65% LTV, mid-2026 rate 8.0 to 8.75% pa, term 15 to 20 years. Cynergy Bank and ASK Partners are the most active desks; both will look at established operator track records and gastropub-led food trade as positives. Brighton's tourist, student and conference demand strengthens the underwriting story versus comparable regional markets.",
      },
      {
        question: "What barrelage do lenders need?",
        answer: "Sufficient to support the EBITDA cover, there is no fixed barrelage threshold. What matters is profitable trading. A 200-barrel pub with strong food revenue and an EBITDA margin above 22% can fund where a 400-barrel wet-led pub with thin margin (12 to 15%) cannot. Lenders read margin and EBITDA cover, not barrelage as a standalone metric, but barrelage is the headline number in the underwriting pack.",
      },
      {
        question: "What about a pub I have traded for less than two years?",
        answer: "Specialist desks consider 12-month trading where the operator has prior pub experience and the deal otherwise makes sense. Typically tighter LTV (55 to 60%) and 50 to 75bps wider pricing. New operators with no licensed-trade background struggle materially, underwriters treat the operator risk as the dominant variable. Six months' trading is the practical floor and only viable where the operator has come from a multi-site pub group.",
      },
      {
        question: "Restaurants without alcohol, different underwrite?",
        answer: "Yes. Coffee shops, dessert lounges, dry restaurants and cafes route through restaurant-comfortable trading-business desks with no barrelage or license-type complications. Often closer to mainstream owner-occupier pricing, 8.0 to 8.5% pa at 65% LTV. Allica Bank and Shawbrook engage; Cynergy Bank also looks at the larger end. The dry-restaurant pool is broader than the licensed-trade pool.",
      },
      {
        question: "Tied pub or free-of-tie, does it matter for the mortgage?",
        answer: "Materially. Free-of-tie pricing is 50 to 100bps inside tied. Tied freeholds are still fundable but the pool narrows, Cynergy Bank, Together and ASK Partners will engage; high-street and most challenger banks decline because the tie compresses operator margin. If you are buying a tied freehold, factor in the cost of buying out of the tie versus accepting the wider mortgage pricing, sometimes the buy-out maths works.",
      },
    ],
  },

  // MOT / garage / petrol
  "mot-garage-petrol": {
    slug: "mot-garage-petrol",
    name: "MOT, Garage & Petrol Forecourt",
    metaTitle: "MOT Garage Mortgages Brighton | Hollingbury, Patcham Fringe",
    metaDescription:
      "Specialist commercial mortgage finance for MOT centres, vehicle workshops, body shops and petrol forecourts in Brighton. Limited stock concentrated in Hollingbury and the Patcham fringe. VOSA approval, environmental due diligence, sector-specialist lender pool. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
    hero: {
      eyebrow: "MOT, garage & petrol",
      h1: "MOT and Petrol Forecourt Mortgages Brighton",
      lede:
        "Specialist trading-business finance for MOT centres, vehicle workshops, body shops and petrol forecourts. Brighton stock is limited and concentrates around Hollingbury Industrial Estate and the Patcham northern fringe. VOSA approval, environmental due diligence, EBITDA cover and sector-specialist valuation all material. Wrong desk first time can lose six weeks. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 8.5% pa" },
        { label: "Facility", value: "£250K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting an MOT or petrol forecourt commercial mortgage",
      body: [
        "MOT centres, vehicle workshops, body shops and petrol forecourts sit in a specialist trading-business niche where four variables drive credit committee. <strong>VOSA approval</strong> for MOT testing premises (the formal authority to operate, transferred or reissued on change of ownership). <strong>Full-trading EBITDA</strong> underwritten at 1.5 to 2.0x cover. <strong>Environmental status</strong> of the site, legacy contamination from fuel storage, waste oil or solvents on body shops. <strong>Sector-accredited RICS valuer</strong> view on bricks-and-mortar versus going-concern value, often diverging materially.",
        "Together dominates the Brighton garage and MOT mortgage market. They have meaningful flexibility on environmental risk that high-street and most challenger desks will not take, plus a deep South Coast automotive book built up over twenty years. <strong>Cynergy Bank</strong> covers cleaner cases where there is no environmental flag. <strong>Shawbrook</strong> takes selective workshop premises with no fuel storage history. Allica Bank's specialist desk engages on mid-market MOT and trade-counter overlap.",
        "Petrol forecourts are narrower still. <strong>Phase II contamination assessment</strong> (intrusive ground investigation, soil sampling, groundwater monitoring) is the critical-path item, typically £8 to £15K of cost and 4 to 6 weeks of timeline. Tank integrity report from a VPS or equivalent specialist sits alongside. Most mainstream commercial desks decline forecourts outright; Together and a small number of structured-lending desks engage. Typical LTV 55 to 65% reflecting the contamination-recovery risk.",
        "Worked example: a Hollingbury MOT and workshop premises, BN1, £685K freehold purchase, full-trading EBITDA £115K, clean Phase I report. Together placed at 65% LTV, 8.85% pa on a 5-year fix, 18-year term, EBITDA cover 1.65x. Worked example two: an independent petrol forecourt on the Patcham fringe adjacent to the A23, £1.45M, EBITDA £195K. Phase II clean. Placed via Together at 60% LTV, 9.15% pa, 15-year term. Brighton MOT and garage stock is limited, Hollingbury Industrial Estate and the Patcham fringe carry the bulk of available premises, with a thinner scatter of single-unit workshops across BN1 and BN2. Brighton-based operators routinely look at Shoreham and Newhaven workshop stock when they cannot find suitable space inside the city.",
      ],
    },
    schemeTypes: {
      h2: "MOT, garage and petrol assets we fund",
      items: [
        { label: "MOT testing centre", detail: "VOSA-approved testing premises, owner-occupier most common. Existing VOSA approval taken as evidence of operational continuity." },
        { label: "Vehicle workshop and mechanic", detail: "General automotive workshops and servicing premises. Cleaner environmental profile than body shops or forecourts. Hollingbury and outer Brighton fringe locations." },
        { label: "Body shop and panel beating", detail: "Crash repair and panel beating premises. Solvent and paint storage history makes Phase I assessment standard, Phase II often required." },
        { label: "Petrol forecourt", detail: "Independent petrol stations. Phase II contamination assessment, tank integrity report and 4 to 6 week environmental timeline standard. Patcham fringe and outer-Brighton A23 corridor locations." },
        { label: "Tyre and exhaust centre", detail: "Quick-fit format independent operators. Cleaner environmental profile; closer to mainstream owner-occupier pricing." },
        { label: "Used-car sales lot", detail: "Vehicle sales premises, specialist underwriting on stock turnover, sales mix and EBITDA. MOT plus used-car combined sites common." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton MOT, garage and petrol",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Specialist underwriting steps add 2 to 4 weeks versus mainstream commercial; environmental due diligence is the critical-path item on petrol and most body shops.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator MOT, garage, body shop, used-car lot, EBITDA, VOSA and environmental status underwritten." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading covenant is exceptionally strong and bricks-and-mortar value supports the LTV, workshop premises with no environmental flag and a 5-year-plus track record." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition where environmental remediation is needed before stable trading; exit onto term once Phase II clearance issued." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing MOT or forecourt freehold." },
      ],
    },
    brightonContext: {
      h2: "The Brighton garage and forecourt market",
      body: 'Brighton garage and forecourt stock is limited, the city\'s industrial supply position (smallest of any city we cover) means MOT, workshop and forecourt premises are scarce. Hollingbury Industrial Estate (BN1) holds most of the available workshop and MOT testing stock. The Patcham fringe (BN1) on the outer northern edge carries some independent forecourt and workshop stock, supported by the A23 corridor running north out of the city. Beyond these clusters, Brighton-based automotive operators routinely look at Shoreham, Newhaven and Burgess Hill premises where stock and pricing are more favourable. The volume of independent operators buying their site freehold in Brighton itself is modest, the market sits typically in the £300K to £1M bracket. Larger forecourt and trade-counter automotive activity routes through the South Coast network outside Brighton & Hove city boundaries.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton MOT, garage and forecourt",
      body: 'Together dominates the Brighton garage and MOT mortgage market, they accept environmental risk that most lenders will not, hold a deep South Coast automotive book and have specialist underwriters who know the sector well. Pricing 8.5 to 9.5% pa at 60 to 70% LTV. <strong>Cynergy Bank</strong> takes selective cases on cleaner sites without environmental history. <strong>Shawbrook</strong> covers workshop premises without fuel storage risk at 7.5 to 8.5% pa. Allica Bank\'s specialist desk engages on the mid-market end. Petrol forecourt, Together plus a small number of structured-lending desks; LTV typically 55 to 65% reflecting contamination risk and longer environmental timeline. High-street commercial desks (NatWest, Lloyds, Barclays) decline the sector as a class.',
    },
    faqs: [
      {
        question: "Do I need VOSA approval to fund an MOT centre?",
        answer: "Existing VOSA approval helps materially, lenders take it as evidence of operational continuity and reduce key-person risk. New VOSA applications can fund at tighter terms if the operator has a strong personal track record (typically 5+ years as a tester or workshop manager). Centres with VOSA suspended or revoked typically cannot fund until the approval is reinstated.",
      },
      {
        question: "What environmental due diligence is needed for a petrol forecourt?",
        answer: "Phase I contamination assessment as standard (desktop review of historical use). Phase II (intrusive ground investigation including soil sampling and groundwater monitoring) typically required for fuel stations. Tank integrity report from a VPS or equivalent specialist. Total cost £8 to £15K, total timeline 4 to 6 weeks. The Phase II report drives the lender's view on residual environmental liability, a clean report unlocks the keenest available pricing.",
      },
      {
        question: "Can a body shop fund without environmental issues flagged?",
        answer: "Most body shops have legacy solvent and paint storage on site. A clean Phase I will be required; if anything flags, Phase II steps in. Together has the strongest body-shop appetite of any UK lender, they will engage on cases with limited contamination provided remediation is feasible. Body shops with active environmental enforcement notices effectively cannot fund until the notice is discharged.",
      },
      {
        question: "What term length on an MOT garage commercial mortgage?",
        answer: "Typically 15 to 20 years. Shorter than mainstream owner-occupier (20 to 25 years) reflecting the specialist asset and the operational risk inherent in single-key-person automotive businesses. Lenders rarely write 25-year terms in the sector because business succession is harder than in mainstream owner-occupier sectors.",
      },
      {
        question: "Used-car sales lot, pure trading or part-property deal?",
        answer: "Treated as part-property, part-trading. The bricks-and-mortar value of the site (forecourt, office, workshop) underwrites the security. The trading EBITDA underwrites the cover test. Combined MOT-plus-used-car sites are common in Hollingbury and often fund cleaner than pure used-car because the MOT revenue smooths the volatility of vehicle sales.",
      },
    ],
  },

  // Nursery / school
  "nursery-school": {
    slug: "nursery-school",
    name: "Nursery & School",
    metaTitle: "Nursery Commercial Mortgages Brighton | Hove, Preston Park, Hangleton",
    metaDescription:
      "Specialist commercial mortgage finance for day nurseries, pre-schools and independent schools in Brighton. Hove residential streets, Preston Park, outer Hangleton suburbs. Ofsted-led underwriting, registered capacity and occupancy economics. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Nursery & school",
      h1: "Day Nursery and School Mortgages Brighton",
      lede:
        "Trading-business commercial mortgages for day nurseries, pre-schools and small independent schools across Brighton. Ofsted rating drives lender appetite; registered capacity, occupancy and fee mix feed the underwrite. Active across Hove residential streets, Preston Park and outer Hangleton, where the dual-income professional catchments support fee-paying day-care demand. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton nursery commercial mortgage",
      body: [
        "Day nurseries are a stable, well-regulated trading-business asset class, and one where lender comfort has grown materially since the early-2020s sector consolidation. Underwriting tests four variables. <strong>Ofsted rating</strong> (Outstanding, Good, Requires Improvement, Inadequate) drives appetite at the threshold; most lenders need Good or Outstanding for standard terms. <strong>Registered capacity</strong> against current occupancy gives lenders comfort on revenue stability. <strong>Fee mix</strong>, private fees versus Free Early Years Education (FEEE) funded places, determines margin profile. <strong>Operator track record</strong> in the sector matters more here than in many other trading classes because nursery turnaround is slow.",
        "<strong>Outstanding</strong> nurseries fund at the keenest end, 65 to 70% LTV, 7.0 to 7.75% pa. <strong>Good</strong> sits at standard pricing, 60 to 70% LTV, 7.75 to 8.75% pa. <strong>Requires Improvement</strong> can still fund but at 50 to 60% LTV, 9.0 to 9.5% pa, with a credible Ofsted remediation plan and typically a 12-month trading history showing improvement trajectory. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, typically a six-to-twelve-month process under the Ofsted re-inspection cycle.",
        "Active Brighton nursery clusters: <strong>Hove (BN3)</strong> residential streets where dual-income professional catchment supports fee-paying day-care demand, with concentrations around Hove Park, Goldstone and the streets north of Western Road. <strong>Preston Park (BN1)</strong> serving the inner-north residential catchment. <strong>Outer Hangleton and West Hove (BN3)</strong> for newer suburban nursery stock. Multi-site operators consolidating their portfolio into a single facility route through portfolio refinance with a sector-specialist lender on the desk. Worked example: a 58-place Hove BN3 day nursery, Ofsted Good, £1.85M valuation, 92% occupancy, EBITDA £218K. <strong>Shawbrook</strong> placed at 65% LTV, 7.85% pa on a 5-year fix, 25-year term. Worked example two: a Preston Park and Hangleton two-site nursery group, £2.3M aggregate valuation, EBITDA £298K aggregate. Routed via portfolio refinance with Cambridge & Counties at 60% LTV, 8.55% pa.",
        "Independent schools are a smaller, more specialist niche in Brighton & Hove, served by Brighton College on Eastern Road (one of the higher-profile UK independent schools), Roedean School on the eastern coastline, and a small number of preparatory schools across the city. Lender pool narrower; underwriting includes <strong>pupil roll trend</strong>, <strong>fee structure</strong> (annual fees, charitable status implications) and <strong>ISI inspection grade</strong>. Pricing wider than nursery, typically 6.5 to 8.5% pa. Cambridge & Counties, Reliance Bank and Hampshire Trust are the realistic desks for £1M to £5M independent school freehold deals.",
      ],
    },
    schemeTypes: {
      h2: "Nursery and school assets we fund",
      items: [
        { label: "Single-site day nursery", detail: "Owner-operator nursery freehold purchase or refinance. Most common deal type, Hove residential streets, Preston Park and outer Hangleton catchments." },
        { label: "Multi-site nursery group", detail: "2 to 10 sites consolidated into a single portfolio facility. Aggregated EBITDA cover, blanket-charge structure common." },
        { label: "Pre-school and playgroup", detail: "Smaller-cap registered pre-school premises; often community-anchored, charitable structures common." },
        { label: "Independent primary or prep school", detail: "Specialist underwriting; pupil roll trend and ISI inspection grade material. Cambridge & Counties, Reliance Bank, Hampshire Trust most active." },
        { label: "Special educational needs (SEN) provision", detail: "Specialist SEN settings; lender pool narrower but appetite present where local-authority contracts underpin revenue." },
        { label: "Forest school and outdoor nursery", detail: "Niche subset; specialist desks engage where the operator has a Good Ofsted and 18+ months trading." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton nursery and school",
      intro:
        "Trading-business mortgage is the primary route. Multi-site groups route through portfolio refinance with a sector-specialist desk. Larger independent schools may route through structured commercial debt where the facility size justifies it.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Single-site owner-operator nursery or school, EBITDA, Ofsted and capacity underwritten." },
        { product: "Portfolio refinance", applicability: "Multi-site nursery groups, aggregated facility across 2+ sites with blanket-charge structure." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading is mature and the lender treats the case as standard owner-occupier on EBITDA cover, Ofsted Good or better, 3+ years trading." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise for refurbishment, capacity expansion or onward acquisition." },
      ],
    },
    brightonContext: {
      h2: "The Brighton nursery and school market",
      body: 'Brighton & Hove carries a dual-income professional catchment unusually large for a city of its size, driven by the University of Brighton, University of Sussex, American Express (Amex House Hove), Legal & General (Hove), Brighton & Hove City Council, and Brighton & Sussex University Hospitals NHS Trust. This drives sustained demand for fee-paying day-care across Hove residential streets (around Hove Park, Goldstone and the streets north of Western Road), Preston Park residential streets, and the outer Hangleton and West Hove suburbs. Hove BN3 carries the densest nursery cluster on the back of the affluent professional resident base. Brighton & Hove independent schools cluster around Brighton College (Eastern Road, Kemptown) and Roedean (eastern coastline), with a small preparatory school footprint distributed across the city. Outer Brighton & Hove and the wider Sussex market towns hold pre-school and playgroup premises that fund routinely through trading-business mortgage.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton nursery and school",
      body: 'Aldermore, <strong>Shawbrook</strong>, Cambridge & Counties and Allica Bank all have meaningful nursery appetite. Mid-2026 pricing 7.5 to 8.75% pa at 60 to 70% LTV. Hampshire Trust Bank covers larger multi-site groups (5+ sites, £3M+ aggregate facility). SEN provision narrower, Shawbrook and specialist desks. Independent school pool narrower still, typically Cambridge & Counties, Reliance Bank and Hampshire Trust at 6.5 to 8.5% pa. High-street commercial desks (NatWest, Lloyds, Barclays) rarely engage with single-site owner-operator nursery; they will look at let nursery investment where a multi-site operator takes a long FRI lease on the building.',
    },
    faqs: [
      {
        question: "What Ofsted rating do nursery commercial mortgage lenders need?",
        answer: "<strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 8.75% pa). <strong>Requires Improvement</strong> can fund at 50 to 60% LTV and 9.0 to 9.5% pa with a clear written remediation plan and typically a 12-month trading history showing improvement. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, usually six to twelve months under the Ofsted re-inspection cycle.",
      },
      {
        question: "Can I fund a multi-site nursery group?",
        answer: 'Yes, typically through <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated ICR and EBITDA cover across the sites; blanket-charge or aggregated facility structure. Specialist desks like Cambridge & Counties, Aldermore and Hampshire Trust are most active. We have placed 2-site, 4-site and 7-site nursery group facilities through this route across the South Coast.',
      },
      {
        question: "What occupancy do nursery lenders need?",
        answer: "Mature nurseries trade at 80%+ occupancy on registered capacity; lenders look for sustained occupancy at this level over the last 12 to 24 months. Underutilised nurseries (sub-65% occupancy) need a credible plan, capacity reduction, fee rebalancing or operator change, to fund. New nurseries with no trading record route through bridge-to-let plus term-out, with the term-out conditional on hitting agreed occupancy milestones.",
      },
      {
        question: "Independent school, different lender pool to nursery?",
        answer: "Yes, narrower and more specialist. Pupil roll trend over 3 to 5 years, ISI inspection grade, fee structure and charitable status are all material. Cambridge & Counties, Reliance Bank and Hampshire Trust are the most active desks. Mid-2026 pricing 6.5 to 8.5% pa at 60 to 65% LTV. Larger independents (£5M+ facility) may route through structured commercial debt outside the broker panel.",
      },
      {
        question: "How is FEEE funding treated by lenders?",
        answer: "Free Early Years Education (FEEE / 30-hours funded) is treated as government-backed revenue, strong covenant equivalent, but at a margin profile materially below private fees. Lenders read the fee mix carefully. Nurseries with 60%+ private fees price at the keener end; FEEE-dominant nurseries (75%+ funded) sit wider because the margin is structurally compressed and capacity to absorb cost increases is tighter. Hove BN3 nurseries typically run with stronger private-fee weighting than the city average.",
      },
    ],
  },

  // Mixed-use
  "mixed-use": {
    slug: "mixed-use",
    name: "Mixed-Use",
    metaTitle: "Mixed-Use Commercial Mortgages Brighton | Edward Street Quarter, London Road, Preston Barracks, Madeira Terrace",
    metaDescription:
      "Mixed-use commercial mortgage finance in Brighton, predominantly-commercial blocks with residential element. Edward Street Quarter, London Road regen, Madeira Terrace heritage seafront, Preston Barracks innovation district. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Mixed-use",
      h1: "Mixed-Use Commercial Mortgages Brighton",
      lede:
        "Single-facility commercial mortgages for predominantly-commercial mixed-use property, retail with residential, office with residential, leisure with operator residential. Lender appetite varies dramatically with the residential proportion; we know which lender writes which split. Active across Edward Street Quarter regen, London Road regen, Madeira Terrace heritage seafront and Preston Barracks innovation district. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 155%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton mixed-use commercial mortgage",
      body: [
        "Mixed-use covers any single asset combining commercial and residential tenure, from the classic shop-with-flat archetype (covered separately on our <a href=\"/property-types/semi-commercial\">semi-commercial commercial mortgage page</a>) up to large mixed-use development blocks with ground-floor retail and 20+ apartments above. Lender appetite varies dramatically with the <strong>residential proportion by floorspace and by income</strong>. <strong>Predominantly-commercial</strong> (under 40% residential by floorspace) is treated as commercial investment with a residential overlay, ICR-tested, mainstream commercial desks engage. <strong>Predominantly-residential</strong> (60%+ residential) prices closer to specialist BTL or semi-commercial pricing.",
        "The classic shop-plus-flat archetype is well-served and routes through the dedicated semi-commercial product where the residential element is 40%+. Larger mixed-use blocks (10+ apartments plus ground-floor commercial), common in Brighton at Edward Street Quarter, London Road and Preston Barracks, require a different lender pool, <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on the larger end, with mainstream high-street active where the building is well-tenanted across both elements. Heritage and listed mixed-use, particularly the Regency stock around Brunswick Square, Hove and the Madeira Terrace seafront, routes through heritage-comfortable lenders only.",
        "Worked example: a London Road mixed-use block, ground-floor retail let to a national coffee chain on a 10-year FRI, six apartments above let on ASTs at market rents, £2.4M valuation. Predominantly-commercial mix (55% commercial by floorspace, 65% commercial by income). <strong>NatWest</strong> placed at 70% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 145%. Worked example two: a North Laine mixed-use block on Sydney Street, ground-floor independent retail on a 5-year lease, four apartments above on ASTs, £1.65M. Tighter cover; placed via <strong>InterBay Commercial</strong> at 70% LTV, 7.55% pa.",
        'Brighton has an active mixed-use regen pipeline. <strong>Edward Street Quarter (BN2)</strong>, the Boultbee Brooks-led major mixed-use redevelopment east of the centre, combines office, residential and retail across multiple phases. <strong>Preston Barracks / Plus X Innovation Hub (BN2)</strong>, the University of Brighton joint venture, mixes innovation workspace, residential and ground-floor commercial. <strong>Madeira Terrace restoration (BN2)</strong> on the eastern seafront is heritage-led mixed-use bringing retail, leisure and adjacent residential back into use. <strong>London Road (BN1)</strong> has been on a sustained regen trajectory through 2020 to 2026, with continual change-of-use activity from retail to mixed-use and residential. These schemes generate commercial mortgage refinance candidates as new lettings stabilise.',
      ],
    },
    schemeTypes: {
      h2: "Mixed-use assets we fund",
      items: [
        { label: "Shop-plus-flat-above", detail: "Classic semi-commercial archetype, 40%+ residential by floorspace. See dedicated semi-commercial page for product mechanics." },
        { label: "Retail plus multi-flat block", detail: "Ground-floor retail with 4 to 10 apartments above; mid-cap commercial investment with blended income test." },
        { label: "Office plus residential block", detail: "Ground or first-floor office with apartments above; Edward Street Quarter and Preston Barracks regen schemes typical." },
        { label: "Pub plus operator flat", detail: "Pub or restaurant with operator residential above; semi-commercial overlap or trading-business depending on operator structure." },
        { label: "Listed-building mixed-use conversion", detail: "Regency heritage stock around Brunswick Square Hove, Madeira Terrace seafront and central Brighton; heritage-comfortable lenders only." },
        { label: "Large mixed-use blocks", detail: "10+ apartments plus commercial; portfolio-style underwrite, larger lender pool engagement, structured-debt territory above £8M. Edward Street Quarter and Preston Barracks typical." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton mixed-use",
      intro:
        "Single-facility commercial investment mortgage is the primary route. Where the residential element exceeds 40% by floorspace, the deal qualifies for semi-commercial pricing. Bridge-to-let funds vacant or value-add mixed-use acquisition with refurbishment and re-letting before stabilisation.",
      structures: standardStructures,
    },
    brightonContext: {
      h2: "The Brighton mixed-use estate",
      body: 'Brighton has an extensive mixed-use stock distributed across the city, reflecting centuries of layered urban development on a tight South Coast footprint. Heritage Regency mixed-use along Brunswick Square in Hove, Bedford Square, the Marine Parade seafront and the central Regency squares, much of it Grade I or Grade II listed, with retail or hospitality on lower floors and conversion residential or hotel use above. Modern mixed-use along Western Road, Cowley Road equivalent in Brighton terms (London Road and Lewes Road), and the Victorian high-street parade stock retained as shop-plus-flat or shop-plus-multi-flat. Major regen mixed-use at Edward Street Quarter (Boultbee Brooks), Preston Barracks / Plus X Innovation Hub (University of Brighton) and the Madeira Terrace seafront restoration. London Road has been the most active regen-led mixed-use spine through 2020 to 2026 with continual change-of-use activity. The volume of mixed-use stock is one of the city\'s defining commercial-property characteristics, the building grain is dense, plot sizes are small, and almost every parade has shop-plus-flat archetype somewhere on it.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton mixed-use",
      body: 'Strong across most mixed-use sub-types in mid-2026. <strong>InterBay Commercial</strong> (OSB Group), Together, Aldermore, YBS Commercial and HTB dominate small-to-mid mixed-use at 7.5 to 8.5% pa, 65 to 75% LTV. <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on larger blocks at 7.75 to 8.5% pa. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest, well-tenanted predominantly-commercial mixed-use blocks at 7.0 to 7.75% pa. Predominantly-residential mixed-use routes more naturally through InterBay Commercial and the specialist semi-commercial pool. Heritage and listed mixed-use, particularly the Brighton Regency stock around Brunswick Square and the Marine Parade seafront, needs heritage-comfortable lenders, Shawbrook, Cambridge & Counties and Together engage where the conservation cost is reasonable.',
    },
    faqs: [
      {
        question: "What residential / commercial split qualifies as mixed-use?",
        answer: "Anything with both commercial and residential income. Where residential is 40%+ by floorspace, semi-commercial pricing typically applies. Below 40%, treated as commercial investment with a residential overlay. The income mix matters as much as the floorspace mix, a building that is 45% residential by floorspace but 65% residential by income is priced as predominantly-residential.",
      },
      {
        question: "Can I get 75% LTV on a Brighton mixed-use block?",
        answer: "Yes on classic shop-plus-flat semi-commercial archetypes via InterBay Commercial or Together. Larger mixed-use blocks (10+ apartments plus commercial) typically cap at 70% LTV. Predominantly-commercial mixed-use with strong covenants on the commercial element can stretch to 75% with NatWest, Lloyds or Barclays. Vacant or part-let mixed-use caps at 60 to 65% via bridge-to-let.",
      },
      {
        question: "How are mixed-use assets valued for lending?",
        answer: "RICS Red Book valuation splits commercial value, residential value and total. Both ICR (commercial rent against interest) and AST income (residential rent against interest) feed into the blended affordability test. Some lenders use the lower of the two cover ratios; others blend by floorspace weighting. The valuation methodology can swing the loan size by 5 to 10%, we benchmark across multiple lenders to find the one whose methodology fits the asset best.",
      },
      {
        question: "What about listed and heritage mixed-use on Brunswick Square or Marine Parade?",
        answer: "Listed-building mixed-use (Regency stock around Brunswick Square Hove, Bedford Square, Marine Parade seafront, Madeira Terrace heritage stretch) routes through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Together. Slightly tighter LTV (typically 65% rather than 70%); otherwise comparable terms to non-listed mixed-use. The lender's quantity surveyor will scrutinise ongoing maintenance liability and any listed-building consent implications.",
      },
      {
        question: "Mixed-use bridge-to-let, viable strategy?",
        answer: 'Yes. A bridge funds acquisition plus refurbishment plus re-letting (commercial and residential both), with term-out onto mixed-use commercial mortgage at 12 to 24 months once both elements are stabilised. <a href="/services/commercial-bridge-to-let">Bridge-to-let</a> rates 8.5 to 9.5% pa for the bridge leg; term-out into 7.5 to 8.5% pa once stabilised. We model both legs at outset. Edward Street Quarter and London Road regen schemes commonly generate candidates for this strategy.',
      },
    ],
  },

  // Semi-commercial
  "semi-commercial": {
    slug: "semi-commercial",
    name: "Semi-Commercial",
    metaTitle: "Semi-Commercial Mortgages Brighton | Kemptown, Seven Dials, London Road, Western Road Hove, George Street Hove",
    metaDescription:
      "Semi-commercial commercial mortgage finance in Brighton, shop-with-flat-above and other 40%+ residential mixed assets. Kemptown, Seven Dials, London Road, Western Road into Hove, George Street Hove. Up to 75% LTV. We arrange the unregulated cases (let residential) and refer owner-occupied flat cases to a regulated broker. InterBay Commercial, Together, Shawbrook.",
    hero: {
      eyebrow: "Semi-commercial",
      h1: "Semi-Commercial Mortgages Brighton",
      lede:
        "Single-facility commercial mortgages for the shop-with-flat-above archetype and other residential-commercial mixed assets where residential floorspace is 40%+. Up to 75% LTV. Blended ICR around 145%. Mid-2026 rates 6.5 to 8.5% pa. We arrange the unregulated cases (let residential element); cases where the borrower or family member occupies the flat fall under the FCA's regulated mortgage perimeter and we refer those out to a regulated broker.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 150%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton semi-commercial commercial mortgage",
      body: [
        "Semi-commercial is the term for commercial mortgages on mixed-use property where the residential element is at least 40% of total floorspace, typically the classic <strong>shop-with-flat-above</strong> archetype that defines Brighton's parades, from Kemptown St James Street through to George Street Hove. The product gives lenders comfort from the residential security (easier to re-let an empty flat than an empty retail unit), so semi-commercial routinely prices 50 to 100bps inside pure commercial investment on the same building.",
        "There is one structural complication every borrower must understand. Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, which is what we arrange. <strong>If the borrower or an immediate family member personally occupies the residential element</strong>, the deal moves inside the regulated mortgage perimeter and stops being a commercial mortgage. We do not hold FCA authorisation because the products we arrange are unregulated, so where a deal falls into regulated territory we refer it to a regulated mortgage broker partner. We flag this at outset rather than discover it three weeks into legals. The classic case: the independent retailer who buys the freehold of their Kemptown shop and lives in the flat above sits inside the regulated perimeter; the same building bought as an investment with the flat let on an AST sits inside our unregulated commercial scope.",
        "Active Brighton semi-commercial spines: <strong>Kemptown (BN2)</strong> St James Street, Eastern Road and the surrounding parade stock running east from the Old Steine. <strong>Seven Dials (BN1)</strong> the area immediately west of Brighton station, parade and shop-plus-flat stock at the BN1 / BN3 border. <strong>London Road (BN1)</strong> the regen-led northern spine into Preston Park. <strong>Western Road (BN3)</strong> running from Brighton centre west through Brunswick into central Hove. <strong>George Street Hove (BN3)</strong> the BN3 high-street spine, classic Victorian shop-plus-flat stock. Most semi-commercial deals are £200K to £900K facility size. Worked example: a Kemptown St James Street shop with two flats above, £585K valuation, retail let on a 10-year FRI to a national coffee covenant, both flats let on ASTs (unregulated, in our scope). <strong>InterBay Commercial</strong> placed at 75% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 148%. Worked example two: a George Street Hove shop-plus-three-flats with all flats let on ASTs to arms-length tenants, £755K, placed via Together at 70% LTV, 8.25% pa, blended ICR 145%.",
        "See our <a href=\"/services/semi-commercial-mortgage\">dedicated semi-commercial service page</a> for the product mechanics in detail. For purely residential blocks above commercial, see <a href=\"/property-types/hmo-block\">HMO blocks</a>; for predominantly-commercial buildings with smaller residential elements, see <a href=\"/property-types/mixed-use\">mixed-use</a>.",
      ],
    },
    schemeTypes: {
      h2: "Semi-commercial assets we fund",
      items: [
        { label: "Shop with one or two flats above", detail: "Classic Brighton parade archetype. Kemptown BN2, Seven Dials BN1, London Road BN1, Western Road BN3, George Street Hove BN3." },
        { label: "Restaurant or pub with operator flat (let)", detail: "Operator flat above licensed-trade premises let on AST. Sits as unregulated commercial. Owner-occupied flat cases fall outside our scope, referred to a regulated broker." },
        { label: "Office with residential conversion above", detail: "Office at ground or first floor with residential floors above (post-Class E to mixed change-of-use)." },
        { label: "Vacant semi-commercial acquisition", detail: "Bridge-to-let funded acquisition with refurbishment and re-letting both elements before term-out." },
        { label: "Multi-flat above commercial", detail: "Larger semi-commercial blocks with 3 to 5 flats above ground-floor retail. Specialist underwriting on blended ICR." },
        { label: "Heritage and Regency conversions", detail: "Listed-building semi-commercial; heritage-comfortable lenders only. Brunswick Square Hove, Bedford Square, Marine Parade seafront." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton semi-commercial",
      intro:
        "Single-facility semi-commercial commercial mortgage is the primary route on unregulated cases (residential element let on AST or to a limited-company tenant). Bridge-to-let funds vacant acquisition with agreed exit onto term semi-commercial. Cases where the borrower or family member will occupy the residential element fall outside the unregulated commercial scope, we refer those to a regulated mortgage broker partner.",
      structures: standardStructures,
    },
    brightonContext: {
      h2: "The Brighton semi-commercial estate",
      body: 'A deep, active product across Brighton. The classic parade spines, Kemptown St James Street BN2, Seven Dials BN1, London Road BN1, Western Road through Hove BN3, and George Street Hove BN3, all run on shop-plus-flat-above stock dating from the 1860s through the 1930s. Heritage stock around Brunswick Square Hove, Bedford Square and the Regency Marine Parade seafront adds further depth with listed-building considerations. Recent change-of-use activity along London Road has been creating new semi-commercial profiles as upper floors are retained or converted to flats. The semi-commercial market trades steadily across Brighton, these assets rarely sit vacant for long because the residential element is intrinsically lettable given the city\'s housing stock pressure and the universities anchoring tenant demand.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton semi-commercial",
      body: 'Strong on the unregulated cases we arrange. <strong>InterBay Commercial</strong> (OSB Group) is the most active named lender on the Brighton shop-plus-flat archetype, typical 7.5 to 8.25% pa at 70 to 75% LTV. Together covers more challenged cases (vacant flat at acquisition, weaker commercial covenant) at 8.25 to 9.0% pa. <strong>Shawbrook</strong>, Aldermore, YBS Commercial, HTB and Cambridge & Counties all have meaningful semi-commercial appetite on let residential cases. Each has a distinct LTV / minimum-loan / covenant profile, we know which fits what. Cases that fall inside the regulated mortgage perimeter (owner-occupied residential element) are out of scope for us and we refer those to a regulated broker.',
    },
    faqs: [
      {
        question: "What floorspace split qualifies as semi-commercial?",
        answer: "Residential typically <strong>40%+ by floorspace</strong>. Below that threshold, the deal is treated as pure commercial investment with wider pricing, sometimes 50 to 100bps wider. The split is measured by gross internal floor area; lenders' valuers calculate this from the RICS Red Book report, not from headline marketing particulars.",
      },
      {
        question: "What rate can I expect on a Brighton semi-commercial mortgage?",
        answer: "Currently <strong>6.5 to 8.5% pa</strong> at 65 to 75% LTV on standard shop-plus-flat. Specialists like InterBay Commercial and Together quote competitively to 75% LTV. Strong-covenant retail with an established AST history on the residential element prices at the keener end; vacant residential or short-lease commercial pulls pricing wider.",
      },
      {
        question: "Is semi-commercial regulated by the FCA?",
        answer: "Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, and that is the territory we operate in. We do not hold FCA authorisation because the products we arrange are unregulated. Critical exception for semi-commercial: where the borrower or an immediate family member personally occupies one of the flats, the deal moves <strong>inside</strong> the regulated mortgage perimeter and is no longer in our scope. We refer those cases out to a regulated mortgage broker partner. Limited-company borrower with arms-length AST tenancies on the flat sits unregulated and is in our scope.",
      },
      {
        question: "What about HMOs above retail?",
        answer: 'HMO blocks above commercial route through a slightly different lender pool, see our <a href="/property-types/hmo-block">HMO block commercial mortgage page</a>. East Brighton BN2 carries the densest student HMO stock in the city on the back of the University of Brighton and University of Sussex catchments. The product mechanics differ from standard semi-commercial, room-by-room ICR rather than blended building ICR, and a narrower lender pool.',
      },
      {
        question: "Can I refinance a semi-commercial onto buy-to-let?",
        answer: "No, buy-to-let products are sized against single residential dwellings let to AST tenants, not against commercial-plus-residential mixed assets. The semi-commercial route stays semi-commercial through any refinance. The exception is where the commercial element has been formally split off (separate title, separate access, separate utilities), at which point each element can be financed separately.",
      },
    ],
  },

  // HMO block
  "hmo-block": {
    slug: "hmo-block",
    name: "HMO Block",
    metaTitle: "HMO Mortgages Brighton | Lewes Road, Bevendean, Whitehawk, Falmer Student Belt",
    metaDescription:
      "Commercial mortgage finance for HMO blocks (5+ rooms) in Brighton, Lewes Road and Bevendean / Whitehawk BN2 student belt, Falmer University of Sussex catchment, Preston Park and Hove fringe. Approximately 37,000 students drive one of the densest HMO markets in the UK. Specialist HMO lender panel including Paragon Bank, Together, Foundation Home Loans, Fleet Mortgages. LTVs to 75%.",
    hero: {
      eyebrow: "HMO block",
      h1: "HMO Block Mortgages Brighton",
      lede:
        "Specialist commercial mortgages for licensed HMO blocks of five rooms or more, student-let and professional-let. LTVs to 75%, blended ICR 140 to 160%. Brighton carries one of the densest HMO markets in the UK, BN2 student belt along Lewes Road into Bevendean and Whitehawk, plus Falmer University of Sussex catchment, anchored by approximately 18,000 University of Brighton students and approximately 19,000 University of Sussex students. Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages are particularly active. Mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Brighton HMO commercial mortgage",
      body: [
        "HMO blocks of five or more rooms route through commercial mortgage rather than mainstream buy-to-let. Underwriting is room-by-room, <strong>licensed HMO status</strong>, rent per room, occupancy, total rent against blended ICR. Most lenders cap loan at the lower of (LTV multiplied by value) or (ICR multiplied by rent divided by stress rate). LTVs of 75% are achievable on strongly-let HMO blocks with established occupancy and a clean licensing record.",
        "Brighton is one of the densest student HMO markets in the United Kingdom, driven by approximately 18,000 University of Brighton students plus approximately 19,000 University of Sussex students. The combined catchment generates persistent demand for shared-house accommodation, particularly in <strong>East Brighton (BN2)</strong> along the <strong>Lewes Road spine running north into Bevendean and Whitehawk</strong>, with the densest stock concentrated in the streets between the Lewes Road and Bear Road. <strong>Falmer (BN1)</strong>, immediately adjacent to the University of Sussex campus, carries the densest student HMO concentration outside the Lewes Road belt. <strong>Preston Park (BN1)</strong> holds an established professional-let HMO cluster on the back of the central commute and Hove employer proximity. The <strong>Hove fringe (BN3)</strong> rounds out the supply with smaller-scale stock serving both student and professional tenants.",
        "Brighton & Hove City Council operates additional and selective HMO licensing schemes across most of the densest HMO neighbourhoods, including the BN2 student belt. Existing licensed HMOs trade and refinance freely; new conversions in selective-licensing areas need licensing and may need full planning consent depending on the type of HMO. The licensing register is publicly accessible and acts as a useful proxy for HMO stock counts at postcode level, BN2 carries by far the highest count.",
        "Worked example: a 6-bed Lewes Road BN2 student HMO, £655K valuation, £46,000 gross annual rent, 95% historical occupancy, all-inclusive let. Paragon Bank placed at 75% LTV, 6.85% pa on a 5-year fix, blended ICR 148%. Worked example two: a 5-property BN2 professional and student HMO portfolio across the Lewes Road / Bevendean area, £2.45M aggregate, £172K aggregate rent, mixed AST and per-room let. Routed via portfolio refinance with <strong>LendInvest</strong> at 70% LTV, 7.25% pa, aggregated DSCR.",
      ],
    },
    schemeTypes: {
      h2: "HMO block assets we fund",
      items: [
        { label: "Student HMO (5 to 8 rooms)", detail: "BN2 student spine, Lewes Road into Bevendean and Whitehawk; Falmer adjacent to University of Sussex. All-inclusive let typical, 90%+ occupancy norm." },
        { label: "Professional HMO (5 to 8 rooms)", detail: "Preston Park and Hove fringe working-tenant HMOs. Higher per-room rents, slightly lower occupancy than student stock." },
        { label: "Large HMO (8+ rooms)", detail: "Larger HMOs in converted Victorian and Edwardian terraces across BN2 and BN1. Specialist lender pool, premium valuations." },
        { label: "Multi-property HMO portfolio", detail: "5+ HMO portfolio refinance via aggregated facility. Blanket-charge structure or property-by-property charges." },
        { label: "HMO conversion finance", detail: "Bridge-to-let funded conversion of houses to HMO, with licensing and planning consent path mapped before exchange." },
        { label: "Above-shop HMO", detail: "HMO blocks above retail, semi-commercial / HMO hybrid; specialist underwriting on the combined commercial and residential income. Lewes Road and London Road common locations." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Brighton HMO blocks",
      intro:
        "HMO commercial mortgage is the primary route for licensed HMOs of 5+ rooms. Conversion projects route through bridge-to-let. Multi-property HMO portfolios consolidate via portfolio refinance with aggregated DSCR cover.",
      structures: [
        { product: "HMO commercial mortgage", applicability: "Licensed 5+ room HMOs, let to students or professionals on a per-room basis or all-inclusive." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus HMO conversion, with agreed term-out onto HMO mortgage once licensed and let." },
        { product: "Portfolio refinance", applicability: "5+ HMO portfolios consolidated into a single aggregated facility with blanket-charge or property-by-property structure." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing HMO block." },
      ],
    },
    brightonContext: {
      h2: "The Brighton HMO market",
      body: 'Brighton carries one of the densest student HMO concentrations in the United Kingdom, driven by approximately 18,000 University of Brighton students plus approximately 19,000 University of Sussex students. <strong>BN2 East Brighton</strong> is the densest sub-market by far, the Lewes Road spine running north into Bevendean and Whitehawk is saturated with 5 to 8 bed converted Victorian and Edwardian terraces let to students; the surrounding streets between Lewes Road and Bear Road round out the spine. <strong>Falmer (BN1)</strong>, immediately adjacent to the University of Sussex campus, carries the densest student HMO concentration outside the BN2 belt. <strong>Preston Park (BN1)</strong> holds an established professional-let HMO cluster on the back of the central commute and Hove employer proximity. The <strong>Hove fringe (BN3)</strong> rounds out the stock with smaller-scale HMO supply. Brighton & Hove City Council operates additional and selective HMO licensing across most dense HMO neighbourhoods including the BN2 student belt; the licensing register is publicly accessible and acts as a useful proxy for HMO stock counts at postcode level.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton HMO",
      body: 'Strong. Paragon Bank is particularly active on the Brighton student HMO belt and has built a deep BN2 book over the past decade. Together, <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Foundation Home Loans, Fleet Mortgages, Cambridge & Counties and Aldermore all have meaningful HMO appetite. Each has a different room-count threshold (some go 4+, most 5+, some 6+ for premium pricing) and a different stance on student-versus-professional let. Mid-2026 pricing 6.5 to 8.5% pa at 70 to 75% LTV. LTV up to 80% on selective lenders with portfolio history and strong occupancy track record. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline HMO above five rooms; specialist commercial and BTL desks dominate.',
    },
    faqs: [
      {
        question: "What size HMO qualifies for commercial versus BTL pricing?",
        answer: "<strong>5+ rooms</strong> typically qualifies for HMO commercial mortgage. 4-room HMOs route through specialist BTL with HMO product. Above 7 rooms, the lender pool narrows further, Together, InterBay Commercial and LendInvest dominate. Above 10 rooms (large HMO), it becomes a fully specialist sub-segment with its own pricing logic.",
      },
      {
        question: "What about Brighton & Hove licensing in BN2?",
        answer: "Brighton & Hove City Council operates additional and selective HMO licensing schemes across most of the city's densest HMO neighbourhoods, including the BN2 Lewes Road / Bevendean student belt. Existing licensed HMOs trade and refinance freely; new conversions in selective-licensing areas need licensing and may need full planning consent depending on the type of HMO. The licensing regime has supported HMO values materially by formalising stock and capping uncontrolled supply growth. The publicly-accessible licensing register is a useful proxy for HMO stock counts at postcode level.",
      },
      {
        question: "Can I fund HMO conversion?",
        answer: 'Yes, via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. Bridge funds acquisition plus conversion works; term-out onto HMO commercial mortgage once licensed and let. We map the planning and licensing path before exchange so the route to a licensed asset is clear; conversions in selective-licensing areas of BN2 need licensing in place before income can be commercially counted.',
      },
      {
        question: "What ICR do HMO commercial mortgage lenders need?",
        answer: "Typically <strong>140 to 155%</strong> on aggregated room rent against interest cost stressed at a notional rate 1 to 2% above pay rate. Strong-occupancy student HMOs in BN2 routinely pass at 145%. All-inclusive student lets sometimes carry a slightly tighter ICR (150 to 160%) because lenders factor in the utility and council tax costs the operator absorbs.",
      },
      {
        question: "Multi-property HMO portfolio, same lenders?",
        answer: 'Largely yes, but the product structure shifts to <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated DSCR across the properties (typically 130 to 145%), single facility, blanket charge or property-by-property charges. Paragon Bank, LendInvest, Together and Foundation Home Loans all run active HMO portfolio programmes. 5+ properties is the typical threshold for portfolio pricing. Brighton HMO portfolio refinance volume has been steady through 2024 to 2026 as student-let economics held up well.',
      },
    ],
  },

  // Holiday-let portfolio
  "holiday-let-portfolio": {
    slug: "holiday-let-portfolio",
    name: "Holiday-Let Portfolio",
    metaTitle: "Holiday-Let Mortgages Brighton | Seafront Short-Lets, Kemptown Apart-Hotels, North Laine Visitor Accommodation",
    metaDescription:
      "Specialist commercial mortgage finance for FHL (furnished holiday let) portfolios in Brighton. Seafront short-let stock, Kemptown apart-hotels, North Laine visitor accommodation. Approximately 11 million visitors a year drive one of the strongest UK short-let markets outside London. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Holiday-let portfolio",
      h1: "Holiday Let Portfolio Mortgages Brighton",
      lede:
        "Specialist commercial mortgages for FHL (furnished holiday let) portfolios and apart-hotel stock across Brighton. Aggregated facility across 3+ properties on occupancy-and-ADR underwriting. Approximately 11 million annual visitors underpins one of the strongest UK short-let markets outside London, with deep clusters along the seafront, Kemptown apart-hotels and North Laine visitor accommodation. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa. Mainstream commercial desks largely do not engage, wrong desk first time loses six weeks.",
      metrics: [
        { label: "LTV", value: "Up to 70%" },
        { label: "Cover test", value: "DSCR 130 to 145%" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an FHL portfolio commercial mortgage",
      body: [
        "FHL (furnished holiday let) properties qualify for distinct treatment, they are commercially-let assets generating short-stay holiday income rather than long-term residential rent. Lender underwriting tests four variables. <strong>Average occupancy</strong> across the calendar year (sustained 55 to 65%+ is the Brighton threshold given the strong tourist economy). <strong>Average daily rate (ADR)</strong> by season. <strong>Seasonality</strong>, strong-season weeks at high ADR matter as much as headline annual figure. <strong>Platform mix</strong>, Airbnb, Booking.com, direct, plus owner-managed versus agent-managed.",
        "Most FHL portfolio lenders need <strong>3+ properties</strong> to consider portfolio-refinance pricing. Single-asset FHL routes through specialist BTL with FHL product (different pool, different logic). Portfolio underwriting tests <strong>aggregated DSCR</strong> at 130 to 145% across all properties, the diversification of income across multiple FHLs gives lenders comfort that one bad season at a single property does not break the portfolio.",
        "Brighton FHL territory is among the strongest in the UK outside London. The seafront short-let market is dense and resilient, the Kings Road and Marine Parade strips host extensive short-let activity in converted Regency stock and purpose-built apartments. Kemptown supports a deep apart-hotel cluster anchored by independent boutique operators. North Laine carries visitor-accommodation use in upper floors above retail, partly created by recent change-of-use conversions. Brighton's tourist demand profile, approximately 11 million annual visitors with weekend leisure peaks April through October and conference-driven midweek demand, supports higher annualised occupancy than most regional FHL markets.",
        "Worked example: a 4-property seafront and Kemptown FHL portfolio, two Marine Parade Regency conversions and two Kemptown apart-hotel units, £2.15M aggregate valuation, £225K aggregate annual gross income, 71% blended occupancy, mixed Airbnb-and-Booking.com let. <strong>LendInvest</strong> placed at 65% LTV, 8.75% pa on a 5-year fix, 25-year term, aggregated DSCR 142%. Worked example two: a 3-property North Laine apart-hotel portfolio in upper-floor retail-conversion stock, £1.85M aggregate, £198K aggregate annual gross income, 76% blended occupancy. Placed via Together at 65% LTV, 8.55% pa, treating the apart-hotel structure as portfolio FHL with operator-management overlay.",
      ],
    },
    schemeTypes: {
      h2: "Holiday-let portfolio assets we fund",
      items: [
        { label: "Single-asset FHL", detail: "Single property let on FHL basis, typically a Regency seafront conversion or central serviced apartment. Routes through specialist BTL with FHL product rather than portfolio facility." },
        { label: "FHL portfolio (3+ properties)", detail: "Aggregated portfolio facility for 3+ FHLs across Brighton and Hove. DSCR-led, blanket-charge or property-by-property structure." },
        { label: "Seafront short-let stock", detail: "Marine Parade, Kings Road and surrounding seafront short-let portfolios drawing on tourist trade. Strong year-round occupancy in mid-2026 conditions." },
        { label: "Kemptown apart-hotel portfolio", detail: "Boutique apart-hotel operators across Kemptown and the eastern seafront. Operator-management overlay; specialist desks." },
        { label: "B&B and boutique guesthouse", detail: "Operator-owned overnight-stay business; trading-business overlap with leisure category. Operator-occupied B&B routes through trading-business mortgage." },
        { label: "North Laine visitor accommodation", detail: "Upper-floor visitor accommodation above North Laine retail, partly created by recent retail-to-visitor-accommodation change of use." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for FHL portfolios",
      intro:
        "FHL commercial mortgage on a portfolio basis is the primary route for 3+ properties. Single-asset FHLs route through specialist BTL or commercial investment. Operator-occupied B&Bs route through trading-business mortgage with operator-residence allowance.",
      structures: [
        { product: "FHL portfolio mortgage", applicability: "3+ FHL properties aggregated under a single facility. DSCR-led at 130 to 145% on blended income." },
        { product: "Trading-business mortgage", applicability: "Operator-occupied B&B or guesthouse, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus refurbishment of property for new FHL use; term-out onto FHL portfolio once stabilised." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established FHL portfolio." },
      ],
    },
    brightonContext: {
      h2: "The Brighton FHL market",
      body: 'Brighton has one of the strongest UK FHL markets outside London, driven by approximately 11 million annual visitors, a year-round leisure economy, weekend short-break demand from London and the wider South East, and conference traffic anchored by the Brighton Centre. The seafront short-let stock concentrates along Kings Road and Marine Parade in converted Regency apartments and purpose-built blocks; demand here runs at near-saturation through April to October and supports sustained 60 to 75% annual occupancy. Kemptown holds a deep apart-hotel cluster anchored by independent boutique operators; the area\'s combination of independent F&B, LGBTQ+ scene density and proximity to the Royal Sussex County Hospital generates demand from leisure visitors and medical-tourism stays alike. North Laine visitor accommodation has expanded notably through 2022 to 2026 as upper-floor retail conversions create new short-stay supply. Brighton Marina hosts further serviced-apartment stock at the eastern fringe. Demand drivers: tourism, weekend short-break trade from London and the South East, weekday conference traffic, and student-related visiting-family demand through term-time. Stock typically 1 to 3 bedroom converted apartments and apart-hotel units commanding £120 to £400 per night at peak; seafront-view premium adds 30 to 50% to ADR.',
    },
    lenderAppetite: {
      h2: "Lender appetite for FHL portfolios",
      body: '<strong>LendInvest</strong>, Together and Hampshire Trust Bank are the most active specialist FHL portfolio lenders. Cambridge & Counties covers larger portfolios (5+ properties, £2M+ aggregate facility). Cumberland Building Society engages on selective South Coast stock. Select private credit on bespoke structures. Mid-2026 pricing 7.0 to 9.0% pa at 60 to 70% LTV. Mainstream commercial desks (NatWest, Lloyds, Barclays, Santander) largely decline FHL outright, they treat short-stay income as too volatile. Specialist BTL desks (Paragon Bank, Aldermore, Foundation Home Loans) cover single-asset FHL but not portfolio-aggregated structures. Get the right specialist first time, wrong desk loses six weeks. Brighton\'s tourist economy strength means underwriters take Brighton FHL more comfortably than equivalent stock in lower-tourism markets.',
    },
    faqs: [
      {
        question: "Is an FHL a commercial mortgage or buy-to-let?",
        answer: "Single-asset FHL often routes through specialist BTL with FHL product, different pool, different logic. Portfolios of 3+ properties route through commercial portfolio facilities at better aggregated terms and DSCR-led underwriting. The threshold matters: at 2 properties, you are still in BTL territory; at 3, the portfolio commercial pool opens up.",
      },
      {
        question: "What occupancy do FHL lenders need?",
        answer: "Sustained <strong>55 to 65%+ annual occupancy</strong> across the portfolio is the Brighton threshold; the strong tourist economy supports higher annualised occupancy than most regional markets. Strong-season weeks at high ADR matter as much as headline annual figure, a Marine Parade seafront flat at 80% occupancy in April to October and 45% November to March reads better than the same flat at flat 60% across all months. We model a full 12-month occupancy and ADR curve before submission so the lender sees the seasonality story explicitly.",
      },
      {
        question: "Are B&B and FHL the same lender pool?",
        answer: 'Overlapping but distinct. Operator-owned B&B with on-site owner residence routes as <a href="/services/trading-business-mortgage">trading-business mortgage</a> on EBITDA cover. Pure FHL with guest-only occupancy and no on-site operator routes as FHL portfolio on DSCR. Mixed structures (a B&B that also takes some FHL bookings) need careful structuring at outset to avoid landing in the wrong product.',
      },
      {
        question: "What about platform reliance, Airbnb concentration?",
        answer: "Lenders prefer multi-platform booking mix (Airbnb plus Booking.com plus direct) rather than single-platform reliance. Airbnb-only FHLs can fund but at slightly tighter terms, typically 5% lower LTV and 25 to 50bps wider pricing. The reasoning is that platform policy or fee changes can affect economics overnight; multi-platform diversification mitigates that. We benchmark booking mix in the underwriting pack.",
      },
      {
        question: "FHL tax changes, do lenders factor them in?",
        answer: "Yes. The April 2025 abolition of the FHL tax regime (FHLs now treated like ordinary residential lets for tax purposes) has fed into lender modelling, net rent assumptions tightened, DSCR cover ratios moved 5 to 10 percentage points wider for new applications. The change has not closed the FHL market, but it has narrowed pricing slightly and made operator-track-record more important. We flag the post-April-2025 net-yield position in every FHL submission.",
      },
    ],
  },
};

export function getAssetTypeDetail(slug: string): AssetTypeDetail | null {
  return assetTypeDetails[slug] ?? null;
}

export const ASSET_TYPE_LINKS = Object.values(assetTypeDetails).map((a) => ({
  slug: a.slug,
  name: a.name,
}));
