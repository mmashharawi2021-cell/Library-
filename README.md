# مكتبة مهند — Web UI Reference

مرجع شخصي عربي RTL للمكونات والحركات والمؤثرات القابلة للمعاينة والتجربة والنسخ.

## الحالة الحالية
- **142 عنصرًا**.
- **12 فئة منظمة**.
- Live Preview + Replay + Hover / Active / Disabled states.
- حذف لأي عنصر مع Animation إلى Trash + Undo + Restore + Permanent delete.
- Favorites / Recent / Collections / Usage عبر LocalStorage.
- بحث عربي/إنجليزي حسب الاسم والفئة والـTags والتقنية والمصدر ونوع الحركة.
- فلاتر: الفئة، Style، Tags، مستوى التعقيد، New، Loop، Interactive، Most Used.
- Playground عام + خصائص تختلف حسب نوع العنصر.
- نسخ HTML / CSS / JS / React / Tailwind.

## الفئات
- Buttons
- Hover Effects
- Cards
- Inputs & Forms
- Navigation
- Modals & Popups
- Dropdowns & Menus
- Loaders & Progress
- Tabs & Accordions
- Micro-interactions
- Sections & Layouts
- Text, Image & Background Effects

## دفعة البحث الحالية
تمت إضافة تنفيذات أصلية مستوحاة من أنماط Motion/UI المفيدة بعد مراجعة Jitter وDEV.to ومصادرها الأصلية، ومنها:
- Split Text Reveal
- Scramble Label
- Elastic Words
- Shimmer Heading
- Aurora Gradient Loop
- Ripple Grid
- Image Mask Reveal
- Parallax Layer Card
- SVG Trace Check
- Stagger / Scroll Reveal
- Split Page Transition
- Cursor Halo
- Hero / Header / Footer / Empty / Success / Error States
- Auto Carousel / Bento Grid
- Skeleton Loader / Success Loader
- Dropzone Upload / Stepper
- Radio Cards / Range Slider
- Drag & Drop Tile
- CSS 3D Cube

## Source Registry
المصادر موثقة في:
- `sources.js`

كل سجل يحتوي على:
- اسم المصدر
- الرابط
- النوع
- التقنية
- الترخيص أو حالة الاستخدام
- الأفكار المستخرجة
- العناصر التي استفادت منه

## Component Schema
كل عنصر يحتوي على:
`id / name / category / tags / code / complexity / favorite / usage / description / technology / dependency / sourceReference / motionMode / type / addedAt`

## Duplicate Guard
- `validator.js`
- فحص الاسم والفئة والـTags ونوع الوظيفة وشكل الكود.
- نتيجة الفحص الحالية: **0 duplicate candidates** عند حد التشابه المعتمد.

## الأداء
- Live animations تتوقف تلقائيًا خارج الـViewport باستخدام IntersectionObserver.
- JavaScript الخاص بالـLive Preview يتجاهل العناصر المتوقفة.
- لم تتم إضافة Three.js أو مكتبات ثقيلة للـ3D الحالي؛ CSS 3D مستخدم عندما يكفي.
- المشروع Static ولا يحتاج Build أو Dependencies لتشغيل النسخة الحالية.

## التحقق
- `app.js`: Syntax PASS
- `data.js`: Syntax PASS
- `sources.js`: Syntax PASS
- `validator.js`: Syntax PASS
- **142/142** عناصر تملك Schema كاملًا.
- Duplicate candidates: **0**.
- Runtime: البحث، الفلاتر، الحذف، الاستعادة، المصادر، وتوليد الأكواد تعمل.

## المعاينة الرسمية
https://mmashharawi2021-cell.github.io/Library-/
