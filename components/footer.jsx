import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const ICON_SIZE = 24;
  const LINKS = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/lukas-deutz/",
      icon: "/icons/linkedin.svg",
    },
    {
      name: "github",
      url: "https://github.com/lagerfeuer",
      icon: "/icons/github-dark-svgrepo-com.svg",
    },
    {
      name: "mail",
      url: "mailto:contact@deutz.dev",
      icon: "/icons/mail-svgrepo-com.svg",
    },
  ];
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <div className="flex justify-center items-center p-6 border-b border-gray-300">
        <div className="flex justify-center">
          {LINKS.map((e) => (
            <Link key={e.name} href={e.url} target="_blank" className="mr-6">
              <span className="w-6">
                <Image
                  src={e.icon}
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                  alt={`Icon for ${e.name}`}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2021 Copyright</span>
        <a
          className="text-gray-600 font-semibold ml-4"
          href="https://tailwind-elements.com/"
        >
          Made with {"<3"} in AUT
        </a>
      </div>
    </footer>
  );
}
