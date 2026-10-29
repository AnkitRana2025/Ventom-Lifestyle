import React from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

const Navbar: React.FC = () => {
  const navItems = [
    "Men",
    "Women",
    "New Arrivals",
    "Collections",
    "Sale",
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/70 bg-[#FAF8F5]/95 backdrop-blur-md">

      {/* ================= TOP BAR ================= */}
      <div className="border-b border-stone-200/60">
        <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">

          {/* Logo */}
          <div className="shrink-0">
            <h1 className="font-serif text-xl font-light tracking-[0.28em] text-stone-900 uppercase sm:text-2xl">
              Velmont
            </h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden w-full max-w-sm lg:block">
            <div className="flex items-center border-b border-stone-300 pb-1.5">
              <Search className="mr-3 h-4 w-4 stroke-[1.5] text-stone-500" />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-xs tracking-wide text-stone-800 placeholder:text-stone-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-stone-800 sm:gap-5">

            {/* Mobile Search */}
            <button
              aria-label="Search"
              className="transition-opacity hover:opacity-60 lg:hidden"
            >
              <Search className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              className="transition-opacity hover:opacity-60"
            >
              <Heart className="h-[18px] w-[18px] stroke-[1.5]" />
            </button>

            {/* Account */}
            <button
              aria-label="Account"
              className="group flex items-center gap-1 transition-opacity hover:opacity-60"
            >
              <User className="h-[18px] w-[18px] stroke-[1.5]" />

              <span className="hidden text-[10px] font-medium tracking-[0.12em] uppercase sm:block">
                Account
              </span>

              <ChevronDown className="hidden h-3 w-3 stroke-[1.5] sm:block" />
            </button>

            {/* Bag */}
            <button
              aria-label="Shopping Bag"
              className="relative transition-opacity hover:opacity-60"
            >
              <ShoppingBag className="h-[18px] w-[18px] stroke-[1.5]" />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-stone-900 text-[9px] text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY NAVIGATION ================= */}
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-12">

        <nav className="flex h-[48px] items-center justify-start gap-7 overflow-x-auto px-4 scrollbar-none sm:justify-center sm:gap-8 sm:px-0">

          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`relative shrink-0 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase transition-colors ${
                index === 2
                  ? "text-stone-900"
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              {item}

              {index === 2 && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-stone-900" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;