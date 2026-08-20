import { site, whatsappMessage } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern real estate towers"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
      </div>

      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pt-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/20 px-4 py-2 text-sm font-semibold text-accent backdrop-blur-sm">
            ✨ EstateX | Real Estate Solutions
          </span>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            {site.shortName} <span className="gradient-text">Real Estate</span>
            <br /> Solutions
          </h1>

          <p className="mb-4 max-w-2xl text-xl leading-relaxed text-white/85">
            {site.description}
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-accent-light">
            {site.descriptionAr}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-accent/90 hover:shadow-xl"
            >
              تصفح المشروعات
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/20"
            >
              واتساب مباشر
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-full border border-white/25 px-8 py-4 text-lg font-bold text-white transition-all hover:border-accent hover:text-accent"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 md:gap-14">
            <div>
              <p className="mb-2 text-4xl font-bold gradient-text">Buy</p>
              <p className="text-sm uppercase tracking-wider text-white/70">شراء بثقة</p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-bold gradient-text">Sell</p>
              <p className="text-sm uppercase tracking-wider text-white/70">بيع وإعادة بيع</p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-bold gradient-text">Invest</p>
              <p className="text-sm uppercase tracking-wider text-white/70">استثمار عقاري</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
            <img
              src="/estatex-logo.svg"
              alt="EstateX logo"
              className="w-full rounded-[1.5rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/15 bg-primary/80 p-5 text-center backdrop-blur">
              <p className="text-sm font-semibold text-accent">{site.tagline}</p>
              <p className="mt-1 text-white/70">{site.followers} • {site.category}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
          <div className="h-3 w-1.5 animate-pulse rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
