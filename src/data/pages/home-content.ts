/**
 * Homepage content, Commercial Mortgages Brighton.
 *
 * Editorial logic: lead with the customer segment, not the city.
 * Three CM conversations dominate the broker's week,
 *   1. Owner-occupier (business buying its own premises)
 *   2. Investment landlord (buying / refinancing let commercial assets)
 *   3. Trading-business owner-operator (hotels, B&Bs, pubs, care, dental, MOT)
 * Brighton differs by sector mix: hospitality dominates the trading-business book
 * (11M visitors a year), North Laine and The Lanes prime independent retail,
 * a 37,000-student HMO and PBSA market across University of Brighton and
 * University of Sussex, Edward Street Quarter and Preston Barracks regen, and
 * a Hove professional-services anchor (American Express, Legal & General).
 *
 * Voice: editorial, broker-led, diagnostic. Specifics over slogans. Avoid
 * "premier", "leading", "nestled", "vibrant", "trusted partner". Quote real
 * rate bands, real LTV bands, and real lender names. Only the eight lenders
 * on the network NAMED-LENDERS list get bold: Shawbrook, InterBay Commercial,
 * LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays, Santander.
 * Paragon, Together and Cambridge & Counties Bank may be named but NOT bolded.
 */

export interface HomeContent {
  hero: {
    title: string; // HTML allowed, <em> for accent
    subtitle: string;
  };
  narrative: {
    eyebrow: string;
    h2: string; // HTML allowed
    body: string[]; // one element per paragraph, HTML allowed
  };
  essentialsExplainer: {
    eyebrow: string;
    h2: string;
    body: string[]; // HTML allowed
  };
  calculatorIntro: {
    eyebrow: string;
    h2: string; // HTML allowed
    body: string;
    phoneNudge: string;
  };
  areasIntro: {
    eyebrow: string;
    h2: string;
  };
  caseStudies: {
    eyebrow: string;
    h2: string;
    items: Array<{ name: string; detail: string; facility: string }>;
  };
  testimonials: {
    eyebrow: string;
    items: Array<{ quote: string; name: string; company: string }>;
  };
  faqs: Array<{ question: string; answer: string }>;
  finalCta: {
    eyebrow: string;
    h2: string;
    body: string;
  };
  areaDescriptions: Record<string, string>;
}

export const homeContent: HomeContent = {
  hero: {
    title:
      "Commercial Mortgages <em>Brighton</em>",
    subtitle:
      "Specialist commercial mortgage broker and commercial finance brokers based in Brighton, Hove and the wider East Sussex coastal commercial property market. We are mortgage advisers and a commercial mortgage brokerage that specialise in arrange commercial mortgages, hotel and hospitality, owner-occupier, commercial investment, semi-commercial, HMO portfolio refinance and trading-business commercial mortgages with the commercial lenders that actually write these deals across the UK. As a whole of market adviser and commercial mortgage broker covering Brighton and Hove, we benchmark commercial mortgage rates, mortgage products and lending criteria across a 90-plus panel of lenders to find the right mortgage and get the best deal on the day. Indicative terms in 48 hours from initial consultation, and unlike residential mortgages we test tenant covenant strength, EBITDA and the value of the property rather than personal income. Mid-2026 commercial mortgages in Brighton priced 6.0 to 9.0% pa on loan amounts from £150K to £10M, with competitive mortgage rates available on prime owner-occupier and prime commercial investment, and higher interest rates on hotel trading, short leases or weaker tenants. Call our Brighton 01273 line for product-neutral mortgage advice on commercial property finance and brighton property finance.",
  },

  narrative: {
    eyebrow: "Three conversations a week",
    h2: "Most commercial mortgages in Brighton come down to one of three conversations, owner-occupier, commercial investment, or trading-business finance.",
    body: [
      // Owner-occupier
      '<strong>1. Owner-occupier: buying the business premises your business trades from.</strong> The dental partnership taking the Eastern Road BN2 surgery freehold off a retiring principal in <a href="/areas/kemptown" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Kemptown</a> near the Royal Sussex County Hospital. The accountancy practice converting a lease-end into a Western Road BN3 townhouse purchase in <a href="/areas/hove-central" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Hove</a>. The creative agency taking its own floor plate at Plus X Innovation Hub on <a href="/areas/preston-park-preston-barracks" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Preston Barracks</a> BN2. The light-industrial trade-counter buying its Hollingbury BN1 unit off the landlord. Underwriting for owner-occupier commercial mortgages hinges on filed accounts and EBITDA cover, typically 1.3 to 1.5 times the monthly mortgage payment, sometimes lower for established creative-industries and professional-services sectors. Maximum loan-to-value to 75% on bricks-and-mortar, term 5 to 25 years. Allica Bank, <strong>Shawbrook</strong>, Hampshire Trust Bank and Cambridge &amp; Counties Bank sit at the sweet spot for the owner-occupied mortgage in Brighton. <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Barclays</strong> price competitively for the owner-occupier borrower where the covenant is strong and the sector is mainstream. Real mid-2026 Brighton rates for owner-occupier: 6.0 to 7.5% pa. See <a href="/services/owner-occupier-commercial-mortgage" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">owner-occupier commercial mortgages in Brighton</a>.',

      // Investment landlord
      '<strong>2. Investment landlord: buying or refinancing a let commercial property.</strong> Acquiring a Churchill Square BN1 retail unit on a 10-year FRI lease to a national covenant. Refinancing four <a href="/areas/kemptown" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Lewes Road</a> HMO blocks let to University of Brighton and University of Sussex students off a maturing 5-year fix. Adding asset eight to a 6 million pound North Laine and The Lanes prime-retail investment portfolio. A commercial investment mortgage tests <strong>rental cover</strong> on the rental income, not your personal income. Typically ICR 140 to 160% on prime investment, DSCR 130 to 145% on portfolio. Lease length and tenant covenant carry as much weight as LTV, and in Brighton the American Express (Hove Amex House), Legal &amp; General (Hove) and Brighton &amp; Sussex University Hospitals NHS Trust occupier covenant chain underwrites a meaningful share of the prime office investment stock. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on prime single-asset commercial investment mortgages in Brighton. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong>, Paragon and Together sit at the trickier end of investing in commercial property and HMO blocks (multi-let, short lease, semi-commercial, student-let). Rate range for the commercial investment mortgage: 6.5 to 8.5% pa. See <a href="/services/commercial-investment-mortgage" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">commercial investment mortgages</a> or <a href="/services/portfolio-refinance" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">portfolio refinance</a>. For the wider local market read see our editorial on <a href="/brighton-commercial-property-market" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">the Brighton commercial property market in 2026</a>, or visit <a href="https://commercialmortgagesbroker.co.uk/locations/east-sussex/brighton" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">our Brighton commercial mortgage broker hub</a>.',

      // Trading business
      '<strong>3. Trading business: owner-operator buying a going concern.</strong> The freehold seafront hotel on Kings Road BN1 off the 11-million-visitor-a-year tourism spine. The CQC-rated care home off the Royal Sussex County Hospital ancillary belt in <a href="/areas/kemptown" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Kemptown</a>. The boutique B&amp;B off Madeira Drive BN2. The independent restaurant on Sydney Street, <a href="/areas/city-centre-north-laine-lanes" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">North Laine</a> BN1. The neighbourhood pub on Western Road, <a href="/areas/hove-central" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Hove</a> BN3. These are sector-specialist commercial mortgage applications. Lenders weigh goodwill, barrelage, room counts and RevPAR, CQC ratings, occupancy and Ofsted alongside bricks-and-mortar value. Brighton&rsquo;s 11 million visitor-a-year tourism overlay sustains unusually high hospitality and retail values per square foot, which anchors finance terms on hotels, B&amp;Bs, restaurants and cafe-retail differently to a comparable Midlands or Northern market. EBITDA cover 1.5 to 2.0 times. LTV typically 60 to 70% on bricks, sometimes 70%-plus where goodwill is strong and the trading covenant is well evidenced. Allica Bank, <strong>Shawbrook</strong>, Cambridge &amp; Counties Bank and Hampshire Trust Bank dominate this segment of business mortgage and business loan demand in Brighton. <strong>Cynergy Bank</strong> is particularly active on hospitality across the South Coast, alongside Allied Irish Bank (UK) and Metro Bank for hotel deals. Rate range: 7.0 to 9.0% pa. See <a href="/services/trading-business-mortgage" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">trading-business commercial mortgages</a>.',
    ],
  },

  calculatorIntro: {
    eyebrow: "Sense-check the numbers",
    h2: "Will the rent cover it? Will EBITDA cover it? <em class=\"font-editorial italic text-[color:var(--color-accent)]\">Try here first.</em>",
    body:
      "Drop in your purchase price or current valuation, the LTV you are aiming for, and the loan term you want. Pre-set at 7.5%, the 2026 mid-market interest rate locally for prime owner-occupier and commercial investment mortgages, with the slider running 6 to 9% across fixed and variable rate commercial mortgages. The output is a clean monthly mortgage repayments number you can put against your rent roll, your EBITDA, or your business cash flow. For ICR or DSCR stress testing on commercial investment mortgage deals, send the rent roll through and we will model lender-by-lender across our range of commercial lenders.",
    phoneNudge: "For a quote against live lender appetite",
  },

  areasIntro: {
    eyebrow: "Where the deals are",
    h2: "Twelve Brighton and Hove districts, twelve different commercial property profiles.",
  },

  caseStudies: {
    eyebrow: "Recent placements",
    h2: "Real Brighton commercial mortgage deals: every finance option, every lender, real numbers.",
    items: [
      {
        name: "Kings Road seafront hotel refinance",
        detail: "Trading-business hotel refinance, BN1, 20yr",
        facility: "3.85M, 65% LTV, 7.45%, Cynergy Bank",
      },
      {
        name: "Lewes Road HMO portfolio refinance",
        detail: "Five-block student-let HMO refinance, BN2, 25yr",
        facility: "2.1M, 70% LTV, 7.15%, Paragon",
      },
      {
        name: "Hove professional office owner-occupier",
        detail: "Owner-occupier office freehold, BN3, 20yr",
        facility: "1.75M, 70% LTV, 6.65%, Lloyds",
      },
    ],
  },

  testimonials: {
    eyebrow: "Recent client feedback",
    items: [
      {
        quote:
          "We had been quoted 8.4% by our own bank to refinance the Kings Road seafront hotel. The team placed it at 7.45% with a hospitality-active challenger, 65% LTV, 20-year term, and walked us through the EBITDA cover and RevPAR model so the deal was sound before legals. No surprises at credit committee.",
        name: "M. Sullivan",
        company: "Hotel owner, Kings Road, Brighton",
      },
      {
        quote:
          "Refinancing a five-block HMO portfolio on Lewes Road let to University of Brighton and University of Sussex students, off a maturing 5-year fix. They benchmarked nine lenders, narrowed to three, and got us 70% LTV at 7.15% on a 5-year fix inside a 25-year term. ICR comfortably 145%. Took six weeks start to finish.",
        name: "S. Khan",
        company: "Portfolio landlord, Kemptown, Brighton",
      },
      {
        quote:
          "First-time freeholder buying my professional services office off the landlord on Western Road in Hove. They told me upfront which commercial lenders would and would not touch a single-asset owner-occupier on a short lease, saved me three weeks of chasing. Completed inside seven weeks with a high-street bank.",
        name: "J. Whitfield",
        company: "Accountancy practice principal, Hove",
      },
    ],
  },

  essentialsExplainer: {
    eyebrow: "Commercial mortgage essentials",
    h2: "Compare commercial mortgage solutions in Brighton: available lenders and interest rates, commercial investment mortgage, owner-occupier commercial mortgages, and the commercial mortgage journey.",
    body: [
      // What a CM is
      '<strong>What a commercial mortgage is.</strong> A commercial mortgage is a long-term commercial loan secured against a non-residential property in the United Kingdom used for business purposes, the cornerstone of real estate investing and commercial property finance. The property itself sits as security for the loan: if the borrower (the debtor) does not repay, the lender (the creditor) can repossess and recover the debt against the asset value under the rules on default (finance). That principle is the same as a standard residential mortgage, but the underwriting is different. A standard residential mortgage tests personal income and FCA-regulated affordability. A commercial mortgage in Brighton tests the business premises, the trading business inside it, and the rental income or lease income from any leasehold estate let inside the building. Commercial mortgages on non-dwelling commercial properties fall outside the FCA regulated mortgage perimeter, so this product is not regulated by the Financial Conduct Authority. We are not authorised and regulated by the FCA because the products we arrange are unregulated; in the financial services market this is called unregulated commercial lending. Where a deal would require FCA authorisation we refer the enquiry to a firm authorised and regulated for the relevant residential or commercial product. We act as a credit broker, not a lender, sourcing commercial finance for Brighton business owners and property investors, with the loan amount and loan-to-value ratio modelled deal-by-deal across our range of commercial lenders.',
      // Owner-occupier vs investment vs semi-commercial vs trading
      '<strong>The four core deal types we see across Brighton, Hove and the East Sussex coast.</strong> <strong>Owner-occupied commercial mortgages</strong>: a trading business buys the business premises it operates from, dental, accountancy, creative agency, light-industrial, Class E retail, a Hove professional-office suite, a Plus X Innovation Hub unit at Preston Barracks or a Hollingbury industrial workshop. Repayments on your mortgage come from EBITDA, so lenders model 1.3 to 1.5 times trading-profit cover on the owner-occupied mortgage. The owner-occupied route is the standard product available for Brighton SMEs buying a commercial property to trade from. <strong>Commercial investment mortgage</strong>: an investment property let to third-party tenants on commercial leases, tested on rental cover (ICR 140 to 160%) rather than your personal income. Most property investors choose this investment commercial mortgage route for let commercial property and existing commercial property held as a leasehold estate inside a limited company or SPV (ltd structure for tax). Limited companies dominate the investment commercial mortgage book on the Brighton side, with a single SPV per asset on stretched LTV deals. <strong>Semi-commercial mortgages</strong>: the classic flat above a shop on Western Road, North Laine, The Lanes or Lewes Road, blended retail and residential income in mixed-use properties, 70 to 75% LTV on the strong shop-and-flat archetype. <strong>Trading-business mortgages</strong>: a seafront hotel, B&amp;B, pub, restaurant, care home, MOT garage or day nursery bought as a going concern, where goodwill and sector ratings (CQC, Ofsted, RevPAR) shape the deal alongside bricks-and-mortar value. None of this overlaps with buy to let mortgages, which are a residential mortgage product tested on personal income and rental yield. A residential buy-to-let mortgage sits with a different panel of buy-to-let commercial lenders. We focus on commercial mortgage applications on existing commercial property and on property to let for business use.',
      // LTV, DSCR, ICR, rates
      '<strong>What drives commercial mortgage rates in Brighton.</strong> The loan-to-value ratio (LTV) is the lever. Owner-occupier reaches 75% on bricks-and-mortar property value, semi-commercial 70 to 75%, trading-business hotel 60 to 70%. Lender appetite, lending criteria and property value are confirmed by a RICS Red Book property valuation (a real estate appraisal) commissioned before the binding mortgage offer. DSCR (debt-service coverage ratio) tests net rental income against the full mortgage repayments on a commercial investment mortgage, typically at 130 to 145%. ICR (interest cover ratio) tests rent against the interest payments component at 140 to 160%. The Bank of England base rate trajectory and the gilt curve set lender funding costs, then individual commercial lenders price margin on top. Mid-2026 Brighton commercial mortgage rates: 6.0 to 7.5% pa on owner-occupier, 6.5 to 8.5% pa on commercial investment and semi-commercial, 7.0 to 9.0% pa on trading-business hotel and hospitality. Five-year fixes price roughly 0.25 to 0.50% above two-year fixes on the fixed rate side, with fixed and variable rate commercial mortgages running alongside each other for any fixed period 2 to 10 years. Bridging finance for change-of-use, auction purchases, or chain-break funding sits at 0.75 to 1.10% pm. When clients search for a bridging loan in Brighton we route the deal to a different set of commercial lenders: the bridge market is a higher-risk specialist area with its own products available and its own appetite. A bridge can run six to 24 months on rolled-up interest, with the bridge exit either a sale or a refinance to a term commercial mortgage. Bridging finance examples we see weekly include a Kings Road seafront hotel refurb-bridge, a Western Road retail-to-hotel change-of-use bridge in Hove, and a Hollingbury industrial bridge for trade-counter conversion, typical loan amounts from £500K to £5M. Interest-only structures are available on most commercial investment mortgage deals across our panel, supporting cash flow on let property to let stock like retail units, mixed-use parade, care homes and HMOs renting to students across the BN1, BN2 and BN3 belt. Interest-only on owner-occupier is rarer, lenders prefer capital and interest on owner-occupier so the loan amortises against the trading business, but a part interest-only and part repayment structure is possible. The interest-only window on most investment products runs five to ten years before the lender reviews. Lenders weigh credit score, business banking history, and the property local market on every deal.',
      // Refinance, capital raise, business growth
      '<strong>Refinance, remortgage, capital raise and business growth.</strong> Around a third of the deals we run for Brighton clients are not a fresh purchase commercial property transaction at all. They are a refinance or commercial remortgage off a maturing fix, capital raise to release equity against rising asset value to fund business growth, or release on sale of part of a property portfolio. Central Brighton supply is tight and seafront asset values index high, so refinance and equity release dominate flow on the prime stock, particularly on hotel and Kings Road BN1 leisure. The same panel and the same metrics apply: LTV, DSCR, ICR, EBITDA, lease length, tenant covenant, affordability. Competitive rates on commercial funding are most readily available on prime owner-occupier and prime investment, where high-street commercial desks compete hardest for the best deal and the best commercial mortgage offer. Stretched LTV, short-lease investment, HMO portfolio or sector-specialist trading business pushes the deal to a challenger or specialist commercial lender on a slightly higher margin, but the deal still completes. The auction purchases route, where speed kills the term option, runs via bridging finance first then a refinance to term once the asset is stabilised. Applying for a commercial mortgage in Brighton starts with a property pack, two years filed accounts (or rent roll for the investment commercial mortgage, occupancy and RevPAR for hotel), a one-page business plan, a clear sense of the deposit you can put in, and a clear sense of business needs and intended business use of the property.',
      // Why a broker, fees, finance option summary
      '<strong>Why use a commercial mortgage broker rather than going direct.</strong> The high street commercial desks price within their own credit policy and rarely compare commercial mortgage offers across the whole of market. We do, every deal. We are a credit broker and not a lender, an authorised credit broker working across a wide range of lenders rather than tying clients to one bank. For Brighton business owners choosing between two or three lenders direct, the spread between cheapest and most expensive viable mortgage offer is routinely 0.40 to 0.90% on rate plus 0.50 to 1.50% on arrangement fee, on a 1 million pound facility that compounds across the term. We map commercial mortgage solutions across the panel and present every finance option and every product available, a full set of finance solutions and financial solutions for the deal: high street commercial banks, challenger banks, specialist lenders, hospitality-active commercial lenders, private finance, corporate finance for larger structured tickets, business loans secured against trading-asset value, development finance for property development, commercial developments and practically-complete Edward Street Quarter or Preston Barracks-adjacent development projects exiting senior dev debt, bridging loans and development finance where the timing demands it, and bridging finance for auction or chain-break. We arrange commercial mortgages, bridging loans and commercial mortgages for investors and business owners across Sussex on commercial and mixed-use property, including commercial and residential mixed-use schemes, with finance and development packages structured around the deal. Brighton mortgage advice and a product-neutral mortgage service on commercial deals from our team starts with a free initial consultation, by phone or in person, on the Brighton 01273 line. We will sit on the phone with a property investor weighing two letting routes, or a Brighton SME weighing freehold against lease renewal, and walk through the numbers without pushing a single lender. Whether the deal is an owner-occupier purchase, a commercial investment mortgage on a single let investment property, a portfolio refinance across a property portfolio, or a commercial mortgage refinance to reduce mortgage repayments off a maturing fix, we model it lender-by-lender first. As your whole of market commercial mortgage broker, an experienced commercial finance team and a highly experienced credit-broker desk, we run the available lenders and interest rates table, weigh the rates and terms, and shortlist three to five lenders for the best deal on the day. The broker fee is transparent and disclosed on completion, no upfront retainers. If the numbers will not work for any sensible commercial purposes or business use, we say so inside two business hours. Looking for a commercial mortgage that completes in four to eight weeks from application to completion? Most Brighton deals run in that window. The commercial mortgage journey is shorter when the borrower has a clean business plan, a clean credit history, and the lender has recent comparable approvals on file. As experts in commercial mortgages covering Brighton, Hove, East Sussex and the South Coast, including the wider West Sussex catchment, we structure every deal around your specific business needs and finance requirements with expert guidance from initial consultation through property valuation, commercial property transactions due diligence, solicitor instruction and completion of the transaction. Our Brighton 01273 line is the fastest way to a same-day product-neutral steer on residential or commercial property finance, including residential finance referrals where the deal sits inside the FCA perimeter, and on whether your deal is regulated by the Financial Conduct Authority or sits outside the FCA perimeter.',
      // Brighton market snapshot paragraph (~400 words emphasising hospitality, HMO, retail, regen)
      '<strong>The Brighton commercial property market in 2026, in numbers.</strong> Brighton is the South Coast&rsquo;s tourism-and-creative commercial market, with one of the largest visitor economies outside London and structurally high asset values per square foot across hotels, central retail and seafront leisure. Around 11 million visitors a year underpin a trading-business book dominated by hospitality: the Kings Road BN1 seafront strip carries the Hilton Brighton Metropolite, Grand Hotel, Old Ship and Royal Albion alongside a long tail of independent hotels and B&amp;Bs, and Madeira Drive BN2 anchors heritage-led seafront leisure. North Laine and The Lanes BN1 hold the prime independent retail and F&amp;B base with values per square foot well above the regional baseline, and Churchill Square (Hammerson) anchors the mainstream central retail spine on Western Road. Hove&rsquo;s Western Road and George Street BN3 carry the secondary retail spine, with American Express (Amex House) and Legal &amp; General anchoring the prime professional office stock. The HMO market is one of the strongest on the South Coast: University of Brighton (~18,000 students) and University of Sussex (~19,000) together drive ~37,000 student-led HMO and PBSA demand, concentrated on Lewes Road BN2, the BN1 Seven Dials spine and the Falmer campus adjacency, with Paragon, Together and Foundation Home Loans active on the HMO portfolio refinance book. Edward Street Quarter BN2 is the flagship live mixed-use scheme (Boultbee Brooks-led, office, residential and retail across multiple phases), Preston Barracks BN2 and Plus X Innovation Hub anchor the Wired Sussex creative-industries cluster, and Brighton Marina BN2 is intensifying with ongoing leisure and retail. Royal Sussex County Hospital on Eastern Road BN2 anchors a healthcare ancillary belt of dental, GP and private clinic stock, driving steady owner-occupier freehold flow. Brighton has the smallest industrial commercial base of our five cities, limited to Hollingbury Industrial Estate BN1 and Patcham Court Farm fringe BN1, so industrial commercial mortgage flow runs lighter than the hotel, retail and HMO segments. The most recent town-stats reading puts the residential median at 415,000 pounds with the price up 3.8% year-on-year (the only positive YoY reading in the five-city set) and 2,479 residential transactions in the last twelve months, the busiest residential market of any of our cities. For the commercial mortgages in Brighton market this means a structural bias toward trading-business hospitality (hotels, B&amp;Bs, restaurants and pubs), high-value central retail and semi-commercial mixed-use, HMO-block refinance across the Lewes Road and Falmer student-let belt, and creative-led office investment around Preston Barracks and Edward Street Quarter.',
      // Practical glossary and additional context to align with top rankers
      '<strong>Practical notes for Brighton business owners and property investors considering a commercial mortgage.</strong> Commercial mortgages typically run on a 3 to 25 years term, with capital and interest the default and interest-only available on most commercial investment mortgage deals. Commercial mortgages work differently to a standard residential mortgage: unlike residential mortgages, which the Financial Conduct Authority regulates, commercial mortgage products are unregulated and we operate as a commercial mortgage brokerage and adviser sourcing finance lender-by-lender. We arrange commercial mortgages and bridging finance to buy or refinance commercial property or land used for business purposes, including retail units, warehouse and industrial stock, mixed-use properties, semi-commercial parade, hospitality and care. Lenders offer different rates available depending on tenant covenant strength: prime national-covenant leases secure finance at competitive mortgage rates, while shorter leases or weaker tenants push deals to specialist commercial lenders at higher interest rates. We help property investors invest in commercial property, build property portfolios and service the debt against the rental income stream, with equity release at refinance where commercial property values have moved. The mortgage process for mortgages for commercial property in Brighton runs broadly the same as commercial mortgages in the UK more generally: we assess your financial standing, the type of loan that fits, model affordability, run the panel and present mortgage products that secure finance on the day. The Brighton property and brighton property finance market is one of the highest-value commercial markets on the South Coast, so we benchmark across the panel of lenders every time, including specialist commercial lenders for sector-specific cases like hotel and HMO, to get the best deal for the client and find the right mortgage. Lender indemnity insurance may be required on stretched LTV cases. Frequently asked questions on Brighton commercial mortgages are covered in the FAQs below.',
      // Lender panel paragraph (named lenders explicit)
      '<strong>Brighton commercial lender panel in 2026.</strong> Our 90-plus lender panel covers an effectively unrestricted number of lenders active on Brighton stock, with a deep range of commercial lenders and a range of lenders that we approach deal by deal. <strong>Lloyds</strong> Commercial Banking, <strong>NatWest</strong> (North Street commercial team), <strong>Barclays</strong>, <strong>Santander</strong> Commercial and HSBC (Castle Square) cover the high street commercial book on prime owner-occupier and prime commercial investment, with NatWest and Lloyds the most relationship-active in central Brighton, though many South Coast deals refer from the Croydon and Gatwick regional desks. On the challenger and specialist commercial side, <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> are the most active commercial lenders we place Brighton deals with on hospitality, semi-commercial, multi-let HMO investment, trading-business and stretched-LTV cases on every type of commercial space across the city. Cynergy Bank in particular is highly active on hospitality and is one of the go-to desks for Brighton hotel refinance and acquisition. Allica Bank, Hampshire Trust Bank (HTB), Aldermore, YBS Commercial, OakNorth and Allied Irish Bank (UK) complete the high-street and challenger flank, with Allied Irish Bank (UK) and Metro Bank picking up the hotel and hospitality ticket alongside Cynergy. Paragon Bank, Together and Foundation Home Loans are very active on Brighton HMO portfolio refinance given the 37,000-student local market. Cambridge &amp; Counties Bank is on panel and is a defensible specialist on local owner-occupier, semi-commercial and trading-business deals across the East Sussex coast and the West Sussex flank. Private credit and fund finance (Octopus Real Estate, ASK Partners, Pluto Finance) sit on selected 5 million pound-plus Brighton seafront, Edward Street Quarter or Preston Barracks-adjacent deals. Every commercial mortgage application we run starts with a full whole-of-market assessment: we benchmark loan to value across the panel, model the rates and arrange commercial mortgages, bridging loans and development finance against the right desk, and shortlist two to five lenders for indicative terms on every Brighton deal. The brief covers all types of properties in scope, from retail and office to hotel, HMO, mixed-use and small-cap industrial, with the panel calibrated to each property and lease structure.',
    ],
  },

  faqs: [
    {
      question: "What is a commercial mortgage and how does it work in Brighton?",
      answer:
        'A commercial mortgage in Brighton is a loan secured against income-producing or owner-occupied <em>commercial</em> property: offices, retail units, hotels and hospitality, industrial, semi-commercial shop-and-flats, healthcare, leisure, HMO blocks, trading businesses. The lender takes a first charge on the property as security for the loan. Commercial mortgages on non-dwelling property are <strong>unregulated lending</strong>, they fall outside the Financial Conduct Authority regulated mortgage perimeter. We do not hold FCA authorisation because the products we arrange are unregulated. We refer regulated enquiries (residential mortgages, regulated semi-commercial where the borrower will occupy the residential element, regulated bridging) to regulated firms. For Brighton mortgage advice on the commercial side, we work case-by-case: every enquiry gets product-neutral mortgage advice before a lender is approached. Underwriting is fundamentally different from residential mortgages and buy to let: a residential buy-to-let mortgage leans on personal income and rental yield, a commercial mortgage in Brighton weighs tenant covenant, lease length, EBITDA or DSCR/ICR cover. Buy to let on a single dwelling is a residential product. Buy to let on a multi-let HMO portfolio held in a limited company crosses into commercial investment mortgage territory where the borrower has four or more investment properties under a single ltd company.',
    },
    {
      question: "What types of commercial mortgages in Brighton are available?",
      answer:
        'Four main types of property finance for commercial use. <strong>Owner-occupied commercial mortgages</strong>: a business buys its own business premises (dental, accountancy, creative agency, light-industrial, Class E retail, a Hove professional-office suite, a Plus X Innovation Hub unit at Preston Barracks or a Hollingbury industrial workshop). <strong>Commercial investment mortgage</strong>: investment properties let to third parties, tested on rental cover. <strong>Semi-commercial</strong>: shop-with-flat or Class E plus residential, blended income in mixed-use buildings on Western Road, North Laine, The Lanes and Lewes Road. <strong>Trading-business mortgage</strong>: hotel, B&amp;B, pub, restaurant, care home, day nursery, bought as a going concern. Alongside these, <strong>bridging loan</strong> or bridging finance funds auction purchases, change-of-use or chain-break, repaid by sale or refinance onto term debt. Each commercial mortgage type carries its own panel of commercial lenders, fixed rates and rates and terms across fixed and variable rate commercial mortgages. Tailored commercial mortgage solutions are sourced lender-by-lender across our range of commercial lenders.',
    },
    {
      question: "How much can I borrow on a commercial mortgage in Brighton in 2026?",
      answer:
        'For owner-occupier and standard commercial investment mortgage, the maximum loan-to-value commonly stretches to <span class="figure-inline">75%</span>. Semi-commercial reaches <span class="figure-inline">75%</span> on the strong shop-and-flat archetype on Western Road, North Laine or Lewes Road. Trading-business mortgages on hotels, B&amp;Bs, pubs, care homes, dental, MOT and nurseries sit tighter, <span class="figure-inline">60 to 70%</span> against bricks-and-mortar value, with affordability driven by EBITDA cover, RevPAR and CQC ratings. Facility size 150K to 10M for the broker panel. 2M-plus structured deals route through OakNorth and private finance, particularly on Brighton seafront hotel, Edward Street Quarter and Preston Barracks-adjacent investment. Lenders assess the borrower covenant, deposit, business banking, the value of the property and the rental income stream together when they make a mortgage offer. Additional security in the form of a personal guarantee, a debenture over the trading company, or a second charge on another commercial asset can lift the LTV by 5 to 10% on borderline deals. Lenders obtain a RICS Red Book valuation on every commercial property before issuing a binding mortgage offer.',
    },
    {
      question: "What are commercial mortgage interest rates and fees in Brighton right now?",
      answer:
        'Mid-2026 ranges, by product. Owner-occupier on strong covenants: <span class="figure-inline">6.0 to 7.5%</span> pa. Commercial investment mortgage with prime tenant: <span class="figure-inline">6.5 to 8.5%</span> pa. Semi-commercial: <span class="figure-inline">6.5 to 8.5%</span> pa. Trading business and hotel: <span class="figure-inline">7.0 to 9.0%</span> pa. Commercial bridging: <span class="figure-inline">0.75 to 1.10%</span> pm. Both fixed and variable rate commercial mortgages are available across the panel: fixed rate periods 2, 3, 5 and 10 years, variable trackers floating over Bank of England base rate. Five-year fixes typically price 0.25 to 0.50% above two-year fixes. Arrangement fees 1.0 to 2.0% of facility, valuation 1.5K to 8K, legal fees 4K to 15K on the commercial side. Drivers on commercial mortgage rates: LTV, ICR/DSCR cover, lease length, tenant covenant, sector and borrower credit score / credit history.',
    },
    {
      question: "Can I get a hotel or hospitality commercial mortgage in Brighton?",
      answer:
        'Yes. Brighton is one of the largest hospitality commercial mortgage markets on the South Coast, anchored by 11 million visitors a year and a seafront hotel strip running along Kings Road BN1 and Madeira Drive BN2. We routinely place hotel refinance and acquisition deals on the Hilton Brighton Metropolite-adjacent stretch, on the boutique and B&amp;B stock across Kemptown BN2 and Hove BN3, and on the heritage hospitality estate in North Laine and The Lanes. <strong>Cynergy Bank</strong> is the most active hospitality lender we place Brighton deals with, alongside Allied Irish Bank (UK) and Metro Bank on the high-street side and <strong>Shawbrook</strong> on the challenger side. Underwriting leans on RevPAR, ADR, room count, occupancy, food-and-beverage revenue split and EBITDA cover. Maximum LTV 60 to 70% on bricks-and-mortar, with EBITDA cover 1.5 to 2.0 times. Rate range 7.0 to 9.0% pa. Term 15 to 25 years, with interest-only available on selected deals where cash flow demands.',
    },
    {
      question: "Can I get an HMO portfolio commercial mortgage on Lewes Road or near the universities?",
      answer:
        'Yes. The University of Brighton and University of Sussex student belt across Lewes Road BN2, the BN1 Seven Dials corridor and the Falmer campus adjacency is one of the strongest HMO refinance markets we cover. Paragon, Together and Foundation Home Loans are very active on the multi-block HMO portfolio refinance ticket, with <strong>InterBay Commercial</strong> and <strong>LendInvest</strong> picking up the trickier short-lease and semi-commercial student-let cases. Maximum LTV 70 to 75% on the HMO investment book, with ICR tested 140 to 160% on a stressed rate. We model the portfolio rent roll bank-by-bank and run a top-slicing scenario where individual asset ICR is tight but portfolio aggregate cover is comfortable. Rate range 6.5 to 8.5% pa. Bridging finance available where a vacant HMO needs refurb-to-let before the term mortgage drops in. Brighton &amp; Hove operates an additional and selective HMO licensing scheme, so we ask for the licence references at indicative-terms stage.',
    },
    {
      question: "Can I use a commercial mortgage to buy a commercial property in Brighton?",
      answer:
        'Yes. An owner-occupied mortgage is the standard product for a Brighton SME looking to purchase its own business premises, whether that is an Eastern Road BN2 dental surgery near the Royal Sussex County Hospital in Kemptown, a Western Road BN3 professional-services office in Hove, a Plus X Innovation Hub BN2 creative-cluster unit at Preston Barracks, a Hollingbury BN1 industrial trade-counter, or a Sydney Street BN1 retail unit in North Laine. Underwriting is built around your filed business accounts and EBITDA cover. Maximum loan-to-value reaches 75% on a strong business covenant. Best commercial mortgage rates sit between 6.0 and 7.5% pa for clean owner-occupier deals on the mainstream panel, with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, Allica Bank, Cambridge &amp; Counties Bank and <strong>Shawbrook</strong> the most active commercial lenders on this product. OakNorth picks up the 5M-plus owner-occupier deals on the Edward Street Quarter and Preston Barracks flank. As Brighton-focused commercial finance experts we advise on whether to buy or continue to lease, and where to buy the first property to fit your business goals. Buyer-side legal advice from a commercial solicitor is essential, we work with a panel of Brighton solicitors who already act for the chosen creditor.',
    },
    {
      question: "How does bridging finance work for Brighton commercial property?",
      answer:
        'Commercial bridging is short-term debt (typically 6 to 18 months) used to bridge a timing gap. Common Brighton uses: auction purchases of a vacant Hollingbury BN1 trade-counter, change-of-use Class E to hotel on a Western Road BN1 retail spine, refurb-to-term on a Kings Road BN1 seafront hotel re-positioning, the renovation of an older Lewes Road BN2 mixed-use parade, or a chain-break on a Kemptown BN2 mixed-use plot near the Royal Sussex County Hospital. Rate range 0.75 to 1.10% pm, LTV to 70%, no monthly mortgage repayments on rolled-up product. The bridge exit is by sale or by refinance onto a term commercial mortgage. A bridging loan is a different product family from term commercial mortgages, so we treat it as a separate workstream, but we model both routes when timing matters.',
    },
    {
      question: "How long does a Brighton commercial mortgage take to complete?",
      answer:
        'Indicative terms within <span class="figure-inline">48</span> hours of a complete enquiry. Full application to completion typically <span class="figure-inline">4 to 8</span> weeks. The critical-path item is almost always the RICS Red Book valuation. Legals can run in parallel. Faster turnaround is possible on clean owner-occupier deals: we have completed in <span class="figure-inline">22</span> working days where the borrower had filed accounts, a clean legal pack, and the lender had recent comparable approvals on file. Hotel and HMO deals run slightly longer because the valuer typically needs trading accounts, RevPAR data or a full rent roll alongside the property inspection. The commercial mortgage journey is shorter where the borrower comes prepared, the deposit is in place, and the solicitor is responsive. Trust and clean evidence at credit committee shortens the mortgage process meaningfully.',
    },
    {
      question: "What commercial property types do you fund in Brighton?",
      answer:
        'Every mainstream commercial property type across Brighton, Hove and the East Sussex coast: <a href="/property-types/retail">retail units</a> (Churchill Square, Western Road, North Laine, The Lanes, Lewes Road, Hove George Street), <a href="/property-types/office">offices</a> (Hove Amex House flank, Norton Road in Hove, New Road, Queen&rsquo;s Road, Plus X Innovation Hub at Preston Barracks), <a href="/property-types/industrial-warehouse">industrial and warehouse</a> on Hollingbury and Patcham Court Farm fringe, <a href="/property-types/leisure-hospitality">leisure and hospitality</a> on the Kings Road seafront, Madeira Drive and Brighton Marina, <a href="/property-types/healthcare-care-home">healthcare and care homes</a> on the Royal Sussex County Hospital and Hove Polyclinic ancillary belt, <a href="/property-types/pub-restaurant">pub and restaurant</a> on Sydney Street, North Laine and Lewes Road, <a href="/property-types/mot-garage-petrol">MOT, garage and petrol forecourt</a>, day nursery and independent school, <a href="/property-types/mixed-use">mixed-use buildings</a>, <a href="/property-types/semi-commercial">semi-commercial</a>, <a href="/property-types/hmo-block">HMO blocks</a> across the Lewes Road and Falmer student belt, and <a href="/property-types/holiday-let-portfolio">holiday-let portfolios</a> on the seafront. We do not fund pure residential or unsecured business loans.',
    },
    {
      question: "What is DSCR and ICR, and why do they matter?",
      answer:
        '<strong>DSCR</strong> (debt-service coverage ratio) tests whether your property net rental income covers the full mortgage repayments, typically at <span class="figure-inline">130 to 145%</span>. <strong>ICR</strong> (interest cover ratio) tests rent against interest only, typically at <span class="figure-inline">140 to 160%</span> on a commercial investment mortgage. Lenders assess these against a stressed notional rate 1 to 2% above the pay rate. For owner-occupier the test is <strong>EBITDA cover</strong>, your trading profit against the mortgage payment, typically 1.3 to 1.5 times. For hotel and hospitality the test broadens out to RevPAR and ADR alongside EBITDA, with most lenders looking for a three-year trading run before they price keenly. Get these models wrong and the offer prices down at credit committee, or falls over completely. We model them up front before approaching a lender, so the borrower walks into credit with an evidence pack the lender can already underwrite. Due diligence is faster when the numbers are tight from day one.',
    },
    {
      question: "Which lenders do you place Brighton commercial mortgages with?",
      answer:
        '90-plus lender panel. <strong>High-street commercial:</strong> <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, HSBC, with South Coast commercial desks routed via Croydon and Gatwick alongside the local North Street and Castle Square branches. <strong>Challenger banks:</strong> Allica, <strong>Shawbrook</strong>, Hampshire Trust Bank (HTB), YBS Commercial, Aldermore, Cambridge &amp; Counties Bank, <strong>Cynergy Bank</strong> (very active on hospitality), Paragon Bank, Recognise, Atom Bank for the smaller owner-occupier ticket. <strong>Specialist:</strong> OakNorth (active on Edward Street Quarter and Preston Barracks 5M-plus deals), <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Together, Foundation Home Loans (HMO), Allied Irish Bank (UK) and Metro Bank on hotel, Reliance Bank, Handelsbanken. Private finance for 2M-plus structured deals through Octopus Real Estate, ASK Partners and Pluto Finance. Commercial mortgages in Brighton clients usually settle on a shortlist of three to five viable commercial lenders per deal.',
    },
    {
      question: "Do you cover Hove, East Sussex and the wider South Coast too?",
      answer:
        'Yes, the full Brighton &amp; Hove unitary plus the immediate commercial flank: Hove (BN3) across Western Road, George Street and the Amex House professional-office spine, Kemptown and the Royal Sussex County Hospital flank in BN2, the Falmer university belt up to the University of Sussex campus, and the wider East Sussex coast into Lewes, Newhaven, Eastbourne and the Worthing flank in West Sussex. We routinely fund deals across the A23 corridor north to Crawley and Gatwick, the A27 south coast spine east to Eastbourne and west to Worthing, and the wider Sussex coast catchment. The 2025 BoE base rate trajectory has tightened high-street margins on prime, leaving more space for challenger banks on regional deals. That benefits Brighton, Hove and East Sussex borrowers materially.',
    },
    {
      question: "Why use a Brighton commercial mortgage broker rather than going direct to my own bank?",
      answer:
        'Two reasons. First, even your strongest high-street relationship prices within their own credit policy, and they do not benchmark you against the rest of the market. We do, every deal, every time. We act as a credit broker, not a lender. Second, the deals high-street desks decline (hotels and hospitality, HMO portfolio refinance, semi-commercial, trading-business, stretched LTV, sector-specific covenants) often place comfortably with a challenger or specialist at sensible rates and terms, but you have to know which desk to ring on the day. With 250M-plus arranged across a deep range of commercial lenders, that is our entire job as commercial mortgage brokers covering Brighton. If looking for a commercial mortgage in Brighton and the numbers do not work, we say so up front.',
    },
  ],

  finalCta: {
    eyebrow: "Send the deal",
    h2: "Three to five lenders.<br /><span class=\"text-[color:var(--color-accent)]\">Indicative terms in 48 hours.</span>",
    body:
      "Send the property details, the LTV you are aiming for, and a rough sense of the trading position or rental income. We will shortlist three to five commercial lenders, run live appetite, and come back with structured terms covering rate, LTV, term, fees and conditions. If the numbers do not work, you will know inside two business hours and will not have wasted a valuer time.",
  },

  areaDescriptions: {
    "city-centre-north-laine-lanes":
      "BN1 city centre core, North Laine independent retail and F&B, The Lanes antique and boutique cluster, plus the Churchill Square mainstream retail spine. Prime central retail investment and central owner-occupier territory with values per square foot well above the regional baseline. NatWest (North Street branch), Lloyds and Barclays active on the central pitches.",
    "seafront-kings-road":
      "BN1 and BN2 seafront leisure and hospitality belt running along Kings Road and Madeira Drive. Hilton Brighton Metropolite, Grand Hotel, Old Ship and Royal Albion plus a long tail of independent hotels and B&Bs. Brighton's flagship trading-business hotel territory: Cynergy Bank, Allied Irish Bank (UK), Metro Bank and Shawbrook the most active on the hospitality refinance and acquisition book.",
    kemptown:
      "BN2 F&B and semi-commercial district running east from the Royal Sussex County Hospital. Healthcare ancillary owner-occupier territory (dental, GP, allied health, private clinics) anchored by the Eastern Road hospital footprint, plus independent F&B parade and HMO above. Strong shop-with-flat semi-commercial investment at 7 to 9% gross yield.",
    "hove-central":
      "BN3 retail and professional-services spine along Western Road and George Street. Hove Amex House (American Express) and Legal & General anchor the prime professional office stock and the prime professional services occupier covenant. Owner-occupier dominant on the office side with secondary retail investment along the Western Road parade.",
    "preston-park-preston-barracks":
      "BN1 and BN2 creative-industries innovation cluster. Plus X Innovation Hub at Preston Barracks (University of Brighton and Plus X) anchors the Wired Sussex creative cluster, with the wider Preston Barracks mixed-use scheme bringing residential, lab and innovation space onto the BN2 corridor. OakNorth, NatWest and private credit active on 5M-plus deals.",
    "seven-dials":
      "BN1 F&B and semi-commercial junction connecting Brighton city centre to Hove. Independent restaurants, delis, coffee and small-cap professional services on the upper floors. Owner-occupier and semi-commercial parade investment dominant, with HMO above retail in many stretches given the student adjacency.",
    "london-road":
      "BN1 high-street and regen corridor running north from the city centre. Secondary retail with ongoing regen-led mixed-use pipeline. Small-cap semi-commercial investment and owner-occupier candidates, with InterBay Commercial and LendInvest picking up the trickier short-lease and stretched-LTV cases.",
    "edward-street-quarter":
      "BN2 major mixed-use regeneration scheme led by Boultbee Brooks. Office, residential and retail across multiple live phases, anchoring a new prime office and mixed-use district on the BN2 corridor east of the city centre. Mid-cap to large-cap commercial investment refinance and stabilised-investment territory as the first wave of completed phases matures.",
    "brighton-marina":
      "BN2 leisure, retail and hospitality destination at the eastern edge of the city. Ongoing residential and leisure intensification, with the leisure-and-retail occupier mix anchoring trading-business mortgages on F&B and small-hotel stock plus mixed-use investment on the upper floors.",
    "hangleton-west-hove":
      "BN3 suburban retail and small-cap commercial flank west of Hove central. Suburban retail parade, day nursery and GP concentration, small-cap industrial owner-occupier candidates on the western suburban fringe.",
    "falmer-lewes-road":
      "BN1 and BN2 university adjacency anchored by the University of Brighton and University of Sussex campuses at Falmer plus the Lewes Road BN2 student-housing corridor. Brighton's strongest HMO and PBSA market: Paragon, Together, Foundation Home Loans and Fleet Mortgages very active on the multi-block HMO portfolio refinance ticket.",
    "hollingbury-patcham":
      "BN1 outer industrial and trade flank. Hollingbury Industrial Estate plus Patcham Court Farm fringe carry Brighton's modest industrial stock, with trade-counter, B2/B8 and small-cap warehouse owner-occupier candidates. Brighton has the smallest industrial commercial base of our five cities; specialist underwriting at 60 to 65% LTV on the tighter trade-business cases.",
  },
};
