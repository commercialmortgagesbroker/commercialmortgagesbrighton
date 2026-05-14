/**
 * Sold-data mapping, Brighton (Commercial Mortgages context).
 *
 * HM Land Registry data is published at local-authority (town) level. The
 * Brighton and Hove City LPA covers the unitary authority. Hove districts
 * (Hove Central, Hangleton, West Hove) plus Brighton districts (city-centre,
 * Kemptown, Preston Park, Seven Dials, London Road, Marina, etc.) all read
 * from the same brighton.json. Falmer / Lewes Road touches Lewes DC for
 * some University of Sussex campus stock but the residential temperature
 * signal still reads from the Brighton town file.
 *
 * On commercial mortgage pages, residential sold data is used as a temperature
 * gauge for the wider area, commercial owner-occupier and semi-commercial
 * pricing track the residential curve, even though commercial-tagged Land
 * Registry data is much sparser.
 */

import brightonData from "@/data/sold-data/brighton.json";

export interface SoldTransaction {
  price: number;
  date: string;
  postcode: string;
  propertyType: string;
  newBuild: boolean;
  tenure: string;
  address: string;
}

export interface SoldDataFile {
  updatedAt: string;
  townSlug: string;
  countySlug: string;
  stats: {
    medianPrice: number;
    medianByType: Record<string, number>;
    transactionCount12m: number;
    yoyChange: number;
    newBuildCount: number;
    existingCount: number;
    newBuildPremium: number;
  };
  recentTransactions: SoldTransaction[];
}

const DISTRICT_TO_TOWN: Record<string, { data: SoldDataFile; label: string }> = {
  "city-centre-north-laine-lanes": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "seafront-kings-road": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  kemptown: { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "hove-central": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "preston-park-preston-barracks": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "seven-dials": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "london-road": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "edward-street-quarter": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "brighton-marina": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "hangleton-west-hove": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
  "falmer-lewes-road": { data: brightonData as SoldDataFile, label: "Brighton and Hove / Lewes DC LPA" },
  "hollingbury-patcham": { data: brightonData as SoldDataFile, label: "Brighton and Hove LPA" },
};

export function getSoldDataForDistrict(slug: string):
  | { data: SoldDataFile; lpaLabel: string }
  | null {
  const entry = DISTRICT_TO_TOWN[slug];
  if (!entry) return null;
  return { data: entry.data, lpaLabel: entry.label };
}
