/**
 * /about page content, Commercial Mortgages Brighton.
 *
 * Voice: editorial, broker-led, first-person plural ("we").
 *
 * Regulatory position (2026-05-14): Commercial mortgages are
 * UNREGULATED lending. The broker is NOT FCA-authorised because
 * the products arranged sit outside the FCA's regulated mortgage
 * perimeter. Where a deal would require FCA authorisation, we
 * refer to a regulated firm. Never claim FCA authorisation.
 *
 * Rate range mid-2026: 6.0-9.0% pa overall.
 */

export interface AboutContent {
  hero: {
    h1: string;
    lede: string;
  };
  story: {
    h2: string;
    body: string[];
  };
  numbers: Array<{ value: string; label: string }>;
  approach: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  credibility: {
    h2: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    h1: "An experienced commercial mortgage broker for Brighton, Hove and East Sussex",
    lede:
      "Twenty years of UK property and commercial banking, including senior corporate banking roles on the lender side. £250M+ of unregulated commercial mortgages arranged across hospitality, owner-occupier, investment, semi-commercial, HMO portfolio refinance and creative-office deals. Placed with the eight named lenders below and another eighty across our panel, including hospitality specialists such as Allied Irish Bank UK and Metro Bank, each active across the South Coast and the wider Brighton commercial market.",
  },

  story: {
    h2: "Specialist, not generalist",
    body: [
      "Our team has been working in property and commercial banking since 2005, and we have stayed in the same lane ever since. Two decades of UK commercial finance, including senior corporate banking roles, sit behind every introduction we make. Most of that career was spent on the <strong>lender side</strong>, writing credit papers, sitting in committees, declining loans and approving them. That experience shapes how we structure and present every Brighton commercial mortgage application now we work on the broker side. We know what credit committees need to see, what triggers a decline, and where there is genuine flexibility versus where there is not.",

      "We broker commercial mortgages and only commercial mortgages. Owner-occupier, commercial investment, semi-commercial (the unregulated cases), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. We do not place residential mortgages, residential buy-to-let, regulated bridging, car finance, asset finance or unsecured business loans. Those are different markets with different lenders and different broker specialisms. We would rather be excellent at one product family than mediocre across six. If you call us about a residential remortgage, regulated semi-commercial, or anything else that would require FCA authorisation, we will refer you to a regulated firm that handles it properly.",

      'Across the past decade we have arranged in excess of <span class="figure-inline">&pound;250M</span> of commercial mortgages. Facility sizes from <span class="figure-inline">&pound;150K</span> to <span class="figure-inline">&pound;10M+</span>, terms 5 to 25 years, and every mainstream sector: seafront hotels and B&Bs, central restaurants and pubs, North Laine and The Lanes independent retail freeholds, Hove professional-services offices, healthcare and dental, day nursery, Brighton Marina leisure, semi-commercial shop+flats (unregulated), mixed-use blocks and HMO portfolios around Lewes Road and Falmer. Our work focuses on Brighton, the BN1 to BN3 city core, the wider East Sussex coast and the regen-and-creative belt running through Edward Street Quarter and Preston Barracks. Kemptown, Seven Dials, London Road, Western Road and the Brighton Marina retail-and-leisure flagship all sit comfortably inside the same lender pool. See <a href="/case-studies" class="text-secondary font-medium hover:underline">our case studies</a> for representative recent placements.',

      'Brighton has two specialisms that shape our weekly deal flow. <strong>Hospitality.</strong> The seafront strip from Kings Road through Madeira Drive carries one of the largest concentrations of independent hotels and B&Bs outside London. Our active hospitality lender desks are <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank, each pricing keenly on Brighton hotel refinance and acquisition with EBITDA cover, ADR and occupancy track record at the centre of the underwrite. <strong>HMO portfolios.</strong> The University of Brighton and University of Sussex student catchment, alongside the wider young-professional renter base, drives one of the densest HMO markets on the South Coast. Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages lead the lender competition on Lewes Road, Bevendean and Falmer HMO portfolio refinance, particularly where the planning consent or licensing position is already stabilised.',

      "<strong>We are not FCA-authorised because commercial mortgages on commercial property are an unregulated activity in the UK.</strong> They fall outside the Financial Conduct Authority's regulated mortgage perimeter. Our consumer credit and regulated mortgage referrals are handled by FCA-authorised partners. That position is not unusual. Most commercial mortgage brokers operate the same way, because the products themselves are unregulated by definition. What it does mean: the underwriting discipline we apply to every deal comes from years on the credit side of the table, not from a regulated obligation. The standards a credit committee expects do not change because the product sits outside FCA scope.",
    ],
  },

  numbers: [
    { value: "£250M+", label: "Commercial mortgages arranged" },
    { value: "90+", label: "Lenders on panel" },
    { value: "20+ yrs", label: "Property and commercial banking" },
    { value: "48 hrs", label: "Indicative terms" },
  ],

  approach: {
    h2: "How we work",
    items: [
      {
        label: "Specialist focus",
        detail:
          "Unregulated commercial mortgages only. No cross-selling, no loss-leader products, no residential, no regulated bridging, no unsecured. Single product family, deep expertise.",
      },
      {
        label: "Lender-side perspective",
        detail:
          "Twenty years sitting behind credit committees teaches you how to package an application the way a credit officer wants to read it. Fewer decline surprises, faster approval, sharper terms.",
      },
      {
        label: "Brighton market depth",
        detail:
          "We know the Brighton-active and South Coast lender desks personally. NatWest, Lloyds and Barclays commercial banking out of the North Street branches, Santander Commercial covering Hove professional-services and Western Road retail freeholds. Shawbrook, InterBay Commercial and LendInvest cover the central retail and semi-commercial stock across North Laine, The Lanes and the Western Road / George Street Hove high street. Cynergy Bank prices well on hospitality refinance across the Kings Road seafront strip and the Brighton Marina leisure cluster. Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages lead the lender pool on Lewes Road, Falmer and Bevendean HMO portfolio refinance. We know which South Coast RICS valuers each lender prefers and which comparable evidence the local panel will accept.",
      },
      {
        label: "Straight answers",
        detail:
          "If the deal does not work, wrong sector for that LTV, EBITDA cover too tight, ERC kills the remortgage maths, vendor's price unsupported by RICS comparables, you hear it on day one. Not after a wasted valuation fee.",
      },
      {
        label: "End-to-end execution",
        detail:
          "Single point of contact from initial enquiry through indicative terms, full application, RICS Red Book valuation, credit approval, solicitor instruction, completion and drawdown. You speak to one person; we coordinate everything else.",
      },
      {
        label: "Repeat clients",
        detail:
          "Most clients return for the next deal. Second freehold acquisition, portfolio addition, end-of-fix refinancing. The lender relationships we have built for you compound over time, which materially helps the next case.",
      },
    ],
  },

  credibility: {
    h2: "Why a specialist Brighton broker",
    body: 'The Brighton commercial mortgage market has genuine regional nuance: <strong>Brighton and Hove City Council</strong> as a single unitary authority with one planning portal at <a href="https://planningapps.brighton-hove.gov.uk">planningapps.brighton-hove.gov.uk</a> covering the full BN1 to BN3 footprint, the Kings Road seafront hotel strip running from the Hilton Metropole and the Grand through the long tail of independent hotels and B&Bs, North Laine and The Lanes as the independent retail and F&B spine, Kemptown for F&B and HMO semi-commercial, Edward Street Quarter as the major mixed-use regeneration scheme, Preston Barracks and Plus X Innovation Hub as the flagship creative and innovation cluster, Brighton Marina for leisure and hospitality, Western Road and George Street as the Hove high-street, Lewes Road and Falmer as the university HMO and PBSA-adjacent catchment, and the Royal Sussex County Hospital cluster on Eastern Road driving healthcare ancillary stock. The eight lenders we name and show logos for are <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong>, <strong>Cynergy Bank</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>, each with confirmed permission to display marks. Behind those sit another eighty lender relationships including Allied Irish Bank UK and Metro Bank on the hospitality side, Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages on the HMO side, Allica Bank, Hampshire Trust Bank, Aldermore, YBS Commercial, OakNorth, Octopus Real Estate and ASK Partners on the larger Edward Street Quarter and Preston Barracks-adjacent investment lots, plus the long tail of specialist commercial mortgage desks. National brokers tend to default to whichever desk paid the broker conference fee that quarter. We default to whichever desk will fund your deal cleanest, and we will tell you which one that is on the first call.',
  },
};
