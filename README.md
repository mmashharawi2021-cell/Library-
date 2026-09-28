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
- Animations متوقفة افتراضيًا وتعمل فقط عند Hover / Press أو داخل معاينة نشطة.
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
- Search Index الكامل مستقل عن ملفات الـComponents ويُحمّل Lazy؛ البداية تستخدم Manifest Index خفيفًا.
- Web Worker: `catalog/search-worker.js` — يبدأ عند أول بحث فقط
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
- Service Worker cache version: **library-engine-3-v12**

## البنية

```
core/
  state.js
  search.js

ui/
  library.js
  cards.js
  preview.js
  actions.js
  editor.js
  code-export.js

fonts/
  fonts.js

styles/
  base.css
  components.css
  engine.css
  fonts.css
  ux.css

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

app.js        # event wiring + startup only
engine3.js    # Engine 3 extensions
styles.css    # compatibility imports only
```

### Architecture Refactor
- `app.js` انخفض من نحو **143 KB** إلى نحو **6 KB** وأصبح مسؤولًا عن ربط الأحداث والتشغيل فقط.
- الحالة والتخزين: `core/state.js`.
- البحث والترتيب والاقتراحات: `core/search.js`.
- البطاقات والـvirtual grid: `ui/cards.js`.
- Hover/Press والمعاينات التفاعلية: `ui/preview.js`.
- المجموعات والحذف والاستعادة: `ui/actions.js`.
- الـDrawer والـPlayground: `ui/editor.js`.
- توليد HTML/CSS/JS/React/Tailwind: `ui/code-export.js`.
- CSS انقسم إلى **5 طبقات** مع الحفاظ على ترتيب الـcascade الأصلي.
- `styles.css` بقي فقط كملف توافق صغير، بينما الموقع يحمل الطبقات مباشرة.

### Performance Pass
- تم استبدال تحميل `catalog/search-index.js` الكامل (**416 KB**) عند البداية بـ `catalog/manifest-index.js` خفيف (**53 KB**) يحفظ فقط `id / pack / category`.
- Search Worker أصبح **Lazy** ولا يبدأ إلا عند أول بحث فعلي.
- metadata الكامل يُحمّل إلى الـmain thread فقط عند فتح **Command Palette** أو **Related Components**.
- `ui/code-export.js` (**89 KB**) أصبح Lazy ولا يدخل إلا عند فتح تبويب الكود أو النسخ.
- مكتبة الخطوط: `fonts/fonts.js` + `styles/fonts.css` أصبحت Lazy ولا تُحمّل إلا عند الضغط على **الخطوط**.
- CSS الخاص بـ Jitter وDEV أصبح مرتبطًا بتحميل الـPack نفسه: `styles/jitter.css` و`styles/dev.css`.
- CSS الأولي يستخدم `styles/engine-core.css` فقط.
- Service Worker لم يعد يسبق بتحميل الملفات الثقيلة الاختيارية.
- حجم ملفات المشروع في مسار التحميل الأولي أصبح نحو **465 KB** غير مضغوط بدل قرابة **986 KB** قبل هذه المرحلة — انخفاض يقارب **53%**.
- الملفات المؤجلة حاليًا تمثل نحو **578 KB** وتُحمّل فقط عند الحاجة.

### Runtime Performance + UX Audit
- أضيف مراقب محلي لـ **FCP / LCP / CLS / INP / TTFB / Long Tasks / DOM Nodes / Grid Render Time** داخل Performance Dashboard.
- Grid Batch أصبح متكيفًا مع الجهاز بدل 48 بطاقة ثابتة:
  - جوال صغير: **12** بطاقة.
  - جوال/تابلت: **12–18** حسب الذاكرة.
  - أجهزة متوسطة: **18–24**.
  - شاشات واسعة: **30**.
- التحميل التلقائي يتوقف عند **36 بطاقة على الجوال** و**60 على سطح المكتب**؛ الاستمرار يبقى متاحًا بزر تحميل المزيد.
- الدفعات الجديدة تُضاف بـ **incremental append** بدل إعادة إنشاء جميع البطاقات السابقة.
- أضيف `content-visibility:auto` للبطاقات لتجنب رسم العناصر البعيدة عن الشاشة.
- أحداث Hover/Press للبطاقات أصبحت **Event Delegation واحدًا** على الـGrid بدل listeners منفصلة لكل بطاقة.
- تفاعلات محتوى الـPreview نفسها لا تُربط إلا عند تشغيل المعاينة فعليًا.
- البحث المحلي أصبح Debounced لمدة **120ms** بدل إعادة الرسم مع كل ضغطة حرف.
- أول Grid Render أصبح بعد أول animation frame للسماح للـHero والهيكل بالظهور أولًا.
- أهداف اللمس على الجوال رُفعت إلى **44px** للعناصر الأساسية.
- الـRuntime monitor لا يرسل أي بيانات؛ القياسات تبقى داخل المتصفح.
- الحجم الأولي الحالي لملفات المشروع يقارب **474 KB** غير مضغوط، مع بقاء الملفات الثقيلة الاختيارية Lazy.

## Validation
- core/state.js: PASS
- core/search.js: PASS
- ui/library.js: PASS
- ui/cards.js: PASS
- ui/preview.js: PASS
- ui/actions.js: PASS
- ui/editor.js: PASS
- ui/code-export.js: PASS
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
- كل **971** عنصرًا لديه HTML Preview قابل للتشغيل عند الطلب.
- **971** HTML payload مختلفة حرفيًا.
- وفق المقياس الصارم الجديد: **674** بنية/توقيعًا دلاليًا حقيقيًا.
- عناصر DEV-derived: **416** variant موزعة على **337** بنية مطبّعة.
- Jitter-generated: **339** variant موزعة على **31** نوعًا دلاليًا و**139** بنية DOM مطبّعة.
- ملفات الـPacks تخزن HTML، بينما CSS / JS / React / Tailwind يتم توليدها وقت المعاينة والنسخ عبر `ui/code-export.js`.
- لا توجد Schema errors أو عناصر بلا HTML.
- تشابه الأسماء فقط: `MED-004 / JIT-067` و `MED-006 / JIT-046`.

يمكن مشاهدة ملخص الـQuality Audit داخل **Performance Dashboard**، ويتم تحميل ملف التدقيق عند فتح اللوحة فقط دون زيادة الحمل الأولي.

## المعاينة الرسمية
https://mmashharawi2021-cell.github.io/Library-/
