import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-stone-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        
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

            <ul className="mt-4 space-y-3 text-xs">
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
                  href="#new-arrivals"
                  className="transition-colors hover:text-white"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#collections"
                  className="transition-colors hover:text-white"
                >
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h5 className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">
              Customer Care
            </h5>

            <ul className="mt-4 space-y-3 text-xs">
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

              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-white"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h5 className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">
              Follow
            </h5>

            <ul className="mt-4 space-y-3 text-xs">
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

        {/* Bottom */}
        <div className="mt-16 border-t border-stone-800 pt-8">
          <p className="text-center text-[10px] tracking-[0.15em] text-stone-500 uppercase sm:text-left">
            © 2026 VELMONT PREMIUM LIFESTYLE. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;