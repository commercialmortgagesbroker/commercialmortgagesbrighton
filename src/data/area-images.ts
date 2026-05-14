/**
 * Area hero images, Unsplash CDN photo IDs for Brighton districts.
 */

export interface AreaImage {
  /** Unsplash CDN long-form photo ID. */
  id: string;
  /** Accessibility/SEO alt text. */
  alt: string;
}

export const AREA_IMAGES: Record<string, AreaImage> = {
  "city-centre-north-laine-lanes": {
    id: "1699021566217-f4ce5875b2e1",
    alt: "Brighton city centre, North Laine and The Lanes streetscape",
  },
  "seafront-kings-road": {
    id: "1626010935539-710125f7e294",
    alt: "Brighton seafront and Kings Road hospitality strip",
  },
  kemptown: {
    id: "1626011338434-2a000a7c63c0",
    alt: "Kemptown Brighton mixed-use semi-commercial parade",
  },
  "hove-central": {
    id: "1699021565667-07f81d7d137c",
    alt: "Hove Central retail and professional services on Western Road",
  },
  "preston-park-preston-barracks": {
    id: "1603135946711-e2f73c019c44",
    alt: "Preston Park and Preston Barracks creative innovation cluster",
  },
  "seven-dials": {
    id: "1699021566678-edb0d7af1d5e",
    alt: "Seven Dials Brighton independent retail and F&B junction",
  },
  "london-road": {
    id: "1697407503401-8991afe14b00",
    alt: "London Road Brighton high-street regeneration corridor",
  },
  "edward-street-quarter": {
    id: "1699021566037-2079b9459957",
    alt: "Edward Street Quarter Brighton major mixed-use regeneration",
  },
  "brighton-marina": {
    id: "1683459269288-63ce626a67f2",
    alt: "Brighton Marina leisure, retail and hospitality village",
  },
  "hangleton-west-hove": {
    id: "1626011789898-0b317546acb0",
    alt: "Hangleton and West Hove suburban retail parade",
  },
  "falmer-lewes-road": {
    id: "1638803702682-4b2c833e543f",
    alt: "Falmer and Lewes Road university-adjacent commercial frontage",
  },
  "hollingbury-patcham": {
    id: "1699818268277-242624112ff9",
    alt: "Hollingbury and Patcham outer industrial and trade estate",
  },
};

/** Canonical hero image for the /areas index page and city-wide contexts. */
export const AREAS_INDEX_IMAGE: AreaImage = {
  id: "1526637201259-da59cb348242",
  alt: "Brighton aerial skyline with seafront and city centre",
};

/** Safe lookup, returns the area image, or the canonical city image as fallback. */
export function getAreaImage(slug: string): AreaImage {
  return AREA_IMAGES[slug] ?? AREAS_INDEX_IMAGE;
}
