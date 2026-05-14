// Per-site configuration. The single CSS variable that varies between
// network sites is the accent triplet, see DESIGN-BRIEF.md §11.
export const siteConfig = {
  "name": "Commercial Mortgages Brighton",
  "domain": "commercialmortgagesbrighton.co.uk",
  "locationName": "Brighton",
  "county": "east-sussex",
  "town": "brighton",
  "tagline": "Specialist commercial mortgages in Brighton and Hove",
  "description": "Specialist commercial mortgage broker for Brighton, Hove and the East Sussex coast. Hospitality, hotel, retail, semi-commercial, HMO portfolio, creative-office and trading-business finance from a 90+ lender panel. Indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.",
  "keyword": "commercial mortgages brighton",
  "heroSubtitle": "Owner-occupier, investment, hospitality, semi-commercial and HMO commercial mortgages, sourced from a 90+ lender panel and structured around your Brighton or Hove asset. Indicative terms in 48 hours.",
  "phone": "07595 366094",
  "email": "enquiries@commercialmortgagesbrighton.co.uk",
  "leadEmail": "commercialmortgagesbroker@gmail.com",
  "address": {
    "street": "Brighton",
    "city": "Brighton",
    "postcode": "",
    "country": "United Kingdom"
  },
  "coordinates": {
    "lat": 50.8225,
    "lon": -0.1372
  },
  "siteType": "commercial-mortgages",
  "siteMode": "primary",
  "primarySiteUrl": "https://commercialmortgagesbrighton.co.uk",
  "satelliteSiteUrl": "https://brightoncommercialmortgages.co.uk",
  "ccLocationUrl": "https://commercialmortgagesbroker.co.uk/locations/east-sussex/brighton",
  "accent": {
    "hex": "#563c7c",
    "hsl": "hsl(266, 35%, 36%)",
    "hue": 266
  },
  "stats": [
    { "value": "£250M+", "label": "Arranged" },
    { "value": "90+", "label": "Lenders" },
    { "value": "48hr", "label": "Decisions" },
    { "value": "75%", "label": "Max LTV" }
  ],
  "ghlSiteTag": "CommercialMortgagesBrighton",
  "ghlSource": "Commercial Mortgages Brighton Primary Website",
  "ghlWidgetId": ""
} as const;
