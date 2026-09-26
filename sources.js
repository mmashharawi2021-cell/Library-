const librarySources = [
  {
    id: "jitter-ui",
    name: "Jitter UI Animation Templates",
    url: "https://jitter.video/templates/ui-elements/",
    type: "visual-reference",
    technology: "Motion design reference",
    license: "Reference only; original web implementations are authored in Library-",
    extracted: ["buttons","toggles","loaders","progress","notifications","navigation","search","glass","micro-interactions"],
    usedBy: ["FXT-001","FXT-002","FXT-003","FXB-001","FXB-002","FXI-001"]
  },
  {
    id: "jitter-text",
    name: "Jitter Text Animation Templates",
    url: "https://jitter.video/templates/text/",
    type: "visual-reference",
    technology: "Motion typography reference",
    license: "Reference only; no Jitter template files copied",
    extracted: ["text reveal","stretch","scramble","morph","blur","glitch","loop typography"],
    usedBy: ["TXT-001","TXT-002","TXT-003","TXT-004"]
  },
  {
    id: "jitter-buttons",
    name: "Jitter Button Animation Templates",
    url: "https://jitter.video/templates/buttons/",
    type: "visual-reference",
    technology: "Interaction motion reference",
    license: "Reference only; original CSS/SVG implementation",
    extracted: ["glow","trace","split action","liquid glass","toggle","hover"],
    usedBy: ["BTN-018","BTN-019"]
  },
  {
    id: "dev-reui-2025",
    name: "DEV.to — ReUI component expansion",
    url: "https://dev.to/keenthemes/reui-v1016-just-shipped-our-biggest-update-since-launch-17l4",
    type: "discovery-article",
    technology: "React + TypeScript + Tailwind + Motion",
    license: "Article is reference only",
    extracted: ["stepper","file upload","tree","badge","marquee","text reveal","gradient background","grid background"],
    usedBy: ["INP-016","NAV-016","FXT-004","FXB-001"]
  },
  {
    id: "reui-official",
    name: "ReUI",
    url: "https://github.com/keenthemes/reui",
    type: "official-open-source",
    technology: "React + TypeScript + Tailwind",
    license: "MIT",
    extracted: ["production component patterns","accessibility","copy-and-own architecture"],
    usedBy: ["INP-016","NAV-016"]
  },
  {
    id: "motion-official",
    name: "Motion",
    url: "https://motion.dev/",
    type: "official-library",
    technology: "JavaScript + React animation",
    license: "MIT",
    extracted: ["entry/exit","gestures","scroll","layout transitions","stagger"],
    usedBy: ["FXT-001","FXS-001","FXS-002"]
  },
  {
    id: "dev-motion-guide-2026",
    name: "DEV.to — Motion React Animations Guide",
    url: "https://dev.to/stacknotice/framer-motion-motion-react-animations-complete-guide-2026-3e7l",
    type: "discovery-article",
    technology: "Motion + React",
    license: "Article is reference only",
    extracted: ["exit animation","shared layout","scroll effects","stagger","gestures"],
    usedBy: ["FXS-001","FXS-002"]
  },
  {
    id: "anime-official",
    name: "Anime.js",
    url: "https://animejs.com/",
    type: "official-library",
    technology: "JavaScript animation",
    license: "MIT",
    extracted: ["stagger","SVG","DOM transforms","loop","alternate"],
    usedBy: ["TXT-003","SVG-001"]
  },
  {
    id: "three-official",
    name: "Three.js",
    url: "https://github.com/mrdoob/three.js",
    type: "official-library",
    technology: "WebGL / 3D",
    license: "MIT",
    extracted: ["3D scenes","WebGL","interactive transforms"],
    usedBy: []
  },
  {
    id: "r3f-official",
    name: "React Three Fiber",
    url: "https://github.com/pmndrs/react-three-fiber",
    type: "official-library",
    technology: "React renderer for Three.js",
    license: "MIT",
    extracted: ["React 3D scene patterns","interactive 3D"],
    usedBy: []
  },
  {
    id: "dev-gsap-mask",
    name: "DEV.to — React + GSAP SVG mask / parallax pattern",
    url: "https://dev.to/er-raj-aryan/i-recreated-a-cinematic-gta-vi-website-clone-with-react-tailwind-gsap-3edc",
    type: "discovery-article",
    technology: "React + GSAP + SVG masking",
    license: "Article is reference only; no source code copied",
    extracted: ["SVG mask reveal","layered parallax","timeline sequencing"],
    usedBy: ["IMG-001","FXS-002"]
  }
];

window.librarySources = librarySources;
