# مكتبة مهند — Library Engine 3.0

مرجع شخصي عربي RTL للمكونات والحركات والمؤثرات القابلة للمعاينة والتجربة والنسخ.

## الحالة الحالية
- **971 Component / Variant**
- **15 Category**
- **5 Source Packs**
- **0 Duplicate IDs**
- **0 عناصر مفقودة بين Search Index والـPacks**
- **0 عناصر ناقصة من الكتالوج**
- **674 Strict Semantic Structural Signatures**
- **969 اسمًا فريدًا** مع حالتي تشابه أسماء فقط وبدون Duplicate IDs

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

### Jitter Quality Upgrade
- تمت ترقية **339/339** من عناصر Jitter المولدة.
- لم تعد تعتمد على 6 قوالب عامة فقط؛ أصبحت موزعة على **31 نوعًا دلاليًا**.
- أمثلة الأنواع: Before/After، Gallery، Card Stack، Mask، 3D Flip، Pixel Grid، Toggle، Floating Menu، Notifications، Progress، Text Trail، Glitch، Rings، Loaders، Stars، Radial/Bar/Counter Charts.
- أضيفت تفاعلات فعلية للـToggle وMenu وProgress وBefore/After وNotification Stack.
- CSS الخاص بهذه العناصر يدخل أيضًا في الكود المنسوخ، وليس في المعاينة فقط.

### Quality Upgrade — Pass 2
- تمت ترقية **339/339** من عناصر Jitter مرة ثانية.
- لكل نوع دلالي أصبح هناك حتى **8 Layout Variants** حقيقية بدل بنية واحدة متكررة.
- Jitter أصبح يمثل **139 بنية DOM** مطبّعة.
- ملاحظة القياس: تم استبدال رقم 707 بمقياس أكثر صرامة لا يحتسب اختلافات classes كتنوع مستقل؛ النتيجة الحالية **674 بنية دلالية حقيقية**.
- الـ8 أشكال تشمل: Clean، Header، Caption، Header+Caption، Side Rail، Status Rail، Metadata، Framed.
- كل هذه الفروقات تدخل في المعاينة وفي CSS المنسوخ أيضًا.

### DEV Components Quality Pass
- تمت ترقية **416/416** عنصرًا من حزم DEV.
- قبل الترقية كانت العناصر موزعة فعليًا على نحو **17 بنية عامة** فقط.
- بعد الترقية: **75 نوعًا دلاليًا** و**286 بنية DOM حقيقية**.
- أضيفت حتى **12 Layout Variants** للمجموعات الأكبر.
- شملت الترقية Accordion، Tabs، Alerts، Skeletons، Cards، Chat، File/User Cards، Breadcrumbs، Pagination، Steps، Sidebar، Dock، Tables، Calendar، KPI، Activity Feed، Carousel، Device Mockups، OTP، File Upload، Select/Combobox، Password، Validation، Hero/Grid/Pricing، Toast/Drawer/Popover، Command/Context Menus، وتأثيرات الخلفية والنص والإضاءة.
- التفاعلات الفعلية تشمل Accordion/Tabs، Switch، Dropdown، Password reveal، Carousel وToast.
- CSS الجديد يدخل في المعاينة وفي الكود المنسوخ.

### Quality Audit
- كل **971** عنصرًا لديه Live HTML Preview.
- **971** HTML payload مختلفة حرفيًا.
- وفق المقياس الصارم الجديد: **674** بنية/توقيعًا دلاليًا حقيقيًا.
- عناصر DEV-derived: **416** variant موزعة على **337** بنية مطبّعة.
- Jitter-generated: **339** variant موزعة على **31** نوعًا دلاليًا و**139** بنية DOM مطبّعة.
- ملفات الـPacks تخزن HTML، بينما CSS / JS / React / Tailwind يتم توليدها وقت المعاينة والنسخ عبر `app.js`.
- لا توجد Schema errors أو عناصر بلا HTML.
- تشابه الأسماء فقط: `MED-004 / JIT-067` و `MED-006 / JIT-046`.

يمكن مشاهدة ملخص الـQuality Audit داخل **Performance Dashboard**، ويتم تحميل ملف التدقيق عند فتح اللوحة فقط دون زيادة الحمل الأولي.

## المعاينة الرسمية
https://mmashharawi2021-cell.github.io/Library-/
