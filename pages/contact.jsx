import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Spinner({ active }) {
  return (
    active && (
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )
  );
}

function ContactForm() {
  const [clickedSend, setClickedSend] = useState(false);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY);
  if (state.succeeded) {
    return <p className="my-6 text-center text-xl">Thanks for the message!</p>;
  }

  return (
    // see https://flowbite.com/blocks/marketing/contact/
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <form onSubmit={handleSubmit} method="POST" className="space-y-8">
          <div>
            <label for="email" className="block mb-2 text-md font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
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
            <label for="subject" className="block mb-2 text-md font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Just saying hi..."
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-md font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
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
            className="py-3 px-5 inline-flex items-center text-sm font-medium rounded-lg text-centerrounded-lg bg-blue-600 text-white w-full lg:w-fit hover:shadow-lg transition hover:ease-in-out hover:scale-110"
            disabled={state.submitting}
            onClick={() => setClickedSend(true)}
          >
            <Spinner active={clickedSend} />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="container my-2 px-6 mx-auto">
      <h2 className="mt-8 lg:text-4xl text-3xl font-bold text-center text-gray-900">
        Let&apos;s talk!
      </h2>
      <ContactForm />
    </div>
  );
}
