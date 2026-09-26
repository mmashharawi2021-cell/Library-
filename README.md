# مكتبة مهند — Web UI Reference

مرجع شخصي عربي RTL لعناصر تصميم الويب الأكثر استخدامًا.

## الحالة الحالية
- **95 نموذجًا** موزعة على 10 فئات.
- الفئات الخمس الأساسية تحتوي **15 نموذجًا لكل فئة**:
  - Buttons
  - Hover Effects
  - Cards
  - Inputs & Forms
  - Navigation
- كل عنصر يملك Schema ثابتًا:
  `id / name / category / tags / code / complexity / favorite / usage`
- بحث عربي/إنجليزي للكلمات الدلالية مثل:
  `glass / زجاجي / minimal / dark / animated / dashboard / hover`
- فلاتر Style + مستوى التعقيد.
- Playground مباشر يدعم:
  اللون، الخلفية، Radius، Padding، Font Size، Shadow، Glow، Scale، Speed.
- Playground أصبح **Component-aware** خصوصًا للحقول والنماذج.
- HTML وCSS وReact وTailwind تعكس قيم Playground الحالية عند النسخ.
- Favorites وRecent وCollections وUsage محفوظة عبر LocalStorage.
- تحسينات Responsive للـSidebar وDrawer وPreview وCode Panel.

## التحقق
تم تنفيذ:
- فحص Syntax لـ `app.js` و`data.js`.
- فحص Schema لكل العناصر.
- فحص عدد النماذج في الفئات الخمس.
- فحص البحث العربي والإنجليزي.
- فحص مولدات HTML / CSS / React / Tailwind بعد تعديل Playground.

المشروع Static ولا يحتاج Build أو Dependencies.

## 95/95 Live Preview Loop
- جميع عناصر المكتبة الـ95 تدخل الآن نظام معاينة متحركة مستمرة.
- لكل فئة Loop مناسب: Buttons, Cards, Inputs, Navigation, Modals, Menus, Loaders, Tabs, Motion وHover.
- الحركات الخاصة مثل Glow وGradient وOTP وFloating Label وToggle وSparkline وTask Progress محفوظة ولا تُستبدل بحركة عامة.
