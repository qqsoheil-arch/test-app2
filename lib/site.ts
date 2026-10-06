export type NavItem = { href: string; label: string };

export type Value = { title: string; text: string; icon: string };

export type Product = {
  slug: string;
  title: string;
  text: string;
  intro: string;
  image: string;
  alt: string;
  features: string[];
};

export type Project = {
  title: string;
  productType: string;
  style: string;
  image: string;
  alt: string;
};

export type Service = { title: string; text: string; icon: string };

export type Step = { number: string; title: string; text: string };

/**
 * ---------------------------------------------------------------------------
 * PLACEHOLDER CONTACT DATA — replace with the real Vostadoor details.
 * Everything in `contact` below is a placeholder: phone, mobile/WhatsApp,
 * Instagram handle, address and opening hours.
 * ---------------------------------------------------------------------------
 */
export const site = {
  name: "وستادور",
  nameEn: "Vostadoor",
  legalName: "وستادور | Vostadoor",
  tagline: "طراحی و ساخت درب‌های آهنی و سازه‌های فلزی خاص برای خانه و ویلا",
  description:
    "وستادور طراح و سازنده درب آهنی، درب ویلایی، درب ورودی، نرده، حفاظ، پله و سازه‌های فلزی سفارشی است؛ طراحی اختصاصی متناسب با معماری ساختمان شما، ساخت در کارگاه و اجرای حرفه‌ای.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vostadoor.ir",
  contact: {
    phoneDisplay: "۰۲۱ ۰۰۰۰ ۰۰۰۰",
    phoneHref: "tel:+982100000000",
    mobileDisplay: "۰۹۰۰ ۰۰۰ ۰۰۰۰",
    whatsappHref: "https://wa.me/989000000000",
    instagramHandle: "vostadoor",
    instagramHref: "https://instagram.com/vostadoor",
    address: "کارگاه وستادور — تهران",
    hours: "شنبه تا پنجشنبه، ۹ تا ۱۸",
  },
};

export const nav: NavItem[] = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/services", label: "خدمات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export const values: Value[] = [
  {
    title: "کیفیت ساخت",
    text: "استفاده از متریال و رنگ باکیفیت",
    icon: "shield",
  },
  {
    title: "طراحی سفارشی",
    text: "طراحی متناسب با معماری ساختمان شما",
    icon: "compass",
  },
  {
    title: "ساخت دقیق",
    text: "تولید با دقت و توجه به جزئیات",
    icon: "caliper",
  },
  {
    title: "اجرای حرفه‌ای",
    text: "از طراحی تا ساخت و نصب",
    icon: "install",
  },
];

export const products: Product[] = [
  {
    slug: "villa-gates",
    title: "درب‌های ویلایی",
    text: "درب‌های آهنی و فلزی سفارشی برای ورودی ویلا و ساختمان",
    intro:
      "درب ویلایی اولین چیزی است که از ملک شما دیده می‌شود. در وستادور درب ویلایی را بر اساس عرض ورودی، خط نما و معماری ساختمان طراحی می‌کنیم؛ از درب‌های ریلی و لولایی تمام‌فلزی تا ترکیب فلز با چوب و شیشه، همراه با جوش‌کاری دقیق، رنگ کوره‌ای و یراق‌آلات مقاوم.",
    image: "/images/product-villa-gate.webp",
    alt: "درب ویلایی فلزی سفارشی در ورودی یک ویلا با نمای تاریک",
    features: [
      "طراحی سه‌بعدی و انتخاب مدل قبل از ساخت",
      "سازه مقاوم با ورق و پروفیل استاندارد",
      "رنگ کوره‌ای مقاوم در برابر آفتاب و رطوبت",
      "نصب درب ریلی، لولایی یا بازشو بر اساس فضای ورودی",
    ],
  },
  {
    slug: "entrance-doors",
    title: "درب‌های ورودی",
    text: "طراحی و ساخت درب‌های ورودی خاص و مقاوم",
    intro:
      "درب ورودی خانه باید هم امن باشد و هم با نمای ساختمان هماهنگ. ما درب ورودی را متناسب با ابعاد چارچوب، جهت بازشو و سبک معماری طراحی می‌کنیم و در ساخت، استحکام سازه، تراز دقیق بازشو و پوشش نهایی را همزمان در نظر می‌گیریم.",
    image: "/images/product-entrance-door.webp",
    alt: "درب ورودی فلزی تیره با جزئیات مدرن در ورودی ساختمان",
    features: [
      "ابعادگیری دقیق از چارچوب و بازشو",
      "قفل و یراق‌آلات مقاوم و قابل تعویض",
      "پوشش رنگ یا رنگ کوره‌ای با دوام",
      "هماهنگی طرح درب با نما و کف ورودی",
    ],
  },
  {
    slug: "railings-fences",
    title: "نرده و حفاظ",
    text: "نرده‌های فلزی مدرن، کلاسیک و سفارشی",
    intro:
      "نرده و حفاظ، مرز میان امنیت و زیبایی است. نرده‌های وستادور بر اساس ارتفاع لازم، فاصله میله‌ها و سبک طراحی خانه ساخته می‌شوند؛ با پرداخت تمیز جوش‌ها، رنگ یکدست و جزئیاتی که سال‌ها دوام می‌آورند.",
    image: "/images/product-railing.webp",
    alt: "نرده فلزی سیاه مدرن با اجرای دقیق در یک ساختمان",
    features: [
      "نرده راه‌پله، بالکن، تراس و حفاظ پنجره",
      "طرح‌های مینیمال، مدرن و کلاسیک",
      "پرداخت و سنباده‌کاری کامل پیش از رنگ",
      "مقاوم در برابر زنگ‌زدگی با پوشش مناسب",
    ],
  },
  {
    slug: "stairs-steel-structures",
    title: "پله و سازه‌های فلزی",
    text: "طراحی و اجرای پله و سازه‌های فلزی متناسب با فضا",
    intro:
      "پله فلزی، هم سازه است و هم بخشی از معماری داخلی. ما پله را با توجه به ارتفاع طبقه، مسیر حرکت و سبک فضا طراحی می‌کنیم؛ از پله‌های شاخه‌ای و مارپیچ تا پله‌های مستقیم با نرده‌های فلزی و ترکیب چوب یا سنگ.",
    image: "/images/product-stairs.webp",
    alt: "پله فلزی مدرن با نرده فلزی در فضای معماری مینیمال",
    features: [
      "مهندسی سازه و اتصالات ایمن",
      "اجرای پله داخلی و بیرونی",
      "ترکیب فلز با چوب، سنگ یا شیشه",
      "نقشه اجرایی و کنترل ابعاد نهایی",
    ],
  },
  {
    slug: "wrought-iron",
    title: "درب‌های فرفورژه",
    text: "درب‌های فرفورژه با جزئیات هنری و اجرای دقیق",
    intro:
      "درب فرفورژه برای خانه‌هایی است که اصالت و جزئیات برایشان مهم است. نقش‌ها بر اساس سبک نما انتخاب و چیدمان می‌شوند و هر قطعه با اجرای دستی و دقت بالا ساخته می‌شود تا فرم‌ها یکدست و متناسب بمانند.",
    image: "/images/product-wrought-iron.webp",
    alt: "درب فرفورژه با نقش‌های تزئینی و جزئیات فلزی دست‌ساز",
    features: [
      "انتخاب نقش و چیدمان متناسب با نما",
      "اجرای دستی جزئیات تزئینی",
      "پوشش ضدزنگ و رنگ نهایی مقاوم",
      "امکان ترکیب با حفاظ و نرده هم‌سبک",
    ],
  },
  {
    slug: "custom-metalwork",
    title: "پروژه‌های سفارشی",
    text: "ساخت طرح‌های اختصاصی بر اساس نیاز و معماری پروژه",
    intro:
      "بخشی از پروژه‌ها از یک نمونه آماده شروع نمی‌شوند. اگر طرح خاصی در ذهن دارید یا جزئیات فلزی پروژه با ابعاد و سبک خاصی باید اجرا شود، طرح را بررسی می‌کنیم، نقشه فنی آن را آماده می‌کنیم و متناسب با بودجه و زمان‌بندی پروژه می‌سازیم.",
    image: "/images/product-custom.webp",
    alt: "سازه و جزئیات فلزی سفارشی اجرا شده در یک پروژه معماری",
    features: [
      "بررسی طرح و ارائه پیشنهاد فنی",
      "نقشه‌کشی و برآورد متریال",
      "ساخت نمونه و هماهنگی قبل از تولید",
      "همکاری با معماران و پیمانکاران پروژه",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "درب ویلایی مدرن",
    productType: "درب ورودی",
    style: "سبک مدرن",
    image: "/images/project-01.webp",
    alt: "درب ویلایی مدرن فلزی در ورودی ویلا",
  },
  {
    title: "درب فرفورژه کلاسیک",
    productType: "درب فرفورژه",
    style: "سبک کلاسیک",
    image: "/images/project-02.webp",
    alt: "درب فرفورژه کلاسیک با جزئیات تزئینی",
  },
  {
    title: "نرده راه‌پله ساختمان",
    productType: "نرده و حفاظ",
    style: "سبک مینیمال",
    image: "/images/project-03.webp",
    alt: "نرده راه‌پله فلزی مینیمال",
  },
  {
    title: "پله فلزی داخلی",
    productType: "پله فلزی",
    style: "سبک مدرن",
    image: "/images/project-04.webp",
    alt: "پله فلزی داخلی با نرده فلزی",
  },
  {
    title: "درب ورودی ساختمان",
    productType: "درب ورودی",
    style: "سبک مدرن",
    image: "/images/project-05.webp",
    alt: "درب ورودی ساختمان با پوشش تیره",
  },
  {
    title: "حفاظ و نرده ویلا",
    productType: "نرده و حفاظ",
    style: "سبک کلاسیک",
    image: "/images/project-06.webp",
    alt: "حفاظ و نرده فلزی ویلا",
  },
  {
    title: "درب پارکینگ ریلی",
    productType: "درب ویلایی",
    style: "سبک مینیمال",
    image: "/images/project-07.webp",
    alt: "درب پارکینگ ریلی فلزی",
  },
  {
    title: "سازه و جزئیات فلزی",
    productType: "سازه فلزی",
    style: "سبک صناعی",
    image: "/images/project-08.webp",
    alt: "سازه و جزئیات فلزی سفارشی",
  },
  {
    title: "درب حیاط ویلا",
    productType: "درب ویلایی",
    style: "سبک مدرن",
    image: "/images/project-09.webp",
    alt: "درب حیاط ویلا با طراحی مدرن",
  },
];

export const benefits: Value[] = [
  {
    title: "طراحی اختصاصی",
    text: "هر پروژه متناسب با معماری و ابعاد محل طراحی می‌شود.",
    icon: "compass",
  },
  {
    title: "کیفیت و دوام",
    text: "استفاده از متریال مناسب و اجرای اصولی برای عمر طولانی.",
    icon: "shield",
  },
  {
    title: "توجه به جزئیات",
    text: "جزئیات طراحی و اجرای نهایی اهمیت ویژه‌ای دارند.",
    icon: "detail",
  },
  {
    title: "مشاوره قبل از ساخت",
    text: "قبل از شروع ساخت، نیاز و شرایط پروژه بررسی می‌شود.",
    icon: "chat",
  },
];

export const services: Service[] = [
  {
    title: "مشاوره و طراحی",
    text: "بررسی محل نصب، ابعاد و سبک نما و پیشنهاد چند مدل متناسب با پروژه.",
    icon: "chat",
  },
  {
    title: "اندازه‌گیری و نقشه‌کشی",
    text: "ابعاد دقیق محل نصب ثبت می‌شود و نقشه اجرایی محصول آماده می‌شود.",
    icon: "ruler",
  },
  {
    title: "ساخت در کارگاه",
    text: "برش، جوش‌کاری و شکل‌دهی قطعات با کنترل کیفیت در هر مرحله.",
    icon: "workshop",
  },
  {
    title: "پرداخت و رنگ",
    text: "سنباده‌کاری، ضدزنگ و رنگ‌آمیزی یا رنگ کوره‌ای با پوشش یکدست.",
    icon: "paint",
  },
  {
    title: "حمل و نصب",
    text: "انتقال محصول به محل پروژه و نصب و تنظیم نهایی توسط تیم اجرایی.",
    icon: "install",
  },
  {
    title: "پشتیبانی پس از نصب",
    text: "بررسی عملکرد درب و نرده و رفع موارد جزئی پس از تحویل پروژه.",
    icon: "support",
  },
];

// NOTE: named `processSteps` on purpose — a top-level `process` binding would
// shadow Node's global `process` in this module and break `process.env` above.
export const processSteps: Step[] = [
  {
    number: "۰۱",
    title: "مشاوره و بررسی نیاز",
    text: "محل نصب، ابعاد و سبک مورد نظر بررسی می‌شود.",
  },
  {
    number: "۰۲",
    title: "انتخاب یا طراحی مدل",
    text: "مدل نهایی انتخاب یا به‌صورت اختصاصی طراحی می‌شود.",
  },
  {
    number: "۰۳",
    title: "اندازه‌گیری و ساخت",
    text: "ابعاد دقیق گرفته و ساخت در کارگاه آغاز می‌شود.",
  },
  {
    number: "۰۴",
    title: "رنگ، نصب و تحویل",
    text: "رنگ‌آمیزی، نصب در محل و تحویل پروژه انجام می‌شود.",
  },
];

export const stats = [
  { value: "+۱۰", label: "سال تجربه و فعالیت" },
  { value: "+۱۰۰", label: "پروژه اجرا شده" },
  { value: "۱۰۰٪", label: "ساخت سفارشی" },
];

export const productTypeOptions = [
  "درب ویلایی",
  "درب ورودی",
  "نرده و حفاظ",
  "پله و سازه فلزی",
  "درب فرفورژه",
  "پروژه سفارشی",
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
