import type { MarketData } from "./types";

/**
 * Per-area market data, Commercial Mortgages Brighton.
 *
 * The MarketData[] interface is shared with the dev-fin reference repos and
 * is consumed by area-page market widgets. Field names retain dev-fin
 * vocabulary (`activeDevSites`, `avgDevTimelineMonths`, `planningApprovalRate`)
 * but the values here are calibrated to commercial-mortgage relevance:
 *   - `activeDevSites` counts active commercial-mortgage-relevant items in
 *     the local pipeline, Brighton and Hove City Council planning applications
 *     inside the area's postcode catchment plus known transactional activity.
 *   - `avgDevTimelineMonths` reads as "average commercial mortgage process
 *     to drawdown" in months for mainstream owner-occupier / investment.
 *   - `avgPricePerSqft` is residential price per sqft per HM Land Registry,
 *     used as a market-temperature gauge for the wider local market.
 *     Residential transactions are NOT a direct commercial signal; they
 *     proxy area health for ground-floor retail, semi-commercial blended
 *     yield, and tenant-covenant catchment underwriting.
 *   - `rentalYield` is residential headline yield, used as a directional
 *     indicator for semi-commercial blended-yield underwriting.
 *
 * Slugs match AREAS in src/lib/constants.ts.
 */

export const marketData: MarketData[] = [
  {
    slug: "city-centre-north-laine-lanes",
    areaName: "Brighton City Centre, North Laine and The Lanes",
    avgPricePerSqft: 620,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 32000,
    growthRate: 4.2,
    activeDevSites: 28,
    rentalYield: 4.6,
    conservationCoverage: 58,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN1 commercial-relevant 2026",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "seafront-kings-road",
    areaName: "Seafront and Kings Road",
    avgPricePerSqft: 680,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 7,
    population: 14500,
    growthRate: 3.6,
    activeDevSites: 22,
    rentalYield: 4.4,
    conservationCoverage: 62,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN1 / BN2 seafront",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "kemptown",
    areaName: "Kemptown",
    avgPricePerSqft: 520,
    planningApprovalRate: 70,
    avgDevTimelineMonths: 6,
    population: 18800,
    growthRate: 3.1,
    activeDevSites: 14,
    rentalYield: 5.4,
    conservationCoverage: 42,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN2 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "hove-central",
    areaName: "Hove Central and Western Road",
    avgPricePerSqft: 590,
    planningApprovalRate: 74,
    avgDevTimelineMonths: 6,
    population: 24200,
    growthRate: 2.9,
    activeDevSites: 18,
    rentalYield: 4.5,
    conservationCoverage: 48,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN3 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "preston-park-preston-barracks",
    areaName: "Preston Park and Preston Barracks",
    avgPricePerSqft: 540,
    planningApprovalRate: 80,
    avgDevTimelineMonths: 7,
    population: 16400,
    growthRate: 5.4,
    activeDevSites: 12,
    rentalYield: 4.8,
    conservationCoverage: 32,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Preston Barracks / Plus X Innovation Hub framework + BHCC Planning",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "seven-dials",
    areaName: "Seven Dials",
    avgPricePerSqft: 580,
    planningApprovalRate: 71,
    avgDevTimelineMonths: 6,
    population: 9800,
    growthRate: 2.7,
    activeDevSites: 9,
    rentalYield: 4.7,
    conservationCoverage: 52,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN1 Seven Dials",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "london-road",
    areaName: "London Road",
    avgPricePerSqft: 460,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 7,
    population: 12600,
    growthRate: 4.0,
    activeDevSites: 11,
    rentalYield: 5.6,
    conservationCoverage: 28,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN1 London Road regen",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "edward-street-quarter",
    areaName: "Edward Street Quarter",
    avgPricePerSqft: 600,
    planningApprovalRate: 82,
    avgDevTimelineMonths: 7,
    population: 8200,
    growthRate: 6.4,
    activeDevSites: 15,
    rentalYield: 5.0,
    conservationCoverage: 22,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Edward Street Quarter framework (Boultbee Brooks) + BHCC Planning",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "brighton-marina",
    areaName: "Brighton Marina",
    avgPricePerSqft: 560,
    planningApprovalRate: 75,
    avgDevTimelineMonths: 7,
    population: 7800,
    growthRate: 4.2,
    activeDevSites: 10,
    rentalYield: 4.9,
    conservationCoverage: 18,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton Marina masterplan + BHCC Planning",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "hangleton-west-hove",
    areaName: "Hangleton and West Hove",
    avgPricePerSqft: 440,
    planningApprovalRate: 73,
    avgDevTimelineMonths: 6,
    population: 21400,
    growthRate: 1.9,
    activeDevSites: 7,
    rentalYield: 4.6,
    conservationCoverage: 14,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN3 outer corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "falmer-lewes-road",
    areaName: "Falmer and Lewes Road",
    avgPricePerSqft: 420,
    planningApprovalRate: 77,
    avgDevTimelineMonths: 6,
    population: 14200,
    growthRate: 3.3,
    activeDevSites: 9,
    rentalYield: 6.2,
    conservationCoverage: 16,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN1 Falmer / Lewes Road",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "hollingbury-patcham",
    areaName: "Hollingbury and Patcham",
    avgPricePerSqft: 400,
    planningApprovalRate: 79,
    avgDevTimelineMonths: 6,
    population: 17600,
    growthRate: 2.1,
    activeDevSites: 6,
    rentalYield: 5.0,
    conservationCoverage: 12,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Brighton and Hove LPA)",
      planningSource: "Brighton and Hove City Council Planning Portal, BN1 outer industrial",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
];

export function getMarketData(slug: string) {
  return marketData.find((d) => d.slug === slug);
}

export function getAllMarketData() {
  return marketData;
}
