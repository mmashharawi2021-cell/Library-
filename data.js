/* Library Engine 2.0 compatibility shim.
   The live app now loads catalog/categories.js + catalog/packs/* + catalog/registry.js.
   This file intentionally contains no component payload. */
const categories=window.LibraryCategories||[];
const samples=window.LibraryRegistry?.all||[];
window.LibraryLegacyData={version:"2.0.0",total:samples.length};
