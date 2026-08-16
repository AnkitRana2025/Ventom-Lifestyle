import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Category {
  title: string;
  image: string;
  itemCount?: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Shirts",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
    itemCount: "24 Items",
  },
  {
    title: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    itemCount: "18 Items",
  },
  {
    title: "Trousers",
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=800",
    itemCount: "15 Items",
  },
  {
    title: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
    itemCount: "12 Items",
  },
];

const CategoryCard: React.FC<Category> = ({ title, image, itemCount }) => (
  <a
    href={`#${title.toLowerCase()}`}
    className="group relative flex h-[380px] w-full flex-col justify-end overflow-hidden bg-stone-200 p-6 sm:h-[420px] lg:h-[460px] focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
  >
    {/* Card Image */}
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />

    {/* Gradient Scrim for Contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

    {/* Content Overlay */}
    <div className="relative z-10 flex flex-col justify-end">
      {itemCount && (
        <span className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
          {itemCount}
        </span>
      )}
      <div className="mt-1 flex items-center justify-between">
        <h3 className="font-serif text-2xl font-light tracking-[0.1em] text-white uppercase sm:text-3xl">
          {title}
        </h3>
        <span className="text-white opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
          &rarr;
        </span>
      </div>

      <div className="mt-3 h-px w-8 bg-white/60 transition-all duration-300 ease-out group-hover:w-full group-hover:bg-white" />
    </div>
  </a>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-stone-900 antialiased selection:bg-stone-900 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full px-0 sm:px-4 lg:px-8">
        <div className="relative mx-auto h-[600px] w-full max-w-[1600px] overflow-hidden sm:h-[660px] lg:h-[720px] xl:h-[780px]">
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=85&w=2400"
              alt="Modern Heritage Collection"
              fetchPriority="high"
              className="h-full w-full object-cover object-center sm:object-[center_35%] lg:object-[center_30%]"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex h-full items-end px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20 xl:px-24 xl:pb-24">
            <div className="w-full max-w-xl">
              {/* Eyebrow */}
              <span className="inline-block text-[10px] font-semibold tracking-[0.25em] text-white/80 uppercase sm:text-xs">
                Autumn / Winter 2026
              </span>

              {/* Heading */}
              <h1 className="mt-3 font-serif text-4xl font-light leading-[1.08] tracking-[0.04em] text-white uppercase sm:text-5xl lg:text-6xl xl:text-7xl">
                New Season:
                <br />
                <span className="italic font-normal">Modern</span> Heritage
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-sm text-xs font-light leading-relaxed tracking-wide text-stone-200 sm:text-sm">
                Tailored performance and timeless silhouettes designed for those who move forward.
              </p>

              {/* CTA Group */}
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
                <a
                  href="#shop-men"
                  className="inline-flex min-h-12 items-center justify-center bg-white px-8 text-xs font-semibold tracking-[0.2em] text-stone-900 uppercase transition-all duration-300 hover:bg-stone-200 active:scale-[0.98]"
                >
                  Shop Men
                </a>

                <a
                  href="#shop-women"
                  className="inline-flex min-h-12 items-center justify-center border border-white/80 bg-black/20 px-8 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-stone-900 active:scale-[0.98]"
                >
                  Shop Women
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Section Heading */}
        <div className="mb-10 flex items-end justify-between border-b border-stone-200 pb-5 sm:mb-12">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-500 uppercase">
              Explore
            </span>
            <h2 className="mt-1 font-serif text-3xl font-light tracking-[0.06em] text-stone-900 uppercase sm:text-4xl">
              Collections
            </h2>
          </div>

          <a
            href="#collections"
            className="hidden items-center gap-2 border-b border-stone-900 pb-1 text-xs font-semibold tracking-[0.15em] text-stone-900 uppercase transition-all duration-300 hover:opacity-60 sm:inline-flex"
          >
            <span>View All</span>
            <span className="text-sm">&rarr;</span>
          </a>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              itemCount={category.itemCount}
            />
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center sm:hidden">
          <a
            href="#collections"
            className="inline-block border-b border-stone-900 pb-1 text-xs font-semibold tracking-[0.15em] text-stone-900 uppercase"
          >
            View All Collections &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;