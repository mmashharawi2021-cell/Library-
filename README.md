# مكتبة مهند — Web UI Reference

مرجع شخصي عربي RTL لعناصر تصميم الويب الأكثر استخدامًا.

## الحالة الحالية
- **112 نموذجًا** موزعة على 10 فئات.
- الفئات الأساسية توسعت مع Buttons وHover Effects وCards وInputs وNavigation.
- قسم **Modals & Popups** أصبح يحتوي **15 نموذجًا** تشمل Toasts وPopovers وTooltips وDrawers وBottom Sheets وغيرها.
- تمت إضافة أنماط حذف وحركة مثل:
  - Trash Morph
  - Hold to Delete
  - Delete to Bin
  - Undo Delete
  - Archive Slide
  - Remove Chip

## إدارة المكتبة
- زر حذف لكل عنصر.
- أنيميشن انتقال العنصر إلى سلة المحذوفات.
- سلة محذوفات محلية مع استعادة.
- حذف نهائي محلي عند الحاجة.
- العناصر المحذوفة تختفي من البحث والفئات والمفضلة النشطة.
- جميع التفضيلات محفوظة عبر LocalStorage.

## المعاينة والمختبر
- Live Preview Loop لجميع العناصر.
- Preview States: Default / Hover / Active / Disabled.
- Playground عام + خصائص إضافية تختلف حسب نوع العنصر.
- نسخ الصيغة مباشرة: HTML / CSS / JS / React / Tailwind.
- حالات Hover / Active / Disabled تدخل في الكود المولّد.
- دعم Responsive للهاتف والكمبيوتر.

## البحث والمجموعات
- بحث عربي/إنجليزي حسب الاسم والفئة والـTags والوصف.
- مجموعات جاهزة:
  - Dashboard UI
  - Forms
  - Navigation
  - Micro-interactions
  - Popups
- دعم مجموعات شخصية محفوظة محليًا.

## التحقق
- `app.js`: Syntax PASS
- `data.js`: Syntax PASS
- جميع العناصر الـ112 اجتازت فحص Schema.
- تم اختبار الحذف والاستعادة، البحث، المجموعات، وتوليد HTML/CSS/React/Tailwind.

المشروع Static ولا يحتاج Build أو Dependencies، ولا يعتمد على خدمات توليد خارجية.
