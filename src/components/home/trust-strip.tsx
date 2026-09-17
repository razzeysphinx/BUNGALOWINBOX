const items = [
  {
    label: "ESTABLISHED",
    value: "1998",
    detail: "Montsweag Brook Corp.",
  },
  {
    label: "BUNGALOW IN A BOX",
    value: "SINCE 2007",
    detail: "Precision structural system",
  },
  {
    label: "TRADITIONAL",
    value: "TIMBER FRAME",
    detail: "Mortise & tenon joinery",
  },
  {
    label: "DESIGNED & FABRICATED",
    value: "IN MAINE",
    detail: "Woolwich workshop",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-[#D9D5CB] bg-[#F4F1E9]">
      <div className="container grid grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={[
              "px-4 py-8 sm:px-6 md:py-10",
              index !== 0 ? "border-l border-[#D9D5CB]" : "",
            ].join(" ")}
          >
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#98704C]">
              {item.label}
            </div>

            <div className="mt-2 font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-medium text-[#14241B]">
              {item.value}
            </div>

            <div className="mt-1 text-xs text-[#6D716A]">
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
