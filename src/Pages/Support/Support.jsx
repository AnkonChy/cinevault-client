import React from "react";

const Support = () => {
  return (
    <div className="support-page container mx-auto p-6 mt-14">
      <h1 className="text-3xl font-bold mb-6">Support</h1>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:support@cinevault.com"
            className="text-blue-600 underline"
          >
            support@cinevault.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+1234567890" className="text-blue-600 underline">
            +123-456-7890
          </a>
        </p>
        <p>
          Follow us:
          <a
            href="https://twitter.com/cinevault"
            className="text-blue-600 ml-2 underline"
          >
            Twitter
          </a>
          ,
          <a
            href="https://facebook.com/cinevault"
            className="text-blue-600 ml-2 underline"
          >
            Facebook
          </a>
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <ul className="list-disc pl-5">
          <li>How do I create an account?</li>
          <li>How can I add movies to my favorites?</li>
          <li>How do I report an issue with the platform?</li>
        </ul>
      </section>

      {/* Support Ticket Form */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Submit a Support Ticket</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Describe your issue"
            className="border p-2 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Feedback Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
        <p>We’d love to hear from you! Share your thoughts about CineVault.</p>
      </section>
    </div>
  );
};

export default Support;
