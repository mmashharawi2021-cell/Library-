const categories=[
  {
    "id": "buttons",
    "ar": "الأزرار",
    "en": "Buttons",
    "icon": "◉",
    "desc": "أزرار جاهزة للاستخدام اليومي",
    "styles": [
      "All",
      "Minimal",
      "Neon",
      "Outline",
      "Animated",
      "Gradient",
      "Glass",
      "Soft",
      "Danger"
    ]
  },
  {
    "id": "hover",
    "ar": "تأثيرات Hover",
    "en": "Hover Effects",
    "icon": "↗",
    "desc": "حركات واستجابات المؤشر",
    "styles": [
      "All",
      "Glow",
      "Border",
      "Fill",
      "Scale",
      "Reveal",
      "Lift",
      "Tilt"
    ]
  },
  {
    "id": "cards",
    "ar": "البطاقات",
    "en": "Cards",
    "icon": "▣",
    "desc": "بطاقات محتوى ولوحات تحكم",
    "styles": [
      "All",
      "Minimal",
      "Glass",
      "Dashboard",
      "Profile",
      "Product",
      "Pricing",
      "Feature"
    ]
  },
  {
    "id": "inputs",
    "ar": "الحقول والنماذج",
    "en": "Inputs & Forms",
    "icon": "⌨",
    "desc": "حقول ونماذج إدخال عملية",
    "styles": [
      "All",
      "Minimal",
      "Search",
      "Validation",
      "Soft",
      "Floating",
      "Dark",
      "Form",
      "Radio",
      "Slider"
    ]
  },
  {
    "id": "nav",
    "ar": "التنقل",
    "en": "Navigation",
    "icon": "☷",
    "desc": "قوائم تنقل وشريط علوي",
    "styles": [
      "All",
      "Minimal",
      "Pill",
      "Floating",
      "Dark",
      "Glass",
      "Mobile",
      "Breadcrumb"
    ]
  },
  {
    "id": "modals",
    "ar": "النوافذ",
    "en": "Modals & Popups",
    "icon": "▢",
    "desc": "حوارات وتنبيهات منبثقة",
    "styles": [
      "All",
      "Confirm",
      "Alert",
      "Glass",
      "Sheet",
      "Toast",
      "Popover",
      "Tooltip",
      "Drawer",
      "Notice"
    ]
  },
  {
    "id": "menus",
    "ar": "القوائم",
    "en": "Dropdowns & Menus",
    "icon": "⌄",
    "desc": "قوائم واختيارات سياقية",
    "styles": [
      "All",
      "Actions",
      "Context",
      "Select",
      "Dropdown"
    ]
  },
  {
    "id": "loaders",
    "ar": "التحميل والتقدم",
    "en": "Loaders & Progress",
    "icon": "◌",
    "desc": "مؤشرات انتظار وتقدم",
    "styles": [
      "All",
      "Spinner",
      "Progress"
    ]
  },
  {
    "id": "tabs",
    "ar": "التبويبات والأكورديون",
    "en": "Tabs & Accordions",
    "icon": "≡",
    "desc": "تنظيم المحتوى التفاعلي",
    "styles": [
      "All",
      "Tabs",
      "Pill",
      "Underline",
      "Accordion"
    ]
  },
  {
    "id": "motion",
    "ar": "الحركات الدقيقة",
    "en": "Micro-interactions",
    "icon": "✦",
    "desc": "حركات صغيرة تضيف حياة",
    "styles": [
      "All",
      "Scale",
      "Pulse",
      "Rotate",
      "Magnetic",
      "Delete",
      "Undo",
      "Drag"
    ]
  },
  {
    "id": "sections",
    "ar": "الأقسام الجاهزة",
    "en": "Sections & Layouts",
    "icon": "▤",
    "desc": "Hero وHeaders وFooters وحالات صفحات كاملة",
    "styles": [
      "All",
      "Hero",
      "Header",
      "Footer",
      "State",
      "Carousel",
      "Bento"
    ]
  },
  {
    "id": "effects",
    "ar": "مؤثرات النص والصورة",
    "en": "Text, Image & Background Effects",
    "icon": "✺",
    "desc": "Text وBackground وImage وSVG وScroll effects",
    "styles": [
      "All",
      "Text",
      "Background",
      "Image",
      "SVG",
      "Scroll",
      "Cursor",
      "Transition",
      "3D"
    ]
  },
  {
    "id": "data",
    "ar": "البيانات والرسوم",
    "en": "Charts & Data",
    "icon": "◫",
    "desc": "جداول ورسوم ومؤشرات بيانات",
    "styles": [
      "All",
      "Table",
      "Chart",
      "Progress",
      "Timeline",
      "Resizable"
    ]
  },
  {
    "id": "icons",
    "ar": "الأيقونات والحالات",
    "en": "Icons & Status",
    "icon": "◇",
    "desc": "أيقونات متحركة وحالات بصرية",
    "styles": [
      "All",
      "Status",
      "Action",
      "Morph",
      "Rating",
      "Notification"
    ]
  },
  {
    "id": "media",
    "ar": "الوسائط والأجهزة",
    "en": "Media & Devices",
    "icon": "▱",
    "desc": "معارض وصور وأجهزة ومقارنات",
    "styles": [
      "All",
      "Device",
      "Gallery",
      "Carousel",
      "BeforeAfter",
      "Showcase"
    ]
  }
];

const samples=[
  {
    "id": "BTN-001",
    "name": "Solid Core",
    "category": "buttons",
    "style": "Minimal",
    "tags": [
      "button",
      "minimal",
      "clean",
      "dark"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"demo-btn primary\">ابدأ الآن</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر أساسي داكن للمهمات الرئيسية",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-002",
    "name": "Electric Glow",
    "category": "buttons",
    "style": "Neon",
    "tags": [
      "button",
      "glow",
      "neon",
      "blue",
      "hover"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"demo-btn glow\">استكشف المكتبة</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر متوهج مناسب للواجهات التقنية",
    "playground": {
      "bg": "#3559e8",
      "color": "#ffffff",
      "radius": 12,
      "glow": 24
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-003",
    "name": "Clean Outline",
    "category": "buttons",
    "style": "Outline",
    "tags": [
      "button",
      "outline",
      "minimal",
      "clean"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"demo-btn outline\">عرض التفاصيل</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر Outline نظيف للاستخدام الثانوي",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-004",
    "name": "Liquid Fill",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "button",
      "fill",
      "liquid",
      "animated",
      "hover"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"demo-btn liquid\"><span>مرّر المؤشر</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر تعبئة متحركة من الأسفل",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-005",
    "name": "Aurora Gradient",
    "category": "buttons",
    "style": "Gradient",
    "tags": [
      "button",
      "gradient",
      "animated",
      "colorful"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"demo-btn btn-gradient\">إنشاء مشروع</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر Gradient متحرك بلمسة عصرية",
    "playground": {
      "bg": "#5b5cf0",
      "color": "#ffffff",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-006",
    "name": "Soft Elevation",
    "category": "buttons",
    "style": "Soft",
    "tags": [
      "button",
      "soft",
      "shadow",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"demo-btn btn-soft\">حفظ التغييرات</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر فاتح بظل هادئ للواجهات النظيفة",
    "playground": {
      "bg": "#eef2ff",
      "color": "#24305f",
      "radius": 14,
      "shadow": 22
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-007",
    "name": "Icon Slide",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "button",
      "icon",
      "arrow",
      "animated",
      "hover"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"demo-btn btn-icon-slide\"><span>متابعة</span><i>←</i></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر يحرك الأيقونة عند المرور",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-008",
    "name": "Border Draw",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "button",
      "border",
      "draw",
      "animated",
      "hover"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"demo-btn btn-border-draw\">فتح المعاينة</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حد متحرك يلتف حول الزر",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 10
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-009",
    "name": "Glass Action",
    "category": "buttons",
    "style": "Glass",
    "tags": [
      "button",
      "glass",
      "blur",
      "light"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"demo-btn btn-glass\">نسخ الكود</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر زجاجي مناسب للخلفيات الغنية",
    "playground": {
      "bg": "#ffffff",
      "color": "#27304a",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-010",
    "name": "Danger Confirm",
    "category": "buttons",
    "style": "Minimal",
    "tags": [
      "button",
      "danger",
      "red",
      "confirm"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"demo-btn btn-danger\">حذف العنصر</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر إجراء خطِر بلون واضح",
    "playground": {
      "bg": "#e44747",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-001",
    "name": "Glow Lift",
    "category": "hover",
    "style": "Glow",
    "tags": [
      "hover",
      "glow",
      "lift",
      "button"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"demo-btn glow\">Glow Lift</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "توهج مع رفع بسيط عند المرور",
    "playground": {
      "bg": "#3559e8",
      "color": "#ffffff",
      "glow": 28
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-002",
    "name": "Underline Sweep",
    "category": "hover",
    "style": "Fill",
    "tags": [
      "hover",
      "underline",
      "text",
      "sweep"
    ],
    "complexity": "basic",
    "code": {
      "html": "<a class=\"hover-link\" href=\"javascript:void(0)\">عرض التفاصيل</a>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "خط سفلي يتحرك عبر النص",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a"
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-003",
    "name": "Image Zoom",
    "category": "hover",
    "style": "Scale",
    "tags": [
      "hover",
      "image",
      "zoom",
      "card"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"hover-image\"><div class=\"hover-image-art\"></div><b>تكبير الصورة</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تكبير صورة داخل البطاقة دون كسر الإطار",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-004",
    "name": "Tilt Surface",
    "category": "hover",
    "style": "Tilt",
    "tags": [
      "hover",
      "tilt",
      "card",
      "3d"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"hover-tilt\"><span>3D</span><b>Tilt Surface</b><small>حرّك المؤشر</small></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "ميلان بصري خفيف لسطح البطاقة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-005",
    "name": "Orbit Border",
    "category": "hover",
    "style": "Border",
    "tags": [
      "hover",
      "border",
      "orbit",
      "animated"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"hover-orbit\"><span>Border Orbit</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حد مضيء يدور حول العنصر",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-006",
    "name": "Slide Fill",
    "category": "hover",
    "style": "Fill",
    "tags": [
      "hover",
      "fill",
      "slide",
      "button"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"hover-slide\">Slide Fill</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تعبئة أفقية سريعة عند المرور",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff"
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-007",
    "name": "Icon Nudge",
    "category": "hover",
    "style": "Scale",
    "tags": [
      "hover",
      "icon",
      "arrow",
      "micro"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"hover-nudge\"><span>التالي</span><i>←</i></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "إزاحة دقيقة للأيقونة دون مبالغة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-008",
    "name": "Shadow Pop",
    "category": "hover",
    "style": "Lift",
    "tags": [
      "hover",
      "shadow",
      "lift",
      "soft"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"hover-pop\"><b>Shadow Pop</b><small>بطاقة بسيطة</small></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "رفع البطاقة وزيادة الظل",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-009",
    "name": "Caption Reveal",
    "category": "hover",
    "style": "Reveal",
    "tags": [
      "hover",
      "reveal",
      "caption",
      "image"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"hover-reveal\"><div></div><span>عرض المشروع ↗</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "إظهار Caption فوق الصورة عند المرور",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-010",
    "name": "Ring Scale",
    "category": "hover",
    "style": "Scale",
    "tags": [
      "hover",
      "ring",
      "scale",
      "focus"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"hover-ring\"><span>+</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حلقة Focus تتمدد حول العنصر",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-001",
    "name": "Content Card",
    "category": "cards",
    "style": "Minimal",
    "tags": [
      "card",
      "content",
      "minimal",
      "article"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card\"><div class=\"thumb\"></div><h4>عنوان البطاقة</h4><p>وصف مختصر يوضح محتوى البطاقة بشكل واضح.</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة محتوى عامة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-002",
    "name": "Glass Card",
    "category": "cards",
    "style": "Glass",
    "tags": [
      "card",
      "glass",
      "blur",
      "light"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-glass\"><span class=\"badge\">Glass</span><h4>واجهة شفافة</h4><p>بطاقة زجاجية خفيفة للمحتوى البارز.</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة Glassmorphism عملية",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-003",
    "name": "KPI Snapshot",
    "category": "cards",
    "style": "Dashboard",
    "tags": [
      "card",
      "dashboard",
      "kpi",
      "stats"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card card-kpi\"><small>إجمالي الزيارات</small><h4>12,480</h4><p>↑ 18.4% هذا الشهر</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة KPI للداشبورد",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-004",
    "name": "Profile Mini",
    "category": "cards",
    "style": "Profile",
    "tags": [
      "card",
      "profile",
      "user",
      "avatar"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card card-profile\"><div class=\"avatar\">M</div><h4>مهند المشهراوي</h4><p>GIS · UI Reference</p><button>عرض الملف</button></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة ملف شخصي مختصرة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-005",
    "name": "Pricing Plan",
    "category": "cards",
    "style": "Pricing",
    "tags": [
      "card",
      "pricing",
      "plan",
      "cta"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-price\"><small>PRO</small><h4>$19 <span>/mo</span></h4><p>للمشاريع التي تحتاج مكونات أكثر.</p><button>اختيار الخطة</button></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة تسعير مع CTA",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-006",
    "name": "Product Compact",
    "category": "cards",
    "style": "Product",
    "tags": [
      "card",
      "product",
      "shop",
      "price"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-product\"><div class=\"product-art\"></div><div><h4>واجهة تحكم</h4><p>Design Kit</p><b>$24</b></div></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة منتج مختصرة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-007",
    "name": "Task Progress",
    "category": "cards",
    "style": "Dashboard",
    "tags": [
      "card",
      "task",
      "progress",
      "dashboard"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-task\"><div class=\"row\"><b>تحديث الواجهة</b><span>72%</span></div><div class=\"task-progress\"><i></i></div><p>8 من 11 مهمة مكتملة</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة تقدم مهمة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-008",
    "name": "Trend Metric",
    "category": "cards",
    "style": "Dashboard",
    "tags": [
      "card",
      "chart",
      "trend",
      "dashboard"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<article class=\"demo-card card-trend\"><small>Conversion</small><h4>8.7%</h4><svg viewBox=\"0 0 160 42\"><path d=\"M2 35 C25 30 28 18 48 24 S80 30 94 16 S130 22 158 5\"/></svg></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "مؤشر مع Sparkline بسيط",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-009",
    "name": "Alert Summary",
    "category": "cards",
    "style": "Minimal",
    "tags": [
      "card",
      "alert",
      "status",
      "warning"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card card-alert\"><span>!</span><div><h4>يتطلب مراجعة</h4><p>يوجد عنصران بحاجة إلى تدقيق.</p></div></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة تنبيه صغيرة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-010",
    "name": "Feature Spotlight",
    "category": "cards",
    "style": "Feature",
    "tags": [
      "card",
      "feature",
      "icon",
      "marketing"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-feature\"><div class=\"feature-icon\">✦</div><h4>بحث ذكي</h4><p>ابحث بالعربية أو الإنجليزية باستخدام الكلمات الدلالية.</p><a href=\"javascript:void(0)\">اعرف أكثر ←</a></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة Feature للاستخدام التعريفي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-001",
    "name": "Focus Ring",
    "category": "inputs",
    "style": "Minimal",
    "tags": [
      "input",
      "focus",
      "form",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<input class=\"demo-input\" placeholder=\"اكتب هنا...\">",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حقل أساسي مع Focus واضح",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-002",
    "name": "Search Field",
    "category": "inputs",
    "style": "Search",
    "tags": [
      "input",
      "search",
      "icon",
      "field"
    ],
    "complexity": "basic",
    "code": {
      "html": "<label class=\"input-search\"><span>⌕</span><input placeholder=\"ابحث في المكتبة...\"></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حقل بحث بأيقونة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-003",
    "name": "Floating Label",
    "category": "inputs",
    "style": "Floating",
    "tags": [
      "input",
      "floating",
      "label",
      "form"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<label class=\"floating-field\"><input placeholder=\" \" value=\"\"><span>اسم المشروع</span></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Label عائم عند التركيز أو الكتابة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-004",
    "name": "Password Action",
    "category": "inputs",
    "style": "Minimal",
    "tags": [
      "input",
      "password",
      "action",
      "form"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<label class=\"password-field\"><input type=\"password\" value=\"password\"><button type=\"button\">إظهار</button></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حقل كلمة مرور مع إجراء جانبي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-005",
    "name": "Email Valid",
    "category": "inputs",
    "style": "Validation",
    "tags": [
      "input",
      "email",
      "validation",
      "success"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<label class=\"validated-field\"><input value=\"mohanad@example.com\"><span>✓</span></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حالة نجاح داخل الحقل",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-006",
    "name": "Soft Field",
    "category": "inputs",
    "style": "Soft",
    "tags": [
      "input",
      "soft",
      "rounded",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<input class=\"demo-input input-soft\" placeholder=\"اسم المشروع\">",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حقل Soft بحدود شبه مخفية",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-007",
    "name": "Dark Control",
    "category": "inputs",
    "style": "Dark",
    "tags": [
      "input",
      "dark",
      "form",
      "contrast"
    ],
    "complexity": "basic",
    "code": {
      "html": "<input class=\"demo-input input-dark\" placeholder=\"Command...\">",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حقل داكن للواجهات التقنية",
    "playground": {
      "bg": "#171a22",
      "color": "#ffffff"
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-008",
    "name": "Textarea Counter",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "input",
      "textarea",
      "counter",
      "form"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<label class=\"textarea-field\"><textarea placeholder=\"اكتب وصفًا مختصرًا...\"></textarea><span>0 / 180</span></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Textarea مع عداد أحرف",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-009",
    "name": "Select Control",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "input",
      "select",
      "dropdown",
      "form"
    ],
    "complexity": "basic",
    "code": {
      "html": "<label class=\"select-field\"><select><option>Minimal</option><option>Glass</option><option>Dashboard</option></select><span>⌄</span></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Select نظيف للاختيارات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-010",
    "name": "Inline Form",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "input",
      "form",
      "button",
      "newsletter"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<form class=\"inline-form\" onsubmit=\"return false\"><input placeholder=\"البريد الإلكتروني\"><button>إرسال</button></form>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "نموذج إدخال وإجراء في سطر واحد",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-001",
    "name": "Compact Nav",
    "category": "nav",
    "style": "Minimal",
    "tags": [
      "nav",
      "navbar",
      "minimal",
      "header"
    ],
    "complexity": "basic",
    "code": {
      "html": "<nav class=\"demo-nav\"><b>Brand</b><span class=\"active\">الرئيسية</span><span>المكتبة</span><span>حول</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "شريط تنقل صغير",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-002",
    "name": "Pill Navigation",
    "category": "nav",
    "style": "Pill",
    "tags": [
      "nav",
      "pill",
      "rounded",
      "header"
    ],
    "complexity": "basic",
    "code": {
      "html": "<nav class=\"demo-nav nav-pill\"><b>M</b><span>Home</span><span class=\"active\">Library</span><span>Labs</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنقل بحاوية Pill",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-003",
    "name": "Floating Bar",
    "category": "nav",
    "style": "Floating",
    "tags": [
      "nav",
      "floating",
      "bar",
      "shadow"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"demo-nav nav-floating\"><b>UI</b><span>Components</span><span class=\"active\">Top 10</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "شريط عائم بظل واضح",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-004",
    "name": "Dark Navigation",
    "category": "nav",
    "style": "Dark",
    "tags": [
      "nav",
      "dark",
      "contrast",
      "header"
    ],
    "complexity": "basic",
    "code": {
      "html": "<nav class=\"demo-nav nav-dark\"><b>Library</b><span>Browse</span><span class=\"active\">Saved</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنقل داكن",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-005",
    "name": "Glass Header",
    "category": "nav",
    "style": "Glass",
    "tags": [
      "nav",
      "glass",
      "blur",
      "header"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"demo-nav nav-glass\"><b>Studio</b><span>Home</span><span class=\"active\">Library</span><button>ابدأ</button></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "هيدر زجاجي عملي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-006",
    "name": "Breadcrumb Trail",
    "category": "nav",
    "style": "Breadcrumb",
    "tags": [
      "nav",
      "breadcrumb",
      "trail",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<nav class=\"breadcrumbs\"><span>الرئيسية</span><i>←</i><span>المكتبة</span><i>←</i><b>Buttons</b></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Breadcrumb واضح للصفحات المتداخلة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-007",
    "name": "Mobile Bottom",
    "category": "nav",
    "style": "Mobile",
    "tags": [
      "nav",
      "mobile",
      "bottom",
      "icons"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"mobile-bottom\"><span class=\"active\">⌂<small>الرئيسية</small></span><span>▣<small>المكتبة</small></span><span>♡<small>المفضلة</small></span><span>⚙<small>الإعدادات</small></span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Bottom navigation للموبايل",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-008",
    "name": "Segmented Nav",
    "category": "nav",
    "style": "Pill",
    "tags": [
      "nav",
      "tabs",
      "segmented",
      "pill"
    ],
    "complexity": "basic",
    "code": {
      "html": "<nav class=\"seg-nav\"><span class=\"active\">Overview</span><span>Components</span><span>Tokens</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنقل Segmented",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-009",
    "name": "Sidebar Mini",
    "category": "nav",
    "style": "Dark",
    "tags": [
      "nav",
      "sidebar",
      "dark",
      "icons"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"mini-side\"><b>M</b><span class=\"active\">⌂</span><span>▦</span><span>♡</span><span>⚙</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Sidebar مصغر للأدوات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-010",
    "name": "Command Header",
    "category": "nav",
    "style": "Minimal",
    "tags": [
      "nav",
      "command",
      "search",
      "header"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<nav class=\"command-nav\"><b>Library</b><label>⌕ <span>ابحث بسرعة...</span><kbd>/</kbd></label><button>⌘ K</button></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "هيدر يحتوي Command/Search",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-001",
    "name": "Confirm Modal",
    "category": "modals",
    "style": "Confirm",
    "tags": [
      "modal",
      "confirm",
      "dialog"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-modal\"><b>تأكيد الإجراء</b><p>هل تريد تنفيذ هذا الإجراء الآن؟</p><div class=\"actions\"><button>تأكيد</button><button>إلغاء</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "نافذة تأكيد",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-002",
    "name": "Info Dialog",
    "category": "modals",
    "style": "Alert",
    "tags": [
      "modal",
      "info",
      "alert"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-modal\"><b>تم الحفظ</b><p>تمت إضافة العنصر إلى مجموعتك بنجاح.</p><div class=\"actions\"><button>حسنًا</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "نافذة معلومات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-003",
    "name": "Glass Dialog",
    "category": "modals",
    "style": "Glass",
    "tags": [
      "modal",
      "glass",
      "blur"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"demo-modal modal-glass\"><b>Glass Dialog</b><p>نموذج خفيف لواجهات مستقبلية نظيفة.</p></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "نافذة زجاجية",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-004",
    "name": "Action Sheet",
    "category": "modals",
    "style": "Sheet",
    "tags": [
      "modal",
      "sheet",
      "actions"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"demo-modal\"><b>خيارات العنصر</b><p>نسخ الكود أو إضافته للمفضلة.</p><div class=\"actions\"><button>نسخ</button><button>مفضلة</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "قائمة إجراءات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MNU-001",
    "name": "Action Menu",
    "category": "menus",
    "style": "Actions",
    "tags": [
      "menu",
      "actions",
      "dropdown"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-menu\"><div>نسخ الكود</div><div>إضافة للمفضلة</div><div>فتح في التركيز</div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "قائمة إجراءات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "menu",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MNU-002",
    "name": "Context Menu",
    "category": "menus",
    "style": "Context",
    "tags": [
      "menu",
      "context",
      "popup"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-menu\"><div>فتح</div><div>تكرار</div><div class=\"danger-text\">حذف</div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Context menu",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "menu",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MNU-003",
    "name": "Select Menu",
    "category": "menus",
    "style": "Select",
    "tags": [
      "menu",
      "select",
      "options"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-menu\"><div>Minimal ✓</div><div>Glass</div><div>Neon</div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "قائمة اختيار",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "menu",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MNU-004",
    "name": "Code Dropdown",
    "category": "menus",
    "style": "Dropdown",
    "tags": [
      "menu",
      "dropdown",
      "code"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-menu\"><div>HTML / CSS</div><div>React</div><div>Tailwind</div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "قائمة صيغ الكود",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "menu",
    "addedAt": "2026-09-27"
  },
  {
    "id": "LOD-001",
    "name": "Classic Spinner",
    "category": "loaders",
    "style": "Spinner",
    "tags": [
      "loader",
      "spinner",
      "loading"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"loader\"></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Spinner كلاسيكي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "LOD-002",
    "name": "Progress Line",
    "category": "loaders",
    "style": "Progress",
    "tags": [
      "progress",
      "bar",
      "loading"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"progress\"><span></span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "شريط تقدم",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "LOD-003",
    "name": "Soft Spinner",
    "category": "loaders",
    "style": "Spinner",
    "tags": [
      "loader",
      "soft",
      "spinner"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"loader loader-soft\"></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Spinner ناعم",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "LOD-004",
    "name": "Gradient Progress",
    "category": "loaders",
    "style": "Progress",
    "tags": [
      "progress",
      "gradient",
      "bar"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"progress\"><span class=\"progress-gradient\"></span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "شريط تقدم متدرج",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TAB-001",
    "name": "Soft Tabs",
    "category": "tabs",
    "style": "Tabs",
    "tags": [
      "tabs",
      "soft",
      "switch"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-tabs\"><span class=\"active\">HTML</span><span>React</span><span>Tailwind</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Tabs ناعمة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "tabs",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TAB-002",
    "name": "Dark Tabs",
    "category": "tabs",
    "style": "Pill",
    "tags": [
      "tabs",
      "dark",
      "pill"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-tabs tabs-dark\"><span>Preview</span><span class=\"active\">Code</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Tabs داكنة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "tabs",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TAB-003",
    "name": "Underline Tabs",
    "category": "tabs",
    "style": "Underline",
    "tags": [
      "tabs",
      "underline",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"underline-tabs\"><span class=\"active\">Overview</span><span>Details</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Tabs بخط سفلي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "tabs",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TAB-004",
    "name": "Accordion Row",
    "category": "tabs",
    "style": "Accordion",
    "tags": [
      "accordion",
      "row",
      "collapse"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"demo-menu accordion-row\"><div><b>قسم قابل للفتح</b><span>⌄</span></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "صف Accordion",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "tabs",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-001",
    "name": "Morph Hover",
    "category": "motion",
    "style": "Scale",
    "tags": [
      "motion",
      "hover",
      "scale"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"micro\">+</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Morph بسيط",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-002",
    "name": "Pulse Dot",
    "category": "motion",
    "style": "Pulse",
    "tags": [
      "motion",
      "pulse",
      "status"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"pulse-dot\"></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "نقطة حالة نابضة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-003",
    "name": "Rotate Tile",
    "category": "motion",
    "style": "Rotate",
    "tags": [
      "motion",
      "rotate",
      "hover"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"micro micro-blue\">↻</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "دوران عند المرور",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-004",
    "name": "Magnetic Hint",
    "category": "motion",
    "style": "Magnetic",
    "tags": [
      "motion",
      "magnetic",
      "button"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"demo-btn primary\">Magnetic ↗</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "إيحاء زر مغناطيسي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-011",
    "name": "Magnetic Dot",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "button",
      "magnetic",
      "dot",
      "animated",
      "hover"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"demo-btn btn-magnetic\"><span>استكشف</span><i></i></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر مع نقطة تفاعلية تتحرك عند المرور",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 14,
      "glow": 10
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-012",
    "name": "Split Action",
    "category": "buttons",
    "style": "Minimal",
    "tags": [
      "button",
      "split",
      "action",
      "menu",
      "minimal"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"btn-split\"><button>حفظ</button><button aria-label=\"خيارات\">⌄</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر رئيسي مع إجراء ثانوي منفصل",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-013",
    "name": "Loading State",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "button",
      "loading",
      "spinner",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"demo-btn btn-loading\"><i></i><span>جارٍ الحفظ</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر حالة تحميل مع Spinner صغير",
    "playground": {
      "bg": "#3559e8",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-014",
    "name": "Ghost Icon",
    "category": "buttons",
    "style": "Outline",
    "tags": [
      "button",
      "ghost",
      "icon",
      "minimal",
      "outline"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"demo-btn btn-ghost\">↗ <span>فتح</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر Ghost خفيف مع أيقونة",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-015",
    "name": "CTA Arrow",
    "category": "buttons",
    "style": "Gradient",
    "tags": [
      "button",
      "cta",
      "arrow",
      "gradient",
      "hover"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"demo-btn btn-cta\"><span>ابدأ الآن</span><i>←</i></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر CTA بارز بسهم متحرك",
    "playground": {
      "bg": "#5b5cf0",
      "color": "#ffffff",
      "radius": 16,
      "shadow": 22
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-011",
    "name": "Gradient Border",
    "category": "hover",
    "style": "Border",
    "tags": [
      "hover",
      "gradient",
      "border",
      "card",
      "animated"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"hover-gradient-border\"><span>Gradient Border</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حد Gradient يظهر ويتحرك عند المرور",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-012",
    "name": "Blur Reveal",
    "category": "hover",
    "style": "Reveal",
    "tags": [
      "hover",
      "blur",
      "reveal",
      "image",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"hover-blur\"><div></div><span>مشاهدة التفاصيل</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "كشف المحتوى مع إزالة Blur تدريجيًا",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-013",
    "name": "Flip Label",
    "category": "hover",
    "style": "Reveal",
    "tags": [
      "hover",
      "flip",
      "label",
      "text",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"hover-flip\"><span>المزيد</span><b>فتح ↗</b></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تبديل النص بحركة Flip قصيرة",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-014",
    "name": "Shine Sweep",
    "category": "hover",
    "style": "Glow",
    "tags": [
      "hover",
      "shine",
      "sweep",
      "glow",
      "button"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"hover-shine\">Shine Sweep</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "لمعة تمر فوق العنصر عند Hover",
    "playground": {
      "bg": "#3559e8",
      "color": "#ffffff",
      "radius": 12,
      "glow": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "HOV-015",
    "name": "Spotlight Card",
    "category": "hover",
    "style": "Glow",
    "tags": [
      "hover",
      "spotlight",
      "card",
      "dark",
      "glow"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"hover-spotlight\"><b>Spotlight</b><small>واجهة داكنة تفاعلية</small></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة داكنة بتوهج موضعي عند المرور",
    "playground": {
      "bg": "#171a22",
      "color": "#ffffff",
      "radius": 18,
      "glow": 28
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "hover-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-011",
    "name": "Stat Comparison",
    "category": "cards",
    "style": "Dashboard",
    "tags": [
      "card",
      "dashboard",
      "stats",
      "comparison",
      "kpi"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-compare\"><small>هذا الشهر</small><div><h4>24.8K</h4><span>+12.6%</span></div><p>مقابل 22.1K الشهر السابق</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة مقارنة رقمين للداشبورد",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-012",
    "name": "Timeline Event",
    "category": "cards",
    "style": "Minimal",
    "tags": [
      "card",
      "timeline",
      "event",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card card-timeline\"><i></i><div><small>10:30 AM</small><h4>تم نشر التحديث</h4><p>Library v2 جاهزة للمراجعة.</p></div></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة حدث ضمن Timeline",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-013",
    "name": "File Card",
    "category": "cards",
    "style": "Minimal",
    "tags": [
      "card",
      "file",
      "document",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card card-file\"><div class=\"file-icon\">PDF</div><div><h4>design-system.pdf</h4><p>4.8 MB · اليوم</p></div><button>⋯</button></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة ملف قابلة لإعادة الاستخدام",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-014",
    "name": "Team Member",
    "category": "cards",
    "style": "Profile",
    "tags": [
      "card",
      "team",
      "profile",
      "member",
      "avatar"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-member\"><div class=\"avatar\">M</div><div><h4>مهند</h4><p>UI Library Owner</p></div><span>Online</span></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة عضو فريق مع حالة",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-015",
    "name": "Empty State",
    "category": "cards",
    "style": "Feature",
    "tags": [
      "card",
      "empty",
      "state",
      "feature",
      "cta"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"demo-card card-empty\"><div>＋</div><h4>لا توجد عناصر بعد</h4><p>أضف أول عنصر إلى مجموعتك.</p><button>إضافة عنصر</button></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة Empty State مع CTA",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 18
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-011",
    "name": "OTP Group",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "input",
      "otp",
      "code",
      "form",
      "verification"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"otp-group\"><input maxlength=\"1\" value=\"4\"><input maxlength=\"1\" value=\"8\"><input maxlength=\"1\"><input maxlength=\"1\"></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "مجموعة حقول OTP للتحقق",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 10
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-012",
    "name": "Toggle Control",
    "category": "inputs",
    "style": "Soft",
    "tags": [
      "input",
      "toggle",
      "switch",
      "settings",
      "soft"
    ],
    "complexity": "basic",
    "code": {
      "html": "<label class=\"toggle-control\"><input type=\"checkbox\" checked><span></span><b>تفعيل الإشعارات</b></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Toggle بسيط للإعدادات",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-013",
    "name": "Date Field",
    "category": "inputs",
    "style": "Minimal",
    "tags": [
      "input",
      "date",
      "calendar",
      "form",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<label class=\"date-field\"><span>التاريخ</span><input type=\"date\" value=\"2026-09-26\"></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حقل تاريخ مرتب بLabel",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-014",
    "name": "Tag Input",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "input",
      "tags",
      "chips",
      "form",
      "search"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<label class=\"tag-field\"><span>glass ×</span><span>dark ×</span><input placeholder=\"أضف Tag\"></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حقل Tags مع Chips داخلية",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-015",
    "name": "Checkbox Group",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "input",
      "checkbox",
      "group",
      "form",
      "filter"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"check-group\"><label><input type=\"checkbox\" checked> Minimal</label><label><input type=\"checkbox\"> Glass</label><label><input type=\"checkbox\" checked> Animated</label></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "مجموعة Checkboxes للفلاتر",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-011",
    "name": "Mega Nav Mini",
    "category": "nav",
    "style": "Minimal",
    "tags": [
      "nav",
      "mega",
      "header",
      "menu",
      "minimal"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<nav class=\"mega-nav\"><b>Library</b><span>Components</span><span>Patterns</span><span>Resources</span><button>ابدأ</button></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "هيدر قريب من Mega Menu بتركيب مضغوط",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-012",
    "name": "Dock Navigation",
    "category": "nav",
    "style": "Floating",
    "tags": [
      "nav",
      "dock",
      "floating",
      "icons",
      "desktop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"dock-nav\"><span>⌂</span><span class=\"active\">▦</span><span>⌕</span><span>♡</span><span>⚙</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Dock عائم للأدوات السريعة",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 18,
      "shadow": 26
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-013",
    "name": "Step Navigation",
    "category": "nav",
    "style": "Minimal",
    "tags": [
      "nav",
      "steps",
      "stepper",
      "progress",
      "form"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"step-nav\"><span class=\"done\">1<small>بيانات</small></span><i></i><span class=\"active\">2<small>مراجعة</small></span><i></i><span>3<small>إنهاء</small></span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Stepper للتنقل بين مراحل العملية",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-014",
    "name": "Pagination Bar",
    "category": "nav",
    "style": "Pill",
    "tags": [
      "nav",
      "pagination",
      "pages",
      "pill",
      "table"
    ],
    "complexity": "basic",
    "code": {
      "html": "<nav class=\"pagination-bar\"><button>‹</button><button>1</button><button class=\"active\">2</button><button>3</button><button>›</button></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Pagination صغيرة وواضحة",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-015",
    "name": "Command Breadcrumb",
    "category": "nav",
    "style": "Breadcrumb",
    "tags": [
      "nav",
      "breadcrumb",
      "command",
      "search",
      "header"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"command-breadcrumb\"><span>Library</span><i>/</i><b>Buttons</b><kbd>⌘ K</kbd></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Breadcrumb مع اختصار Command",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-005",
    "name": "Success Toast",
    "category": "modals",
    "style": "Toast",
    "tags": [
      "popup",
      "toast",
      "success",
      "notification",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"ui-toast success\"><span>✓</span><div><b>تم الحفظ</b><small>تم تحديث العنصر بنجاح.</small></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Toast نجاح خفيف يظهر ويختفي",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-006",
    "name": "Error Toast",
    "category": "modals",
    "style": "Toast",
    "tags": [
      "popup",
      "toast",
      "error",
      "danger",
      "notification"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"ui-toast error\"><span>!</span><div><b>تعذر التنفيذ</b><small>تحقق من البيانات وحاول مجددًا.</small></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Toast خطأ واضح",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-007",
    "name": "Action Popover",
    "category": "modals",
    "style": "Popover",
    "tags": [
      "popup",
      "popover",
      "actions",
      "menu",
      "floating"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"ui-popover\"><small>إجراءات سريعة</small><button>نسخ الرابط</button><button>إضافة للمفضلة</button><button class=\"danger-text\">حذف</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Popover لإجراءات عنصر",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 14,
      "shadow": 24
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-008",
    "name": "Help Tooltip",
    "category": "modals",
    "style": "Tooltip",
    "tags": [
      "popup",
      "tooltip",
      "help",
      "hover",
      "hint"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"tooltip-demo\"><button>?</button><span>هذا الخيار يغير شكل المعاينة فقط.</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Tooltip توضيحي",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 10
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-009",
    "name": "Notification Popup",
    "category": "modals",
    "style": "Notice",
    "tags": [
      "popup",
      "notification",
      "bell",
      "notice",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"notify-popup\"><div class=\"notify-icon\">●</div><div><b>تحديث جديد</b><p>تمت إضافة 5 مكونات للمكتبة.</p></div><button>×</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Popup إشعار مختصر",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16,
      "shadow": 26
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-010",
    "name": "Cookie Notice",
    "category": "modals",
    "style": "Notice",
    "tags": [
      "popup",
      "cookie",
      "notice",
      "consent",
      "banner"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"cookie-popup\"><div><b>إعدادات محلية</b><p>يتم حفظ تفضيلات المكتبة على جهازك فقط.</p></div><div><button>موافق</button><button>لاحقًا</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Notice موافقة/تنبيه",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-011",
    "name": "Command Palette",
    "category": "modals",
    "style": "Popover",
    "tags": [
      "popup",
      "command",
      "search",
      "palette",
      "keyboard"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"command-popup\"><label>⌕ <input placeholder=\"ابحث عن أمر...\"><kbd>ESC</kbd></label><div><span>فتح المفضلة</span><kbd>F</kbd></div><div><span>عنصر عشوائي</span><kbd>R</kbd></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Command Palette مصغرة",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16,
      "shadow": 30
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-012",
    "name": "Side Drawer",
    "category": "modals",
    "style": "Drawer",
    "tags": [
      "popup",
      "drawer",
      "side",
      "panel",
      "navigation"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"mini-drawer\"><header><b>تفاصيل العنصر</b><button>×</button></header><p>لوحة جانبية لمحتوى إضافي دون مغادرة الصفحة.</p><button class=\"drawer-action\">متابعة</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Drawer جانبي مصغر",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 16,
      "shadow": 28
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-013",
    "name": "Delete Confirm",
    "category": "modals",
    "style": "Confirm",
    "tags": [
      "popup",
      "delete",
      "trash",
      "confirm",
      "danger",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"delete-confirm\"><div class=\"trash-illustration\">⌫</div><b>حذف العنصر؟</b><p>سيتم نقله إلى سلة المحذوفات ويمكنك استعادته لاحقًا.</p><div><button class=\"danger-btn\">نقل للسلة</button><button>إلغاء</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تأكيد حذف مع فكرة سلة المحذوفات",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 18
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-014",
    "name": "Bottom Sheet",
    "category": "modals",
    "style": "Sheet",
    "tags": [
      "popup",
      "bottom",
      "sheet",
      "mobile",
      "actions"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"bottom-sheet-demo\"><i></i><b>خيارات المشاركة</b><div><button>نسخ</button><button>حفظ</button><button>إغلاق</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Bottom Sheet للموبايل",
    "playground": {
      "bg": "#ffffff",
      "color": "#11131a",
      "radius": 20
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-015",
    "name": "Update Banner",
    "category": "modals",
    "style": "Notice",
    "tags": [
      "popup",
      "banner",
      "update",
      "notice",
      "inline"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"update-banner\"><span>✦</span><div><b>نسخة جديدة</b><small>تم تحديث المكتبة الآن.</small></div><button>عرض</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Banner تحديث خفيف",
    "playground": {
      "bg": "#11131a",
      "color": "#ffffff",
      "radius": 14
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "popup",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-016",
    "name": "Trash Morph",
    "category": "buttons",
    "style": "Danger",
    "tags": [
      "button",
      "delete",
      "trash",
      "danger",
      "animated"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"delete-morph-btn\"><span>حذف</span><i><b></b></i></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر حذف يتحول بصريًا إلى سلة",
    "playground": {
      "bg": "#c94747",
      "color": "#ffffff",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "BTN-017",
    "name": "Hold to Delete",
    "category": "buttons",
    "style": "Danger",
    "tags": [
      "button",
      "delete",
      "hold",
      "progress",
      "danger"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"hold-delete-btn\"><span>اضغط للحذف</span><i></i></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر حذف مع شريط تقدم بصري",
    "playground": {
      "bg": "#ffffff",
      "color": "#b43c3c",
      "radius": 12
    },
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "button",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-005",
    "name": "Delete to Bin",
    "category": "motion",
    "style": "Delete",
    "tags": [
      "motion",
      "delete",
      "trash",
      "bin",
      "animated"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"trash-drop-demo\"><div class=\"trash-item\">CARD</div><div class=\"mini-bin\"><i></i><b></b></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "عنصر يطير إلى سلة الحذف في Loop",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-006",
    "name": "Undo Delete",
    "category": "motion",
    "style": "Undo",
    "tags": [
      "motion",
      "delete",
      "undo",
      "snackbar",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"undo-delete-demo\"><div class=\"undo-item\">عنصر محفوظ</div><div class=\"undo-bar\"><span>تم الحذف</span><button>تراجع</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حذف مع Snackbar وتراجع",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-007",
    "name": "Archive Slide",
    "category": "motion",
    "style": "Delete",
    "tags": [
      "motion",
      "archive",
      "slide",
      "remove",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"archive-demo\"><div class=\"archive-item\">اسحب للأرشفة</div><div class=\"archive-bg\">أرشفة ←</div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "عنصر ينزلق إلى الأرشيف",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-008",
    "name": "Remove Chip",
    "category": "motion",
    "style": "Delete",
    "tags": [
      "motion",
      "remove",
      "chip",
      "delete",
      "micro"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"remove-chip-demo\"><span>Glass</span><button>×</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Chip يختفي بحركة حذف قصيرة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Loop",
    "type": "micro-interaction",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TXT-001",
    "name": "Split Text Reveal",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "reveal",
      "split",
      "typography",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"fx-text split-reveal\"><span>واجهات</span><span>تتحرك</span><span>بذكاء</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Reveal متتابع للكلمات بحركة قصيرة قابلة للـLoop",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-text",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TXT-002",
    "name": "Scramble Label",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "scramble",
      "glitch",
      "label",
      "animated"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"fx-text scramble-label\" data-text=\"LIBRARY\">LIBRARY</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Scramble بصري خفيف دون مكتبة خارجية",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "jitter-text",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TXT-003",
    "name": "Elastic Words",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "stretch",
      "elastic",
      "words",
      "motion"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"fx-text elastic-words\"><span>Motion</span><span>Design</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تمدد مرن للكلمات مستوحى من motion typography",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-text",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TXT-004",
    "name": "Shimmer Heading",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "shimmer",
      "gradient",
      "heading",
      "loop"
    ],
    "complexity": "basic",
    "code": {
      "html": "<h3 class=\"shimmer-heading\">واجهة أكثر وضوحًا</h3>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Shimmer خفيف لعناوين الواجهة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-reui-2025",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "FXB-001",
    "name": "Aurora Gradient Loop",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "gradient",
      "aurora",
      "loop",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"aurora-bg\"><span></span><b>Gradient Loop</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "خلفية Gradient متحركة خفيفة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-ui",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "FXB-002",
    "name": "Ripple Grid",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "grid",
      "ripple",
      "dots",
      "loop"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"ripple-grid\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Grid من النقاط بنبض متتابع",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-ui",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "IMG-001",
    "name": "Mask Slide Reveal",
    "category": "effects",
    "style": "Image",
    "tags": [
      "image",
      "mask",
      "reveal",
      "clip-path",
      "transition"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"mask-image\"><div class=\"mask-art\"></div><span>Mask Reveal</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "كشف صورة باستخدام clip-path وتنفيذ أصلي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-gsap-mask",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "IMG-002",
    "name": "Parallax Layer Card",
    "category": "effects",
    "style": "Image",
    "tags": [
      "image",
      "parallax",
      "layers",
      "depth",
      "hover"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"parallax-image\"><i></i><b></b><span>Depth</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "طبقات Parallax خفيفة بالـCSS فقط",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-gsap-mask",
    "motionMode": "Interaction",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SVG-001",
    "name": "Trace Check Icon",
    "category": "effects",
    "style": "SVG",
    "tags": [
      "svg",
      "trace",
      "icon",
      "stroke",
      "success"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<svg class=\"trace-check\" viewBox=\"0 0 80 80\" aria-label=\"Success\"><circle cx=\"40\" cy=\"40\" r=\"30\"/><path d=\"M25 41 L35 51 L56 29\"/></svg>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "رسم Stroke تدريجي لأيقونة نجاح",
    "playground": {},
    "technology": "SVG + CSS",
    "dependency": "None",
    "sourceReference": "anime-official",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "FXS-001",
    "name": "Stagger Reveal Stack",
    "category": "effects",
    "style": "Scroll",
    "tags": [
      "scroll",
      "stagger",
      "reveal",
      "cards",
      "motion"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"stagger-stack\"><span>01</span><span>02</span><span>03</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Stagger reveal بسيط يعمل عند ظهور العنصر",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-official",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "FXS-002",
    "name": "Split Page Transition",
    "category": "effects",
    "style": "Transition",
    "tags": [
      "page",
      "transition",
      "split",
      "clip",
      "entry",
      "exit"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"split-transition\"><i></i><i></i><b>PAGE</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "محاكاة Page Transition بصفحتين تنفتحان",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-motion-guide-2026",
    "motionMode": "Loop",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CUR-001",
    "name": "Cursor Halo",
    "category": "effects",
    "style": "Cursor",
    "tags": [
      "cursor",
      "halo",
      "pointer",
      "hover",
      "micro"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"cursor-halo\"><span></span><b>حرّك المؤشر</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "هالة تتفاعل مع المؤشر دون مكتبات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-001",
    "name": "Split Reveal Hero",
    "category": "sections",
    "style": "Hero",
    "tags": [
      "hero",
      "landing",
      "split",
      "reveal",
      "cta"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<section class=\"mini-hero\"><div><small>UI REFERENCE</small><h3>ابنِ أسرع.<br>اختر أفضل.</h3><p>مكونات جاهزة قابلة للتجربة والنسخ.</p><button>استكشف</button></div><aside><i></i><b></b></aside></section>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Hero صغير بReveal متدرج وخلفية تفاعلية",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-ui",
    "motionMode": "Loop",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-002",
    "name": "Frosted Header",
    "category": "sections",
    "style": "Header",
    "tags": [
      "header",
      "glass",
      "navigation",
      "search",
      "responsive"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<header class=\"section-header\"><b>Library</b><nav><span>العناصر</span><span>التأثيرات</span></nav><button>⌕</button></header>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Header زجاجي مختصر ومتجاوب",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "reui-official",
    "motionMode": "Interaction",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-003",
    "name": "Compact Product Footer",
    "category": "sections",
    "style": "Footer",
    "tags": [
      "footer",
      "links",
      "compact",
      "product",
      "responsive"
    ],
    "complexity": "basic",
    "code": {
      "html": "<footer class=\"section-footer\"><b>Library</b><div><span>Components</span><span>Effects</span><span>Sources</span></div><small>© 2026</small></footer>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Footer خفيف للمواقع والأدوات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-004",
    "name": "Empty Search State",
    "category": "sections",
    "style": "State",
    "tags": [
      "empty",
      "state",
      "search",
      "zero",
      "feedback"
    ],
    "complexity": "basic",
    "code": {
      "html": "<section class=\"state-panel empty-panel\"><div>⌕</div><h3>لا توجد نتائج</h3><p>جرّب كلمة أقصر أو Tag مختلف.</p><button>مسح البحث</button></section>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Empty State جاهز لنتائج البحث",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "reui-official",
    "motionMode": "Interaction",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-005",
    "name": "Success State",
    "category": "sections",
    "style": "State",
    "tags": [
      "success",
      "state",
      "done",
      "feedback",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<section class=\"state-panel success-panel\"><div>✓</div><h3>تم بنجاح</h3><p>اكتملت العملية بدون أخطاء.</p><button>متابعة</button></section>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Success State مع حركة بسيطة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-ui",
    "motionMode": "Loop",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-006",
    "name": "Error State",
    "category": "sections",
    "style": "State",
    "tags": [
      "error",
      "state",
      "retry",
      "feedback",
      "warning"
    ],
    "complexity": "basic",
    "code": {
      "html": "<section class=\"state-panel error-panel\"><div>!</div><h3>حدث خطأ</h3><p>تعذر إكمال الطلب. يمكنك المحاولة مرة أخرى.</p><button>إعادة المحاولة</button></section>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Error State واضح وقابل لإعادة الاستخدام",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CAR-001",
    "name": "Auto Snap Carousel",
    "category": "sections",
    "style": "Carousel",
    "tags": [
      "carousel",
      "slider",
      "cards",
      "auto",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"mini-carousel\"><div class=\"carousel-track\"><article>A</article><article>B</article><article>C</article></div><span>● ○ ○</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Carousel صغير بLoop تلقائي دون مكتبة خارجية",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-ui",
    "motionMode": "Loop",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-007",
    "name": "Bento Feature Grid",
    "category": "sections",
    "style": "Bento",
    "tags": [
      "bento",
      "features",
      "grid",
      "dashboard",
      "responsive"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<section class=\"bento-grid\"><article><b>112+</b><span>Elements</span></article><article><b>LIVE</b><span>Preview</span></article><article class=\"wide\"><b>Copy-ready code</b><span>HTML · React · Tailwind</span></article></section>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Bento Grid بسيط للخصائص والإحصاءات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "reui-official",
    "motionMode": "Interaction",
    "type": "section",
    "addedAt": "2026-09-27"
  },
  {
    "id": "LOD-005",
    "name": "Skeleton Shimmer",
    "category": "loaders",
    "style": "Progress",
    "tags": [
      "skeleton",
      "loader",
      "shimmer",
      "content",
      "placeholder"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"skeleton-card\"><i></i><span></span><span></span><span></span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Skeleton Loader خفيف للمحتوى",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-reui-2025",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "LOD-006",
    "name": "Success Spinner",
    "category": "loaders",
    "style": "Spinner",
    "tags": [
      "loader",
      "spinner",
      "success",
      "complete",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"success-loader\"><i></i><b>✓</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Spinner يتحول بصريًا إلى نجاح",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-ui",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-016",
    "name": "Dropzone Upload",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "input",
      "upload",
      "dropzone",
      "file",
      "progress"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<label class=\"dropzone\"><input type=\"file\"><div>⇧</div><b>اسحب الملف هنا</b><small>أو اضغط للاختيار</small></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Dropzone قابل للنقر ويدعم حالة رفع",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "dev-reui-2025",
    "motionMode": "Interaction",
    "type": "form-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-016",
    "name": "Stepper Flow",
    "category": "nav",
    "style": "Minimal",
    "tags": [
      "nav",
      "stepper",
      "steps",
      "flow",
      "progress"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"flow-stepper\"><span class=\"done\">1<b>بيانات</b></span><i></i><span class=\"active\">2<b>مراجعة</b></span><i></i><span>3<b>إنهاء</b></span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Stepper مرتب لتدفقات النماذج",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "reui-official",
    "motionMode": "Interaction",
    "type": "navigation",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-016",
    "name": "Status Badge Card",
    "category": "cards",
    "style": "Dashboard",
    "tags": [
      "card",
      "badge",
      "status",
      "dashboard",
      "label"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card badge-card\"><div><span class=\"status-badge\">Active</span><small>Service</small></div><h4>واجهة النظام</h4><p>الحالة مستقرة وتعمل.</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة Dashboard مع Badge حالة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-reui-2025",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-017",
    "name": "Avatar Group",
    "category": "cards",
    "style": "Profile",
    "tags": [
      "card",
      "avatar",
      "group",
      "team",
      "profile"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"demo-card avatar-group-card\"><div class=\"avatar-stack\"><i>M</i><i>A</i><i>S</i><i>+4</i></div><h4>فريق المشروع</h4><p>7 أعضاء نشطين</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Avatar Group مضغوط للمشاريع والفرق",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-reui-2025",
    "motionMode": "Interaction",
    "type": "card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-017",
    "name": "Radio Cards",
    "category": "inputs",
    "style": "Radio",
    "tags": [
      "input",
      "radio",
      "cards",
      "choice",
      "form"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"radio-cards\"><label><input type=\"radio\" name=\"plan\" checked><span><b>Basic</b><small>خفيف وسريع</small></span></label><label><input type=\"radio\" name=\"plan\"><span><b>Pro</b><small>خيارات أكثر</small></span></label></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Radio buttons بشكل Cards سهلة للمس",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "reui-official",
    "motionMode": "Interaction",
    "type": "radio-group",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-018",
    "name": "Range Slider",
    "category": "inputs",
    "style": "Slider",
    "tags": [
      "input",
      "slider",
      "range",
      "control",
      "form"
    ],
    "complexity": "basic",
    "code": {
      "html": "<label class=\"range-control\"><span>Intensity <b>62%</b></span><input type=\"range\" min=\"0\" max=\"100\" value=\"62\"></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Range Slider واضح مع قيمة ظاهرة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "range-slider",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOT-009",
    "name": "Drag Drop Tile",
    "category": "motion",
    "style": "Drag",
    "tags": [
      "motion",
      "drag",
      "drop",
      "interaction",
      "tile"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"drag-stage\"><button class=\"drag-tile\" type=\"button\">DRAG</button><div class=\"drop-zone\">DROP</div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "عنصر قابل للسحب داخل مساحة معاينة",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "library-original",
    "motionMode": "Interaction",
    "type": "drag-drop",
    "addedAt": "2026-09-27"
  },
  {
    "id": "FX3-001",
    "name": "CSS 3D Cube",
    "category": "effects",
    "style": "3D",
    "tags": [
      "3d",
      "css",
      "cube",
      "rotate",
      "perspective"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"css3d-scene\"><div class=\"css3d-cube\"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "مكعب 3D خفيف باستخدام CSS فقط دون WebGL",
    "playground": {},
    "technology": "HTML + CSS 3D",
    "dependency": "None",
    "sourceReference": "three-official",
    "motionMode": "Loop",
    "type": "3d-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-001",
    "name": "Infinite Marquee",
    "category": "effects",
    "style": "Scroll",
    "tags": [
      "marquee",
      "loop",
      "logos",
      "text",
      "scroll"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"magic-marquee\"><div><span>Design</span><span>Motion</span><span>UI</span><span>Code</span><span>Design</span><span>Motion</span></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Marquee أفقي مستمر",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-002",
    "name": "Animated List Feed",
    "category": "motion",
    "style": "Scale",
    "tags": [
      "animated-list",
      "feed",
      "items",
      "stagger",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"magic-list\"><article><i>01</i><span>تم حفظ العنصر</span></article><article><i>02</i><span>تمت إضافة بطاقة</span></article><article><i>03</i><span>تم تحديث المكتبة</span></article></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "قائمة أحداث متحركة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-003",
    "name": "Border Beam",
    "category": "effects",
    "style": "Background",
    "tags": [
      "border",
      "beam",
      "glow",
      "loop",
      "frame"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"border-beam\"><b>Border Beam</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "شعاع ضوئي يدور حول الحد",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-004",
    "name": "Shimmer CTA",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "button",
      "shimmer",
      "cta",
      "shine",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"shimmer-cta\">ابدأ الآن</button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "زر CTA بلمعة مستمرة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-005",
    "name": "Number Ticker",
    "category": "data",
    "style": "Progress",
    "tags": [
      "number",
      "ticker",
      "counter",
      "stats",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"number-ticker\"><b>12,480</b><span>+18.4%</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "عداد رقمي بصري متحرك",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-006",
    "name": "Magnify Dock",
    "category": "nav",
    "style": "Floating",
    "tags": [
      "dock",
      "navigation",
      "magnify",
      "icons",
      "hover"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<nav class=\"magnify-dock\"><button>⌂</button><button>▦</button><button>⌕</button><button>♡</button><button>⚙</button></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Dock بتكبير العناصر عند المرور",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Interaction",
    "type": "dock",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-007",
    "name": "Particle Field",
    "category": "effects",
    "style": "Background",
    "tags": [
      "particles",
      "background",
      "dots",
      "ambient",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"particle-field\"><i></i><i></i><i></i><i></i><i></i><i></i><b>Particles</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "خلفية جسيمات خفيفة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-008",
    "name": "Meteor Shower",
    "category": "effects",
    "style": "Background",
    "tags": [
      "meteors",
      "background",
      "streaks",
      "ambient",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"meteor-field\"><i></i><i></i><i></i><i></i><b>Meteors</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "خطوط شهب متكررة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-009",
    "name": "Concentric Ripple",
    "category": "effects",
    "style": "Background",
    "tags": [
      "ripple",
      "rings",
      "pulse",
      "background",
      "loop"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"concentric-ripple\"><i></i><i></i><i></i><b>Ripple</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "حلقات Ripple متتابعة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-010",
    "name": "Dot Matrix Pattern",
    "category": "effects",
    "style": "Background",
    "tags": [
      "dots",
      "pattern",
      "matrix",
      "background",
      "minimal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"dot-pattern\"><b>Dot Pattern</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "خلفية نقاط منظمة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Interaction",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-011",
    "name": "Perspective Grid",
    "category": "effects",
    "style": "Background",
    "tags": [
      "grid",
      "pattern",
      "perspective",
      "background",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"perspective-grid\"><b>Grid Pattern</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "شبكة منظور متحركة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-012",
    "name": "Typing Headline",
    "category": "effects",
    "style": "Text",
    "tags": [
      "typing",
      "text",
      "cursor",
      "headline",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"typing-headline\"><span>واجهة أسرع</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Typing animation مع Cursor",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-013",
    "name": "Blur Fade Reveal",
    "category": "effects",
    "style": "Text",
    "tags": [
      "blur",
      "fade",
      "reveal",
      "text",
      "loop"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"blur-fade-text\">تفاصيل تظهر بسلاسة</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Reveal من Blur إلى وضوح",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-014",
    "name": "Word Rotate",
    "category": "effects",
    "style": "Text",
    "tags": [
      "words",
      "rotate",
      "text",
      "loop",
      "headline"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"word-rotate\"><span>سريع</span><span>نظيف</span><span>مرن</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تدوير كلمات داخل نفس المساحة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-015",
    "name": "Hyper Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "hyper",
      "scramble",
      "text",
      "interactive",
      "glitch"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"hyper-text\">INTERFACE</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تبديل أحرف بصري سريع",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-016",
    "name": "Shine Border Card",
    "category": "cards",
    "style": "Glass",
    "tags": [
      "card",
      "shine",
      "border",
      "glow",
      "feature"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<article class=\"shine-border-card\"><small>FEATURE</small><h4>واجهة قابلة للتخصيص</h4><p>تعديل سريع مع معاينة مباشرة.</p></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "بطاقة بحد لامع",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MAG-017",
    "name": "Sparkle Heading",
    "category": "effects",
    "style": "Text",
    "tags": [
      "sparkles",
      "heading",
      "text",
      "glow",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"sparkle-heading\"><i>✦</i><b>واجهة مميزة</b><i>✦</i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "عنوان مع Sparkles متحركة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "magicui-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-001",
    "name": "Morphing Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "morph",
      "motion",
      "loop",
      "words"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"morphing-text\"><span>Build</span><span>Design</span><span>Ship</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Morph بين كلمات متعددة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-002",
    "name": "Text Loop",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "loop",
      "vertical",
      "motion",
      "words"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"text-loop\"><span>Minimal</span><span>Glass</span><span>Motion</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Loop رأسي للنص",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-003",
    "name": "Scale Dialog",
    "category": "modals",
    "style": "Glass",
    "tags": [
      "dialog",
      "scale",
      "overlay",
      "motion",
      "popup"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"scale-dialog\"><small>PREVIEW</small><h4>نافذة متحركة</h4><p>فتح وإغلاق بحركة Scale هادئة.</p><button>إغلاق</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Dialog بحركة Scale",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-004",
    "name": "Sliding Tabs",
    "category": "tabs",
    "style": "Tabs",
    "tags": [
      "tabs",
      "indicator",
      "slide",
      "motion",
      "navigation"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"sliding-tabs\"><span class=\"active\">Overview</span><span>Code</span><span>Usage</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Tabs بمؤشر منزلق",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-005",
    "name": "Cursor Spotlight",
    "category": "effects",
    "style": "Cursor",
    "tags": [
      "cursor",
      "spotlight",
      "pointer",
      "motion",
      "interactive"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"cursor-spotlight\"><i></i><b>Spotlight</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Spotlight يتبع المؤشر",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Interaction",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-006",
    "name": "Elastic Dock",
    "category": "nav",
    "style": "Floating",
    "tags": [
      "dock",
      "elastic",
      "navigation",
      "motion",
      "hover"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<nav class=\"elastic-dock\"><button>⌂</button><button>▣</button><button>✦</button><button>⚙</button></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Dock مرن عند Hover",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Interaction",
    "type": "dock",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-007",
    "name": "Snap Carousel",
    "category": "media",
    "style": "Carousel",
    "tags": [
      "carousel",
      "snap",
      "media",
      "cards",
      "motion"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"snap-carousel\"><article>01</article><article>02</article><article>03</article></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Carousel بSnap بصري",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Interaction",
    "type": "carousel",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-008",
    "name": "Spring Popover",
    "category": "modals",
    "style": "Popover",
    "tags": [
      "popover",
      "spring",
      "motion",
      "overlay",
      "menu"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"spring-popover\"><b>خيارات</b><span>نسخ</span><span>مشاركة</span><span>حفظ</span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Popover بحركة Spring",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-009",
    "name": "Expandable Toolbar",
    "category": "nav",
    "style": "Floating",
    "tags": [
      "toolbar",
      "expand",
      "actions",
      "motion",
      "floating"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<nav class=\"expand-toolbar\"><button>＋</button><span>نسخ</span><span>حفظ</span><span>مشاركة</span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Toolbar يتوسع تدريجيًا",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MPR-010",
    "name": "Spring Accordion",
    "category": "tabs",
    "style": "Accordion",
    "tags": [
      "accordion",
      "spring",
      "expand",
      "motion",
      "content"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"spring-accordion\"><button>تفاصيل المكوّن <span>⌄</span></button><p>محتوى إضافي يظهر بحركة Spring.</p></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Accordion بحركة مرنة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "motion-primitives-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-019",
    "name": "Number Stepper",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "number",
      "input",
      "stepper",
      "form",
      "control"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"number-stepper\"><button>−</button><input value=\"3\" inputmode=\"numeric\"><button>＋</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Number input مع أزرار زيادة ونقصان",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Interaction",
    "type": "number-input",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-020",
    "name": "Search Combobox",
    "category": "inputs",
    "style": "Search",
    "tags": [
      "combobox",
      "search",
      "select",
      "options",
      "form"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"search-combobox\"><label>⌕<input placeholder=\"ابحث...\"></label><div><span>Minimal</span><span>Glass</span><span>Motion</span></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Combobox قابل للبحث",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "combobox",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-021",
    "name": "Date Range",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "date",
      "range",
      "calendar",
      "form",
      "picker"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"date-range\"><input type=\"date\"><span>←</span><input type=\"date\"></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Date range picker مختصر",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "date-range",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-022",
    "name": "Form Field Error",
    "category": "inputs",
    "style": "Validation",
    "tags": [
      "form",
      "field",
      "error",
      "validation",
      "label"
    ],
    "complexity": "basic",
    "code": {
      "html": "<label class=\"form-field-error\"><b>البريد الإلكتروني</b><input value=\"name@\"><small>أدخل بريدًا صالحًا.</small></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Form field بحالة خطأ واضحة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Interaction",
    "type": "form-field",
    "addedAt": "2026-09-27"
  },
  {
    "id": "INP-023",
    "name": "Checkbox Tile",
    "category": "inputs",
    "style": "Form",
    "tags": [
      "checkbox",
      "tile",
      "form",
      "choice",
      "accessible"
    ],
    "complexity": "basic",
    "code": {
      "html": "<label class=\"checkbox-tile\"><input type=\"checkbox\" checked><span>تفعيل المعاينة الحية</span></label>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Checkbox كبير مناسب للمس",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "checkbox",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MNU-005",
    "name": "Menubar",
    "category": "menus",
    "style": "Actions",
    "tags": [
      "menubar",
      "menu",
      "desktop",
      "actions",
      "navigation"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"menubar\"><button>ملف</button><button>تعديل</button><button>عرض</button><button>مساعدة</button></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Menubar مكتبي واضح",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "menubar",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MNU-006",
    "name": "Command Menu",
    "category": "menus",
    "style": "Actions",
    "tags": [
      "command",
      "menu",
      "search",
      "keyboard",
      "actions"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"command-menu\"><label>⌕<input placeholder=\"اكتب أمرًا...\"><kbd>ESC</kbd></label><span>فتح المفضلة <kbd>F</kbd></span><span>عنصر عشوائي <kbd>R</kbd></span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Command menu مع اختصارات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "command",
    "addedAt": "2026-09-27"
  },
  {
    "id": "NAV-017",
    "name": "Collapsible Sidebar",
    "category": "nav",
    "style": "Dark",
    "tags": [
      "sidebar",
      "collapsible",
      "navigation",
      "desktop",
      "responsive"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<nav class=\"collapsible-side\"><b>M</b><span>⌂ <i>الرئيسية</i></span><span>▣ <i>المكتبة</i></span><span>⚙ <i>الإعدادات</i></span></nav>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Sidebar قابلة للانكماش",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "sidebar",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TAB-005",
    "name": "Collapsible Panel",
    "category": "tabs",
    "style": "Accordion",
    "tags": [
      "collapsible",
      "panel",
      "accordion",
      "content",
      "toggle"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"collapsible-panel\"><button>خيارات متقدمة <span>＋</span></button><div>محتوى مخفي قابل للعرض.</div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Collapsible content panel",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "collapsible",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TAB-006",
    "name": "Toggle Group",
    "category": "tabs",
    "style": "Pill",
    "tags": [
      "toggle",
      "group",
      "segmented",
      "options",
      "tabs"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"toggle-group\"><button class=\"active\">Grid</button><button>List</button><button>Compact</button></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Toggle group لعرض متعدد",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "toggle-group",
    "addedAt": "2026-09-27"
  },
  {
    "id": "TAB-007",
    "name": "Resizable Split",
    "category": "data",
    "style": "Resizable",
    "tags": [
      "resizable",
      "panels",
      "split",
      "layout",
      "data"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"resizable-split\"><section>Preview</section><i></i><section>Code</section></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "لوحتان مع فاصل Resize بصري",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "resizable",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-016",
    "name": "Alert Dialog",
    "category": "modals",
    "style": "Alert",
    "tags": [
      "alert",
      "dialog",
      "confirm",
      "danger",
      "modal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"alert-dialog\"><h4>تأكيد الإجراء</h4><p>هذا الإجراء يحتاج موافقة قبل التنفيذ.</p><div><button>إلغاء</button><button>متابعة</button></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Alert dialog واضحة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-017",
    "name": "Hover Card",
    "category": "modals",
    "style": "Popover",
    "tags": [
      "hover-card",
      "preview",
      "popover",
      "profile",
      "overlay"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"hover-card\"><b>UI Component</b><p>معاينة معلومات إضافية عند المرور.</p><small>12 variants</small></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Hover card للمعلومات السريعة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "hover-card",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MOD-018",
    "name": "Toast Stack",
    "category": "modals",
    "style": "Toast",
    "tags": [
      "toast",
      "stack",
      "notification",
      "feedback",
      "sonner"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"toast-stack\"><article>تم الحفظ ✓</article><article>تمت المزامنة ✓</article><article>تم النسخ ✓</article></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Toast notifications متراكبة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-008",
    "name": "Container Stack",
    "category": "sections",
    "style": "State",
    "tags": [
      "container",
      "stack",
      "layout",
      "spacing",
      "responsive"
    ],
    "complexity": "basic",
    "code": {
      "html": "<section class=\"container-stack\"><header>Header</header><main>Content</main><footer>Footer</footer></section>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Container/Stack layout أساسي",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Interaction",
    "type": "layout",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-009",
    "name": "Responsive Grid",
    "category": "sections",
    "style": "Bento",
    "tags": [
      "grid",
      "layout",
      "responsive",
      "cards",
      "container"
    ],
    "complexity": "basic",
    "code": {
      "html": "<section class=\"responsive-grid\"><article>01</article><article>02</article><article>03</article><article>04</article></section>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Grid متجاوب قابل لإعادة الاستخدام",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Interaction",
    "type": "grid",
    "addedAt": "2026-09-27"
  },
  {
    "id": "SEC-010",
    "name": "Divider Label",
    "category": "sections",
    "style": "State",
    "tags": [
      "divider",
      "separator",
      "label",
      "layout",
      "content"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"divider-label\"><i></i><span>أو تابع باستخدام</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Divider مع Label في المنتصف",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Interaction",
    "type": "separator",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-019",
    "name": "Banner Strip",
    "category": "cards",
    "style": "Feature",
    "tags": [
      "banner",
      "card",
      "announcement",
      "cta",
      "notice"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"banner-strip\"><div><b>تحديث جديد</b><span>نسخة محسنة من المكتبة متاحة.</span></div><button>عرض</button></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Banner إعلان صغير",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CRD-020",
    "name": "Tag Cloud",
    "category": "cards",
    "style": "Content",
    "tags": [
      "tag",
      "cloud",
      "chips",
      "content",
      "filters"
    ],
    "complexity": "basic",
    "code": {
      "html": "<article class=\"tag-cloud\"><span>glass</span><span>motion</span><span>minimal</span><span>dashboard</span><span>hover</span></article>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "مجموعة Tags قابلة للاستخدام",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "DAT-001",
    "name": "Compact Data Table",
    "category": "data",
    "style": "Table",
    "tags": [
      "table",
      "data",
      "rows",
      "dashboard",
      "sortable"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"data-table\"><div class=\"thead\"><b>العنصر</b><b>الحالة</b><b>الاستخدام</b></div><div><span>Button</span><span>Active</span><span>18×</span></div><div><span>Card</span><span>Draft</span><span>7×</span></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Data table مضغوطة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "shadcn-official",
    "motionMode": "Interaction",
    "type": "data-table",
    "addedAt": "2026-09-27"
  },
  {
    "id": "DAT-002",
    "name": "Timeline Feed",
    "category": "data",
    "style": "Timeline",
    "tags": [
      "timeline",
      "events",
      "data",
      "feed",
      "history"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"timeline-feed\"><article><i></i><b>10:30</b><span>تم الحفظ</span></article><article><i></i><b>11:10</b><span>تم النشر</span></article><article><i></i><b>12:00</b><span>تمت المراجعة</span></article></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Timeline للأحداث",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "dev-anex-ui",
    "motionMode": "Interaction",
    "type": "timeline",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-001",
    "name": "Animated Donut",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "donut",
      "progress",
      "data",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"donut-chart\"><i></i><b>72%</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Donut chart متحرك",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-002",
    "name": "Stacked Donut",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "donut",
      "stacked",
      "segments",
      "data"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"stacked-donut\"><i></i><b>3</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Donut متعدد المقاطع",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-003",
    "name": "Line Chart",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "line",
      "trend",
      "svg",
      "data"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<svg class=\"line-chart\" viewBox=\"0 0 220 100\"><polyline points=\"4,80 38,62 70,68 108,38 145,48 180,20 216,30\"/></svg>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Line chart متحرك",
    "playground": {},
    "technology": "SVG + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-004",
    "name": "Multi Line Chart",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "line",
      "multiple",
      "trend",
      "data"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<svg class=\"multi-line-chart\" viewBox=\"0 0 220 100\"><polyline points=\"4,75 45,55 80,62 125,35 170,44 216,20\"/><polyline points=\"4,45 45,66 80,40 125,58 170,32 216,46\"/></svg>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Multiple line chart",
    "playground": {},
    "technology": "SVG + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-005",
    "name": "Animated Bar Chart",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "bar",
      "metrics",
      "data",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"bar-chart\"><i style=\"--h:48%\"></i><i style=\"--h:72%\"></i><i style=\"--h:58%\"></i><i style=\"--h:88%\"></i><i style=\"--h:66%\"></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Bar chart بارتفاعات متحركة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-006",
    "name": "Stacked Bars",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "bar",
      "stacked",
      "segments",
      "data"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"stacked-bars\"><i><b></b><span></span></i><i><b></b><span></span></i><i><b></b><span></span></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Stacked bar chart",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-007",
    "name": "Progress Ring",
    "category": "data",
    "style": "Progress",
    "tags": [
      "progress",
      "ring",
      "counter",
      "data",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"progress-ring\"><b>84%</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Progress ring متحرك",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-008",
    "name": "Progress Pie",
    "category": "data",
    "style": "Progress",
    "tags": [
      "progress",
      "pie",
      "chart",
      "data",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"progress-pie\"><b>61</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Pie progress بسيط",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-009",
    "name": "Grid Metrics",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "grid",
      "metrics",
      "blocks",
      "data"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"grid-metrics\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Grid chart بخلايا متغيرة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "CHT-010",
    "name": "Horizontal Metrics",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "horizontal",
      "bar",
      "metrics",
      "data"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"horizontal-metrics\"><span><b style=\"--w:82%\"></b></span><span><b style=\"--w:61%\"></b></span><span><b style=\"--w:44%\"></b></span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Horizontal bar metrics",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-001",
    "name": "Check Trace",
    "category": "icons",
    "style": "Status",
    "tags": [
      "icon",
      "check",
      "success",
      "trace",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<svg class=\"icon-check-trace\" viewBox=\"0 0 64 64\"><circle cx=\"32\" cy=\"32\" r=\"24\"/><path d=\"M20 33l8 8 17-19\"/></svg>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Check icon بخط مرسوم",
    "playground": {},
    "technology": "SVG + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-002",
    "name": "Close Pop",
    "category": "icons",
    "style": "Action",
    "tags": [
      "icon",
      "close",
      "x",
      "pop",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"icon-close-pop\">×</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Close icon بحركة Pop",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-003",
    "name": "Heart Pulse",
    "category": "icons",
    "style": "Rating",
    "tags": [
      "icon",
      "heart",
      "like",
      "pulse",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"icon-heart\">♥</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Heart icon نابض",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-004",
    "name": "Arrow Loop",
    "category": "icons",
    "style": "Action",
    "tags": [
      "icon",
      "arrow",
      "loop",
      "direction",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"icon-arrow-loop\">→</div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Arrow يتحرك باستمرار",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-005",
    "name": "Star Rating Pop",
    "category": "icons",
    "style": "Rating",
    "tags": [
      "stars",
      "rating",
      "pop",
      "feedback",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"star-rating\"><i>★</i><i>★</i><i>★</i><i>★</i><i>★</i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "5 Stars بPop متتابع",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-006",
    "name": "Weather Morph",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "weather",
      "morph",
      "sun",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"weather-morph\"><i></i><span></span></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Weather icon يتحول بين حالتين",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-007",
    "name": "Bouncy Icon Row",
    "category": "icons",
    "style": "Action",
    "tags": [
      "icons",
      "bounce",
      "row",
      "micro",
      "animated"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"bouncy-icons\"><i>⌂</i><i>♡</i><i>✦</i><i>⚙</i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "صف أيقونات Bounce",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "ICO-008",
    "name": "Notification Bell",
    "category": "icons",
    "style": "Notification",
    "tags": [
      "icon",
      "bell",
      "notification",
      "badge",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"notification-bell\">♢<b>3</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Bell notification بحركة خفيفة",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-001",
    "name": "Phone Mockup",
    "category": "media",
    "style": "Device",
    "tags": [
      "device",
      "phone",
      "mockup",
      "screen",
      "mobile"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"phone-mockup\"><div><header></header><main></main><footer></footer></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Phone mockup عام بدون علامة تجارية",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "device",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-002",
    "name": "Tablet Mockup",
    "category": "media",
    "style": "Device",
    "tags": [
      "device",
      "tablet",
      "mockup",
      "screen",
      "responsive"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"tablet-mockup\"><div><aside></aside><main></main></div></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Tablet mockup عام",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "device",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-003",
    "name": "Web Screens Carousel",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "web",
      "screens",
      "carousel",
      "showcase",
      "loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"web-screens\"><article>A</article><article>B</article><article>C</article></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Web screens تتحرك أفقيًا",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-004",
    "name": "Mobile Gallery Grid",
    "category": "media",
    "style": "Gallery",
    "tags": [
      "mobile",
      "gallery",
      "grid",
      "images",
      "showcase"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"mobile-gallery\"><i></i><i></i><i></i><i></i><i></i><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Gallery grid للموبايل",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-005",
    "name": "Photo Stack",
    "category": "media",
    "style": "Gallery",
    "tags": [
      "photo",
      "gallery",
      "stack",
      "cards",
      "animated"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"photo-stack\"><i></i><i></i><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Stack صور متحرك",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-006",
    "name": "Before After Slider",
    "category": "media",
    "style": "BeforeAfter",
    "tags": [
      "before",
      "after",
      "slider",
      "image",
      "compare"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"before-after\"><div class=\"before\"></div><div class=\"after\"></div><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "مقارنة قبل/بعد قابلة للسحب بصريًا",
    "playground": {},
    "technology": "HTML + CSS + JavaScript",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "before-after",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-007",
    "name": "Parallax Image Carousel",
    "category": "media",
    "style": "Carousel",
    "tags": [
      "image",
      "carousel",
      "parallax",
      "gallery",
      "loop"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"parallax-carousel\"><article></article><article></article><article></article></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Image carousel بطبقات Parallax",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "component",
    "addedAt": "2026-09-27"
  },
  {
    "id": "MED-008",
    "name": "Browser Showcase",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "browser",
      "website",
      "showcase",
      "mockup",
      "screen"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"browser-showcase\"><header><i></i><i></i><i></i></header><main></main></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "Browser mockup للواجهات",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "showcase",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-001",
    "name": "Snappy Text Stretch",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "snappy-text-stretch"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-0 jp-snappy-text-stretch\"><span>Snappy Text Stretch</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Snappy Text Stretch في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-002",
    "name": "Blur Swirl",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "blur-swirl"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-1 jp-blur-swirl\"><i></i><i></i><b>Blur Swirl</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blur Swirl في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-003",
    "name": "Morph Inflating Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "morph-inflating-text"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-2 jp-morph-inflating-text\"><span>Morph Inflating Text</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Morph Inflating Text في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-004",
    "name": "Dithering Effect",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "dithering-effect"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-3 jp-dithering-effect\"><i></i><i></i><b>Dithering Effect</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Dithering Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-005",
    "name": "Blurry Text Spin",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "blurry-text-spin"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-4 jp-blurry-text-spin\"><span>Blurry Text Spin</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blurry Text Spin في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-006",
    "name": "Image Stretch Transition",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "image-stretch-transition"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-5 jp-image-stretch-transition\"><i></i><i></i><i></i><b>Image Stretch Transition</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Image Stretch Transition في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-007",
    "name": "Card Flip",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "card-flip"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-6 jp-card-flip\"><i></i><i></i><i></i><b>Card Flip</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Card Flip في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-008",
    "name": "Stretched Type Repeater",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "stretched-type-repeater"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-7 jp-stretched-type-repeater\"><span>Stretched Type Repeater</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Stretched Type Repeater في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-009",
    "name": "Gradients Haze",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradients-haze"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-8 jp-gradients-haze\"><i></i><i></i><b>Gradients Haze</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradients Haze في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-010",
    "name": "Gooey Effect",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gooey-effect"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-9 jp-gooey-effect\"><i></i><i></i><b>Gooey Effect</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gooey Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-011",
    "name": "Counter Halftone Poster",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "counter-halftone-poster"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-10 jp-counter-halftone-poster\"><i></i><i></i><i></i><i></i><b>Counter Halftone Poster</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Counter Halftone Poster في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-012",
    "name": "Blur Text Scroller",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "blur-text-scroller"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-11 jp-blur-text-scroller\"><span>Blur Text Scroller</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blur Text Scroller في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-013",
    "name": "Color Pills Reveal",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "color-pills-reveal"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-0 jp-color-pills-reveal\" type=\"button\"><i></i><span>Color Pills Reveal</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Color Pills Reveal في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-014",
    "name": "Counter Frosted Glass",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "counter-frosted-glass"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-1 jp-counter-frosted-glass\"><i></i><i></i><i></i><i></i><b>Counter Frosted Glass</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Counter Frosted Glass في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-015",
    "name": "Type Trail",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "type-trail"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-2 jp-type-trail\"><span>Type Trail</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Type Trail في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-016",
    "name": "Pixelated Slideshow",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "pixelated-slideshow"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-3 jp-pixelated-slideshow\"><i></i><i></i><i></i><b>Pixelated Slideshow</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Pixelated Slideshow في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-017",
    "name": "Morph Dots To Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "morph-dots-to-text"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-4 jp-morph-dots-to-text\"><span>Morph Dots To Text</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Morph Dots To Text في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-018",
    "name": "Blend Modes Circle Stack",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "blend-modes-circle-stack"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-5 jp-blend-modes-circle-stack\"><i></i><i></i><b>Blend Modes Circle Stack</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blend Modes Circle Stack في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-019",
    "name": "Grainy Color Clamp",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "grainy-color-clamp"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-6 jp-grainy-color-clamp\"><i></i><i></i><b>Grainy Color Clamp</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Grainy Color Clamp في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-020",
    "name": "Color Cards Cascade",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "color-cards-cascade"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-7 jp-color-cards-cascade\"><i></i><i></i><i></i><b>Color Cards Cascade</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Color Cards Cascade في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-021",
    "name": "Inward Echo Loop",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "inward-echo-loop"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-8 jp-inward-echo-loop\"><i></i><i></i><b>Inward Echo Loop</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Inward Echo Loop في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-022",
    "name": "Blend Modes Color Blocks",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "blend-modes-color-blocks"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-9 jp-blend-modes-color-blocks\"><i></i><i></i><b>Blend Modes Color Blocks</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blend Modes Color Blocks في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-023",
    "name": "Bold Color List",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "bold-color-list"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-10 jp-bold-color-list\"><span>Bold Color List</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Bold Color List في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-024",
    "name": "Pixelated Mask",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "pixelated-mask"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-11 jp-pixelated-mask\"><i></i><i></i><i></i><b>Pixelated Mask</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Pixelated Mask في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-025",
    "name": "Luma Dot Background",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "luma-dot-background"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-0 jp-luma-dot-background\"><i></i><i></i><b>Luma Dot Background</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Luma Dot Background في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-026",
    "name": "Morphing Icons",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "morphing-icons"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-1 jp-morphing-icons\"><i>✦</i><b>Morphing Icons</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Morphing Icons في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-027",
    "name": "Blend Modes Gradient Orbs",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "blend-modes-gradient-orbs"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-2 jp-blend-modes-gradient-orbs\"><i></i><i></i><b>Blend Modes Gradient Orbs</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blend Modes Gradient Orbs في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-028",
    "name": "CRT Effect",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "crt-effect"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-3 jp-crt-effect\"><i></i><i></i><b>CRT Effect</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط CRT Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-029",
    "name": "Color Ring Bounce Reveal",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "color-ring-bounce-reveal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-4 jp-color-ring-bounce-reveal\"><i>✦</i><b>Color Ring Bounce Reveal</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Color Ring Bounce Reveal في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-030",
    "name": "3D Rotation",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "3d-rotation"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-5 jp-3d-rotation\"><i></i><i></i><i></i><b>3D Rotation</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط 3D Rotation في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-031",
    "name": "Color Keying Effect",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "color-keying-effect"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-6 jp-color-keying-effect\"><i></i><i></i><b>Color Keying Effect</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Color Keying Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-032",
    "name": "Blend Modes Collage Shuffle",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "blend-modes-collage-shuffle"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-7 jp-blend-modes-collage-shuffle\"><i></i><i></i><i></i><b>Blend Modes Collage Shuffle</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blend Modes Collage Shuffle في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-033",
    "name": "Threshold Effect",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "threshold-effect"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-8 jp-threshold-effect\"><i></i><i></i><b>Threshold Effect</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Threshold Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-034",
    "name": "Fluted Glass Background",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "fluted-glass-background"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-9 jp-fluted-glass-background\"><i></i><i></i><b>Fluted Glass Background</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Fluted Glass Background في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-035",
    "name": "Circular Loader",
    "category": "loaders",
    "style": "Spinner",
    "tags": [
      "loader",
      "motion",
      "jitter",
      "loop",
      "circular-loader"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-load jp-10 jp-circular-loader\"><i></i><b>Circular Loader</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Circular Loader في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-036",
    "name": "Morph Video Mask",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "morph-video-mask"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-11 jp-morph-video-mask\"><i></i><i></i><i></i><b>Morph Video Mask</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Morph Video Mask في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-037",
    "name": "Gradients Petals",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradients-petals"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-0 jp-gradients-petals\"><i></i><i></i><b>Gradients Petals</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradients Petals في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-038",
    "name": "Rotating Cards",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "rotating-cards"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-1 jp-rotating-cards\"><i></i><i></i><i></i><b>Rotating Cards</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Rotating Cards في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-039",
    "name": "Text Extrusion",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "text-extrusion"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-2 jp-text-extrusion\"><span>Text Extrusion</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Text Extrusion في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-040",
    "name": "Sliding Web Screens",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "sliding-web-screens"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-3 jp-sliding-web-screens\"><i></i><i></i><i></i><b>Sliding Web Screens</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Sliding Web Screens في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-041",
    "name": "Blend Modes Type Blend",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "blend-modes-type-blend"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-4 jp-blend-modes-type-blend\"><span>Blend Modes Type Blend</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blend Modes Type Blend في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-042",
    "name": "Gradients Diagonal Sweep",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradients-diagonal-sweep"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-5 jp-gradients-diagonal-sweep\"><i></i><i></i><b>Gradients Diagonal Sweep</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradients Diagonal Sweep في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-043",
    "name": "Animated Emoji Button",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "animated-emoji-button"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-6 jp-animated-emoji-button\" type=\"button\"><i></i><span>Animated Emoji Button</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Emoji Button في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-044",
    "name": "Animated Repeater",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "animated-repeater"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-7 jp-animated-repeater\"><span>Animated Repeater</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Repeater في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-045",
    "name": "Animated Cards",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "animated-cards"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-8 jp-animated-cards\"><i></i><i></i><i></i><b>Animated Cards</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Cards في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-046",
    "name": "Before After Slider",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "before-after-slider"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-9 jp-before-after-slider\"><i></i><i></i><i></i><b>Before After Slider</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Before After Slider في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-047",
    "name": "Animated Mobile Screens",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "animated-mobile-screens"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-10 jp-animated-mobile-screens\"><i></i><i></i><i></i><b>Animated Mobile Screens</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Mobile Screens في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-048",
    "name": "Morph Shape To Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "morph-shape-to-text"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-11 jp-morph-shape-to-text\"><span>Morph Shape To Text</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Morph Shape To Text في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-049",
    "name": "Gradients Vertical Sweep",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradients-vertical-sweep"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-0 jp-gradients-vertical-sweep\"><i></i><i></i><b>Gradients Vertical Sweep</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradients Vertical Sweep في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-050",
    "name": "Counter Bold Poster",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "counter-bold-poster"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-1 jp-counter-bold-poster\"><i></i><i></i><i></i><i></i><b>Counter Bold Poster</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Counter Bold Poster في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-051",
    "name": "Mobile Screens Grid",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "mobile-screens-grid"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-2 jp-mobile-screens-grid\"><i></i><i></i><i></i><b>Mobile Screens Grid</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Mobile Screens Grid في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-052",
    "name": "Elastic Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "elastic-text"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-3 jp-elastic-text\"><span>Elastic Text</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Elastic Text في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-053",
    "name": "Dancing Dots",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "dancing-dots"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-4 jp-dancing-dots\"><i>✦</i><b>Dancing Dots</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Dancing Dots في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-054",
    "name": "Slideshow Loop",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "slideshow-loop"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-5 jp-slideshow-loop\"><i></i><i></i><i></i><b>Slideshow Loop</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Slideshow Loop في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-055",
    "name": "Circle Cascade",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "circle-cascade"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-6 jp-circle-cascade\"><i>✦</i><b>Circle Cascade</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Circle Cascade في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-056",
    "name": "Cascading Screens",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "cascading-screens"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-7 jp-cascading-screens\"><i></i><i></i><i></i><b>Cascading Screens</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Cascading Screens في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-057",
    "name": "Cascading Mobile Screens",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "cascading-mobile-screens"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-8 jp-cascading-mobile-screens\"><i></i><i></i><i></i><b>Cascading Mobile Screens</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Cascading Mobile Screens في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-058",
    "name": "Animated Web Gallery",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "animated-web-gallery"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-9 jp-animated-web-gallery\"><i></i><i></i><i></i><b>Animated Web Gallery</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Web Gallery في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-059",
    "name": "Tilted Text Snap",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "tilted-text-snap"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-10 jp-tilted-text-snap\"><span>Tilted Text Snap</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Tilted Text Snap في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-060",
    "name": "Web Screens Grid",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "web-screens-grid"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-11 jp-web-screens-grid\"><i></i><i></i><i></i><b>Web Screens Grid</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Web Screens Grid في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-061",
    "name": "Rotating Mobile Screens",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "rotating-mobile-screens"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-0 jp-rotating-mobile-screens\"><i></i><i></i><i></i><b>Rotating Mobile Screens</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Rotating Mobile Screens في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-062",
    "name": "Animated Photo Gallery",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "animated-photo-gallery"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-1 jp-animated-photo-gallery\"><i></i><i></i><i></i><b>Animated Photo Gallery</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Photo Gallery في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-063",
    "name": "Push Notifications List",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "push-notifications-list"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-2 jp-push-notifications-list\" type=\"button\"><i></i><span>Push Notifications List</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Push Notifications List في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-064",
    "name": "Push Notification",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "push-notification"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-3 jp-push-notification\" type=\"button\"><i></i><span>Push Notification</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Push Notification في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-065",
    "name": "Grid Chart Split",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "grid-chart-split"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-4 jp-grid-chart-split\"><i></i><i></i><i></i><i></i><b>Grid Chart Split</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Grid Chart Split في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-066",
    "name": "Liquid Glass Menu Vertical",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "liquid-glass-menu-vertical"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-5 jp-liquid-glass-menu-vertical\" type=\"button\"><i></i><span>Liquid Glass Menu Vertical</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Liquid Glass Menu Vertical في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-067",
    "name": "Mobile Gallery Grid",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "mobile-gallery-grid"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-6 jp-mobile-gallery-grid\"><i></i><i></i><i></i><b>Mobile Gallery Grid</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Mobile Gallery Grid في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-068",
    "name": "Web Gallery Grid",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "web-gallery-grid"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-7 jp-web-gallery-grid\"><i></i><i></i><i></i><b>Web Gallery Grid</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Web Gallery Grid في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-069",
    "name": "Mobile Screens Reveal",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "mobile-screens-reveal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-8 jp-mobile-screens-reveal\"><i></i><i></i><i></i><b>Mobile Screens Reveal</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Mobile Screens Reveal في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-070",
    "name": "Gradients Bento",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradients-bento"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-9 jp-gradients-bento\"><i></i><i></i><b>Gradients Bento</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradients Bento في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-071",
    "name": "Glitch Text Reveal",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "glitch-text-reveal"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-10 jp-glitch-text-reveal\"><span>Glitch Text Reveal</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Glitch Text Reveal في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-072",
    "name": "Animated Web Screens",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "animated-web-screens"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-11 jp-animated-web-screens\"><i></i><i></i><i></i><b>Animated Web Screens</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Web Screens في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-073",
    "name": "Animated Text Messages",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "animated-text-messages"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-0 jp-animated-text-messages\" type=\"button\"><i></i><span>Animated Text Messages</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Text Messages في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-074",
    "name": "Morph Line To Radar Chart",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "morph-line-to-radar-chart"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-1 jp-morph-line-to-radar-chart\"><i></i><i></i><i></i><i></i><b>Morph Line To Radar Chart</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Morph Line To Radar Chart في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-075",
    "name": "Animated Progress Bar",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "animated-progress-bar"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-2 jp-animated-progress-bar\"><i></i><i></i><i></i><i></i><b>Animated Progress Bar</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Progress Bar في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-076",
    "name": "Bold Text Snap",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "bold-text-snap"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-3 jp-bold-text-snap\"><span>Bold Text Snap</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Bold Text Snap في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-077",
    "name": "Animated UI Kit",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "animated-ui-kit"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-4 jp-animated-ui-kit\" type=\"button\"><i></i><span>Animated UI Kit</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated UI Kit في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-078",
    "name": "Bouncy Words",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "bouncy-words"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-5 jp-bouncy-words\"><span>Bouncy Words</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Bouncy Words في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-079",
    "name": "Card Reveal",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "card-reveal"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-6 jp-card-reveal\"><i></i><i></i><i></i><b>Card Reveal</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Card Reveal في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-080",
    "name": "Morph Lines To Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "morph-lines-to-text"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-7 jp-morph-lines-to-text\"><span>Morph Lines To Text</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Morph Lines To Text في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-081",
    "name": "Sliding Squares",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "sliding-squares"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-8 jp-sliding-squares\"><i></i><i></i><b>Sliding Squares</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Sliding Squares في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-082",
    "name": "Interactive Badges",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "interactive-badges"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-9 jp-interactive-badges\" type=\"button\"><i></i><span>Interactive Badges</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Interactive Badges في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-083",
    "name": "Color Cards Expand",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "color-cards-expand"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-10 jp-color-cards-expand\"><i></i><i></i><i></i><b>Color Cards Expand</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Color Cards Expand في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-084",
    "name": "On Off Toggle",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "on-off-toggle"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-11 jp-on-off-toggle\" type=\"button\"><i></i><span>On Off Toggle</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط On Off Toggle في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-085",
    "name": "Gradients Morphing Shapes",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradients-morphing-shapes"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-0 jp-gradients-morphing-shapes\"><i></i><i></i><b>Gradients Morphing Shapes</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradients Morphing Shapes في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-086",
    "name": "Color Cards Stack",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "color-cards-stack"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-1 jp-color-cards-stack\"><i></i><i></i><i></i><b>Color Cards Stack</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Color Cards Stack في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-087",
    "name": "Bar Chart Skyline",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "bar-chart-skyline"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-2 jp-bar-chart-skyline\"><i></i><i></i><i></i><i></i><b>Bar Chart Skyline</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Bar Chart Skyline في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-088",
    "name": "Floating Action Menu",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "floating-action-menu"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-3 jp-floating-action-menu\" type=\"button\"><i></i><span>Floating Action Menu</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Floating Action Menu في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-089",
    "name": "Bouncy Icons",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "bouncy-icons"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-4 jp-bouncy-icons\"><i>✦</i><b>Bouncy Icons</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Bouncy Icons في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-090",
    "name": "Counter Progress Ring",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "counter-progress-ring"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-5 jp-counter-progress-ring\"><i></i><i></i><i></i><i></i><b>Counter Progress Ring</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Counter Progress Ring في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-091",
    "name": "Halftone Effect",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "halftone-effect"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-6 jp-halftone-effect\"><i></i><i></i><b>Halftone Effect</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Halftone Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-092",
    "name": "Cascading Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "cascading-text"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-7 jp-cascading-text\"><span>Cascading Text</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Cascading Text في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-093",
    "name": "Gradients Animated List",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradients-animated-list"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-8 jp-gradients-animated-list\"><i></i><i></i><b>Gradients Animated List</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradients Animated List في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-094",
    "name": "Interactive Button Trace",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "interactive-button-trace"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-9 jp-interactive-button-trace\" type=\"button\"><i></i><span>Interactive Button Trace</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Interactive Button Trace في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-095",
    "name": "Rotate And Scale",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "rotate-and-scale"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-10 jp-rotate-and-scale\"><i>✦</i><b>Rotate And Scale</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Rotate And Scale في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-096",
    "name": "Animated Feature List",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "animated-feature-list"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-11 jp-animated-feature-list\" type=\"button\"><i></i><span>Animated Feature List</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Feature List في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-097",
    "name": "Sliding Text Reveal",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "sliding-text-reveal"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-0 jp-sliding-text-reveal\"><span>Sliding Text Reveal</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Sliding Text Reveal في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-098",
    "name": "Video Title Slide",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "video-title-slide"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-1 jp-video-title-slide\"><span>Video Title Slide</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Video Title Slide في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-099",
    "name": "Negative Mask Effect",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "negative-mask-effect"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-2 jp-negative-mask-effect\"><i></i><i></i><i></i><b>Negative Mask Effect</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Negative Mask Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-100",
    "name": "Counter Glitch",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "counter-glitch"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-3 jp-counter-glitch\"><i></i><i></i><i></i><i></i><b>Counter Glitch</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Counter Glitch في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-101",
    "name": "Liquid Glass Toggle",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "liquid-glass-toggle"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-4 jp-liquid-glass-toggle\" type=\"button\"><i></i><span>Liquid Glass Toggle</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Liquid Glass Toggle في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-102",
    "name": "Looped Text",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "looped-text"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-5 jp-looped-text\"><span>Looped Text</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Looped Text في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-103",
    "name": "Geometric Morph",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "geometric-morph"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-6 jp-geometric-morph\"><i></i><i></i><b>Geometric Morph</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Geometric Morph في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-104",
    "name": "Animated Slider",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "animated-slider"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-7 jp-animated-slider\" type=\"button\"><i></i><span>Animated Slider</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Slider في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-105",
    "name": "Animated Arrow",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "animated-arrow"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-8 jp-animated-arrow\"><i>✦</i><b>Animated Arrow</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Arrow في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-106",
    "name": "Loading Spinner Infinite",
    "category": "loaders",
    "style": "Spinner",
    "tags": [
      "loader",
      "motion",
      "jitter",
      "loop",
      "loading-spinner-infinite"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-load jp-9 jp-loading-spinner-infinite\"><i></i><b>Loading Spinner Infinite</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Loading Spinner Infinite في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-107",
    "name": "Loading Spinner Success",
    "category": "loaders",
    "style": "Spinner",
    "tags": [
      "loader",
      "motion",
      "jitter",
      "loop",
      "loading-spinner-success"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-load jp-10 jp-loading-spinner-success\"><i></i><b>Loading Spinner Success</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Loading Spinner Success في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-108",
    "name": "Progress Donut",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "progress-donut"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-11 jp-progress-donut\"><i></i><i></i><i></i><i></i><b>Progress Donut</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Progress Donut في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-109",
    "name": "Splitting Cube Loop",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "splitting-cube-loop"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-0 jp-splitting-cube-loop\"><i></i><i></i><i></i><b>Splitting Cube Loop</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Splitting Cube Loop في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-110",
    "name": "Loading Bars",
    "category": "loaders",
    "style": "Spinner",
    "tags": [
      "loader",
      "motion",
      "jitter",
      "loop",
      "loading-bars"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-load jp-1 jp-loading-bars\"><i></i><b>Loading Bars</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Loading Bars في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "loader",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-111",
    "name": "Perspective Tunnel",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "perspective-tunnel"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-2 jp-perspective-tunnel\"><i></i><i></i><b>Perspective Tunnel</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Perspective Tunnel في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-112",
    "name": "Pixel Dissolve Transition",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "pixel-dissolve-transition"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-3 jp-pixel-dissolve-transition\"><i></i><i></i><i></i><b>Pixel Dissolve Transition</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Pixel Dissolve Transition في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-113",
    "name": "Counter Blur",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "counter-blur"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-4 jp-counter-blur\"><i></i><i></i><i></i><i></i><b>Counter Blur</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Counter Blur في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-114",
    "name": "Animated Color Palette",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "animated-color-palette"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-5 jp-animated-color-palette\"><i></i><i></i><b>Animated Color Palette</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Color Palette في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-115",
    "name": "Blur Bubbles",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "blur-bubbles"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-6 jp-blur-bubbles\"><i></i><i></i><b>Blur Bubbles</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Blur Bubbles في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-116",
    "name": "Highlight Effect",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "highlight-effect"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-7 jp-highlight-effect\"><span>Highlight Effect</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Highlight Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-117",
    "name": "Five Stars Pop",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "five-stars-pop"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-8 jp-five-stars-pop\"><i>✦</i><b>Five Stars Pop</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Five Stars Pop في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-118",
    "name": "Five Stars Move Up",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "five-stars-move-up"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-9 jp-five-stars-move-up\"><i>✦</i><b>Five Stars Move Up</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Five Stars Move Up في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-119",
    "name": "Continue Button Interaction",
    "category": "buttons",
    "style": "Animated",
    "tags": [
      "ui",
      "interaction",
      "jitter",
      "animated",
      "continue-button-interaction"
    ],
    "complexity": "basic",
    "code": {
      "html": "<button class=\"jp-preset jp-ui jp-10 jp-continue-button-interaction\" type=\"button\"><i></i><span>Continue Button Interaction</span></button>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Continue Button Interaction في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Interaction",
    "type": "ui-control",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-120",
    "name": "Glitchy Text Reveal",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "glitchy-text-reveal"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-11 jp-glitchy-text-reveal\"><span>Glitchy Text Reveal</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Glitchy Text Reveal في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-121",
    "name": "Counter Pixel",
    "category": "data",
    "style": "Chart",
    "tags": [
      "chart",
      "motion",
      "jitter",
      "data",
      "counter-pixel"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-chart jp-0 jp-counter-pixel\"><i></i><i></i><i></i><i></i><b>Counter Pixel</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Counter Pixel في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "chart",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-122",
    "name": "Text Mirror Effect",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "text-mirror-effect"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-1 jp-text-mirror-effect\"><span>Text Mirror Effect</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Text Mirror Effect في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-123",
    "name": "Kaleidoscope",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "kaleidoscope"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-2 jp-kaleidoscope\"><i></i><i></i><b>Kaleidoscope</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Kaleidoscope في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-124",
    "name": "Animated Gallery",
    "category": "media",
    "style": "Showcase",
    "tags": [
      "media",
      "motion",
      "jitter",
      "loop",
      "animated-gallery"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-media jp-3 jp-animated-gallery\"><i></i><i></i><i></i><b>Animated Gallery</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Gallery في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "media-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-125",
    "name": "Moving Lines",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "moving-lines"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-4 jp-moving-lines\"><i></i><i></i><b>Moving Lines</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Moving Lines في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-126",
    "name": "Animated Stripes",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "animated-stripes"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-5 jp-animated-stripes\"><i></i><i></i><b>Animated Stripes</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Animated Stripes في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-127",
    "name": "Chevrons Moving Down",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "chevrons-moving-down"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-6 jp-chevrons-moving-down\"><i>✦</i><b>Chevrons Moving Down</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Chevrons Moving Down في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-128",
    "name": "Chevrons Moving Up",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "chevrons-moving-up"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-7 jp-chevrons-moving-up\"><i>✦</i><b>Chevrons Moving Up</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Chevrons Moving Up في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-129",
    "name": "Rotating Squares",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "rotating-squares"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-8 jp-rotating-squares\"><i></i><i></i><b>Rotating Squares</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Rotating Squares في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-130",
    "name": "Big Waves",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "big-waves"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-9 jp-big-waves\"><i></i><i></i><b>Big Waves</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Big Waves في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-131",
    "name": "Moving Dots",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "moving-dots"
    ],
    "complexity": "advanced",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-10 jp-moving-dots\"><i></i><i></i><b>Moving Dots</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Moving Dots في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-132",
    "name": "Rotating Crosses",
    "category": "icons",
    "style": "Morph",
    "tags": [
      "icon",
      "motion",
      "jitter",
      "micro",
      "rotating-crosses"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-icon jp-11 jp-rotating-crosses\"><i>✦</i><b>Rotating Crosses</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Rotating Crosses في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "icon-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-133",
    "name": "Gradient Noisy Blur",
    "category": "effects",
    "style": "Background",
    "tags": [
      "background",
      "motion",
      "jitter",
      "loop",
      "gradient-noisy-blur"
    ],
    "complexity": "intermediate",
    "code": {
      "html": "<div class=\"jp-preset jp-bg jp-0 jp-gradient-noisy-blur\"><i></i><i></i><b>Gradient Noisy Blur</b></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Gradient Noisy Blur في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "background-effect",
    "addedAt": "2026-09-27"
  },
  {
    "id": "JIT-134",
    "name": "Bouncy Period",
    "category": "effects",
    "style": "Text",
    "tags": [
      "text",
      "motion",
      "jitter",
      "loop",
      "bouncy-period"
    ],
    "complexity": "basic",
    "code": {
      "html": "<div class=\"jp-preset jp-text jp-1 jp-bouncy-period\"><span>Bouncy Period</span><i></i></div>",
      "css": "",
      "js": "",
      "react": "",
      "tailwind": ""
    },
    "favorite": false,
    "usage": 0,
    "description": "تنفيذ ويب أصلي مستوحى من نمط Bouncy Period في Jitter",
    "playground": {},
    "technology": "HTML + CSS",
    "dependency": "None",
    "sourceReference": "jitter-all-2026",
    "motionMode": "Loop",
    "type": "text-effect",
    "addedAt": "2026-09-27"
  }
];
