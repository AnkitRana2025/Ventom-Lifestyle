import React from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
} from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
}) => (
  <div className="group relative h-[420px] w-full cursor-pointer overflow-hidden bg-stone-200">
    <img
      src={image}
      alt={title}
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

    <div className="absolute bottom-8 left-8">
      <h3 className="font-serif text-2xl font-light tracking-[0.15em] text-white uppercase">
        {title}
      </h3>

      <div className="mt-2 h-[1px] w-8 bg-white/80 transition-all duration-300 group-hover:w-16" />
    </div>
  </div>
);

const Home: React.FC = () => {
  const categories = [
    {
      title: "Shirts",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "T-Shirts",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Trousers",
      image:
        "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Outerwear",
      image:
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-stone-900 antialiased">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-stone-200/50 bg-[#FAF8F5]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

          {/* Navigation */}
          <nav className="hidden items-center space-x-8 text-xs font-semibold tracking-[0.15em] text-stone-700 uppercase md:flex">
            <a
              href="#men"
              className="transition-colors hover:text-stone-900"
            >
              Men
            </a>

            <a
              href="#women"
              className="transition-colors hover:text-stone-900"
            >
              Women
            </a>

            <a
              href="#new-arrivals"
              className="border-b border-stone-900 pb-0.5 text-stone-900"
            >
              New Arrivals
            </a>

            <a
              href="#collections"
              className="transition-colors hover:text-stone-900"
            >
              Collections
            </a>

            <a
              href="#sale"
              className="transition-colors hover:text-stone-900"
            >
              Sale
            </a>
          </nav>

          {/* Brand */}
          <div className="flex-1 text-center md:flex-initial">
            <h1 className="font-serif text-2xl font-light tracking-[0.3em] text-stone-900 uppercase">
              Velmont
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6 text-stone-800">
            <button
              aria-label="Search"
              className="transition-opacity hover:opacity-70"
            >
              <Search className="h-4 w-4 stroke-[1.5]" />
            </button>

            <button
              aria-label="Favorites"
              className="transition-opacity hover:opacity-70"
            >
              <Heart className="h-4 w-4 stroke-[1.5]" />
            </button>

            <button
              aria-label="Account"
              className="transition-opacity hover:opacity-70"
            >
              <User className="h-4 w-4 stroke-[1.5]" />
            </button>

            <button
              aria-label="Cart"
              className="relative transition-opacity hover:opacity-70"
            >
              <ShoppingBag className="h-4 w-4 stroke-[1.5]" />

              <span className="absolute -top-1.5 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-stone-900 text-[9px] text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Heritage Collection"
          className="h-full w-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-16 lg:px-24 lg:pb-24">
          <div className="max-w-xl">

            <span className="text-[10px] font-semibold tracking-[0.25em] text-white/80 uppercase">
              Autumn / Winter 2026
            </span>

            <h2 className="mt-3 font-serif text-4xl font-light leading-tight tracking-[0.08em] text-white uppercase lg:text-5xl">
              New Season:
              <br />
              Modern Heritage
            </h2>

            <p className="mt-4 text-xs font-light tracking-wide text-stone-200">
              Designed for those who move forward.
            </p>

            <div className="mt-8 flex items-center space-x-4">
              <a
                href="#shop-men"
                className="bg-black px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-stone-800"
              >
                Shop Men
              </a>

              <a
                href="#shop-women"
                className="border border-white/80 bg-white/10 px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all hover:bg-white hover:text-black"
              >
                Shop Women
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>
              <h4 className="font-serif text-lg tracking-[0.25em] text-white uppercase">
                Velmont
              </h4>

              <p className="mt-4 max-w-xs text-xs font-light leading-relaxed text-stone-400">
                Premium lifestyle essentials designed for modern heritage.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h5 className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">
                Shop
              </h5>

              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <a
                    href="#men"
                    className="transition-colors hover:text-white"
                  >
                    Men
                  </a>
                </li>

                <li>
                  <a
                    href="#women"
                    className="transition-colors hover:text-white"
                  >
                    Women
                  </a>
                </li>

                <li>
                  <a
                    href="#new"
                    className="transition-colors hover:text-white"
                  >
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h5 className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">
                Customer Care
              </h5>

              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="#shipping"
                    className="transition-colors hover:text-white"
                  >
                    Shipping & Returns
                  </a>
                </li>

                <li>
                  <a
                    href="#sizing"
                    className="transition-colors hover:text-white"
                  >
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h5 className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">
                Follow
              </h5>

              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <a
                    href="#instagram"
                    className="transition-colors hover:text-white"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    href="#twitter"
                    className="transition-colors hover:text-white"
                  >
                    Twitter
                  </a>
                </li>

                <li>
                  <a
                    href="#journal"
                    className="transition-colors hover:text-white"
                  >
                    Journal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-stone-800 pt-8 text-center sm:text-left">
            <p className="text-[10px] tracking-[0.15em] text-stone-500 uppercase">
              © 2026 VELMONT PREMIUM LIFESTYLE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;