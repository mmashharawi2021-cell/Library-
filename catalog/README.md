# Library Engine 2.0 — Catalog Contract

## Pack contract
Each pack is a classic JavaScript file that exports one array on `window`.

Example:
```js
window.LibraryPackExample = [
  {
    id: "EX-001",
    name: "Example",
    category: "cards",
    style: "Minimal",
    tags: ["card","example"],
    complexity: "basic",
    code: { html: "<article>...</article>", css: "", js: "", react: "", tailwind: "" },
    favorite: false,
    usage: 0,
    description: "Reusable example",
    playground: {},
    technology: "HTML + CSS",
    dependency: "None",
    sourceReference: "library-original",
    motionMode: "Interaction",
    type: "card",
    addedAt: "YYYY-MM-DD"
  }
];
```

## Adding a pack
1. Create `catalog/packs/<pack>.js`.
2. Add its script before `catalog/registry.js` in `index.html`.
3. Register it inside `catalog/registry.js`.
4. Add the pack to `catalog/manifest.json`.
5. Run duplicate/schema validation.
6. Confirm initial grid still renders only 48 cards.

## Runtime rules
- Component IDs must be unique.
- Source references must exist in `sources.js`.
- Components render in batches of 48.
- Looped previews outside the viewport are paused.
- Trash/favorites/recent/usage remain stored in LocalStorage.
- External-source code is not redistributed when licensing is restrictive; use original reimplementations instead.

## Current packs
| Pack | Count |
| --- | ---: |
| Core | 181 |
| Jitter | 374 |
| Foundations | 239 |
| Motion | 121 |
| Origin | 56 |
| **Total** | **971** |
