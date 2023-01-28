import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const { asPath } = useRouter();
  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    // {
    //   name: "Projects",
    //   href: "/projects",
    // },
    {
      name: "Contact",
      href: "/contact",
    },
    // {
    //   name: "Blog",
    //   href: "/blog",
    //   // href: "https://blog.deutz.dev",
    // },
  ];

  return (
    <nav className="bg-white shadow-lg font-nav">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                {/* <img src="/logo/logo.svg" alt="Logo" className="h-8 w-8 mr-2" /> */}
                <span className="font-semibold text-gray-500 text-2xl">
                  Lukas Deutz
                </span>
              </Link>
            </div>
            <div className="text-lg hidden md:flex items-center justify-center space-x-1">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`text-xl py-4 px-4 text-${
                    page.href === asPath ? "teal" : "gray"
                  }-500 ${
                    page.href === asPath
                      ? ""
                      : "transition duration-150 ease-in-out"
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none"
              onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}
            >
              <svg
                className="w-8 h-8 text-gray-500 hover:text-teal-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${mobileNavbarOpen ? "" : "hidden"}`}>
        <ul className="">
          {pages.map((page) => (
            <li>
              <Link
                key={page.href}
                href={page.href}
                className={`block text-lg px-2 py-4 ${
                  page.href === asPath
                    ? "text-white bg-teal-500"
                    : "hover:bg-teal-500 hover:text-white transition duration-150 ease-in-out"
                }`}
                onClick={() => setMobileNavbarOpen(false)}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
