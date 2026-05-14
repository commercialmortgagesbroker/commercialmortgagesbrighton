/**
 * /faq page content, Commercial Mortgages Brighton.
 *
 * Four sections, 20 questions. Each answer 80 to 150 words for citable
 * passage-level depth. Required entities (used factually, never as
 * authorisation claims): mortgage, commercial mortgage, brighton, finance,
 * lender, broker, stamp duty, limited companies, refinance, residential.
 * Commercial mortgages are unregulated lending, do NOT claim FCA
 * authorisation. FAQ schema injected server-side.
 *
 * Voice: first-person plural ("we"). Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface FaqItem {
  question: string;
  answer: string; // HTML allowed
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

export const faqContent: FaqSection[] = [
  {
    heading: "The basics",
    items: [
      {
        question: "What is a commercial mortgage?",
        answer:
          'A commercial mortgage is long-term debt secured against income-producing or owner-occupied <strong>commercial</strong> property, offices, retail, industrial, semi-commercial shop+flats, healthcare, hospitality and trading-business premises. In the Brighton market for mid-2026, typical facility size 150K to 10M pounds; LTV 65 to 75 percent; term 5 to 25 years; rate 6.0 to 9.0 percent pa. Repayment is normally monthly capital and interest on a reducing balance. The lender takes a first legal charge over the property and usually a personal or limited company guarantee. See <a href="/services">our commercial mortgage services</a> for the full eight-product breakdown across owner-occupier, investment, semi-commercial, portfolio refinance and trading-business.',
      },
      {
        question: "Do commercial mortgages sit inside the FCA regulated mortgage perimeter?",
        answer:
          'No. Commercial mortgages are unregulated lending and fall outside the FCA\'s regulated mortgage perimeter. <strong>We are not FCA-authorised</strong> because the products we arrange are unregulated by definition. We place owner-occupier, investment, semi-commercial (where the borrower does not occupy the residential element), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. Regulated cases (semi-commercial where the borrower occupies the residential element, regulated bridging, residential mortgages, consumer buy-to-let) are referred to an FCA-authorised firm. Most commercial mortgage brokers operate the same way, because the underlying products do not require FCA authorisation.',
      },
      {
        question: "Who is a commercial mortgage for?",
        answer:
          'Three primary audiences and our week splits roughly evenly across all three. <strong>Owner-occupier business buyers</strong>, buying or refinancing the freehold of premises their own business trades from. Hove professional services on Norton Road, Kemptown F&B operators, Hollingbury trade-business owners, healthcare ancillary in Kemptown and Eastern Road, independent retail operators on North Laine and Western Road. <strong>Commercial property investors and landlords</strong>, buying or refinancing let commercial assets, single-let or multi-let, sometimes a portfolio of five or more. <strong>Trading-business owner-operators</strong>, hotels, restaurants, pubs, day nurseries, care homes, buying the operational property and the going concern together. The product, the lender pool and the underwriting style are different across the three; the broker discipline is the same.',
      },
      {
        question: "What is the difference between a commercial mortgage and development finance?",
        answer:
          'A <strong>commercial mortgage</strong> funds the purchase or refinance of a completed, income-producing or owner-occupied commercial property. Funds drawn in a single tranche at completion. Term 5 to 25 years. Monthly capital and interest. <strong>Development finance</strong> funds construction or heavy refurbishment and is drawn in tranches against build-progress monitoring, with interest rolled or serviced and capital repaid at exit (sale or refinance) typically 12 to 24 months later. <strong>Bridge-to-let</strong> sits in between for short-term value-add, buy a vacant or under-let asset, refurbish or re-tenant, then term out onto a long-term commercial mortgage once stabilised. An Edward Street Quarter vacant office refit is a typical bridge-to-let candidate. We broker commercial mortgages and bridge-to-let; we do not place pure ground-up development finance.',
      },
    ],
  },
  {
    heading: "Eligibility, deposit and pricing",
    items: [
      {
        question: "What deposit do I need for a commercial mortgage in Brighton?",
        answer:
          'Typically <strong>25 to 30 percent</strong> for owner-occupier and commercial investment. Semi-commercial often 25 percent. Trading-business (Kings Road seafront hotel, Kemptown restaurant, Brighton Marina leisure, care home) sits tighter at <strong>30 to 40 percent</strong>, reflecting the specialist underwrite. The deposit must be genuine equity and traceable: accumulated retained profit in the trading limited company, sale proceeds of another asset, family gift with a written declaration, or pension drawdown if structured cleanly. Lenders will not accept a second loan secured against the same property as the deposit. Personal guarantees do not count as equity. On owner-occupier deals where EBITDA cover is comfortable, occasional 80 percent LTV products exist but pricing is materially wider, usually not the right answer.',
      },
      {
        question: "Can I get a commercial mortgage with limited trading history?",
        answer:
          'For owner-occupier, two years of clean filed accounts is the comfortable minimum. We routinely place deals with <span class="figure-inline">12 to 18 months</span> trading where the sector is well understood, dental, GP, pharmacy, established skilled trades, regulated professions. The lender wants to see growing turnover, stable margins and a credible business case for the freehold purchase. For commercial investment the test is tenant covenant and lease length, not borrower trading history, a five-year-old single-asset SPV with a strong creative-industries tenant lease at Preston Barracks prices well. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, Allica Bank and Hampshire Trust Bank have meaningful flexibility on borrower history that high-street commercial desks will not entertain on the same case.',
      },
      {
        question: "Can a limited company take out a commercial mortgage?",
        answer:
          "Yes, and most commercial mortgages in the UK are written into <strong>limited companies</strong>. For commercial investment, a special-purpose vehicle (SPV) limited company is the standard structure: a single asset or portfolio held in a clean SPV with the SIC code 68209 (real-estate-related activities). For owner-occupier, the borrower is usually the trading limited company itself, with the property held on its balance sheet. Trading-business mortgages can be structured either way, into the trading company or into a separate property-holding limited company that leases the property back to the operating business. Lenders price both routes; the choice depends on tax efficiency, lender appetite and exit planning. We model the alternatives at indicative-terms stage.",
      },
      {
        question: "What rates are Brighton commercial mortgage lenders pricing at right now?",
        answer:
          'Mid-2026 ranges by product type, all inside the <span class="figure-inline">6.0 to 9.0 percent pa</span> band. Owner-occupier on strong covenants in defensive sectors: <span class="figure-inline">6.0 to 7.5 percent</span> pa. Commercial investment with prime tenant on a long lease, including creative-industries occupiers at Preston Barracks and Plus X: <span class="figure-inline">6.5 to 8.0 percent</span> pa. Semi-commercial shop+flat: <span class="figure-inline">7.0 to 8.0 percent</span> pa. Trading-business (Kings Road seafront hotel, Kemptown restaurant, pub, care home): <span class="figure-inline">7.5 to 9.0 percent</span> pa. HMO portfolio refinance across Lewes Road and Falmer: <span class="figure-inline">7.0 to 8.5 percent</span> pa. Drivers: LTV, EBITDA or ICR / DSCR cover, lease length, tenant covenant, sector and borrower track record.',
      },
      {
        question: "What fees should I expect on a Brighton commercial mortgage?",
        answer:
          '<strong>Arrangement fee:</strong> 1 to 2 percent of the facility, often added to the loan rather than paid up-front. <strong>RICS Red Book valuation fee:</strong> 1,500 to 8,000 pounds depending on asset complexity, sector-specialist (hotel, pub, care, listed building) and large investment lots cost more. <strong>Legal fees:</strong> both sides, your solicitor 2,500 to 8,000 pounds typical for commercial conveyancing, the lender\'s solicitor recharged at cost 1,500 to 4,000 pounds. <strong>Broker fee:</strong> usually included in the arrangement fee with no extra charge to the borrower; on complex specialist cases a separate broker fee is sometimes agreed. <strong>Exit / redemption fee:</strong> some 5-year fixes carry early-repayment charges of 3 to 5 percent in years 1 to 2, tapering. Total fee cost typically lands at 2 to 3 percent of the facility.',
      },
      {
        question: "Do I pay stamp duty on commercial property in Brighton?",
        answer:
          'Yes, Stamp Duty Land Tax (SDLT) applies to commercial property purchases in England, including Brighton. The non-residential bands run 0 percent on the first 150,000 pounds, 2 percent on the next 100,000 pounds, and 5 percent on the balance above 250,000 pounds. There is no first-time-buyer relief, no second-property surcharge and no annual tax on enveloped dwellings issue (commercial does not engage ATED). Mixed-use property, a semi-commercial shop with a flat above on Western Road or North Laine, is taxed entirely on the non-residential rates if the commercial element is genuine, which is materially cheaper than residential stamp duty. SDLT is paid by the buyer at completion through the solicitor. SDLT is a cost the lender will not finance, it must come from your equity.',
      },
    ],
  },
  {
    heading: "Process and timing",
    items: [
      {
        question: "How long does a commercial mortgage take to complete in Brighton?",
        answer:
          'Indicative terms within <span class="figure-inline">48 hours</span> of a complete enquiry. Full completion typically <span class="figure-inline">4 to 8 weeks</span> for mainstream owner-occupier, commercial investment and semi-commercial. <span class="figure-inline">6 to 10 weeks</span> for trading-business cases (Kings Road seafront hotel, Kemptown F&B, care home, Brighton Marina leisure) and HMO portfolio refinance reflecting the multi-property redemption sequencing. The critical-path item is almost always the RICS Red Book valuation. Faster turnaround is possible on clean owner-occupier deals, fastest recent completion was <strong>26 working days</strong> from initial enquiry on a Kemptown F&B freehold purchase, where the borrower had filed accounts ready, a tight legal pack and the lender had recent comparable approvals on file at the same South Coast valuer.',
      },
      {
        question: "What is a RICS Red Book valuation and why does it matter?",
        answer:
          "The Royal Institution of Chartered Surveyors (RICS) Red Book is the global standard for property valuation. Every commercial mortgage lender requires a Red Book valuation by a RICS-registered surveyor on its panel before it will draw down funds. The valuer inspects the property, reviews leases and tenant covenants, examines comparable evidence in the local market, considers the physical condition, and reports on market value, vacant possession value, and (for trading-business) sometimes goodwill value separately. The lender lends against this figure, not against the price the buyer is paying or the seller is asking. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. South Coast valuers cost 1,500 to 8,000 pounds depending on asset complexity.",
      },
      {
        question: "Do I need a solicitor for a commercial mortgage?",
        answer:
          "Yes, and you need a solicitor experienced in commercial property and commercial finance, not your residential conveyancer. The lender instructs its own solicitor to act on the loan documentation; you instruct your solicitor to act on the property purchase or refinance. The two solicitors negotiate the facility agreement, the first legal charge, the debenture, the personal guarantee, the security pack, conditions precedent and CPSE replies. Standard commercial conveyancing runs three to four weeks from instruction; complex multi-asset cases longer. Legal fees both sides typically 4,000 to 12,000 pounds combined. We can recommend Brighton and Hove commercial property solicitors who are familiar with the lender desks on our panel, which materially helps the timeline.",
      },
      {
        question: "What documents will I need to apply?",
        answer:
          "<strong>Owner-occupier:</strong> two years of filed accounts, current management figures, a six-month projection, deposit proof, identity and address verification, the property sale memorandum, source-of-funds documents. <strong>Commercial investment:</strong> the lease, tenant covenant pack (tenant’s accounts where relevant), rent roll, occupancy history, the SPV pack (incorporation, beneficial ownership, accounts if seasoned), deposit proof, identity. <strong>Trading-business:</strong> sector-specific evidence on top of the owner-occupier pack, CQC inspection reports for care, Ofsted for nursery, NHS contract value for dental, occupancy and ADR for hotel, barrelage and licence for pub. We send a tailored document checklist on the first call.",
      },
    ],
  },
  {
    heading: "Brighton-specific questions",
    items: [
      {
        question: "Which planning portal do I use for Brighton commercial property?",
        answer:
          'One planning authority covers the entire Brighton commercial market. <strong>Brighton and Hove City Council</strong> is a single unitary authority and the planning portal sits at <a href="https://planningapps.brighton-hove.gov.uk">planningapps.brighton-hove.gov.uk</a> (Idox-hosted). The portal covers the full BN1 to BN3 footprint, from the city centre and Kings Road seafront through North Laine, The Lanes, Kemptown, Hove, Preston Park, Falmer, Hollingbury and Patcham. Filter by application type "Full" and use class E(a) to E(g), Sui Generis (hotel, pub, hot-food takeaway) or C4 / Sui Generis (HMO) to surface commercial-relevant decisions. Where a property purchase depends on a planning consent, lenders want sight of the decision notice and any conditions before drawdown. Edward Street Quarter and Preston Barracks consent histories sit on the same portal.',
      },
      {
        question: "Which Brighton postcodes do you cover?",
        answer:
          'The full BN postcode footprint that touches the Brighton and Hove commercial market. <strong>BN1</strong> covers the city centre, North Laine, The Lanes, Seven Dials, Preston Park, London Road, Hollingbury and Patcham. <strong>BN2</strong> covers Kemptown, Edward Street Quarter, Brighton Marina, Whitehawk, Bevendean, Falmer and the Lewes Road university HMO catchment. <strong>BN3</strong> covers Hove, Western Road, George Street, Norton Road and Hangleton. We also cover the wider East Sussex coast where the borrower or asset connects back to Brighton, including the Lewes BN7 fringe, Newhaven BN9, Shoreham-by-Sea BN43 and the Worthing BN11 catchment for borrowers with cross-coast portfolios.',
      },
      {
        question: "Does seafront hotel lender appetite differ from inland hospitality?",
        answer:
          'Yes, materially. The Kings Road and Madeira Drive seafront strip is one of the largest independent-hotel concentrations on the South Coast, anchored by the Hilton Metropole and the Grand and supported by year-round Brighton tourism, university overlay and corporate spillover. The lender pool tightens to hospitality specialists: <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank lead on Brighton seafront hotel refinance and acquisition, each pricing on EBITDA cover, ADR, occupancy track record and the building condition (listed-building constraints on much of the Regency seafront stock). Pricing for a stabilised independent hotel on the strip with three years of clean accounts: <span class="figure-inline">7.5 to 8.5 percent</span> pa at 65 to 70 percent LTV on a 15 to 20 year term. Listed-building cases attract specialist heritage RICS valuation and a slightly longer underwrite.',
      },
      {
        question: "How does the Brighton and Hove Article 4 stance affect HMO finance?",
        answer:
          'Brighton and Hove City Council operates a city-wide additional HMO licensing scheme and an Article 4 direction across most of the BN2 student catchment (Lewes Road, Bevendean, Coldean and parts of Hanover), removing the permitted-development right for C3 (single dwelling) to C4 (small HMO) conversion. New HMO conversions require full planning permission and the City Council applies its student-housing balance policy. The lending implication: stabilised HMO portfolios with existing C4 or Sui Generis consents are financeable cleanly at 65 to 75 percent LTV with <strong>InterBay Commercial</strong>, Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages; speculative C3-to-C4 conversion finance is much harder to place without an existing planning consent in hand. We need to see the planning consent or lawful-development certificate before submitting to credit.',
      },
      {
        question: "How do Edward Street Quarter and Preston Barracks regen affect lender appetite?",
        answer:
          'Both are flagship regeneration schemes with strong public-domain delivery records. <strong>Edward Street Quarter</strong> (BN2) is a multi-phase Boultbee Brooks-led mixed-use scheme combining offices, residential and retail; <strong>Preston Barracks</strong> (BN2) is the University of Brighton and Plus X Innovation Hub creative-industries cluster. For commercial investment lots adjacent to either scheme, lender appetite has materially strengthened over the last 24 months, the underlying yields hold up against South Coast comparables and the tenant covenant base is improving. Specialist and challenger desks (<strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, OakNorth and private credit such as Octopus Real Estate and ASK Partners on lots above 5M pounds) lead the lender competition; high-street commercial desks compete on the cleaner stabilised assets. Pricing for an 8-year-plus unexpired lease to an established covenant: <span class="figure-inline">6.5 to 7.5 percent</span> pa.',
      },
      {
        question: "Are Falmer and Lewes Road PBSA-adjacent semi-commercial cases a specialist underwrite?",
        answer:
          'Yes. The Falmer and Lewes Road corridor concentrates the University of Brighton (Falmer and Moulsecoomb) and University of Sussex (Falmer) student catchment, alongside a meaningful purpose-built student accommodation (PBSA) pipeline. Semi-commercial blocks (ground-floor retail or F&B with student or young-professional flats above) and HMO portfolios sit inside a tight lender pool: <strong>InterBay Commercial</strong>, Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages quote actively. The credit submission pivots on the planning consent (C4 or Sui Generis HMO), the Brighton and Hove HMO licence, the rent roll across academic and summer-let periods, and the borrower’s track record managing student stock. Pricing for a stabilised portfolio: <span class="figure-inline">7.0 to 8.0 percent</span> pa at 70 to 75 percent LTV.',
      },
    ],
  },
];
