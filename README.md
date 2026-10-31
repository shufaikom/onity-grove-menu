# Onity Grove by Komikui — Digital Menu

Digital bar menu for **Onity Grove by Komikui**, Yaoundé, Olembe (Camp SIC).

**Live menu:** https://shufaikom.github.io/onity-grove-menu/

Plain HTML, CSS and JavaScript, hosted for free on GitHub Pages. There is no database or build step.

| File | Purpose |
| --- | --- |
| `menu-data.js` | **All menu items and prices.** This is the only file you edit day to day. |
| `index.html`, `styles.css`, `app.js` | Page layout, design and rendering |
| `assets/logo.png` | Original Onity Grove logo |
| `assets/products/` | Optional product photos |
| `qr/` | QR code (PNG for sharing, SVG for printing) |
| `print/table-card.html` | Printable table card (4 per A4 sheet) |
| `tools/make_qr.py` | Regenerates the QR code |

## Updating prices

1. Open `menu-data.js` in a text editor (Notepad, VS Code) or on GitHub (open the file and click the pencil ✏️ icon).
2. Find the item and change its `price`. Write a whole number with no commas: `price: 15000`.
3. Change `lastUpdated` to today's date.
4. Save.
   - **On GitHub:** click *Commit changes*.
   - **On your computer:**
     ```bash
     git add menu-data.js
     git commit -m "Update prices"
     git push
     ```
5. The live menu updates within about 1–2 minutes. The QR code never needs to change.

### Adding an item

Copy an existing line inside the right category and edit it:

```js
{ name: "Hennessy VS", size: "70cl", price: 45000 },
{ name: "Chicken Wings", description: "6 pieces, pepper sauce", price: 3500, photo: "assets/products/wings.jpg" },
```

- `available: false` hides an item for a while, for example when it is sold out.
- Product photos are optional. Put them in `assets/products/`, ideally square JPGs under 150 KB.
- Ranges and "from" prices: `price: [4000, 5000]` shows *4,000 – 5,000 FCFA*; add `from: true` to show *From 200,000 FCFA*.
- `{ heading: "Imported Beers" }` adds a small sub-heading inside a category.
- A category with no items is hidden automatically.
- Beer pictures are drawn by `tools/make_beer_art.py`. To use a real photo, put it in `assets/products/` and change that item's `photo`.

### Approving a table package

Table packages stay in the private drafts file until you approve them. To publish one, move it into the `tables` category in `menu-data.js`:

```js
{ name: "VIP Table", price: 80000,
  includes: ["Johnnie Walker Black 1L or Hennessy VS 1L", "Mixers", "Ice", "Groundnuts", "Table service"] },
```

## Privacy rules

- This repository is **public**, so only approved selling prices belong here.
- Purchase costs, margins, receipts and draft prices are kept in a separate private folder outside this repository. They are never committed.
- `.gitignore` also blocks spreadsheets, CSVs and receipt files as a safety net.
