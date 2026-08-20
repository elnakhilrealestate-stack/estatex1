import { site, whatsappMessage } from "@/lib/site";

export function SellingSection() {
  const features = [
    {
      title: "تسعير واقعي للوحدة",
      description:
        "نساعدك في تحديد أفضل سعر للبيع أو إعادة البيع بناءً على الموقع والمساحة وحركة السوق.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "تسويق سريع على القنوات المناسبة",
      description:
        "نجهز الإعلان بتفاصيل واضحة وصور مناسبة ونوصله للمشترين الجادين عبر فيسبوك وواتساب.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "شراء • بيع • استثمار",
      description:
        "خدمة متكاملة للمشتري والبائع والمستثمر من أول استفسار حتى إتمام الاتفاق بثقة.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="selling" className="bg-gradient-to-br from-primary via-primary-light to-primary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <span className="font-semibold text-accent">Sell & Resale Service</span>
            </div>

            <h2 className="mb-6 text-4xl font-extrabold text-white md:text-5xl">
              بيع وحدتك أو أعد بيعها <span className="gradient-text">مع EstateX</span>
            </h2>

            <p className="mb-4 text-lg leading-relaxed text-white/75">
              {site.descriptionAr}
            </p>
            <p className="mb-10 text-white/60">
              رقم التواصل المباشر: <span className="font-bold text-accent">{site.phoneDisplay}</span>
            </p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-accent/90 hover:shadow-xl"
            >
              ابعت تفاصيل وحدتك واتساب
            </a>
          </div>

          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/5 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent transition-all group-hover:bg-accent group-hover:text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-white/65">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
