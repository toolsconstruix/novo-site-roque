import { useState } from "react";

export const Gallery = () => {
  const images = [
    "/gallery-1.webp",
    "/gallery-2.webp",
    "/gallery-3.webp",
    "/gallery-4.webp",
    "/gallery-5.webp",
    "/gallery-6.webp",
    "/gallery-7.webp",
    "/gallery-8.webp",
    "/gallery-9.webp",
    "/gallery-10.webp",
    "/gallery-11.webp",
    "/gallery-12.webp",
  ];

  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Project Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Recent work highlights across carpentry, painting, landscaping and remodeling.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow hover:shadow-lg transition"
              onClick={() => setActive(src)}
            >
              <img
                src={src}
                alt="Project image"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const current = e.currentTarget.src;
                  if (current.endsWith(".webp")) {
                    e.currentTarget.src = current.replace(".webp", ".jpg");
                  } else {
                    e.currentTarget.src = "/placeholder.svg";
                  }
                }}
              />
            </button>
          ))}
        </div>

        {active && (
          <div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <img
              src={active}
              alt="Preview"
              className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
              onError={(e) => {
                const current = e.currentTarget.src;
                if (current.endsWith(".webp")) {
                  e.currentTarget.src = current.replace(".webp", ".jpg");
                } else {
                  e.currentTarget.src = "/placeholder.svg";
                }
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
