import type { projects } from "@/db/schema";

export type Project = typeof projects.$inferSelect;

export const fallbackProjects: Project[] = [
  {
    id: 1,
    slug: "dar-misr-el-obour-apartment-100m",
    name: "شقة للبيع في دار مصر العبور",
    location: "دار مصر العبور - موقع 1 بجوار مسجد الحبيب المصطفى",
    developer: "Dar Misr",
    unitType: "شقة سكنية",
    area: "100 م²",
    price: "سعر مميز عند التواصل",
    downPayment: "متاح",
    installment: "تسهيلات حسب الاتفاق",
    delivery: "جاهزة للمعاينة",
    status: "متاحة للبيع",
    description:
      "فرصة مميزة لشقة 100 متر في دار مصر العبور بموقع 1، قريبة من مسجد الحبيب المصطفى والخدمات الرئيسية. مناسبة للسكن العائلي والاستثمار وإعادة البيع.",
    amenities:
      "موقع مميز, قريبة من الخدمات, بجوار مسجد, منطقة هادئة, مناسبة للاستثمار, جاهزة للمعاينة",
    imageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    slug: "new-cairo-investment-apartment",
    name: "شقة استثمارية في التجمع الخامس",
    location: "التجمع الخامس - القاهرة الجديدة",
    developer: "New Cairo Developments",
    unitType: "شقة / Resale",
    area: "145 م²",
    price: "يبدأ من 3,250,000 جنيه",
    downPayment: "10%",
    installment: "حتى 7 سنوات",
    delivery: "استلام قريب",
    status: "متاحة",
    description:
      "وحدة مميزة في قلب التجمع الخامس بالقرب من الجامعات والخدمات والمحاور الرئيسية، تصلح للسكن أو الاستثمار بعائد إيجاري قوي.",
    amenities:
      "أمن 24/7, جراج, مصاعد, مساحات خضراء, قريب من الخدمات, عائد استثماري",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    slug: "north-coast-chalet-investment",
    name: "شاليه استثماري في الساحل الشمالي",
    location: "الساحل الشمالي - قريب من البحر",
    developer: "North Coast Resorts",
    unitType: "شاليه",
    area: "95 م²",
    price: "يبدأ من 2,100,000 جنيه",
    downPayment: "5%",
    installment: "حتى 10 سنوات",
    delivery: "2027",
    status: "طرح محدود",
    description:
      "شاليه بإطلالة مميزة داخل كمبوند متكامل الخدمات، مناسب لقضاء العطلات والاستثمار الموسمي في واحدة من أكثر مناطق مصر طلبًا.",
    amenities:
      "حمامات سباحة, Beach Club, أمن, مساحات خضراء, خدمات فندقية, منطقة تجارية",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 4,
    slug: "mostakbal-city-family-home",
    name: "وحدة عائلية في مستقبل سيتي",
    location: "مستقبل سيتي - شرق القاهرة",
    developer: "Mostakbal City",
    unitType: "شقة عائلية",
    area: "160 م²",
    price: "يبدأ من 4,000,000 جنيه",
    downPayment: "5%",
    installment: "حتى 9 سنوات",
    delivery: "2028",
    status: "متاحة للحجز",
    description:
      "وحدة واسعة بتقسيم عملي داخل مجتمع سكني جديد، قريبة من العاصمة الإدارية ومحاور شرق القاهرة، بخطط سداد مرنة.",
    amenities:
      "Clubhouse, مدارس, منطقة تجارية, أمن, جراج, لاندسكيب",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 5,
    slug: "new-capital-commercial-unit",
    name: "وحدة تجارية بالعاصمة الإدارية",
    location: "العاصمة الإدارية الجديدة",
    developer: "Capital Developers",
    unitType: "تجاري / إداري",
    area: "45 م²",
    price: "يبدأ من 1,850,000 جنيه",
    downPayment: "15%",
    installment: "حتى 6 سنوات",
    delivery: "2026",
    status: "فرصة استثمار",
    description:
      "وحدة تجارية بمساحة عملية داخل منطقة عالية الكثافة، مناسبة للشركات والأنشطة الخدمية مع توقعات نمو قوية.",
    amenities:
      "موقع حيوي, واجهات حديثة, مصاعد, إدارة وتشغيل, أمن, جراجات",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: 6,
    slug: "el-sheikh-zayed-villa-resale",
    name: "فيلا Resale في الشيخ زايد",
    location: "الشيخ زايد - غرب القاهرة",
    developer: "Zayed Communities",
    unitType: "فيلا",
    area: "320 م²",
    price: "تواصل لمعرفة السعر",
    downPayment: "كاش أو تمويل",
    installment: "حسب التعاقد",
    delivery: "استلام فوري",
    status: "Resale",
    description:
      "فيلا راقية بموقع مميز في الشيخ زايد، تشطيبات ممتازة ومساحات مناسبة للعائلات الباحثة عن الخصوصية والراحة.",
    amenities:
      "حديقة خاصة, جراج, أمن, قريبة من مولات, منطقة راقية, استلام فوري",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    featured: true,
    createdAt: new Date(),
  },
];

export function amenitiesList(project: Project) {
  return (project.amenities || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
