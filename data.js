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
      "Soft"
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
      "Form"
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
      "Magnetic"
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    }
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    }
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    "playground": {}
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
