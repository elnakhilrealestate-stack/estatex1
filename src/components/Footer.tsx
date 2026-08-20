import { site, whatsappMessage } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/estatex-logo.svg"
                alt={`${site.name} logo`}
                className="h-14 w-14 rounded-2xl object-cover shadow-lg"
              />
              <div>
                <h1 className="text-xl font-extrabold">EstateX</h1>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {site.tagline}
                </p>
              </div>
            </div>
            <p className="mb-3 leading-relaxed text-white/65">{site.description}</p>
            <p className="mb-6 leading-relaxed text-white/55">{site.descriptionAr}</p>
            <div className="flex gap-3">
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition-colors hover:bg-blue-700"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-white transition-colors hover:bg-green-600"
                aria-label="WhatsApp"
              >
                ☎
              </a>
              <a
                href={site.messengerUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500 text-white transition-colors hover:bg-sky-600"
                aria-label="Messenger"
              >
                💬
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                ["الرئيسية", "/#home"],
                ["المشروعات", "/#projects"],
                ["بيع وحدتك", "/#selling"],
                ["المناطق والمطورون", "/#partners"],
                ["نصائح عقارية", "/#courses"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/60 transition-colors hover:text-accent">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">خدمات EstateX</h3>
            <ul className="space-y-3 text-white/60">
              <li>شراء وحدات سكنية</li>
              <li>بيع وإعادة بيع Resale</li>
              <li>فرص استثمار عقاري</li>
              <li>تسعير وتسويق وحدتك</li>
              <li>مقارنة خطط السداد</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-accent">📍</span>
                <span className="text-white/60">{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">📞</span>
                <a href={`tel:${site.phoneTel}`} className="text-white/60 transition-colors hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🟢</span>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-white/60 transition-colors hover:text-accent">
                  واتساب مباشر
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🔵</span>
                <a href={site.facebookUrl} target="_blank" rel="noreferrer" className="text-white/60 transition-colors hover:text-accent">
                  EstateX Real Estate Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              © {currentYear} {site.name}. All rights reserved.
            </p>
            <p className="text-sm text-white/40">{site.category} • {site.followers} • {site.following}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
