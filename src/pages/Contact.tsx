import Button from "../components/ui/Button";
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Label from '../components/ui/Label';

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
          <Label>Your Name</Label>
          <Input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div>
          <Label>Your Email</Label>
          <Input type="email" id="email" placeholder="name@domain.com" required />
        </div>
        <div>
          <Label>Your Message</Label>
          <Textarea id="message" placeholder="Your message..." />
        </div>
        <div className="grid place-items-center">
          <Button variant="primary" size="medium">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
