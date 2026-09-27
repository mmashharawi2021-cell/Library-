const categories=globalThis.LibraryCategories||[];
const samples=globalThis.LibraryRegistry?.loadedItems||[];
globalThis.LibraryCatalog={
  version:"3.0.0",
  generatedAt:"2026-09-27",
  total:globalThis.LibraryRegistry?.stats().total||samples.length,
  categories:categories.length,
  packs:globalThis.LibraryRegistry?.stats().packs||{}
};
