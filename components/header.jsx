// import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  // TODO: add hamburger menu on mobile view
  // const [navbarOpen, setNavbarOpen] = useState(false);
  const { asPath } = useRouter();
  const PAGES = [
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
    <nav className="flex justify-center items-center px-4 bg-white shadow text-grey-darkest">
      <div className="flex flex-col justify-center text-center sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        {PAGES.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="font-nav text-xl no-underline hover:text-blue-dark active:underline active:text-bold m-4" // TODO: active and hover not working
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
