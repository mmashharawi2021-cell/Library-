# مكتبة مهند — Library Engine 3.0

مرجع شخصي عربي RTL للمكونات والحركات والمؤثرات القابلة للمعاينة والتجربة والنسخ.

## الحالة الحالية
- **971 Component**
- **15 Category**
- **5 Source Packs**
- **0 Duplicate IDs**
- **0 عناصر مفقودة بين Search Index والـPacks**
- **0 عناصر ناقصة من الكتالوج**

## Library Engine 3.0

### Lazy Source Packs
عند فتح الموقع لا يتم تحميل 971 عنصرًا كاملًا.

التحميل الأولي:
- Core: **181**

Lazy Packs:
- Jitter: **374**
- Foundations: **239**
- Motion: **121**
- Origin: **56**

يتم تحميل Pack عند:
- اختياره من Source Pack Filter
- الوصول إليه من البحث
- فتح Component برابط مباشر
- الوصول إلى عنصر محفوظ في Favorites / Recent / Trash
- الضغط على Load داخل Pack Manager
- النزول لنهاية All Packs

### Virtual Rendering
- Grid Batch: **48 عنصرًا**
- العناصر الإضافية تدخل تدريجيًا عند الاقتراب من نهاية الشبكة.
- Animations خارج الـViewport تتوقف.
- CSS content-visibility/containment مستخدم لتقليل كلفة DOM.

### Component Routes
كل Component يمكن فتحه مباشرة:
`#/component/<COMPONENT_ID>`

الرابط يقوم بتحميل Pack المطلوب تلقائيًا إذا لم يكن محملًا.

### Source Pack Manager
Pack Manager يعرض:
- العدد الكلي
- العناصر المحملة حاليًا
- Packs التي ما زالت Lazy
- حالة كل Pack
- تحميل Pack منفرد
- Load All Packs

### Search Engine
- Search Index مستقل عن ملفات الـComponents.
- Web Worker: `catalog/search-worker.js`
- البحث يعمل عبر كل **971 Metadata Record** دون تحميل كل HTML/CSS.
- أول Pack مناسب يمكن تحميله عند الحاجة.

### إضافات Engine 3
- Command Palette: Ctrl/Cmd + K
- Related Components
- Preview Variants
- Performance Dashboard
- Backup Export / Import
- Local Component Pack Import
- PWA + Offline Cache
- Service Worker cache version: **library-engine-3-v2**

## البنية

```
catalog/
  categories.js
  search-index.js
  search-worker.js
  registry.js
  bootstrap.js
  import-pipeline.js
  packs/
    core.js
    jitter.js
    foundations.js
    motion.js
    origin.js
```

## Validation
- app.js: PASS
- engine3.js: PASS
- registry.js: PASS
- bootstrap.js: PASS
- import-pipeline.js: PASS
- search-worker.js: PASS
- service worker: PASS
- Search Index: **971**
- Pack Sum: **971**
- Duplicate IDs: **0**
- Missing in Index: **0**
- Missing in Packs: **0**
- Initial HTML loads only Core pack: PASS

## المعاينة الرسمية
https://mmashharawi2021-cell.github.io/Library-/
