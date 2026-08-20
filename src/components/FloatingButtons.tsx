import { site, whatsappMessage } from "@/lib/site";

export function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

  const buttons = [
    {
      href: `tel:${site.phoneTel}`,
      label: "اتصال مباشر",
      icon: "📞",
      className: "bg-accent hover:bg-accent/90",
    },
    {
      href: whatsappUrl,
      label: "واتساب",
      icon: "🟢",
      className: "bg-green-500 hover:bg-green-600",
      external: true,
    },
    {
      href: site.facebookUrl,
      label: "فيسبوك",
      icon: "f",
      className: "bg-blue-600 hover:bg-blue-700",
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col gap-3 sm:right-6">
      {buttons.map((button) => (
        <a
          key={button.label}
          href={button.href}
          target={button.external ? "_blank" : undefined}
          rel={button.external ? "noreferrer" : undefined}
          className={`group flex items-center gap-3 rounded-full px-4 py-3 text-white shadow-2xl transition-all hover:scale-105 ${button.className}`}
          aria-label={button.label}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-lg font-extrabold">
            {button.icon}
          </span>
          <span className="hidden text-sm font-bold sm:block">{button.label}</span>
        </a>
      ))}
    </div>
  );
}
