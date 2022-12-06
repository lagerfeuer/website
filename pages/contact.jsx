import ContactForm from "../components/contactForm";

export default function Contact() {
  return (
    <div className="container my-2 px-6 mx-auto">
      <h2 className="mt-8 lg:text-4xl text-3xl font-bold text-center text-gray-900">
        Let's talk!
      </h2>
      <ContactForm />
    </div>
  );
}
