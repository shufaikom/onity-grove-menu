(function () {
  "use strict";

  var menu = window.MENU || { categories: [] };
  // Drafts only exist in the private preview (../private/preview.html).
  var drafts = window.MENU_DRAFTS || null;

  var num = function (n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); };
  var fmt = function (price, from) {
    var s = Array.isArray(price) ? num(price[0]) + " – " + num(price[1]) : num(price);
    return (from ? "From " : "") + s + " FCFA";
  };

  var el = function (tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };

  function itemsFor(cat) {
    var list = (cat.items || []).filter(function (i) { return i.available !== false; });
    if (drafts && drafts[cat.id]) {
      list = list.concat(drafts[cat.id].map(function (i) {
        return Object.assign({}, i, { draft: true });
      }));
    }
    return list;
  }

  function draftTag() { return el("span", "tag-draft", "DRAFT"); }

  function renderPackage(item) {
    var card = el("article", "pkg");
    if (item.draft) card.classList.add("is-draft");
    var head = el("div", "pkg-head");
    var name = el("h3", "pkg-name", item.name);
    if (item.draft) name.appendChild(draftTag());
    head.appendChild(name);
    head.appendChild(el("p", "pkg-price", fmt(item.price, item.from)));
    card.appendChild(head);
    var ul = el("ul", "pkg-list");
    (item.includes || []).forEach(function (line) { ul.appendChild(el("li", null, line)); });
    card.appendChild(ul);
    return card;
  }

  function renderItem(item) {
    var row = el("article", "item");
    if (item.draft) row.classList.add("is-draft");
    if (item.photo) {
      var img = el("img", "item-photo");
      img.src = item.photo;
      img.alt = item.name;
      img.loading = "lazy";
      img.decoding = "async";
      row.appendChild(img);
    }
    var body = el("div", "item-body");
    var top = el("div", "item-top");
    var name = el("h3", "item-name", item.name);
    if (item.size) name.appendChild(el("span", "item-size", item.size));
    if (item.draft) name.appendChild(draftTag());
    top.appendChild(name);
    top.appendChild(el("span", "item-dots"));
    top.appendChild(el("span", "item-price", fmt(item.price, item.from)));
    body.appendChild(top);
    if (item.description) body.appendChild(el("p", "item-desc", item.description));
    row.appendChild(body);
    return row;
  }

  var main = document.getElementById("menu");
  var nav = document.getElementById("cat-list");
  var links = [];

  menu.categories.forEach(function (cat) {
    var items = itemsFor(cat);
    // Empty categories (nothing approved yet) are not shown at all.
    if (!items.some(function (i) { return !i.heading; })) return;
    var section = el("section", "cat");
    section.id = cat.id;
    section.appendChild(el("h2", "cat-title", cat.name));
    if (cat.intro) section.appendChild(el("p", "cat-intro", cat.intro));

    if (cat.type === "packages") {
      var grid = el("div", "pkg-grid");
      items.forEach(function (i) { grid.appendChild(renderPackage(i)); });
      section.appendChild(grid);
    } else {
      items.forEach(function (i) {
        section.appendChild(i.heading ? el("h3", "cat-sub", i.heading) : renderItem(i));
      });
    }
    main.appendChild(section);

    var a = el("a", "cat-link", cat.name);
    a.href = "#" + cat.id;
    nav.appendChild(a);
    links.push({ a: a, section: section });
  });

  if (drafts) document.getElementById("draft-banner").hidden = false;
  if (menu.lastUpdated) document.getElementById("updated").textContent = "Menu updated " + menu.lastUpdated;

  // Highlight the category currently on screen and keep its chip visible.
  if ("IntersectionObserver" in window) {
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var hit = links.filter(function (l) { return l.section === e.target; })[0];
        if (!hit || hit === current) return;
        if (current) current.a.classList.remove("active");
        current = hit;
        hit.a.classList.add("active");
        nav.scrollTo({ left: hit.a.offsetLeft - 16, behavior: "smooth" });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) { io.observe(l.section); });
  }
})();
