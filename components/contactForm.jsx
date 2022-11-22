import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY);
  if (state.succeeded) {
    return <p className="my-6 text-center text-xl">Thanks for the message!</p>;
  }

  return (
    // see https://flowbite.com/blocks/marketing/contact/
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact me!
        </h2>
        {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p> */}
        <form onSubmit={handleSubmit} method="POST" className="space-y-8">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5"
              placeholder="you@email.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-300 focus:border-blue-300"
              placeholder="Hi there"
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-300 focus:border-blue-300"
              placeholder="Leave a comment..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium rounded-lg text-centerrounded-lg bg-blue-300 w-full lg:w-fit hover:text-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            disabled={state.submitting}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
