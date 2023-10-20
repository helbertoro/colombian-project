import { Layout } from "@/components/shared";
import { MoreInfo } from "./MoreInfo";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  return (
    <Layout>
      <div className="h-96 bg-neutral text-accent">Banner 1</div>
      <div className="container">
        <div>
          <h1 className="mt-8">GETTING IN TOUCH WITH THE COLOMBIAN PROJECT</h1>
          <p>
            We’re based in the sunny city of Cali, southwest Colombia. If you’re
            in the country and interested in one of our experiences, feel free
            to meet up with us in Cali to have a chat!
          </p>
        </div>
        <ContactForm />
        <MoreInfo />
      </div>
    </Layout>
  );
};
