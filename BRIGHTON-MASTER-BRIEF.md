# City Market Brief — Commercial Property + Lending

## City: Brighton, Sussex

> **Data caveat:** Brighton sold-data is in the `sussex` county slug (not `east-sussex`). Town slug is `brighton`. Town-stats and sold-data are present and good. **Planning data for Brighton & Hove City Council is not yet ingested** — `data/generated/planning/sussex/` covers Horsham and Worthing only; `data/planning-exports/` does not contain a Brighton & Hove raw export. Build-time scrape of `planningapps.brighton-hove.gov.uk` Idox feed is required before area pages publish.

Brighton is the South Coast's tourism-and-creative commercial market — North Laine and The Lanes retail / F&B, seafront leisure and hospitality, an unusually large independent retail base, a substantial creative-industries cluster (Wired Sussex, Plus X Innovation Hub at Preston Barracks), University of Brighton and University of Sussex driving student-led leisure and HMO demand, and active regen at Edward Street Quarter, Preston Barracks and Brighton Marina. For commercial mortgages this means a market biased toward **trading-business hospitality (hotels, B&Bs, restaurants, pubs), high-value central retail and semi-commercial, HMO-block refinance, and creative-led office investment**. Asset-typology mix is more retail/leisure than industrial — Brighton has the smallest industrial commercial base of our five cities.

### Snapshot stats (from town-stats JSON)

- **Median residential price (12m):** £415,000 — proxy for general market temperature.
- **Residential transactions (12m):** 2,479 — strong churn; Brighton is the busiest of the five cities residentially.
- **YoY price change:** +3.8% — only positive YoY in the five-city set.
- **Approval rate / pipeline:** Not modelled in the town-stats slice (Brighton & Hove planning not in current dataset).
- **Pipeline units / GDV:** Not modelled.

> Source: `data/generated/town-stats/sussex/brighton.json`

### Sold-data digest (from latest.json)

- **Median by type:** D £680,000 · S £500,000 · T £496,000 · F £300,050.
- **New build count (12m):** 9. **New build premium:** 32.5%.
- **Top postcodes:** BN1 (Brighton centre / Seven Dials / Preston Park), BN2 (Kemptown / Whitehawk / Bevendean), BN3 (Hove — Brunswick / Goldstone / Hangleton).
- **Anchor recent transactions:** BN1 5NG Hampstead Road £1,000,000 (Feb-26), BN1 6SL Cumberland Road £810,000, BN1 8UA Vale Avenue £667,500, BN3 5FA Westbourne Street £695,000, BN3 8PP Northease Drive £665,000, BN1 3BG Borough Street £675,000, BN2 1FD Clarendon Terrace £380,000, BN2 9YG Freshfield Road £450,000, BN2 1GD Arundel Place £495,000.

> Source: `data/generated/sold-data/sussex/brighton/latest.json`

### Planning data — commercial-mortgage-relevant slice (proxy — public domain)

Brighton & Hove planning portal not yet ingested. Public-domain commercial-relevant pipeline:

- **Edward Street Quarter (BN2)** — major mixed-use redevelopment (Boultbee Brooks); office, residential, retail; multiple phases live.
- **Preston Barracks / Plus X Innovation Hub (BN2)** — University of Brighton / Plus X — innovation, residential, mixed-use; flagship regen scheme.
- **Brighton Marina (BN2)** — ongoing residential and leisure intensification.
- **Brighton i360** and seafront leisure — refinance pipeline rather than new debt.
- **King Alfred Leisure Centre site (Hove, BN3)** — long-running residential allocation alongside leisure replacement.
- **Black Rock site (BN2)** — leisure / events; long-running.
- **Madeira Terrace restoration (BN2)** — heritage-led seafront leisure.
- **University of Sussex campus refresh (Falmer)** — mixed-use; PBSA and lab.

> Source: gap — see §Data gaps. Build-time scrape of `planningapps.brighton-hove.gov.uk` Idox feed required.

### Commercial property anchors

- **Industrial estates:** limited; Hollingbury Industrial Estate (BN1), Patcham Court Farm (BN1 fringe), Sussex House (BN1) — modest stock; less industrial-led than Reading/MK/Cambridge.
- **Retail / mixed-use schemes:** Churchill Square (BN1 — Hammerson), Western Road (BN1/BN3 — high street), North Laine (BN1 — independent retail), The Lanes (BN1 — antique / independent), Brighton Marina (BN2), London Road (BN1), Edward Street Quarter (BN2).
- **Office quarters:** New Road / Pavilion Buildings (BN1), Queen's Road / station (BN1), Hove Town Hall area (BN3 — Norton Road), Brighton Beach Office Park (BN2), Preston Park Avenue (BN1), Plus X / Preston Barracks (BN2).
- **Leisure / hospitality clusters:** seafront strip (BN1/BN2 — Hilton Metropole, Grand Hotel, Old Ship, Royal Albion, plus a long tail of independent hotels/B&Bs); North Laine and The Lanes F&B; Kemptown F&B; Hove seafront restaurants.
- **Healthcare concentrations:** Royal Sussex County Hospital (BN2 — Eastern Road) anchors healthcare ancillary stock; Brighton General (BN2); Hove Polyclinic (BN3).

### Lender presence in Brighton

- **High-street with local commercial RMs:** NatWest (North Street), Lloyds (North Street), HSBC (Castle Square), Barclays (North Street), Santander Commercial. Brighton has a relatively small commercial-banking footprint vs Reading or MK; many deals are referred from the Croydon / Gatwick regional desks.
- **Challenger:** Allica Bank, HTB, Shawbrook, Aldermore, YBS Commercial, Cynergy (active on hospitality), Cambridge & Counties (selectively on South Coast deals), Paragon (HMO portfolio refinancers — strong on Brighton given the HMO concentration), Together (semi-commercial, HMO blocks — very active).
- **Specialist:** LendInvest, OakNorth (£2M+ on covenant deals), Foundation Home Loans, MFS, Fleet Mortgages (HMO).
- **Hospitality specialists:** Cynergy, Allied Irish Bank (UK), Metro Bank — relevant given Brighton's hotel concentration.
- **Private credit / fund:** Octopus Real Estate, ASK Partners — selectively on £5M+ Brighton seafront or Edward Street Quarter / Preston Barracks-adjacent deals.

### Sub-areas to cover (10–14)

1. **Brighton City Centre / North Laine / The Lanes (BN1)** — prime retail, F&B, mixed-use upper-floor.
2. **Seafront / Kings Road (BN1/BN2)** — leisure, hospitality, hotels.
3. **Kemptown (BN2)** — F&B, semi-commercial, HMO.
4. **Hove (BN3)** — high-street retail (Western Road, George Street), professional services, seafront leisure.
5. **Preston Park / Preston Barracks (BN1/BN2)** — Plus X Innovation Hub; flagship creative cluster.
6. **Seven Dials (BN1)** — F&B, semi-commercial.
7. **London Road (BN1)** — high-street, semi-commercial, regen.
8. **Edward Street Quarter (BN2)** — major mixed-use regen.
9. **Brighton Marina (BN2)** — leisure, retail, hospitality.
10. **Whitehawk / Bevendean (BN2)** — outer suburban; trade businesses.
11. **Hangleton / West Hove (BN3)** — suburban retail.
12. **Falmer / Stanmer (BN1)** — university adjacency.
13. **Hollingbury (BN1)** — limited industrial stock.
14. **Patcham (BN1)** — outer suburban; trade and small commercial.

### Demand-side signals

- **Largest employers / job clusters:** Brighton & Hove City Council, University of Brighton, University of Sussex, American Express (Hove — Amex House), Brighton & Sussex University Hospitals NHS Trust (Royal Sussex County), Legal & General (Hove), Wired Sussex creative cluster, Plus X Innovation Hub occupiers.
- **University presence:** University of Brighton (~18,000 students) + University of Sussex (~19,000) — drives leisure, F&B, HMO/PBSA semi-commercial demand. PBSA pipeline is meaningful (Falmer + central).
- **Tourism profile:** ~11M visitors/year — one of the UK's largest visitor economies outside London. Drives hospitality and retail values per sq ft well above the regional baseline.
- **NHS trust footprint:** Brighton & Sussex University Hospitals NHS FT — drives healthcare ancillary stock concentration in BN2.
- **Population + working-age trend:** ~278,000 unitary; younger working-age skew via two universities + creative industries.

### Data gaps

- **No Brighton & Hove planning data in current dataset** — biggest data gap for this city. Build-time scrape of `planningapps.brighton-hove.gov.uk` Idox feed required.
- **No commercial-tagged Land Registry slice.** Action: cross-reference Companies House charges register (form MR01); supplement with VOA business-rates extracts.
- **No EPC commercial register pull yet.**
- **EG paywall** for Edward Street Quarter / Preston Barracks / Marina transaction history. Decide subscription before yield content publishes.
- **HMO licensing register** — Brighton & Hove operates an additional / selective licensing scheme; the publicly-accessible register is a useful proxy for HMO stock counts at postcode level.
