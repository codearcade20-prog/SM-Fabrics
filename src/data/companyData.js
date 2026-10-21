// Authentic Business and Product Data for SM Filter & Fabric, Chennai
// Sourced strictly from the verified business banner.

export const COMPANY_INFO = {
  name: "SM FILTER & FABRIC",
  legalName: "SM Filter & Fabric",
  gstNumber: "33QNMPS2045L1Z9",
  address: {
    line1: "No 8/242, 10th Main Road",
    locality: "Kodungalyur",
    city: "Chennai",
    postalCode: "600 118",
    area: "Kodungalyur",
    state: "Tamil Nadu",
    country: "India",
    full: "No 8/242, 10th Main Road, Kodungalyur, Chennai - 600 118"
  },
  phones: [
    { display: "63813 04145", raw: "+916381304145" },
    { display: "97910 09909", raw: "+919791009909" },
    { display: "90801 04173", raw: "+919080104173" }
  ],
  whatsapp: {
    display: "63813 04145",
    raw: "+916381304145",
    clean: "916381304145"
  },
  email: "smfilterfabric@gmail.com",
  mapsUrl: "https://maps.google.com/?q=No+8/242,+10th+Main+Road,+Kodungalyur,+Chennai+-+600118"
};

export const CORE_PILLARS = [
  {
    id: "quality",
    title: "High Quality Products",
    description: "Strict quality control, reinforced seams, precision micronic weave, and high tensile strength.",
    iconName: "ShieldCheck"
  },
  {
    id: "durable",
    title: "Durable & Reliable",
    description: "Built for extreme industrial pressures, high burst resistance, and extended operational cycle life.",
    iconName: "Cog"
  },
  {
    id: "industrial",
    title: "Industrial & Commercial Use",
    description: "Engineered specifically for heavy factories, chemical processing plants, pharma, and effluent plants.",
    iconName: "Factory"
  },
  {
    id: "range",
    title: "Wide Range of Fabrics",
    description: "Full spectrum of natural cotton canvas, polyester, nylon, needle felts, and multi-filament weaves.",
    iconName: "Layers"
  }
];

export const PRODUCTS_DATA = [
  {
    id: "filter-cloth-bags",
    name: "Filter Cloth & Filter Bags",
    category: "liquid",
    categoryLabel: "Liquid & Solid Separation",
    shortDesc: "Tailored industrial filter bags and woven cloth for filter presses, centrifuge machines, and liquid clarity systems.",
    fullDesc: "Engineered for high filtration efficiency and easy cake discharge in chemical, pharmaceutical, and wastewater processing. Available in polypropylene, polyester, and nylon multifilament/monofilament fabrics with snap-ring collars or corded necks.",
    specs: [
      { label: "Micron Rating", value: "0.5 µm to 200 µm" },
      { label: "Materials", value: "Polypropylene (PP), Polyester (PE), Nylon" },
      { label: "Collar Options", value: "Steel Snap Ring, Poly Collar, Drawstring" },
      { label: "Temperature", value: "Up to 150°C (depending on polymer)" }
    ],
    image: "/images/products/filter-cloth-bags.jpg",
    bannerMatch: "Filter Cloth & Filter Bags"
  },
  {
    id: "cotton-canvas-cloth",
    name: "Cotton Canvas & Cotton Filter Cloth",
    category: "woven",
    categoryLabel: "Heavy Duty Natural Weaves",
    shortDesc: "Premium 100% natural duck cotton canvas and twill-woven industrial filter cloths for heavy mechanical pressing.",
    fullDesc: "Manufactured from high-grade natural cotton yarns with tight duck weave and twill construction. Ideal for oil mills, clay & ceramic filtration, plate-and-frame filter presses, and applications requiring natural non-synthetic media.",
    specs: [
      { label: "Weight Range", value: "8 oz to 24 oz Duck Canvas" },
      { label: "Weave Structure", value: "Plain Duck Weave & Reinforced Twill" },
      { label: "Yarn Quality", value: "100% Virgin Natural Unbleached Cotton" },
      { label: "Key Feature", value: "High thermal stability & organic oil affinity" }
    ],
    image: "/images/products/cotton-canvas.jpg",
    bannerMatch: "Cotton Canvas & Cotton Filter Cloth"
  },
  {
    id: "filter-paper",
    name: "Filter Paper",
    category: "laboratory",
    categoryLabel: "Lab & Technical Filtration",
    shortDesc: "Qualitative and quantitative industrial-grade filter paper discs, sheets, and rolls for liquid clarification.",
    fullDesc: "High alpha-cellulose filter papers designed for analytical accuracy, transformer oil purification, electroplating bath filtration, and fine chemical processing. Offers uniform pore distribution and minimal ash content.",
    specs: [
      { label: "Grades", value: "Qualitative & High Purity Quantitative" },
      { label: "Formats", value: "Circles (various diameters), Sheets, Rolls" },
      { label: "Flow Rate", value: "Fast, Medium & Slow Retentive Options" },
      { label: "Ash Content", value: "< 0.01% (Quantitative Grades)" }
    ],
    image: "/images/products/filter-paper.jpg",
    bannerMatch: "Filter Paper"
  },
  {
    id: "nonwoven-filter-fabrics",
    name: "Nonwoven Filter Fabrics",
    category: "nonwoven",
    categoryLabel: "Needle Felt & Media",
    shortDesc: "High-permeability needle-punched nonwoven felt fabrics for air, dust, and deep liquid particulate retention.",
    fullDesc: "Manufactured using advanced needle felting technology with singed, glazed, or PTFE-membrane finishes. Guarantees maximum dust cake release and exceptional particle capture across chemical and heavy manufacturing environments.",
    specs: [
      { label: "Weight", value: "250 GSM to 650 GSM" },
      { label: "Fiber Composition", value: "Polyester, Polypropylene, Aramid" },
      { label: "Surface Finish", value: "Singed, Calendared, Heat-Set" },
      { label: "Air Permeability", value: "120 - 300 L/dm²/min @ 200Pa" }
    ],
    image: "/images/products/nonwoven-fabrics.jpg",
    bannerMatch: "Nonwoven Filter Fabrics"
  },
  {
    id: "filter-pads",
    name: "Filter Pads",
    category: "liquid",
    categoryLabel: "Depth Filtration Sheets",
    shortDesc: "Rigid depth filtration cellulose and diatomaceous filter pads for polishing, clarification, and sterile filtration.",
    fullDesc: "Multi-layered depth filter sheets engineered for beverage clarification, edible oil polishing, pharmaceutical sterile filtration, and chemical varnishes. Traps micro-contaminants through both mechanical sieving and electrokinetic adsorption.",
    specs: [
      { label: "Sizes", value: "20x20 cm, 40x40 cm, 60x60 cm & Custom Cut" },
      { label: "Structure", value: "Purified Cellulose + Kieselguhr" },
      { label: "Sterilization", value: "Autoclavable & Hot-water sanitizable" },
      { label: "Differential Pressure", value: "Up to 3 bar operating limit" }
    ],
    image: "/images/products/filter-pads.jpg",
    bannerMatch: "Filter Pads"
  },
  {
    id: "dust-collector-bags",
    name: "Nylon Polyester Dust Collector Bags",
    category: "air",
    categoryLabel: "Air & Baghouse Filtration",
    shortDesc: "High-efficiency pulse-jet and shaker filter bags tailored with snap bands, grounding wires, and heat-resistant seams.",
    fullDesc: "Specifically fabricated for asphalt plants, cement mills, woodworking, boiler exhaust, and pigment processing. Designed to withstand repetitive pulse cleaning cycles while maintaining sub-micron dust capture efficiency.",
    specs: [
      { label: "Media Type", value: "Nylon Mesh, Polyester Needle Felt, Anti-static" },
      { label: "Design Styles", value: "Snap Band Collar, Cord Top, Raw Top" },
      { label: "Reinforcement", value: "Triple-needle heavy duty stitching" },
      { label: "Anti-Static", value: "Epitropic Carbon / Stainless Steel Scrim" }
    ],
    image: "/images/products/dust-collector-bags.jpg",
    bannerMatch: "Nylon Polyester Dust Collector Bags"
  },
  {
    id: "centrifuge-fbd-bags",
    name: "Centrifuge Bags & FBD Bags",
    category: "specialized",
    categoryLabel: "Pharma & Process Equipment",
    shortDesc: "Precision Fluid Bed Dryer (FBD) multi-pocket finger bags and basket centrifuge liners for pharmaceutical manufacturing.",
    fullDesc: "Custom-stitched for top-discharge and bottom-discharge centrifuges as well as multi-finger Fluid Bed Dryers (FBD). Manufactured in compliance with pharmaceutical clean standards, using anti-static conductive fabrics and zero particle shedding seams.",
    specs: [
      { label: "Configuration", value: "Multi-finger (4 to 28 fingers) FBD & Basket Liners" },
      { label: "Static Control", value: "Certified Conductive Anti-static Grid" },
      { label: "Edge Finishing", value: "Ultrasonic welded / Bound & Overlocked" },
      { label: "Fabric Grades", value: "Monofilament Polypropylene, Satin Polyester" }
    ],
    image: "/images/products/centrifuge-fbd-bags.jpg",
    bannerMatch: "Centrifuge Bags & FBD Bags"
  }
];
