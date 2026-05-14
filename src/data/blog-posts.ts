/**
 * Blog launch slate, Commercial Mortgages Brighton.
 *
 * Per PRD §7.6: 10-post launch slate. One full-bodied launch post,
 * nine stubs with title, excerpt and H2 outline to be expanded
 * post-launch through the editorial calendar.
 *
 * Slugs match /blog/[slug] route, keep stable for SEO.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  localStats: Array<{
    stat: string;
    source: string;
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "brighton-commercial-property-market",
    title: "The Brighton commercial property market in 2026",
    excerpt:
      "A working read on the Brighton commercial property market at mid-2026. The BN1 city-centre retail story (Churchill Square, North Laine, The Lanes). The Kings Road seafront hospitality strip. The four semi-commercial spines (St James's Street, London Road, Western Road, Seven Dials). The Edward Street Quarter and Preston Barracks regen pipeline. The Marina leisure cluster. The 90-strong lender pool that funds it. Plus a rates and BoE-trajectory view into 2027.",
    content: "See /brighton-commercial-property-market for the full editorial article. This entry exists so the blog index can surface the flagship piece.",
    image: "/images/blog-brighton-market-2026.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-05-11",
    category: "Market Read",
    tags: ["brighton", "commercial property", "2026", "market read", "flagship"],
    localStats: [
      { stat: "Brighton and Hove population: ~278,000", source: "ONS Mid-Year Population Estimates" },
      { stat: "Visitor economy: ~11M visitors/year", source: "Brighton and Hove City Council" },
      { stat: "Combined university student base: ~37,000", source: "University of Brighton + University of Sussex" },
      { stat: "Median residential price (12m): £415,000", source: "HM Land Registry" },
      { stat: "Mid-2026 CM rate range: 6.0–9.0% pa", source: "Broker panel, May 2026" },
    ],
  },

  {
    slug: "commercial-mortgage-rates-brighton-rest-of-2026",
    title: "Commercial mortgage rates in Brighton: what to expect for the rest of 2026",
    excerpt:
      "A view on where Brighton commercial mortgage pricing sits at mid-2026 and where it is likely to land by year-end. Owner-occupier 6.0–7.5% pa, commercial investment 6.5–8.5%, semi-commercial up to 9.5%, trading-business up to 10%. Plus the BoE base rate trajectory, swap-curve direction, and named lender appetite where the broker has confirmed permission.",
    content: `Coming soon, full guide to Brighton commercial mortgage pricing for the rest of 2026.

## Outline

- The macro setting at mid-2026: base rate and swap curve
- Owner-occupier rate range and lender shortlist
- Commercial investment ICR-led pricing
- Semi-commercial shop-with-flat pricing
- Trading-business sector-specific pricing
- Hospitality and hotel pricing on the BN1 / BN2 seafront
- HMO portfolio pricing across Kemptown and Falmer / Lewes Road
- BoE trajectory and rate forecasts into 2027`,
    image: "/images/blog-rates-2026.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-05-18",
    category: "Market Update",
    tags: ["rates", "brighton", "commercial mortgage", "2026", "market update"],
    localStats: [],
  },

  {
    slug: "owner-occupier-vs-investment-commercial-mortgage-brighton",
    title: "Owner-occupier vs investment commercial mortgages: the underwriting split",
    excerpt:
      "How owner-occupier and commercial investment mortgages differ in underwriting, lender pool and pricing across the Brighton market. EBITDA cover at 1.3 to 1.5x versus ICR cover at 140 to 160% stressed. Two-year clean accounts versus tenant covenant and lease length. Active BN1 / BN2 / BN3 sub-markets for each product type and the named lender desks that compete on Brighton owner-occupier and investment deals.",
    content: `Coming soon, comparison guide between owner-occupier and commercial investment mortgages in Brighton.

## Outline

- The fundamental underwriting split: EBITDA versus ICR
- Owner-occupier: 1.3 to 1.5x EBITDA cover, 2 years' accounts
- Investment: 140 to 160% ICR stressed, tenant covenant
- Lender pool by product
- Active Brighton sub-markets for each
- Worked example: BN3 Hove dental practice owner-occupier
- Worked example: BN1 North Laine retail investment
- Tax treatment, SPV structure, personal guarantee differences`,
    image: "/images/blog-owner-vs-investment.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-05-25",
    category: "Guide",
    tags: ["owner occupier", "investment", "brighton", "guide", "commercial mortgage"],
    localStats: [],
  },

  {
    slug: "dscr-icr-explained-brighton-examples",
    title: "DSCR and ICR explained: how lenders test affordability on Brighton commercial investment",
    excerpt:
      "ICR (interest cover ratio) and DSCR (debt service coverage ratio) are the two affordability tests that determine how much commercial investment mortgage you can raise against a let asset in Brighton. This piece walks through the calculations, the typical Brighton stress rates, and worked examples on a Kemptown shop-with-flat, a Hove office block and an Edward Street Quarter Grade A office investment.",
    content: `Coming soon, technical walk-through of ICR and DSCR with Brighton worked examples.

## Outline

- ICR formula and typical Brighton cover requirements
- DSCR formula and amortising-basis cover
- Stress rates: how lenders apply them
- Worked example 1: BN2 Kemptown shop-with-flat
- Worked example 2: BN3 Hove multi-let office
- Worked example 3: Edward Street Quarter Grade A office
- The LTV cap versus the affordability cap
- How to optimise: term, fix, structure`,
    image: "/images/blog-dscr-icr.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-06-08",
    category: "Technical",
    tags: ["DSCR", "ICR", "investment", "brighton", "underwriting"],
    localStats: [],
  },

  {
    slug: "care-home-commercial-mortgages-cqc-brighton",
    title: "Care home commercial mortgages: CQC, occupancy, and the Brighton specialist desks",
    excerpt:
      "Care home and assisted-living commercial mortgages are sector-specialist lending with sector-specific underwriting around CQC rating, occupancy, weighted-average bed value and council-versus-private fee mix. This piece walks through the active care-home lender desks for the Brighton market (Shawbrook, Cambridge & Counties, Hampshire Trust), the rate ranges, the document pack required at submission, and worked examples around the Withdean, Hove and Preston Park care-home catchments.",
    content: `Coming soon, sector-specialist guide to care home commercial mortgages in Brighton.

## Outline

- The sector underwriting metrics: CQC, occupancy, WABV, fee mix
- Active Brighton care-home lender desks
- Typical LTV, term, rate and ERC pattern
- The document pack at submission
- Re-inspection cycle risk and refinance timing
- Worked example: 32-bed Withdean care home refinance
- Worked example: 18-bed Hove care home acquisition
- Specialist versus mainstream: when each makes sense`,
    image: "/images/blog-care-home.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-06-22",
    category: "Sector Guide",
    tags: ["care home", "brighton", "CQC", "specialist", "trading business"],
    localStats: [],
  },

  {
    slug: "pub-freehold-purchase-brighton-barrelage-ebitda",
    title: "Pub freehold purchase in Brighton: barrelage, EBITDA and the licensed-trade desks",
    excerpt:
      "Pub and bar trading-business mortgages in Brighton run through a small specialist desk of licensed-trade lenders (Cynergy Bank, ASK Partners, Allied Irish Bank UK) that underwrite on barrelage, EBITDA, beer-tie status and license type. This piece walks through the pub freehold acquisition process, the typical pack required by Cynergy and ASK Partners, the LTV and rate ranges, and worked examples around the North Laine, Kemptown and Hove pub clusters.",
    content: `Coming soon, sector-specialist guide to pub freehold purchase in Brighton.

## Outline

- Why pub finance sits outside mainstream commercial mortgage lending
- The four underwriting metrics: barrelage, EBITDA, beer-tie, license
- Active Brighton licensed-trade lender desks
- Typical LTV, rate range and ERC pattern
- The document pack and pre-screen with the lender
- Worked example: independent pub freehold in North Laine
- Worked example: free-of-tie gastropub in Hove
- Worked example: seafront bar refinance in BN2 Kemptown`,
    image: "/images/blog-pub.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-07-05",
    category: "Sector Guide",
    tags: ["pub", "licensed trade", "brighton", "barrelage", "trading business"],
    localStats: [],
  },

  {
    slug: "semi-commercial-mortgage-brighton-shop-with-flat-fca",
    title: "Semi-commercial mortgages in Brighton: shop-with-flat, FCA edges and the specialist lender pool",
    excerpt:
      "Semi-commercial mortgages on classic Brighton shop-with-flat archetypes (BN1 North Laine and Lanes, BN2 Kemptown, BN1 London Road, BN3 Hove Central, BN1 Seven Dials) typically run at 75% LTV blended ICR around 145%. The product is dominated by specialist desks (InterBay Commercial, Shawbrook, Cynergy Bank), with FCA-regulated edges where the borrower personally occupies one of the flats. This piece walks through the underwriting, the regulated/unregulated split and the active Brighton semi-commercial lender desks.",
    content: `Coming soon, technical guide to semi-commercial mortgages in Brighton.

## Outline

- The minimum residential floor area threshold (40%) and why it matters
- Blended ICR around 145%: how it works
- Active Brighton semi-commercial lender shortlist
- Typical LTV, rate range and ERC pattern
- Where FCA-regulated edges apply
- Worked example: BN1 North Laine shop-with-flat
- Worked example: BN2 Kemptown shop-with-three-flats
- Worked example: BN3 Hove Central terrace shop-with-flat
- Refinance versus purchase: which is most active right now`,
    image: "/images/blog-semi-commercial.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-07-19",
    category: "Sector Guide",
    tags: ["semi commercial", "FCA", "brighton", "regulated", "shop with flat"],
    localStats: [],
  },

  {
    slug: "portfolio-refinance-brighton-when-to-consolidate",
    title: "Portfolio refinance in Brighton: when to consolidate, when to leave alone",
    excerpt:
      "Brighton commercial property investors carrying 5+ assets across different lenders and maturity dates are the natural audience for portfolio refinance. But not every portfolio benefits from consolidation: the maturity calendar, the ERC profile, the LTV across the portfolio and the tenant concentration all matter. This piece walks through the case-selection framework, the named portfolio lenders active in the £2M–£15M Brighton bracket (Shawbrook, Cambridge & Counties, InterBay, Cynergy), and worked examples across hospitality and semi-commercial portfolios.",
    content: `Coming soon, decision framework for portfolio refinance in Brighton.

## Outline

- When portfolio refinance makes sense
- When it does not
- Blanket charge versus aggregated facility
- Active Brighton portfolio lenders
- ERC modelling across the portfolio
- Worked example: 6-asset Kemptown semi-commercial portfolio
- Worked example: 4-asset Hove office investment portfolio
- Tenant concentration and sector concentration risk`,
    image: "/images/blog-portfolio.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-08-02",
    category: "Guide",
    tags: ["portfolio", "refinance", "brighton", "investment", "consolidation"],
    localStats: [],
  },

  {
    slug: "stamp-duty-commercial-property-brighton-2026-changes",
    title: "Stamp duty on commercial property: the 2026 picture and what is changing",
    excerpt:
      "Stamp Duty Land Tax on commercial property in Brighton and the rest of England runs on three non-residential bands: 0% to £150,000, 2% on the next £100,000, 5% on the balance. There is no first-time-buyer relief, no second-property surcharge, and no annual tax on enveloped dwellings issue. This piece walks through how SDLT is calculated on commercial purchases at typical Brighton price points (£600K shop+flat, £1.7M trading business freehold, £3.7M industrial unit), how mixed-use property is treated, what the 2026 Autumn Budget signalled for the bands, and the most common SDLT mistakes commercial buyers make, including the mixed-use mis-classification trap.",
    content: `Coming soon, full guide to commercial property stamp duty in Brighton.

## Outline

- The non-residential SDLT bands at mid-2026
- Worked example 1: £600K semi-commercial shop+flat
- Worked example 2: £1.7M trading business freehold
- Worked example 3: £3.7M industrial unit
- Mixed-use vs residential classification
- The mixed-use trap and HMRC's recent enforcement stance
- Limited company vs personal purchase: tax treatment differences
- Autumn Budget 2026: signalled changes
- SDLT and refinancing: when does it apply, when does it not`,
    image: "/images/blog-stamp-duty.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-08-16",
    category: "Tax & Structure",
    tags: ["stamp duty", "SDLT", "tax", "brighton", "commercial property"],
    localStats: [],
  },

  {
    slug: "limited-company-structure-commercial-mortgage-investment",
    title: "Limited company structure for commercial mortgage investment: SPV, group company or trading company?",
    excerpt:
      "Most commercial investment mortgages in Brighton are written into limited companies, but the question of whether to use a clean special-purpose vehicle (SPV), a group holding structure, or the existing trading company is one borrowers regularly get wrong. The lender treatment, the tax treatment and the future-flexibility implications are all different. This piece walks through the standard SPV structure (single asset, SIC code 68209, clean limited company), the group-holding alternative for portfolio investors, and when it makes sense to put commercial property on the trading company balance sheet. With reference to lender appetite at NatWest, Lloyds, Shawbrook, Cambridge & Counties and InterBay Commercial across each structure.",
    content: `Coming soon, guide to limited company structures for commercial mortgage investment.

## Outline

- The SPV standard: single asset, SIC 68209
- Group structure: holding company plus SPV per asset
- Trading company holding: when it makes sense
- Tax treatment by structure
- Lender appetite by structure
- Personal guarantee implications
- Future-flexibility: refinance, sale, gift
- Worked example: 4-asset portfolio in Kemptown
- Worked example: dental practice with property in same limited company`,
    image: "/images/blog-limited-company.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-08-30",
    category: "Tax & Structure",
    tags: ["limited company", "SPV", "structure", "tax", "investment"],
    localStats: [],
  },

  {
    slug: "commercial-bridging-brighton-when-right-when-not",
    title: "Commercial bridging in Brighton: when it is the right answer, and when it absolutely is not",
    excerpt:
      "Commercial bridging at 0.75 to 1.10% per month is meaningfully more expensive than term commercial mortgage debt at 7.5 to 9.0% pa, but for the right case it is the right answer. Vacant possession purchase below market value, change-of-use light works, sub-12-month exit, chain-break refinancing, all real bridging use cases I see in the Brighton market every month. The wrong cases, using bridging where a clean commercial investment mortgage would fund, or using bridging because the borrower's accounts are not yet ready for term, cost real money and frequently end badly. This piece walks through the case-selection framework, the bridge-to-let exit mechanic, and the active Brighton bridging desks at LendInvest, Shawbrook, Together and Hampshire Trust Bank.",
    content: `Coming soon, practical guide to commercial bridging decisions.

## Outline

- What commercial bridging actually costs: 0.75 to 1.10% pm
- The right cases: VP purchase, light works, chain break
- The wrong cases: 'because we couldn't get a term loan'
- The bridge-to-let mechanic and the agreed exit
- Bridge-to-sale: when it works
- Active Brighton bridging desks
- Worked example 1: vacant Kemptown parade purchase
- Worked example 2: change-of-use London Road unit
- Worked example 3: chain-break Hove pub`,
    image: "/images/blog-bridging.png",
    author: "Commercial Mortgages Brighton",
    publishDate: "2026-09-13",
    category: "Guide",
    tags: ["bridging", "bridge to let", "brighton", "guide", "commercial"],
    localStats: [],
  },
];
