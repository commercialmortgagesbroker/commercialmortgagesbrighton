/**
 * Case studies, Commercial Mortgages Brighton.
 *
 * Ten anonymised case studies covering the Brighton market hooks:
 * Kings Road seafront hotel refinance, Lewes Road HMO portfolio,
 * Hove professional office owner-occupier, Edward Street Quarter
 * office investment, Kemptown F&B owner-occupier, North Laine
 * independent retail freehold, Brighton Marina hospitality,
 * Preston Barracks Plus X creative office acquisition,
 * Western Road Hove retail refinance, Falmer PBSA-adjacent
 * semi-commercial.
 *
 * Real Brighton postcodes/districts. Specifics on rate, LTV, term and lender
 * (eight named lenders only: Shawbrook, InterBay Commercial, LendInvest,
 * Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Rates inside
 * the 6.0 to 9.0 pct pa band. boroughSlug matches the 12 Brighton area slugs
 * in src/lib/constants.ts.
 */

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  borough: string;
  boroughSlug: string;
  financeType: string;
  loanAmount: string;
  gdv: string;
  ltv: string;
  term: string;
  units: number;
  schemeType: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyStats: { label: string; value: string }[];
  coordinates: [number, number];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "Independent seafront hotel refinance, Kings Road",
    slug: "kings-road-seafront-hotel-refinance",
    borough: "Seafront and Kings Road",
    boroughSlug: "seafront-kings-road",
    financeType: "Trading-Business Mortgage (Hotel)",
    loanAmount: "£4.25M",
    gdv: "£6.15M",
    ltv: "69%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Independent 46-bedroom seafront hotel freehold",
    summary:
      "An experienced hospitality operator refinanced a 46-bedroom independent hotel on the Kings Road seafront (BN1) off a maturing 5-year fix with a £4.25M trading-business mortgage at 69% LTV, 20-year term, 7.95% pa via Cynergy Bank.",
    challenge:
      "Regency-period listed building on the Kings Road seafront strip, trading consistently through the previous five years with occupancy averaging 79% across the most recent 24 months, supported by the year-round Brighton tourism flow, the university term-time corporate overlay and a long-standing wedding-and-events programme. ADR steady at £138, EBITDA £685K on the most recent full year. Previous 5-year fix at 5.25% pa was maturing inside 90 days.\n\nThe complication was twofold: the listed-building heritage status (Grade II) on the seafront frontage and the requirement to refresh several mechanical and electrical conditions flagged in the previous valuer’s report. Two mainstream commercial desks declined on the listed-building grounds; one offered 8.85% pa over 15 years with a tight personal guarantee.",
    solution:
      "Cynergy Bank quoted 7.95% pa on a 5-year fix inside a 20-year amortisation at 69% LTV (£4.25M against £6.15M valuation). EBITDA cover at 1.78x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy’s hospitality desk accepted the listed-building position on the strength of a specialist heritage RICS valuation that addressed the conservation covenants directly and a costed M&E refresh plan.\n\nThe credit submission included three years of audited accounts, the operator’s previous hotel track record on a second Brighton site, the listed-building consent and conservation officer correspondence, the M&E refresh plan with fixed-price contractor quotes, and the licence pack. Specialist hospitality and heritage RICS valuer instructed. Credit approval at week 5, full legal completion at week 9 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years across the entire seafront freehold. Monthly interest cost approximately £38K pa lower than the high-street alternative quote over the 5-year fix. Operator has subsequently approached us about a second Brighton hospitality acquisition on the same Cynergy route.",
    keyStats: [
      { label: "Facility", value: "£4.25M" },
      { label: "Property value", value: "£6.15M" },
      { label: "LTV", value: "69%" },
      { label: "Rate", value: "7.95% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "EBITDA cover", value: "1.78x" },
    ],
    coordinates: [50.8210, -0.1480],
  },
  {
    id: "cs-002",
    title: "HMO portfolio remortgage, Lewes Road",
    slug: "lewes-road-hmo-portfolio",
    borough: "Falmer and Lewes Road",
    boroughSlug: "falmer-lewes-road",
    financeType: "Portfolio Refinance (HMO)",
    loanAmount: "£2.15M",
    gdv: "£2.95M",
    ltv: "73%",
    term: "25 years",
    units: 7,
    schemeType: "Seven-property HMO portfolio (38 bed-spaces)",
    summary:
      "A Brighton-based HMO operator refinanced a seven-property Lewes Road and Bevendean (BN2) HMO portfolio into a single £2.15M facility at 73% LTV, 25-year amortisation, 7.55% pa via InterBay Commercial.",
    challenge:
      "Seven terraced HMOs across the Lewes Road, Bevendean and Coldean catchment, all sitting inside the Brighton and Hove City Council Article 4 area and all on existing C4 or Sui Generis HMO planning consents pre-dating the Article 4 designation. 38 bed-spaces combined, tenanted to a mix of University of Brighton and University of Sussex students alongside young-professional renters supported by the Royal Sussex County Hospital and Amex House catchment. Gross rent £245K pa, valuation £2.95M.\n\nThe operator had financed the portfolio across three legacy lenders, two on variable rates and one on a maturing fix, with personal-guarantee exposure the borrower wanted to reduce. The Article 4 status meant the lender had to take an underwriting view on planning permanence and ongoing licensing compliance under the Brighton and Hove additional licensing scheme, which a portion of the lender pool will not entertain.",
    solution:
      "InterBay Commercial quoted 7.55% pa over a 25-year amortisation at 73% LTV (£2.15M against £2.95M valuation). Blended ICR test at 149% stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission included the seven HMO planning consents (each pre-dating the Article 4 designation), the Brighton and Hove HMO licence pack, three years of borrower rental track record at 95% occupancy across academic and summer-let periods, the SPV pack and the deposit proof. The three legacy redemptions ran in parallel through one solicitor instruction. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Three legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the portfolio. Personal-guarantee exposure reduced from 30% of facility to 22%. The operator has subsequently used the same lender for an eighth-property acquisition on the same Lewes Road catchment.",
    keyStats: [
      { label: "Facility", value: "£2.15M" },
      { label: "Property value", value: "£2.95M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "7.55% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "149%" },
    ],
    coordinates: [50.8470, -0.1190],
  },
  {
    id: "cs-003",
    title: "Professional services office freehold purchase, Hove",
    slug: "hove-professional-office-owner-occupier",
    borough: "Hove Central and Western Road",
    boroughSlug: "hove-central",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.45M",
    gdv: "£1.98M",
    ltv: "73%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier professional services office freehold (accountancy partnership)",
    summary:
      "A Hove accountancy partnership acquired the freehold of its Norton Road office building (BN3) for £1.98M with a £1.45M owner-occupier commercial mortgage at 73% LTV, 20-year term, 6.75% pa via NatWest.",
    challenge:
      "Established mid-tier accountancy firm, nine partners, twenty-two staff, trading from leased Hove premises on Norton Road for eight years. The freeholder offered the property at £1.98M open market valuation with a four-month decision window ahead of the partnership’s financial year-end. The partnership had £530K deposit available from accumulated retained earnings.\n\nUnderwriting was clean on the trading side, three years of audited accounts, EBITDA £555K on the latest year, stable client mix across professional services, healthcare and Brighton-and-Hove SME clients. The challenge was the LTV at the upper end of the partnership’s comfort zone and matching the deal to a lender willing to give meaningful rate competition against the incumbent high-street relationship, which had quoted 7.95% pa over 15 years.",
    solution:
      "NatWest commercial banking quoted 6.75% pa over 20 years at 73% LTV (£1.45M against £1.98M valuation). EBITDA cover at 2.18x stressed, comfortable margin for the regulated profession sector. Barclays Commercial and Lloyds also quoted; NatWest offered the cleanest covenant package on personal guarantee structure.\n\nThe credit submission ran on three years of audited accounts, current management figures, partner-level CV pack, deposit proof, the building survey and a clean Phase I environmental assessment. Specialist commercial valuer instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the partnership’s financial year-end. Monthly mortgage payment £11,150 against monthly EBITDA of £46,250, very strong cover. Rate saving against the high-street alternative quoted: approximately £17K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£1.45M" },
      { label: "Property value", value: "£1.98M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "6.75% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.18x" },
    ],
    coordinates: [50.8275, -0.1690],
  },
  {
    id: "cs-004",
    title: "Office investment refinance, Edward Street Quarter",
    slug: "edward-street-quarter-office-investment",
    borough: "Edward Street Quarter",
    boroughSlug: "edward-street-quarter",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£3.85M",
    gdv: "£5.70M",
    ltv: "68%",
    term: "25 years (5yr fix)",
    units: 1,
    schemeType: "Single-let office investment within Edward Street Quarter scheme",
    summary:
      "A single-let office investment within the Edward Street Quarter mixed-use scheme (BN2) refinanced off a maturing 5-year fix with a £3.85M commercial investment mortgage at 68% LTV, 25-year amortisation, 7.05% pa via Shawbrook.",
    challenge:
      "The asset, 12,400 sqft of Grade A office let to an established South Coast professional services tenant on a 10-year FRI lease with 7 years unexpired at refinance, was carrying a maturing 5-year fix at 5.45% pa. Net rent £435K pa, valued at £5.70M by the lender’s panel valuer. The investor wanted a fresh 5-year fix at the right rate plus a £120K capital release for a planned second acquisition in the same scheme.\n\nThe high-street commercial incumbent quoted 7.65% pa over 20 years, which was wider than the asset class should have warranted on a strong covenant and a meaningful unexpired term. With Edward Street Quarter’s delivery record now well established and tenant covenants improving, the deal should have priced inside the institutional appetite band; the issue was matching it to the right specialist lender desk on the first call.",
    solution:
      "We benchmarked the deal across four regen-active investment lender desks. Shawbrook quoted 7.05% pa on a 5-year fix inside a 25-year amortisation at 68% LTV (£3.85M against £5.70M valuation). ICR cover at 155% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts, the Edward Street Quarter scheme planning history, occupancy track record, the SPV pack and the deposit proof on the £120K capital release. RICS Red Book valuation by a specialist South Coast commercial valuer in 20 working days. Full credit approval at week 4, legal completion at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years and £120K capital released against the next Edward Street Quarter acquisition. Monthly interest cost approximately £23K pa below the high-street incumbent’s quoted rate over the 5-year fix. Investor has subsequently used the same lender route for the planned second acquisition.",
    keyStats: [
      { label: "Facility", value: "£3.85M" },
      { label: "Property value", value: "£5.70M" },
      { label: "LTV", value: "68%" },
      { label: "Rate", value: "7.05% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "155%" },
    ],
    coordinates: [50.8225, -0.1285],
  },
  {
    id: "cs-005",
    title: "Restaurant freehold purchase, Kemptown",
    slug: "kemptown-fb-owner-occupier",
    borough: "Kemptown",
    boroughSlug: "kemptown",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£745K",
    gdv: "£1.05M",
    ltv: "71%",
    term: "15 years",
    units: 1,
    schemeType: "Free-of-tie independent restaurant freehold",
    summary:
      "An experienced Kemptown F&B operator acquired the freehold of its St James’s Street restaurant premises (BN2) for £1.05M with a £745K owner-occupier mortgage at 71% LTV, 15-year term, 7.45% pa via Cynergy Bank. Completed in 26 working days from initial enquiry.",
    challenge:
      "Independent restaurant trading from leased premises on St James’s Street, the Kemptown F&B spine, for seven years. Very strong covers profile supported by the year-round Brighton tourism flow, the Royal Sussex County Hospital and Amex House staff lunch trade and a loyal local catchment. Turnover £985K, EBITDA £142K on the most recent full year.\n\nThe landlord served notice to sell at £1.05M with a tight three-month decision window. The operator had £305K deposit available from accumulated retained profit. The challenge was speed and the central-Brighton F&B sector underwrite, several mainstream commercial desks decline central-Brighton leisure on perceived tourism volatility despite the actual trading consistency.",
    solution:
      "Cynergy Bank quoted 7.45% pa over 15 years at 71% LTV (£745K against £1.05M valuation). EBITDA cover at 1.59x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Licensed-trade and hospitality specialist RICS valuer.\n\nThe credit submission included three years of accounts, current management figures, the licence pack, deposit proof, identity and source-of-funds documents. Cynergy’s licensed-trade desk approved in 13 working days. Specialist valuer instructed in parallel with credit underwriting; valuation back at week 2. Full legal completion at 26 working days from initial enquiry, the fastest Brighton owner-occupier completion on our recent record.",
    outcome:
      "Freehold acquired ahead of the vendor’s three-month decision window. Monthly mortgage payment £6,850 against monthly EBITDA of £11,800, comfortable cover for continued reinvestment in kitchen kit. Operator has approached us about a second Kemptown F&B opportunity on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£745K" },
      { label: "Property value", value: "£1.05M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "7.45% pa" },
      { label: "Term", value: "15 years" },
      { label: "EBITDA cover", value: "1.59x" },
    ],
    coordinates: [50.8205, -0.1240],
  },
  {
    id: "cs-006",
    title: "Independent retail freehold purchase, North Laine",
    slug: "north-laine-independent-retail-freehold",
    borough: "Brighton City Centre, North Laine and The Lanes",
    boroughSlug: "city-centre-north-laine-lanes",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£625K",
    gdv: "£865K",
    ltv: "72%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier independent retail freehold (lifestyle / homeware)",
    summary:
      "A long-standing North Laine independent lifestyle retailer acquired the freehold of its Gardner Street shop premises (BN1) for £865K with a £625K owner-occupier commercial mortgage at 72% LTV, 20-year term, 6.95% pa via Barclays.",
    challenge:
      "Independent retailer trading from leased Gardner Street premises in the heart of North Laine for eleven years, a destination independent retail catchment supported by Brighton’s year-round tourism flow and a strong local catchment. Turnover £685K, EBITDA £118K on the most recent full year, stable mix of in-store and online revenue (online had risen from 18% to 32% of revenue over the previous three years).\n\nThe freeholder offered the building for sale at £865K with a 90-day window. The challenge was the small-ticket independent-retail sector underwrite, several mainstream commercial desks default to higher pricing on independent retail on perceived high-street volatility, despite the demonstrated North Laine destination-retail consistency.",
    solution:
      "Barclays Commercial quoted 6.95% pa over 20 years at 72% LTV (£625K against £865K valuation). EBITDA cover at 1.84x stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin for the sector. NatWest and Santander Commercial also quoted; Barclays offered the cleanest covenant package on personal guarantee structure.\n\nThe credit submission ran on three years of audited accounts, current management figures, the online-channel mix evidence, deposit proof, identity and source-of-funds documents. Specialist commercial valuer with North Laine comparables. Credit approval at week 3, full legal completion at week 7 from initial enquiry, comfortably inside the 90-day vendor window.",
    outcome:
      "Freehold acquired ahead of the vendor’s decision window. Monthly mortgage payment £4,825 against monthly EBITDA of £9,830, comfortable cover. Operator has subsequently used the same lender for a second Brighton-area independent retail acquisition.",
    keyStats: [
      { label: "Facility", value: "£625K" },
      { label: "Property value", value: "£865K" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "6.95% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.84x" },
    ],
    coordinates: [50.8235, -0.1395],
  },
  {
    id: "cs-007",
    title: "Hospitality acquisition, Brighton Marina",
    slug: "brighton-marina-hospitality",
    borough: "Brighton Marina",
    boroughSlug: "brighton-marina",
    financeType: "Trading-Business Mortgage (Hospitality)",
    loanAmount: "£2.95M",
    gdv: "£4.20M",
    ltv: "70%",
    term: "20 years",
    units: 1,
    schemeType: "Independent restaurant-with-rooms freehold (16-bedroom)",
    summary:
      "An experienced hospitality operator acquired the freehold of a 16-bedroom independent restaurant-with-rooms within the Brighton Marina cluster (BN2) for £4.20M with a £2.95M trading-business mortgage at 70% LTV, 20-year term, 8.15% pa via Cynergy Bank.",
    challenge:
      "Established trading business inside the Brighton Marina leisure-and-hospitality cluster, sixteen letting bedrooms above a 90-cover restaurant. Trading consistently with occupancy averaging 73% across the previous 24 months and restaurant covers materially supported by the Marina event programme and the wider Brighton coastal tourism flow. ADR £158, EBITDA £495K on the most recent full year of vendor accounts.\n\nThe vendor offered the freehold and goodwill for sale at £4.20M with a 120-day completion window. The complication was the long Marina ground-lease structure underneath the freehold interest and the requirement to take a view on the goodwill component within the valuation. Two mainstream commercial desks declined on the long-leasehold-under-freehold structure.",
    solution:
      "Cynergy Bank quoted 8.15% pa over 20 years at 70% LTV (£2.95M against £4.20M valuation). EBITDA cover at 1.68x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy’s hospitality desk accepted the Marina long-leasehold-under-freehold position on the strength of the head-lease term remaining (124 years unexpired) and a specialist hospitality RICS valuation that addressed goodwill separately.\n\nThe credit submission included three years of vendor accounts, the operator’s own hospitality track record across two previous restaurant-with-rooms acquisitions, the head-lease pack, the licence pack and a six-month post-completion management projection. Specialist hospitality RICS valuer instructed. Credit approval at week 5, full legal completion at week 10 from start, comfortably inside the 120-day window.",
    outcome:
      "Acquisition completed on schedule with the operator now controlling a Brighton Marina hospitality asset on long-term debt. The borrower has subsequently approached us about a second Brighton seafront hospitality acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£2.95M" },
      { label: "Property value", value: "£4.20M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "8.15% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.68x" },
    ],
    coordinates: [50.8120, -0.1010],
  },
  {
    id: "cs-008",
    title: "Creative-office acquisition, Preston Barracks and Plus X",
    slug: "preston-barracks-creative-office-acquisition",
    borough: "Preston Park and Preston Barracks",
    boroughSlug: "preston-park-preston-barracks",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£1.95M",
    gdv: "£2.85M",
    ltv: "68%",
    term: "25 years",
    units: 1,
    schemeType: "Single-let creative-office investment, Plus X-adjacent",
    summary:
      "An investor acquired a single-let creative-office investment adjacent to the Plus X Innovation Hub at Preston Barracks (BN2) for £2.85M with a £1.95M commercial investment mortgage at 68% LTV, 25-year amortisation, 7.25% pa via LendInvest. Personal guarantee cap negotiated down from 30% to 22%.",
    challenge:
      "8,200 sqft of Grade A creative-office space let to an established design agency on a 7-year FRI lease with 5 years unexpired at acquisition. Net rent £218K pa, valuation £2.85M. The tenant is part of the wider Wired Sussex creative cluster around Preston Barracks and Plus X Innovation Hub, with a strong covenant supported by named brand-side clients.\n\nThe investor wanted to negotiate a meaningful reduction in personal guarantee exposure on the strength of the tenant covenant and the underlying creative-cluster occupancy stability. The high-street incumbent had quoted 7.85% pa with a 30% of facility personal guarantee.",
    solution:
      "LendInvest quoted 7.25% pa over a 25-year amortisation at 68% LTV (£1.95M against £2.85M valuation). ICR cover at 152% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin.\n\nWe negotiated the personal guarantee cap down from 30% to 22% of facility on the strength of three years of clean rent collection history (98% on-time) and the tenant’s diversified named-client revenue base. The credit submission included the FRI lease, the tenant covenant pack with three years of accounts, the Preston Barracks scheme planning history, the SPV pack and the deposit proof. Credit approval at week 4, full legal completion at week 8.",
    outcome:
      "Acquisition completed with personal guarantee exposure materially reduced and the asset held on a clean 25-year structure. The investor has subsequently approached us about a second Preston Barracks-adjacent acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£1.95M" },
      { label: "Property value", value: "£2.85M" },
      { label: "LTV", value: "68%" },
      { label: "Rate", value: "7.25% pa" },
      { label: "Term", value: "25 years" },
      { label: "ICR", value: "152%" },
    ],
    coordinates: [50.8425, -0.1430],
  },
  {
    id: "cs-009",
    title: "Retail tenant-mix portfolio refinance, Western Road Hove",
    slug: "western-road-hove-retail-refinance",
    borough: "Hove Central and Western Road",
    boroughSlug: "hove-central",
    financeType: "Portfolio Refinance (Commercial Investment)",
    loanAmount: "£2.75M",
    gdv: "£4.05M",
    ltv: "68%",
    term: "25 years (5yr fix)",
    units: 5,
    schemeType: "Five-unit retail portfolio (Western Road / George Street secondary parade)",
    summary:
      "A Hove-based investor refinanced a five-unit retail parade on Western Road (BN3) into a single £2.75M facility at 68% LTV, 25-year amortisation, 7.15% pa via Shawbrook.",
    challenge:
      "Five-unit retail parade on Western Road in the Hove retail catchment, mixed tenant covenant base: one national pharmacy chain, one national coffee chain, one independent gift retailer and two flexible-term lets to independent F&B operators on shorter terms. Weighted average unexpired lease term 5.1 years. Combined gross rent £325K pa, valuation £4.05M.\n\nPrevious facility was a maturing 5-year fix at 5.45% pa across the portfolio with a 30% of facility personal guarantee. The investor wanted a fresh 5-year fix and a meaningful reduction in personal guarantee exposure on the strength of three years of clean rental track record across the parade, including the period spanning the broader UK central-retail volatility.",
    solution:
      "Shawbrook quoted 7.15% pa on a 5-year fix inside a 25-year amortisation at 68% LTV (£2.75M against £4.05M valuation). ICR cover at 156% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the blended tenant covenant base.\n\nWe negotiated the personal guarantee cap down from 30% to 24% of facility on the strength of three years of clean rent collection history (98% on-time across the five units) and the diversified tenant covenant base including two national covenants. The credit submission included three FRI leases plus the two flexible lets, tenant covenant packs on the national covenants, three-year rent collection history, the SPV pack and the original Western Road parade planning consent. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Refinance completed with rate certainty for five years, personal guarantee exposure materially reduced and the consolidated portfolio held on a clean single facility. The investor has subsequently used the same lender for a second Hove retail acquisition.",
    keyStats: [
      { label: "Facility", value: "£2.75M" },
      { label: "Property value", value: "£4.05M" },
      { label: "LTV", value: "68%" },
      { label: "Rate", value: "7.15% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "156%" },
    ],
    coordinates: [50.8265, -0.1715],
  },
  {
    id: "cs-010",
    title: "PBSA-adjacent semi-commercial refinance, Falmer",
    slug: "falmer-pbsa-adjacent-semi-commercial",
    borough: "Falmer and Lewes Road",
    boroughSlug: "falmer-lewes-road",
    financeType: "Portfolio Refinance (Semi-Commercial)",
    loanAmount: "£1.65M",
    gdv: "£2.30M",
    ltv: "72%",
    term: "25 years",
    units: 4,
    schemeType: "Four-block semi-commercial portfolio (4 retail / convenience units + 11 flats)",
    summary:
      "A Brighton-based investor refinanced a four-block Falmer and Lewes Road (BN1/BN2) semi-commercial portfolio, four ground-floor retail or convenience units with eleven self-contained student and young-professional flats above, into a single £1.65M facility at 72% LTV, 25-year term, 7.65% pa via InterBay Commercial.",
    challenge:
      "Four separate semi-commercial blocks along the Falmer and Lewes Road corridor, acquired over a six-year period and financed across two separate legacy lenders on two different rate structures, one maturing fix and one variable. Combined gross rent £148K pa (retail £52K, residential £96K), valuation £2.30M. The student and young-professional flats are tenanted to a mix of University of Brighton, University of Sussex and Royal Sussex County Hospital catchment renters.\n\nThe investor wanted a single consolidated facility, a clean 5-year fix, a small capital release of £65K for two shop-front upgrades, and a lender comfortable with the blended commercial-plus-residential structure across four separate titles adjacent to a PBSA-heavy catchment. Two legacy lenders had to be redeemed cleanly on the same day to release security.",
    solution:
      "InterBay Commercial quoted 7.65% pa over a 25-year amortisation at 72% LTV on the consolidated portfolio. Blended ICR test at 144% on combined commercial plus residential income, stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission consolidated four separate FRI commercial leases, eleven AST packs, the tenant covenant evidence on the commercial side, three years of borrower rental track record at 96% occupancy across academic and summer-let periods, the SPV pack and the deposit proof on the £65K capital release. The two legacy redemptions ran in parallel through one solicitor instruction. Credit approval at week 4, full legal completion at week 8.",
    outcome:
      "Two legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the entire portfolio. £65K shop-front upgrade delivered within four months. Investor now considering a fifth Falmer-corridor acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£1.65M" },
      { label: "Property value", value: "£2.30M" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "7.65% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "144%" },
    ],
    coordinates: [50.8625, -0.1085],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
