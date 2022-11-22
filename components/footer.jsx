import Image from "next/image";
import Link from "next/link";
import flags from "./flags.json";

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
      name: "gitlab",
      url: "https://gitlab.com/lagerfeuer",
      icon: "/icons/gitlab-svgrepo-com.svg",
    },
    {
      name: "mail",
      // url: "mailto:contact@deutz.dev",
      url: "/contact",
      icon: "/icons/mail-svgrepo-com.svg",
    },
  ];
  return (
    <footer className="font-footer text-center lg:text-left bg-gray-100 text-gray-600">
      <div className="flex justify-center items-center p-6 border-b border-gray-300">
        <div className="flex justify-center">
          {LINKS.map((e) => (
            <Link
              key={e.name}
              href={e.url}
              target={e.url.startsWith("/") ? "" : "_blank"}
              className="mr-6"
            >
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
      <div className="text-center p-3 bg-gray-200">
        Made with ❤️️ in {flags.AT.emoji} and {flags.US.emoji}.
      </div>
    </footer>
  );
}
