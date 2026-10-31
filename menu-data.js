/*
 * ONITY GROVE — PUBLIC MENU DATA
 * ------------------------------------------------------------------
 * This is the ONLY file you need to edit to change the menu.
 *
 * RULES
 *  - Everything in this file is PUBLIC (anyone can read it on GitHub).
 *  - Only put APPROVED items and APPROVED selling prices here.
 *  - Never put purchase costs, margins or receipts here.
 *  - Draft items live in the private folder (../private/drafts.js),
 *    which is never uploaded.
 *
 * HOW TO EDIT
 *  - price: a whole number in FCFA, no spaces or commas   (e.g. 15000)
 *           a range is written [4000, 5000]
 *  - from: true          shows "From 200,000 FCFA"
 *  - available: false    hides an item temporarily (sold out)
 *  - photo: optional, e.g. "assets/products/hennessy-vs.jpg"
 *  - size: optional, e.g. "70cl", "1L"
 *  - { heading: "..." }  adds a small sub-heading inside a category
 *  - A category with no items is hidden automatically.
 *
 * After editing: save, then commit & push (see README.md).
 */
window.MENU = {
  lastUpdated: "2026-10-29",

  categories: [
    // Table packages are DRAFT — kept in ../private/drafts.js until approved.
    { id: "tables", name: "Table Packages", type: "packages",
      intro: "Every table includes mixers, ice, groundnuts and table service.", items: [] },

    {
      id: "whisky", name: "Whisky", intro: "Per bottle",
      items: [
        { name: "Chivas Regal 18 YO", size: "1L", price: 250000 },
        { name: "Chivas Regal 12 YO", size: "1L", price: 120000 },
        { name: "Johnnie Walker Blue Label", size: "1L", price: 350000 },
        { name: "Johnnie Walker Black Label", size: "1L", price: 150000 },
        { name: "Johnnie Walker Red Label", size: "1L", price: 85000 },
        { name: "J&B Rare", size: "1L", price: 70000 },
        { name: "Monkey Shoulder", size: "1L", price: 90000 },
        { name: "Glenfiddich 15 YO", size: "70cl", price: 180000 },
        { name: "The Glenlivet Founder's Reserve", size: "1L", price: 140000 },
      ],
    },
    {
      id: "cognac", name: "Cognac", intro: "Per bottle",
      items: [
        { name: "Hennessy VSOP", size: "1L", price: 200000 },
        { name: "Hennessy VS", size: "1L", price: 120000 },
        { name: "Rémy Martin VSOP", size: "1L", price: 220000 },
      ],
    },
    {
      id: "champagne", name: "Champagne & Sparkling", intro: "Per bottle",
      items: [
        { name: "Moët & Chandon Brut", size: "75cl", price: 180000 },
        { name: "Moët & Chandon Nectar Impérial", size: "75cl", price: 150000 },
        { name: "Other Champagne", description: "On request", price: 200000, from: true },
      ],
    },
    {
      id: "vodka", name: "Vodka", intro: "Per bottle",
      items: [
        { name: "Cîroc Vodka", size: "1L", price: 150000 },
      ],
    },
    {
      id: "tequila", name: "Tequila", intro: "Per bottle",
      items: [
        { name: "Milagro Silver", size: "1L", price: 130000 },
        { name: "Other Tequila", description: "On request", price: 130000, from: true },
      ],
    },
    {
      id: "liqueurs", name: "Liqueurs", intro: "Per bottle",
      items: [
        { name: "Baileys Irish Cream", size: "1L", price: 70000 },
        { name: "Other Liqueurs", description: "On request", price: 70000, from: true },
      ],
    },
    {
      id: "beers", name: "Beers",
      items: [
        { heading: "Cameroonian Beers" },
        { name: "33 Export",      price: 3500, photo: "assets/products/beer-33-export.svg" },
        { name: "Castel Beer",    price: 3500, photo: "assets/products/beer-castel.svg" },
        { name: "Mützig",         price: 3500, photo: "assets/products/beer-mutzig.svg" },
        { name: "Beaufort Lager", price: 3500, photo: "assets/products/beer-beaufort-lager.svg" },
        { name: "Beaufort Light", price: 3500, photo: "assets/products/beer-beaufort-light.svg" },
        { name: "Isenbeck",       price: 3500, photo: "assets/products/beer-isenbeck.svg" },
        { name: "Kadji Beer",     price: 3500, photo: "assets/products/beer-kadji.svg" },
        { name: "K44",            price: 3500, photo: "assets/products/beer-k44.svg" },
        { name: "Harp",           price: 3500, photo: "assets/products/beer-harp.svg" },
        { name: "Guinness",       price: 4000, photo: "assets/products/beer-guinness.svg" },
        { heading: "Imported Beers" },
        { name: "Heineken",       price: 4000, photo: "assets/products/beer-heineken.svg" },
        { name: "Other Imported Beer", description: "Ask for today's selection", price: [4000, 5000],
          photo: "assets/products/beer-imported.svg" },
      ],
    },
    {
      id: "soft-drinks", name: "Soft Drinks & Mixers",
      items: [
        { name: "Coca-Cola", price: 2000 },
        { name: "Sprite", price: 2000 },
        { name: "Fanta", price: 2000 },
        { name: "Tonic Water", price: 2000 },
        { name: "Soda Water", price: 2000 },
        { name: "Red Bull", price: 4000 },
        { name: "Fresh Juice", description: "Orange, pineapple, etc.", price: 4000 },
      ],
    },
    {
      id: "cocktails", name: "Cocktails",
      items: [
        { name: "Mojito", price: 7000 },
        { name: "Margarita", price: 7000 },
        { name: "Whisky Sour", price: 7000 },
        { name: "Long Island", price: 8000 },
        { name: "Classic Cocktails", description: "On request", price: [7000, 10000] },
      ],
    },
    {
      id: "shots", name: "Shots", intro: "4cl measure",
      items: [
        { name: "Tequila Shot", price: 5000 },
        { name: "Vodka Shot", price: 5000 },
        { name: "Whisky Shot", price: 5000 },
        { name: "Cognac Shot", price: 6000 },
      ],
    },
    // Food prices are DRAFT — kept in ../private/drafts.js until approved.
    { id: "food", name: "Food & Snacks", items: [] },
  ],
};
