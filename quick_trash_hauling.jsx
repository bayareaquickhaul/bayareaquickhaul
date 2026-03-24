export default function BayAreaQuickHaulWebsite() {
  const services = [
    { title: "Junk Removal", desc: "Furniture, garage cleanouts, move-out junk, yard debris, and general hauling." },
    { title: "Furniture Pickup", desc: "Single-item and bulky-item pickup for couches, mattresses, dressers, and more." },
    { title: "Moving Help", desc: "Loading, unloading, and light moving help for apartments, homes, and storage units." },
    { title: "Same-Day Quotes", desc: "Text photos for a fast quote and quick scheduling." },
  ];

  const highlights = [
    "Fast response times",
    "Same-day availability",
    "Fair, upfront pricing",
    "Friendly local service",
    "Donation and recycling whenever possible",
    "Furniture and bulky-item specialists",
  ];

  const steps = [
    "Text photos of what needs to go",
    "Get a fast quote",
    "Choose a pickup time",
    "We haul it away",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
                Local junk removal and hauling
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Bay Area Quick Haul
                <div className="mt-2 text-sm text-white/70">bayareaquickhaul.com</div>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/80">
                Bay Area junk removal and hauling with fast quotes, same-day availability, and simple pickup.
                Based in Castro Valley, we serve the entire Bay Area including Oakland, San Leandro, Hayward, Fremont, and nearby cities.
                We help with furniture pickup, garage cleanouts, move-out junk, and bulky-item hauling.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="sms:15105421227"
                  className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Text Now
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View Services
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm text-white/80 md:grid-cols-3">
                <div className="rounded-2xl border border-white/15 p-4">Same-day service</div>
                <div className="rounded-2xl border border-white/15 p-4">Upfront pricing</div>
                <div className="rounded-2xl border border-white/15 p-4">Fast response</div>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-3xl bg-white p-6 text-slate-900">
                <h2 className="text-2xl font-bold">Why customers choose us</h2>
                <div className="mt-6 grid gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600">
                  Tip: Replace this section with customer reviews, before-and-after photos, or service area info.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">What we help with</h2>
          <p className="mt-4 text-slate-600">
            A simple local hauling business works best when it solves multiple problems. This layout helps you position the business as more than just junk removal.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Simple, upfront pricing</h2>
          <p className="mt-4 text-slate-600">Final price depends on volume and items, but here are typical starting prices.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Single Item", price: "$60+", desc: "Mattress, chair, small furniture" },
            { title: "Couch Pickup", price: "$80–$120", desc: "Standard couch or loveseat" },
            { title: "Half Load", price: "$150–$300", desc: "Small cleanouts, a few bulky items" },
            { title: "Full Load", price: "$400–$700", desc: "Garage cleanouts, move-outs" },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-2xl font-bold text-slate-950">{item.price}</p>
              <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-sm text-slate-600">
          *Prices may vary based on weight, location, and dump fees. Text photos for an exact quote.
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How it works</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Easy from start to finish</h2>
              <div className="mt-8 space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="quote" className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Free quote</p>
              <h2 className="mt-3 text-3xl font-bold">Get started today</h2>
              <p className="mt-4 text-slate-600">
                Call or text for a quick quote. Fast replies and simple scheduling help get your junk gone without the hassle.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="mt-1 text-lg font-semibold">(510) 542-1227</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 text-lg font-semibold">bayareaquickhaul@gmail.com</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Service Area</p>
                  <p className="mt-1 text-lg font-semibold">Entire Bay Area (based in Castro Valley)</p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-white/70">Suggested call to action</p>
                <p className="mt-2 text-lg font-semibold">Text photos to (510) 542-1227 for a quick quote and same-day availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white md:px-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Stand out in a crowded market</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Position this as fast, local, and easy to book</h2>
              <p className="mt-4 max-w-xl text-white/75">
                Customers usually choose the business that answers first, gives a simple quote, and feels reliable. Use this page to look more professional than the average local competitor.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                "Same-day pickup available",
                "Text photos for a quote",
                "Furniture and bulky-item pickup",
                "Donation and recycling whenever possible",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
