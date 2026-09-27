const categories=window.LibraryCategories||[];
const samples=window.LibraryRegistry?.all||[
  ...(window.LibraryPackCore||[]),
  ...(window.LibraryPackJitter||[]),
  ...(window.LibraryPackFoundations||[]),
  ...(window.LibraryPackMotion||[]),
  ...(window.LibraryPackOrigin||[])
];
window.LibraryCatalog={
  version:"2.0.0",
  generatedAt:"2026-09-27",
  total:samples.length,
  categories:categories.length,
  packs:window.LibraryRegistry?.stats().packs||{
    core:(window.LibraryPackCore||[]).length,
    jitter:(window.LibraryPackJitter||[]).length,
    foundations:(window.LibraryPackFoundations||[]).length,
    motion:(window.LibraryPackMotion||[]).length,
    origin:(window.LibraryPackOrigin||[]).length
  }
};
