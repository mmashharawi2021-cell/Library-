# مكتبة مهند — Library Engine 3.0

مرجع شخصي عربي RTL للمكونات والحركات والمؤثرات القابلة للمعاينة والتجربة والنسخ.

## الكتالوج
- **971 Component**
- **15 Category**
- **5 Source Packs**
- **0 duplicate candidates**
- **0 missing schema**
- **0 missing source records**

## Library Engine 3.0

### True Lazy Packs
الصفحة لا تحمّل 971 عنصرًا عند البداية.

الحالة الابتدائية:
- Core: **181** عنصرًا محمّلًا.
- Full catalog index: **971** عنصرًا معروفًا للبحث والعدادات.
- Jitter / Foundations / Motion / Origin يتم تحميلها عند الحاجة.
- التصفح في All Packs يحمّل الـPack التالي تلقائيًا عند الوصول للنهاية.

### Packs
- Core: 181
- Jitter: 374
- Foundations: 239
- Motion: 121
- Origin: 56

### Virtual Rendering
- دفعة العرض: **48 Card**
- Infinite / sentinel loading.
- `content-visibility` وCSS containment.
- Live animations تتوقف خارج الـViewport.

### Global Search Worker
- `catalog/search-index.js`: فهرس Metadata خفيف لكل الـ971 عنصرًا.
- `catalog/search-worker.js`: بحث خارج Main Thread.
- البحث يعرف Component غير محمّل ثم يحمّل Pack الخاص به فقط.

### Component Routes
كل Component له URL مستقل:
`#/component/<ID>`

فتح الرابط مباشرة:
1. يقرأ الـID من الفهرس.
2. يحدد الـPack.
3. يحمل Pack المطلوب.
4. يفتح العنصر كصفحة كاملة.

### Pack Manager
- حالة Loaded / Lazy.
- عدد العناصر في كل Pack.
- تحميل Pack منفرد.
- Load All Packs.
- Import Component Pack.

### Component Inspector
داخل Drawer:
- Technology
- Dependency
- Motion Mode
- Type
- Added date
- Source
- License
- Pack
- Engine version

### Variants
Preview variants:
- Default
- Dark
- Glass
- Compact
- Outline

### Related Components
تُحسب من:
- Category
- Tags
- Source
- Pack

وتحمّل Pack الخاص بالعنصر المرتبط عند الحاجة.

### Command Palette
`Ctrl/Cmd + K`
- فتح أي Component من كامل الـ971.
- Pack Manager.
- Performance Dashboard.
- Export Backup.
- Global Random Component.

### Backup
Export / Import:
- Favorites
- Recent
- Collections
- Usage
- Trash
- Purged
- Local imported packs

### Import Pipeline
`catalog/import-pipeline.js`
- Schema validation.
- Normalization.
- Duplicate guard.
- Runtime registration.
- Local persistence.

### Performance Dashboard
يعرض:
- Full catalog size.
- Loaded component data.
- DOM cards.
- Active animation loops.
- Transferred KB.
- JS heap عند توفره.
- Packs المتبقية.
- Worker / Service Worker state.

### PWA / Offline
- `manifest.webmanifest`
- `sw.js`
- Core shell cached offline.
- Lazy-loaded Packs يتم تخزينها عند أول تحميل.

## ملفات Engine 3
- `catalog/categories.js`
- `catalog/search-index.js`
- `catalog/registry.js`
- `catalog/bootstrap.js`
- `catalog/import-pipeline.js`
- `catalog/search-worker.js`
- `catalog/packs/core.js`
- `catalog/packs/jitter.js`
- `catalog/packs/foundations.js`
- `catalog/packs/motion.js`
- `catalog/packs/origin.js`
- `engine3.js`

## Validation
- JavaScript syntax: PASS
- Registry initial load: **181 / 971**
- Lazy Jitter load: PASS
- Direct Origin component load: PASS
- Full catalog counts without payload load: PASS
- Runtime initialization: PASS
- Search / Copy / Trash / Restore from previous engine remain supported.

## المعاينة الرسمية
https://mmashharawi2021-cell.github.io/Library-/
