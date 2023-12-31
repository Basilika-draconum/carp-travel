import TitleSection from "@/components/TitleSection/TitleSection";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import ContactForm from "@/components/ContactForm/ContactForm";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="section-main w-full bg-contact-bg bg-no-repeat bg-cover bg-center"
    >
      <div className="container-main">
        <TitleSection
          title1="contact"
          title2="us"
          className="mb-9 tablet:tracking-[-3px] desktop:mb-[81px]"
        />
        <div className="desktop:flex desktop:gap-[110px] desktop:justify-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
