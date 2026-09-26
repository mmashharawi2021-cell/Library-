# مكتبة مهند — Web UI Reference

مرجع شخصي عربي RTL للمكونات والحركات والمؤثرات القابلة للمعاينة والتجربة والنسخ.

## الحالة الحالية
- **460 عنصرًا**.
- **15 فئة منظمة**.
- **0 duplicate candidates** بعد فحص التشابه.
- **0 عناصر ناقصة Schema**.
- Live Preview + Replay + Hover / Active / Disabled.
- حذف إلى Trash مع Animation + Undo + Restore + Permanent Delete.
- Favorites / Recent / Collections / Usage عبر LocalStorage.
- بحث عربي/إنجليزي يشمل الاسم والفئة والـTags والتقنية والمصدر ونوع الحركة.
- فلاتر New / Loop / Interactive / Most Used / Complexity / Tags.
- Playground عام + خصائص حسب نوع العنصر.
- نسخ HTML / CSS / JS / React / Tailwind.
- إيقاف Animations خارج الـViewport لتقليل استهلاك المعالج.
- `content-visibility` وCSS containment لتحسين عرض المكتبة الكبيرة.

## الفئات
Buttons · Hover Effects · Cards · Inputs & Forms · Navigation · Modals & Popups · Dropdowns & Menus · Loaders & Progress · Tabs & Accordions · Micro-interactions · Sections & Layouts · Text/Image/Background Effects · Charts & Data · Icons & Status · Media & Devices.

## التوسعة الحالية
تمت إضافة:
- Magic UI patterns.
- Motion Primitives patterns.
- shadcn/ui وAnex-style primitives.
- Jitter UI / text / background / chart / icon / device / gallery / loader / transition patterns.
- **244 Jitter preset reinterpretations** ضمن دفعتين كبيرتين، إضافة إلى العناصر المستوحاة سابقًا.
- تنفيذات أصلية وليست نسخًا حرفية من القوالب الخارجية.

## المصادر
موثقة في `sources.js` مع:
`name / url / type / technology / license / extracted / usedBy`.

تم استبعاد الأصول ذات العلامات التجارية وقوالب المجتمع التي قد تكون لها شروط مستقلة، وعدم نسخ أصولها البصرية حرفيًا.

## Schema
`id / name / category / tags / code / complexity / favorite / usage / description / technology / dependency / sourceReference / motionMode / type / addedAt`

## Duplicate Guard
- `validator.js`
- نتيجة الفحص الحالية: **0** عند threshold = 0.82.

## Validation
- `app.js`: PASS
- `data.js`: PASS
- `sources.js`: PASS
- `validator.js`: PASS
- Runtime search/copy/delete/restore: PASS
- Jitter preset copied CSS: PASS
- 460/460 Schema: PASS

## المعاينة الرسمية
https://mmashharawi2021-cell.github.io/Library-/
