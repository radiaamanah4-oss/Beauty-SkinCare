/* ==========================================================================
   LUMÉA BEAUTY — JAVASCRIPT ENGINE (85+ Products with Real Images)
   Includes: 85+ Product Dataset with Category-Specific Images, Card-Based Design, 
   Filters, Search, Cart & Wishlist LocalStorage, Modals, Beauty Quiz Engine, 
   Checkout Flow & Toast Alerts.
   ========================================================================== */

// ============================================================
// 1. PRODUCT DATABASE (85+ UNIQUE ITEMS WITH REAL IMAGES)
// ============================================================
const products = [
  // ===== CLEANSERS (8) =====
  {
    id: 1,
    name: "Gentle Cream Cleanser",
    category: "Cleansers",
    price: 450,
    originalPrice: 550,
    discount: 18,
    rating: 4.8,
    reviews: 124,
    stock: 15,
    badge: "BEST SELLER",
    description: "A gentle, non-stripping cream cleanser that removes impurities while maintaining your skin's natural moisture barrier.",
    images: [
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry", "Normal", "Sensitive"],
    concerns: ["Dryness", "Sensitivity"],
    ingredients: ["Green Tea", "Chamomile", "Glycerin"],
    benefits: ["Gentle Cleansing", "Soothes Skin", "Retains Moisture"],
    howToUse: "Massage onto wet skin in circular motions, then rinse thoroughly with warm water."
  },
  {
    id: 2,
    name: "Purifying Gel Cleanser",
    category: "Cleansers",
    price: 380,
    originalPrice: 480,
    discount: 20,
    rating: 4.6,
    reviews: 89,
    stock: 12,
    badge: "NEW",
    description: "A refreshing gel cleanser that deeply purifies pores and removes excess oil without over-drying.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Oil Control", "Acne-Prone"],
    ingredients: ["Centella Asiatica", "Salicylic Acid"],
    benefits: ["Pore Clarifying", "Oil Balance", "Calming"],
    howToUse: "Pump twice and massage softly onto damp face. Wash off completely."
  },
  {
    id: 3,
    name: "Rose Water Facial Wash",
    category: "Cleansers",
    price: 520,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 203,
    stock: 20,
    badge: "BEST SELLER",
    description: "Infused with rose water and aloe vera, this facial wash gently cleanses while soothing and hydrating sensitive skin.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Sensitive", "Dry", "Normal"],
    concerns: ["Sensitivity", "Dryness"],
    ingredients: ["Damask Rose Water", "Aloe Vera Extract"],
    benefits: ["Soothes Skin", "Hydrates", "Gentle Cleanse"],
    howToUse: "Use morning and evening as first step of skincare."
  },
  {
    id: 4,
    name: "Oil Control Foaming Cleanser",
    category: "Cleansers",
    price: 420,
    originalPrice: 520,
    discount: 19,
    rating: 4.5,
    reviews: 156,
    stock: 8,
    badge: "SALE",
    description: "A lightweight foaming cleanser that controls sebum production and leaves skin feeling clean and refreshed.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Oil Control", "Acne-Prone"],
    ingredients: ["Organic Green Tea", "Tea Tree Oil"],
    benefits: ["Antioxidant Shield", "Sebum Control"],
    howToUse: "Apply onto face, lather, and rinse off thoroughly."
  },
  {
    id: 5,
    name: "Vitamin C Brightening Wash",
    category: "Cleansers",
    price: 580,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 178,
    stock: 18,
    badge: "NEW",
    description: "Enriched with Vitamin C and citrus extracts, this brightening wash helps even out skin tone and promote radiance.",
    images: [
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone"],
    ingredients: ["Vitamin C", "Citrus Extracts"],
    benefits: ["Brightens Complexion", "Evens Tone"],
    howToUse: "Massage onto wet skin and rinse thoroughly."
  },
  {
    id: 6,
    name: "Honey & Oat Gentle Cleanser",
    category: "Cleansers",
    price: 490,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 245,
    stock: 22,
    badge: "BEST SELLER",
    description: "A nourishing cleanser with honey and oat extracts that gently removes makeup and impurities while soothing sensitive skin.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry", "Sensitive"],
    concerns: ["Dryness", "Sensitivity"],
    ingredients: ["Honey Extract", "Oat Extract"],
    benefits: ["Nourishes Skin", "Soothes Irritation"],
    howToUse: "Apply to damp skin and massage gently before rinsing."
  },
  {
    id: 7,
    name: "Salicylic Acid Acne Wash",
    category: "Cleansers",
    price: 550,
    originalPrice: null,
    discount: 0,
    rating: 4.4,
    reviews: 312,
    stock: 10,
    badge: "BEST SELLER",
    description: "Contains 2% salicylic acid to unclog pores, reduce breakouts, and prevent future acne formation.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination", "Acne-Prone"],
    concerns: ["Acne-Prone", "Oil Control"],
    ingredients: ["Salicylic Acid", "Tea Tree Oil"],
    benefits: ["Unclogs Pores", "Prevents Breakouts"],
    howToUse: "Use twice daily on acne-prone areas."
  },
  {
    id: 8,
    name: "Calming Milk Cleanser",
    category: "Cleansers",
    price: 460,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 98,
    stock: 14,
    badge: "NEW",
    description: "A milky, creamy cleanser that calms irritated skin and removes makeup without disrupting the skin barrier.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Sensitive", "Dry"],
    concerns: ["Sensitivity", "Dryness"],
    ingredients: ["Milk Proteins", "Oat Extract"],
    benefits: ["Calms Irritation", "Removes Makeup"],
    howToUse: "Massage onto dry or damp skin and rinse with warm water."
  },

  // ===== TONERS (2) =====
  {
    id: 9,
    name: "Rose Water Toner",
    category: "Toners",
    price: 449,
    originalPrice: 550,
    discount: 18,
    rating: 4.8,
    reviews: 320,
    stock: 18,
    badge: "BEST SELLER",
    description: "Soothing floral mist toner that rebalances pH levels and preps skin for serum absorption.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry", "Sensitive"],
    concerns: ["Dryness", "Dullness"],
    ingredients: ["Damask Rose Water", "Aloe Vera Extract"],
    benefits: ["pH Balancing", "Instant Hydration", "Calming"],
    howToUse: "Mist directly over cleansed face or sweep with a cotton pad."
  },
  {
    id: 10,
    name: "Hydrating Essence Toner",
    category: "Toners",
    price: 699,
    originalPrice: 850,
    discount: 17,
    rating: 4.9,
    reviews: 145,
    stock: 11,
    badge: "POPULAR",
    description: "Viscous essence-toner hybrid providing deep multi-layer hydration.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry", "Combination"],
    concerns: ["Dryness", "Fine Lines"],
    ingredients: ["7-Type Hyaluronic Complex", "Panthenol"],
    benefits: ["Plumping", "Moisture Surge"],
    howToUse: "Pat 2-3 layers into skin using clean hands."
  },

  // ===== SERUMS (10) =====
  {
    id: 11,
    name: "Vitamin C Radiance Serum",
    category: "Serums",
    price: 899,
    originalPrice: 1099,
    discount: 18,
    rating: 4.9,
    reviews: 567,
    stock: 12,
    badge: "BEST SELLER",
    description: "A powerful 15% Vitamin C serum that brightens skin, reduces dark spots, and protects against environmental damage.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone", "Fine Lines"],
    ingredients: ["L-Ascorbic Acid", "Ferulic Acid", "Vitamin E"],
    benefits: ["Brightens Complexion", "Evens Tone", "Antioxidant Protection"],
    howToUse: "Apply 3-4 drops in the morning before moisturizer and SPF."
  },
  {
    id: 12,
    name: "Hyaluronic Acid Hydration Serum",
    category: "Serums",
    price: 750,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 423,
    stock: 20,
    badge: "BEST SELLER",
    description: "A lightweight serum with multi-weight hyaluronic acid that provides deep, lasting hydration to plump and smooth skin.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness", "Fine Lines"],
    ingredients: ["Hyaluronic Acid", "Sodium Hyaluronate"],
    benefits: ["Instant Bounciness", "Deep Plumping"],
    howToUse: "Apply to damp skin after toner."
  },
  {
    id: 13,
    name: "Niacinamide B3 Clarifying Serum",
    category: "Serums",
    price: 820,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 389,
    stock: 15,
    badge: "NEW",
    description: "A 10% niacinamide serum that refines pores, reduces redness, and improves skin texture and tone.",
    images: [
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Acne-Prone", "Uneven Tone", "Oil Control"],
    ingredients: ["Niacinamide", "Zinc PCA"],
    benefits: ["Pore Tightening", "Sebum Normalization"],
    howToUse: "Smooth over clean skin morning and night."
  },
  {
    id: 14,
    name: "Retinol Night Renewal Serum",
    category: "Serums",
    price: 950,
    originalPrice: 1200,
    discount: 20,
    rating: 4.6,
    reviews: 456,
    stock: 7,
    badge: "SALE",
    description: "A gentle retinol serum that stimulates cell renewal, reduces fine lines, and improves skin elasticity overnight.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Combination"],
    concerns: ["Fine Lines", "Uneven Tone", "Dullness"],
    ingredients: ["Encapsulated Retinol", "Squalane"],
    benefits: ["Anti-Aging", "Skin Smoothing"],
    howToUse: "Use twice weekly at night. Always follow with SPF next morning."
  },
  {
    id: 15,
    name: "Alpha Arbutin Brightening Serum",
    category: "Serums",
    price: 880,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    stock: 14,
    badge: "NEW",
    description: "A gentle brightening serum with alpha arbutin that fades dark spots and hyperpigmentation without irritation.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Uneven Tone", "Dullness"],
    ingredients: ["Alpha Arbutin", "Niacinamide"],
    benefits: ["Fades Dark Spots", "Brightens Skin"],
    howToUse: "Apply to cleansed skin morning and evening."
  },
  {
    id: 16,
    name: "Peptide Firming Serum",
    category: "Serums",
    price: 1050,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 312,
    stock: 10,
    badge: "BEST SELLER",
    description: "A peptide-rich serum that supports collagen production, firms skin, and reduces the appearance of fine lines.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Fine Lines", "Dullness"],
    ingredients: ["Copper Tripeptide", "Matrixyl 3000"],
    benefits: ["Firming", "Elasticity Boost"],
    howToUse: "Pat gently into face and neck twice daily."
  },
  {
    id: 17,
    name: "Centella Asiatica Calming Serum",
    category: "Serums",
    price: 780,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 16,
    badge: "BEST SELLER",
    description: "A soothing serum with centella asiatica extract that calms redness, irritation, and strengthens the skin barrier.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Sensitive", "Dry"],
    concerns: ["Sensitivity", "Redness"],
    ingredients: ["Centella Asiatica 49%", "Madecassoside"],
    benefits: ["Redness Relief", "Barrier Repair"],
    howToUse: "Dispense 2 drops onto sensitive areas and gently pat."
  },
  {
    id: 18,
    name: "Salicylic Acid Pore Refining Serum",
    category: "Serums",
    price: 850,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 289,
    stock: 9,
    badge: "NEW",
    description: "A lightweight serum with salicylic acid that refines pores, controls oil, and prevents breakouts.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Acne-Prone", "Oil Control"],
    ingredients: ["Salicylic Acid", "Niacinamide"],
    benefits: ["Refines Pores", "Controls Oil"],
    howToUse: "Apply to cleansed skin before moisturizer."
  },
  {
    id: 19,
    name: "AHA Glow Renewal Serum",
    category: "Serums",
    price: 920,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 345,
    stock: 12,
    badge: "BEST SELLER",
    description: "A gentle AHA serum that exfoliates dead skin cells, reveals brighter skin, and smooths uneven texture.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone", "Fine Lines"],
    ingredients: ["Glycolic Acid", "Lactic Acid"],
    benefits: ["Exfoliates", "Reveals Brighter Skin"],
    howToUse: "Use 2-3 times weekly at night."
  },
  {
    id: 20,
    name: "Copper Peptide Repair Serum",
    category: "Serums",
    price: 1200,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 178,
    stock: 6,
    badge: "NEW",
    description: "A luxurious serum with copper peptides that repairs damaged skin, boosts collagen, and promotes wound healing.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Fine Lines", "Dullness", "Acne-Prone"],
    ingredients: ["Copper Tripeptide", "Hyaluronic Acid"],
    benefits: ["Repairs Skin", "Boosts Collagen"],
    howToUse: "Apply to clean skin morning and evening."
  },

  // ===== MOISTURIZERS (10) =====
  {
    id: 21,
    name: "Daily Barrier Cream Moisturizer",
    category: "Moisturizers",
    price: 650,
    originalPrice: 750,
    discount: 13,
    rating: 4.8,
    reviews: 456,
    stock: 18,
    badge: "BEST SELLER",
    description: "A rich yet lightweight moisturizer that strengthens the skin barrier and provides 24-hour hydration.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Ceramide NP", "Hyaluronic Acid"],
    benefits: ["Barrier Support", "Deep Hydration"],
    howToUse: "Use morning and evening."
  },
  {
    id: 22,
    name: "Niacinamide Mattifying Gel",
    category: "Moisturizers",
    price: 580,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 234,
    stock: 15,
    badge: "BEST SELLER",
    description: "A lightweight gel moisturizer with niacinamide that hydrates while controlling excess oil and shine.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Oil Control", "Acne-Prone"],
    ingredients: ["Niacinamide", "Green Tea Extract"],
    benefits: ["Controls Oil", "Hydrates"],
    howToUse: "Apply generously on clean skin."
  },
  {
    id: 23,
    name: "Ceramide Repair Cream",
    category: "Moisturizers",
    price: 780,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 14,
    badge: "BEST SELLER",
    description: "A rich cream with essential ceramides that repairs the skin barrier, locks in moisture, and soothes dry, irritated skin.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry", "Sensitive"],
    concerns: ["Dryness", "Sensitivity"],
    ingredients: ["Ceramide 1,3,6", "Cholesterol"],
    benefits: ["Barrier Restoration", "Calming Relief"],
    howToUse: "Massage warmly between fingers and press onto irritated zones."
  },
  {
    id: 24,
    name: "SPF 50 Daily Moisturizer",
    category: "Moisturizers",
    price: 720,
    originalPrice: 850,
    discount: 15,
    rating: 4.9,
    reviews: 678,
    stock: 22,
    badge: "SALE",
    description: "A multi-tasking moisturizer with broad-spectrum SPF 50 that hydrates and protects against UV damage.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness", "Dullness"],
    ingredients: ["Niacinamide", "Chemical UV Filters"],
    benefits: ["Zero White Cast", "Dewy Glow", "UVA/UVB Shield"],
    howToUse: "Apply two finger lengths evenly 15 minutes before sun exposure."
  },
  {
    id: 25,
    name: "Water Cream Hydration Gel",
    category: "Moisturizers",
    price: 550,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 345,
    stock: 20,
    badge: "NEW",
    description: "A refreshing water cream gel that delivers instant hydration without feeling heavy or greasy.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Birch Juice", "Hyaluronic Acid"],
    benefits: ["Cooling Relief", "Weightless Moisture"],
    howToUse: "Apply generously on clean skin."
  },
  {
    id: 26,
    name: "Rosehip Night Repair Cream",
    category: "Moisturizers",
    price: 890,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    stock: 10,
    badge: "BEST SELLER",
    description: "A nourishing night cream with rosehip oil that repairs skin overnight and reduces the appearance of fine lines.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry", "Normal"],
    concerns: ["Fine Lines", "Dryness", "Dullness"],
    ingredients: ["Rosehip Oil", "Shea Butter"],
    benefits: ["Repairs Overnight", "Reduces Fine Lines"],
    howToUse: "Apply as final step of nighttime routine."
  },
  {
    id: 27,
    name: "BHA Pore Control Moisturizer",
    category: "Moisturizers",
    price: 620,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 189,
    stock: 13,
    badge: "NEW",
    description: "A lightweight moisturizer with BHA that helps control excess oil and refine pores while hydrating.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Acne-Prone", "Oil Control"],
    ingredients: ["Salicylic Acid", "Niacinamide"],
    benefits: ["Controls Oil", "Refines Pores"],
    howToUse: "Apply to clean skin morning and evening."
  },
  {
    id: 28,
    name: "Collagen Firming Cream",
    category: "Moisturizers",
    price: 950,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 456,
    stock: 8,
    badge: "BEST SELLER",
    description: "A firming cream with marine collagen that improves skin elasticity and reduces visible signs of aging.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Fine Lines", "Dullness"],
    ingredients: ["Marine Collagen", "Peptides"],
    benefits: ["Firms Skin", "Reduces Aging Signs"],
    howToUse: "Apply to face and neck daily."
  },
  {
    id: 29,
    name: "Soothing Cica Cream",
    category: "Moisturizers",
    price: 680,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 789,
    stock: 18,
    badge: "BEST SELLER",
    description: "A soothing cream with cica (centella asiatica) that calms redness and irritation while restoring moisture.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Sensitive", "Dry"],
    concerns: ["Sensitivity", "Dryness"],
    ingredients: ["Centella Asiatica", "Panthenol"],
    benefits: ["Calms Redness", "Restores Moisture"],
    howToUse: "Apply generously to affected areas."
  },
  {
    id: 30,
    name: "Tinted Moisturizer SPF 30",
    category: "Moisturizers",
    price: 850,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 345,
    stock: 12,
    badge: "NEW",
    description: "A lightweight tinted moisturizer with SPF 30 that provides sheer coverage, hydration, and sun protection.",
    images: [
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone"],
    ingredients: ["Titanium Dioxide", "Hyaluronic Acid"],
    benefits: ["Sheer Coverage", "Sun Protection"],
    howToUse: "Apply evenly to face and neck."
  },

  // ===== SUNSCREENS (8) =====
  {
    id: 31,
    name: "SPF 50+ Sunscreen Gel",
    category: "Sunscreens",
    price: 650,
    originalPrice: 780,
    discount: 16,
    rating: 4.9,
    reviews: 890,
    stock: 25,
    badge: "BEST SELLER",
    description: "A lightweight, non-greasy sunscreen gel with SPF 50+ that provides broad-spectrum protection without white cast.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness"],
    ingredients: ["Silica", "Centella Extract"],
    benefits: ["Matte Finish", "Lightweight Shield"],
    howToUse: "Apply evenly across face and neck."
  },
  {
    id: 32,
    name: "Vitamin C Sunscreen Serum",
    category: "Sunscreens",
    price: 899,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 456,
    stock: 15,
    badge: "BEST SELLER",
    description: "A 2-in-1 sunscreen serum with Vitamin C that protects from UV rays while brightening and evening skin tone.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone"],
    ingredients: ["Vitamin C", "Chemical UV Filters"],
    benefits: ["Brightens", "UV Protection"],
    howToUse: "Apply before makeup or alone."
  },
  {
    id: 33,
    name: "Mineral Sunscreen SPF 50",
    category: "Sunscreens",
    price: 780,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 345,
    stock: 10,
    badge: "NEW",
    description: "A mineral sunscreen with zinc oxide that provides physical UV protection, suitable for sensitive skin.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Sensitive"],
    concerns: ["Sensitivity"],
    ingredients: ["Non-nano Zinc Oxide", "Squalane"],
    benefits: ["Gentle Physical UV Shield", "Redness Cover"],
    howToUse: "Warm between fingers and spread evenly."
  },
  {
    id: 34,
    name: "Waterproof Sport Sunscreen",
    category: "Sunscreens",
    price: 720,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 234,
    stock: 14,
    badge: "NEW",
    description: "A water-resistant sunscreen with SPF 50 that stays put during swimming and sports activities.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: [],
    ingredients: ["Waterproof Polymers"],
    benefits: ["Sweatproof", "Long-lasting Protection"],
    howToUse: "Reapply every 2 hours during outdoor activities."
  },
  {
    id: 35,
    name: "Tinted Sunscreen SPF 40",
    category: "Sunscreens",
    price: 850,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 18,
    badge: "BEST SELLER",
    description: "A tinted sunscreen with SPF 40 that provides UV protection, light coverage, and a natural finish.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Uneven Tone"],
    ingredients: ["Iron Oxides", "Chemical UV Filters"],
    benefits: ["Natural Finish", "UV Protection"],
    howToUse: "Apply evenly to face and neck."
  },
  {
    id: 36,
    name: "Aqua Sunscreen Mist SPF 50",
    category: "Sunscreens",
    price: 580,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 178,
    stock: 20,
    badge: "NEW",
    description: "A refreshing sunscreen mist that provides easy, on-the-go SPF 50 protection without sticky residue.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: [],
    ingredients: ["Chemical UV Filters"],
    benefits: ["Easy Application", "No Sticky Residue"],
    howToUse: "Spray evenly over face and body."
  },
  {
    id: 37,
    name: "Niacinamide Sunscreen Gel",
    category: "Sunscreens",
    price: 790,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 456,
    stock: 12,
    badge: "BEST SELLER",
    description: "A sunscreen gel with niacinamide that controls oil, refines pores, and provides SPF 50+ protection.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Oil Control", "Acne-Prone"],
    ingredients: ["Niacinamide", "Chemical UV Filters"],
    benefits: ["Controls Oil", "Refines Pores"],
    howToUse: "Apply evenly before makeup."
  },
  {
    id: 38,
    name: "Sunscreen Stick SPF 50",
    category: "Sunscreens",
    price: 680,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 234,
    stock: 16,
    badge: "NEW",
    description: "A convenient solid sunscreen stick that glides on smoothly for easy reapplication throughout the day.",
    images: [
      "https://images.unsplash.com/photo-1556228722-d119f829c33b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: [],
    ingredients: ["Chemical UV Filters"],
    benefits: ["Easy Reapplication", "Portable"],
    howToUse: "Glide over face and neck as needed."
  },

  // ===== FACE MASKS (8) =====
  {
    id: 39,
    name: "Hydrating Sheet Mask (5-pack)",
    category: "Face Masks",
    price: 450,
    originalPrice: 550,
    discount: 18,
    rating: 4.8,
    reviews: 345,
    stock: 30,
    badge: "BEST SELLER",
    description: "A pack of 5 hydrating sheet masks infused with hyaluronic acid and aloe vera for instant moisture boost.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Sodium Hyaluronate", "Aloe Vera"],
    benefits: ["Instant Glow", "Deep Moisture"],
    howToUse: "Leave on face for 15-20 minutes."
  },
  {
    id: 40,
    name: "Clay Detox Mask",
    category: "Face Masks",
    price: 550,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 234,
    stock: 12,
    badge: "BEST SELLER",
    description: "A purifying clay mask that draws out impurities, reduces excess oil, and minimizes the appearance of pores.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Acne-Prone", "Oil Control"],
    ingredients: ["French Pink Clay", "Rosehip Oil"],
    benefits: ["Pore Detox", "Smooth Texture"],
    howToUse: "Apply layer for 10 minutes then rinse off."
  },
  {
    id: 41,
    name: "Vitamin C Brightening Mask",
    category: "Face Masks",
    price: 620,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 15,
    badge: "BEST SELLER",
    description: "A brightening mask with Vitamin C that evens skin tone, reduces dark spots, and boosts radiance.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone"],
    ingredients: ["Vitamin C", "Citrus Extracts"],
    benefits: ["Brightens", "Evens Tone"],
    howToUse: "Apply evenly and leave for 10-15 minutes."
  },
  {
    id: 42,
    name: "Cica Calming Mask",
    category: "Face Masks",
    price: 580,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 678,
    stock: 18,
    badge: "BEST SELLER",
    description: "A soothing mask with centella asiatica that calms irritated skin and reduces redness and inflammation.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Sensitive"],
    concerns: ["Sensitivity", "Redness"],
    ingredients: ["Centella Asiatica", "Madecassoside"],
    benefits: ["Calms Irritation", "Reduces Redness"],
    howToUse: "Apply to cleansed skin and leave for 15 minutes."
  },
  {
    id: 43,
    name: "Sleeping Overnight Mask",
    category: "Face Masks",
    price: 750,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 456,
    stock: 10,
    badge: "NEW",
    description: "A nourishing overnight mask that deeply hydrates and repairs skin while you sleep for a plump morning glow.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry", "Normal"],
    concerns: ["Dryness", "Fine Lines"],
    ingredients: ["Gluconolactone (PHA)", "Squalane"],
    benefits: ["Overnight Renewal", "Soft Skin"],
    howToUse: "Apply generous layer before sleep and rinse in morning."
  },
  {
    id: 44,
    name: "Collagen Lifting Mask",
    category: "Face Masks",
    price: 820,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 234,
    stock: 8,
    badge: "NEW",
    description: "A firming mask with collagen that improves skin elasticity and reduces the appearance of fine lines.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Fine Lines", "Dullness"],
    ingredients: ["Collagen", "Peptides"],
    benefits: ["Firms Skin", "Reduces Fine Lines"],
    howToUse: "Apply to clean skin and leave for 15-20 minutes."
  },
  {
    id: 45,
    name: "Tea Tree Purifying Mask",
    category: "Face Masks",
    price: 520,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 345,
    stock: 14,
    badge: "BEST SELLER",
    description: "A purifying mask with tea tree oil that helps control acne, unclog pores, and soothe inflamed skin.",
    images: [
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Acne-Prone"],
    concerns: ["Acne-Prone", "Oil Control"],
    ingredients: ["Tea Tree Oil", "Kaolin"],
    benefits: ["Controls Acne", "Unclogs Pores"],
    howToUse: "Use 2-3 times per week."
  },
  {
    id: 46,
    name: "Gold Radiance Sheet Mask (5-pack)",
    category: "Face Masks",
    price: 680,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 789,
    stock: 20,
    badge: "BEST SELLER",
    description: "A luxurious sheet mask set infused with gold and pearl extracts for a radiant, glowing complexion.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone"],
    ingredients: ["Gold Extract", "Pearl Extract"],
    benefits: ["Radiance Boost", "Glowing Complexion"],
    howToUse: "Leave on face for 15-20 minutes."
  },

  // ===== EYE CARE (6) =====
  {
    id: 47,
    name: "Caffeine Eye Serum",
    category: "Eye Care",
    price: 580,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 345,
    stock: 15,
    badge: "BEST SELLER",
    description: "A lightweight eye serum with caffeine that reduces dark circles, puffiness, and brightens the under-eye area.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Fine Lines"],
    ingredients: ["Caffeine", "EGCG Green Tea"],
    benefits: ["De-puffing", "Refreshing"],
    howToUse: "Massage small drop under eyes morning and evening."
  },
  {
    id: 48,
    name: "Retinol Eye Cream",
    category: "Eye Care",
    price: 780,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 234,
    stock: 10,
    badge: "NEW",
    description: "A gentle retinol eye cream that smooths fine lines, brightens dark circles, and firms the eye area.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Fine Lines", "Dullness"],
    ingredients: ["Encapsulated Retinol", "Hyaluronic Acid"],
    benefits: ["Smooths Fine Lines", "Brightens"],
    howToUse: "Apply tiny amount around orbital bone."
  },
  {
    id: 49,
    name: "Peptide Firming Eye Cream",
    category: "Eye Care",
    price: 850,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 12,
    badge: "BEST SELLER",
    description: "A peptide-rich eye cream that firms, lifts, and reduces the appearance of crow's feet and fine lines.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Fine Lines", "Dullness"],
    ingredients: ["Palmitoyl Tripeptide", "Vitamin C"],
    benefits: ["Fades Dark Circles", "Smooths Crow's Feet"],
    howToUse: "Gently tap small amount around orbital bone using ring finger."
  },
  {
    id: 50,
    name: "Hydrating Eye Gel",
    category: "Eye Care",
    price: 520,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 189,
    stock: 18,
    badge: "NEW",
    description: "A cooling hydrating eye gel with hyaluronic acid that plumps and refreshes the delicate eye area.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Hyaluronic Acid", "Aloe Vera"],
    benefits: ["Hydrates", "Refreshes"],
    howToUse: "Apply to clean skin around eyes."
  },
  {
    id: 51,
    name: "Vitamin K Eye Brightening Cream",
    category: "Eye Care",
    price: 920,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 456,
    stock: 8,
    badge: "BEST SELLER",
    description: "A brightening eye cream with Vitamin K that targets dark circles and improves microcirculation.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Uneven Tone"],
    ingredients: ["Vitamin K", "Niacinamide"],
    benefits: ["Brightens Dark Circles", "Improves Circulation"],
    howToUse: "Apply gently around eyes morning and evening."
  },
  {
    id: 52,
    name: "Gold Collagen Eye Patches (30-pair)",
    category: "Eye Care",
    price: 680,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 789,
    stock: 20,
    badge: "BEST SELLER",
    description: "A set of 30 pairs of gold collagen eye patches that firm, lift, and reduce puffiness for a refreshed look.",
    images: [
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Fine Lines"],
    ingredients: ["Collagen", "Gold Extract"],
    benefits: ["Firms", "Lifts", "Reduces Puffiness"],
    howToUse: "Apply under eyes for 15-20 minutes."
  },

  // ===== LIP CARE (2) =====
  {
    id: 53,
    name: "Nourishing Lip Mask",
    category: "Lip Care",
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.9,
    reviews: 410,
    stock: 35,
    badge: "BEST SELLER",
    description: "Overnight buttery treatment that repairs chapped lips with berry extracts.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry"],
    concerns: ["Dryness"],
    ingredients: ["Berry Complex", "Shea Butter"],
    benefits: ["Softens Lips", "Eliminates Flakiness"],
    howToUse: "Apply generously before bed."
  },
  {
    id: 54,
    name: "Rose Lip Balm SPF 15",
    category: "Lip Care",
    price: 299,
    originalPrice: 350,
    discount: 14,
    rating: 4.7,
    reviews: 190,
    stock: 28,
    badge: "SALE",
    description: "Daily tinted lip moisturizer giving a flush of pink with sun protection.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry"],
    concerns: ["Dryness"],
    ingredients: ["Rosehip Seed Oil", "SPF 15"],
    benefits: ["Tinted Sheen", "UV Protection"],
    howToUse: "Swipe on lips whenever dry."
  },

  // ===== MAKEUP (8) =====
  {
    id: 55,
    name: "Velvet Skin Foundation (10 shades)",
    category: "Makeup",
    price: 1199,
    originalPrice: 1399,
    discount: 14,
    rating: 4.8,
    reviews: 155,
    stock: 12,
    badge: "BEST SELLER",
    description: "A buildable, velvet-matte foundation with medium to full coverage. Available in 10 skin-true shades.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Uneven Tone"],
    ingredients: ["Hyaluronic Acid", "SPF 20"],
    benefits: ["Seamless Blend", "Long Wearing"],
    howToUse: "Blend with beauty sponge starting from center of face."
  },
  {
    id: 56,
    name: "Natural Glow Concealer",
    category: "Makeup",
    price: 599,
    originalPrice: 699,
    discount: 14,
    rating: 4.7,
    reviews: 120,
    stock: 18,
    badge: "NEW",
    description: "Crease-proof hydrating concealer that instantly brightens dark spots and blemishes.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry", "Combination"],
    concerns: ["Uneven Tone"],
    ingredients: ["Glycerin", "Niacinamide"],
    benefits: ["High Coverage", "Natural Finish"],
    howToUse: "Dot under eyes and over spots; tap to blend."
  },
  {
    id: 57,
    name: "Soft Peach Blush",
    category: "Makeup",
    price: 499,
    originalPrice: 599,
    discount: 16,
    rating: 4.9,
    reviews: 210,
    stock: 15,
    badge: "POPULAR",
    description: "Silky powder blush delivering a natural warm peach flush.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry", "Oily"],
    concerns: ["Dullness"],
    ingredients: ["Micronized Mica"],
    benefits: ["Youthful Flush", "Easy Blend"],
    howToUse: "Sweep onto apples of cheeks using blush brush."
  },
  {
    id: 58,
    name: "Rose Glow Liquid Blush",
    category: "Makeup",
    price: 549,
    originalPrice: 650,
    discount: 15,
    rating: 4.8,
    reviews: 142,
    stock: 10,
    badge: "BEST SELLER",
    description: "Dewy liquid cheek color that melts seamlessly onto bare skin or over foundation.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry", "Combination"],
    concerns: ["Dullness"],
    ingredients: ["Jojoba Oil"],
    benefits: ["Glass-skin Blush", "Buildable Pigment"],
    howToUse: "Dab two small dots and blend with fingertips."
  },
  {
    id: 59,
    name: "Everyday Nude Lip Tint",
    category: "Makeup",
    price: 399,
    originalPrice: 480,
    discount: 16,
    rating: 4.8,
    reviews: 305,
    stock: 22,
    badge: "BEST SELLER",
    description: "Weightless water lip tint offering long-lasting MLBB (My Lips But Better) color.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry"],
    concerns: ["Dullness"],
    ingredients: ["Vitamin E", "Rose Extract"],
    benefits: ["Non-drying", "Transfer Proof"],
    howToUse: "Apply to center of lips for gradient effect."
  },
  {
    id: 60,
    name: "Cherry Red Lip Tint",
    category: "Makeup",
    price: 399,
    originalPrice: 480,
    discount: 16,
    rating: 4.7,
    reviews: 180,
    stock: 17,
    badge: "SALE",
    description: "Vibrant ruby tint giving juicy glossy lips with zero sticky feeling.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry"],
    concerns: ["Dullness"],
    ingredients: ["Cherry Extract"],
    benefits: ["High Stain", "Gloss Finish"],
    howToUse: "Glide across full lips."
  },
  {
    id: 61,
    name: "Velvet Matte Lipstick",
    category: "Makeup",
    price: 599,
    originalPrice: 699,
    discount: 14,
    rating: 4.6,
    reviews: 125,
    stock: 14,
    badge: "NEW",
    description: "Comfortable plush matte bullet lipstick infused with moisturizing oils.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry"],
    concerns: ["Dullness"],
    ingredients: ["Argan Oil", "Wax Complex"],
    benefits: ["Rich Color", "Velvet Feel"],
    howToUse: "Swipe directly from tube."
  },
  {
    id: 62,
    name: "Length & Volume Mascara",
    category: "Makeup",
    price: 499,
    originalPrice: 599,
    discount: 16,
    rating: 4.8,
    reviews: 215,
    stock: 16,
    badge: "BEST SELLER",
    description: "Smudge-proof tubing mascara that lengthens and holds curl in humid weather.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Sensitive"],
    concerns: [],
    ingredients: ["Pro-Vitamin B5"],
    benefits: ["Sweatproof", "No Clumping"],
    howToUse: "Wiggle brush from lash roots to tips."
  },

  // ===== BODY CARE (6) =====
  {
    id: 63,
    name: "Vanilla Coconut Body Scrub",
    category: "Body Care",
    price: 450,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 345,
    stock: 18,
    badge: "BEST SELLER",
    description: "A luxurious body scrub with vanilla and coconut that gently exfoliates while leaving skin soft and fragrant.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Cane Sugar", "Coconut Oil"],
    benefits: ["Smooth Texture", "Intense Glow"],
    howToUse: "Gently scrub damp skin 2 times a week."
  },
  {
    id: 64,
    name: "Shea Butter Body Lotion",
    category: "Body Care",
    price: 380,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 22,
    badge: "BEST SELLER",
    description: "A rich, fast-absorbing body lotion with shea butter that deeply nourishes and hydrates dry skin.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Shea Butter", "Niacinamide"],
    benefits: ["Smooth Skin", "All-Day Aroma"],
    howToUse: "Massage into dry body skin post-shower."
  },
  {
    id: 65,
    name: "Lavender Body Oil",
    category: "Body Care",
    price: 520,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 234,
    stock: 12,
    badge: "NEW",
    description: "A calming body oil with lavender essential oil that moisturizes, soothes, and promotes relaxation.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry"],
    concerns: ["Dryness"],
    ingredients: ["Lavender Oil", "Jojoba Oil"],
    benefits: ["Calms", "Moisturizes"],
    howToUse: "Apply to damp skin after shower."
  },
  {
    id: 66,
    name: "Hand Cream Duo (2pc)",
    category: "Body Care",
    price: 320,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 789,
    stock: 40,
    badge: "BEST SELLER",
    description: "A set of 2 hand creams with shea butter and vitamin E for soft, nourished hands on the go.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Shea Butter", "Vitamin E"],
    benefits: ["Quick Absorption", "Cuticle Care"],
    howToUse: "Reapply after washing hands."
  },
  {
    id: 67,
    name: "Coffee Body Scrub",
    category: "Body Care",
    price: 490,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 456,
    stock: 14,
    badge: "BEST SELLER",
    description: "A stimulating body scrub with coffee grounds that exfoliates, improves circulation, and smooths skin texture.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness", "Dullness"],
    ingredients: ["Coffee Grounds", "Coconut Oil"],
    benefits: ["Exfoliates", "Improves Circulation"],
    howToUse: "Gently scrub damp skin 2 times a week."
  },
  {
    id: 68,
    name: "Rose Body Mist",
    category: "Body Care",
    price: 350,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 189,
    stock: 20,
    badge: "NEW",
    description: "A refreshing rose-scented body mist that hydrates and leaves skin delicately fragranced.",
    images: [
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: [],
    ingredients: ["Rose Water", "Glycerin"],
    benefits: ["Hydrates", "Refreshes"],
    howToUse: "Spray over body after shower."
  },

  // ===== HAIR CARE (6) =====
  {
    id: 69,
    name: "Argan Oil Shampoo",
    category: "Hair Care",
    price: 450,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 345,
    stock: 16,
    badge: "BEST SELLER",
    description: "A nourishing shampoo with argan oil that gently cleanses while restoring moisture and shine to dry hair.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: [],
    concerns: [],
    ingredients: ["Argan Oil", "Vitamin E"],
    benefits: ["Restores Moisture", "Adds Shine"],
    howToUse: "Massage into scalp and rinse thoroughly."
  },
  {
    id: 70,
    name: "Coconut Hair Conditioner",
    category: "Hair Care",
    price: 480,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 456,
    stock: 18,
    badge: "BEST SELLER",
    description: "A rich conditioner with coconut oil that detangles, softens, and deep conditions all hair types.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: [],
    concerns: [],
    ingredients: ["Coconut Oil", "Silk Amino Acids"],
    benefits: ["Easy Detangling", "Soft Touch"],
    howToUse: "Apply from mid-lengths to ends."
  },
  {
    id: 71,
    name: "Hair Repair Mask",
    category: "Hair Care",
    price: 650,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 10,
    badge: "BEST SELLER",
    description: "A deep conditioning hair mask with keratin that repairs damaged hair and restores elasticity.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: [],
    concerns: [],
    ingredients: ["Keratin", "Jojoba Oil"],
    benefits: ["Restores Elasticity", "Reduces Split Ends"],
    howToUse: "Leave on washed hair for 10 minutes then wash out."
  },
  {
    id: 72,
    name: "Rosemary Hair Oil",
    category: "Hair Care",
    price: 520,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 234,
    stock: 12,
    badge: "NEW",
    description: "A stimulating hair oil with rosemary that promotes scalp health and encourages stronger, thicker hair.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: [],
    concerns: [],
    ingredients: ["Rosemary Oil", "Jojoba Oil"],
    benefits: ["Promotes Scalp Health", "Strengthens Hair"],
    howToUse: "Massage into scalp and leave for 30 minutes before washing."
  },
  {
    id: 73,
    name: "Sulfate-Free Shampoo",
    category: "Hair Care",
    price: 490,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 189,
    stock: 15,
    badge: "NEW",
    description: "A gentle, sulfate-free shampoo that cleanses without stripping natural oils, perfect for color-treated hair.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: [],
    concerns: [],
    ingredients: ["Gentle Surfactants", "Aloe Vera"],
    benefits: ["Color-Safe", "Gentle Cleanse"],
    howToUse: "Massage into scalp and rinse thoroughly."
  },
  {
    id: 74,
    name: "Heat Protectant Spray",
    category: "Hair Care",
    price: 380,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 345,
    stock: 20,
    badge: "BEST SELLER",
    description: "A lightweight heat protectant spray that shields hair from heat damage up to 450°F (232°C).",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: [],
    concerns: [],
    ingredients: ["Silicone", "Vitamin E"],
    benefits: ["Heat Protection", "Prevents Damage"],
    howToUse: "Spray on damp hair before heat styling."
  },

  // ===== BEAUTY TOOLS (5) =====
  {
    id: 75,
    name: "Jade Roller",
    category: "Beauty Tools",
    price: 420,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 234,
    stock: 14,
    badge: "BEST SELLER",
    description: "A genuine jade roller that reduces puffiness, improves circulation, and enhances product absorption.",
    images: [
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness"],
    ingredients: ["Natural Jade"],
    benefits: ["De-puffing", "Boosts Circulation"],
    howToUse: "Roll gently upwards over face with facial oil."
  },
  {
    id: 76,
    name: "Gua Sha Stone Set",
    category: "Beauty Tools",
    price: 580,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 345,
    stock: 10,
    badge: "BEST SELLER",
    description: "A set of premium gua sha stones for facial massage, lymphatic drainage, and improved skin tone.",
    images: [
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness"],
    ingredients: ["Natural Gua Sha Stone"],
    benefits: ["Lymphatic Drainage", "Improves Tone"],
    howToUse: "Glissade edge along jawline and cheekbones at 15 degree angle."
  },
  {
    id: 77,
    name: "Sonic Facial Cleansing Brush",
    category: "Beauty Tools",
    price: 890,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 189,
    stock: 8,
    badge: "NEW",
    description: "A sonic facial cleansing brush that removes impurities and exfoliates for a deeper, more effective cleanse.",
    images: [
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness"],
    ingredients: ["Silicone Bristles"],
    benefits: ["Deep Cleanse", "Exfoliates"],
    howToUse: "Use with water and cleanser in circular motions."
  },
  {
    id: 78,
    name: "Makeup Sponge Set (3pc)",
    category: "Beauty Tools",
    price: 350,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 456,
    stock: 25,
    badge: "BEST SELLER",
    description: "A set of 3 high-quality makeup sponges that blend liquid and cream products seamlessly.",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: [],
    ingredients: ["Latex-Free Hydrophilic Foam"],
    benefits: ["Zero Streaks", "Minimal Product Absorption"],
    howToUse: "Dampen with water and squeeze excess out before blending foundation."
  },
  {
    id: 79,
    name: "LED Light Therapy Mask",
    category: "Beauty Tools",
    price: 1200,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 567,
    stock: 6,
    badge: "BEST SELLER",
    description: "A professional-grade LED light therapy mask that targets acne, fine lines, and uneven skin tone.",
    images: [
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Acne-Prone", "Fine Lines", "Dullness"],
    ingredients: ["LED Lights"],
    benefits: ["Targets Acne", "Reduces Fine Lines"],
    howToUse: "Use for 10-15 minutes daily on clean skin."
  },

  // ===== GIFT SETS (6) =====
  {
    id: 80,
    name: "Glow Starter Gift Set",
    category: "Gift Sets",
    price: 1299,
    originalPrice: 1599,
    discount: 18,
    rating: 4.9,
    reviews: 234,
    stock: 12,
    badge: "BEST SELLER",
    description: "A starter set including our best-selling cleanser, vitamin C serum, and hydrating moisturizer.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dullness", "Dryness"],
    ingredients: ["Complete Routine Essentials"],
    benefits: ["Perfect Gift", "Complete Routine Trial"],
    howToUse: "Use products in sequential 4-step order daily."
  },
  {
    id: 81,
    name: "Hydration Hero Gift Set",
    category: "Gift Sets",
    price: 1499,
    originalPrice: 1799,
    discount: 16,
    rating: 4.9,
    reviews: 345,
    stock: 10,
    badge: "BEST SELLER",
    description: "A hydration-focused set with our hydrating cleanser, hyaluronic acid serum, and ceramide cream.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Dry", "Sensitive"],
    concerns: ["Dryness"],
    ingredients: ["Hyaluronic Acid", "Ceramides"],
    benefits: ["Deep Hydration", "Barrier Support"],
    howToUse: "Use morning and evening for best results."
  },
  {
    id: 82,
    name: "Clear Skin Acne Control Set",
    category: "Gift Sets",
    price: 1399,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 456,
    stock: 8,
    badge: "NEW",
    description: "An acne-fighting set with salicylic acid cleanser, niacinamide serum, and BHA moisturizer.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Oily", "Combination", "Acne-Prone"],
    concerns: ["Acne-Prone", "Oil Control"],
    ingredients: ["Salicylic Acid", "Niacinamide"],
    benefits: ["Controls Acne", "Refines Pores"],
    howToUse: "Use twice daily for best results."
  },
  {
    id: 83,
    name: "Luxe Beauty Essentials Set",
    category: "Gift Sets",
    price: 1899,
    originalPrice: 2299,
    discount: 17,
    rating: 4.9,
    reviews: 567,
    stock: 6,
    badge: "BEST SELLER",
    description: "A premium set featuring our peptide serum, firming cream, gold eye patches, and jade roller.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Fine Lines", "Dullness"],
    ingredients: ["Peptides", "Collagen"],
    benefits: ["Firms", "Brightens", "Pampering"],
    howToUse: "Follow the included routine guide."
  },
  {
    id: 84,
    name: "Self-Care Sunday Bundle",
    category: "Gift Sets",
    price: 1099,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 345,
    stock: 15,
    badge: "NEW",
    description: "A relaxing self-care bundle with a sheet mask set, body scrub, body lotion, and calming candle.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597261-833244679261?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["All"],
    concerns: ["Dryness"],
    ingredients: ["Essential Oils", "Natural Butters"],
    benefits: ["Relaxing", "Nourishing"],
    howToUse: "Unbox and indulge in a weekend spa routine."
  },
  {
    id: 85,
    name: "Ultimate Self-Care Gift Box",
    category: "Gift Sets",
    price: 2299,
    originalPrice: 2799,
    discount: 17,
    rating: 5.0,
    reviews: 85,
    stock: 4,
    badge: "POPULAR",
    description: "Luxury gift set containing Body Scrub, Rose Quartz Roller, Sheet Mask 5-pack, and Lip Mask.",
    images: [
      "https://images.unsplash.com/photo-1512290900673-70020120536d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    ],
    skinTypes: ["Normal", "Dry", "Sensitive"],
    concerns: ["Dullness", "Dryness"],
    ingredients: ["Luxury Self-Care Mix"],
    benefits: ["Head to Toe Pampering", "Premium Packaging"],
    howToUse: "Unbox and indulge in a weekend spa routine."
  }
];

// ============================================================
// STATE MANAGEMENT
// ============================================================
let cart = JSON.parse(localStorage.getItem('lumea_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('lumea_wishlist')) || [];
let activeCategory = 'All';
let activeSort = 'featured';

// ============================================================
// DOM CONTENT LOADED INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initDrawerAndModalControls();
  renderProducts();
  renderBestSellers();
  renderNewArrivals();
  updateCartUI();
  updateWishlistUI();
});

// ============================================================
// HEADER SCROLL & MOBILE MENU
// ============================================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const openBtn = document.getElementById('mobileMenuOpenBtn');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      drawer.classList.add('active');
      overlay.classList.add('active');
    });
  }

  const closeMobileNav = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  if (overlay) overlay.addEventListener('click', closeMobileNav);
  
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

// ============================================================
// DRAWERS & MODALS INITIALIZATION
// ============================================================
function initDrawerAndModalControls() {
  // Cart Drawer
  const cartTrigger = document.getElementById('cartDrawerTriggerBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');

  if (cartTrigger) {
    cartTrigger.addEventListener('click', () => {
      cartDrawer.classList.add('active');
      cartOverlay.classList.add('active');
    });
  }

  const closeCart = () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  };

  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);

  // Wishlist Drawer
  const wishlistTrigger = document.getElementById('wishlistDrawerTriggerBtn');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistOverlay = document.getElementById('wishlistOverlay');
  const closeWishlistBtn = document.getElementById('closeWishlistBtn');

  if (wishlistTrigger) {
    wishlistTrigger.addEventListener('click', () => {
      wishlistDrawer.classList.add('active');
      wishlistOverlay.classList.add('active');
    });
  }

  const closeWishlist = () => {
    wishlistDrawer.classList.remove('active');
    wishlistOverlay.classList.remove('active');
  };

  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeWishlist);
  if (wishlistOverlay) wishlistOverlay.addEventListener('click', closeWishlist);

  // Search Bar Modal
  const searchTrigger = document.getElementById('searchTriggerBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const searchInput = document.getElementById('globalSearchInput');

  if (searchTrigger) {
    searchTrigger.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      if (searchInput) searchInput.focus();
    });
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterAndRenderAll(query);
    });
  }

  // Product Modal Close
  const closeProductModalBtn = document.getElementById('closeProductModalBtn');
  if (closeProductModalBtn) {
    closeProductModalBtn.addEventListener('click', () => {
      document.getElementById('productModal').classList.remove('active');
    });
  }

  // Filter Sidebar Mobile
  const filterMobileBtn = document.getElementById('openMobileFilterBtn');
  const filterSidebar = document.getElementById('filterSidebar');
  const closeFilterBtn = document.getElementById('closeFilterBtn');

  if (filterMobileBtn && filterSidebar) {
    filterMobileBtn.addEventListener('click', () => filterSidebar.classList.add('active'));
    if (closeFilterBtn) closeFilterBtn.addEventListener('click', () => filterSidebar.classList.remove('active'));
  }

  // Checkout Modal
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your beauty bag is currently empty.');
        return;
      }
      closeCart();
      openCheckoutModal();
    });
  }

  const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');
  if (closeCheckoutModalBtn) {
    closeCheckoutModalBtn.addEventListener('click', () => {
      document.getElementById('checkoutModal').classList.remove('active');
    });
  }
}

// ============================================================
// PRODUCT CARD GENERATION ENGINE (Card-Based Design)
// ============================================================
function createProductCardHTML(product) {
  const isWishlisted = wishlist.some(item => item.id === product.id);
  
  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  const starsHTML = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);

  return `
    <div class="product-card" data-id="${product.id}">
      ${product.badge ? `<span class="product-badge ${product.badge === 'SALE' ? 'sale' : ''}">${product.badge}</span>` : ''}
      <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Add to Wishlist">
        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      <div class="product-img-wrap" onclick="openProductModal(${product.id})">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
        <div class="quick-view-overlay">
          <span class="quick-view-btn">Quick View</span>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${starsHTML}</span>
          <span>${product.rating}</span>
          <span class="review-count">(${product.reviews})</span>
        </div>
        <div class="product-pricing">
          <span class="price-current">₱${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="price-old">₱${product.originalPrice.toLocaleString()}</span>` : ''}
          ${product.discount > 0 ? `<span class="price-discount">${product.discount}% OFF</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
            <i class="fa-solid fa-bag-shopping"></i> ADD TO CART
          </button>
          <button class="btn btn-secondary" onclick="openProductModal(${product.id})">
            <i class="fa-regular fa-eye"></i>
          </button>
        </div>
        ${product.stock < 5 ? `<div class="stock-indicator low-stock">Only ${product.stock} left</div>` : ''}
      </div>
    </div>
  `;
}

// ============================================================
// RENDER ALL MAIN PRODUCTS
// ============================================================
function renderProducts(filteredList = products) {
  const grid = document.getElementById('mainProductGrid');
  const countText = document.getElementById('productCountText');
  const noProducts = document.getElementById('noProductsFound');

  if (!grid) return;

  countText.textContent = `${filteredList.length} PRODUCTS`;

  if (filteredList.length === 0) {
    grid.innerHTML = '';
    if (noProducts) noProducts.classList.remove('hidden');
    return;
  }

  if (noProducts) noProducts.classList.add('hidden');
  
  grid.innerHTML = filteredList.map((product, index) => {
    const cardHTML = createProductCardHTML(product);
    return cardHTML.replace('product-card', `product-card" style="animation-delay: ${(index % 8) * 0.05}s`);
  }).join('');
}

// ============================================================
// RENDER BEST SELLERS (8 PRODUCTS)
// ============================================================
function renderBestSellers() {
  const bestSellers = products.filter(p => p.badge === "BEST SELLER").slice(0, 8);
  const grid = document.getElementById('bestSellersGrid');
  if (grid) {
    grid.innerHTML = bestSellers.map((product, index) => {
      const cardHTML = createProductCardHTML(product);
      return cardHTML.replace('product-card', `product-card" style="animation-delay: ${(index % 4) * 0.1}s`);
    }).join('');
  }
}

// ============================================================
// RENDER NEW ARRIVALS (8 PRODUCTS)
// ============================================================
function renderNewArrivals() {
  const newArrivals = products.filter(p => p.badge === "NEW" || p.badge === "POPULAR").slice(0, 8);
  const grid = document.getElementById('newArrivalsGrid');
  if (grid) {
    grid.innerHTML = newArrivals.map((product, index) => {
      const cardHTML = createProductCardHTML(product);
      return cardHTML.replace('product-card', `product-card" style="animation-delay: ${(index % 4) * 0.1}s`);
    }).join('');
  }
}

// ============================================================
// FILTER & SORT ENGINE
// ============================================================
function applyFilters() {
  const searchVal = document.getElementById('globalSearchInput')?.value.toLowerCase().trim() || '';
  filterAndRenderAll(searchVal);
}

function filterAndRenderAll(searchQuery = "") {
  let result = [...products];

  if (searchQuery) {
    result = result.filter(p => 
      p.name.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.ingredients.some(ing => ing.toLowerCase().includes(searchQuery)) ||
      p.skinTypes.some(st => st.toLowerCase().includes(searchQuery))
    );
  }

  const selectedCategoryEl = document.querySelector('input[name="category"]:checked');
  if (selectedCategoryEl && selectedCategoryEl.value !== 'All') {
    result = result.filter(p => p.category === selectedCategoryEl.value);
  }

  const checkedSkinTypes = Array.from(document.querySelectorAll('.skintype-filter:checked')).map(cb => cb.value);
  if (checkedSkinTypes.length > 0) {
    result = result.filter(p => checkedSkinTypes.some(st => p.skinTypes.includes(st)));
  }

  const checkedConcerns = Array.from(document.querySelectorAll('.concern-filter:checked')).map(cb => cb.value);
  if (checkedConcerns.length > 0) {
    result = result.filter(p => checkedConcerns.some(c => p.concerns.includes(c)));
  }

  const selectedPriceEl = document.querySelector('input[name="price"]:checked');
  if (selectedPriceEl) {
    const val = selectedPriceEl.value;
    if (val === 'under500') result = result.filter(p => p.price < 500);
    else if (val === '500-1000') result = result.filter(p => p.price >= 500 && p.price <= 1000);
    else if (val === '1000-1500') result = result.filter(p => p.price >= 1000 && p.price <= 1500);
    else if (val === '1500-2500') result = result.filter(p => p.price >= 1500 && p.price <= 2500);
    else if (val === 'above2500') result = result.filter(p => p.price > 2500);
  }

  const sortValue = document.getElementById('sortSelect')?.value || 'featured';
  if (sortValue === 'price-low') result.sort((a, b) => a.price - b.price);
  else if (sortValue === 'price-high') result.sort((a, b) => b.price - a.price);
  else if (sortValue === 'rating') result.sort((a, b) => b.rating - a.rating);
  else if (sortValue === 'bestselling') result.sort((a, b) => b.reviews - a.reviews);
  else if (sortValue === 'newest') result.sort((a, b) => b.id - a.id);

  renderProducts(result);
}

function handleSortChange() {
  applyFilters();
}

function filterByCategory(categoryName) {
  const radio = document.querySelector(`input[name="category"][value="${categoryName}"]`);
  if (radio) {
    radio.checked = true;
    applyFilters();
    const shopSection = document.getElementById('shop');
    if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function quickSearch(keyword) {
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.value = keyword;
    applyFilters();
    const searchOverlay = document.getElementById('searchOverlay');
    if (searchOverlay) searchOverlay.classList.remove('active');
    const shopSection = document.getElementById('shop');
    if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetAllFilters() {
  document.querySelectorAll('input[type="radio"]').forEach(r => {
    if (r.name === 'category' && r.value === 'All') r.checked = true;
    if (r.name === 'price' && r.value === 'all') r.checked = true;
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) searchInput.value = '';
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'featured';
  renderProducts(products);
}

// ============================================================
// PRODUCT DETAIL MODAL
// ============================================================
function openProductModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const content = document.getElementById('productModalContent');

  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  const starsHTML = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);

  content.innerHTML = `
    <div class="product-modal-grid">
      <div class="modal-gallery-col">
        <div class="modal-gallery-main">
          <img id="mainModalImg" src="${product.images[0]}" alt="${product.name}" />
        </div>
        <div class="modal-thumbnails">
          ${product.images.map((img, idx) => `
            <div class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="switchModalThumb(this, '${img}')">
              <img src="${img}" alt="Thumbnail" />
            </div>
          `).join('')}
        </div>
      </div>
      <div class="modal-info-col">
        <span class="product-category">${product.category}</span>
        <h2>${product.name}</h2>
        <div class="product-rating" style="margin-bottom:1rem">
          <span class="stars" style="color:#F5B301; font-size:1.1rem">${starsHTML}</span>
          <span>${product.rating}</span>
          <span class="review-count">(${product.reviews} reviews)</span>
          <span style="color:#10B981; margin-left:1rem; font-weight:600"><i class="fa-solid fa-check"></i> In Stock</span>
        </div>
        <div class="product-pricing" style="margin-bottom:1rem">
          <span class="price-current" style="font-size:1.8rem">₱${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="price-old" style="font-size:1.1rem">₱${product.originalPrice.toLocaleString()}</span>` : ''}
          ${product.discount > 0 ? `<span class="price-discount" style="font-size:0.9rem">${product.discount}% OFF</span>` : ''}
        </div>
        <p style="font-size:0.95rem; color:var(--color-muted-brown); margin-bottom:1.5rem; line-height:1.6">${product.description}</p>
        
        <div class="modal-section-title">Key Ingredients</div>
        <div class="modal-tag-list">
          ${product.ingredients.map(ing => `<span class="modal-tag">${ing}</span>`).join('')}
        </div>

        <div class="modal-section-title">Benefits</div>
        <div class="modal-tag-list">
          ${product.benefits.map(b => `<span class="modal-tag">${b}</span>`).join('')}
        </div>

        <div class="modal-section-title">How To Use</div>
        <p style="font-size:0.85rem; color:var(--color-dark-brown); margin-bottom:1.5rem; line-height:1.6">${product.howToUse}</p>

        <div style="display:flex; gap:1rem; align-items:center; margin-top:2rem">
          <button class="btn btn-primary" style="flex-grow:1; padding:0.9rem 1.5rem" onclick="addToCart(${product.id}); closeProductModal();">
            <i class="fa-solid fa-bag-shopping"></i> ADD TO CART
          </button>
          <button class="btn btn-dark" style="padding:0.9rem 1.5rem" onclick="buyNow(${product.id})">BUY NOW</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
}

function switchModalThumb(element, imgUrl) {
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  element.classList.add('active');
  document.getElementById('mainModalImg').src = imgUrl;
}

// ============================================================
// SHOPPING CART SYSTEM
// ============================================================
function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your bag.`);
  
  const cartBtn = document.getElementById('cartDrawerTriggerBtn');
  if (cartBtn) {
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 200);
  }
}

function addBundleToCart(bundleName, price) {
  cart.push({
    id: Date.now(),
    name: bundleName,
    price: price,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    quantity: 1
  });
  saveCart();
  updateCartUI();
  document.getElementById('cartDrawer').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
  showToast(`Bundle "${bundleName}" added to your bag.`);
}

function updateCartQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartDrawerCount = document.getElementById('cartDrawerCount');
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalItems;
  if (cartDrawerCount) cartDrawerCount.textContent = totalItems;

  if (cart.length === 0) {
    if (container) {
      container.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--color-muted-brown)">
          <i class="fa-solid fa-bag-shopping" style="font-size:2.5rem; color:var(--color-rose); margin-bottom:1rem; display:block"></i>
          <p>Your beauty bag is currently empty.</p>
          <p style="font-size:0.85rem; margin-top:0.5rem">Start shopping to add your favorites!</p>
        </div>
      `;
    }
    if (subtotalEl) subtotalEl.textContent = '₱0';
    if (totalEl) totalEl.textContent = '₱0';
    return;
  }

  let subtotal = 0;
  if (container) {
    container.innerHTML = cart.map((item, idx) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      return `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="cart-item-price">₱${item.price.toLocaleString()}</div>
            <div class="cart-qty-controls">
              <button class="qty-btn" onclick="updateCartQuantity(${idx}, -1)">−</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${idx}, 1)">+</button>
            </div>
          </div>
          <button class="close-btn remove-item-btn" onclick="removeFromCart(${idx})" style="font-size:1rem">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join('');
  }

  if (subtotalEl) subtotalEl.textContent = `₱${subtotal.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `₱${subtotal.toLocaleString()}`;
}

function saveCart() {
  localStorage.setItem('lumea_cart', JSON.stringify(cart));
}

// ============================================================
// WISHLIST SYSTEM
// ============================================================
function toggleWishlist(productId) {
  const index = wishlist.findIndex(item => item.id === productId);
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed "${product.name}" from wishlist.`);
  } else {
    wishlist.push(product);
    showToast(`Added "${product.name}" to wishlist. ❤️`);
  }

  localStorage.setItem('lumea_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts(products);
}

function updateWishlistUI() {
  const countEl = document.getElementById('wishlistCount');
  const drawerCount = document.getElementById('wishlistDrawerCount');
  const container = document.getElementById('wishlistItemsContainer');

  if (countEl) countEl.textContent = wishlist.length;
  if (drawerCount) drawerCount.textContent = wishlist.length;

  if (wishlist.length === 0) {
    if (container) {
      container.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--color-muted-brown)">
          <i class="fa-regular fa-heart" style="font-size:2.5rem; color:var(--color-rose); margin-bottom:1rem; display:block"></i>
          <p>Your wishlist is empty.</p>
          <p style="font-size:0.85rem; margin-top:0.5rem">Save your favorite products here!</p>
        </div>
      `;
    }
    return;
  }

  if (container) {
    container.innerHTML = wishlist.map(item => `
      <div class="cart-item wishlist-item">
        <div class="cart-item-img">
          <img src="${item.images[0]}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">₱${item.price.toLocaleString()}</div>
          <div class="wishlist-item-actions">
            <button class="btn btn-primary" style="padding:0.3rem 0.8rem; font-size:0.65rem" onclick="addToCart(${item.id}); toggleWishlist(${item.id})">
              <i class="fa-solid fa-bag-shopping"></i> MOVE TO BAG
            </button>
            <button class="btn btn-secondary" style="padding:0.3rem 0.8rem; font-size:0.65rem" onclick="toggleWishlist(${item.id})">
              <i class="fa-solid fa-xmark"></i> REMOVE
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ============================================================
// BUY NOW FUNCTION
// ============================================================
function buyNow(productId) {
  closeProductModal();
  addToCart(productId, 1);
  setTimeout(() => openCheckoutModal(), 300);
}

// ============================================================
// CHECKOUT SYSTEM
// ============================================================
function openCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal >= 1500 ? 0 : 150;

  document.getElementById('checkoutSubtotal').textContent = `₱${subtotal.toLocaleString()}`;
  document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `₱${shipping}`;
  document.getElementById('checkoutTotal').textContent = `₱${(subtotal + shipping).toLocaleString()}`;

  modal.classList.add('active');
}

function handlePlaceOrder(event) {
  event.preventDefault();

  const name = document.getElementById('checkoutName').value;
  const address = document.getElementById('checkoutAddress').value;
  const city = document.getElementById('checkoutCity').value;
  const payment = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Cash on Delivery';
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal >= 1500 ? 0 : 150;
  const total = subtotal + shipping;

  const orderId = `LUMEA-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  document.getElementById('orderSuccessDetails').innerHTML = `
    <p><strong>Order Number:</strong> ${orderId}</p>
    <p><strong>Customer:</strong> ${name}</p>
    <p><strong>Delivery Address:</strong> ${address}, ${city}</p>
    <p><strong>Payment Method:</strong> ${payment}</p>
    <p><strong>Total Amount:</strong> ₱${total.toLocaleString()}</p>
  `;

  document.getElementById('checkoutModal').classList.remove('active');
  document.getElementById('successModal').classList.add('active');

  cart = [];
  saveCart();
  updateCartUI();
}

function closeSuccessModal() {
  document.getElementById('successModal').classList.remove('active');
}

// ============================================================
// BEAUTY QUIZ ENGINE
// ============================================================
function handleQuizSubmit(e) {
  e.preventDefault();
  const skinType = document.querySelector('input[name="quizSkinType"]:checked')?.value;
  const concern = document.querySelector('input[name="quizConcern"]:checked')?.value;

  if (!skinType || !concern) {
    showToast('Please select both your skin type and main concern.');
    return;
  }

  const recommendations = products.filter(p => 
    p.skinTypes.includes(skinType) || p.concerns.includes(concern)
  ).slice(0, 3);

  const resultsBox = document.getElementById('quizResultsBox');
  const grid = document.getElementById('quizRecommendationsGrid');
  const desc = document.getElementById('quizMatchDesc');

  desc.textContent = `✨ Targeted picks formulated for ${skinType} Skin addressing ${concern}:`;
  
  if (grid) {
    grid.innerHTML = recommendations.map((product, index) => {
      const cardHTML = createProductCardHTML(product);
      return cardHTML.replace('product-card', `product-card" style="animation-delay: ${index * 0.1}s`);
    }).join('');
  }
  
  if (resultsBox) resultsBox.classList.remove('hidden');
  if (resultsBox) resultsBox.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// NEWSLETTER FORM
// ============================================================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletterEmailInput');
  if (emailInput && emailInput.value) {
    showToast("Welcome to the Glow Club! ✨ Check your inbox for 10% OFF.");
    emailInput.value = '';
  } else {
    showToast("Please enter your email address.");
  }
}

// ============================================================
// TOAST SYSTEM
// ============================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-sparkles" style="color:#F5B301"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

console.log('✨ LUMÉA BEAUTY — 85+ Products with Real Images Loaded! ✨');
console.log(`📦 ${products.length} products available across ${[...new Set(products.map(p => p.category))].length} categories`);