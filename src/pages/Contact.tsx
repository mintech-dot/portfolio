import Button from "../components/ui/Button";
const Contact = () => {
  return (
    <section className="bg-white py-8 lg:py-16 px-8 mt-8 mx-4 md:mx-auto max-w-screen-md border border-light/20 shadow-lg">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-dark mb-4">
        Contact Us
      </h2>
      <p className="text-center text-dark mb-8 lg:mb-16">
        Feel free to get in touch with us by filling out the form below.
      </p>
      <form action="#" className="space-y-8 ">
        <div>
          <label className="block mb-2 text-sm font-medium text-dark">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-dark">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@domain.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-dark">
            Your Message
          </label>
          <textarea
            id="message"
            className="shadow-sm bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Your message..."
          ></textarea>
        </div>
        <div className="grid place-items-center ">
          <Button variant="primary" size="medium">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
