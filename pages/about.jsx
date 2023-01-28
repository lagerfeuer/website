import MyLink from "../components/link";

function Keyword({ children, italic = false }) {
  return (
    <span className={`${italic ? "italic" : ""} text-purple-600`}>
      {" "}
      {children}
    </span>
  );
}

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
    <div className="container my-12 px-12 md:w-2/3 lg:w-2/3 mx-auto">
      <section className="mb-16 text-gray-800 ">
        <div className="grid md:grid-cols-1 gap-x-6 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <h4 className="font-body text-xl mb-4">Hi, my name is</h4>
            <h1 className="text-4xl font-bold mb-4">Lukas Deutz</h1>
            <div className="leading-8 font-body text-xl py-4">
              <p>
                Born and raised in Austria, I moved to Atlanta, GA in 2020. I
                currently work as a <strong>DevOps Engineer</strong> for{" "}
                <MyLink href="https://www.roomstogo.com">Rooms To Go</MyLink>.
              </p>
              <p>
                I have professional experience with:<Keyword>Linux</Keyword>,
                <Keyword>AWS</Keyword>,<Keyword>Terraform</Keyword>,
                <Keyword>Jenkins</Keyword>,<Keyword>Python</Keyword>,
                <Keyword>Node.js</Keyword>, and
                <Keyword>Ruby</Keyword>. But I enjoy learning new programming
                languages/frameworks/things, such as React (this website) or
                Crystal. When time permits, I try to give back to the
                open-source community and I also contribute to the{" "}
                <MyLink href="https://aur.archlinux.org/packages?K=lagerfeuer&SeB=m">
                  Arch User Repository
                </MyLink>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
