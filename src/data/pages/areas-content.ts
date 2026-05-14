/**
 * Per-district area page content, Commercial Mortgages Brighton.
 *
 * Each area page is a Bradley-Benner local landing page where the ward /
 * neighbourhood IS the primary entity. Heading vocabulary uses different
 * entity variants across URL / title / H1 / H2s / H3s, no phrase repeats.
 *
 * Differentiation comes from layered local data:
 *   1. Real Brighton & Hove City Council planning applications (filtered by
 *      postcode catchment) cited by reference number, address and proposal.
 *   2. HM Land Registry residential transactions used as market temperature
 *      ONLY, never claimed as commercial transactions.
 *   3. Sector-specific lender appetite naming the lenders most likely to
 *      fund the dominant local commercial mortgage profile.
 *
 * NeuronWriter discipline: every page hits mortgage / commercial mortgage
 * / Brighton / [area] / finance / lender / broker, plus the entity set,
 * FCA, stamp duty, refinancing, LTV.
 *
 * Slugs match AREAS in src/lib/constants.ts and AREA_IMAGES in src/data/area-images.ts.
 */

export interface PlanningRef {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    lede: string;
  };
  marketContext: {
    h2: string;
    body: string[];
  };
  planningContext: {
    h2: string;
    body: string;
    refs: PlanningRef[];
  };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string; typicalSize?: string }>;
  };
  finance: {
    h2: string;
    body: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  lenderAppetite: {
    h2: string;
    body: string;
  };
  /** Property types most active in this district, slugs from property-types-content.ts. */
  relatedAssetClasses: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const standardCmStructures = [
  { product: "Owner-occupier", applicability: "Businesses buying their trading premises, EBITDA cover at 1.3 to 1.5x, LTV to 75% on bricks." },
  { product: "Commercial investment", applicability: "Let assets, ICR at 140 to 160% stressed, LTV typically 65 to 75%." },
  { product: "Semi-commercial", applicability: "Shop+flat archetypes, blended ICR around 145%, LTVs to 75% via specialists." },
  { product: "Bridge-to-let", applicability: "Vacant or value-add acquisitions with refurb or re-let exit onto term mortgage." },
  { product: "Refinancing", applicability: "Maturing facilities, equity release on stabilised commercial assets, rate-driven switches." },
];

export interface AreasHubContent {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  groupings: Array<{
    title: string;
    description: string;
    slugs: string[];
  }>;
  closing: {
    h2: string;
    body: string;
  };
}

export const areasHubContent: AreasHubContent = {
  hero: {
    eyebrow: "Where we lend",
    h1: "Commercial Mortgages Brighton by Area",
    lede:
      "From North Laine and The Lanes retail in BN1 to Edward Street Quarter Grade A office investment in BN2 and the Falmer and Lewes Road HMO student belt, the Brighton commercial mortgage market is not one market, it is twelve. Each district carries its own dominant property type, its own typical facility size and its own lender shortlist. Every area page below stitches together the live Brighton & Hove City Council planning pipeline, HM Land Registry transaction temperature and the named lenders most likely to fund a deal there.",
  },
  intro: {
    h2: "How the Brighton commercial mortgage market splits by district",
    body: [
      "Pricing on a North Laine prime retail freehold is not the same as pricing on a Hove Western Road office investment or a Hollingbury industrial owner-occupier purchase. ICR thresholds on a London Road shop-with-flat are not the same as on a marina-front hotel trading-business. The lender shortlist for a Lewes Road HMO portfolio refinance is almost entirely different from the shortlist for an Edward Street Quarter Grade A office exit. Every area page below carries the specifics that matter, postcode, named planning applications drawn from the Brighton & Hove City Council Idox public access portal, dominant commercial sector mix, expected LTV and rate range, and the lenders we lean on first.",
      "We arrange commercial mortgages, finance and refinancing across all twelve districts. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. Stamp duty land tax applies on every commercial purchase at the commercial rates, your conveyancer will price it. Where a lender takes more than 60% LTV against a trading business, expect EBITDA cover testing in addition to bricks-and-mortar valuation.",
    ],
  },
  groupings: [
    {
      title: "Central Brighton, prime retail, hospitality and flagship leisure",
      description:
        "The deepest commercial mortgage market on the South Coast. North Laine and The Lanes prime retail, the BN1 and BN2 seafront hotel strip and Kemptown F&B anchor the largest central facility sizes (£500K to £6M).",
      slugs: ["city-centre-north-laine-lanes", "seafront-kings-road", "kemptown"],
    },
    {
      title: "Hove, regeneration and creative innovation",
      description:
        "Hove's Western Road and George Street professional services and seafront leisure, plus the Edward Street Quarter Boultbee Brooks-led mixed-use flagship and the Preston Park and Preston Barracks innovation cluster anchored by Plus X.",
      slugs: ["hove-central", "edward-street-quarter", "preston-park-preston-barracks"],
    },
    {
      title: "Outer Brighton, regeneration corridors and the university belt",
      description:
        "London Road BN1 high-street regen, Seven Dials F&B and semi-commercial, the Falmer and Lewes Road university adjacency carrying the BN1 9 and BN2 4 HMO student belt and the largest HMO and PBSA concentration in the city.",
      slugs: ["london-road", "seven-dials", "falmer-lewes-road"],
    },
    {
      title: "Marina, suburban edge and industrial",
      description:
        "Brighton Marina BN2 leisure and hospitality, Hangleton and West Hove BN3 suburban retail and trade, and the Hollingbury and Patcham BN1 8 industrial estate carrying Brighton's tightest B2 and B8 commercial supply.",
      slugs: ["brighton-marina", "hangleton-west-hove", "hollingbury-patcham"],
    },
  ],
  closing: {
    h2: "Beyond the twelve, wider Sussex and the South Coast",
    body:
      "We routinely arrange commercial mortgages outside the twelve districts above, including Shoreham-by-Sea, Worthing, Lewes, Hassocks and the wider Mid Sussex commuter ring, plus Eastbourne and Hastings inside the wider East Sussex footprint. The same 90+ lender panel applies, with Cynergy Bank, Shawbrook, InterBay Commercial, Paragon, Together, Foundation Home Loans and Fleet Mortgages all active across the South Coast. If your deal is in a Brighton or Sussex postcode that does not have its own page yet, call us direct, we will route you to the right product and the right lenders inside an hour.",
  },
};

export const areaDetails: Record<string, AreaDetail> = {
  "city-centre-north-laine-lanes": {
    slug: "city-centre-north-laine-lanes",
    name: "Brighton City Centre, North Laine and The Lanes",
    metaTitle: "Commercial Mortgages Brighton City Centre, North Laine and The Lanes | Specialist Broker, BN1",
    metaDescription:
      "Commercial mortgages for Brighton City Centre, North Laine and The Lanes, BN1 prime retail, independent F&B, mixed-use upper-floor stock. Churchill Square, Western Road, North Street, Bond Street. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Brighton City Centre, North Laine and The Lanes",
      lede:
        "Brighton City Centre runs from Churchill Square along Western Road and North Street into the North Laine independent retail grid and the antique-trade Lanes south of North Street. The fabric is Regency and Victorian retail terrace, narrow-frontage independent shops with upper-floor flats or workshops, the Churchill Square covered scheme and a deep tail of listed mixed-use stock with ground-floor Class E and residential or office above. We arrange commercial mortgages for BN1 prime retail investment along Western Road and the Churchill Square parade, North Laine independent retail and small-cap mixed-use freehold, restaurant and bar trading-business refinancing through the visitor spine, and owner-occupier professional firms buying floors of North Street, Ship Street and Pavilion Buildings stock. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Brighton City Centre, North Laine and The Lanes commercial property market",
      body: [
        "Brighton City Centre carries one of the tightest commercial stocks of any city on the South Coast. Prime retail Zone A on Churchill Square and Western Road reaches £100 to £150 per sq ft in the best units in 2026, supported by roughly 11 million visitors a year and a combined resident student population of around 37,000 between the University of Brighton and the University of Sussex. North Laine independent retail is structurally different. Narrow frontages, owner-occupier independents, a heritage-led tenant mix that has resisted national-multiple homogenisation, and a trading model built on independent character. The Lanes south of North Street runs the antique-trade and small-jewellery cluster on Brighton Place, Meeting House Lane and Ship Street, with upper-floor residential or workshop above almost every unit.",
        "Transactions are dominated by long-hold private investors and family offices on the Western Road and Churchill Square parade, owner-occupier independents and small partnerships buying their North Laine or Lanes shop, and a steady flow of restaurant, bar and cafe refinancings through North Laine and around Pavilion Gardens. The deep-volume zone for our central BN1 commercial mortgage book is the £400K to £2.5M bracket, in-line retail, upper-floor mixed-use and small mixed-use blocks. Pricing 6.5 to 8.0% pa for clean prime retail investment on Western Road, with Churchill Square strong-covenant stock at 6.0 to 7.0% and tighter secondary North Laine parade at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment.",
        "HM Land Registry residential transactions inside BN1 cluster around the Regency squares, Borough Street, Hampstead Road and Cumberland Road, with recent files including BN1 3BG Borough Street at £675,000 and BN1 5NG Hampstead Road at £1,000,000. They are not a direct commercial signal but they confirm that central Brighton continues to absorb high-value residential supply against a backdrop of structurally tight planning supply, which underwrites the ground-floor retail, restaurant and upper-floor visitor-accommodation income that most of our central BN1 commercial investment lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Brighton City Centre, North Laine and The Lanes (BN1)",
      body:
        "Two live Brighton and Hove City Council Idox files anchor the current city-centre commercial mortgage pipeline. A North Laine independent retail unit subdivision and frontage scheme on Bond Street (Ref <strong>BH2026/01045/FUL</strong>) covers retention of the heritage independent retail character with extended F&B above, the canonical North Laine mixed-use repositioning we refinance against on 65 to 70% LTV mixed-use mortgages once stabilised. A Churchill Square Shopping Centre tenant-mix reconfiguration (Ref <strong>BH2025/02745/FUL</strong>) covers a Hammerson-led F&B refresh and new leisure accommodation inside the scheme, asset-management capex that the institutional owner refinances against on a Grade A retail investment facility. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2026/01045/FUL",
          address: "North Laine, Bond Street, Brighton BN1 1RD",
          postcode: "BN1 1RD",
          proposal: "North Laine independent retail unit subdivision, frontage works retaining the heritage independent retail character with extended F&B above.",
        },
        {
          ref: "BH2025/02745/FUL",
          address: "Churchill Square Shopping Centre, Brighton BN1 2RG",
          postcode: "BN1 2RG",
          proposal: "Churchill Square Shopping Centre tenant mix reconfiguration, Hammerson-led F&B refresh and new leisure accommodation.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in central Brighton",
      items: [
        { label: "Churchill Square and Western Road prime retail", detail: "Zone A retail freehold on the Churchill Square parade, long-hold private investor stock.", typicalSize: "£1M to £5M facility" },
        { label: "North Laine independent retail", detail: "Narrow-frontage independent retail freehold, owner-occupier and small investor.", typicalSize: "£400K to £1.5M" },
        { label: "The Lanes antique and jewellery cluster", detail: "Heritage antique-trade and small-jewellery freehold with upper-floor residential.", typicalSize: "£400K to £1.2M" },
        { label: "North Street and Pavilion mixed-use", detail: "Ground-floor Class E retail or food with offices or apartments above.", typicalSize: "£500K to £2.5M" },
        { label: "North Laine and Pavilion F&B", detail: "Visitor-spine restaurant, bar and cafe trading-business refinance and freehold purchase.", typicalSize: "£400K to £1.8M" },
        { label: "Owner-occupier professional services", detail: "Solicitor, accountancy and creative-services practices buying small floors of 1,200 to 3,500 sq ft.", typicalSize: "£400K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Brighton City Centre, North Laine and The Lanes",
      body: 'Prime retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional services via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. North Laine and Pavilion restaurant, bar and cafe refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or repositioning stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for central Brighton retail and mixed-use freehold",
      body:
        "Deep across the BN1 core. <strong>Lloyds</strong>, <strong>NatWest</strong> (North Street commercial RM team), <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Western Road and Churchill Square parade stock and owner-occupier professional firms at 60 to 65% LTV and 6.0 to 7.0% pa. Allica Bank runs an active South Coast book and routinely tops the shortlist on North Laine independent retail and central freehold mixed-use deals where speed and relationship underwriting matter. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Cynergy Bank are active on mixed-use Regency and Victorian blocks, listed-building stock and upper-floor repositioning. <strong>LendInvest</strong> covers value-add and bridge-to-let on listed Lanes conversions. HTB, Cambridge & Counties, Paragon and Together take selected BN1 freehold investment and mixed-use deals in the £400K to £2.5M bracket. Refinancing on a stabilised secondary BN1 retail asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "mixed-use", "leisure-hospitality", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Western Road or Churchill Square freehold?",
        answer:
          "Up to 70% LTV on let prime retail. A Western Road or Churchill Square parade freehold with a strong-covenant retail or restaurant tenant prices best at 60 to 65% LTV (around 6.5 to 7.0% pa). Secondary North Laine and Lanes upper-floor stock with mixed covenants typically caps at 65 to 70%. The binding constraint is almost always ICR, not headline LTV, and many North Laine and Lanes buildings sit inside Brighton's Old Town conservation area which narrows the lender pool.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant North Laine unit?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition and re-letting, then terms out to investment mortgage post-stabilisation at 65 to 70% LTV. Active strategy on units affected by the kind of North Laine repositioning covered by the BH2026/01045/FUL application on Bond Street.',
      },
      {
        question: "What product fits a creative agency buying a North Street office floor?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank. Typical 70 to 75% LTV at 6.0 to 7.0% pa on partnership or limited-company accounts, EBITDA cover at 1.3 to 1.5x. This is the canonical central BN1 professional-services route, and Allica's relationship underwriting often beats the high street on speed for South Coast creative SMEs.",
      },
      {
        question: "Which lenders run dedicated Brighton desks?",
        answer:
          "<strong>NatWest</strong> North Street, <strong>Lloyds</strong> Commercial Banking, <strong>Barclays</strong> and <strong>Santander</strong> Commercial all maintain South Coast regional teams active on Brighton deals. Allica Bank, HTB, Cambridge & Counties and Together cover the challenger end on £400K to £2.5M central Brighton investment and mixed-use. We use those local desks for BN1 deals where local knowledge of the Old Town conservation area, the North Laine independent grain and the Churchill Square institutional pattern carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "seafront-kings-road": {
    slug: "seafront-kings-road",
    name: "Seafront and Kings Road",
    metaTitle: "Commercial Mortgages Brighton Seafront and Kings Road | Hotel Hospitality Broker, BN1 BN2",
    metaDescription:
      "Commercial mortgages for Brighton Seafront and Kings Road, BN1 BN2 hotel, B&B, restaurant and seafront leisure freehold and trading-business refinance. Hilton Metropole, Grand Hotel, Old Ship, Royal Albion. Cynergy Bank, Allied Irish, Metro Bank panel. Indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Brighton Seafront and Kings Road",
      lede:
        "The Brighton seafront runs along Kings Road and Marine Parade from the West Pier remains east through the Hilton Metropole, Grand Hotel, Old Ship Hotel and Royal Albion frontage, past Brighton Palace Pier and along Madeira Drive to Black Rock. This is the largest concentration of trading-business hotel, B&B and seafront restaurant freehold on the South Coast outside London, anchored by roughly 11 million annual visitors and a long tail of independent operators alongside the named institutional flags. We arrange commercial mortgages for hotel and B&B freehold purchase and refinance, seafront restaurant and bar trading-business deals, leisure-led mixed-use blocks along Kings Road, and the Madeira Terrace and seafront-leisure refurb-and-refinance pipeline. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Brighton Seafront and Kings Road commercial property market",
      body: [
        "The Brighton seafront is the spine of the city's hospitality economy. Roughly 11 million visitors a year, more than 5,000 hotel and B&B beds along Kings Road and Marine Parade alone, and a tenure mix that runs from large institutional flag-operated hotels through to the dense run of independent seafront B&Bs east towards Kemptown. The named institutional anchors carry the prime end: the Hilton Brighton Metropole on Kings Road, the Grand Hotel on Kings Road, the Old Ship Hotel west of the Palace Pier and the Royal Albion at the foot of Old Steine. Below that, a deep independent-operator market funds through trading-business mortgage on operator EBITDA, barrelage and accommodation revenue rather than bricks-and-mortar comparison.",
        "Hotel investment yields along the Brighton seafront sit at 7 to 9% in 2026 depending on operator covenant, lease structure and trading. Trading-business hotel and B&B freehold typically funds at 60 to 70% LTV on operator EBITDA cover at 1.4 to 1.8x. Pricing currently 7.0 to 9.0% pa for clean trading-business hotel finance, with strong-covenant flag-operated stock at the keenest end and independent B&B and small hotel freehold at the wider end. Seafront restaurant and bar trading-business is structurally similar, with EBITDA-cover testing, lease length and operator track record driving the LTV and rate outcome. Refinancing volumes through 2025 and 2026 have been heavy as five-year fixes from the post-Covid hospitality recovery cycle have matured.",
        "HM Land Registry residential transactions along the seafront cluster around the Regency Square and Brunswick Square frontages and the Marine Parade terraces, with recent BN1 prints including Borough Street BN1 3BG at £675,000 and Cumberland Road BN1 6SL at £810,000. They are not a direct commercial signal but they confirm that seafront-adjacent residential continues to absorb high-value supply, which underwrites the demand-side trading-business case for hotel and seafront F&B income in BN1 and BN2.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity along the Brighton Seafront and Kings Road (BN1 / BN2)",
      body:
        "Two live Brighton and Hove City Council Idox files anchor the current seafront hospitality mortgage pipeline. A Kings Road seafront hotel refurbishment (Ref <strong>BH2026/01102/COU</strong>) covers retention of independent seafront hotel use with new ground-floor F&B accommodation, the canonical Kings Road independent hotel repositioning that funds through trading-business mortgage on operator EBITDA at 60 to 70% LTV post-refurb. The Madeira Terrace heritage seafront restoration Phase 2 (Ref <strong>BH2026/00712/FUL</strong>) covers leisure and F&B accommodation in restored Victorian seafront arches along Madeira Drive, a multi-occupier leisure-led asset that refinances against on a seafront leisure investment facility once tenancies are bedded in. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.",
      refs: [
        {
          ref: "BH2026/01102/COU",
          address: "Kings Road, Brighton BN1 2GR",
          postcode: "BN1 2GR",
          proposal: "Kings Road seafront hotel refurbishment, retention of independent seafront hotel use with new ground-floor F&B accommodation.",
        },
        {
          ref: "BH2026/00712/FUL",
          address: "Madeira Terrace, Madeira Drive, Brighton BN2 1PS",
          postcode: "BN2 1PS",
          proposal: "Madeira Terrace heritage seafront restoration Phase 2, leisure and F&B accommodation in restored Victorian seafront arches.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types along the Brighton seafront",
      items: [
        { label: "Flag-operated seafront hotel", detail: "Hilton Metropole, Grand Hotel and similar flag-operated hotel freehold with operator covenant.", typicalSize: "£3M to £15M+ facility" },
        { label: "Independent seafront hotel", detail: "Old Ship, Royal Albion and the independent Kings Road and Marine Parade hotel stock.", typicalSize: "£1M to £6M" },
        { label: "Seafront B&B and guesthouse", detail: "Independent owner-operator B&B and small hotel freehold east towards Kemptown.", typicalSize: "£400K to £1.5M" },
        { label: "Seafront restaurant and bar", detail: "Kings Road and Marine Parade restaurant, bar and seafood operator freehold.", typicalSize: "£500K to £2M" },
        { label: "Madeira Terrace and arch leisure", detail: "Leisure-led restored seafront arch and Madeira Drive trading-business stock.", typicalSize: "£400K to £1.5M" },
        { label: "Mixed-use Kings Road frontage", detail: "Ground-floor F&B with hotel or residential above.", typicalSize: "£800K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active along the Brighton Seafront and Kings Road",
      body: 'Hotel, B&B and seafront restaurant trading-business mortgage via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. Multi-let seafront leisure investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier hotel and restaurant via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Refurb and repositioning of independent seafront hotel stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>, exit onto stabilised trading-business mortgage post-trading-record. Refinancing maturing hospitality facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton seafront hotel, B&B and seafront F&B",
      body:
        "Hospitality is the deepest single sector along the Brighton seafront. <strong>Cynergy Bank</strong> runs one of the most active UK hospitality books and sits at the top of our shortlist on Kings Road and Marine Parade hotel and B&B freehold, prime independent stock at 60 to 70% LTV and 7.0 to 8.0% pa on EBITDA cover at 1.5 to 1.8x. Allica Bank is active across South Coast hospitality on small hotel and seafront F&B owner-occupier freehold. HTB covers selected hotel investment and mixed-use seafront stock. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> cover seafront mixed-use and upper-floor repositioning. <strong>LendInvest</strong> covers refurb and bridge-to-let where the asset is being repositioned. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest flag-operated hotel stock at 60 to 65% LTV and 6.5 to 7.5% pa. Allied Irish Bank UK, Metro Bank, Cambridge & Counties, Paragon and Together take selected hospitality deals where the operator track record and covenant fit each lender's policy. Pricing for trading-business hotel and B&B refinance currently sits 7.0 to 9.0% pa at 60 to 70% LTV across the operator-EBITDA-led product. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "hotel-bnb", "pub-restaurant", "retail", "mixed-use"],
    faqs: [
      {
        question: "What LTV is achievable on a Brighton seafront hotel?",
        answer:
          "Up to 70% LTV on trading hotel freehold with two-to-three years of consistent operator accounts. Flag-operated stock with a strong covenant lease can reach 70%. Independent seafront hotel and B&B typically funds at 60 to 70% LTV with Cynergy Bank, Allica Bank and Allied Irish Bank UK as the deepest lender shortlist. EBITDA cover at 1.5 to 1.8x is the binding constraint, not headline LTV.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant or repositioning Kings Road hotel?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month refurbishment bridge funds acquisition, refurbishment and the first trading season, then terms out onto a trading-business mortgage at 60 to 70% LTV once 12 months of trading accounts are in place. Active strategy on the kind of independent hotel repositioning covered by the BH2026/01102/COU Kings Road file.',
      },
      {
        question: "What product fits a Madeira Terrace seafront arch operator?",
        answer:
          "Trading-business mortgage on operator EBITDA at 60 to 70% LTV. The BH2026/00712/FUL Madeira Terrace restoration creates multiple leisure-led arch units, each one is a fundable trading-business candidate once an operator with two years of accounts is in place. Cynergy Bank and Allica Bank are the most active lenders for this profile in the £400K to £1.5M bracket.",
      },
      {
        question: "Which lenders run dedicated South Coast hospitality desks?",
        answer:
          "<strong>Cynergy Bank</strong>, Allica Bank and HTB all maintain dedicated hospitality programmes that take Brighton seafront hotel and B&B deals routinely. Allied Irish Bank UK, Metro Bank and Cambridge & Counties cover the next tier. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> Commercial all maintain South Coast regional teams active on flag-operated hotel deals. We use those specialist desks for BN1 and BN2 seafront deals where the operator-EBITDA underwriting model carries the deal. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "kemptown": {
    slug: "kemptown",
    name: "Kemptown",
    metaTitle: "Commercial Mortgages Kemptown Brighton | Specialist Broker, BN2",
    metaDescription:
      "Commercial mortgages for Kemptown, Brighton (BN2), St James Street independent F&B, mixed-use semi-commercial, HMO blocks, small-cap visitor accommodation. Specialist semi-commercial and HMO lender panel including Paragon, Together, Cynergy Bank.",
    hero: {
      h1: "Commercial Mortgages Kemptown",
      lede:
        "Kemptown sits immediately east of the Old Steine in BN2, threading along St James Street and Edward Street out towards the Royal Sussex County Hospital and Madeira Drive. The trading character is independent F&B, LGBTQ+ small-bar and cafe cluster, semi-commercial shop-with-flat stock above the parade, and a dense HMO and visitor-accommodation overlay reflecting the proximity of the seafront and the hospital. The local shorthand is the Camden of Brighton, an independent-led, owner-operator-heavy trading district that does not look like any other South Coast quarter. We arrange commercial mortgages for semi-commercial shop-and-flat freehold, independent F&B trading-business refinance, HMO block finance, small-cap mixed-use and the visitor-accommodation conversions that thread through the Kemptown grain. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Kemptown commercial property market",
      body: [
        "Kemptown sits in BN2 east of the Old Steine and runs down St James Street, Upper St James Street and Edward Street towards the Royal Sussex County Hospital. The district carries one of the most distinctive independent commercial mixes on the South Coast, a parade of independent F&B operators, small specialist retail, the long-established LGBTQ+ small-bar cluster and a dense layer of semi-commercial shop-with-flat stock above the trading frontage. Hospital-adjacent ancillary commercial threads east towards Eastern Road, and the seafront-adjacent visitor-accommodation market overlays the residential terraces between Edward Street and Marine Parade.",
        "From a commercial mortgage angle, Kemptown splits four ways. Independent F&B trading-business freehold along St James Street and the surrounding lanes, semi-commercial shop-and-flat freehold mainly on the parade frontages, HMO blocks reflecting the high renter and student-overflow density in BN2, and small-cap mixed-use blocks where ground-floor F&B sits beneath upper-floor short-let visitor accommodation. Each carries a distinct lender pool. Semi-commercial is the deepest in volume, <strong>InterBay Commercial</strong>, Together, <strong>Shawbrook</strong> and Aldermore are all active to 75% LTV at 7.0 to 8.5% pa on blended ICR. HMO blocks fund through Paragon, Together, Foundation Home Loans and Cambridge & Counties. Independent F&B trading-business via Cynergy Bank, Allica Bank and specialist licensed-trade desks.",
        "HM Land Registry residential transactions inside BN2 cluster around the Kemptown terraces, with recent files including BN2 1FD Clarendon Terrace at £380,000, BN2 9YG Freshfield Road at £450,000 and BN2 1GD Arundel Place at £495,000. They confirm a healthy renter and owner-occupier base in BN2 that underwrites the AST income and short-let visitor-accommodation revenue beneath the semi-commercial and mixed-use stack. Stamp duty applies at the commercial rates on Kemptown commercial freehold purchase, semi-commercial purchase applies the mixed-use SDLT scale subject to usual structuring.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Kemptown (BN2)",
      body:
        "Two live Brighton and Hove City Council Idox files anchor the current Kemptown commercial mortgage pipeline. The Kemptown St James Street independent F&B unit reconfiguration (Ref <strong>BH2026/00645/FUL</strong>) covers change of use of upper-floor residential to short-let visitor accommodation alongside ground-floor F&B reconfiguration, the canonical Kemptown mixed-use repositioning we refinance against on a semi-commercial or short-let visitor-accommodation facility once the operator track record is established. The Lewes Road HMO conversion (Ref <strong>BH2025/02212/COU</strong>) covers conversion of a large family dwelling to licensed HMO (C4) accommodation, common across the East Brighton student belt that overlaps the northern Kemptown catchment and feeds the BN2 HMO refinance market. Stamp duty applies on commercial freehold purchase at the commercial rates, HMO acquisitions follow the residential SDLT scale subject to usual structuring.",
      refs: [
        {
          ref: "BH2026/00645/FUL",
          address: "Kemptown, St James Street, Brighton BN2 1RP",
          postcode: "BN2 1RP",
          proposal: "Kemptown St James Street independent F&B unit reconfiguration, change of use of upper-floor residential to short-let visitor accommodation.",
        },
        {
          ref: "BH2025/02212/COU",
          address: "Lewes Road, Brighton BN2 3HQ",
          postcode: "BN2 3HQ",
          proposal: "Lewes Road conversion of large family dwelling to licensed HMO (C4) accommodation, common in the East Brighton student belt serving University of Brighton.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Kemptown",
      items: [
        { label: "St James Street independent F&B", detail: "Kemptown independent restaurant, bar and cafe trading-business freehold and refinance.", typicalSize: "£400K to £1.5M facility" },
        { label: "Semi-commercial shop and flat", detail: "Classic Kemptown shop-with-flat-above freehold on the trading parade.", typicalSize: "£350K to £900K" },
        { label: "HMO blocks", detail: "Licensed HMO (C4 and sui generis) blocks in BN2, hospital and student adjacency.", typicalSize: "£400K to £1.5M" },
        { label: "Small-cap mixed-use", detail: "Ground-floor F&B or retail with upper-floor short-let visitor accommodation.", typicalSize: "£500K to £1.8M" },
        { label: "Independent retail and specialist", detail: "Specialist retail freehold along the Kemptown trading frontage.", typicalSize: "£300K to £800K" },
        { label: "Hospital-adjacent ancillary", detail: "Eastern Road and Sussex County Hospital adjacency, medical and consultancy commercial.", typicalSize: "£400K to £1.2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Kemptown",
      body: 'Semi-commercial routes via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Independent F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. HMO block finance via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block</a>. Investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Refurb and short-let visitor-accommodation repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing semi-commercial and HMO five-year fixes is the highest-volume product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Kemptown semi-commercial, HMO and independent F&B",
      body:
        "Deep across the Kemptown core. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Together are the most active semi-commercial lenders along St James Street and Edward Street, quoting to 75% LTV at 7.0 to 8.5% pa on blended ICR around 145%. Allica Bank covers owner-occupier independent F&B and small mixed-use freehold competitively. HTB and <strong>Cynergy Bank</strong> take selected Kemptown trading-business and licensed-trade deals. <strong>LendInvest</strong> covers refurbishment and short-let visitor-accommodation repositioning bridges. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> sit on the mainstream end for owner-occupier and standard semi-commercial. Paragon, Together, Foundation Home Loans and Cambridge & Counties dominate the BN2 HMO block market, each with different room-count thresholds and licensing comfort. Cynergy Bank, Allied Irish Bank UK and specialist licensed-trade desks pick up the independent F&B trading-business profile. Pricing for clean semi-commercial currently 7.0 to 8.5% pa at 70 to 75% LTV, HMO 7.0 to 8.5% pa at 70 to 75% LTV, independent F&B trading-business 7.5 to 9.0% pa at 60 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["semi-commercial", "hmo-block", "pub-restaurant", "retail", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on Kemptown semi-commercial?",
        answer:
          "Up to 75% LTV via InterBay Commercial, Together, Shawbrook or Aldermore. Blended ICR around 145% on combined commercial rent and AST income. Stamp duty applies at the mixed-use SDLT rates. The deep-volume bracket is £350K to £900K facility on classic St James Street and Edward Street parade frontage.",
      },
      {
        question: "Can we fund a new HMO conversion in BN2?",
        answer:
          "Brighton and Hove operates an additional and selective HMO licensing scheme, every new HMO conversion needs licensing, and Article 4 directions affect parts of the BN2 student belt. Existing licensed HMOs refinance freely. The BH2025/02212/COU Lewes Road file is a current example of the C3 to C4 conversion archetype. Paragon, Together and Foundation Home Loans cover this profile at 70 to 75% LTV.",
      },
      {
        question: "What about a Kemptown bar or independent restaurant mortgage?",
        answer:
          'Routes through <a href="/services/trading-business-mortgage">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. <strong>Cynergy Bank</strong>, Allica Bank and Allied Irish Bank UK are most active. Typical 60 to 70% LTV, 7.5 to 9.0% pa. The BH2026/00645/FUL St James Street file is a current trading-business candidate where the ground-floor F&B and upper-floor short-let visitor accommodation refinance together.',
      },
      {
        question: "Which lenders run dedicated South Coast HMO and semi-commercial desks?",
        answer:
          "Paragon, Together and InterBay Commercial all maintain dedicated semi-commercial and HMO programmes actively quoting on Brighton BN2 stock. Allica Bank, HTB and Cambridge & Counties cover the next tier on owner-occupier and limited-company small landlord profiles. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "hove-central": {
    slug: "hove-central",
    name: "Hove Central and Western Road",
    metaTitle: "Commercial Mortgages Hove Central and Western Road | Specialist Broker, BN3",
    metaDescription:
      "Commercial mortgages for Hove Central and Western Road, BN3 retail spine, George Street independent retail, Norton Road professional-services office, Amex House and Legal and General adjacency. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Hove Central and Western Road",
      lede:
        "Hove Central runs from the Brighton boundary at Boundary Road westward along Western Road through Palmeira Square and the Hove Town Hall area, with the George Street independent retail spine running parallel south of the Western Road parade. The fabric is Regency stucco terrace, Victorian retail parade with upper-floor offices or residential, the Hove Town Hall civic block around Norton Road, and the corporate-anchor office cluster around Amex House (American Express) and the adjacent Legal and General Hove office. We arrange commercial mortgages for BN3 prime retail investment along Western Road and George Street, professional-services owner-occupier and investment around Norton Road and the Hove Town Hall area, mixed-use upper-floor repositioning along the Western Road parade, and the corporate-adjacent office investment that benefits from the Amex and L&G covenant halo. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Hove Central and Western Road commercial property market",
      body: [
        "Hove Central anchors the BN3 commercial market. The Western Road retail parade runs the length of Hove from the Brighton boundary at Boundary Road through Palmeira Square out towards the Hove Lawns frontage, with a deep parade-retail and upper-floor mixed-use fabric. George Street runs the independent retail and small-cafe spine just south, structurally different in tenant mix from Western Road and the Brighton North Laine, with a higher proportion of owner-operator independents and a long-established professional-services overlay (estate agents, accountants and design practices) on the upper floors. Norton Road and the Hove Town Hall area anchor the BN3 professional-services office cluster, smaller in floorplate than central Brighton but with steady demand from local-authority-adjacent firms.",
        "The corporate-anchor halo matters. American Express runs its UK headquarters at Amex House on Edward Street and Carlton Hill on the BN1 and BN3 boundary, with several thousand staff across multiple Hove and central buildings. Legal and General runs a substantial Hove office presence covering insurance and pensions back-office work. Both anchors underwrite the BN3 office and ancillary retail demand more durably than would otherwise be the case for a town of Hove's residential profile, and the keenest BN3 office investment pricing tracks the strength of those covenants and their occupational footprint. The deep-volume zone for our central BN3 commercial mortgage book is the £400K to £2.5M bracket, retail parade investment, upper-floor mixed-use and small professional-services office. Pricing 6.5 to 8.0% pa for clean retail and office investment, with corporate-adjacent strong-covenant office stock at 6.0 to 7.0% and tighter secondary George Street parade at 7.5 to 8.5%.",
        "HM Land Registry residential transactions inside BN3 cluster around the Brunswick and Goldstone postcodes, with recent files including BN3 5FA Westbourne Street at £695,000 and BN3 8PP Northease Drive at £665,000. They are not a direct commercial signal but they confirm that central Hove continues to absorb high-value residential supply that underwrites the demand-side case for Western Road and George Street retail, upper-floor office demand and short-let visitor-accommodation overlay along the seafront-adjacent BN3 frontage.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Hove Central and Western Road (BN3)",
      body:
        "Two live Brighton and Hove City Council Idox files anchor the current Hove Central commercial mortgage pipeline. The Western Road Hove retail parade refurbishment (Ref <strong>BH2026/00802/FUL</strong>) covers frontage works and change of use of upper floors to managed serviced offices, with retained ground-floor retail and F&B, the canonical Western Road mixed-use repositioning that we refinance against on a mixed-use facility at 65 to 70% LTV once stabilised. The Norton Road Hove Town Hall area professional-services office scheme (Ref <strong>BH2025/01012/FUL</strong>) covers Grade B office refurbishment serving the Hove professional-firm cluster, the canonical BN3 owner-occupier and small-investor office archetype. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2026/00802/FUL",
          address: "Western Road, Hove BN3 1AS",
          postcode: "BN3 1AS",
          proposal: "Western Road Hove retail parade refurbishment, frontage works and change of use of upper floors to managed serviced offices with retained ground-floor retail and F&B.",
        },
        {
          ref: "BH2025/01012/FUL",
          address: "Norton Road, Hove BN3 4AH",
          postcode: "BN3 4AH",
          proposal: "Norton Road Hove Town Hall area professional services office scheme, Grade B office refurbishment serving Hove professional firm cluster.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in central Hove",
      items: [
        { label: "Western Road parade retail", detail: "Zone A retail freehold along the Hove Western Road parade.", typicalSize: "£500K to £2.5M facility" },
        { label: "George Street independent retail", detail: "Narrow-frontage independent retail and cafe freehold on the Hove independent spine.", typicalSize: "£400K to £1.2M" },
        { label: "Norton Road and Hove Town Hall office", detail: "BN3 professional-services Grade B office investment and owner-occupier.", typicalSize: "£400K to £1.8M" },
        { label: "Mixed-use upper-floor block", detail: "Ground-floor retail or F&B with offices or short-let visitor accommodation above.", typicalSize: "£500K to £2M" },
        { label: "Amex and L&G adjacent office", detail: "Corporate-anchor adjacent office investment benefiting from the BN3 corporate covenant halo.", typicalSize: "£800K to £4M" },
        { label: "Owner-occupier professional services", detail: "Solicitor, accountancy, design and creative-services practices buying small floors.", typicalSize: "£350K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Hove Central and Western Road",
      body: 'Retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional services via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Semi-commercial mixed-use along Western Road and George Street via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refurb and repositioning of upper-floor stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for central Hove retail, office and mixed-use",
      body:
        "Deep across the BN3 core. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Western Road retail and Amex and L&G adjacent office stock at 60 to 65% LTV and 6.0 to 7.0% pa, with the strongest covenants attracting the keenest pricing on the South Coast regional desks. Allica Bank runs an active South Coast book and routinely tops the shortlist on Norton Road professional-services office, George Street independent retail and owner-occupier limited-company freehold deals where speed and relationship underwriting matter. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Cynergy Bank are active on mixed-use Western Road and George Street upper-floor repositioning, including the kind of serviced-office and short-let visitor-accommodation overlay covered by the BH2026/00802/FUL Western Road file. HTB and Cambridge & Counties cover £400K to £2.5M investment and mixed-use. <strong>LendInvest</strong> covers refurb and bridge-to-let on listed Regency stock along Palmeira Square. Paragon and Together take selected semi-commercial freehold deals. Pricing for clean BN3 retail investment currently 6.5 to 7.5% pa at 65 to 70% LTV, professional-services office 6.5 to 8.0% pa at 65 to 75% LTV, secondary parade and George Street independent retail 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "mixed-use", "semi-commercial", "leisure-hospitality", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Western Road retail investment?",
        answer:
          "Up to 70% LTV on let prime retail along the Western Road parade. A Western Road frontage with a strong-covenant national-multiple retail tenant prices best at 60 to 65% LTV (around 6.5 to 7.0% pa). Secondary upper-floor mixed-use stock typically caps at 65 to 70%. The binding constraint is almost always ICR, not headline LTV, and the corporate-anchor halo from Amex and L&G can lift the rate-LTV outcome on adjacent BN3 office stock.",
      },
      {
        question: "Can we get a commercial mortgage on a Norton Road professional-services office?",
        answer:
          "Yes, this is canonical BN3 owner-occupier territory. Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank at 70 to 75% LTV and 6.0 to 7.0% pa on partnership or limited-company accounts, EBITDA cover at 1.3 to 1.5x. The BH2025/01012/FUL Norton Road file is a current example of the refurb-then-let or refurb-then-occupy archetype.",
      },
      {
        question: "What product fits a George Street independent retailer buying their shop?",
        answer:
          "Owner-occupier or semi-commercial mortgage depending on whether the upper floor is residential or office. Allica Bank for owner-occupier limited-company, <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> or Together for semi-commercial with AST income above. Typical 70 to 75% LTV at 7.0 to 8.0% pa on small George Street independent retail freehold in the £400K to £1.2M bracket.",
      },
      {
        question: "Which lenders run dedicated South Coast and Brighton-Hove desks?",
        answer:
          "<strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> Commercial all maintain South Coast regional teams active on Hove deals, with North Street and Hove-adjacent commercial relationship managers. Allica Bank, HTB, Cambridge & Counties and Together cover the challenger end on £400K to £2.5M BN3 investment and owner-occupier. We use those local desks for BN3 deals where local knowledge of the Hove conservation areas, the Western Road retail grain and the Amex and L&G corporate covenant halo carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "preston-park-preston-barracks": {
    slug: "preston-park-preston-barracks",
    name: "Preston Park and Preston Barracks",
    metaTitle: "Commercial Mortgages Preston Park and Preston Barracks Brighton | Specialist Broker, BN1 BN2",
    metaDescription:
      "Commercial mortgages for Preston Park and Preston Barracks, Brighton (BN1 BN2), Plus X Innovation Hub creative office, Wired Sussex cluster, Preston Park Avenue managed workspace. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Preston Park and Preston Barracks",
      lede:
        "Preston Park (BN1) and Preston Barracks (BN2) anchor the Brighton creative-industries cluster. Preston Barracks on Lewes Road, delivered in partnership with the University of Brighton, hosts the Plus X Innovation Hub providing managed workspace and creative-industries lab and studio accommodation to early-stage and scale-up Brighton SMEs. Preston Park Avenue and the surrounding period commercial blocks carry the established creative-services office and small-managed-workspace market. The wider district is the largest single concentration of digital, creative and tech SMEs on the South Coast, with the Wired Sussex network underwriting much of the occupational demand. We arrange commercial mortgages for managed-workspace investment, creative-office freehold and owner-occupier, Plus X-adjacent SME freehold, and the period-commercial-to-managed-office conversion archetype that defines the Preston Park Avenue spine. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Preston Park and Preston Barracks commercial property market",
      body: [
        "Preston Park and Preston Barracks together carry the deepest creative-industries commercial cluster on the South Coast outside London. The Plus X Innovation Hub at Preston Barracks on Lewes Road, delivered in a partnership with the University of Brighton, provides managed workspace, creative-industries lab and studio space and growth support to early-stage SMEs and scale-ups. Wired Sussex, the long-running creative and digital network covering Brighton and Sussex, anchors much of the occupational demand and provides the secondary signal that lenders look at when underwriting BN1 and BN2 creative-office freehold investment. The period-commercial blocks on Preston Park Avenue, the surrounding side streets and the parade fringe along London Road carry the established creative-services office market, conversions of period commercial and large-house buildings to managed flexible workspace, design studios and creative-services partnerships.",
        "From a commercial mortgage angle, the district splits three ways. Managed-workspace investment and partnership-funded creative-industries lab and studio space around Preston Barracks, period-commercial creative-office conversion and refurbishment along Preston Park Avenue, and the owner-occupier creative SME buying their own freehold on the side streets. Each carries a different lender pool. Managed-workspace investment with a credible operator runs at 65 to 70% LTV at 7.0 to 8.0% pa. Period-commercial creative office routes through mainstream investment desks at 65 to 70% LTV. Owner-occupier creative SME freehold is one of the deepest Allica Bank and HTB lending profiles on the South Coast, typical 70 to 75% LTV at 6.5 to 7.5% pa on EBITDA cover at 1.3 to 1.5x. The deep-volume zone is £400K to £2M facility on Preston Park Avenue creative office and £600K to £3M on Preston Barracks managed-workspace stock.",
        "HM Land Registry residential transactions inside the BN1 Preston Park catchment cluster around the Preston Park Avenue terraces and the surrounding period stock, with recent files including Hampstead Road BN1 5NG at £1,000,000 and Vale Avenue BN1 8UA at £667,500. They are not a direct commercial signal but they confirm that the BN1 inner-north residential market continues to absorb high-value supply, which underwrites the creative-SME catchment that the Preston Park Avenue and Preston Barracks commercial freehold investment lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity around Preston Park and Preston Barracks (BN1 / BN2)",
      body:
        "Two live Brighton and Hove City Council Idox files anchor the current Preston Park and Preston Barracks creative-office mortgage pipeline. The Preston Barracks Plus X Innovation Hub expansion (Ref <strong>BH2026/01198/FUL</strong>) covers additional managed workspace and creative-industries lab and studio accommodation supporting the University of Brighton Plus X partnership, the canonical Preston Barracks managed-workspace investment archetype that we refinance against once tenancies are bedded in. The Preston Park Avenue creative office scheme (Ref <strong>BH2025/02078/FUL</strong>) covers conversion of a period commercial building to managed flexible workspace serving Brighton creative SMEs, the typical BN1 period-conversion archetype that funds through mainstream creative-office investment desks at 65 to 70% LTV. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2026/01198/FUL",
          address: "Preston Barracks, Lewes Road, Brighton BN2 4GJ",
          postcode: "BN2 4GJ",
          proposal: "Preston Barracks Plus X Innovation Hub expansion, additional managed workspace and creative-industries lab and studio accommodation supporting the University of Brighton Plus X partnership.",
        },
        {
          ref: "BH2025/02078/FUL",
          address: "Preston Park Avenue, Brighton BN1 6HG",
          postcode: "BN1 6HG",
          proposal: "Preston Park Avenue creative office scheme, conversion of period commercial building to managed flexible workspace serving Brighton creative SMEs.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Preston Park and Preston Barracks",
      items: [
        { label: "Plus X managed workspace", detail: "Preston Barracks managed-workspace and creative-industries lab and studio investment.", typicalSize: "£1.5M to £6M facility" },
        { label: "Preston Park Avenue period creative office", detail: "Period-commercial-to-managed-flexible-workspace conversion freehold.", typicalSize: "£500K to £2.5M" },
        { label: "Owner-occupier creative SME", detail: "Design, digital, tech and creative-services SME buying their own freehold.", typicalSize: "£400K to £1.5M" },
        { label: "Wired Sussex cluster small office", detail: "Small-cap creative-services office freehold within the Wired Sussex catchment.", typicalSize: "£350K to £1.2M" },
        { label: "Mixed-use creative block", detail: "Ground-floor creative-services or retail with managed workspace above.", typicalSize: "£500K to £2M" },
        { label: "PBSA-adjacent mixed-use", detail: "Lewes Road and London Road fringe mixed-use with student-adjacent retail.", typicalSize: "£500K to £2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Preston Park and Preston Barracks",
      body: 'Managed-workspace and creative-office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier creative SME freehold via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Period-commercial-to-managed-workspace conversion routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> on the refurb leg, then terms out to stabilised investment mortgage. Mixed-use semi-commercial overlap via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Preston Park and Preston Barracks creative office and managed workspace",
      body:
        "Deep for owner-occupier creative SME and Preston Park Avenue period-commercial investment, narrower for the largest Plus X managed-workspace stock. Allica Bank sits at the top of the shortlist on owner-occupier creative SME freehold and small managed-workspace investment, quoting 70 to 75% LTV at 6.5 to 7.5% pa on EBITDA cover at 1.3 to 1.5x. HTB takes selected creative-office investment and mixed-use Preston Park Avenue stock. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest let creative-office assets and on professional-services SME owner-occupier where the firm has a credible covenant. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> cover the period-commercial-to-managed-workspace conversion archetype, including the kind of refurb-then-let scheme covered by the BH2025/02078/FUL Preston Park Avenue file. <strong>LendInvest</strong> covers refurbishment bridges on period-commercial conversion. Cynergy Bank, Cambridge & Counties, Paragon and Together take selected mixed-use and semi-commercial deals along the Lewes Road fringe. Plus X-style managed-workspace investment at the £1.5M plus end attracts a narrower lender pool, OakNorth-tier desks and Cambridge & Counties on selected covenant-backed schemes. Pricing for clean creative-office investment currently 7.0 to 8.0% pa at 65 to 70% LTV, owner-occupier creative SME 6.5 to 7.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "mixed-use", "retail", "semi-commercial", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on Plus X-style managed workspace investment?",
        answer:
          "Up to 70% LTV on let managed-workspace stock with a credible operator and 12 to 24 months of bedded-in tenancies. The largest Preston Barracks Plus X-style schemes attract a narrower lender pool, OakNorth-tier desks and Cambridge & Counties at the £1.5M plus end. Smaller managed-workspace investment along Preston Park Avenue prices through Allica Bank, HTB and Shawbrook at 65 to 70% LTV and 7.0 to 8.0% pa.",
      },
      {
        question: "Can we get a commercial mortgage on a Preston Park Avenue period-commercial conversion?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month refurbishment bridge funds acquisition, conversion to managed flexible workspace and initial letting, then terms out to stabilised investment mortgage at 65 to 70% LTV once tenancies are bedded in. Active strategy on the kind of period-commercial-to-managed-workspace repositioning covered by the BH2025/02078/FUL Preston Park Avenue file.',
      },
      {
        question: "What product fits a creative SME buying its own Preston Park Avenue freehold?",
        answer:
          "Owner-occupier commercial mortgage with Allica Bank, HTB, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> or <strong>Santander</strong>. Typical 70 to 75% LTV at 6.5 to 7.5% pa on limited-company accounts, EBITDA cover at 1.3 to 1.5x. This is the canonical Preston Park Avenue and side-street creative-SME route, and Allica's relationship underwriting often beats the high street on speed for South Coast creative-services firms.",
      },
      {
        question: "Which lenders run dedicated creative-office and managed-workspace desks?",
        answer:
          "Allica Bank, HTB, <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> all run creative-office and managed-workspace investment programmes that take Brighton Preston Park Avenue and Preston Barracks-adjacent stock routinely. Cynergy Bank, Cambridge & Counties and Together cover the next tier. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> Commercial maintain South Coast regional teams active on owner-occupier creative-SME deals. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "seven-dials": {
    slug: "seven-dials",
    name: "Seven Dials",
    metaTitle: "Commercial Mortgages Seven Dials Brighton | Specialist Broker, BN1",
    metaDescription:
      "Commercial mortgages for Seven Dials, Brighton (BN1), F&B and independent retail cluster around Goldsmid Road and Dyke Road. Specialist semi-commercial and trading-business lender panel. 90+ lender panel.",
    hero: {
      h1: "Commercial Mortgages Seven Dials",
      lede:
        "Seven Dials sits in BN1 at the junction of Goldsmid Road, Dyke Road, Vernon Terrace, Buckingham Place and Chatham Place, roughly half a mile inland from Brighton Station. The character is a tight independent-led F&B and small specialist retail cluster sat among Regency and Victorian residential, with strong walkability to both Brighton Station and the Western Road parade. The trading mix is one of the most distinctive in BN1, independent restaurants and cafes, owner-operator wine merchants and food retail, semi-commercial shop-and-flat freehold, and a small but active visitor-accommodation overlay reflecting station-proximate short-let demand. We arrange commercial mortgages for independent F&B trading-business freehold around the Seven Dials junction, semi-commercial shop-with-flat freehold along Goldsmid Road and the surrounding parade, and small-cap mixed-use blocks where ground-floor F&B sits beneath upper-floor residential or short-let accommodation. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Seven Dials commercial property market",
      body: [
        "Seven Dials is one of the most distinctive small commercial clusters in central Brighton. The seven-road junction at the top of Dyke Road brings together a compact F&B and specialist independent retail offer, with the trading frontage running west along Goldsmid Road and east towards Chatham Place. The character is independent owner-operator, narrow frontages, and an unusual concentration of food-led trading-business freehold relative to floorspace, including independent restaurants, neighbourhood cafes, wine merchants and specialist food retailers. Walkability to both Brighton Station and the Western Road retail spine underwrites footfall and drives BN1 inner-north commercial demand more durably than would be typical for a non-central cluster of this size.",
        "From a commercial mortgage angle, Seven Dials splits three ways. Independent F&B trading-business freehold around the junction and along Goldsmid Road, semi-commercial shop-with-flat freehold along the trading parade, and small-cap mixed-use blocks where ground-floor F&B or specialist retail sits beneath upper-floor residential or short-let visitor accommodation. Each carries its own lender pool. Semi-commercial is the deepest sub-market by volume, <strong>InterBay Commercial</strong>, Together and <strong>Shawbrook</strong> are all active at 70 to 75% LTV at 7.0 to 8.0% pa on blended ICR. Independent F&B trading-business routes through <strong>Cynergy Bank</strong>, Allica Bank and Allied Irish Bank UK on operator EBITDA, barrelage and accommodation revenue where relevant. Pricing currently 7.0 to 9.0% pa across the trading-business product depending on operator track record and lease structure.",
        "HM Land Registry residential transactions inside the BN1 Seven Dials catchment cluster around Borough Street, Vine Place and the surrounding Regency-and-Victorian residential stock, with recent files including BN1 3BG Borough Street at £675,000. They are not a direct commercial signal but they confirm that the BN1 inner-north residential market continues to absorb high-value supply, which underwrites the demand-side case for the F&B and specialist retail income that most of our Seven Dials commercial mortgage lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Seven Dials (BN1)",
      body:
        "Two live Brighton and Hove City Council Idox files anchor the current Seven Dials commercial mortgage pipeline. The Seven Dials Goldsmid Road F&B change of use (Ref <strong>BH2025/02892/COU</strong>) covers change of use of independent retail to F&B with rear extension and outdoor seating area, the canonical Seven Dials food-led trading-business archetype that we fund through trading-business mortgage on operator EBITDA at 60 to 70% LTV. The North Laine Trafalgar Street independent F&B file (Ref <strong>BH2025/01278/COU</strong>) shows the same retail-to-dine-in archetype playing out on the adjacent BN1 inner-north fabric, an illustrative comparable for the Seven Dials cluster on lender shortlist and pricing. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.",
      refs: [
        {
          ref: "BH2025/02892/COU",
          address: "Seven Dials, Goldsmid Road, Brighton BN1 5BP",
          postcode: "BN1 5BP",
          proposal: "Seven Dials change of use of independent retail to F&B with rear extension and outdoor seating area.",
        },
        {
          ref: "BH2025/01278/COU",
          address: "Trafalgar Street, Brighton BN1 4EQ",
          postcode: "BN1 4EQ",
          proposal: "North Laine Trafalgar Street independent F&B unit change of use from retail to dine-in with retained heritage frontage, illustrative comparable for the Seven Dials BN1 F&B archetype.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Seven Dials",
      items: [
        { label: "Independent F&B trading-business", detail: "Goldsmid Road and Dyke Road independent restaurant, cafe and food retail trading-business freehold.", typicalSize: "£400K to £1.5M facility" },
        { label: "Semi-commercial shop and flat", detail: "Classic Seven Dials shop-with-flat-above freehold on the trading parade.", typicalSize: "£350K to £900K" },
        { label: "Wine merchant and specialist food retail", detail: "Owner-operator wine, deli, butcher and specialist food retail freehold.", typicalSize: "£300K to £800K" },
        { label: "Small-cap mixed-use block", detail: "Ground-floor F&B or specialist retail with upper-floor residential or short-let accommodation.", typicalSize: "£500K to £1.5M" },
        { label: "Station-adjacent short-let block", detail: "Brighton Station walkable mixed-use with short-let visitor accommodation overlay.", typicalSize: "£400K to £1.2M" },
        { label: "Owner-occupier independent retail", detail: "Independent retailers buying their Seven Dials freehold.", typicalSize: "£350K to £800K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Seven Dials",
      body: 'Independent F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Semi-commercial shop-with-flat freehold via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Specialist retail and mixed-use investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Owner-occupier independent retail via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Repositioning and short-let visitor-accommodation conversion routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Seven Dials independent F&B and semi-commercial",
      body:
        "Deep across the Seven Dials core. <strong>Cynergy Bank</strong> runs one of the most active UK trading-business books and sits at the top of our shortlist on Goldsmid Road independent F&B trading-business freehold at 60 to 70% LTV and 7.5 to 9.0% pa on operator EBITDA cover at 1.5 to 1.8x. Allica Bank covers owner-occupier independent retail and small-cap F&B freehold competitively at 70 to 75% LTV. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Together dominate the BN1 semi-commercial shop-with-flat market at 70 to 75% LTV at 7.0 to 8.0% pa on blended ICR around 145%. HTB takes selected Seven Dials mixed-use and owner-occupier deals. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on owner-occupier independent retail and professional-firm freehold where the covenant supports a high-street facility. <strong>LendInvest</strong> covers refurbishment and short-let visitor-accommodation conversion bridges. Cambridge & Counties, Paragon and Together take selected mixed-use and semi-commercial deals. Allied Irish Bank UK picks up selected independent F&B trading-business profiles where the operator has multi-site experience. Pricing for clean semi-commercial currently 7.0 to 8.0% pa at 70 to 75% LTV, independent F&B trading-business 7.5 to 9.0% pa at 60 to 70% LTV, owner-occupier independent retail 6.5 to 7.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["pub-restaurant", "semi-commercial", "retail", "mixed-use", "leisure-hospitality", "office"],
    faqs: [
      {
        question: "What LTV is achievable on an independent F&B freehold in Seven Dials?",
        answer:
          "60 to 70% LTV on trading independent F&B freehold with two-to-three years of consistent operator accounts. Pricing 7.5 to 9.0% pa through <strong>Cynergy Bank</strong>, Allica Bank and Allied Irish Bank UK on EBITDA cover at 1.5 to 1.8x. The BH2025/02892/COU Goldsmid Road file is the canonical Seven Dials F&B candidate, retail-to-dine-in conversion that becomes fundable as a trading-business mortgage once the operator's accounts are in place.",
      },
      {
        question: "What about a Seven Dials semi-commercial shop-and-flat?",
        answer:
          "Up to 75% LTV via <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong>, Together or Aldermore. Blended ICR around 145% on combined commercial rent and AST income. Stamp duty applies at the mixed-use SDLT rates. The deep-volume bracket is £350K to £900K facility on Seven Dials and Goldsmid Road frontage.",
      },
      {
        question: "Can we fund a short-let visitor-accommodation conversion in Seven Dials?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> on the refurb leg, then terms out to a mixed-use investment mortgage once the short-let trading record is in place. Brighton Station walkability gives Seven Dials a strong short-let occupancy underwriting case. <strong>LendInvest</strong>, <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> cover this profile at 65 to 70% LTV.',
      },
      {
        question: "Which lenders run dedicated South Coast independent F&B desks?",
        answer:
          "<strong>Cynergy Bank</strong>, Allica Bank and Allied Irish Bank UK all run dedicated trading-business programmes that take Brighton independent F&B freehold routinely. HTB, Cambridge & Counties and Metro Bank cover the next tier. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> Commercial maintain South Coast regional teams active on owner-occupier independent retail. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "london-road": {
    slug: "london-road",
    name: "London Road",
    metaTitle: "Commercial Mortgages London Road Brighton | Specialist Broker, BN1",
    metaDescription:
      "Commercial mortgages for London Road, Brighton (BN1), high-street retail, mixed-use regeneration, semi-commercial shop-with-flat, independent F&B. 90+ lender panel, indicative terms inside 48 hours.",
    hero: {
      h1: "Commercial Mortgages London Road Brighton",
      lede:
        "London Road runs north of central Brighton in BN1, the long high-street spine that carries the Open Market, Brighton Co-op store, the Sainsbury anchor and a deep tail of independent retail, F&B and semi-commercial upper-floor stock. The corridor has been the focus of sustained regeneration since the early 2010s, with multiple mixed-use redevelopment schemes converting under-used retail blocks into ground-floor Class E with apartments above. We arrange commercial mortgages for London Road owner-occupier retail, semi-commercial shop-with-flat blocks, independent F&B trading-business refinance and the small but steady flow of mixed-use development exits feeding the BN1 high-street regen pipeline. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The London Road commercial property market",
      body: [
        "London Road is one of Brighton's most actively regenerating commercial corridors. The spine carries roughly 200 ground-floor commercial frontages between St Peter's Church and Preston Circus, with the Open Market as the trading anchor at the south end and the Sainsbury-anchored mixed-use block plus a long parade of independent retail and F&B above it. Headline retail rents on the prime parade sit at £25 to £45 per sq ft in 2026, a meaningful discount to North Laine and Western Road that has attracted independent operators across food retail, hairdressing, vintage and value retail, and a growing F&B cluster around Preston Circus. Upper-floor Class E and mixed-use space prices at £18 to £28 per sq ft.",
        "The dominant commercial mortgage archetype on London Road is semi-commercial shop-with-flat, the canonical BN1 Victorian terrace pattern where a ground-floor retail or food unit sits under one or two upper-floor apartments. Typical lot sizes £400K to £900K, with blended ICR around 145% combining commercial rent and AST income, funding to 75% LTV via specialist semi-commercial desks. Owner-occupier independent retail is the second-largest flow, typically £300K to £700K facilities. Mixed-use development exits and refinancing of stabilised regeneration blocks form the third tier, with lot sizes running to £2.5M on the larger schemes. Pricing 6.5 to 8.5% pa for clean BN1 semi-commercial, with strong-covenant ground-floor retail under regen schemes at 6.0 to 7.5%.",
        "HM Land Registry residential transactions across the wider London Road catchment in BN1 confirm a mid-tier resident base feeding the corridor, with recent files including BN1 6SL Cumberland Road at £810,000 and BN1 3BG Borough Street at £675,000. These are market-temperature signals on the upper-floor residential income beneath London Road semi-commercial stock, not direct commercial comparables. The Brighton & Hove City Council Article 4 direction on small HMO conversion applies across BN1, which constrains the value-add play on upper floors and pushes most repositioning toward mixed-use Class E plus C3 apartment outcomes. Stamp duty applies at the commercial or mixed-use rates on every freehold purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity on London Road (BN1)",
      body:
        "Two live Brighton & Hove City Council Idox files anchor the current London Road commercial mortgage pipeline. A London Road mixed-use redevelopment file (Ref <strong>BH2026/01102</strong>) covers a high-street block conversion combining ground-floor Class E retail with upper-floor C3 apartments, the canonical BN1 high-street regen archetype we routinely refinance against once the scheme stabilises on blended ICR. A change-of-use file (Ref <strong>BH2025/02612/COU</strong>) covers conversion of a vacant ground-floor London Road unit to Class E commercial within a retained mixed-use frontage, illustrative of the small-cap repositioning flow that funds through bridge-to-let during works and terms out to semi-commercial mortgage on completion. Most London Road change-of-use happens under Class E to Class E permitted-development rights, which keeps the retail-to-food-to-office flexibility intact and is fundable as straight refinance once the new occupier is in. Stamp duty applies at the commercial or mixed-use rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2026/01102",
          address: "London Road mixed-use block, Brighton BN1 4JF",
          postcode: "BN1 4JF",
          proposal: "Mixed-use redevelopment combining ground-floor Class E retail or food and beverage with upper-floor C3 apartments on the London Road BN1 regeneration corridor.",
        },
        {
          ref: "BH2025/02612/COU",
          address: "Vacant ground-floor unit, London Road, Brighton BN1 4JD",
          postcode: "BN1 4JD",
          proposal: "Change of use of a vacant ground-floor London Road unit to Class E commercial within a retained mixed-use frontage, illustrative of the small-cap repositioning flow on the BN1 high-street parade.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types on London Road",
      items: [
        { label: "Semi-commercial shop-with-flat", detail: "Victorian terrace ground-floor retail or food with one or two apartments above on the BN1 high-street parade.", typicalSize: "£400K to £900K facility" },
        { label: "Owner-occupier independent retail", detail: "Independent food retail, hairdressing, vintage and value retail buying their London Road freehold.", typicalSize: "£300K to £700K" },
        { label: "Mixed-use redevelopment block", detail: "Ground-floor Class E plus upper-floor C3 apartments under live BN1 regen schemes.", typicalSize: "£900K to £2.5M" },
        { label: "Preston Circus F&B trading-business", detail: "Independent restaurants, cafés and licensed venues at the north end of the corridor.", typicalSize: "£400K to £1.2M" },
        { label: "Open Market and Co-op-adjacent retail", detail: "Trading-business and owner-occupier retail clustered around the BN1 anchor pitches.", typicalSize: "£350K to £900K" },
        { label: "Upper-floor Class E office repositioning", detail: "Vacant upper-floor retail or office converted to Class E commercial under PD or full applications.", typicalSize: "£300K to £800K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active on London Road",
      body: 'Shop-with-flat dominates via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Owner-occupier independent retail routes through <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. F&B refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Mixed-use development exits and vacant repositioning fund through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> with term-out onto semi-commercial or commercial investment mortgage. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for London Road semi-commercial and high-street retail",
      body:
        "Deep across the BN1 high-street and semi-commercial archetypes. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on stronger-covenant owner-occupier retail and refinance at 65 to 75% LTV and 6.0 to 7.5% pa. Allica Bank is active on the £400K to £1.5M end on London Road independent retail and small mixed-use blocks. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> lead the BN1 semi-commercial shortlist on shop-with-flat at 75% LTV and 7.0 to 8.5% pa, blended ICR around 145%. <strong>LendInvest</strong> covers value-add and bridge-to-let on London Road repositioning and mixed-use development exits. HTB and Cambridge & Counties take selected investment deals in the £500K to £2M bracket. Refinancing on a stabilised shop-with-flat typically prices 7.0 to 8.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["semi-commercial", "retail", "mixed-use", "pub-restaurant", "leisure-hospitality", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a London Road shop-with-flat?",
        answer:
          "Up to 75% LTV via specialists. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> lead the BN1 shop-with-flat shortlist at blended ICR around 145% combining ground-floor commercial rent and upper-floor AST income. Pricing 7.0 to 8.5% pa. The London Road parade is one of the deeper BN1 semi-commercial lender pools because the Victorian terrace fabric and active regen story support strong tenant covenants.",
      },
      {
        question: "Can we fund a London Road mixed-use redevelopment block?",
        answer:
          'Yes via <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during works and term-out to investment or semi-commercial mortgage on stabilisation. Active strategy on schemes of the kind covered by the BH2026/01102 file, ground-floor Class E plus upper-floor apartments. <strong>LendInvest</strong>, <strong>Shawbrook</strong> and HTB compete on the bridge stage; <strong>Cynergy Bank</strong>, <strong>InterBay Commercial</strong> and Allica Bank price keenly on the term-out at 70 to 75% LTV.',
      },
      {
        question: "What rate on owner-occupier independent retail buying a London Road freehold?",
        answer:
          "6.0 to 7.5% pa at 70 to 75% LTV on EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Allica Bank compete on independent retailer buys-its-freehold deals. The BN1 high-street regen story underwrites strong rental covenant assumptions.",
      },
      {
        question: "Does the Article 4 HMO direction affect London Road upper floors?",
        answer:
          "Yes, the Brighton & Hove City Council Article 4 direction removes permitted-development rights for C3 to C4 small-HMO conversion across most of BN1, which means most C3-to-C4 changes need a full planning application. Class E to Class E PD swaps still apply, which keeps the retail-food-office flexibility intact on ground-floor space. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "edward-street-quarter": {
    slug: "edward-street-quarter",
    name: "Edward Street Quarter",
    metaTitle: "Commercial Mortgages Edward Street Quarter Brighton | Specialist Broker, BN2",
    metaDescription:
      "Commercial mortgages for Edward Street Quarter, Brighton (BN2), the Boultbee Brooks flagship mixed-use regen, office and BTR investment, ground-floor retail. Specialist Brighton lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Edward Street Quarter Brighton",
      lede:
        "Edward Street Quarter is Brighton's flagship mixed-use regeneration scheme, the Boultbee Brooks-led redevelopment sitting on the Edward Street and Egremont Place corridor in BN2, immediately east of the central core. The scheme combines new-build Grade A office space, build-to-rent residential, ground-floor Class E retail and food and beverage, with multiple phases live through 2026. The office component sits at the top of the Brighton Grade A market and the BTR block carries one of the largest single residential investment registers in the city. We arrange commercial mortgages for Edward Street Quarter ground-floor commercial investment, office investment exits, BTR-adjacent commercial refinance, and the wider BN2 mixed-use regen pipeline that the scheme has catalysed. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Edward Street Quarter commercial property market",
      body: [
        "Edward Street Quarter is the largest single commercial regeneration scheme in central Brighton, a Boultbee Brooks-led joint venture redeveloping a former Brighton General Hospital and council-block site into roughly 168,000 sq ft of new-build Grade A office, 170-plus build-to-rent apartments, and ground-floor commercial space across multiple phases. Office headline rents on the new-build Grade A component sit at £37 to £45 per sq ft in 2026, comfortably at the top of the Brighton office market and competitive with the Hove Norton Road belt. Ground-floor Class E retail and food and beverage prices at £30 to £45 per sq ft on the most active frontages.",
        "The dominant commercial mortgage flow we see around Edward Street Quarter is twofold. First, ground-floor commercial investment, individual Class E units acquired by long-hold private investors or family offices at lot sizes typically £600K to £2.5M, ICR-led at 65 to 70% LTV. Second, owner-occupier acquisitions by professional services, creative agencies and small consultancies taking floors of 1,500 to 4,000 sq ft on the new-build Grade A office, with EBITDA-led underwriting at 70 to 75% LTV. Larger institutional-scale investment exits on the office and BTR components run above £10M and route through private credit and fund desks rather than mainstream challenger lending.",
        "HM Land Registry residential transactions across the surrounding BN2 footprint confirm a structurally strong central catchment supporting the BTR rental underwriting and the ground-floor commercial covenants. Recent files include BN2 1GD Arundel Place at £495,000 and BN2 1FD Clarendon Terrace at £380,000, both consistent with the central BN2 leasehold flat pattern that anchors the BTR comparable set. The Edward Street Quarter scheme sits inside the Brighton & Hove City Council Article 4 HMO direction footprint, which is irrelevant to the BTR block (single ownership, professionally managed) but relevant to surrounding Victorian terrace upper floors. Stamp duty applies at the commercial rates on every freehold commercial purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity at Edward Street Quarter (BN2)",
      body:
        "The headline live Brighton & Hove City Council Idox file on the scheme is Ref <strong>BH2026/01245/FUL</strong>, covering reserved-matters and phase-specific consents within the Edward Street Quarter masterplan including ground-floor commercial fit-out, signage and external alterations to the Grade A office and BTR blocks. This is the canonical BN2 mixed-use regen file lenders underwrite against on stabilised investment exits and ground-floor Class E acquisitions. Supporting applications across the wider Edward Street and Egremont Place corridor cover Class E to Class E permitted-development swaps, signage consents and minor external works, mostly fundable as straight refinance once works complete. The masterplan-level original planning consent sits on the public record from the early 2020s and frames the commercial use mix lenders price against. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2026/01245/FUL",
          address: "Edward Street Quarter, Edward Street, Brighton BN2 0JD",
          postcode: "BN2 0JD",
          proposal: "Reserved-matters and phase-specific consents within the Edward Street Quarter masterplan, including ground-floor Class E commercial fit-out, signage and external alterations to the Grade A office and build-to-rent blocks on the Boultbee Brooks-led BN2 mixed-use redevelopment.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types at Edward Street Quarter",
      items: [
        { label: "Ground-floor Class E investment", detail: "Individual retail and food and beverage units acquired as long-hold private investment.", typicalSize: "£600K to £2.5M facility" },
        { label: "Grade A office investment", detail: "New-build office floor investment on multi-let or single-let basis.", typicalSize: "£1.5M to £6M" },
        { label: "Owner-occupier professional services", detail: "Solicitors, accountants, creative agencies buying their floor on the new-build Grade A office.", typicalSize: "£700K to £2.5M" },
        { label: "BTR-adjacent commercial refinance", detail: "Ground-floor commercial space within or adjacent to the BTR block on stabilised income.", typicalSize: "£800K to £3M" },
        { label: "Mixed-use development exit", detail: "Stabilised mixed-use blocks refinancing off bridge or development facility onto term mortgage.", typicalSize: "£2M to £8M" },
        { label: "Edward Street corridor semi-commercial", detail: "Surrounding Victorian terrace shop-with-flat stock catalysed by the regen.", typicalSize: "£400K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active at Edward Street Quarter",
      body: 'Ground-floor commercial investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Office owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Mixed-use development exits and stabilisation finance run via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> with term-out. Surrounding Victorian shop-with-flat blocks fund via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Edward Street Quarter office and mixed-use",
      body:
        "Deep across the BN2 flagship mixed-use archetypes. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on owner-occupier office floor purchases and stabilised Grade A office investment at 65 to 75% LTV and 6.0 to 7.0% pa, with covenant-led pricing on multi-let stock. Allica Bank runs an active South Coast book and routinely tops the shortlist on the £700K to £2.5M owner-occupier and small investment end of the scheme. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> cover ground-floor Class E investment and surrounding semi-commercial blocks at 70 to 75% LTV and 6.5 to 8.0% pa. <strong>LendInvest</strong> covers value-add and mixed-use development exits onto term mortgage. HTB, Cambridge & Counties and OakNorth take selected investment deals at £2M-plus on the office and ground-floor commercial components. Larger institutional exits above £10M route through private credit and fund desks including Octopus Real Estate and ASK Partners. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "mixed-use", "retail", "semi-commercial", "pub-restaurant", "leisure-hospitality"],
    faqs: [
      {
        question: "What rate on an Edward Street Quarter office investment exit?",
        answer:
          "6.0 to 7.0% pa at 65 to 70% LTV for stabilised multi-let Grade A office investment with strong covenants. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Allica Bank all compete on the £1.5M to £6M bracket. ICR at 140 to 160% stressed against the lender's reversion rate. Refinancing existing development facilities onto term mortgage is currently the busiest single use case across the BN2 mixed-use stock.",
      },
      {
        question: "Can we fund a ground-floor Class E acquisition at Edward Street Quarter?",
        answer:
          'Yes via <a href="/services/commercial-investment-mortgage">commercial investment mortgage</a> on ICR. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> lead the shortlist on individual Class E unit purchases at 70 to 75% LTV and 6.5 to 8.0% pa. Strong-covenant retail or food and beverage operators on the BH2026/01245/FUL ground-floor frontage price keenest.',
      },
      {
        question: "What product fits a professional services firm buying a floor at Edward Street Quarter?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank. Typical 70 to 75% LTV at 6.0 to 7.0% pa on partnership accounts, EBITDA cover at 1.3 to 1.5x. New-build Grade A office is the keenest-priced corner of the central Brighton owner-occupier market because of the depth of mainstream-bank comfort on covenant strength and resale liquidity.",
      },
      {
        question: "How do we fund a mixed-use development exit at Edward Street Quarter scale?",
        answer:
          'Two-stage. Bridge-to-let or development facility during construction and lease-up, then term-out to investment mortgage on stabilisation at 65 to 70% LTV. <strong>LendInvest</strong>, <strong>Shawbrook</strong> and HTB compete on the bridge stage at £2M to £8M; private credit including Octopus Real Estate and ASK Partners cover institutional-scale exits above £10M. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "brighton-marina": {
    slug: "brighton-marina",
    name: "Brighton Marina",
    metaTitle: "Commercial Mortgages Brighton Marina | Specialist Broker, BN2",
    metaDescription:
      "Commercial mortgages for Brighton Marina (BN2), leisure, retail, hospitality, marina-front F&B and hotel. Asda anchor, multiplex cluster, ongoing residential intensification. Specialist hospitality lender panel.",
    hero: {
      h1: "Commercial Mortgages Brighton Marina",
      lede:
        "Brighton Marina sits at the east end of the BN2 seafront, a 127-acre marina-led leisure, retail and residential cluster that combines the largest single retail and food and beverage anchor outside central Brighton, a multiplex cinema, bowling and casino leisure offer, two hotels, and an ongoing residential intensification programme led by both the marina operator and private developers. The marina carries Brighton's deepest single concentration of family-leisure and destination-retail commercial stock and a meaningful waterfront restaurant cluster. We arrange commercial mortgages for marina-front retail and food and beverage owner-occupier and investment, hotel and aparthotel trading-business refinance, leisure operator freeholds, and the wider BN2 marina-fringe residential-led mixed-use pipeline. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Brighton Marina commercial property market",
      body: [
        "Brighton Marina is the largest single commercial destination cluster in BN2 outside the central core. The retail and food and beverage spine around the marina inner harbour carries roughly 60 ground-floor units anchored by an Asda superstore, supported by the Cineworld eight-screen multiplex, a bowling alley, casino, two hotels and a long parade of waterfront restaurants on the boardwalk. Headline rents on the prime marina F&B parade sit at £30 to £50 per sq ft in 2026, with secondary inner-harbour retail at £20 to £30 per sq ft, both reflecting the captive footfall of the residential population on-site (roughly 1,800 apartments across the marina village) plus the leisure draw from across BN1 and BN2.",
        "The dominant commercial mortgage archetypes at Brighton Marina are three. First, marina-front food and beverage trading-business, independent and small-chain restaurants, cafés and bars on the boardwalk, typical lot size £400K to £1.5M, EBITDA-led at 60 to 65% LTV. Second, hotel and aparthotel trading-business, the marina-front hotel stock and a growing aparthotel cluster, with facility sizes £2M to £8M priced on operator EBITDA. Third, leisure operator and retail investment, the multiplex, bowling, casino and Asda-adjacent in-line retail, with covenant-led lending at 65 to 70% LTV. Pricing 6.5 to 8.5% pa for clean marina retail investment, with strong-covenant hotel trading-business at 7.0 to 8.5% pa and weaker independent F&B at 8.0 to 9.0%.",
        "HM Land Registry residential transactions across the marina village confirm a stable mid-tier resident base with median values typically in the £250,000 to £450,000 bracket on marina-village apartments, and BN2 1FD Clarendon Terrace at £380,000 plus BN2 1GD Arundel Place at £495,000 sketch the wider central BN2 leasehold flat comparable set. These are market-temperature signals on the residential occupancy that drives marina captive footfall, not direct commercial comparables. The marina sits within Brighton & Hove City Council's strategic regeneration framework and ongoing residential intensification is supported in principle. Stamp duty applies at the commercial rates on every freehold commercial purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity at Brighton Marina (BN2)",
      body:
        "Two live Brighton & Hove City Council Idox files anchor the current marina commercial mortgage pipeline. A marina retail intensification file (Ref <strong>BH2026/00978/FUL</strong>) covers external alterations, signage and unit reconfiguration on the marina inner-harbour retail parade, the canonical BN2 marina retail-front asset-management profile we routinely refinance against on stabilised ICR. A Black Rock site file (Ref <strong>BH2025/01812/FUL</strong>) covers leisure and events use on the long-running Black Rock site at the marina western edge, illustrative of the BN2 leisure-led mixed-use development pipeline that feeds back into marina-adjacent commercial values. Most marina change-of-use happens under Class E to Class E permitted-development rights or under the marina master-leasehold framework, which keeps the retail-to-food-to-leisure flexibility intact and is fundable as straight refinance once the new occupier is in. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2026/00978/FUL",
          address: "Marina inner-harbour retail parade, Brighton Marina, Brighton BN2 5UF",
          postcode: "BN2 5UF",
          proposal: "External alterations, signage and unit reconfiguration on the Brighton Marina inner-harbour retail and food and beverage parade, illustrative of the BN2 marina retail-front asset-management cycle.",
        },
        {
          ref: "BH2025/01812/FUL",
          address: "Black Rock site, Madeira Drive, Brighton BN2 1EN",
          postcode: "BN2 1EN",
          proposal: "Leisure and events use on the Black Rock site at the marina western edge, part of the long-running BN2 leisure-led mixed-use development pipeline feeding into marina-adjacent commercial values.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types at Brighton Marina",
      items: [
        { label: "Marina-front F&B trading-business", detail: "Independent and small-chain restaurants, cafés and bars on the boardwalk and inner-harbour parade.", typicalSize: "£400K to £1.5M facility" },
        { label: "Marina hotel and aparthotel", detail: "Marina-front hotel stock and growing aparthotel cluster on operator EBITDA.", typicalSize: "£2M to £8M" },
        { label: "Multiplex and leisure operator freehold", detail: "Cinema, bowling and casino operator freeholds with corporate-covenant trading leases.", typicalSize: "£1.5M to £6M" },
        { label: "Asda-anchor in-line retail investment", detail: "Inner-harbour retail investment with covenant-led tenant mix.", typicalSize: "£700K to £3M" },
        { label: "Marina-fringe mixed-use development exit", detail: "Stabilised residential-led mixed-use blocks refinancing onto term mortgage.", typicalSize: "£2M to £8M" },
        { label: "Leisure ground-floor Class E", detail: "Boardwalk and inner-harbour Class E units held as long-hold private investment.", typicalSize: "£500K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active at Brighton Marina",
      body: 'Marina-front F&B and hotel trading-business routes via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Retail investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Vacant or repositioning marina units route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Mixed-use development exits run via bridge with term-out onto investment mortgage. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Brighton Marina hospitality, leisure and retail",
      body:
        "Specialist-led on hospitality, mainstream on retail investment. <strong>Cynergy Bank</strong> is prominent across marina hotel, aparthotel and licensed F&B trading-business, with one of the deepest South Coast hospitality books in the challenger space at 60 to 65% LTV and 7.0 to 8.5% pa on operator EBITDA. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> compete on marina retail investment, mixed-use blocks and ground-floor Class E at 70 to 75% LTV and 6.5 to 8.0% pa. Allied Irish Bank (UK) and Metro Bank cover selected marina hotel deals, Allica Bank covers marina F&B trading-business and small-investment lots. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> take strong-covenant marina retail investment and multiplex or leisure operator freehold deals at 60 to 70% LTV and 6.0 to 7.5% pa. <strong>LendInvest</strong> covers value-add, vacant unit repositioning and marina-fringe mixed-use development exits. HTB and Cambridge & Counties take selected investment deals. Larger institutional exits above £10M route through private credit including Octopus Real Estate and ASK Partners. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["leisure-hospitality", "pub-restaurant", "retail", "mixed-use", "office", "semi-commercial"],
    faqs: [
      {
        question: "What rate on a marina-front hotel trading-business mortgage?",
        answer:
          "7.0 to 8.5% pa at 60 to 65% LTV on operator EBITDA cover at 1.5 to 2.0x with two to three years of clean accounts. <strong>Cynergy Bank</strong> leads the marina hospitality shortlist with one of the deepest South Coast hospitality books in the challenger market. Allied Irish Bank (UK) and Metro Bank both take selected marina hotel deals, with branded-covenant operators pricing keenest.",
      },
      {
        question: "Can we fund a marina inner-harbour retail unit acquisition?",
        answer:
          'Yes via <a href="/services/commercial-investment-mortgage">commercial investment mortgage</a> on ICR. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Allica Bank lead the shortlist at 70 to 75% LTV and 6.5 to 8.0% pa on the BH2026/00978/FUL retail parade profile. Strong-covenant Asda-adjacent in-line retail prices keenest, with stronger pricing at the £700K to £3M end where mainstream banks compete.',
      },
      {
        question: "What about a vacant boardwalk F&B unit?",
        answer:
          'Bridge-to-let through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. <strong>LendInvest</strong>, <strong>Shawbrook</strong> and HTB compete on 12 to 24 month bridges funding acquisition and re-letting, with term-out onto trading-business mortgage on stabilisation. <strong>Cynergy Bank</strong> takes the term-out on the strongest-covenant operator deals.',
      },
      {
        question: "How does the marina master-leasehold framework affect lending?",
        answer:
          "The marina operates under a master-leasehold framework with individual long-leasehold or operating-lease interests, which is well-understood by the specialist Brighton hospitality and retail lender panel and does not constrain commercial mortgage availability. Lender legal review focuses on the unexpired term, rent review pattern and any operator-control clauses. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "hangleton-west-hove": {
    slug: "hangleton-west-hove",
    name: "Hangleton and West Hove",
    metaTitle: "Commercial Mortgages Hangleton and West Hove | Specialist Broker, BN3",
    metaDescription:
      "Commercial mortgages for Hangleton and West Hove (BN3), Boundary Road suburban retail parade, trade counter, MOT and forecourt, convenience retail. Specialist Brighton lender panel.",
    hero: {
      h1: "Commercial Mortgages Hangleton and West Hove",
      lede:
        "Hangleton and West Hove sit on the western edge of the BN3 footprint, threaded along Boundary Road, Sackville Road and the Old Shoreham Road A270 corridor running out toward Portslade. The fabric is a suburban high-street parade on Boundary Road, a tail of trade-counter and small industrial stock around the A270, a meaningful MOT and forecourt cluster, and a deep run of convenience retail and semi-commercial shop-with-flat serving the surrounding BN3 residential catchment. We arrange commercial mortgages for Boundary Road owner-occupier retail and semi-commercial, A270 trade-counter, MOT and forecourt trading-business, and the small but steady flow of suburban professional services consolidations across the west Hove edge. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Hangleton and West Hove commercial property market",
      body: [
        "Hangleton and West Hove form the suburban retail and trade edge of BN3. Boundary Road is the spine, a roughly 800-metre suburban high-street parade carrying around 60 ground-floor commercial frontages anchored by national-multiple convenience retail, independent food retail, hairdressing, value retail and a tail of small F&B. Headline rents on the prime Boundary Road parade sit at £18 to £30 per sq ft in 2026, a substantial discount to Western Road BN3 and George Street BN3 reflecting the suburban catchment, which makes Boundary Road one of the keenest-priced semi-commercial entry points on the BN3 footprint. Upper-floor Class E and residential space prices at £12 to £20 per sq ft.",
        "The dominant commercial mortgage archetypes in Hangleton and West Hove are three. First, semi-commercial shop-with-flat on Boundary Road and Sackville Road, the canonical BN3 suburban-parade pattern with ground-floor retail or food under one or two apartments above, typical lot sizes £350K to £700K, blended ICR around 145%, funding to 75% LTV via specialist semi-commercial desks. Second, MOT and forecourt trading-business along the Old Shoreham Road A270 corridor and the Hangleton side streets, typical lot size £400K to £1.2M, EBITDA-led at 60 to 70% LTV. Third, owner-occupier convenience retail and small professional services, typical £250K to £700K facilities. Pricing 6.5 to 8.5% pa for clean BN3 suburban semi-commercial, with MOT and forecourt trading-business at 7.5 to 9.0% pa.",
        "HM Land Registry residential transactions across the BN3 fringe confirm a stable mid-tier resident base, with recent files including BN3 8PP Northease Drive at £665,000 and BN3 5FA Westbourne Street at £695,000 sitting at the upper end of the local owner-occupier band. These are market-temperature signals on the upper-floor residential income beneath Hangleton and West Hove semi-commercial stock, not direct commercial comparables. The wider BN3 suburban catchment supports steady convenience-retail and forecourt trading. Stamp duty applies at the commercial or mixed-use rates on every freehold purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Hangleton and West Hove (BN3)",
      body:
        "A live Brighton & Hove City Council Idox file at the Boundary Road parade frames the current Hangleton and West Hove commercial mortgage pipeline. The Boundary Road change-of-use file (Ref <strong>BH2025/01545/COU</strong>) covers conversion of a ground-floor parade unit within the Boundary Road BN3 suburban high-street parade, the canonical BN3 suburban repositioning we routinely fund through bridge-to-let during works and term-out onto semi-commercial or owner-occupier mortgage on completion. Most Hangleton and West Hove change-of-use happens under Class E to Class E permitted-development rights or via small ground-floor reconfigurations, fundable as straight refinance once the new occupier is in. MOT and forecourt change-of-use requires full planning consent and lenders underwrite the as-built operator EBITDA. Stamp duty applies at the commercial or mixed-use rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2025/01545/COU",
          address: "Boundary Road suburban parade unit, Hove BN3 4EH",
          postcode: "BN3 4EH",
          proposal: "Change of use of a ground-floor parade unit within the Boundary Road BN3 suburban high-street parade, illustrative of the BN3 outer-suburban Class E repositioning flow we routinely fund as bridge-to-let with term-out to semi-commercial or owner-occupier mortgage.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Hangleton and West Hove",
      items: [
        { label: "Boundary Road semi-commercial", detail: "Ground-floor retail or food with one or two upper-floor apartments on the BN3 suburban parade.", typicalSize: "£350K to £700K facility" },
        { label: "Owner-occupier convenience retail", detail: "Independent food retail, hairdressing and value retail buying their Boundary Road freehold.", typicalSize: "£250K to £600K" },
        { label: "A270 trade-counter and small industrial", detail: "Small B2 and B8 trade-counter units along the Old Shoreham Road corridor.", typicalSize: "£300K to £900K" },
        { label: "MOT and forecourt trading-business", detail: "Hangleton and West Hove MOT, garage and small forecourt operators on EBITDA cover.", typicalSize: "£400K to £1.2M" },
        { label: "Suburban professional services owner-occupier", detail: "Accountants, dental and allied-health practices consolidating onto a BN3 west-edge site.", typicalSize: "£400K to £1M" },
        { label: "Sackville Road and Old Shoreham Road mixed-use", detail: "Small mixed-use blocks combining ground-floor commercial with apartments above.", typicalSize: "£400K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Hangleton and West Hove",
      body: 'Shop-with-flat dominates via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Owner-occupier retail and professional services route through <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. MOT and forecourt operators fund via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or repositioning parade units route through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Hangleton and West Hove suburban retail and trade",
      body:
        "Active across the BN3 suburban-parade and trade-corridor archetypes. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> dominate the Boundary Road semi-commercial shortlist at 75% LTV and 7.0 to 8.5% pa on blended ICR around 145%. Allica Bank is active across owner-occupier convenience retail and small professional services at the £300K to £900K end. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on stronger-covenant owner-occupier and refinance at 65 to 75% LTV and 6.0 to 7.5% pa. Together is prominent on the BN3 MOT, forecourt and value-end semi-commercial book, with one of the deeper South Coast garage and forecourt trading-business shortlists at 60 to 70% LTV. <strong>LendInvest</strong> covers value-add and bridge-to-let on parade repositioning. HTB and Cambridge & Counties take selected investment deals in the £400K to £1.5M bracket. Refinancing on a stabilised Boundary Road shop-with-flat typically prices 7.0 to 8.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["semi-commercial", "retail", "mot-garage-petrol", "industrial-warehouse", "mixed-use", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Boundary Road shop-with-flat?",
        answer:
          "Up to 75% LTV via specialists. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> lead the BN3 shop-with-flat shortlist at blended ICR around 145%. Pricing 7.0 to 8.5% pa. Boundary Road is one of the keenest semi-commercial entry points on the BN3 footprint because the suburban-parade discount to Western Road BN3 produces strong ICR cover on entry yields.",
      },
      {
        question: "Best lender for a Hangleton MOT or forecourt freehold?",
        answer:
          'Together is prominent on the BN3 MOT and forecourt book, with one of the deeper South Coast garage and forecourt trading-business shortlists. Pricing 7.5 to 9.0% pa at 60 to 70% LTV on operator EBITDA cover at 1.5 to 2.0x with two to three years of clean accounts. <strong>Shawbrook</strong> takes selected deals on the stronger-covenant end. See our <a href="/property-types/mot-garage-petrol">MOT, garage and forecourt</a> page.',
      },
      {
        question: "What rate on owner-occupier convenience retail buying a Boundary Road freehold?",
        answer:
          "6.0 to 7.5% pa at 70 to 75% LTV on EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Allica Bank compete on independent retailer buys-its-freehold deals across the BN3 suburban parade.",
      },
      {
        question: "Can we fund a vacant Boundary Road unit repositioning?",
        answer:
          'Yes via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition and re-letting, then terms out to semi-commercial or owner-occupier mortgage post-stabilisation. Active strategy on units affected by the kind of suburban Class E repositioning covered by the BH2025/01545/COU file. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },

  "falmer-lewes-road": {
    slug: "falmer-lewes-road",
    name: "Falmer and Lewes Road",
    metaTitle: "Commercial Mortgages Falmer and Lewes Road Brighton | Specialist Broker, BN1 BN2",
    metaDescription:
      "Commercial mortgages for Falmer and Lewes Road (BN1 and BN2), University of Sussex and University of Brighton adjacency, HMO student belt, PBSA, semi-commercial. Specialist Brighton HMO lender panel.",
    hero: {
      h1: "Commercial Mortgages Falmer and Lewes Road",
      lede:
        "Falmer and Lewes Road sit on the north-east axis out of Brighton, threaded along the A270 Lewes Road from Preston Circus up to the University of Sussex Falmer campus, with the University of Brighton Moulsecoomb campus on the same spine. The combined student population sits at roughly 37,000 across both universities, anchoring the deepest single HMO and student-housing concentration in the city, plus a steady purpose-built student accommodation pipeline and a Lewes Road retail and food and beverage parade serving the student catchment. We arrange commercial mortgages for HMO block refinance and acquisition, PBSA investment, student-let-portfolio aggregation, Lewes Road semi-commercial shop-with-flat, and the small-cap student-belt convenience retail and food and beverage flow across the BN1 9 and BN2 4 footprint. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Falmer and Lewes Road commercial property market",
      body: [
        "Falmer and Lewes Road carry the deepest single student-housing and HMO concentration in Brighton, anchored by two universities sharing the same north-east transport spine. The University of Sussex Falmer campus sits at the top of the A270 spine on roughly 250 acres with a resident student population of around 19,000 students, supplemented by the University of Brighton Moulsecoomb and Falmer campuses with around 18,000 students. Total combined population pushes 37,000, and the resulting student-housing demand drives one of the deepest UK HMO and PBSA markets outside the largest student cities. Lewes Road headline retail rents on the prime student-facing parade sit at £20 to £35 per sq ft in 2026, with upper-floor HMO and residential space at £14 to £24 per sq ft.",
        "The dominant commercial mortgage archetypes on the Falmer and Lewes Road corridor are four. First, HMO block refinance and acquisition, the canonical BN1 9 and BN2 4 student-house pattern with five, six or seven C4 or sui generis HMO bedrooms, typical lot sizes £450K to £900K, with portfolio aggregation deals running to £5M-plus. Second, purpose-built student accommodation investment, with new and existing PBSA blocks along the spine and at the campuses, typical lot sizes £3M to £15M, ICR-led at 60 to 65% LTV. Third, Lewes Road semi-commercial shop-with-flat, the student-belt parade ground-floor retail or food and beverage under HMO or AST upper floors, typical lot sizes £400K to £800K. Fourth, student-belt food and beverage trading-business, kebab, pizza, coffee and bar operators serving the student catchment, typical lot sizes £300K to £900K.",
        "HM Land Registry residential transactions across the BN1 9 and BN2 4 footprint confirm a structurally student-belt resident base, with median values typically in the £350,000 to £500,000 bracket on the Victorian and inter-war terrace stock that forms the HMO conversion pool. Brighton & Hove City Council operates an additional and selective HMO licensing scheme covering most of the corridor, and the publicly accessible licensing register is the primary stock-counting source for the student-belt HMO concentration. The Article 4 direction removes permitted-development rights for C3 to C4 conversion across the BN1 9 and BN2 4 footprint, which means most new HMO conversions need a full planning application. Stamp duty applies at the commercial or mixed-use rates on every freehold purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity on Falmer and Lewes Road (BN1 and BN2)",
      body:
        "Two live Brighton & Hove City Council Idox files frame the current Falmer and Lewes Road commercial mortgage pipeline. A Lewes Road HMO conversion file (Ref <strong>BH2025/02212/COU</strong>) covers a C3 to sui generis HMO conversion on a Lewes Road BN2 4 Victorian terrace property, the canonical student-belt HMO conversion archetype we routinely fund through Paragon, Together, Foundation Home Loans and Fleet Mortgages once licensing is in place. A University of Sussex Falmer campus file (Ref <strong>BH2025/01945/FUL</strong>) covers purpose-built student accommodation development within the Falmer campus estate, illustrative of the institutional PBSA pipeline that funds through private credit and specialist student-accommodation desks at the £10M-plus end. The Brighton & Hove Article 4 direction means most C3 to C4 small-HMO conversions need a full planning application across the BN1 9 and BN2 4 footprint, which is why most student-belt HMO acquisition deals fund on the already-licensed stock pool. Stamp duty applies at the commercial or mixed-use rates on each acquisition.",
      refs: [
        {
          ref: "BH2025/02212/COU",
          address: "Lewes Road Victorian terrace, Brighton BN2 4DT",
          postcode: "BN2 4DT",
          proposal: "Change of use from C3 dwelling to sui generis House in Multiple Occupation on a Lewes Road BN2 4 Victorian terrace property, the canonical student-belt HMO conversion archetype Paragon, Together, Foundation Home Loans and Fleet Mortgages compete on at refinance.",
        },
        {
          ref: "BH2025/01945/FUL",
          address: "University of Sussex Falmer campus, Falmer BN1 9RH",
          postcode: "BN1 9RH",
          proposal: "Purpose-built student accommodation development within the University of Sussex Falmer campus estate, illustrative of the institutional PBSA pipeline that funds through private credit and specialist student-accommodation desks at the £10M-plus end.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types on Falmer and Lewes Road",
      items: [
        { label: "HMO block refinance and acquisition", detail: "BN1 9 and BN2 4 Victorian and inter-war terrace HMOs with five, six or seven C4 or sui generis bedrooms.", typicalSize: "£450K to £900K facility" },
        { label: "HMO portfolio aggregation", detail: "Multi-property student-let portfolios consolidated onto a single facility.", typicalSize: "£2M to £5M" },
        { label: "Purpose-built student accommodation investment", detail: "PBSA blocks at the universities and along the Lewes Road spine, ICR-led on operator income.", typicalSize: "£3M to £15M" },
        { label: "Lewes Road semi-commercial shop-with-flat", detail: "Student-belt parade ground-floor retail or food and beverage under HMO or AST upper floors.", typicalSize: "£400K to £800K" },
        { label: "Student-belt F&B trading-business", detail: "Kebab, pizza, coffee and bar operators on student-catchment trading.", typicalSize: "£300K to £900K" },
        { label: "Falmer campus-adjacent ancillary commercial", detail: "Supporting retail, food and convenience stock around the university campuses.", typicalSize: "£300K to £700K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active on Falmer and Lewes Road",
      body: 'HMO block dominates via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block mortgage</a> on portfolio or single-property basis. PBSA investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Lewes Road shop-with-flat via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Student-belt F&B operators route through <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Refinancing maturing HMO portfolio facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Falmer and Lewes Road HMO, PBSA and student-belt commercial",
      body:
        "HMO-led across the BN1 9 and BN2 4 student belt. Paragon, Together, Foundation Home Loans and Fleet Mortgages are all prominent on the Brighton HMO book, with Paragon leading large portfolio aggregation deals at 70 to 75% LTV and 6.5 to 8.0% pa on rental cover, Together strong on single-property HMO refinance at 75% LTV and 7.0 to 8.5% pa, Foundation Home Loans active on individual HMO purchases and refinance to 75% LTV, and Fleet Mortgages competitive on the buy-to-let-portfolio crossover where some properties operate as HMO and some as single-AST. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> also take selected HMO and portfolio deals. PBSA investment routes through private credit and specialist student-accommodation desks at the £10M-plus end, including Octopus Real Estate and selected institutional funders. <strong>Cynergy Bank</strong> covers student-belt F&B trading-business and licensed venues at 60 to 65% LTV and 7.0 to 8.5% pa. Lewes Road semi-commercial funds through <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> at 75% LTV and 7.0 to 8.5% pa. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> take stronger-covenant Lewes Road owner-occupier and stabilised PBSA investment at 65 to 75% LTV and 6.0 to 7.0% pa. <strong>LendInvest</strong> covers value-add and HMO refurb bridge with term-out. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["hmo-block", "semi-commercial", "retail", "pub-restaurant", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Lewes Road HMO block?",
        answer:
          "Up to 75% LTV via specialists. Paragon, Together, Foundation Home Loans and Fleet Mortgages all compete on Brighton HMO refinance and acquisition, with Paragon leading on portfolio aggregation deals and Together strong on single-property HMO. Pricing 6.5 to 8.5% pa on rental cover. The BN1 9 and BN2 4 student belt is one of the deepest UK HMO lender pools outside the largest student cities because the Brighton & Hove HMO licensing register is mature and gives lenders comfort on the existing stock.",
      },
      {
        question: "Can we fund an HMO portfolio aggregation deal across Falmer and Lewes Road?",
        answer:
          'Yes via <a href="/property-types/hmo-block">HMO block mortgage</a>. Paragon leads on the £2M to £5M-plus portfolio bracket at 70 to 75% LTV on aggregated rental cover. Foundation Home Loans and Fleet Mortgages also compete on portfolio deals. Refinancing maturing HMO portfolio facilities written in 2020 and 2021 is the busiest single Falmer and Lewes Road use case in 2026.',
      },
      {
        question: "What about PBSA investment at Falmer or along Lewes Road?",
        answer:
          'Specialist student-accommodation desks at the £10M-plus end through private credit including Octopus Real Estate and selected institutional funders. Pricing 6.5 to 7.5% pa at 60 to 65% LTV on stabilised PBSA income. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> take stabilised stronger-covenant PBSA at the larger end. The BH2025/01945/FUL Falmer campus PBSA file is illustrative of the institutional pipeline.',
      },
      {
        question: "Does the Article 4 direction affect new HMO conversions on Lewes Road?",
        answer:
          "Yes, the Brighton & Hove Article 4 direction removes permitted-development rights for C3 to C4 small-HMO conversion across most of the BN1 9 and BN2 4 footprint, which means most new HMO conversions need a full planning application as in the BH2025/02212/COU file. Lenders mostly fund on the already-licensed stock pool, where the licensing-register evidence supports underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "hollingbury-patcham": {
    slug: "hollingbury-patcham",
    name: "Hollingbury and Patcham",
    metaTitle: "Commercial Mortgages Hollingbury and Patcham Brighton | Specialist Broker, BN1",
    metaDescription:
      "Commercial mortgages for Hollingbury and Patcham (BN1), Hollingbury Industrial Estate owner-occupier, Patcham Court Farm trade, light industrial, trade-counter, B2 and B8 stock. Specialist Brighton industrial lender panel.",
    hero: {
      h1: "Commercial Mortgages Hollingbury and Patcham",
      lede:
        "Hollingbury and Patcham sit at the northern edge of the BN1 footprint, threaded along the A23 London Road corridor and the Lewes Road A270 spine where they branch out toward the South Downs. The fabric is the Hollingbury Industrial Estate, one of Brighton's two meaningful industrial estates and the principal source of B2 and B8 trade stock inside the city boundary, plus the Patcham Court Farm site at the northern edge carrying trade, light industrial and emerging mixed-use, supported by a tail of trade-counter, MOT and small-cap convenience retail along the A23 spine. We arrange commercial mortgages for Hollingbury industrial owner-occupier and investment, Patcham Court Farm trade and mixed-use, MOT and forecourt operators, and the small but steady flow of A23 corridor semi-commercial and convenience retail across BN1 8. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Hollingbury and Patcham commercial property market",
      body: [
        "Hollingbury and Patcham carry the principal Brighton industrial commercial stock, a market structurally constrained by the city's geographic position pinned between the sea and the South Downs national park. The Hollingbury Industrial Estate runs to roughly 250,000 sq ft of B2 and B8 stock anchored by trade-counter, automotive, light industrial and food production occupiers, with rents on prime industrial space at £14 to £20 per sq ft in 2026 and trade-counter at £18 to £26 per sq ft. The Patcham Court Farm site at the northern edge carries trade and emerging mixed-use, and the A23 London Road corridor running between them carries a tail of trade-counter, MOT, forecourt and small-cap convenience retail.",
        "The dominant commercial mortgage archetypes in Hollingbury and Patcham are three. First, light industrial owner-occupier, SMEs buying their workshop, storage or trade-counter unit on the Hollingbury Industrial Estate, typical lot sizes £400K to £1.5M, EBITDA-led at 70 to 75% LTV. Second, small industrial investment, individual B2 or B8 units acquired on let-stock basis, typical lot sizes £500K to £2M, ICR-led at 65 to 70% LTV. Third, MOT, forecourt and trade-counter trading-business along the A23 spine and within the estate, typical lot sizes £300K to £1M, EBITDA-led at 60 to 70% LTV. Pricing on Hollingbury owner-occupier industrial currently 6.0 to 7.5% pa at 70 to 75% LTV, among the keenest available CM rates in the Brighton market reflecting the structural supply constraint on industrial stock inside the city boundary.",
        "HM Land Registry residential transactions across the BN1 8 footprint confirm a mid-tier resident base, with recent files including BN1 8UA Vale Avenue at £667,500 sitting at the upper end of the local owner-occupier band. These are directional market-temperature signals on the residential surround that supports SME industrial owner-occupier underwriting through household-income covenants, not direct commercial comparables. Brighton's tight industrial supply means new B2 and B8 consents are sparse and existing stock holds value, which underwrites long-hold investor underwriting. Stamp duty applies at the commercial rates on every freehold commercial purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Hollingbury and Patcham (BN1)",
      body:
        "Two live Brighton & Hove City Council Idox files anchor the current Hollingbury and Patcham commercial mortgage pipeline. A Hollingbury Industrial Estate file (Ref <strong>BH2025/01678/FUL</strong>) covers extension and reconfiguration of a Hollingbury industrial unit including additional first-floor space and external alterations, the canonical BN1 8 owner-occupier industrial asset-management profile we routinely fund through Allica Bank, HTB and Cambridge & Counties at 70 to 75% LTV. A Patcham Court Farm file (Ref <strong>BH2025/01145/FUL</strong>) covers trade and mixed-use redevelopment at the Patcham Court Farm site at the northern A23 edge, illustrative of the BN1 8 trade-to-mixed-use pipeline that funds either as bridge-to-let during works or as commercial investment mortgage on stabilisation. Most Hollingbury and Patcham industrial change-of-use happens under Class E to Class E permitted-development rights for trade-counter and ancillary office space within B2 and B8 envelopes, fundable as straight refinance once works complete. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "BH2025/01678/FUL",
          address: "Hollingbury Industrial Estate unit, Brighton BN1 8DR",
          postcode: "BN1 8DR",
          proposal: "Extension and reconfiguration of a Hollingbury Industrial Estate unit including additional first-floor space and external alterations, the canonical BN1 8 owner-occupier industrial asset-management profile Allica Bank, HTB and Cambridge & Counties compete on at 70 to 75% LTV.",
        },
        {
          ref: "BH2025/01145/FUL",
          address: "Patcham Court Farm, Brighton BN1 8YE",
          postcode: "BN1 8YE",
          proposal: "Trade and mixed-use redevelopment at the Patcham Court Farm site at the northern A23 edge, illustrative of the BN1 8 trade-to-mixed-use pipeline that funds either as bridge-to-let during works or as commercial investment mortgage on stabilisation.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Hollingbury and Patcham",
      items: [
        { label: "Hollingbury light industrial owner-occupier", detail: "SMEs buying B2 workshop, storage or trade-counter unit on the Hollingbury Industrial Estate.", typicalSize: "£400K to £1.5M facility" },
        { label: "Small industrial investment", detail: "Let B2 and B8 units held as long-hold private investment.", typicalSize: "£500K to £2M" },
        { label: "Trade-counter and B2 ancillary", detail: "Trade-counter retail and ancillary commercial within the estate and along the A23 spine.", typicalSize: "£350K to £900K" },
        { label: "A23 corridor MOT and forecourt", detail: "Independent MOT, garage and small forecourt operators on EBITDA cover.", typicalSize: "£300K to £1M" },
        { label: "Patcham Court Farm trade and mixed-use", detail: "Trade and emerging mixed-use development exits at the northern A23 edge.", typicalSize: "£600K to £2.5M" },
        { label: "Hollingbury fringe convenience retail", detail: "Small-cap convenience retail and parade stock along the A23 BN1 8 spine.", typicalSize: "£300K to £700K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Hollingbury and Patcham",
      body: 'Light industrial owner-occupier dominates via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Small B2 and B8 investment routes through <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. MOT, forecourt and trade-counter operators fund via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Patcham Court Farm mixed-use development exits route via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> with term-out. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Hollingbury industrial and Patcham trade",
      body:
        "Industrial-led across the BN1 8 footprint. Allica Bank is one of the prominent lenders on Brighton industrial owner-occupier and small investment at 70 to 75% LTV and 6.0 to 7.5% pa on the £400K to £1.5M end, with the structural supply constraint on Brighton industrial stock underwriting strong asset retention assumptions. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the stronger-covenant Hollingbury and Patcham owner-occupier and stabilised investment at 65 to 75% LTV and 6.0 to 7.0% pa. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> take small industrial investment, trade-counter and ancillary commercial at 70 to 75% LTV and 6.5 to 8.0% pa. HTB and Cambridge & Counties price competitively on the £500K to £2M industrial investment book. Together is prominent on the A23 corridor MOT and forecourt trading-business at 60 to 70% LTV and 7.5 to 9.0% pa. <strong>LendInvest</strong> covers value-add and bridge-to-let on Patcham Court Farm trade-to-mixed-use exits. <strong>Cynergy Bank</strong> takes selected Hollingbury and Patcham trading-business deals on the licensed-trade and convenience-retail end. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "mot-garage-petrol", "retail", "mixed-use", "semi-commercial", "leisure-hospitality"],
    faqs: [
      {
        question: "Best rate on Hollingbury Industrial Estate owner-occupier?",
        answer:
          "6.0 to 7.5% pa at 70 to 75% LTV. Allica Bank, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on Brighton industrial owner-occupier and EBITDA cover at 1.3 to 1.5x. The structural supply constraint on industrial stock inside the Brighton city boundary underwrites strong asset retention and lender comfort. Stamp duty applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "Can we fund a Patcham Court Farm mixed-use development exit?",
        answer:
          'Yes via <a href="/services/commercial-bridge-to-let">bridge-to-let</a> during works and term-out onto commercial investment or semi-commercial mortgage on stabilisation. <strong>LendInvest</strong>, <strong>Shawbrook</strong> and HTB compete on the bridge stage. The BH2025/01145/FUL Patcham Court Farm file is the canonical BN1 8 trade-to-mixed-use pipeline.',
      },
      {
        question: "Hollingbury industrial investment, what LTV?",
        answer:
          "Up to 75% LTV on stabilised B2 and B8 investment. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Allica Bank, HTB and Cambridge & Counties compete on the £500K to £2M end at 6.5 to 8.0% pa. ICR at 140 to 160% stressed against the lender's reversion rate. Refinancing existing facilities is currently the busiest single use case.",
      },
      {
        question: "MOT or forecourt operator on the A23 corridor, what lender?",
        answer:
          'Together is prominent on the BN1 A23 corridor MOT, garage and forecourt trading-business book at 60 to 70% LTV and 7.5 to 9.0% pa. <strong>Shawbrook</strong> takes selected deals on the stronger-covenant end. See our <a href="/property-types/mot-garage-petrol">MOT, garage and forecourt</a> page. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.',
      },
    ],
  },
};

export function getAreaDetail(slug: string): AreaDetail | null {
  return areaDetails[slug] ?? null;
}
