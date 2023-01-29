import ReactMarkdown from "react-markdown";
import MyLink from "../components/link";
import AboutMarkdown from "../content/about.md";

export default function About({ content }) {
  return (
    <div className="container my-12 px-12 md:w-2/3 lg:w-2/3 mx-auto">
      <section className="mb-16 text-gray-800 ">
        <div className="grid md:grid-cols-1 gap-x-6 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Welcome to my website!</h1>
            <article className="font-body prose prose-xl">
              <ReactMarkdown components={{ a: MyLink }}>
                {AboutMarkdown}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
