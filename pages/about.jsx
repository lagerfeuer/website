import Link from "next/link";
import Pill from "../components/pill";

export default function About() {
  const KEYWORDS = [
    "Linux",
    "AWS",
    "Terraform",
    "Jenkins",
    "Python",
    "Node.js",
    "Ruby",
  ];
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 ">
        <div className="grid md:grid-cols-1 gap-x-6 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <h4 className="font-body text-xl mb-4">Hi, my name is</h4>
            <h1 className="text-4xl font-bold mb-4">Lukas Deutz</h1>
            <p className="leading-8 font-body text-xl">
              Born and raised in Austria, I moved to Atlanta, GA in 2020. I
              currently work as a{" "}
              <strong>DevOps/Infrastructure Engineer</strong>
              for
              <Link
                href="https://www.roomstogo.com"
                target="_blank"
                className="ml-2 text-blue-500 font-bold"
              >
                Rooms To Go
              </Link>
              . I have professional experience with:{" "}
              {KEYWORDS.map((kw, idx) => (
                <Pill className="m-1">{kw}</Pill>
              ))}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
