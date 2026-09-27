/* Library Engine 3.0 legacy compatibility shim.
   The live app uses catalog/search-index.js + lazy Source Packs.
   No component payload is stored here. */
const categories=globalThis.LibraryCategories||[];
const samples=globalThis.LibraryRegistry?.loadedItems||[];
globalThis.LibraryLegacyData={version:"3.0.0",loaded:samples.length,total:globalThis.LibraryRegistry?.stats?.().total||samples.length};
