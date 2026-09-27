# مكتبة مهند — Library Engine 2.0

مرجع شخصي عربي RTL للمكونات والحركات والمؤثرات، مبني الآن على معمارية Packs قابلة للتوسع.

## الحالة الحالية
- **971 عنصرًا**
- **15 فئة**
- **5 Source Packs**
- **0 duplicate candidates**
- **0 عناصر ناقصة Schema**
- **0 مصادر مفقودة**

## Library Engine 2.0
تم استبدال ملف البيانات الأحادي بمعمارية Modular Catalog:

- `catalog/categories.js`
- `catalog/registry.js`
- `catalog/bootstrap.js`
- `catalog/manifest.json`
- `catalog/packs/core.js`
- `catalog/packs/jitter.js`
- `catalog/packs/foundations.js`
- `catalog/packs/motion.js`
- `catalog/packs/origin.js`

### أحجام الـPacks
- Core: **181**
- Jitter: **374**
- Foundations: **239**
- Motion: **121**
- Origin: **56**

`data.js` أصبح Compatibility Shim صغيرًا فقط، ولم يعد يحمل الـ971 عنصرًا داخله.

## Virtual Rendering
الشبكة لا تبني كل العناصر في DOM مرة واحدة:

- Initial batch: **48 عنصرًا**
- يتم تحميل 48 عنصرًا إضافيًا عند الاقتراب من نهاية الشبكة
- زر Load More يعمل كـfallback
- Animations خارج الـViewport تتوقف
- `content-visibility` وCSS containment مفعّلان

Runtime validation:
- Registry total: **971**
- Initial DOM cards: **48**
- Initial render counter: **48 / 971**

## Source Pack Filter
يمكن فلترة المكتبة مباشرة حسب:
- All Packs
- Core
- Jitter
- Foundations
- Motion
- Origin

البحث، Tags، Top 10، أرقام الفئات، والإلهام العشوائي تحترم الـPack النشط.

## الوظائف
- Live Preview + Replay
- Hover / Active / Disabled
- Playground حسب نوع العنصر
- HTML / CSS / JS / React / Tailwind
- Trash animation + Undo + Restore + Permanent Delete
- Favorites / Recent / Collections / Usage عبر LocalStorage
- بحث عربي/إنجليزي
- New / Loop / Interactive / Most Used / Complexity / Tags
- Source Pack badges لكل Component

## Validation
- app.js: PASS
- catalog files: PASS
- sources.js: PASS
- validator.js: PASS
- Registry assembly: PASS
- Search: PASS
- Copy: PASS
- Trash / Restore: PASS
- Pack filtering: PASS
- Virtual grid: PASS
- Duplicate candidates: **0**
- Schema: **971/971**

## المعاينة الرسمية
https://mmashharawi2021-cell.github.io/Library-/
